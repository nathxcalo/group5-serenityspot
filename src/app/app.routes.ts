import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GuidesComponent } from './guides/guides.component';
import { HotlinesComponent } from './hotlines/hotlines.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'guides', component: GuidesComponent },
  { path: 'hotlines', component: HotlinesComponent },
];
