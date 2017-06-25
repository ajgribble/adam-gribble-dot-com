import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  languages: ['JavaScript (ES6)', 'Python', 'SQL'],
  frameworks: ['EmberJS', 'SailsJS', 'ExpressJS', 'Django', 'AngularJS', 'Flask', 'LeafletJS', 'jQuery'],
  tools: ['ElasticSearch', 'MongoDB', 'MySQL', 'Redis'],
  web: ['HTML', 'CSS', 'LESS', 'SASS', 'Material Design', 'Twitter Bootstrap']
});
