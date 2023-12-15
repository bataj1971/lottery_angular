import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrl: './number.component.scss',
})
export class NumberComponent {
  @Input() lotteryNumber: number = 0;
  @Input() selected: boolean = false;
}
