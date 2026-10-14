#set page(width: 210mm, height: 297mm, margin: 0mm, fill: rgb("#15151A"))
#set text(font: "Arial", lang: "it", fill: white)
#set par(leading: 0.68em, spacing: 0.5em, justify: false)
#set block(spacing: 0pt)

#let orange = rgb("#FF5E00")
#let lime = rgb("#D6FF55")
#let violet = rgb("#B995FF")
#let muted = rgb("#B9BAC2")

#let eyebrow(body) = text(size: 8pt, weight: 700, fill: orange, tracking: 1.7pt, upper(body))

#box(width: 100%, fill: white, inset: (x: 12mm, y: 3.5mm))[
  #grid(columns: (1fr, auto), align: horizon)[
    #image("assets/tinaba-logo.png", width: 34mm)
    #text(size: 8pt, weight: 700, fill: rgb("#163F5B"), tracking: 1.1pt)[TECNOLOGIA PER IL BANKING]
  ]
]

#box(width: 100%, inset: (left: 13mm, right: 13mm, top: 6.5mm, bottom: 1mm))[
  #eyebrow[UNA PIATTAFORMA, NUOVE PROSPETTIVE]
  #v(3mm)
  #text(size: 30pt, weight: 700, tracking: -0.8pt)[
    La banca evolve. #h(2mm) #text(fill: lime)[I dati rispondono.]
  ]
  #v(3mm)
  #text(size: 10.2pt, fill: muted)[
    Tinaba FaaS connette sistemi, app e servizi. Con ChatTI, l’organizzazione esplora i propri dati aziendali con domande in linguaggio naturale per leggere andamenti e opportunità e orientare le decisioni di business.
  ]
]

#box(width: 100%, inset: (left: 5mm, right: 5mm, top: 0mm, bottom: 0mm))[
  #image("assets/visual.svg", width: 100%, height: 130mm, fit: "contain")
]

#v(8mm)
#align(center)[
  #box(width: 184mm)[
    #grid(
      columns: (1fr, 1fr), gutter: 4mm, align: top,
    box(height: 45mm, fill: rgb("#23232B"), stroke: (left: 1.2pt + orange), radius: 4mm, inset: 5mm)[
      #eyebrow[FINTECH-AS-A-SERVICE]
      #v(2mm)
      #text(size: 15pt, weight: 700)[Un canale digitale, costruito per evolvere.]
      #v(2.5mm)
      #text(size: 8.2pt, fill: muted)[
        Integrazioni progressive con i sistemi esistenti. Moduli componibili secondo priorità e governance della banca.
      ]
    ],
    box(height: 45mm, fill: rgb("#24212B"), stroke: (left: 1.2pt + violet), radius: 4mm, inset: 5mm)[
      #eyebrow[CHATTI · DATI E AI]
      #v(2mm)
      #text(size: 15pt, weight: 700)[Una domanda apre nuove letture.]
      #v(2.5mm)
      #text(size: 8.2pt, fill: muted)[
        Analisi a supporto di strategie commerciali, marketing e sviluppo prodotto. Fonti e accessi nel perimetro dell’organizzazione.
      ]
    ],
    )
  ]
]

#v(10mm)
#place(bottom + left, box(width: 100%, fill: orange, inset: (left: 13mm, right: 13mm, top: 5mm, bottom: 5mm))[
  #grid(
    columns: (1fr, auto), gutter: 5mm, align: horizon,
    block[
      #text(size: 15pt, weight: 700, fill: rgb("#15151A"))[La tecnologia abilita. La banca decide.]
      #v(1.5mm)
      #text(size: 8pt, weight: 600, fill: rgb("#28211D"))[Tinaba FaaS + ChatTI · Soluzioni digitali per banche e istituti finanziari]
    ],
    align(right)[
      #text(size: 9pt, weight: 700, fill: rgb("#15151A"))[business\@tinaba.it]
      #linebreak()
      #text(size: 7.5pt, weight: 600, fill: rgb("#28211D"))[Via Cerva, 28 · 20122 Milano]
    ],
  )
])
