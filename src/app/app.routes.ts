import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ServicesComponent } from './services/services';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';
import { OverviewComponent } from './about/overview/overview';
import { AlliancesComponent } from './about/alliances/alliances';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent, children: [
    {path: 'overview', component: OverviewComponent },
    { path: 'alliances', component: AlliancesComponent }
  ] },
  { path: 'contact', component: ContactComponent }
];
