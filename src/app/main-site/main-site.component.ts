import { Component } from '@angular/core';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PotfolioComponent } from './potfolio/potfolio.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-main-site',
  standalone: true,
  imports: [
    LandingPageComponent,
    AboutMeComponent,
    MySkillsComponent,
    PotfolioComponent,
    ContactComponent
  ],
  templateUrl: './main-site.component.html',
  styleUrl: './main-site.component.scss'
})
export class MainSiteComponent {

}