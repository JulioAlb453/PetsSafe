import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      nombreUsuario: ['', Validators.required],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      tipoUsuario: ['adoptador', Validators.required]  // Por defecto, tipo adoptador
    });
  }

  onRegister() {
    console.log('Datos a enviar:', this.registerForm.value);
    if (this.registerForm.valid) {
      const { nombreUsuario, contrasena, tipoUsuario } = this.registerForm.value;
      this.authService.register(nombreUsuario, contrasena, tipoUsuario).subscribe(
        (response) => {
          console.log('Formulario válido, continuando con el registro...');
          alert(`Registro exitoso como ${tipoUsuario}`);
          this.router.navigate(['/login']); 
        },
        (error) => {
          this.errorMessage = 'Hubo un error en el registro. Inténtalo de nuevo.';
        }
      );
    }
  }
}
