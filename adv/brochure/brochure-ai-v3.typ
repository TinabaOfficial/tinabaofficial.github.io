#set page(width: 210mm, height: 297mm, margin: 0mm, fill: rgb("#F7F7F3"))
#set text(font: "Arial", lang: "it", fill: rgb("#172C43"))
#set par(leading: 0.7em, spacing: 0.5em, justify: false)
#set block(spacing: 0pt)

#let orange = rgb("#FF5E00")
#let orange-ink = rgb("#B54500")
#let lime = rgb("#D6FF55")
#let violet = rgb("#7152C7")
#let ink = rgb("#172C43")
#let muted = rgb("#4D5C6B")
#let eyebrow(body) = text(size: 8pt, weight: 700, fill: orange-ink, tracking: 1.5pt, upper(body))

#box(width: 100%, fill: white, inset: (x: 12mm, y: 3.5mm))[
  #grid(columns: (1fr, auto), align: horizon)[
    #image("assets/tinaba-logo.png", width: 34mm)
    #text(size: 8pt, weight: 700, fill: ink, tracking: 1.1pt)[TECNOLOGIA PER IL BANKING]
  ]
]

#box(width: 100%, inset: (left: 13mm, right: 13mm, top: 6mm, bottom: 0mm))[
  #eyebrow[AI E DATI AZIENDALI]
  #v(2.5mm)
  #text(size: 29pt, weight: 700, tracking: -0.5pt)[
    L’AI in banca parte #linebreak() #text(fill: violet)[dalle domande giuste.]
  ]
  #v(2.5mm)
  #text(size: 10pt, fill: muted)[
    Con ChatTI, l’organizzazione esplora i dati aziendali con domande in linguaggio naturale. Tinaba FaaS connette sistemi, app e servizi nel perimetro della banca.
  ]
]

#box(width: 100%, inset: (left: 5mm, right: 5mm, top: 1mm, bottom: 0mm))[
  #image("assets/visual-ai.svg", width: 100%, height: 116mm, fit: "contain")
]

#v(10mm)
#align(center)[
  #box(width: 184mm)[
    #grid(
      columns: (1fr, 1fr), gutter: 4mm, align: top,
      box(height: 42mm, fill: white, stroke: (left: 1.2pt + orange), radius: 3mm, inset: 4.5mm)[
        #align(left)[
          #eyebrow[FINTECH-AS-A-SERVICE]
          #v(1.5mm)
          #text(size: 13pt, weight: 700)[Un ecosistema digitale componibile.]
          #v(1.5mm)
          #text(size: 8pt, fill: muted)[Integrazioni progressive con i sistemi esistenti. Moduli secondo priorità e governance bancaria.]
        ]
      ],
      box(height: 42mm, fill: rgb("#F0ECFA"), stroke: (left: 1.2pt + violet), radius: 3mm, inset: 4.5mm)[
        #align(left)[
          #eyebrow[CHATTI · DATI E AI]
          #v(1.5mm)
          #text(size: 13pt, weight: 700)[Interroga i dati con una domanda.]
          #v(1.5mm)
          #text(size: 8pt, fill: muted)[Esplorazione in linguaggio naturale, con fonti e accessi nel perimetro dell’organizzazione.]
        ]
      ],
    )
  ]
]

#place(bottom + left, box(width: 100%, fill: orange, inset: (left: 13mm, right: 13mm, top: 4.5mm, bottom: 4.5mm))[
  #grid(
    columns: (1fr, auto), gutter: 5mm, align: horizon,
    block[
      #text(size: 14pt, weight: 700, fill: ink)[La tecnologia abilita. La banca decide.]
      #v(1.2mm)
      #text(size: 7.5pt, weight: 600, fill: ink)[Tinaba FaaS + ChatTI · Soluzioni digitali per banche e istituti finanziari]
    ],
    align(right)[
      #text(size: 9pt, weight: 700, fill: ink)[business\@tinaba.it]
      #linebreak()
      #text(size: 7.5pt, weight: 600, fill: ink)[Via Cerva, 28 · 20122 Milano]
    ],
  )
])
