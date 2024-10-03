import { Component, Input  } from '@angular/core';
import { RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-pet-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './pet-detail.component.html',
  styleUrl: './pet-detail.component.css'
})
export class PetDetailComponent {
  @Input() pet: any;
}
