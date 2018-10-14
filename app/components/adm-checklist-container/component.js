import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  classNames: ['md:flex-1', 'p-4'],
  classNameBindings: ['bgColor', 'borderColor'],

  color: 'grey',

  bgColor: computed('color', function() {
    return `bg-${this.color}`;
  }),
  borderColor: computed('color', function() {
    return `border-${this.color}`;
  })
});
