import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent implements AfterViewInit {

  /**
   * Constructor that injects ElementRef and TranslationService.
   * @param el Reference to the element of the component.
   * @param translationService Manages language settings.
   */
  constructor(private el: ElementRef, public translationService: TranslationService) { }

  /**
   * Initializes an observer for animations upon entry into the viewport.
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

    const mySkillsElement = this.el.nativeElement.querySelector('#mySkills');
    observer.observe(mySkillsElement);
  }

  /**
   * Allows smooth scrolling to a specified page section.
   * @param event The event that triggers scrolling.
   * @param sectionId The ID of the HTML element to scroll to.
   */
  letsTalkSection(event: Event, sectionId: string): void {
    event.preventDefault();
    const yOffset = -120;
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const y = sectionElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}