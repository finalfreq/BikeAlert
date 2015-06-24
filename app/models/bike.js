import DS from 'ember-data';

export default DS.Model.extend({
  color: DS.attr('string'),
  make: DS.attr('string'),
  serial: DS.attr('string'),
  location: DS.attr('string'),
  date: DS.attr('date'),
  lost: DS.attr('boolean'),
  user: DS.belongsTo('user', { async: true })
});
