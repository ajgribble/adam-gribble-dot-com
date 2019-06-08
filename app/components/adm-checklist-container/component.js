import { className, classNames } from "@ember-decorators/component";
import { computed } from "@ember/object";
import Component from '@ember/component';

@classNames('md:flex-1', 'p-4')
class AdmChecklistContainerComponent extends Component {
  color = 'grey';

  @computed('color')
  @className
  get bgColor() {
    return `bg-${this.color}`;
  }

  @computed('color')
  @className
  get borderColor() {
    return `border-${this.color}`;
  }
}

export default AdmChecklistContainerComponent;