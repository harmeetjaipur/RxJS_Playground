import $ from 'jquery';
import { Observable } from 'rxjs/Observable';
import map from 'rxjs/add/operator/map';
import pluck from 'rxjs/add/operator/pluck';
import take from 'rxjs/add/operator/take';
import interval from 'rxjs/add/observable/interval';
import fromPromise from 'rxjs/add/observable/fromPromise';
import fromEvent from 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/from';
import of from 'rxjs/add/observable/of';
import { getSubscriber } from './utils/getSubscriber';

// Observable.interval(1000)
//   .take(10)
//   .map(v => v * v)
//   .subscribe(getSubscriber('map'));

// let names = ['Bob', 'John', 'Mike'];

// Observable.from(names)
//   .map(v => v.toUpperCase())
//   .subscribe(getSubscriber('Names'));

// const input = document.getElementById('input');
// const length = document.getElementById('length');

// Observable.fromEvent(input, 'keyup')
//   .map(e => e.target.value)
//   .map(v => {
//     return {
//       value: v,
//       length: v.length,
//     };
//   })
//   .subscribe(e => {
//     length.innerHTML = e.length;
//   });

// function getGithubUser(userName) {
//   return $
//     .ajax({
//       url: `https://api.github.com/users/${userName}?client_id=6a6b7b4c083f4d7a224d&client_secret=2f3879b89e0c6e104062530ac484e6fee8a7f5e6`,
//       dataType: 'jsonp',
//     })
//     .promise();
// }

// Observable.fromPromise(getGithubUser('harmeetjaipur'))
//   .map(obj => obj.data)
//   .subscribe(user => {
//     console.log(user);
//   });

// Observable.interval(2000)
//   .take(10)
//   .mapto('Hello World')
//   .subscribe(getSubscriber('mapto'));

const arr = [{ val: 0 }, { val: 1 }, { val: 2 }, { val: 3 }, { val: 4 }];

Observable.from(arr)
  .pluck('val')
  .subscribe(x => {
    console.log(x);
  });
