import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { PresentationComponent } from '../../components/presentation/presentation.component';
import { ProjectPortfolioComponent } from '../../components/project-portfolio/project-portfolio.component';
import { WorkExperienceComponent } from '../../components/work-experience/work-experience.component';
import { AcademyTrainingComponent } from '../../components/academy-training/academy-training.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    PresentationComponent,
    ProjectPortfolioComponent,
    WorkExperienceComponent,
    AcademyTrainingComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
