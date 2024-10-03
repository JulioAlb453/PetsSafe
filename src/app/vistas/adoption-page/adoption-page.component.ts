import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { PetDetailComponent } from '../../components/pet-detail/pet-detail.component';
import { PetAdditionalInfoComponent } from '../../components/pet-additional-info/pet-additional-info.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adoption-page',
  templateUrl: './adoption-page.component.html',
  styleUrls: ['./adoption-page.component.css'],
  standalone: true,
  imports: [PetDetailComponent, PetAdditionalInfoComponent, CommonModule],
})
export class AdoptionPageComponent implements OnInit {
  mascota: any;
  rescatista: any;
  petInfo = {
    title: 'Protector',
    description: 'Las mascotas protectoras son tu mejor opción...',
  };

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    const petId = this.route.snapshot.paramMap.get('id');
    const rescatistaId = this.route.snapshot.paramMap.get('id');
    this.loadPetDetails(petId);
    this.loadRescatistaDetails(rescatistaId);
  }

  loadPetDetails(id: string | null): void {
    if (id) {
      this.apiService.getMascotaById(id).subscribe(
        (data) => {
          this.mascota = data;
        },
        (error) => {
          console.error('Error al cargar los detalles de la mascota:', error);
        }
      );
    }
  }

  loadRescatistaDetails(id: string | null): void {
    if (id) {
      this.apiService.getRescatistaById(id).subscribe(
        (data) => {
          this.rescatista = data;
          console.log(this.rescatista);
        },
        (error) => {
          console.error('Error al cargar los detalles del rescatista:', error);
        }
      );
    }
  }
}
