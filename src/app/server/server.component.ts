import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  serverID: number = Math.round(Math.random() * 1000);
  serverStatus: string = `online`;

  getServerID() {
    return this.serverID;
  }
  getServerStatus() {
    return this.serverStatus;
  }
}
