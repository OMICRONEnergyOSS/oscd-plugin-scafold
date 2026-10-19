import { LitElement } from 'lit';
declare const OscdEditorScafold_base: typeof LitElement & import("@open-wc/dedupe-mixin").Constructor<import("@open-wc/scoped-elements/types.js").ScopedElementsHost> & import("@open-wc/scoped-elements/types.js").ScopedElementsHostConstructor;
export default class OscdEditorScafold extends OscdEditorScafold_base {
    static scopedElements: {};
    doc?: XMLDocument;
    docName?: string;
    docVersion?: unknown;
    locale?: string;
    render(): import("lit-html").TemplateResult<1>;
}
export {};
