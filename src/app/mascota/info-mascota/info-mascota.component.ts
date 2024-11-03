// info-mascota.component.ts
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { PetCardComponent } from '../../components/pet-card/pet-card.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-info-mascota',
  standalone: true,
  imports: [PetCardComponent, CommonModule],
  templateUrl: './info-mascota.component.html',
  styleUrls: ['./info-mascota.component.css'],
})
export class InfoMascotaComponent implements OnChanges {
  pets: any[] = [];
  rescatistaInfo: any;

  @Input() rescatista: any;
  rescatistaForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.rescatistaForm = this.fb.group({
      nombre: ['', Validators.required],
      APaterno: ['', Validators.required],
      AMaterno: ['', Validators.required],
      numTelefono: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      edad: ['', Validators.required],
      localizacion: ['', Validators.required],
      tipoRescatista: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.loadPets();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rescatista'] && this.rescatista) {
      this.rescatistaForm.patchValue({
        nombre: this.rescatista.nombre,
        APaterno: this.rescatista.APaterno,
        AMaterno: this.rescatista.AMaterno,
        numTelefono: this.rescatista.numTelefono,
        correoElectronico: this.rescatista.correoElectronico,
        edad: this.rescatista.edad,
        localizacion: this.rescatista.localizacion,
        tipoRescatista: this.rescatista.tipoRescatista,
      });
      console.log('Datos en el formulario:', this.rescatistaForm.value); 
    }
    this.loadPets();

  }

  loadPets(): void {
    this.apiService.getMascota().subscribe(
      (data) => {
        console.log(data)
        this.pets = data;
      },
      (error) => {
        console.error('Error al cargar las mascotas:', error);
      }
    );
  }
}
