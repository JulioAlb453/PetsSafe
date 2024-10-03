import { Component } from '@angular/core';
import { InfoMascotaComponent } from '../../forms/info-mascota/info-mascota.component';


@Component({
  selector: 'app-vista-mascotas',
  standalone: true,
  imports: [InfoMascotaComponent],
  templateUrl: './vista-mascotas.component.html',
  styleUrl: './vista-mascotas.component.css'
})
export class VistaMascotasComponent {

}
