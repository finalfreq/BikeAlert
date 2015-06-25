import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about', {path: '/'});
  this.resource('bikes');
  this.resource('add-user');
  this.resource('subscribe');
  this.resource('users');
  this.resource('success');
  this.resource('user', {path: '/users/:user_id'}, function() {
    this.resource('add-bike');
  });
  this.resource('bike', {path: 'bike/:bike_id'}, function() {
    this.resource('new-message');
  });
  this.route('city-view');
});

export default Router;
