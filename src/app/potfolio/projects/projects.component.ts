import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  @Input() projectPicture?: string;
  @Input() projectName?: string;
  @Input() projectLanguages?: string;
  @Input() projectDescription?: string;
  @Input() projectLive?: string;
  @Input() projectGit?: string;
  @Input() index?: number;
}
