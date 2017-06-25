import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('adm-checklist-container', 'Integration | Component | adm checklist container', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{adm-checklist-container}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#adm-checklist-container}}
      template block text
    {{/adm-checklist-container}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
