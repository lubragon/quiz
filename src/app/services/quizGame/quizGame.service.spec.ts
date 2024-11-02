import { TestBed } from '@angular/core/testing';

import { QuizGameService } from './quizGame.service';

describe('QuizGameService', () => {
  let service: QuizGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
