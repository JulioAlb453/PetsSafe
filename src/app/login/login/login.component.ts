import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      nombreUsuario: ['', Validators.required],
      contrasena: ['', Validators.required], 
      tipoUsuario: ['adoptador', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { nombreUsuario, contrasena, tipoUsuario } = this.loginForm.value;
      console.log(this.loginForm.value)
      this.authService.login(nombreUsuario, contrasena, tipoUsuario).subscribe(
        (response) => {
          Swal.fire({
            title: "Registro exitoso",
            icon: 'success',
            showConfirmButton: false,
            timer: 1200
          })
          this.router.navigate(['/home']);
        },
        (error) => {
          console.log(error);
          Swal.fire ({
            title: "Nombre de usuario o contraseña incorrectos",
            icon: 'warning',
            showConfirmButton: false,
            timer: 1200,
          })
          console.log(this.loginForm.valid)
        }
      );
    }
  }
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
