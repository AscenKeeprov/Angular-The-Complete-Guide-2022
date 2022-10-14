import { Injectable } from '@angular/core';
import { Counter } from '../models/counter.model';
import { User } from '../models/user.model';
import { CounterService } from './counter.service';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private _userActivationsCounter: Counter;
  private _userDeactivationsCounter: Counter;
  private _users: User[] = [];

  constructor(private _counterService: CounterService) {
    this._users = [
      new User('Max'),
      new User('Anna'),
      new User('Chris', false),
      new User('Manu', false)
    ];

    this._userActivationsCounter = _counterService.createCounter(0);
    this._userDeactivationsCounter = _counterService.createCounter(0);
  }

  get activeUsers(): User[] {
    return this._users.filter(user => user.isActive);
  }

  get inactiveUsers(): User[] {
    return this._users.filter(user => !user.isActive);
  }

  get userActivationsCount(): number {
    return this._userActivationsCounter.value;
  }

  get userDeactivationsCount(): number {
    return this._userDeactivationsCounter.value;
  }

  get users(): User[] {
    return this._users;
  }

  activateUser(user: User): void {
    user.isActive = true;
    this._counterService.increaseCounter(this._userActivationsCounter);
  }

  deactivateUser(user: User): void {
    user.isActive = false;
    this._counterService.increaseCounter(this._userDeactivationsCounter);
  }
}
