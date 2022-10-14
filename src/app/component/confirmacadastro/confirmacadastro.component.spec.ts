import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacadastroComponent } from './confirmacadastro.component';

describe('ConfirmacadastroComponent', () => {
  let component: ConfirmacadastroComponent;
  let fixture: ComponentFixture<ConfirmacadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmacadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmacadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
