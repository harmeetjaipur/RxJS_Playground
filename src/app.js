import $ from 'jquery';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

import { getSubscriber } from './utils/getSubscriber';

const nums = [34, 45, 56, 78, 89, 90];

const nums$ = Observable.from(nums);

nums$.subscribe(getSubscriber('nums'));
