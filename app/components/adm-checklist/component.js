import Component from '@ember/component';

export default Component.extend({
  classNames: ['layout-column', 'flex'],

  title: '',

  init() {
    this._super(...arguments);

    this.set('items', this.get('items') || []);
  }
});
