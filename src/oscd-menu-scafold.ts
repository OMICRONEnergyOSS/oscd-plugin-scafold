import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';
import { msg, str } from '@lit/localize';

export default class OscdMenuScafold extends ScopedElementsMixin(LitElement) {
  static scopedElements = {};

  @property({ attribute: false })
  doc?: XMLDocument;

  @property({ type: String })
  docName?: string;

  @property({ attribute: false })
  docVersion?: unknown;

  @property({ type: String })
  locale?: string;

  run() {
    if (this.docName !== undefined && this.docName.length > 0) {
      alert(msg(str`Menu example. Loaded document: ${this.docName}`));
    } else {
      alert(msg('Menu example. No document loaded'));
    }
  }
}
