import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  text: DS.attr('string'),
  date: DS.attr('date'),
  bike: DS.belongsTo('bike', { async: true })
});
