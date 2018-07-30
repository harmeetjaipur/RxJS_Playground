import $ from 'jquery';
import { Observable } from 'rxjs/Observable';
import map from 'rxjs/add/operator/map';
import pluck from 'rxjs/add/operator/pluck';
import take from 'rxjs/add/operator/take';
import buffer from 'rxjs/add/operator/buffer';
import bufferCount from 'rxjs/add/operator/bufferCount';
import bufferTime from 'rxjs/add/operator/bufferTime';
import interval from 'rxjs/add/observable/interval';
import fromPromise from 'rxjs/add/observable/fromPromise';
import fromEvent from 'rxjs/add/observable/fromEvent';
import range from 'rxjs/add/observable/range';
import 'rxjs/add/observable/from';
import of from 'rxjs/add/observable/of';
import { getSubscriber } from './utils/getSubscriber';

// TODO: implement bind operator to perform operations/funcs on Observables
// obj::func
// // is equivalent to:
// func.bind(obj)

// Observable.interval(1000)
//   .buffer(Observable.interval(2000))
//   .subscribe(getSubscriber('buffer'));

// Observable.range(1, 100)
//   .bufferCount(4)
//   .subscribe(getSubscriber('bcount'));

// Observable.interval(1000)
//   .bufferTime(5000)
//   .subscribe(getSubscriber('btime'));

const obs1$ = Observable.interval(1000);
const obs2$ = Observable.fromEvent(document, 'click');

const myBuffer = obs1$.buffer(obs2$);

const subscribe = myBuffer.subscribe(getSubscriber('Buffered  Values'));
