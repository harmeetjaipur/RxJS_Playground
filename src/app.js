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
import mergeOp from 'rxjs/add/operator/merge';
import mergeAll from 'rxjs/add/operator/mergeAll';
import mergeMap from 'rxjs/add/operator/mergeMap';
import concatAll from 'rxjs/add/operator/concatAll';
import merge from 'rxjs/add/observable/merge';
import concat from 'rxjs/add/observable/concat';
import concatMap from 'rxjs/add/operator/concatMap';
import filter from 'rxjs/add/operator/filter';
import distinct from 'rxjs/add/operator/distinct';
import distinctUntilChanged from 'rxjs/add/operator/distinctUntilChanged';
import debounceTime from 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/from';
import of from 'rxjs/add/observable/of';
import { getSubscriber } from './utils/getSubscriber';
import { resolve } from 'path';

// TODO: implement `bind` operator to perform operations/funcs on Observables
// obj::func
// // is equivalent to:
// func.bind(obj)

// Wrong way: Nested subscribe()
// Observable.of('Hello').subscribe(v => {
//   Observable.of(`${v}  World`).subscribe(getSubscriber('Wrong'));
// });

// Right way: user mergeMap()
// Observable.of('Hello')
//   .mergeMap(v => Observable.of(`${v} World!`))
//   .subscribe(getSubscriber('Right'));

// const myPromise = v => new Promise((res, rej) => res(`${v} World from Promise!`));

// Observable.of('Hello')
//   .mergeMap(x => myPromise(x))
//   .subscribe(getSubscriber('Promise'));

Observable.range(0, 10)
  .concatMap((x, i) =>
    Observable.interval(100)
      .take(x)
      .map(() => i),
  )
  .subscribe(getSubscriber('C All'));
