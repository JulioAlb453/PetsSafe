import { Component } from '@angular/core';
import { PetDetailComponent } from '../../components/pet-detail/pet-detail.component';
import { PetAdditionalInfoComponent } from '../../components/pet-additional-info/pet-additional-info.component';
import { RescatistaFormComponent } from '../../forms/rescatista-form/rescatista-form.component';
import { AdopadorFormComponent } from "../../forms/adopador-form/adopador-form.component";

@Component({
  selector: 'app-adoption-page',
  templateUrl: './adoption-page.component.html',
  styleUrls: ['./adoption-page.component.css'],
  standalone: true,
  imports: [
    PetDetailComponent,
    PetAdditionalInfoComponent,
    RescatistaFormComponent,
    AdopadorFormComponent
]
})
export class AdoptionPageComponent {
  pet = {
    name: 'Mister',
    image: 'https://www.respetmascotas.com/_Assets/img/181129-Imagen-AlimentacionMascotas.jpg',
    genero: 'Masculino',
    categoria: 'Perro',
    tamano: 'Grande',
    edad: '3 años',
    localizacion: 'Tuxtla, Chiapas',
    descripcion: 'Mister es un perro muy calmado y no hace tanto berrinche, casi no hace desastres en la casa'
  };

  petInfo = {
    title: 'Protector',
    description: 'Las mascotas protectoras son tu mejor opción...'
  };

  rescatista = {
    nombre: 'Juan Pérez',
    email: 'juan.perez@gmail.com',
    telefono: '123-456-7890',
    edad: '30 años',
    direccion: 'Calle Falsa 123, Ciudad'
  };
}
