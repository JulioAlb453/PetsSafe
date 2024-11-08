import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { HistorialService } from '../../service/historial-service.service';
import { ApiService } from '../../service/api.service';
import { CommonModule } from '@angular/common';
import { OnChanges } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-historial-rescatista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historial-rescatista.component.html',
  styleUrls: ['./historial-rescatista.component.css'],
})
export class HistorialRescatistaComponent implements OnChanges {
  mascotas: any[] = [];
  donaciones: any[] = [];
  solicitudes: any[] = [];
  pets: any;

  userRescatistaId: any;

  constructor(
    private historialService: HistorialService,
    private apiService: ApiService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.getIdAdoptador();
    this.obtenerDatos();
  }

  ngOnInit(): void {
    this.getIdAdoptador();
    this.obtenerDatos();
  }

 
  getIdAdoptador() {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = this.decodeToken(token);
      this.userRescatistaId = decodedToken.userId;
    }
  }

  obtenerDatos(): void {
    this.historialService
    .getDonacionesYSolicitudesPorMascota(this.userRescatistaId)
    .subscribe((data) => {
      this.mascotas = data
      console.log(this.mascotas)
    });

    // console.log(this.donaciones)
  }

  decodeToken(token: string): any {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload;
  }

  aceptarSolicitud(idSolicitud: any){
    this.apiService.aceptarSolicitud(idSolicitud).subscribe((data) =>{
      Swal.fire({
        title: "Solicitud aceptada",
        icon: 'success',
         showConfirmButton: false,
        timer: 1300,
      })
      this.getIdAdoptador();
    this.obtenerDatos();
    })

  }

  denegarSolicitud(idSolicitud: any){
    this.apiService.rechazarSolicitud(idSolicitud).subscribe((data) =>{
      this.getIdAdoptador();
      this.obtenerDatos();
      Swal.fire ({
        title: "Solicitud Rechazada",
        icon: 'error',
        showConfirmButton: false,
        timer: 1300,
      })
    })
    
  }
  loadPets(): void {
    this.apiService.getMascota().subscribe(
      (data) => {
        console.log(data)
        this.pets = data;
      },
      (error) => {
        console.error('Error al cargar las mascotas:', error);
      }
    );
  }
  get imagen():string{
    return "http://localhost:3000/"+this.pets.imagen
  }
}
