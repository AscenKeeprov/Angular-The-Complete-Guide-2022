import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

enum SubscriptionType {
  Basic = 'Basic',
  Advanced = 'Advanced',
  Pro = 'Pro',
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  _selectedSubscriptionTypeOption: SubscriptionType;
  _subscriptionTypeSelectOptions: string[] = [];

  ngOnInit(): void {
    this._subscriptionTypeSelectOptions = Object.keys(SubscriptionType);
    this._selectedSubscriptionTypeOption = SubscriptionType.Advanced;
  }

  onTdFormSubmit(formGroup: NgForm) {
    console.log('Submitted form value: ', formGroup.form.value);
  }
}
