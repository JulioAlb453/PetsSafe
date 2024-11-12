import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getMascotasPorRescatista(id : string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/mascotas/obtenerMascotaPorRescatista/` + id);
  }

  getDonacionesYSolicitudesPorMascota( idRescatista: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/donaciones/donacionesPorMascota/` + idRescatista );
  }

  getSolicitudesPorRescatista(idAdoptador: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/solicitudes/solicitudPorAdoptador/` +  idAdoptador);
  }
}
