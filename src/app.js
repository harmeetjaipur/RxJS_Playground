import $ from 'jquery';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { getSubscriber } from './utils/getSubscriber';

const source$ = new Observable(observer => {
  console.log('Creating Observable...');
  observer.next('A value');
  observer.next('Another value');
  observer.error(new Error('Something went wrong'));
  setTimeout(() => {
    observer.next('Delayed value');
    observer.complete();
  }, 2000);
});

source$.subscribe(getSubscriber('myobs'));
