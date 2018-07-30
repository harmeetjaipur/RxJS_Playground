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
import zip from 'rxjs/add/observable/zip';
import combineLatest from 'rxjs/add/observable/combineLatest';
import withLatestFrom from 'rxjs/add/operator/withLatestFrom';
import concat from 'rxjs/add/observable/concat';
import concatMap from 'rxjs/add/operator/concatMap';
import delay from 'rxjs/add/operator/delay';
import filter from 'rxjs/add/operator/filter';
import distinct from 'rxjs/add/operator/distinct';
import distinctUntilChanged from 'rxjs/add/operator/distinctUntilChanged';
import debounceTime from 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/from';
import of from 'rxjs/add/observable/of';
import { getSubscriber } from './utils/getSubscriber';
import { resolve } from 'path';

import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject, AsyncSubject } from 'rxjs';

// TODO: implement `bind` operator to perform operations/funcs on Observables
// obj::func
// // is equivalent to:
// func.bind(obj)

// const subject$ = new Subject();

// subject$.subscribe(getSubscriber('Subject'));

// subject$.next('Hello');
// subject$.next('World');

// const interval$ = new Observable.interval(1000);
// const intervalSubject$ = new Subject();

// interval$.subscribe(intervalSubject$);

// intervalSubject$.subscribe(getSubscriber('S1'));
// intervalSubject$.subscribe(getSubscriber('S2'));
// intervalSubject$.subscribe(getSubscriber('S3'));

// setTimeout(() => intervalSubject$.subscribe(getSubscriber('S4')), 4000);

// Behaviour subject
// const subject$ = new BehaviorSubject(45);

// subject$.next(55);
// subject$.complete();

// Replay
// const subject$ = new ReplaySubject(4);

// subject$.next(1);
// subject$.next(2);
// subject$.next(3);
// subject$.next(4);

// subject$.subscribe(getSubscriber('Replay'));

const subject$ = new AsyncSubject();

subject$.next(1);
subject$.next(2);
subject$.complete();
subject$.subscribe(getSubscriber('Async'));
