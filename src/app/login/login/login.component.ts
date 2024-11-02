import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

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
      contrasena: ['', Validators.required], // Corregido
      tipoUsuario: ['adoptador', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { nombreUsuario, contrasena, tipoUsuario } = this.loginForm.value;
      console.log(this.loginForm.value)
      this.authService.login(nombreUsuario, contrasena, tipoUsuario).subscribe(
        (response) => {
          alert(`Login exitoso como ${tipoUsuario}`);
          console.log(response);
          localStorage.setItem('Token', response.token)
          this.router.navigate(['/home']);
        },
        (error) => {
          console.log(error);
          this.errorMessage = 'Nombre de usuario o contraseña incorrectos';
          console.log(this.loginForm.valid)
        }
      );
    }
  }
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
