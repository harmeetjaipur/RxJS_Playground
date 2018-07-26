import $ from 'jquery';
import { Observable } from 'rxjs/Observable';
import publish from 'rxjs/add/operator/publish';
import defer from 'rxjs/add/observable/defer';
import of from 'rxjs/add/observable/of';
import { getSubscriber } from './utils/getSubscriber';

let i = 0;

const source$ = Observable.defer(function() {
  i++;
  return Observable.of(i);
});

source$.subscribe(getSubscriber('one'));
source$.subscribe(getSubscriber('two'));
source$.subscribe(getSubscriber('three'));
