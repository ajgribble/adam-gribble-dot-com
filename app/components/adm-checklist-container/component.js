import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  classNames: ['flex-1', 'text-white'],
  classNameBindings: ['bgColor'],

  color: 'grey',

  bgColor: computed('color', function() {
    return `bg-${this.color}`;
  })
});
