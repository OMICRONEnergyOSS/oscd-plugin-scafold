import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { msg, str } from '@lit/localize';

export default class OscdEditorScafold extends ScopedElementsMixin(LitElement) {
  static scopedElements = {};

  @property({ attribute: false })
  doc?: XMLDocument;

  @property({ type: String })
  docName?: string;

  @property({ attribute: false })
  docVersion?: unknown;

  @property({ type: String })
  locale?: string;

  render() {
    return html`
      <h1>${msg('Editor plugin example')}</h1>
      <p>
        ${this.doc !== undefined
          ? msg(str`Selected document: ${this.docName ?? ''}`)
          : msg('No document loaded')}
      </p>
    `;
  }
}
