import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaFormMascotaComponent } from './vista-form-mascota.component';

describe('VistaFormMascotaComponent', () => {
  let component: VistaFormMascotaComponent;
  let fixture: ComponentFixture<VistaFormMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaFormMascotaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaFormMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
