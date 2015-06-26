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
      bike.set('story', this.get('story'))
      var foundDate = new Date();
      bike.set('date', foundDate);
      bike.save().then(function() {
        user.save();
      });
    },

    show: function() {
        $("#foundModal").modal('show');
    },

    delete: function(message) {
      if(confirm('are you sure you want to delete message?')) {
        var bike = this.get('model');

        this.store.find('message', message.get('id')).then(function(message){
          message.destroyRecord();
          message.save();
        });

        bike.save();
      }
    }
  }
});
