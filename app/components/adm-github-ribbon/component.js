import Component from '@ember/component';
import { computed } from '@ember/object';

const palette = {
  red: "aa0000",
  green: "007200",
  darkblue: "121621",
  orange: "ff7600",
  gray: "6d6d6d",
  white: "ffffff"
}

export default Component.extend({
  color: 'red',
  orientation: 'right',
  project: null,
  username: '',

  link: computed('project', 'username', function() {
    let url = `https://github.com/${this.username}`; 

    if (this.project) {
      url += `/${this.project}`;
    }

    return url
  }),
  imageUrl: computed('color', 'orientation', function() {
    return `https://s3.amazonaws.com/github/ribbons/forkme_${this.orientation}_${this.color}_${palette[this.color]}.png`;
  })
});
