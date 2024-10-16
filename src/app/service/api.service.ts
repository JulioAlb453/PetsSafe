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
    return this.http.get(
      'http://localhost:3000/rescatista/obtenerRescatistasByID/1'
    );
  }
  getRescatista(): Observable<any> {
    return this.http.get(`${this.baseUrl}/rescatista/obtenerRescatista/`);
  }
  
  getMascotaById(id: string) {
    return this.http.get(
      'http://localhost:3000/mascotas/obtenerMascotasByID/10'
    );
  }

  getMascota(): Observable<any> {
    return this.http.get(`${this.baseUrl}/mascotas/obtenerMascotas/`);
  }

  
  getSolicitud(): Observable<any>{
    return this.http.get(`${this.baseUrl}/solicitudes/obtenerRescatista/`);
  }   
 



  addAdoptador(adoptador: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/adoptadores`, adoptador);
  }

  updateAdoptador(id: string, adoptador: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/adoptadores/${id}`, adoptador);
  }

  addSolicitud(solicitud: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/solicitudes/`, solicitud);
  }
  agregarMascota(mascota: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/mascotas/`, mascota);
  }

  addRescatista(adoptadores: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/rescatista/`, adoptadores);
  }
}
