import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { AdopadorFormComponent } from '../adopador-form/adopador-form.component';

@Component({
  selector: 'app-perfil-adoptante',
  standalone: true,
  imports: [AdopadorFormComponent],
  templateUrl: './perfil-adoptante.component.html',
  styleUrls: ['./perfil-adoptante.component.css'],
})
export class PerfilAdoptanteComponent implements OnInit {
  userId: string | null = null; 
  adoptadorData: any;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('Token'); 
    if (token) {
      // const header
      const decodedToken = this.decodeToken(token); 
      this.userId = decodedToken.userId; 

      if (this.userId) {
        this.authService.getUserData(this.userId, token).subscribe(
          (data) => {
            console.log(data)
            this.adoptadorData = data; 
          },
          (error) => {
            console.error('Error al cargar los datos del usuario:', error);
          }
        );
      } else {
        console.error('userId es nulo');
      }
    } else {
      console.error('Token no encontrado');
    }
  }

  decodeToken(token: string): any {
    const payload = JSON.parse(atob(token.split('.')[1])); 
    return payload;
  }
}
