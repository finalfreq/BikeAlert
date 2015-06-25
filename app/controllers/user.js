import Ember from 'ember';

export default Ember.Controller.extend({
  isSubscribed: false,
  actions: {
    subscribe: function() {
      this.set('isSubscribed', true);
    }
  }
});
