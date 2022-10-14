import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastronovasenhaComponent } from './cadastronovasenha.component';

describe('CadastronovasenhaComponent', () => {
  let component: CadastronovasenhaComponent;
  let fixture: ComponentFixture<CadastronovasenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastronovasenhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastronovasenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
