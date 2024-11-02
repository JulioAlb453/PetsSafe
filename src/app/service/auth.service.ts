import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  login(nombreUsuario: string, contrasena: string, tipoUsuario: string): Observable<any> {
    const loginData = { nombreUsuario, contrasena, tipoUsuario };
    return this.http.post(`${this.baseUrl}/usuarios/login`, loginData);
  }
  register(nombreUsuario: string, contrasena: string, tipoUsuario: string): Observable<any> {
    const endpoint = tipoUsuario === 'adoptador' ? '/usuarios/register' : '/rescatistas/register';
    const userData = { nombreUsuario, contrasena , tipoUsuario};
    return this.http.post(`${this.baseUrl}${endpoint}`, userData);
  }
}
