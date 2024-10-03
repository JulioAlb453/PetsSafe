import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) {}

  getAdoptadores(): Observable<any> {
    return this.http.get(`${this.baseUrl}/adoptadores/obtenerAdoptadores/`); 
  }
  getRescatistaById(id: string) {
    return this.http.get('http://localhost:3000/rescatista/obtenerRescatistasByID/1'); 
  }

  getMascotaById(id: string) {
    return this.http.get('http://localhost:3000/mascotas/obtenerMascotasByID/10'); 
  }

  addSolicitud(solicitud: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/solicitudes/`, solicitud); 
  }
  agregarMascota(mascota: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/mascotas/`, mascota);
  }

  getMascota(): Observable<any> {
    return this.http.get(`${this.baseUrl}/mascotas/obtenerMascotas/`); 
  }

  addRescatista(adoptadores: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/rescatista/`, adoptadores); 
  }
  getRescatista(): Observable<any> {
    return this.http.get(`${this.baseUrl}/rescatista/obtenerRescatista/`); 
  }
  
}
