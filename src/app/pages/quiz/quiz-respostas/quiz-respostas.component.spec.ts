import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizRespostasComponent } from './quiz-respostas.component';

describe('QuizRespostasComponent', () => {
  let component: QuizRespostasComponent;
  let fixture: ComponentFixture<QuizRespostasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizRespostasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizRespostasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
