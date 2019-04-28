import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,
  tagName: 'nav',

  classNames: [
    'bg-transparent',
    'flex',
    'flex-wrap',
    'items-center',
    'justify-between',
    'p-6'
  ],

  homeRoute: 'profile',
  linkComponent: 'link-to'
});
