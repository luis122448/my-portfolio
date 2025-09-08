#!/bin/bash
# Description: Build and deploy application Docker image to Docker Hub, with automatic versioning and Git tagging.

# --- Configuration ---
DOCKER_USERNAME="luis122448"
IMAGE_NAME="my-portfolio"
DOCKERFILE_PATH="." # Path to the directory containing the Dockerfile

# --- Functions ---
error_exit() {
    echo "ERROR: $1" >&2
    exit 1
}

# --- Pre-checks ---
git rev-parse --is-inside-work-tree > /dev/null 2>&1 || error_exit "Not inside a Git repository."
docker info > /dev/null 2>&1 || error_exit "Docker is not running or user lacks permissions."
docker info | grep "Username: $DOCKER_USERNAME" > /dev/null || \
    error_exit "Not logged in to Docker Hub as $DOCKER_USERNAME. Please run 'docker login' manually."

# --- Dynamic Versioning ---
if [ "$1" == "-v" ]; then
  if [ -n "$2" ]; then
    IMAGE_TAG="$2"
    echo "Using provided version: ${IMAGE_TAG}"
  else
    error_exit "No version specified for -v flag. Usage: ./build-release.sh -v <version>"
  fi
else
  # Auto-increment version
  echo "Getting latest Git tag..."
  LATEST_TAG=$(git describe --tags --abbrev=0 2>/dev/null)
  if [ -z "$LATEST_TAG" ]; then
    IMAGE_TAG="v1.0.0"
    echo "No Git tags found. Starting with initial version: ${IMAGE_TAG}"
  else
    echo "Latest tag: ${LATEST_TAG}"
    IMAGE_TAG=$(echo "${LATEST_TAG}" | awk -F. -v OFS=. '{$NF = $NF + 1;} 1')
    echo "New version: ${IMAGE_TAG}"
  fi
fi

FULL_IMAGE_NAME="${DOCKER_USERNAME}/${IMAGE_NAME}:${IMAGE_TAG}"

# --- Docker Buildx Setup ---
docker buildx inspect mybuilder > /dev/null 2>&1 || docker buildx create --name mybuilder --bootstrap || \
    error_exit "Failed to create Buildx builder."
docker buildx use mybuilder || error_exit "Failed to use Buildx builder 'mybuilder'."

# --- Build and Push Image ---
echo "Building and pushing ${FULL_IMAGE_NAME} for linux/amd64 and linux/arm64..."
docker buildx build \
  --platform linux/amd64,linux/arm64 \
  -t "${FULL_IMAGE_NAME}" \
  --push \
  "${DOCKERFILE_PATH}" || error_exit "Failed to build and push Docker image."

# --- Git Tagging ---
echo "Tagging release ${IMAGE_TAG} in Git..."
git tag -a "${IMAGE_TAG}" -m "Release ${IMAGE_TAG}" || error_exit "Failed to create Git tag."
git push origin "${IMAGE_TAG}" || error_exit "Failed to push Git tag to remote."

echo "Image ${FULL_IMAGE_NAME} successfully deployed to Docker Hub and tagged in Git!"