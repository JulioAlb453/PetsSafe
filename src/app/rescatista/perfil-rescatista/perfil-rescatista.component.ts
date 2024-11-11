import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { AuthService } from '../../service/auth.service'; 
import { RescatistaFormComponent } from '../rescatista-form/rescatista-form.component';

@Component({
  selector: 'app-perfil-rescatista',
  standalone: true,
  imports: [RescatistaFormComponent],
  templateUrl: './perfil-rescatista.component.html',
  styleUrls: ['./perfil-rescatista.component.css']
})
export class PerfilRescatistaComponent implements OnInit {
  rescatistaData: any; 

  constructor(private authService: AuthService) {} 

  ngOnInit(): void {
    const token = localStorage.getItem('token'); 
    if (token) {
      const decodedToken = this.decodeToken(token); 
      const userId = decodedToken.userId; 

      if (userId) {
        this.authService.getUserData(userId, token).subscribe(
          (data) => {
            console.log('Datos del rescatista:', data);
            this.rescatistaData = data; 
          },
          (error) => {
            console.error('Error al cargar los datos del rescatista:', error);
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
