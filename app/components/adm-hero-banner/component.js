import Ember from 'ember';

const { computed, Component } = Ember;

export default Component.extend({
  classNames: ['hero', 'layout-column', 'layout-align-gt-sm-center-center', 'layout-align-center'],

  name: '',
  tagline: '',
  email: '',

  taglineParts: computed('tagline', function() {
    return this.get('tagline').split('.').map(item => item ? `${item}. ` : '');
  })
});
