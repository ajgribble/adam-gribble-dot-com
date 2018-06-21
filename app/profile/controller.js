import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super();

    this.set({
      languages: ['JavaScript (ES6)', 'Python', 'SQL'],
      frameworks: ['EmberJS', 'SailsJS', 'ExpressJS', 'Django', 'AngularJS', 'Flask', 'LeafletJS', 'jQuery'],
      tools: ['ElasticSearch', 'MongoDB', 'MySQL', 'Redis'],
      web: ['HTML', 'CSS', 'LESS', 'SASS', 'Material Design', 'Twitter Bootstrap']
    });
  }
});
