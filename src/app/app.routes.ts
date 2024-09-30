import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdopcionComponent } from './adopcion/adopcion.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'adopcion',
    component: AdopcionComponent
  }
];
