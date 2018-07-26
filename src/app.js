import $ from 'jquery';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { getSubscriber } from './utils/getSubscriber';

const m = new Map([[1, 2], [3, 4], [5, 6]]);

const m$ = Observable.from(m);

m$.subscribe(getSubscriber('Map'));
