import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-rescatista-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './rescatista-form.component.html',
  styleUrls: ['./rescatista-form.component.css'] // Aquí corregí 'styleUrl' por 'styleUrls'
})
export class RescatistaFormComponent {
  @Input() rescatista: any;
  rescatistaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.rescatistaForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      edad: ['', Validators.required],
      localizacion: ['', Validators.required],
      tipoRescatista: ['', Validators.required],
    });
  }

  actualizarDatos() {
    if (this.rescatistaForm.valid) {
      console.log('Formulario válido', this.rescatistaForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }
}
