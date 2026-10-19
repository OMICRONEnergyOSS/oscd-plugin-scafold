import { expect, fixture, html } from '@open-wc/testing';

import OscdEditorScafold from './oscd-editor-scafold.js';

customElements.define('oscd-editor-scafold', OscdEditorScafold);

describe('oscd-editor-scafold', () => {
  it('updates the displayed document context', async () => {
    const plugin = await fixture<OscdEditorScafold>(
      html`<oscd-editor-scafold></oscd-editor-scafold>`,
    );
    expect(plugin.shadowRoot?.textContent).to.include('No document loaded');

    plugin.doc = document.implementation.createDocument(null, 'example');
    plugin.docName = 'example.scd';
    await plugin.updateComplete;
    expect(plugin.shadowRoot?.textContent).to.include(
      'Selected document: example.scd',
    );

    plugin.doc = undefined;
    plugin.docName = undefined;
    await plugin.updateComplete;
    expect(plugin.shadowRoot?.textContent).to.include('No document loaded');
  });
});
