import { Routes } from '@angular/router';

import { HomeComponent } from './vistas/home/home.component';

import { PerfilAdoptanteComponent } from './vistas/perfil-adoptante/perfil-adoptante.component';
import { PerfilRescatistaComponent } from './vistas/perfil-rescatista/perfil-rescatista.component';
import { VistaMascotasComponent } from './vistas/vista-mascotas/vista-mascotas.component';
import { VistaAdopcionComponent } from './vistas/vista-adopcion/vista-adopcion.component';
import { AdoptionPageComponent } from './vistas/adoption-page/adoption-page.component';
import { VistaFormMascotaComponent } from './vistas/vista-form-mascota/vista-form-mascota.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'perfilAdoptante',
    component: PerfilAdoptanteComponent,
  },
  {
    path: 'perfilRescatista',
    component: PerfilRescatistaComponent,
  },
  {
    path: 'inforMascota',
    component: VistaMascotasComponent,
  },
  {
    path: 'solicitud',
    component: VistaAdopcionComponent,
  },
  { path: 'adopcion/:id', component: AdoptionPageComponent },
  {
    path: 'mascotaForm',
    component: VistaFormMascotaComponent,
  },
];
