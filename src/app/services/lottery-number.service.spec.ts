import { TestBed } from '@angular/core/testing';

import { LotteryNumberService } from './lottery-number.service';

describe('LotteryNumberService', () => {
  let service: LotteryNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LotteryNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

    it('#generateLotteryNumbers should return array with given elements', () => {
      expect(service.generateLotteryNumbers(40, 6)).toBe([]);
      expect(service.generateLotteryNumbers(40, 6)).toHaveSize(6);
    });

});
