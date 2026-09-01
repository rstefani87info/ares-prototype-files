# @ares/prototype-files Documentation

## Purpose

Description and goals of the `@ares/prototype-files` module.

## Installation

```bash
yarn add @ares/prototype-files
```

In a Yarn Workspaces monorepo:

```bash
yarn workspace <app> add @ares/prototype-files
```

## Quickstart

Minimal example:

```js
import * as mod from "@ares/prototype-files";
```

## Public API (exports)

This section documents the actual public surface at entrypoint level and main exported symbols.

Root entrypoint:

- `@ares/prototype-files`

Main files at package root (indicative):

- `index.js`

Exports detected in `index.*`:

- `addFileFunctionsToPrototype`
- `getFunctionsFromFile`
- `initPrototypes`

## Configuration (appSetup / config / policies)

This module may read configuration from `appSetup`, `config`, or `policies` depending on the type. Document the actually consumed keys as you stabilize the contract.

## Test

Run module tests (if present):

```bash
yarn workspace @ares/prototype-files test
```

## Notes

- This document is maintained alongside the module tickets.
