import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
// import { Promise } from 'rsvp';

export default Route.extend({
  store: service(),

  queryParams: {
    symbols: {
      refreshModel: true
    },
    types: {
      refreshModel: true
    }
  },

  model(params) {
    return this.store.query('analytic', params);
  }
})