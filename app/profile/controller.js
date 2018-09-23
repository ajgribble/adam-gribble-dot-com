import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super();

    this.setProperties({
      languages: ['JavaScript (ES6)', 'Python', 'SQL'],
      frameworks: ['EmberJS', 'SailsJS', 'ExpressJS', 'Django', 'AngularJS', 'Flask', 'LeafletJS', 'jQuery'],
      taglineParts: ['Full-Stack Engineer', 'Avid Traveler', 'Home Cook'],
      tools: ['ElasticSearch', 'MongoDB', 'MySQL', 'Redis'],
      web: ['HTML', 'CSS', 'LESS', 'SASS', 'Material Design', 'Twitter Bootstrap']
    });
  }
});
