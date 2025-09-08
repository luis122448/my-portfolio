import { Component } from '@angular/core';
import { StackTechComponent } from '../stack-tech/stack-tech.component';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [StackTechComponent],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {
  downloadCV() {
    const rute = './assets/pdf/CV-LuisAntonioCalvoQuispe.pdf';
    const link = document.createElement('a');
    link.href = rute;
    link.download = 'CV-LuisAntonioCalvoQuispe.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
