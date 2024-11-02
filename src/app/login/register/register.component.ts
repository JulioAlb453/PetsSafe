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
      nombre: ['', Validators.required],
      AMaterno: ['', Validators.required],
      APaterno: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(18)]],
      correoElectronico: ['', [Validators.required, Validators.email]],
      numTelefono: ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      tipoUsuario: ['adoptador', Validators.required], 
      localizacion: [''], 
      tipoRescatista: ['independiente']  
    });
  }
  onRegister() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      this.authService.register(formData).subscribe(
        (response) => {
          alert(`Registro exitoso como ${formData.tipoUsuario}`);
          setTimeout(() => {
            this.router.navigate(['/login']);  
          }, 500); 
        },
        (error) => {
          this.errorMessage = 'Hubo un error en el registro. Inténtalo de nuevo.';
        }
      );
    }
  }
  
}
