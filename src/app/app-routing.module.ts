import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GuidesComponent } from './guides/guides.component';

// app-routing.module.ts
const routes: Routes = [
  { path: '', component: HomeComponent }, // Home page
  { path: 'guide', component: GuidesComponent }, // Guide page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
