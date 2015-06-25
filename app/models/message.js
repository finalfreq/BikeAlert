import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  bike: DS.belongsTo('bike', { async: true })
});
