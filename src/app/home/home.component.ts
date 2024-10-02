import { Component } from '@angular/core';
import { AdopadorFormComponent } from '../adopador-form/adopador-form.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AdopadorFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
