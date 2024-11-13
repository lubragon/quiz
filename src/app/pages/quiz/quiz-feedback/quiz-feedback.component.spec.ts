import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFeedbackComponent } from './quiz-feedback.component';

describe('QuizFeedbackComponent', () => {
  let component: QuizFeedbackComponent;
  let fixture: ComponentFixture<QuizFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
