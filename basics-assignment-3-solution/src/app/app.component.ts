import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  detailsToggleEvents: any[] = [];
  shouldRenderDetails: boolean = false;

  logDetailsToggleEvent(event: Event, shouldRenderDetails: boolean) {
    this.detailsToggleEvents.push({
      shouldRenderDetails,
      timestamp: new Date().toLocaleString()
    });
  }

  toggleDetails() {
    this.shouldRenderDetails = !this.shouldRenderDetails;
  }
}
