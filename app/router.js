import EmberRouter from '@ember/routing/router';
import config from 'jc-resume/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('items');
  this.route('experience');
  this.route('education');
  this.route('technology');
  this.route('projects');
});
