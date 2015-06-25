import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['user'],
  actions: {
    save: function() {
      var newBike = this.store.createRecord('bike', {
        color: this.get('color'),
        make: this.get('make'),
        serial: this.get('serial'),
        address: this.get('address'),
        image: this.get('image'),
        lost: this.set('true'),
        date: new Date().toDateString()
      });
      var user = this.get('controllers.user.model');
      newBike.save().then(function(){
        user.get('bikes').pushObject(newBike);
        user.save()
      });
      this.setProperties({
        color: '',
        make: '',
        serial: '',
        address: ''
      });
      this.transitionToRoute('users');
    }
  }
});
