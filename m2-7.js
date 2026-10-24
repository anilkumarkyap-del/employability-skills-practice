/* MODULE 2 – Concept 2.7 Seating Arrangement */
window.PAPERS = window.PAPERS || {};
window.PAPERS["m2-7"] = {
  id: "m2-7",
  title: "2.7 Seating Arrangement",
  subtitle: "Module 2: Logical Reasoning · 10 questions",
  sections: [{ name: "2.7 Seating Arrangement", from: 1, to: 10 }],
  questions: [
/* 1 */ {
  q: "Six friends A, B, C, D, E, F sit in a circle facing center. B is between A and C. E is between D and F. D is immediate left of A. Who is opposite to A?",
  opts: ["E","F","C","D"], a: 1,
  key: "Facing the centre, LEFT means the clockwise side. Place A first, then add the others clue by clue.",
  steps: ["Place A. D is immediate LEFT of A, so D is the next seat clockwise from A.","E is between D and F, so D, E, F come together: A, D, E, F going clockwise.","B is between A and C. The two seats left are C then B, so the order is A, D, E, F, C, B (clockwise). Check: B sits between C and A. Correct.","A is seat 1. The opposite seat (3 seats away) is seat 4 = F."],
  tip: "In a circle of 6, the opposite person is exactly 3 seats away."
},
/* 2 */ {
  q: "Five persons A, B, C, D, E are sitting in a row facing North. C is sitting in middle. A is to immediate right of C. B is at extreme right. E is in between C & D. Who is left of C?",
  opts: ["D","A","B","E"], a: 3,
  key: "Number the seats 1 to 5 from the left. Facing North, right = East = the right end of the row.",
  steps: ["C is in the middle: seat 3.","A is immediately right of C: seat 4. B is at the extreme right: seat 5.","D and E take seats 1 and 2. E is between C and D, so E is next to C: E = seat 2 and D = seat 1.","The person on the left of C is E."],
  tip: "Place the sure positions first (middle and ends)."
},
/* 3 */ {
  q: "A, B, C, D sit in a row facing North. A and B are at ends. C is sitting next to A. Who is sitting next to B?",
  opts: ["D","C","A","Cannot be determined"], a: 0,
  key: "A and B are at the two ends. Only C and D are left for the two middle seats.",
  steps: ["Ends: A and B. Middle seats: C and D.","C is next to A, so C takes the middle seat beside A. D takes the other middle seat.","Order: A, C, D, B (or the same row the other way round: B, D, C, A). In both rows D is next to B."],
  tip: "If the answer is the same in every possible arrangement, then it is certain."
},
/* 4 */ {
  q: "In a circular table facing center, P is to immediate right of Q. Who is to immediate left of P?",
  opts: ["S","R","Q","Cannot be determined"], a: 2,
  key: "Facing the centre, one person's right hand points towards the next person, and that person's left hand points back.",
  steps: ["\"P is to the immediate right of Q\": P stands next to Q, on Q's right.","From P's point of view, Q is on P's left.","So the person to the immediate left of P is Q."],
  tip: "'A is right of B' always means 'B is left of A' when they face the same way."
},
/* 5 */ {
  q: "Four girls A, B, C, D sit on a bench. A is next to B, C is next to D. D is not next to A. Who is sitting adjacent to D?",
  opts: ["C","B","A","Both A and B"], a: 0,
  key: "The question gives you one sure fact: C is next to D. Check whether any other girl must sit beside D.",
  steps: ["\"C is next to D\" is given, so C is adjacent to D.","\"D is not next to A\", so A is never beside D.","B may or may not be beside D (it depends on the order), so B is not certain.","The only girl who is always adjacent to D is C."],
  table: { head:["Possible order","Girls beside D"], rows:[["A B C D","C"],["B A C D","C"],["D C B A","C"],["A B D C","B and C"]] },
  tip: "An answer that is true in EVERY possible arrangement is the correct one."
},
/* 6 */ {
  q: "Six people P, Q, R, S, T, U sit in a row facing South. P is third to right of S. T is immediate left of Q. Who sits at extreme left?",
  opts: ["P","S","T","Data Inadequate"], a: 3,
  key: "Try to build the row. If two different rows fit the clues but give different answers, the data is inadequate.",
  steps: ["Facing South swaps left and right. Number the seats 1 to 6 from the people's own left.","P is third to the right of S, so S and P are seats (1, 4), (2, 5) or (3, 6). T is immediately left of Q, so T and Q are side by side.","Row 1: S, T, Q, P, R, U fits all clues. Extreme left = S.","Row 2: R, S, T, Q, P, U also fits all clues. Extreme left = R.","The answer changes, so the data is inadequate."],
  table: { head:["Row","Seat 1","2","3","4","5","6","Extreme left"], rows:[["Row 1","S","T","Q","P","R","U","S"],["Row 2","R","S","T","Q","P","U","R"]] },
  note: "In the textbook the options are printed as (A) P, (C) S, (A) T, (D). In order they are P, S, T, Data Inadequate, so the correct option is the fourth, (D)."
},
/* 7 */ {
  q: "8 friends sit around a circular table. How many persons sit between any two opposite persons?",
  opts: ["3","4","2","5"], a: 0,
  key: "Opposite persons are exactly half way round the circle. Take away the two opposite persons and split the rest into two equal sides.",
  steps: ["Total people N = 8. Take away the two opposite persons: 8 − 2 = 6.","These 6 sit on the two sides equally: 6 ÷ 2 = 3 on each side."],
  tip: "Formula: (N − 2) ÷ 2."
},
/* 8 */ {
  q: "A, B, C, D, E face North. B is to left of E who sits at the end. C is to immediate right of D. A is at extreme left. Who is in the middle?",
  opts: ["B","C","D","E"], a: 1,
  key: "Number the seats 1 to 5 from the left (facing North, left = West).",
  steps: ["A is at the extreme left: seat 1. E sits at an end, and the left end is taken, so E is seat 5.","B is to the left of E: B takes seat 4.","C is immediately right of D, so D and C are side by side with D first: D = seat 2 and C = seat 3.","The middle seat (3) is C."],
  note: "The question says B is 'to left of E'. The textbook reads this as B being right next to E (seat 4). That is how the answer C is found."
},
/* 9 */ {
  q: "In circular arrangement, if all face AWAY from centre, then immediate right means moving in which direction?",
  opts: ["Counter-clockwise","Clockwise","Towards centre","Opposite"], a: 1,
  key: "Facing the centre and facing away are opposite. So left and right also swap.",
  steps: ["Facing the centre: right = anticlockwise.","Facing AWAY from the centre, everything turns round: right = clockwise."],
  table: { head:["Facing","RIGHT hand points"], rows:[["The CENTRE","Anticlockwise"],["AWAY from the centre","CLOCKWISE"]] },
  tip: "Memory: Facing the centre – clockwise is LEFT. Facing away – clockwise is RIGHT."
},
/* 10 */ {
  q: "5 boys P, Q, R, S and T are sitting in a circle facing center. R is between S and T. P is left of T. Who is right of S?",
  opts: ["R","P","T","Q"], a: 3,
  key: "Facing the centre, LEFT = clockwise. Place the boys one clue at a time.",
  steps: ["R is between S and T, so S, R, T sit together in a row (going clockwise: S, R, T).","P is to the left of T: the next seat clockwise from T is P.","Q takes the last seat. Clockwise order: S, R, T, P, Q (the same circle as P, Q, S, R, T).","The right of S is the anticlockwise side. Before S comes Q."],
  tip: "Draw the circle and write each boy's name as you read each clue."
}
  ]
};
window.PAPERS["m2-7"].flows = {
 1:[["A"],"→",["D"],"→",["E"],"→",["F","opposite","g"],"→",["C"],"→",["B"],"clockwise"],
 2:[["D","seat 1"],["E","seat 2"],["C","seat 3"],["A","seat 4"],["B","seat 5"],"→",["Left of C","E","g"]],
 3:[["A","end"],["C"],["D","next to B","g"],["B","end"]],
 4:[["Q","P is on Q's right"],"so",["P","Q is on P's left"],"→",["Left of P","Q","g"]],
 5:[["C","always beside D","g"],"A never, B only sometimes"],
 6:[["Row 1","S T Q P R U"],"vs",["Row 2","R S T Q P U"],"→",["Extreme left","Not fixed: Data inadequate","g"]],
 7:[["8 − 2","6"],"÷ 2 →",["Between opposite","3","g"]],
 8:[["A","1"],["D","2"],["C","3","g"],["B","4"],["E","5"],"(left to right)"],
 9:[["Facing centre","right = anticlockwise"],"swap →",["Facing away","right = clockwise","g"]],
 10:[["Clockwise","S R T P Q"],"→",["Before S","Q","g"]]
};
window.PAPERS["m2-7"].diagrams = {
 1:{t:"ring",seats:["A","D","E","F","C","B"],hi:[0,3]},
 4:{t:"ring",seats:["Q","?","?","P"],hi:[0,3]},
 7:{t:"ring",seats:["1","2","3","4","5","6","7","8"],hi:[0,4]},
 10:{t:"ring",seats:["S","R","T","P","Q"],hi:[0,4]}
};
window.PAPERS["m2-7"].toolbox = { head:["Situation","Remember"], rows:[
 ["Facing the centre","Clockwise = LEFT. Anticlockwise = RIGHT."],
 ["Facing away from the centre","Clockwise = RIGHT. Anticlockwise = LEFT."],
 ["Row facing North","Left = West, Right = East"],
 ["Row facing South","Left = East, Right = West (left and right swap)"],
 ["Circle with N people","People between two opposite persons = (N − 2) ÷ 2"]] };
