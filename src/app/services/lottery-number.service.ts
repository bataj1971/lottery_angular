import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LotteryNumberService {
  constructor() {}

  generateLotteryNumbers(
    range: number = 49,
    selectedNumberCount: number = 6
  ): number[] {
    if (selectedNumberCount > range) {
      throw new Error(
        'LotteryNumberService:generateLotteryNumbers range must be higher than selectedNumberCount'
      );
    }
    const selectedNumbers: number[] = [];
    let numberSelected = 0;
    do {
      const newNumber = Math.floor(Math.random() * range) + 1;

      if (!selectedNumbers.includes(newNumber)) {
        numberSelected++;
        selectedNumbers.push(newNumber);
      }
    } while (numberSelected < selectedNumberCount);
    return selectedNumbers;
  }
}
