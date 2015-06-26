import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['user'],
  actions: {
    save: function() {
      if (this.get('color') === undefined || this.get('make') === undefined || this.get('serial') === undefined || this.get('address') === undefined || this.get('image') === undefined) {
        alert("Woooooops, you didn't fill something out. Try again.");
      } else {
        var newBike = this.store.createRecord('bike', {
          color: this.get('color'),
          make: this.get('make'),
          serial: this.get('serial'),
          address: this.get('address'),
          image: this.get('image'),
          lost: this.set('true'),
          date: new Date()
        });
        var user = this.get('controllers.user.model');
        newBike.set('user', user);
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
  }
});
