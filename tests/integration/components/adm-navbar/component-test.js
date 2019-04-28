import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | adm-navbar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{adm-navbar}}`);

    assert.equal(this.element.textContent.trim(), 'AdamGribble.com');

    // Template block usage:
    await render(hbs`
      {{#adm-navbar}}{{/adm-navbar}}
    `);

    assert.equal(this.element.textContent.trim(), 'AdamGribble.com');
  });
});