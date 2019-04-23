import DS from 'ember-data';
const { attr, Model } = DS;

export default Model.extend({
  chart: attr(),
  news: attr(),
  quote: attr()
});
