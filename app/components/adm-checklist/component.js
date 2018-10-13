import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['flex', 'flex-col', 'h-full'],

  textColor: 'white',
  title: '',

  contentItemClass: computed('textColor', function() {
    return `p-2 font-mono font-light text-2xl text-${this.textColor}-lightest`;
  }),
  contentItemLinkClass: computed('textColor', function() {
    return `text-color-inherit no-underline hover:underline`;
  }),
  headerClass: computed('textColor', function() {
    return `mb-8 font-mono font-thin tracking-wide uppercase text-${this.textColor}-lightest`;
  }),

  init() {
    this._super(...arguments);

    this.set('items', this.items || []);
  }
});
