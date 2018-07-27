import $ from 'jquery';
import { Observable } from 'rxjs/Observable';
import publish from 'rxjs/add/operator/publish';
import fromPromise from 'rxjs/add/observable/fromPromise';
import fromEvent from 'rxjs/add/observable/fromEvent';
import of from 'rxjs/add/observable/of';
import { getSubscriber } from './utils/getSubscriber';

const input = document.getElementById('input');
const profile = document.getElementById('profile');

profile.style.display = 'none';

Observable.fromEvent(input, 'keyup').subscribe(e => {
  Observable.fromPromise(getGithubUser(e.target.value)).subscribe(user => {
    profile.style.display = 'block';
    document.getElementById('name').innerHTML = user.data.name || 'No name found.';
    document.getElementById('login').innerHTML = user.data.login;
    document.getElementById('blog').innerHTML = user.data.blog;
    document.getElementById('avatar').innerHTML = user.data.avatar_url;
    document.getElementById('repos').innerHTML = user.data.public_repos;
    document.getElementById('followers').innerHTML = user.data.followers;
    document.getElementById('following').innerHTML = user.data.following;
    document.getElementById('link').setAttribute('href', user.data.html_url);
  });
});

function getGithubUser(userName) {
  return $
    .ajax({
      url: `https://api.github.com/users/${userName}?client_id=6a6b7b4c083f4d7a224d&client_secret=2f3879b89e0c6e104062530ac484e6fee8a7f5e6`,
      dataType: 'jsonp',
    })
    .promise();
}
