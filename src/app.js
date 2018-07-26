import $ from 'jquery';
import { Observable } from 'rxjs/Observable';
import publish from 'rxjs/add/operator/publish';
import { interval, count as refCount } from 'rxjs/add/observable';
import { getSubscriber } from './utils/getSubscriber';

const source$ = Observable.interval(2000)
  .publish()
  .refCount();

setTimeout(() => {
  source$.subscribe(getSubscriber('one'));
  setTimeout(() => {
    source$.subscribe(getSubscriber('two'));
  }, 4000);
}, 2000);
