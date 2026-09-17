# Tinaba Institutional Site

Sito istituzionale B2B di Tinaba, realizzato con Eleventy. Presenta la piattaforma tecnologica, le soluzioni digitali e gli scenari di collaborazione con banche e operatori finanziari.

## Stack

- Eleventy
- Nunjucks e Markdown
- CSS responsive
- JavaScript vanilla ESM
- Font e asset self-hosted
- Output statico in `docs/`

## Sviluppo

```bash
npm install
npm run dev
```

## Build e validazione

```bash
npm run build
npm run validate
```

`npm run build` genera il sito in `docs/`.

`npm run validate` esegue lint, controllo TypeScript e test.

## Struttura

- `src/`: sorgenti del sito
- `src/_includes/`: layout e componenti condivisi
- `src/_data/`: navigazione e dati istituzionali
- `src/assets/`: CSS, script, immagini, font e favicon
- `docs/`: output generato e pubblicato

Modificare esclusivamente i file in `src/`. Non modificare manualmente i file generati in `docs/`.

## Rilascio

Il repository è collegato a Netlify con due branch:

- `staging` -> [staging--tinaba-it.netlify.app](https://staging--tinaba-it.netlify.app/)
- `master` -> [tinaba-it.netlify.app](https://tinaba-it.netlify.app/)

I domini pubblici sono configurati tramite ProxyPass:

- Staging -> [valid.tinaba.it](https://valid.tinaba.it)
- Produzione -> [tinaba.it](https://tinaba.it)

## Principi

Il sito è istituzionale, accessibile e privo di tracking, cookie di profilazione, advertising, embed e script runtime di terze parti.
