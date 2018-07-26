import $ from 'jquery';
import { Observable } from 'rxjs/Observable';
import publish from 'rxjs/add/operator/publish';
import fromPromise from 'rxjs/add/observable/fromPromise';
import of from 'rxjs/add/observable/of';
import { getSubscriber } from './utils/getSubscriber';

const myPromise = new Promise((resolve, reject) => {
  console.log('Creating promise');
  setTimeout(() => {
    console.log('Something...');
    resolve('Hello from promiseland!');
  }, 2000);
});

Observable.fromPromise(myPromise).subscribe(getSubscriber('Promise'));
