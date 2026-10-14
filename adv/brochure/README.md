# Brochure Tinaba FaaS e ChatTI

Brochure pubblicitaria A4 verticale, una pagina.

## File

- `brochure.typ`: sorgente Typst della pagina.
- `assets/visual.svg`: illustrazione vettoriale della piattaforma e delle sue componenti.
- `assets/tinaba-logo.png`: wordmark Tinaba approvato, derivato da `src/assets/tinaba-logo.png`.
- `brochure.pdf`: PDF compilato per la revisione.
- `preview.png`: anteprima raster della pagina.

Il footer riporta il contatto istituzionale `business@tinaba.it` e la sede di Via Cerva, 28 · 20122 Milano, coerenti con i riferimenti pubblici Tinaba.

## Ricompilazione

Con Typst installato e il font Arial disponibile:

```powershell
typst compile brochure.typ brochure.pdf
```

La pagina è impostata in formato A4. Per la stampa finale, adattare abbondanze e formato alle specifiche del magazine.

## Variante per lo speciale AI

- rochure-ai.typ: versione editoriale con focus su Intelligenza Artificiale, ChatTI e dati aziendali.
- rochure-ai.pdf: PDF A4 di una pagina.
- preview-ai.png: anteprima raster.

## Terza versione: AI in evidenza

- rochure-ai-v3.typ: impaginazione chiara con illustrazione vettoriale dedicata a ChatTI e ai dati aziendali.
- ssets/visual-ai.svg: diagramma dei sistemi connessi alla conversazione AI.
- rochure-ai-v3.pdf: PDF A4 compilato.
- preview-ai-v3.png: anteprima raster verificata.
