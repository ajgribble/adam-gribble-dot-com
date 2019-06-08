import { inject as service } from "@ember-decorators/service";
import Route from '@ember/routing/route';
// import { Promise } from 'rsvp';

export default class ApplicationRoute extends Route {
  @service()
  store;

  queryParams = {
    symbols: {
      refreshModel: true
    },
    types: {
      refreshModel: true
    }
  };

  model(params) {
    return this.store.query('analytic', params);
  }
}