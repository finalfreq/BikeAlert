import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('bike');
  }
});


    // var bikes = this.store.find('bike').then(function(bikes) {
    //   var addresses = [];
    //   for (var i=0; i < bikes.get('length'); i++) {
    //     console.log(bikes.objectAt(i).get('serial'));
    //     var bike = bikes.objectAt(i);
    //     addresses.push(bike.get('address'));
    //   }
    //   address: addresses;
    //   return this.addresses;
    // });
