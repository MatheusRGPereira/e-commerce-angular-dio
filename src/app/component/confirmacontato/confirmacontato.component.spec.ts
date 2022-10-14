import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacontatoComponent } from './confirmacontato.component';

describe('ConfirmacontatoComponent', () => {
  let component: ConfirmacontatoComponent;
  let fixture: ComponentFixture<ConfirmacontatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmacontatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmacontatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
