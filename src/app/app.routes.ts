import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PotfolioComponent } from './potfolio/potfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    { path: '', component: HeaderComponent },
    { path: '', component: LandingPageComponent },
    { path: '', component: AboutMeComponent },
    { path: '', component: MySkillsComponent },
    { path: '', component: PotfolioComponent },
    { path: '', component: ContactComponent },
    { path: '', component: FooterComponent }
];
