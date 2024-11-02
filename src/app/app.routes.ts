import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PerfilAdoptanteComponent } from './adoptador/perfil-adoptante/perfil-adoptante.component';
import { PerfilRescatistaComponent } from './rescatista/perfil-rescatista/perfil-rescatista.component';
import { VistaMascotasComponent } from './mascota/vista-mascotas/vista-mascotas.component';
import { VistaAdopcionComponent } from './vistas/vista-adopcion/vista-adopcion.component';
import { AdoptionPageComponent } from './vistas/adoption-page/adoption-page.component';
import { VistaFormMascotaComponent } from './mascota/vista-form-mascota/vista-form-mascota.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  }, {
    path: 'register',
    component: RegisterComponent,
  },
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
