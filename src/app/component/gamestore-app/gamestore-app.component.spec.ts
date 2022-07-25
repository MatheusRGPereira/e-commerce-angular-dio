import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamestoreAppComponent } from './gamestore-app.component';

describe('GamestoreAppComponent', () => {
  let component: GamestoreAppComponent;
  let fixture: ComponentFixture<GamestoreAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamestoreAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamestoreAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
