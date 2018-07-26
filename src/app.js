import $ from 'jquery';
import { Observable } from 'rxjs/Observable';
import publish from 'rxjs/add/operator/publish';
import take from 'rxjs/add/operator/take';
import timer from 'rxjs/add/observable/timer';
import interval from 'rxjs/add/observable/interval';
import { getSubscriber } from './utils/getSubscriber';

const source$ = Observable.timer(3000, 100)
  .take(10)
  .subscribe(getSubscriber('Interval'));
