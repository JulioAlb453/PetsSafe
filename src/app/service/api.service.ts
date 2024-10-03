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

  addSolicitud(adoptadores: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/solicitudes/`, adoptadores); 
  }
  agregarMascota(mascota: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/mascotas/`, mascota);
  }

  getMascota(): Observable<any> {
    return this.http.get(`${this.baseUrl}/mascotas/obtenerMascotas/`); 
  }
}
