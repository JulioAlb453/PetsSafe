import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
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
      tipoUsuario: ['', Validators.required], 
      localizacion: [''], 
      tipoRescatista: ['']  
    });
  }
  onRegister() {
    if (this.registerForm.valid) {
      
      const formData = this.registerForm.value;
      this.authService.register(formData).subscribe(
        (response) => {
          Swal.fire({
            title: "Registro exitoso",
            icon: 'success',
             showConfirmButton: false,
            timer: 1300,
          })
          setTimeout(() => {
            this.router.navigate(['/login']);  
          }, 500); 
        },
        (error) => {
         
          Swal.fire ({
            title: "Ha ocurrido un error",
            icon: 'error',
            showConfirmButton: false,
            timer: 1300,
          })
        }
      );
    }
  }

 
  
}
