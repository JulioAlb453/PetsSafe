import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilRescatistaComponent } from './perfil-rescatista.component';

describe('PerfilRescatistaComponent', () => {
  let component: PerfilRescatistaComponent;
  let fixture: ComponentFixture<PerfilRescatistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilRescatistaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilRescatistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
