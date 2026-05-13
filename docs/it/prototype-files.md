# Documentazione @ares/prototype-files

## Scopo

Descrizione e obiettivi del modulo `@ares/prototype-files`.

## Installazione

```bash
yarn add @ares/prototype-files
```

In un monorepo Yarn Workspaces:

```bash
yarn workspace <app> add @ares/prototype-files
```

## Quickstart

Esempio minimale:

```js
import * as mod from "@ares/prototype-files";
```

## API pubbliche (exports)

Questa sezione documenta la superficie pubblica reale a livello di entrypoint e simboli principali.

Entrypoint root:

- `@ares/prototype-files`

File principali nel root del package (indicativi):

- `index.js`

Export individuati in `index.*`:

- `addFileFunctionsToPrototype`
- `getFunctionsFromFile`
- `initPrototypes`

## Configurazione (appSetup / config / policies)

Questo modulo può leggere configurazioni da `appSetup`, `config` o `policies` a seconda del tipo. Documenta qui le chiavi effettivamente consumate quando stabilizzi il contract.

## Test

Esecuzione test del modulo (se presenti):

```bash
yarn workspace @ares/prototype-files test
```

## Note

- Questo documento è mantenuto in parallelo ai ticket del modulo.
