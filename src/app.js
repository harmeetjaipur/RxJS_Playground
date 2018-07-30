import $ from 'jquery';
import { Observable } from 'rxjs/Observable';
import map from 'rxjs/add/operator/map';
import pluck from 'rxjs/add/operator/pluck';
import first from 'rxjs/add/operator/first';
import last from 'rxjs/add/operator/last';
import find from 'rxjs/add/operator/find';
import findIndex from 'rxjs/add/operator/findIndex';
import single from 'rxjs/add/operator/single';
import skip from 'rxjs/add/operator/skip';
import skipUntil from 'rxjs/add/operator/skipUntil';
import takeUntil from 'rxjs/add/operator/takeUntil';
import skipWhile from 'rxjs/add/operator/skipWhile';
import takeWhile from 'rxjs/add/operator/takeWhile';
import take from 'rxjs/add/operator/take';
import buffer from 'rxjs/add/operator/buffer';
import bufferCount from 'rxjs/add/operator/bufferCount';
import bufferTime from 'rxjs/add/operator/bufferTime';
import interval from 'rxjs/add/observable/interval';
import fromPromise from 'rxjs/add/observable/fromPromise';
import fromEvent from 'rxjs/add/observable/fromEvent';
import range from 'rxjs/add/observable/range';
import timer from 'rxjs/add/observable/timer';
import 'rxjs/add/observable/from';
import of from 'rxjs/add/observable/of';
import { getSubscriber } from './utils/getSubscriber';

// TODO: implement `bind` operator to perform operations/funcs on Observables
// obj::func
// // is equivalent to:
// func.bind(obj)

// const source$ = new Observable(observer => {
//   observer.next(1);
//   observer.next(2);
//   observer.next('Hello');
//   observer.next('World');

//   observer.complete();
// });

// source$.first().subscribe(getSubscriber('First'));

// source$.last().subscribe(getSubscriber('Last'));

// source$.single().subscribe(getSubscriber('Single'));

// source$.find((x, i, observer) => x === 'Hello').subscribe(getSubscriber('Find'));

// source$.findIndex((x, i, observer) => x === 'Hello').subscribe(getSubscriber('Index Found'));

// source$.take(2).subscribe(getSubscriber('Take'));

// source$.skip(2).subscribe(getSubscriber('Skip'));

// const source$ = Observable.range(1, 20);

// source$
//   .skipWhile(i => i <= 5)
//   .takeWhile(i => i < 10)
//   .subscribe(getSubscriber('Skip'));

Observable.interval(500)
  .skipUntil(Observable.timer(2000))
  .takeUntil(Observable.timer(7000))
  .subscribe(getSubscriber('Skip Until'));
