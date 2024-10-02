import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { PerfilAdoptanteComponent } from './perfil-adoptante/perfil-adoptante.component';
import { PerfilRescatistaComponent } from './perfil-rescatista/perfil-rescatista.component';
import { InfoMascotaComponent } from './info-mascota/info-mascota.component';
import { SolicitudAdopcionComponent } from './solicitud-adopcion/solicitud-adopcion.component';


export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'perfilAdoptante',
    component: PerfilAdoptanteComponent
  },
  {
    path: 'perfilRescatista',
    component: PerfilRescatistaComponent
  },  {
    path: 'inforMascota',
    component: InfoMascotaComponent
  },  {
    path: 'solicitud',
    component: SolicitudAdopcionComponent
  },
 
];
