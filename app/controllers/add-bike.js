import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['user'],
  actions: {
    save: function() {
      var newBike = this.store.createRecord('bike', {
        color: this.get('color'),
        make: this.get('make'),
        serial: this.get('serial'),
        location: this.get('location'),
        image: this.get('image'),
        lost: this.set('true')
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
        location: ''
      });
      this.transitionToRoute('users');
    }
  }
});
