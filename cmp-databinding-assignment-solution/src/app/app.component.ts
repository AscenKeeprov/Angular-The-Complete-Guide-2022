import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  onGameDurationChanged(currentGameDurationInSeconds: number) {
    if (currentGameDurationInSeconds) {
      if (currentGameDurationInSeconds % 2 === 0) {
        this.evenNumbers.push(currentGameDurationInSeconds);
      } else {
        this.oddNumbers.push(currentGameDurationInSeconds);
      }
    }
  }

  onGameStarted() {
    this.evenNumbers = [];
    this.oddNumbers = [];
  }
}
