# OpenSCD Plugin Scafold

[oscd-plugin-scafold](https://github.com/OMICRONEnergyOSS/oscd-plugin-scafold)
is a minimal starter demonstrating two OpenSCD plugins in one package.
The repository deliberately uses the spelling `scafold`.

| Plugin | Source | Package import | Bundled entry |
|---|---|---|---|
| Editor | `src/oscd-editor-scafold.ts` | `@omicronenergy/oscd-plugin-scafold/oscd-editor-scafold.js` | `dist/oscd-editor-scafold.js` |
| Menu | `src/oscd-menu-scafold.ts` | `@omicronenergy/oscd-plugin-scafold/oscd-menu-scafold.js` | `dist/oscd-menu-scafold.js` |

There is no default package-root export: select the plugin explicitly.
The editor displays the current document name; the menu's `run()` method
displays an alert. Neither changes the document. Both use scoped Lit elements
and accept reactive document context, `docVersion` and locale.

## Development

In a Git checkout, run `npm install`, then `npm start`.
Installation runs `oscd install-hooks`, which generates `.githooks/` and sets
that checkout's local Git `core.hooksPath`. For a deliberately non-Git copy,
use `npm install --ignore-scripts` and install hooks later in a real checkout.

| Command | Purpose |
|---|---|
| `npm run build` | TypeScript modules and declarations in `dist/` |
| `npm run bundle` | Two standalone plugin bundles and `dist/demo/` |
| `npm test` | Focused behavior tests in Chromium |
| `npm run test:watch` | Compile and rerun unit tests as source changes |
| `npm run lint` | Shared ESLint checks without fixes |
| `npm run format` | Explicit opt-in ESLint auto-fixes, including formatting |
| `npm start` | Development/watch demo |
| `npm run start:bundle` | Bundled/watch demo |
| `npm run deploy` | Publish bundled output to GitHub Pages |

Tooling comes from `@omicronenergy/oscd-tooling`. TypeScript and ESLint use thin
shared-config wrappers. `rollup.config.js` extends the shared config for two
plugin entries while retaining its demo bundle. Manifest generation and
Prettier are not configured. The starter has no screenshot/visual assertions.
If Chromium is missing, run `npx oscd install-playwright`.

The demo registers both local plugins in the shell's registry using `tagName`.
It also includes Open/Save, the EditV1 background listener and a remote Source
Editor. Google Fonts and the Source Editor require network access.

The copied GitHub workflows delegate testing, deployment and releases to
`OMICRONEnergyOSS/oscd-gh-workflows`. Release configuration starts at `0.0.0`;
configure repository permissions/secrets before using release or deployment
automation. No release history from the menu template is included.

## Start a real plugin

Most plugins need only one entry. Keep both only when that is intentional.
Before introducing migrated code:

1. Choose editor, menu or both. For an editor-only target, delete
   `src/oscd-menu-scafold.ts` and its `.spec.ts`; for menu-only, delete
   `src/oscd-editor-scafold.ts` and its `.spec.ts`.
2. Remove the discarded plugin's `package.json` export and
   `rollup.config.js` entry. For a single entry, the local Rollup override can
   be removed only if the source basename matches the package name, as required
   by the shared default.
3. Remove its import, registry definition and menu/editor entry from
   `demo/plugins.js`. Keep the remote Source Editor alongside the retained
   plugin, not instead of it.
4. Rename retained source/spec filenames, classes, tags, package exports and
   Rollup inputs. Update test imports/fixtures/descriptions, demo registrations,
   labels, `demo/index.html` title, repository/package metadata and this README.
   Preserve relative `.js` import extensions and update the lockfile with npm.
5. Remove unneeded dependencies and helpers only after checking direct imports.
   Do not retain the example alert or document display as migrated behavior.
   Replace them with the target implementation and relevant tests.
6. Create the target's own migration worklog; do not copy this repository's
   development worklog or Git history. Clean/rebuild so stale outputs from the
   removed entry cannot ship. Check exports, package files, demo and tests.

When the target edits XML, add the current `@openscd/oscd-api` dependency and
dispatch supported edit events; these read-only examples do not demonstrate
document edits. Keep shared tooling rather than restoring legacy local configs.

## License

Copyright 2026 OMICRON electronics GmbH.

[Apache-2.0](LICENSE)
