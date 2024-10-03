import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pet-card',
  standalone: true,
  templateUrl: './pet-card.component.html',
  styleUrls: ['./pet-card.component.css'] // Corrige esto a 'styleUrls'
})
export class PetCardComponent {
  @Input() pet: any;
}
