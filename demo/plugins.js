import OscdMenuOpen from '@omicronenergy/oscd-menu-open';
import OscdMenuSave from '@omicronenergy/oscd-menu-save';
import OscdBackgroundEditV1 from '@omicronenergy/oscd-background-editv1';

import OscdEditorScafold from '../dist/oscd-editor-scafold.js';
import OscdMenuScafold from '../dist/oscd-menu-scafold.js';

const shell = document.querySelector('oscd-shell');
if (!shell?.registry) {
  throw new Error('Cannot register demo plugins: oscd-shell registry not found');
}

shell.registry.define('oscd-menu-open', OscdMenuOpen);
shell.registry.define('oscd-menu-save', OscdMenuSave);
shell.registry.define('oscd-background-editv1', OscdBackgroundEditV1);
shell.registry.define('oscd-editor-scafold', OscdEditorScafold);
shell.registry.define('oscd-menu-scafold', OscdMenuScafold);

export const plugins = {
  menu: [
    {
      name: 'Open File',
      icon: 'folder_open',
      tagName: 'oscd-menu-open',
    },
    {
      name: 'Save File',
      icon: 'save',
      requireDoc: true,
      tagName: 'oscd-menu-save',
    },
    {
      name: 'Menu example',
      icon: 'edit',
      tagName: 'oscd-menu-scafold',
    },
  ],
  editor: [
    {
      name: 'Editor example',
      icon: 'edit',
      tagName: 'oscd-editor-scafold',
    },
    {
      name: 'Source Editor',
      icon: 'data_object',
      requireDoc: true,
      src: 'https://omicronenergyoss.github.io/oscd-editor-source/oscd-editor-source.js',
    },
  ],
  background: [
    {
      name: 'EditV1 Events Listener',
      icon: 'none',
      requireDoc: true,
      tagName: 'oscd-background-editv1',
    },
  ],
};
