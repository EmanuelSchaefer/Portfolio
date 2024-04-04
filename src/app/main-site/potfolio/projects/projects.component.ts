import { Component, Input, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });

    const projectsElement = this.el.nativeElement.querySelector('#divLeftRight');
    observer.observe(projectsElement);
  }

  @Input() projectPicture?: string;
  @Input() projectName?: string;
  @Input() projectLanguages?: string;
  @Input() projectDescription?: string;
  @Input() projectLive?: string;
  @Input() projectGit?: string;
  @Input() index?: number;

  isReverse(): boolean {
    return Boolean(this.index && this.index % 2 !== 0);
  }
}