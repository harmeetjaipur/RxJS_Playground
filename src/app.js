import $ from 'jquery';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

const input = document.getElementById('input');
const button = document.getElementById('button');
const coords = document.getElementById('coords');

const buttonStream$ = Observable.fromEvent(button, 'click');

buttonStream$.subscribe(
  x => {
    console.log(x);
  },
  err => console.error(err),
  () => console.log('Completed'),
);

const inputStream$ = Observable.fromEvent(input, 'keyup');

inputStream$.subscribe(
  x => {
    console.log(x.target.value);
  },
  err => console.err(err),
  () => console.log('Completed'),
);

const mouseMove$ = Observable.fromEvent(document, 'mousemove').subscribe(x => {
  coords.innerHTML = x.clientX + ' ' + x.clientY;
});
