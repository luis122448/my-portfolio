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
    '/assets/project/smart-shell/1.webp',
    '/assets/project/smart-shell/2.webp',
    '/assets/project/smart-shell/3.webp',
    '/assets/project/smart-shell/4.webp',
    '/assets/project/smart-shell/5.webp'
  ];

  urlImagesProLearnTracker = [
    '/assets/project/pro-learn-tracker/6.webp',
    '/assets/project/pro-learn-tracker/7.webp'
  ];

  urlSqlReportDashboard = [
    '/assets/project/sql-report-dashboard/8.webp',
  ];

  urlMigrateToOracle = [
    '/assets/project/migrate-to-oracle/9.webp',
  ];
}
