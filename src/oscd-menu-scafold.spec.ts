import { expect, fixture, html } from '@open-wc/testing';

import OscdMenuScafold from './oscd-menu-scafold.js';

customElements.define('oscd-menu-scafold', OscdMenuScafold);

describe('oscd-menu-scafold', () => {
  let plugin: OscdMenuScafold;
  let originalAlert: typeof window.alert;
  let messages: string[];

  beforeEach(async () => {
    plugin = await fixture<OscdMenuScafold>(
      html`<oscd-menu-scafold></oscd-menu-scafold>`,
    );
    messages = [];
    originalAlert = window.alert;
    window.alert = (message: string) => {
      messages.push(message);
    };
  });

  afterEach(() => {
    window.alert = originalAlert;
  });

  it('reports the selected document when invoked', () => {
    plugin.docName = 'example.scd';
    plugin.run();
    expect(messages).to.deep.equal([
      'Menu example. Loaded document: example.scd',
    ]);
  });

  it('reports when there is no selected document', () => {
    plugin.run();
    expect(messages).to.deep.equal(['Menu example. No document loaded']);
  });
});
