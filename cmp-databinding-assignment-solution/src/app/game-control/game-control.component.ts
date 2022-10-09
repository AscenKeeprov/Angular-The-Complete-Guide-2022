import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';

const durationIncrementInSeconds: number = 1;

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnDestroy {
  durationIncrementIntervalId: NodeJS.Timeout = null;
  durationInSeconds: number = 0;
  @Output() durationChange: EventEmitter<any> = new EventEmitter();
  @Output() start: EventEmitter<any> = new EventEmitter();

  ngOnDestroy() {
    if (this.durationIncrementIntervalId) {
      clearInterval(this.durationIncrementIntervalId);
    }
  }

  startGame() {
    this.durationIncrementIntervalId = setInterval(() => {
      this.durationInSeconds += durationIncrementInSeconds;

      this.durationChange.emit(this.durationInSeconds);
    }, durationIncrementInSeconds * 1000);

    this.start.emit(null);
  }

  stopGame() {
    clearInterval(this.durationIncrementIntervalId);
    this.durationIncrementIntervalId = null;
    this.durationInSeconds = 0;
  }
}
