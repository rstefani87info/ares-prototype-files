# Panoramica CLI @ares/prototype-files

## Comandi espliciti

Questo modulo **non ha una CLI** propria. `package.json` non dichiara alcun campo `bin` e `index.js` è un puro entrypoint di libreria ESM.

## Script npm disponibili

| Script | Comando | Scopo |
|---|---|---|
| `test` | `echo "Error: no test specified" && exit 1` | Placeholder: non esegue alcun test reale |

## Uso

Il modulo si usa esclusivamente via import:

```js
import * as mod from "@ares/prototype-files";
// mod.initPrototypes, mod.getFunctionsFromFile, mod.addFileFunctionsToPrototype
```

Non esistono sottocomandi o comandi binari.
