// pet-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-pet-card',
  standalone: true,
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css'],
  imports: [CommonModule, RouterModule],
})
export class PetCardComponent {
  @Input() pet: any;
  @Input() showButton: boolean = false;
  @Input() rescatistaInfo: any; 


  constructor(private apiService: ApiService) {}

  get tamano(): string {
    return this.pet.tamaño;
  }
}
