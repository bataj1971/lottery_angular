import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  footerMessage: string = '';
  showMessages: boolean = false;

  constructor() {}

  ngOnInit() {
    this.footerMessage = '@batajozsef-2023';
    this.showMessages = true;
  }
  setShowMessagages(show: boolean) {
    this.showMessages = show;
  }
}
