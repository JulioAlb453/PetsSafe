import { Component } from '@angular/core';
import { PetCardComponent } from '../../components/pet-card/pet-card.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-info-mascota',
  standalone: true,
  imports: [PetCardComponent, CommonModule],
  templateUrl: './info-mascota.component.html',
  styleUrl: './info-mascota.component.css'
})
export class InfoMascotaComponent {
  pets = [
    {
      name: 'Lucas',
      sexo: 'masculino',
      tamaño: 'mediano',
      localización: 'Tuxtla, Chiapas',
      description: 'Fiestero',
      image: 'https://www.respetmascotas.com/_Assets/img/181129-Imagen-AlimentacionMascotas.jpg',
    },
    {
      name: 'Bonbon',
      sexo: 'masculino',
      tamaño: 'pequeño',
      localización: 'Tuxtla, Chiapas',
      description: 'Obediente',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFVEPJoN8gn3kCpeoXswBNZJgSW93vuGvdYQ&s',
    },
    {
      name: 'Tiger',
      sexo: 'masculino',
      tamaño: 'grande',
      localización: 'Tuxtla, Chiapas',
      description: 'Protector',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0il0JUl_0hVsXxIObhwcFJkvAUJpTjOR1w&s',
    },
    {
      name: 'Maru',
      sexo: 'femenino',
      tamaño: 'pequeño',
      localización: 'Tuxtla, Chiapas',
      description: 'Amoroso',
      image: 'https://cdn.forbes.com.mx/2023/03/perros-mascota.webp',
    },
    {
      name: 'Chick',
      sexo: 'masculino',
      tamaño: 'mediano',
      localización: 'Tuxtla, Chiapas',
      description: 'Leal',
      image: 'https://cdn.forbes.com.mx/2023/03/perros-mascota.webp',
    },
    {
      name: 'Mister',
      sexo: 'femenino',
      tamaño: 'grande',
      localización: 'Tuxtla, Chiapas',
      description: 'Curioso',
      image: 'https://cdn.forbes.com.mx/2023/03/perros-mascota.webp',
    },
  ];
}
