# Stili di sviluppo applicati @ares/prototype-files

## Standard di programmazione

- Package **ESM puro** (`"type": "module"`), entrypoint `index.js`, nessuna mappa `exports` (default risoluzione ESM).
- Modulo minimalista e in fase di stabilizzazione: nessuna cartella `src`, codice nel root del package.
- Dipende dalle utility di `@ares/core` (prototype, asyncConsole) e `@ares/files` (scansione ricorsiva).
- Annotazioni di prototipo in stile JSDoc/docklet (`@prototype {type}`) sulle funzioni esportate.

## Contratto directory / file

```text
prototype-files/
├── .ares/
│   ├── context/          # Contestualizzazione (manuale)
│   ├── docs/             # Documentazione (manuale)
│   └── tasks/            # Ticket/note (manuale)
├── .git/
├── index.js              # Implementazione entrypoint (manuale)
├── .gitignore
├── package.json          # Manuale/autogenerato da yarn
├── README.md             # Manuale
└── node_modules/         # (installato) GENERATO
```

## Distinzione GENERATO vs MANUALE

**Generato automaticamente (non versionare/rigenerare a mano):**

- `node_modules/` e lockfile di Yarn (a livello workspace).
- Eventuali artefatti di pack/toolchain (`*.tgz`, `coverage`, `.cache`) quando presenti.

**Manuale (scritto a mano, NON rigenerare/sovrascrivere):**

- `index.js` (tutta la logica applicativa)
- `README.md`, `.gitignore`, `package.json` (iniziale)
- intera sottocartella `.ares/` (docs, context, tasks)

Nota: nessun tool di generazione produce file nel modulo; tutto ciò che non è `node_modules` è frutto di autorings manuali.
