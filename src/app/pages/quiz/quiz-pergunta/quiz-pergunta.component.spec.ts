import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPerguntaComponent } from './quiz-pergunta.component';

describe('QuizPerguntaComponent', () => {
  let component: QuizPerguntaComponent;
  let fixture: ComponentFixture<QuizPerguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizPerguntaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizPerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
