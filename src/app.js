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

// Observable.range(0, 10)
//   .filter((x, i, obs) => x >= 5)
//   .subscribe(getSubscriber('filter'));

// Observable.range(0, 10)
//   .filter((x, i, obs) => x % 2 === 0)
//   .subscribe(getSubscriber('filter'));

let input = document.getElementById('input');
let output = document.getElementById('output');

// let products = [
//   { sku: '001', name: 'Red T-Shirt', price: 4.99 },
//   { sku: '002', name: 'Blue Pants', price: 9.99 },
//   { sku: '003', name: 'Green Hat', price: 7.99 },
//   { sku: '004', name: 'Yellow Jacket', price: 24.99 },
// ];

// let input$ = Observable.fromEvent(input, 'keyup')
//   .map(e => e.target.value)
//   .subscribe(x => {
//     Observable.from(products)
//       .filter(({ sku }) => sku === x)
//       .subscribe(y => (output.innerHTML = `<h1>${y.name}: $${y.price}</h1>`));
//   });

// Observable.fromEvent(input, 'keyup')
//   .map(e => e.target.value)
//   .distinct()
//   .debounceTime(300)
//   .subscribe(getSubscriber('Debounce Time'));

// Observable.of(23, 23, 55, 43, 55, 67, 44, 43, 78, 23)
//   .distinctUntilChanged()
//   .distinct()
//   .subscribe(getSubscriber('Value'));
