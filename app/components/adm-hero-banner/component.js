import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  classNames: ['hero', 'layout-column', 'layout-align-gt-sm-center-center', 'layout-align-center'],

  name: '',
  tagline: '',
  email: '',

  taglineParts: computed('tagline', function() {
    return this.tagline.split('.').map(item => item ? `${item}. ` : '');
  })
});
