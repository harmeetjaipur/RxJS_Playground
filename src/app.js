import $ from 'jquery';
import { Observable } from 'rxjs/Observable';
import publish from 'rxjs/add/operator/publish';
import { getSubscriber } from './utils/getSubscriber';

const source$ = Observable.create(observer => {
  observer.next(Date.now());
}).publish();

source$.connect();

source$.subscribe(getSubscriber('one'));
source$.subscribe(getSubscriber('two'));
