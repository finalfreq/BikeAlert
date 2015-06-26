import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      if (this.get('name') === undefined || this.get('phone') === undefined || this.get('email') === undefined) {
        alert("Woooooops, you didn't fill something out. Try again.");
      } else {
        var newUser = this.store.createRecord('user', {
          name: this.get('name'),
          phone: this.get('phone'),
          email: this.get('email')
        });
        newUser.save();
        this.setProperties({
          name: '',
          phone: '',
          email: ''
        });
        this.transitionToRoute('users');
      }
    }
  }
});
