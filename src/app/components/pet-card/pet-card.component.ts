  import { Component, Input } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { RouterModule } from '@angular/router';
  import { ApiService } from '../../service/api.service';

  @Component({
    selector: 'app-pet-card',
    standalone: true,
    templateUrl: './pet-card.component.html',
    styleUrls: ['./pet-card.component.css'], 
    imports: [CommonModule, RouterModule]
  })
  export class PetCardComponent {
    @Input() pet: any;
    @Input() showButton: boolean = false;
    rescatistaInfo: any; 

    get tamano(): string {
      return this.pet.tamaño; 
    }

    constructor(private apiService: ApiService){}
    
    
    loadRescatistaInfo() {
      this.apiService.getRescatistaById('1').subscribe(
        (info) => {
          console.log(info);
          this.rescatistaInfo = info; 
        },
        (error) => {
          console.error('Error al cargar la información del rescatista:', error);
        }
      );
    }
  
   
  }
