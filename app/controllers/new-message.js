import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['bike'],
  actions: {
    save: function() {
      var bike = this.get('controllers.bike.model');
      var newMessage = this.store.createRecord('message', {
        text: this.get('text')
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
