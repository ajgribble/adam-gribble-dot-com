import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['symbols', 'types'],

  symbols: '',
  types: ''
});