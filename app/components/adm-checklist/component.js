import { classNames } from "@ember-decorators/component";
import { computed } from "@ember/object";
import Component from '@ember/component';

@classNames('flex', 'flex-col', 'h-full')
class AdmChecklistComponent extends Component {
  textColor = 'white';
  title = '';

  @computed('textColor')
  get contentItemClass() {
    return `p-2 font-mono font-light text-sm lg:text-xl text-${this.textColor}-lightest`;
  }

  @computed('textColor')
  get contentItemLinkClass() {
    return `text-color-inherit no-underline hover:underline cursor-default`;
  }

  @computed('textColor')
  get headerClass() {
    return `mb-2 md:mb-4 lg:mb-8 font-mono font-thin tracking-wide uppercase sm:text-xs lg:text-lg text-${
      this.textColor
    }-lightest`;
  }

  init() {
    super.init(...arguments);

    this.set('items', this.items || []);
  }
}

export default AdmChecklistComponent;
