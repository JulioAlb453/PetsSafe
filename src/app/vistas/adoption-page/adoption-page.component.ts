import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { AuthService } from '../../service/auth.service';
import { PetDetailComponent } from '../../components/pet-detail/pet-detail.component';
import { PetAdditionalInfoComponent } from '../../components/pet-additional-info/pet-additional-info.component';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-adoption-page',
  templateUrl: './adoption-page.component.html',
  styleUrls: ['./adoption-page.component.css'],
  standalone: true,
  imports: [PetDetailComponent, PetAdditionalInfoComponent, CommonModule],
})
export class AdoptionPageComponent implements OnChanges {
  rescatistaForm: FormGroup;
  @Input() mascota: any;
  rescatista: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private authService: AuthService,
    private fb: FormBuilder
  ) {
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

    this.loadMascota();
    this.getRescatista();
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
    console.log(this.rescatista)
    this.loadMascota();
  }

  loadMascota() {
    this.apiService.getMascota().subscribe(
      (data) => {
        this.mascota = data[0];
        console.log(this.mascota);
      },
      (error) => {
        console.error('Error al cargar las mascotas:', error);
      }
    );
  }
  getRescatista() {
    const token = localStorage.getItem('Token'); 
    if (token) {
      const decodedToken = this.decodeToken(token); 
      const userId = decodedToken.userId; 

      if (userId) {
        this.authService.getUserData(userId, token).subscribe(
          (data) => {
            console.log('Datos del rescatista:', data);
            this.rescatista = data; 
            
          },
          
          (error) => {
            console.error('Error al cargar los datos del rescatista:', error);
          }
        );
      } else {
        console.error('userId es nulo');
      }
    } else {
      console.error('Token no encontrado');
    }
  }

  get tamano(): string {
    return this.mascota?.tamaño;
  }
  

  decodeToken(token: string): any {
    const payload = JSON.parse(atob(token.split('.')[1])); 
    return payload;
  }
}
