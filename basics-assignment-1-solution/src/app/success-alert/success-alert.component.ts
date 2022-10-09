import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: '<div class="alert alert--success">Success!</div>',
  styles: [
    `.alert--success {
        border-color: green;
        color: green;
      }`
  ]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }
}
