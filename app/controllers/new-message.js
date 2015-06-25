import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['bike'],
  actions: {
    save: function() {
      var bike = this.get('controllers.bike.model');
      var newMessage = this.store.createRecord('message', {
        name: this.get('name'),
        text: this.get('text'),
        date: new Date()
      });

      newMessage.save().then(function() {
        bike.get('messages').pushObject(newMessage);
        bike.save();

      });

      this.setProperties({
        text: ''
      });
    }
  }
});
