import $ from 'jquery';
import { Observable } from 'rxjs/Observable';
import publish from 'rxjs/add/operator/publish';
import take from 'rxjs/add/operator/take';
import range from 'rxjs/add/observable/range';
import { getSubscriber } from './utils/getSubscriber';

const source$ = Observable.range(0, 11)
  .take(10)
  .subscribe(getSubscriber('Interval'));
