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
    expect(service.generateLotteryNumbers(40, 6)).toBeInstanceOf(Array);
  });

  it('#generateLotteryNumbers should return array with size 6', () => {
    expect(service.generateLotteryNumbers(40, 6)).toHaveSize(6);
  });

  it('#generateLotteryNumbers  - numbers should be unique', () => {
    expect(new Set(service.generateLotteryNumbers(6, 6))).toHaveSize(6);
  });

  it('#generateLotteryNumbers  - should throw error if selectable number count > than range', () => {
    expect(function () {
      service.generateLotteryNumbers(5, 6);
    }).toThrowError(Error);
  });
});
