# Etapa 1: Construir la aplicación Angular
FROM node:lts AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# El comando 'ng add' ya configuró el script 'build' para que construya para SSR
RUN npm run build

# Etapa 2: Preparar el entorno de producción
FROM node:lts AS production
WORKDIR /app
# Copiar solo las dependencias de producción
COPY --from=build /app/package*.json ./
RUN npm ci --omit=dev
# Copiar los artefactos de la build
COPY --from=build /app/dist ./dist

# Exponer el puerto que usa el servidor de Angular Universal (por defecto es 4000)
EXPOSE 4000

# Comando para iniciar el servidor
CMD [ "node", "dist/my-portfolio/server/server.mjs" ]
