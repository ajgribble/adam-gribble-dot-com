import Ember from 'ember';

const { computed, Component } = Ember;

export default Component.extend({
  classNames: ['checklist-container', 'flex-xs-100', 'flex-sm-100', 'flex-gt-sm-25'],
  classNameBindings: ['bgColor'],

  color: 'grey',

  bgColor: computed('color', function() {
    return `bg-${this.get('color')}`
  })
});
