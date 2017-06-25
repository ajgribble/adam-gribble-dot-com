import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('adm-hero-banner', 'Integration | Component | adm hero banner', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{adm-hero-banner}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#adm-hero-banner}}
      template block text
    {{/adm-hero-banner}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
