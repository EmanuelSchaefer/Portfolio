import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Application footer component.
 * Allows you to navigate to different pages within the app.
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  /**
   * Creates an instance of FooterComponent.
   * @param router Router service for navigation.
   */
  constructor(private router: Router) { }

  /**
   * Navigates to the legal notice page and scrolls to the top of the page.
   */
  impressum() {
    this.router.navigateByUrl('/imprint').then(() => {
      window.scrollTo(0, 0);
    });
  }
}