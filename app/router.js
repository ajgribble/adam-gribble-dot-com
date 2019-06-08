import EmberRouter from '@ember/routing/router';
import config from './config/environment';

class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('profile', { path: '/' });

  this.mount('sample-dashboard', {
    resetNamespace: true,
    path: 'stock-dashboard'
  });
});

export default Router;
