import { Component } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrl: './display.component.css',
})
export class DisplayComponent {
  isBtnEnabled: boolean = true;
  serverStatus: boolean = false;
  serverName: string = 'NA';
  constructor() {
    setTimeout(() => {
      this.isBtnEnabled = false;
    }, 4000);
  }

  onServerStatusChange() {
    this.serverStatus = true;
  }
  onTypeServerName(event: any) {
    this.serverName = event.target.value;
  }
}
