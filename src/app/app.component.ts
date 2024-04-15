import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { TranslationService } from './translation.service';

import { HeaderComponent } from './header/header.component';
import { ImprintComponent } from './imprint/imprint.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    ImprintComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  /**
   * Constructor that injects the TranslationService for language management.
   * @param translationService Service for handling language settings.
   */
  constructor(public translationService: TranslationService) { }

  ngOnInit(): void {
    this.setLanguage('EN'); //Sets English as the default language at startup
  }

  /**
   * Sets the current language of the application.
   * @param lang The language code, can be 'DE' for German or 'EN' for English.
   */
  setLanguage(lang: 'DE' | 'EN'): void {
    this.translationService.setLanguage(lang);
  }
}