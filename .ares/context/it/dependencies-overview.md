# Dipendenze @ares/prototype-files

## Dipendenze aReS (@ares/*) dichiarate

### `@ares/core` (dipendenza di runtime)
Usato per le utility fondamentali:
- `@ares/core/prototype.js` → `addFileFunctionsToPrototype` (mount delle funzioni sul prototipo del tipo dichiarato).
- `@ares/core/console.js` → `asyncConsole` (log strutturato del processo di inizializzazione).

### `@ares/files` (dipendenza di runtime)
Usato per la scansione ricorsiva dei file sorgente: `getFilesRecursively(path, /^.*\.(js|ts|jsx|tsx)$/i)` in `initPrototypes`.

### `@ares/scd` (devDependency)
Toolchain di sviluppo aReS (dev-only); non è una dipendenza di runtime del modulo.

Il modulo non dichiara dipendenze esterne non-aReS.

## Chi dipende da questo modulo

Dall'analisi delle `package.json` del workspace, **`@ares/prototype-files` è dipendenza di**:

- **`@ares/ecosystem`** (`workspace:^`)
- **`@ares/language-interpreter`** (`workspace:^`)

Entrambi lo usano per l'inizializzazione dei prototipi di runtime delle funzioni sorgente nei rispettivi contesti di esecuzione.
