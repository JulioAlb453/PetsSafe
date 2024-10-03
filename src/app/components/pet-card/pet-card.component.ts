import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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

  get tamano(): string {
    return this.pet.tamaño; 
  }
}
