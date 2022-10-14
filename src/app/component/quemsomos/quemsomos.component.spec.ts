import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuemsomosComponent } from './quemsomos.component';

describe('QuemsomosComponent', () => {
  let component: QuemsomosComponent;
  let fixture: ComponentFixture<QuemsomosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuemsomosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuemsomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
