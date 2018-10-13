import Controller from '@ember/controller';
import ENV from 'adam-gribble-dot-com/config/environment';

const { profileEmail, profileName, profileSkills, tagline } = ENV;

export default Controller.extend({
  init() {
    this._super();

    this.setProperties({
      email: profileEmail,
      name: profileName,
      skills: profileSkills,
      tagline
    });
  }
});
