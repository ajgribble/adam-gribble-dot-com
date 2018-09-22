import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | adm checklist container', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{adm-checklist-container}}`);

    assert.dom('*').hasText('');

    // Template block usage:
    await render(hbs`
      {{#adm-checklist-container}}
        template block text
      {{/adm-checklist-container}}
    `);

    assert.dom('*').hasText('template block text');
  });
});
