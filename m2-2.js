/* MODULE 2 – Concept 2.2 Direction Sense Test */
window.PAPERS = window.PAPERS || {};
window.PAPERS["m2-2"] = {
  id: "m2-2",
  title: "2.2 Direction Sense Test",
  subtitle: "Module 2: Logical Reasoning · 10 questions",
  sections: [{ name: "2.2 Direction Sense Test", from: 1, to: 10 }],
  questions: [
/* 1 */ {
  q: "Rohan walks 12 km North, then turns Right and walks 5 km. How far and in which direction is he from the starting point?",
  opts: ["15 km North-East","17 km North","13 km South-East","13 km North-East"], a: 3,
  key: "Draw the path. The two walks make a right angle, so the distance from the start is the slanted side of a right triangle.",
  steps: ["Facing North, a right turn points East. So he walks 12 km North, then 5 km East.","Distance = √(12² + 5²) = √(144 + 25) = √169 = 13 km.","He is North of the start and East of the start, so the direction is North-East."],
  tip: "Learn the triples 3-4-5, 5-12-13 and 6-8-10. You will spot them at once."
},
/* 2 */ {
  q: "A man walks 6 km South, turns Left and walks 8 km. How far is he from his starting point?",
  opts: ["10 km","14 km","12 km","8 km"], a: 0,
  key: "One 90-degree turn makes a right triangle. The distance from the start is the slanted side.",
  steps: ["Facing South, your left hand points East. So he walks 6 km South, then 8 km East.","Distance = √(6² + 8²) = √(36 + 64) = √100 = 10 km."],
  tip: "The turn only decides the direction. The distance would be 10 km for a left or a right turn."
},
/* 3 */ {
  q: "If North becomes South-East, what does West become?",
  opts: ["North-West","South-West","North-East","East"], a: 2,
  key: "If one direction moves to a new place, the WHOLE compass turns by the same angle.",
  steps: ["North is at 0° and South-East is at 135°. So the compass has turned 135° clockwise.","West is at 270°. Add 135°: 270° + 135° = 405°.","405° − 360° = 45°, which is North-East.","Quick check: West + 90° CW = North, then North + 45° CW = North-East."],
  table: { head:["Old direction","Angle + 135°","New direction"], rows:[["North (0°)","135°","South-East"],["East (90°)","225°","South-West"],["South (180°)","315°","North-West"],["West (270°)","405° = 45°","North-East"]] }
},
/* 4 */ {
  q: "A person starts walking towards East. After walking 50 m, he turns right and walks 30 m. In which direction is he from start?",
  opts: ["North-East","South-East","South-West","North-West"], a: 1,
  key: "Find where he ends up compared with the start: how far East or West, and how far North or South.",
  steps: ["Walk 50 m East. Facing East, a right turn points South. Walk 30 m South.","He has moved East (50 m) and South (30 m), so he is in the South-East direction.","Bonus: distance = √(50² + 30²) = about 58.3 m."],
  tip: "Facing East, Right = South. Facing East, Left = North."
},
/* 5 */ {
  q: "Karan travels 10 km towards North, turns South and walks 6 km, then walks 3 km East. How far is he from his starting point?",
  opts: ["4 km","7 km","10 km","5 km"], a: 3,
  key: "Cancel the opposite walks first (North against South). Then use Pythagoras.",
  steps: ["10 km North then 6 km South: net = 10 − 6 = 4 km North.","Then 3 km East. He is 4 km North and 3 km East of the start.","Distance = √(4² + 3²) = √25 = 5 km (3-4-5 triple)."],
  tip: "Always cancel opposite directions first.",
  note: "The 6 km South walk is drawn slightly to the right only so you can see it. It goes back along the same road."
},
/* 6 */ {
  q: "A sun rises in the East. If a person faces the rising sun and turns 90 degrees clockwise, which direction is he facing?",
  opts: ["South","North","West","East"], a: 0,
  key: "Facing the rising sun means facing East. A clockwise turn ADDS degrees.",
  steps: ["Facing the rising sun = facing East (90°).","Turn 90° clockwise: 90° + 90° = 180° = South.","Clockwise order: N, E, S, W. After East comes South."]
},
/* 7 */ {
  q: "Anil facing West turns 45° clockwise, then 180° clockwise. Which direction is he facing now?",
  opts: ["South-West","North-East","South-East","North-West"], a: 2,
  key: "Clockwise turns ADD degrees. N = 0°, E = 90°, S = 180°, W = 270°.",
  steps: ["Start: West = 270°.","Turn 45° clockwise: 270° + 45° = 315° = North-West.","Turn 180° clockwise: 315° + 180° = 495°, and 495° − 360° = 135° = South-East.","A 180° turn gives the exact opposite, and the opposite of North-West is South-East."],
  tip: "You can skip the maths for a 180° turn: just take the opposite direction."
},
/* 8 */ {
  q: "A shadow of a pole falls towards West in the morning. Where is the sun?",
  opts: ["West","East","North","South"], a: 1,
  key: "A shadow always falls on the side OPPOSITE to the light.",
  steps: ["In the morning the sun is in the East.","Light travels from East to West, so the shadow falls towards the West.","The shadow points West, so the sun is on the opposite side: East."],
  tip: "Morning: shadow towards West. Evening: shadow towards East."
},
/* 9 */ {
  q: "One day Prakash left home and walked 10 km towards south, turned right and walked 5 km, turned right and walked 10 km and turned left and walked 10 km. How many km will he have to walk to reach his home straight?",
  opts: ["10","20","15","30"], a: 2,
  key: "Track every turn. Take home as the starting point and watch the North-South walks cancel.",
  steps: ["Walk 10 km South. Right turn from South = West: walk 5 km West.","Right turn from West = North: walk 10 km North. The 10 km South and 10 km North cancel; he is level with home, 5 km West.","Left turn from North = West: walk 10 km West. Now he is 5 + 10 = 15 km West of home.","Straight back home: 15 km East."],
  table: { head:["Step","Turn","Facing","Walk","Position from home"], rows:[["1","–","South","10 km","10 km South"],["2","Right","West","5 km","10 km S, 5 km W"],["3","Right","North","10 km","0 km, 5 km W"],["4","Left","West","10 km","0 km, 15 km W"]] }
},
/* 10 */ {
  q: "Point A is 5 m West of Point B. Point C is 5 m South of Point B. In which direction is A with respect to C?",
  opts: ["North-East","South-West","North-West","South-East"], a: 2,
  key: "\"A with respect to C\" means: stand at C and look towards A.",
  steps: ["Put B in the middle. A is 5 m to the West (left). C is 5 m to the South (below).","Stand at C. Go up 5 m (North) to B's level, then left 5 m (West) to reach A.","A is North and West of C: North-West."],
  tip: "\"X with respect to Y\": stand at Y, look at X."
}
  ]
};
window.PAPERS["m2-2"].flows = {
 1:[["12 km","North"],"turn right →",["5 km","East"],"√(144+25) →",["Distance","13 km, North-East","g"]],
 2:[["6 km","South"],"turn left →",["8 km","East"],"√(36+64) →",["Distance","10 km","g"]],
 3:[["North → SE","= 135° clockwise"],"West 270° + 135° = 405° →",["405° − 360°","45°"],"→",["West becomes","North-East","g"]],
 4:[["50 m","East"],"turn right →",["30 m","South"],"→",["Direction","South-East","g"]],
 5:[["North","10 − 6 = 4 km"],"+",["East","3 km"],"√(16+9) →",["Distance","5 km","g"]],
 6:[["Rising sun","East (90°)"],"+90° CW →",["180°","South","g"]],
 7:[["West","270°"],"+45° →",["315°","North-West"],"+180° →",["495° − 360° = 135°","South-East","g"]],
 8:[["Morning sun","East"],"shadow opposite →",["Shadow","West"],"→",["Sun is in the","East","g"]],
 9:[["10 km","South"],"→",["5 km","West"],"→",["10 km","North"],"→",["10 km","West"],"→",["Back home","15 km East","g"]],
 10:[["A","5 m West of B"],"+",["C","5 m South of B"],"→",["A from C","North-West","g"]]
};
window.PAPERS["m2-2"].diagrams = {
 1:{t:"path",pts:[[0,0],[0,12],[5,12]],labels:["12 km North","5 km East (Right turn)"],sl:"A",el:"C",dist:"13 km, North-East"},
 2:{t:"path",pts:[[0,0],[0,-6],[8,-6]],labels:["6 km South","8 km East (Left turn)"],sl:"A",el:"C",dist:"10 km"},
 3:{t:"compass",arrows:[{deg:0,l:"North"},{deg:135,l:"→ South-East (135° CW)"},{deg:270,l:"West"},{deg:45,l:"→ North-East (same 135° CW)"}]},
 4:{t:"path",pts:[[0,0],[5,0],[5,-3]],labels:["50 m East","30 m South (Right turn)"],sl:"Start",el:"End",dist:"South-East"},
 5:{t:"path",pts:[[0,0],[0,10],[0.5,4],[3.5,4]],labels:["10 km North","6 km South","3 km East"],sl:"Start",el:"End",dist:"5 km"},
 6:{t:"compass",arrows:[{deg:90,l:"Start: facing East (sun)"},{deg:180,l:"+90° CW → South"}]},
 7:{t:"compass",arrows:[{deg:270,l:"Start: facing West"},{deg:315,l:"+45° → North-West"},{deg:135,l:"+180° → South-East"}]},
 8:{t:"compass",arrows:[{deg:90,l:"Sun = EAST (morning)"},{deg:270,l:"Shadow falls WEST"}]},
 9:{t:"path",pts:[[0,0],[0,-10],[-5,-10],[-5,0],[-15,0]],labels:["1) 10 km South","2) 5 km West","3) 10 km North","4) 10 km West"],sl:"Home",el:"End",dist:"15 km straight back (East)"},
 10:{t:"path",pts:[[0,-5],[0,0],[-5,0]],labels:["5 m (C is South of B)","5 m (A is West of B)"],sl:"C",el:"A",dist:"A from C = North-West"}
};
window.PAPERS["m2-2"].toolbox = { head:["Topic","Remember"], rows:[
 ["Distance","Pythagoras: AC = √(AB² + BC²). Triples: 3-4-5, 6-8-10, 5-12-13"],
 ["Turns","Facing North: Right = East, Left = West. Facing South: Right = West, Left = East."],
 ["Rotation","Clockwise (CW) ADDS degrees. Anti-clockwise SUBTRACTS degrees."],
 ["Compass angles","N 0° · NE 45° · E 90° · SE 135° · S 180° · SW 225° · W 270° · NW 315°"]] };
