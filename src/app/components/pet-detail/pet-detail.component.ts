import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ApiService } from '../../service/api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pet-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './pet-detail.component.html',
  styleUrl: './pet-detail.component.css',
})
export class PetDetailComponent {
  @Input() mascota: any;

  @Input() rescatista:any;
  
  
 
 
  get tamano(): string {
    return this.mascota?.tamaño;
  }
}
