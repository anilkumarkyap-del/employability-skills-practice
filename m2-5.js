/* MODULE 2 – Concept 2.5 Problems on Clocks */
window.PAPERS = window.PAPERS || {};
window.PAPERS["m2-5"] = {
  id: "m2-5",
  title: "2.5 Problems on Clocks",
  subtitle: "Module 2: Logical Reasoning · 10 questions",
  sections: [{ name: "2.5 Problems on Clocks", from: 1, to: 10 }],
  questions: [
/* 1 */ {
  q: "What is the angle between the hour hand and the minute hand of a clock at 3:30 PM?",
  opts: ["105°","85°","75°","105°"], a: 2,
  key: "Use the formula: angle = |30 × H − 5.5 × M|.",
  steps: ["H = 3 and M = 30.","30 × 3 = 90 and 5.5 × 30 = 165.","Angle = |90 − 165| = |−75| = 75°."],
  tip: "At half past, the hour hand is halfway between two numbers, not on the number.",
  note: "Options (A) and (D) are both printed as 105° in the textbook. The answer 75° is option (C)."
},
/* 2 */ {
  q: "At what time between 4 and 5 o'clock will the hands of a clock coincide?",
  opts: ["21 9/11 min past 4","20 min past 4","22 min past 4","21 min past 4"], a: 0,
  key: "When the hands coincide, the angle between them is 0. Put angle = 0 in the formula and solve for the minutes.",
  steps: ["Hands coincide: 0 = |30 × H − 5.5 × M|, with H = 4.","0 = 120 − (11/2) × M, so (11/2) × M = 120.","M = 120 × 2 / 11 = 240/11 = 21 9/11 minutes.","So the hands coincide at 21 9/11 minutes past 4."],
  tip: "240 ÷ 11 = 21 with remainder 9, so 21 and 9/11."
},
/* 3 */ {
  q: "An accurate clock shows 9 o'clock in the morning. Through how many degrees will the hour hand rotate when the clock shows 3 o'clock in the afternoon?",
  opts: ["150°","180°","160°","210°"], a: 1,
  key: "The hour hand moves 30° every hour (360° ÷ 12 hours).",
  steps: ["Time from 9 a.m. to 3 p.m. = 6 hours.","Rotation = 6 × 30° = 180°."],
  tip: "Check: 9 to 12 is 90° and 12 to 3 is 90°. Total 180°."
},
/* 4 */ {
  q: "What is the angle between the hands of a clock at 8:30?",
  opts: ["90°","60°","80°","75°"], a: 3,
  key: "Use angle = |30 × H − 5.5 × M| with H = 8 and M = 30.",
  steps: ["30 × 8 = 240 and 5.5 × 30 = 165.","Angle = |240 − 165| = 75°."]
},
/* 5 */ {
  q: "How many times do the hands of a clock coincide in a day (24 hours)?",
  opts: ["22 times","24 times","44 times","12 times"], a: 0,
  key: "First count for 12 hours, then double.",
  steps: ["In 12 hours the hands coincide 11 times (the 12th overlap is the same as the 12 o'clock overlap that starts the next cycle).","In 24 hours: 11 × 2 = 22 times."],
  tip: "Remember: 22 coincide, 22 opposite, 44 right angles in a day."
},
/* 6 */ {
  q: "How many times in a day are the hands of a clock at right angles?",
  opts: ["22 times","44 times","24 times","48 times"], a: 1,
  key: "Count for 12 hours first, then double it for the whole day.",
  steps: ["In 12 hours the hands make a right angle 22 times.","In 24 hours: 22 × 2 = 44 times."],
  tip: "Twice an hour = 24 in 12 hours, but 3:00 and 9:00 are counted twice, so 24 − 2 = 22."
},
/* 7 */ {
  q: "Find the reflex angle between minute hand and hour hand at 7:20.",
  opts: ["110°","100°","260°","105°"], a: 2,
  key: "A reflex angle is the BIGGER angle (more than 180°). First find the ordinary angle, then subtract it from 360°.",
  steps: ["Ordinary angle = |30 × 7 − 5.5 × 20| = |210 − 110| = 100°.","Reflex angle = 360° − 100° = 260°."],
  watch: "Option (B) 100° is the ordinary angle. The question asks for the REFLEX angle."
},
/* 8 */ {
  q: "At what angle are the hands of a clock inclined at 15 minutes past 5?",
  opts: ["52.5°","72.5°","60°","67.5°"], a: 3,
  key: "Use the formula with H = 5 and M = 15.",
  steps: ["30 × 5 = 150 and 5.5 × 15 = 82.5.","Angle = |150 − 82.5| = 67.5°."],
  note: "The option letters are printed as (A), (C), (A), (D) in the textbook. In order they are 52.5°, 72.5°, 60° and 67.5°, and 67.5° is the fourth option, (D)."
},
/* 9 */ {
  q: "A clock is started at noon. By 20 minutes past 3, the hour hand has turned through:",
  opts: ["120°","100°","200°","140°"], a: 1,
  key: "The hour hand turns 30° every hour. Find how many hours have passed.",
  steps: ["From 12:00 to 3:20 is 3 hours 20 minutes = 200 minutes = 200/60 = 3 1/3 hours.","Rotation = 30° × 200/60 = 100°.","Check: 3 hours = 90°, and 20 minutes × 0.5° = 10°. 90° + 10° = 100°."],
  table: { head:["Time passed","In hours","Hour hand"], rows:[["3 h 20 min","200/60 = 3 1/3","30 × 3 1/3 = 100°"]] },
  tip: "Hour hand: 0.5° per minute. 200 minutes × 0.5° = 100°."
},
/* 10 */ {
  q: "How many times in a day are the hands of a clock in a straight line, either coinciding or pointing in opposite directions?",
  opts: ["44 times","22 times","24 times","48 times"], a: 0,
  key: "A straight line means either 0° (overlapping) or 180° (opposite). Add both counts.",
  steps: ["Coinciding (0°) = 22 times a day.","Opposite (180°) = 22 times a day.","Total = 22 + 22 = 44 times."]
}
  ]
};
window.PAPERS["m2-5"].flows = {
 1:[["Hour hand","30×3 = 90"],"vs",["Minute hand","5.5×30 = 165"],"|90 − 165| →",["Angle","75°","g"]],
 2:[["Coincide","0 = 120 − 5.5 M"],"M = 240/11 →",["Time","4:21 9/11","g"]],
 3:[["9 am → 3 pm","6 hours"],"× 30° →",["Rotation","180°","g"]],
 4:[["30×8","240"],"−",["5.5×30","165"],"=",["Angle","75°","g"]],
 5:[["12 hours","11 times"],"× 2 →",["24 hours","22 times","g"]],
 6:[["12 hours","22 times"],"× 2 →",["24 hours","44 times","g"]],
 7:[["Angle","|210 − 110| = 100°"],"360 − 100 →",["Reflex","260°","g"]],
 8:[["30×5","150"],"−",["5.5×15","82.5"],"=",["Angle","67.5°","g"]],
 9:[["3 h","90°"],"+",["20 min × 0.5°","10°"],"=",["Hour hand turns","100°","g"]],
 10:[["Coincide","22"],"+",["Opposite","22"],"=",["Straight line","44","g"]]
};
window.PAPERS["m2-5"].diagrams = {
 1:{t:"clock",h:3,m:30},
 2:{t:"clock",h:4,m:21.82},
 3:{t:"clockpair",a:[9,0,"9:00 in the morning"],b:[3,0,"3:00 in the afternoon"],mid:"6 h × 30° = 180°"},
 4:{t:"clock",h:8,m:30},
 5:{t:"stack",parts:[["12 hours",11,"mut"],["next 12 hours",11,""]],cap:"11 + 11 = 22 times in 24 hours"},
 6:{t:"stack",parts:[["12 hours",22,"mut"],["next 12 hours",22,""]],cap:"22 + 22 = 44 times in 24 hours"},
 7:{t:"clock",h:7,m:20},
 8:{t:"clock",h:5,m:15},
 9:{t:"stack",parts:[["3 hours = 90°",90,"mut"],["20 min = 10°",10,"bad"]],cap:"90° + 10° = 100°"},
 10:{t:"stack",parts:[["Coincide",22,"mut"],["Opposite",22,""]],cap:"22 + 22 = 44 times a day"}
};
