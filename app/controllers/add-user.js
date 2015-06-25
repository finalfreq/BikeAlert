import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var newUser = this.store.createRecord('user', {
        name: this.get('name'),
        phone: this.get('phone'),
        email: this.get('email')
      });
      newUser.save();
      this.setProperties({
        name: '',
        phone: ''
      });
      this.transitionToRoute('users');
    }
  }
});
