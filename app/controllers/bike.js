import Ember from 'ember';

export default Ember.Controller.extend({
  found: false,
  needs: ['user'],
  actions: {
    found: function() {
      this.set('found', true);
      var bike = this.get('model');
      var user = this.get('controllers.user.model');
      bike.set('lost', false);
      var foundDate = new Date();
      bike.set('date', foundDate);
      bike.save().then(function() {
        user.save();
      });
    }
  }
});
