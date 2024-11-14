import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSeletorComponent } from './quiz-seletor.component';

describe('QuizSeletorComponent', () => {
  let component: QuizSeletorComponent;
  let fixture: ComponentFixture<QuizSeletorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizSeletorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizSeletorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
