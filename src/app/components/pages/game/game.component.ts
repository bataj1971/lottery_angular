import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NumberPanelComponent } from '../../number-panel/number-panel.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent implements OnInit {
  panelCount = 4;
  panelList: PanelConfig[] = [];
  range: number;
  selectableNumberCount: number;
  allPanelsAreValid: boolean = false;
  resultListVisible: boolean = false;

  resultMessages: Array<{ panelId: number; message: string; status: string }> =
    [];

  constructor() {
    this.range = 49;
    this.selectableNumberCount = 6;
  }

  @ViewChildren(NumberPanelComponent)
  numberPanels!: QueryList<NumberPanelComponent>;

  ngOnInit(): void {

    // create panelList:
    for (let x = 1; x <= this.panelCount; x++) {

      this.panelList.push({
        panelNumber: x,
        range: this.range,
        selectableNumberCount: this.selectableNumberCount,
      });
    }
  }

  refreshResults() {
    if (this.resultListVisible) {
      this.play();
    }
  }

  play() {
    this.allPanelsAreValid = true;
    this.resultListVisible = true;
    this.resultMessages = [];

    this.numberPanels.forEach((numberPanel) => {

      const panelId = numberPanel.panelNumber;
      const selectedNumbers = numberPanel.selectedNumbers;
      const selectedNumberCount = numberPanel.selectedNumbers.length;

      let messageLine;
      let status = 'error';

      if (selectedNumberCount === 0) {
        messageLine = 'empty';
        status = 'empty';
        this.allPanelsAreValid = false;
      } else if (selectedNumberCount < this.selectableNumberCount) {
        messageLine = `Error:${
          this.selectableNumberCount - selectedNumberCount
        } marks are missing`;
        this.allPanelsAreValid = false;
      } else if (selectedNumberCount > this.selectableNumberCount) {
        messageLine = `Error: Please remove ${
          selectedNumberCount - this.selectableNumberCount
        } mark`;
        this.allPanelsAreValid = false;
      } else {
        messageLine = selectedNumbers.join(', ');
        status = 'correct';
      }
      this.resultMessages.push({
        panelId: panelId,
        message: messageLine,
        status: status,
      });
    });
  }
}

export interface PanelConfig {
  panelNumber: number;
  range: number;
  selectableNumberCount: number;
}
