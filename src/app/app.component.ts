import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PotfolioComponent } from './potfolio/potfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    HeaderComponent,
    LandingPageComponent,
    AboutMeComponent,
    MySkillsComponent,
    PotfolioComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}