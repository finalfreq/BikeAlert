import DS from 'ember-data';

export default DS.Model.extend({
  color: DS.attr('string'),
  model: DS.attr('string'),
  serial: DS.attr('string'),
  location: DS.attr('string'),
  date: DS.attr('date'),
  user: DS.belongsTo('user')
});
