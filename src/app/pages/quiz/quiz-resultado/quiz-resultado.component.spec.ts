import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizResultadoComponent } from './quiz-resultado.component';

describe('QuizResultadoComponent', () => {
  let component: QuizResultadoComponent;
  let fixture: ComponentFixture<QuizResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizResultadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
