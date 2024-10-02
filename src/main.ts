import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // Importa el proveedor de HttpClient
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideClientHydration } from '@angular/platform-browser';

// Configura la aplicación con HttpClient
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Agrega el proveedor de HttpClient
    provideRouter(routes), 
    provideClientHydration()
  ],
}).catch((err) => console.error(err));
