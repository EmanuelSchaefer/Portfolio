import { Component } from '@angular/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  constructor(public translationService: TranslationService) { }

  /**
   * Handles scrolling to a specified page section.
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
