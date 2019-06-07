import { classNames, tagName, layout as templateLayout } from "@ember-decorators/component";
import Component from '@ember/component';
import layout from './template';

@templateLayout(layout)
@tagName('nav')
@classNames(
  'bg-transparent',
  'flex',
  'flex-wrap',
  'items-center',
  'justify-between',
  'p-6'
)
export default class AdmNavbarComponent extends Component {
  homeRoute = 'profile';
  linkComponent = 'link-to';
}
