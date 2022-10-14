import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacadastrosenhaComponent } from './confirmacadastrosenha.component';

describe('ConfirmacadastrosenhaComponent', () => {
  let component: ConfirmacadastrosenhaComponent;
  let fixture: ComponentFixture<ConfirmacadastrosenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmacadastrosenhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmacadastrosenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
