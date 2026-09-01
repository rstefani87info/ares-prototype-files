# Obiettivi del modulo @ares/prototype-files

## Introduzione

`@ares/prototype-files` è un modulo **work-in-progress** che si occupa di inizializzare i **prototipi (prototype)** delle funzioni dichiarate tramite annotazioni "docklet" nei file sorgente di un progetto.

Scansiona ricorsivamente file `.js`/`.ts`/`.jsx`/`.tsx`, legge le annotazioni di prototipo delle funzioni esportate e le aggiunge come membri del prototipo del tipo dichiarato, usando le utility di `@ares/core/prototype.js`.

Nota: il modulo risulta in fase di completamento (descrizione del package vuota, test placeholder, documentazione generica). `index.js` fa riferimento a un `./scripts.js` che al momento non è presente nel root del modulo.

## Obiettivi

- Inizializzare i prototipi di tutti i tipi dichiarati da annotazioni di funzione nei file di un percorso (ricorsivo).
- Estendere il prototipo di un tipo con le funzioni marcate come `@prototype {type}`.
- Esporre utilità per recuperare le funzioni esportate da un file (`getFunctionsFromFile`) e installarle (`addFileFunctionsToPrototype`).

## Responsabilità

- `initPrototypes(...paths)` — scansione ricorsiva dei file e inizializzazione dei prototipi.
- `getFunctionsFromFile(file)` — recupero delle funzioni esportate da un modulo.
- `addFileFunctionsToPrototype(filePath)` — lettura delle annotazioni docklet e mount delle funzioni sul prototipo del tipo dichiarato.
- Delegazione alle utility di `@ares/core` (`prototype.js`, `console.js` asyncConsole) e di `@ares/files` (scansione file).

## Cosa il modulo NON fa

- Non fornisce una CLI né script di test reali (script `test` è un placeholder).
- Non implementa l'analisi delle annotazioni docklet: dipende dalle utility di libreria di `@ares/core`.
- Non possiede (attualmente) il file `scripts.js` citato da `index.js` — segno che l'implementazione è da completare/stabilizzare.
