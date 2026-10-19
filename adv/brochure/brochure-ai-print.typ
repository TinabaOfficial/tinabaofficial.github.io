#set page(
  width: 210mm,
  height: 297mm,
  bleed: 10mm,
  margin: 0mm,
  fill: cmyk(0%, 0%, 0%, 0%),
  background: place(top + left, dx: 5mm, dy: 5mm)[#rect(width: 220mm, height: 307mm, fill: cmyk(19.2%, 19.2%, 0%, 89.8%))],
  foreground: {
    let mark = cmyk(0%, 0%, 0%, 100%)
    place(top + left, dx: 1mm, dy: 10mm)[#rect(width: 3mm, height: 0.25pt, fill: mark)]
    place(top + left, dx: 10mm, dy: 1mm)[#rect(width: 0.25pt, height: 3mm, fill: mark)]
    place(top + left, dx: 226mm, dy: 10mm)[#rect(width: 3mm, height: 0.25pt, fill: mark)]
    place(top + left, dx: 220mm, dy: 1mm)[#rect(width: 0.25pt, height: 3mm, fill: mark)]
    place(top + left, dx: 1mm, dy: 307mm)[#rect(width: 3mm, height: 0.25pt, fill: mark)]
    place(top + left, dx: 10mm, dy: 313mm)[#rect(width: 0.25pt, height: 3mm, fill: mark)]
    place(top + left, dx: 226mm, dy: 307mm)[#rect(width: 3mm, height: 0.25pt, fill: mark)]
    place(top + left, dx: 220mm, dy: 313mm)[#rect(width: 0.25pt, height: 3mm, fill: mark)]
  },
)
#set text(font: "Arial", lang: "it", fill: cmyk(0%, 0%, 0%, 0%))
#set par(leading: 0.68em, spacing: 0.5em, justify: false)
#set block(spacing: 0pt)

#let orange = cmyk(0%, 63.1%, 100%, 0%)
#let lime = cmyk(16.5%, 0%, 66.7%, 0%)
#let violet = cmyk(27.5%, 41.6%, 0%, 0%)
#let muted = cmyk(4.6%, 4.1%, 0%, 23.9%)

#let eyebrow(body) = text(size: 8pt, weight: 700, fill: orange, tracking: 1.7pt, upper(body))

#box(width: 100%, fill: cmyk(0%, 0%, 0%, 0%), inset: (x: 12mm, y: 3.5mm))[
  #grid(columns: (1fr, auto), align: horizon)[
    #image("assets/tinaba-logo.png", width: 34mm)
    #text(size: 8pt, weight: 700, fill: cmyk(75.8%, 30.8%, 0%, 64.3%), tracking: 1.1pt)[TECNOLOGIA PER IL BANKING]
  ]
]

#box(width: 100%, inset: (left: 13mm, right: 13mm, top: 6.5mm, bottom: 1mm))[
  #eyebrow[INTELLIGENZA ARTIFICIALE IN BANCA]
  #v(3mm)
  #text(size: 30pt, weight: 700, tracking: -0.8pt)[
    Parlano tutti di AI. #linebreak() #text(fill: lime)[In banca, contano le domande giuste.]
  ]
  #v(3mm)
  #text(size: 10.2pt, fill: muted)[
    ChatTI permette di esplorare i dati aziendali con domande in linguaggio naturale. Tinaba FaaS connette sistemi, app e servizi per integrare nuove esperienze digitali nel perimetro della banca.
  ]
]

#box(width: 100%, inset: (left: 5mm, right: 5mm, top: 0mm, bottom: 0mm))[
  #image("assets/visual-print.svg", width: 100%, height: 130mm, fit: "contain")
]

#v(8mm)
#align(center)[
  #box(width: 184mm)[
    #grid(
      columns: (1fr, 1fr), gutter: 4mm, align: top,
    box(height: 45mm, fill: cmyk(18.6%, 18.6%, 0%, 83.1%), stroke: (left: 1.2pt + orange), radius: 4mm, inset: 5mm)[
      #eyebrow[FINTECH-AS-A-SERVICE]
      #v(2mm)
      #text(size: 15pt, weight: 700)[Una base per evolvere i servizi digitali.]
      #v(2.5mm)
      #text(size: 8.2pt, fill: muted)[
        Integrazioni progressive con i sistemi esistenti. Moduli componibili secondo priorità e governance della banca.
      ]
    ],
    box(height: 45mm, fill: cmyk(16.3%, 23.3%, 0%, 83.1%), stroke: (left: 1.2pt + violet), radius: 4mm, inset: 5mm)[
      #eyebrow[CHATTI · DATI E AI]
      #v(2mm)
      #text(size: 15pt, weight: 700)[Dai dati, risposte in linguaggio naturale.]
      #v(2.5mm)
      #text(size: 8.2pt, fill: muted)[
        Domande sui dati aziendali per esplorare andamenti e supportare analisi e decisioni. Fonti e accessi nel perimetro aziendale.
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
      #text(size: 15pt, weight: 700, fill: cmyk(19.2%, 19.2%, 0%, 89.8%))[La tecnologia abilita. La banca decide.]
      #v(1.5mm)
      #text(size: 8pt, weight: 600, fill: cmyk(0%, 17.5%, 27.5%, 84.3%))[Tinaba FaaS + ChatTI · Soluzioni digitali per banche e istituti finanziari]
    ],
    align(right)[
      #text(size: 9pt, weight: 700, fill: cmyk(19.2%, 19.2%, 0%, 89.8%))[business\@tinaba.it]
      #linebreak()
      #text(size: 7.5pt, weight: 600, fill: cmyk(0%, 17.5%, 27.5%, 84.3%))[Via Cerva, 28 · 20122 Milano]
    ],
  )
])
