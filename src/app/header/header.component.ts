import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../translation.service';

/**
 * Application header component, provides navigation and language switching.
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  /**
   * The constructor injects the TranslationService for language management.
   * @param translationService Service for handling language settings.
   */
  constructor(public translationService: TranslationService) { }

  //Sets the language of the application.
  setLanguage(lang: 'DE' | 'EN' = 'EN'): void {
    this.translationService.setLanguage(lang);
  }

  // State of visibility of the mobile navigation menu.
  isMobileNavVisible: boolean = false;

  /**
   * Toggles mobile navigation menu visibility.
   */
  mobileNav() {
    this.isMobileNavVisible = !this.isMobileNavVisible;
  }

  // Closes the mobile navigation menu.
  closeMobileNav() {
    this.isMobileNavVisible = false;
  }

  // Generalized scroll function.
  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    this.closeMobileNav();
    const yOffset = -120;
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const y = sectionElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

}
