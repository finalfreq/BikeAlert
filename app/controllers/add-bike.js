import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      var newBike = this.store.createRecord('bike', {
        color: this.get('color'),
        model: this.get('model'),
        serial: this.get('serial'),
        location: this.get('location')
      });
      newBike.save();
      this.setProperties({
        color: '',
        model: '',
        serial: '',
        location: ''
      });
      this.transitionToRoute('users');
    }
  }
});
