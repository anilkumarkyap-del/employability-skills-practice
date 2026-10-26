/* MODULE 3 – Concept 3.8 Analogy */
window.PAPERS = window.PAPERS || {};
window.PAPERS["m3-8"] = {
  id: "m3-8",
  title: "3.8 Analogy",
  subtitle: "Module 3: Analytical Reasoning · 10 questions",
  sections: [ { name: "3.8 Analogy", from: 1, to: 10 } ],
  toolbox: { head:["Rule","Remember"], rows:[
    ["A : B :: C : D","The relation between A and B is the same as between C and D."],
    ["Say it as a sentence","\"A doctor works in a hospital\" - use the same sentence for the second pair."],
    ["Common relations","Capital - state, person - workplace, instrument - what it measures, part - whole, creator - creation, number - square or cube"]] },
  questions: [
/* 1 */ {
  label: "3.8.1",
  q: "Choose the pair sharing same relationship: 'Karnataka : Bengaluru :: Maharashtra : ?'",
  opts: ["Mumbai","Pune","Nagpur","Nashik"], a: 0,
  key: "Relation: State : Capital city.",
  simg: [{ src: "m3-8-1-sol.png" }],
  steps: ["Bengaluru is the capital of Karnataka.","The capital of Maharashtra is <b>Mumbai</b>."],
  watch: "Pune and Nagpur are well-known cities, but Mumbai is the capital."
},
/* 2 */ {
  label: "3.8.2",
  q: "Complete analogy: 'Doctor : Hospital :: Teacher : ?'",
  opts: ["Exam","School","Office","Student"], a: 1,
  key: "Relation: Professional : Primary workplace.",
  simg: [{ src: "m3-8-2-sol.png" }],
  steps: ["A doctor works in a hospital.","A teacher works in a <b>school</b>."],
  note: "The textbook answer line says '(A) School', but School is option (B) in the printed list. The correct option is (B)."
},
/* 3 */ {
  label: "3.8.3",
  q: "Complete analogy: 'Thermometer : Temperature :: Barometer : ?'",
  opts: ["Rainfall","Humidity","Wind Speed","Atmospheric Pressure"], a: 3,
  key: "Relation: Instrument : Quantity it measures.",
  simg: [{ src: "m3-8-3-sol.png" }],
  steps: ["A thermometer measures temperature.","A barometer measures <b>atmospheric pressure</b>."],
  tip: "Rain gauge = rainfall. Hygrometer = humidity. Anemometer = wind speed."
},
/* 4 */ {
  label: "3.8.4",
  q: "Complete analogy: 'Page : Book :: Leaf : ?'",
  opts: ["Roof","Forest","Tree","Flower"], a: 2,
  key: "Relation: Part : Whole.",
  simg: [{ src: "m3-8-4-sol.png" }],
  steps: ["A page is a part of a book.","A leaf is a part of a <b>tree</b>."]
},
/* 5 */ {
  label: "3.8.5",
  q: "Complete analogy: 'Author : Book :: Sculptor : ?'",
  opts: ["Statue","Paint","Canvas","Museum"], a: 0,
  key: "Relation: Creator : What he or she creates.",
  simg: [{ src: "m3-8-5-sol.png" }],
  steps: ["An author writes a book.","A sculptor creates a <b>statue</b>."],
  watch: "Paint and canvas are materials. A museum is only a place to display."
},
/* 6 */ {
  label: "3.8.6",
  q: "Complete analogy: 'Profit &amp; Loss A/c : Income Statement :: Balance Sheet : ?'",
  opts: ["Ledger","Journal","Trial Balance","Position Statement"], a: 3,
  key: "Relation: Final account : its other name or nature.",
  simg: [{ src: "m3-8-6-sol.png" }],
  steps: ["Profit &amp; Loss A/c is an <b>income statement</b>.","Balance Sheet is a <b>position statement</b> (shows financial position)."]
},
/* 7 */ {
  label: "3.8.7",
  q: "Complete analogy: 'Cricket : Bat :: Tennis : ?'",
  opts: ["Stick","Racket","Ball","Court"], a: 1,
  key: "Relation: Sport : Playing equipment used to hit the ball.",
  simg: [{ src: "m3-8-7-sol.png" }],
  steps: ["Cricket is played with a bat.","Tennis is played with a <b>racket</b>."]
},
/* 8 */ {
  label: "3.8.8",
  q: "Complete analogy: '6 : 216 :: 8 : ?'",
  opts: ["640","64","512","343"], a: 2,
  key: "Test square or cube of the first number.",
  simg: [{ src: "m3-8-8-sol.png" }],
  steps: ["6 x 6 = 36, not 216. But 6 x 6 x 6 = 216, so the rule is the <b>cube</b>.","8 x 8 x 8 = <b>512</b>."],
  tip: "Cubes: 2:8, 3:27, 4:64, 5:125, 6:216, 7:343, 8:512."
},
/* 9 */ {
  label: "3.8.9",
  q: "Complete analogy: '11 : 121 :: 22 : ?'",
  opts: ["222","242","421","484"], a: 3,
  key: "Look at 11 and 121. 121 is 11 x 11, the SQUARE of 11.",
  simg: [{ src: "m3-8-9-sol.png" }],
  steps: ["11 x 11 = 121, so the rule is the <b>square</b>.","22 x 22 = <b>484</b>."],
  watch: "242 is double 121, not the square of 22."
},
/* 10 */ {
  label: "3.8.10",
  q: "Complete analogy: 'Clock : Time :: Thermometer : ?'",
  opts: ["Temperature","Heat","Energy","Radiation"], a: 0,
  key: "Relation: Measuring device : What it measures.",
  simg: [{ src: "m3-8-10-sol.png" }],
  steps: ["A clock measures time.","A thermometer measures <b>temperature</b>."],
  tip: "A thermometer shows temperature, not heat."
}
  ]
};
