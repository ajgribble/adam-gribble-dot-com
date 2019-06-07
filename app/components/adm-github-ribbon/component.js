import { computed } from "@ember/object";
import Component from '@ember/component';

const palette = {
  red: 'aa0000',
  green: '007200',
  darkblue: '121621',
  orange: 'ff7600',
  gray: '6d6d6d',
  white: 'ffffff'
};

export default class AdmGithubRibbonComponent extends Component {
  color = 'red';
  orientation = 'right';
  project = null;
  username = '';

  @computed('project', 'username')
  get link() {
    let url = `https://github.com/${this.username}`;

    if (this.project) {
      url += `/${this.project}`;
    }

    return url;
  }

  @computed('color', 'orientation')
  get imageUrl() {
    return `https://s3.amazonaws.com/github/ribbons/forkme_${
      this.orientation
    }_${this.color}_${palette[this.color]}.png`;
  }
}
