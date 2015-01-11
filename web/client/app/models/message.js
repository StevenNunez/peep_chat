import DS from 'ember-data';

export default DS.Model.extend({
  body: DS.attr('string'),
  room: DS.belongsTo('room')
});
