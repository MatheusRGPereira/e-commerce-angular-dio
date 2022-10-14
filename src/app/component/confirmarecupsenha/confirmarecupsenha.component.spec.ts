import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarecupsenhaComponent } from './confirmarecupsenha.component';

describe('ConfirmarecupsenhaComponent', () => {
  let component: ConfirmarecupsenhaComponent;
  let fixture: ComponentFixture<ConfirmarecupsenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmarecupsenhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmarecupsenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
