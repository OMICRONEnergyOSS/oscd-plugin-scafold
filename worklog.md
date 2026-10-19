# Combined plugin scaffold worklog

## Goal and scope

Create the approved `oscd-plugin-scafold` editor/menu starter from the
modernized menu template. Provide separate exports, bundles, tests and demo
entries; update migration skills to require this scaffold and prune the unused
plugin kind. No Git initialization, staging, commits, remote configuration,
publishing or pushes.

## Resources

| Resource | Location / revision | Purpose |
|---|---|---|
| Destination | `/Users/stee/code/OMICRONEnergyOSS/oscd-plugin-scafold` | Approved sibling workspace; newly created |
| Canonical repository | https://github.com/OMICRONEnergyOSS/oscd-plugin-scafold | Owner supplied URL; GitHub API confirmed empty before implementation |
| Source template | `../oscd-template-menu`, baseline `bf1cec4b1b6a9f407938afee0fe88be05350d100` plus uncommitted modernization | Shared tooling, demo assets and configuration |
| Phase plan and approval | `../oscd-template-menu/worklog.md`, Combined scaffold phase | Full plan; owner approved plan and destination |
| Shared instructions | `~/.agents/agent-instructions.md` | Worklog and approval boundaries |
| Tooling | `@omicronenergy/oscd-tooling@0.0.8` | Published README and shared configs inspected |
| Migration skills | `~/.agents/skills/plugin-migration/`, `~/.agents/skills/adapt-menu-template/` | Canonical scaffold selection and pruning guidance |
| Skill template | `~/.agents/skills/TEMPLATE.md` | Required shape and budgets |

## Technical analysis

The source template is menu-only. The new package needs two explicit subpath
exports and two standalone bundles. Shared Rollup defaults assume a single
source named after the package, so a small local extension will supply two
entry configurations while preserving the shared demo configuration.

Use scoped Lit plugins with reactive document context, `docVersion` and
localizable strings. The editor displays context; the menu demonstrates
on-demand invocation. Neither changes XML. Give each its own focused unit
spec; omit the source's pretend visual test and unused nsdoc helper.
Keep the demo's scoped registry pattern and remote Source Editor.

Copy maintained inputs only, not `.git`, installed/generated output, historical
release state or the source task log. Install with `--ignore-scripts` here:
this is deliberately not a Git checkout, and hook installation belongs in a
future real checkout. Do not change an ancestor repository's configuration.

## Questions and decisions

| ID | Decision | Evidence / status |
|---|---|---|
| DP-1 | Name/URL use `oscd-plugin-scafold`, one "f" | Owner supplied actual remote setup instructions; verified empty |
| DP-2 | Sibling-folder destination and phase plan | Explicitly approved: "Approve plan and sibling-folder destination" |
| DP-3 | No Git writes or remote publishing | Plan boundary; supplied setup example not executed |
| DP-4 | Both plugin kinds with explicit pruning guidance | Owner request; separate exports and demo entries |
| DP-5 | Starting package/release-please version is `0.0.0` everywhere in both starters | Owner confirmed; package, both lockfile root fields and release manifest checked |

## Implementation plan

| Step | Changes | Prerequisites | Exit |
|---|---|---|---|
| 1 | Confirm resources, plan and destination | Template modernized | Explicit approval recorded |
| 2 | Create source/specs, metadata, bundle config, demo and README | Step 1 | Install, type-check, lint, build/bundle and focused tests pass |
| 3 | Update migration/adaptation skills and references | Canonical scaffold structure established | Name/URL, mandatory basis, removal checklist and planning boundary consistent; budgets/links pass |
| 4 | Verify both demo modes and package contents; update handoff | Steps 2 and 3 | Both plugins load/run; intended artifacts; results recorded |

## Plan approval

- Status: approved, including the sibling-folder destination.
- Evidence: owner selected "Approve plan and sibling-folder destination".
- Scope: local scaffold, shared migration guidance and verification.
- No Git initialization or hook/configuration writes authorized for this phase.

## Step Status

| Step | Status | Evidence / next action |
|---|---|---|
| 1 - Planning | done | Approved plan recorded above |
| 2 - Scaffold | done | Separate entries, specs, exports, bundles and demo |
| 3 - Skills | done | Canonical basis and pruning guidance validated |
| 4 - Verification/handoff | done | Both demo modes and package contents checked |

## Step 1 Completion Summary

### Decision points applied

- DP-1 and DP-2: actual canonical repository spelling, empty remote, sibling
  destination and plan confirmed with the owner before implementation.
- DP-3: no Git initialization or supplied commit/push commands executed.

## Step 2 Completion Summary

### Files created / copied / transformed

- `src/oscd-editor-scafold.ts`, `src/oscd-menu-scafold.ts` — independent scoped
  plugins with reactive document properties, localizable example output and
  no document mutation. Dynamic messages use Lit Localize's `str` templates.
- Co-located `.spec.ts` files — editor document-context transitions and menu
  alerts with/without a selected document. No modal dialogs left open by tests.
- `package.json`, `package-lock.json` — new identity and two explicit subpath
  exports, shared tooling, directly imported dependencies; no package-root
  default export. Lockfile generated with npm, not copied.
- `rollup.config.js` — two configurations extending the shared plugin bundle,
  followed by the shared demo configuration. Both outputs are standalone.
- `demo/plugins.js`, `demo/index.html`, `demo/sample.scd` — both local plugin
  registrations and entries, Source Editor retained; existing sample copied
  unchanged from the template, page title renamed.
- `README.md` — commands, hook side effects, both entry points and complete
  editor-only/menu-only pruning and rename instructions.
- `LICENSE`, `.editorconfig`, `.gitignore`, thin ESLint/TypeScript configs and
  `.github/workflows/` — copied maintained inputs from the modernized template.
- `release-please-config.json` — retained release configuration;
  `.release-please-manifest.json` initialized at `0.0.0`, not prior release
  history. No historical changelog copied.
- No unused nsdoc module, placeholder visual spec, `.git`, `.githooks`,
  source-template worklog or installed/generated source outputs copied.

### Verification

- `npm install --ignore-scripts --no-audit --no-fund` — passed without hook
  execution or ancestor Git configuration changes. npm emitted transitive
  dependency deprecation warnings; no dependency audit or unrelated upgrades.
- `npx tsc --noEmit`, `npm run lint`, `npm run build`, `npm test`,
  `npm run bundle` — passed, including after Localize adjustments. Three unit
  cases in two spec files. No auto-format/fix command ran.

## Step 3 Completion Summary

### Files transformed

- `~/.agents/skills/plugin-migration/SKILL.md` — names/links the canonical
  repository, requires it as target basis and requires unused-plugin removal.
- Its `reference/step-1.md`, `step-2.md` and
  `migration-worklog-template.md` — require resolved scaffold path/revision,
  selected plugin kind, complete source/spec/export/bundle/demo/doc pruning,
  approved copying only, no copied development worklog/history, and package
  artifact checks.
- `~/.agents/skills/adapt-menu-template/SKILL.md` — existing skill name retained
  for compatibility; now selects the existing editor or menu rather than
  needlessly converting every editor from a menu.
- Its `reference/transformations.md` and `rename-and-demo.md` — align retained
  source, tests, metadata, bundling and scoped demo registration; remove obsolete
  hard-coded output paths and assumptions about phase-based property usage.

### Verification

- Python read-only shape/budget/link check — passed after correcting one
  relative `SKILL.md` reference in Step 1 guidance.
- Migration: description 22/30 words, body 278/300.
- Adaptation: description 20/30 words, body 222/300.
- Both skills checked against `TEMPLATE.md`: required section order, orchestrator
  versus recipe shape, trigger descriptions, Verify sections and conditional
  reference routing. Referenced local Markdown resources resolve.
- Scoped `git diff --check` for shared skill changes — passed.
- Fresh-session agent behavior using these revised skills has not been rehearsed.

## Step 4 Completion Summary

### Verification

- `npm start` and `npm run start:bundle` — temporary servers responded to HTTP
  requests. Headless Chromium inspected actual shell-instantiated scoped
  plugins: editor rendered `sample.scd`, menu produced both expected alerts.
- Bundled smoke check also dynamically imported both standalone entry files
  and confirmed editor default export/menu `run()` availability.
- `npm pack --dry-run --ignore-scripts --json` — both plugin JavaScript and
  declaration files present; test files absent; demo assets included.
- Explicit filesystem checks — both package export targets exist; no `.git`
  or `.githooks` created. All temporary servers/check processes stopped.
- Type-check, lint, build, tests and bundling completed before final documentation
  and release-config-only updates. Release JSON copied from template and manifest
  initialized at the package version.
- Final rerun after the explicit non-empty document-name guard:
  `npx tsc --noEmit`, `npm run lint`, `npm test`, `npm run bundle` — passed.
- Owner requested version consistency in both starters. Node assertions checked
  `package.json.version`, `package-lock.json.version`,
  `package-lock.json.packages[""].version` and
  `.release-please-manifest.json["."]`: all already `0.0.0` in both repositories.
  Neither release config has a forced `release-as` override. Dependency/tooling
  versions were deliberately not reset. No version-file correction was needed.

### Limitations and deferred work

- Remote repository is still empty: no initialization, commit, push or publish.
  The owner controls Git setup and staging.
- Shared runner prints a non-fatal macOS pixel-difference diagnostic.
- Remote Source Editor interaction, GitHub CI, hook installation in a real
  scaffold checkout, release and deployment were not exercised here.
- The starter does not demonstrate XML editing, dialogs, visual assertions or
  domain validation; migrations must add feature-specific code/tests.

## Resume and remaining work

Local scaffold and shared guidance are complete and uncommitted. No Git
metadata was created. User must review and initialize/publish it before a
remote-only agent can fetch these new contents. Fresh-session 104 planning
rehearsal remains pending. This log tracks preparation of the scaffold itself;
future migrations need their own migration worklog, not this task history.
