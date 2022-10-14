import { Counter } from '../models/counter.model';

export class CounterService {
  createCounter(value: number): Counter {
    return new Counter(value);
  }

  decreaseCounter(couner: Counter) {
    couner.value--;
  }

  increaseCounter(couner: Counter) {
    couner.value++;
  }

  resetCounter(counter: Counter) {
    counter.value = 0;
  }
}
