import { Routes } from '@angular/router';
import { MainSiteComponent } from './main-site/main-site.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
    { path: '', component: MainSiteComponent },
    { path: 'imprint', component: ImprintComponent }
];