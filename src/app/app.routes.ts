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
import { HistorialRescatistaComponent } from './rescatista/historial-rescatista/historial-rescatista.component';
import { DonacionComponent } from './adoptador/donacion/donacion.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'donacion',
    component: DonacionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'historialRescatista',
    component: HistorialRescatistaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'perfilAdoptante',
    component: PerfilAdoptanteComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'perfilRescatista',
    component: PerfilRescatistaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'inforMascota',
    component: VistaMascotasComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'solicitud/:id',
    component: VistaAdopcionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'adopcion/:id',
    component: AdoptionPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'mascotaForm',
    component: VistaFormMascotaComponent,
    canActivate: [AuthGuard],
  },
];
