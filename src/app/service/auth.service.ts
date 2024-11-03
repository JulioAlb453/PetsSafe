import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  login(
    nombreUsuario: string,
    contrasena: string,
    tipoUsuario: string
  ): Observable<any> {
    return this.http.post(`${this.baseUrl}/usuarios/login`, {
      nombreUsuario,
      contrasena,
      tipoUsuario,
    });
  }
  register(userData: any): Observable<any> {
    const endpoint =
      userData.tipoUsuario === 'adoptador'
        ? '/usuarios/register'
        : '/usuarios/register';

    if (userData.tipoUsuario === 'adoptador') {
      delete userData.localizacion;
      delete userData.tipoRescatista;
    } else if (userData.tipoUsuario === 'rescatista') {
      delete userData.tipoUsuario;
    }

    console.log(userData);
    return this.http.post(`${this.baseUrl}${endpoint}`, userData);
  }

  getUserData(userId: string, token: string): Observable<any> {

       const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`})

    return this.http.get(`${this.baseUrl}/usuarios/ObtenerData/${userId}`,{headers});
  }
}
