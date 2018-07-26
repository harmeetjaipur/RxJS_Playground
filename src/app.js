import $ from 'jquery';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { getSubscriber } from './utils/getSubscriber';

const users = [
  { name: 'John Doe', email: 'jdoe@gmail.com' },
  { name: 'Sam  Smith', email: 'ssmith@gmail.com' },
  { name: 'Jen Thompson', email: 'jthompson@gmail.com' },
];

const users$ = Observable.from(users);

users$.subscribe(getSubscriber('users'));
