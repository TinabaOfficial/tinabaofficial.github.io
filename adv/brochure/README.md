# Brochure Tinaba FaaS e ChatTI

PDF finale per la stampa: `brochure-ai-print-pdfx4-eci.pdf`.

- PDF/X-4, una pagina, TrimBox A4 e abbondanza di 5 mm per lato.
- Segni di taglio, font incorporati e profilo ICC ISO Coated v2 300% (ECI), basato su FOGRA39.
- Peso verificato dopo l'inserimento del QR: 1,91 MB, sotto il limite di 5 MB.
- QR da 18 mm centrato nello spazio tra claim e contatti nella fascia arancione; nessuna didascalia e quiet zone bianca.

## Sorgenti mantenuti

- `brochure-ai-print.typ`: sorgente modificabile dell'impaginato.
- `assets/visual-print.svg`: diagramma vettoriale usato nell'impaginato.
- `assets/tinaba-logo.png`: logo usato nell'impaginato.
- `assets/ISOcoated_v2_300_eci.icc`: profilo colore incorporato nel PDF finale.
- `assets/qr-chat-ti.svg`: QR code vettoriale per `https://tinaba.it/soluzioni/chat-ti/`; scansione verificata, mantenere il riquadro bianco e la zona libera.

La compilazione Typst rigenera l'impaginato; per la consegna in stampa usare il PDF/X-4 finale.
