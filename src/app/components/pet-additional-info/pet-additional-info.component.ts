import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-pet-additional-info',
  standalone: true,
  imports: [],
  templateUrl: './pet-additional-info.component.html',
  styleUrl: './pet-additional-info.component.css'
})
export class PetAdditionalInfoComponent {

  @Input() info: any;

}
