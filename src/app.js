import $ from 'jquery';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { getSubscriber } from './utils/getSubscriber';

const str = 'Hello World!';

const str$ = Observable.from(str);

str$.subscribe(getSubscriber('Str'));
