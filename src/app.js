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
import concatAll from 'rxjs/add/operator/concatAll';
import merge from 'rxjs/add/observable/merge';
import concat from 'rxjs/add/observable/concat';
import filter from 'rxjs/add/operator/filter';
import distinct from 'rxjs/add/operator/distinct';
import distinctUntilChanged from 'rxjs/add/operator/distinctUntilChanged';
import debounceTime from 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/from';
import of from 'rxjs/add/observable/of';
import { getSubscriber } from './utils/getSubscriber';

// TODO: implement `bind` operator to perform operations/funcs on Observables
// obj::func
// // is equivalent to:
// func.bind(obj)

// Observable.of('Hello')
//   .merge(Observable.of('World'))
//   .subscribe(getSubscriber('Merge'));

// Observable.interval(2000)
//   .merge(Observable.interval(500))
//   .take(25)
//   .subscribe(getSubscriber('Merge'));

// let source1$ = Observable.interval(2000).map(v => `M1: ${v}`);
// let source2$ = Observable.interval(500).map(v => `M2: ${v}`);

// Observable.merge(source1$, source2$)
//   .take(25)
//   .subscribe(getSubscriber('Merge'));

// Observable.range(0, 3)
//   .map(x => Observable.range(0, 3))
//   .mergeAll()
//   .subscribe(getSubscriber('Merge All'));

// let source1$ = Observable.range(1, 5).map(v => `Source1: ${v}`);
// let source2$ = Observable.range(6, 5).map(v => `Source2: ${v}`);

// Observable.concat(source1$, source2$).subscribe(getSubscriber('Concat'));

// Observable.range(0, 3)
//   .map(x => Observable.range(x, 3))
//   .concatAll()
//   .subscribe(getSubscriber('All'));
