import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LotteryNumberService } from '../../services/lottery-number.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-number-panel',
  templateUrl: './number-panel.component.html',
  styleUrl: './number-panel.component.scss',
})
export class NumberPanelComponent implements OnInit {
  @Input() panelNumber: number = 0;
  @Input() range: number = 49;
  @Input() selectableNumberCount: number = 6;
  @Output() selectionChanged: EventEmitter<boolean> = new EventEmitter();

  isValid = false;
  numbersInRow = 7;
  panelNumberSettings = { size: 100, margin: 20 };
  constructor(private lotteryNumberService: LotteryNumberService) {}
  selectedNumbers: number[] = [];

  // icons:
  faShuffle = faShuffle;
  faTrashCan = faTrashCan;

  ngOnInit(): void {
    // setting shape of the the panel - trying more-or-less a square
    this.numbersInRow = Math.floor(Math.sqrt(this.range));
    this.panelNumberSettings.size = this.numbersInRow * 40;
    this.panelNumberSettings.margin = this.numbersInRow * 8;
  }

  randomize() {
    this.selectedNumbers = this.lotteryNumberService.generateLotteryNumbers(
      this.range,
      this.selectableNumberCount
    );
    this.emitChangeEvent();
  }

  clear() {
    this.selectedNumbers = [];
    this.emitChangeEvent();
  }

  toggleNumber(lotteryNumber: number) {
    if (this.selectedNumbers.includes(lotteryNumber)) {
      this.selectedNumbers = this.selectedNumbers.filter(
        (item) => item !== lotteryNumber
      );
    } else {
      this.selectedNumbers.push(lotteryNumber);
    }
    this.emitChangeEvent();
  }

  emitChangeEvent() {
    this.selectionChanged.emit(true);
  }
}
