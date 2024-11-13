import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacarSoloComponent } from './placar-solo.component';

describe('PlacarSoloComponent', () => {
  let component: PlacarSoloComponent;
  let fixture: ComponentFixture<PlacarSoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlacarSoloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacarSoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
