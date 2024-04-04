import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isMobileNavVisible: boolean = false;

  mobileNav() {
    this.isMobileNavVisible = !this.isMobileNavVisible;
  }

  closeMobileNav() {
    this.isMobileNavVisible = false;
  }

}
