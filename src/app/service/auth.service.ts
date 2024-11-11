import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { response } from 'express';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://54.221.204.89';

  constructor(private http: HttpClient) {}

  private decodeToken(token: string): any {
    if (!token || token.split('.').length !== 3) {
      console.error('Token mal formado o no válido');
      return null;
    }

    try {
      // Decodificar manualmente el payload
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload;
    } catch (error) {
      console.error('Error al decodificar el token', error);
      return null;
    }
  }

  login(
    nombreUsuario: string,
    contrasena: string,
    tipoUsuario: string
  ): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/usuarios/login`, {
        nombreUsuario,
        contrasena,
        tipoUsuario,
      })
      .pipe(
        tap((response: any) => {
          if (response.token) {
            localStorage.setItem('token', response.token);
          }
        })
      );
  }
  register(userData: any): Observable<any> {
    const endpoint =
      userData.tipoUsuario === 'adoptador'
        ? '/usuarios/register'
        : '/usuarios/register';

    console.log(userData);
    return this.http.post(`${this.baseUrl}${endpoint}`, userData);
  }

  getUserData(userId: string, token: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get(`${this.baseUrl}/usuarios/ObtenerData/${userId}`, {
      headers,
    });
  }

  logOut() {
    localStorage.removeItem('token');
  }
}
