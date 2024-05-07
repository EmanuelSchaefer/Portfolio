import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../translation.service';
import { Router } from '@angular/router';

/**
 * HeaderComponent provides a navigation bar for the application, language switching capabilities,
 * and smooth scrolling to sections of the page.
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  /**
   * Constructor that takes necessary services.
   * @param translationService Service to handle translation and language management.
   * @param router Angular Router for navigation between routes.
   */
  constructor(
    public translationService: TranslationService,
    private router: Router
  ) { }

  /**
   * Manages the visibility state of the mobile navigation menu.
   */
  isMobileNavVisible: boolean = false;

  /**
   * Toggles the visibility of the mobile navigation menu.
   */
  mobileNav() {
    this.isMobileNavVisible = !this.isMobileNavVisible;
  }

  /**
   * Closes the mobile navigation menu.
   */
  closeMobileNav() {
    this.isMobileNavVisible = false;
  }

  /**
   * Scrolls to a specific section on the page smoothly. This method handles internal navigation by
   * ensuring the user is first routed to the home page if they are not already there.
   * @param event The DOM event associated with the navigation action.
   * @param sectionId The ID of the DOM element to scroll to.
   */
  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    this.closeMobileNav();
    const performScroll = () => {
      const yOffset = -120; // Vertical offset to account for fixed header
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        const y = sectionElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    };
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(performScroll, 100);
      });
    } else {
      performScroll();
    }
  }

  /**
   * Sets the application language.
   * @param lang Language code ('DE' for German, 'EN' for English).
   */
  setLanguage(lang: 'DE' | 'EN' = 'EN'): void {
    this.translationService.setLanguage(lang);
  }
}