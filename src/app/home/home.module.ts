import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AdoptionSectionComponent } from './adoption-section/adoption-section.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AdoptionSectionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule 
  ],
  exports: [
    HeaderComponent,
    AdoptionSectionComponent,
  ]
})
export class HomeModule { }