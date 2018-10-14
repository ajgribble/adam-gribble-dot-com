const {
  GITHUB_BANNER_COLOR,
  GITHUB_USERNAME,
  PROFILE_EMAIL,
  PROFILE_NAME,
  PROFILE_SKILLS,
  TAGLINE
} = process.env;

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'adam-gribble-dot-com',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline'",
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com",
      'font-src': "'self' fonts.gstatic.com",
      'connect-src': "'self'",
      'img-src': "'self' data:",
      'media-src': "'self'"
    },

    APP: {},
    githubBannerColor: GITHUB_BANNER_COLOR || '',
    githubUsername: GITHUB_USERNAME || '',
    profileEmail: PROFILE_EMAIL || '',
    profileName: PROFILE_NAME || '',
    profileSkills: JSON.parse(PROFILE_SKILLS) || [],
    tagline: JSON.parse(TAGLINE) || []
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {

  }

  return ENV;
};
