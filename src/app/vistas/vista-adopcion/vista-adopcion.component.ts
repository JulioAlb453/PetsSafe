import { Component } from '@angular/core';
import { SolicitudAdopcionComponent } from '../../forms/solicitud-adopcion/solicitud-adopcion.component';

@Component({
  selector: 'app-vista-adopcion',
  standalone: true,
  imports: [SolicitudAdopcionComponent],
  templateUrl: './vista-adopcion.component.html',
  styleUrl: './vista-adopcion.component.css'
})
export class VistaAdopcionComponent {

}
