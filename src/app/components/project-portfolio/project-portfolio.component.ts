import { Component } from '@angular/core';
import { StackTechComponent } from '../stack-tech/stack-tech.component';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-project-portfolio',
  standalone: true,
  imports: [StackTechComponent, CarouselComponent],
  templateUrl: './project-portfolio.component.html',
  styleUrl: './project-portfolio.component.scss'
})
export class ProjectPortfolioComponent {
  urlImagesSmartShell = [
    '/assets/project/smart-shell/1.jpg',
    '/assets/project/smart-shell/2.jpg',
    '/assets/project/smart-shell/3.jpg',
    '/assets/project/smart-shell/4.jpg',
    '/assets/project/smart-shell/5.jpg'
  ];


  urlImagesProLearnTracker = [
    '/assets/project/pro-learn-tracker/6.jpg',
    '/assets/project/pro-learn-tracker/7.jpg'
  ];
}
