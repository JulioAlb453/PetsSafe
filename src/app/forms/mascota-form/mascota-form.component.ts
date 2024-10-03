import { Component, OnInit , Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 
import { RouterLink } from '@angular/router';
import { ApiService } from '../../service/api.service';
@Component({
  selector: 'app-mascota-form',
  templateUrl: './mascota-form.component.html',
  standalone: true,
  styleUrls: ['./mascota-form.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterLink]
})
export class MascotaFormComponent implements OnInit {
  mascotaForm: FormGroup;
  @Input() rescatista: any;


  constructor(private fb: FormBuilder, private ApiService: ApiService) {
    this.mascotaForm = this.fb.group({
      nombre: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(0)]],
      tamaño: ['', Validators.required],
      sexo: ['', Validators.required],
      padecimiento: ['']
    });
  }

  ngOnInit(): void {}

  agregarMascota() {
    if (this.mascotaForm.valid) {
      this.ApiService.agregarMascota(this.mascotaForm.value).subscribe(
        response => {
          console.log('Mascota agregada con éxito', response);
        },
        error => {
          console.error('Error al agregar la mascota', error);
        }
      );
    }
  }

  loadRescatistaDetails(id: string | null){
    if(id){
      this.ApiService.getMascotaById(id).subscribe(
        (data) =>{
          this.rescatista = data
        },
        (error) => {
          console.error('Error al cargar los detalles del rescatista:', error);
        }
      )
    }

  }
}
