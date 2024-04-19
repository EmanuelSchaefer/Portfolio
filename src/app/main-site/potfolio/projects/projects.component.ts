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

  /**
   * Initializes the component with an element reference injector.
   * @param el Reference to the element of the component.
   */
  constructor(private el: ElementRef) { }

  /**
   * Sets an observer on the project item to control animations upon visibility.
   */
  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
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

  /**
   * Determines whether the project layout should be reversed based on the index number.
   * @returns {boolean} True if the index is odd.
   */
  isReverse(): boolean {
    return Boolean(this.index && this.index % 2 !== 0);
  }
}