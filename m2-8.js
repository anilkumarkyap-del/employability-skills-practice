/* MODULE 2 – Concept 2.8 Ranking and Order */
window.PAPERS = window.PAPERS || {};
window.PAPERS["m2-8"] = {
  id: "m2-8",
  title: "2.8 Ranking and Order",
  subtitle: "Module 2: Logical Reasoning · 10 questions",
  sections: [{ name: "2.8 Ranking and Order", from: 1, to: 10 }],
  questions: [
/* 1 */ {
  q: "In a class rank list of 45 students, Suresh ranks 11th from the top. What is his rank from the bottom?",
  opts: ["34th","35th","36th","33rd"], a: 1,
  key: "Rank from bottom = (Total − Rank from top) + 1.",
  steps: ["Students above Suresh = 11 − 1 = 10.","Students below Suresh = 45 − 11 = 34.","Rank from bottom = 34 + 1 = 35th (add 1 for Suresh himself)."],
  watch: "Do not forget the +1 for Suresh himself. Option (A) 34th forgets him."
},
/* 2 */ {
  q: "Ramu ranked 7th from top and 28th from bottom in a class. How many students are there in the class?",
  opts: ["34","35","36","33"], a: 0,
  key: "Total = (Rank from top + Rank from bottom) − 1.",
  steps: ["7 + 28 = 35.","Ramu is counted in BOTH ranks, so subtract 1: 35 − 1 = 34."],
  watch: "Do not give 35. Ramu has been counted twice."
},
/* 3 */ {
  q: "In a row of boys, A is 10th from left and B is 9th from right. If they interchange positions, A becomes 15th from left. How many boys in row?",
  opts: ["25","24","23","22"], a: 2,
  key: "After swapping, A stands where B stood. So B's old seat is 15th from the left.",
  steps: ["After the interchange, A takes B's position, which is 15th from left and 9th from right.","Total boys = (15 + 9) − 1 = 24 − 1 = 23."],
  watch: "A's first position (10th) is not needed. B's seat decides the total."
},
/* 4 */ {
  q: "Ravi is 5 ranks ahead of Sumit in a class of 39. If Sumit's rank is 17th from last, what is Ravi's rank from top?",
  opts: ["17th","19th","20th","18th"], a: 3,
  key: "First turn Sumit's rank from last into a rank from the top. Then move 5 ranks up.",
  steps: ["Sumit from the top = (39 − 17) + 1 = 22 + 1 = 23rd.","Ravi is 5 ranks AHEAD (a better rank), so subtract: 23 − 5 = 18th."],
  tip: "Ahead = smaller rank number. Behind = bigger rank number."
},
/* 5 */ {
  q: "In a row of trees, one tree is 7th from either end. How many trees are there in the row?",
  opts: ["13","14","12","15"], a: 0,
  key: "The tree is 7th from the left AND 7th from the right. Use the total formula.",
  steps: ["Total = (7 + 7) − 1 = 14 − 1 = 13.","Check: 6 trees on each side + the tree itself = 13."]
},
/* 6 */ {
  q: "Manoj is 8th from top and 31st from bottom. How many students in class?",
  opts: ["39","38","40","37"], a: 1,
  key: "Total = (Rank from top + Rank from bottom) − 1.",
  steps: ["8 + 31 = 39.","Subtract 1 for Manoj: 39 − 1 = 38."]
},
/* 7 */ {
  q: "In a queue, Ramesh is 12th from front and 18th from back. If Suresh stands 7th from back, his position from front is:",
  opts: ["18th","30th","23rd","13th"], a: 2,
  key: "First find the total people in the queue. Then change Suresh's back position into a front position.",
  steps: ["Total people = (12 + 18) − 1 = 30 − 1 = 29.","Suresh is 7th from the back, so he is (29 − 7) + 1 = 22 + 1 = 23rd from the front."],
  tip: "From front = (Total − from back) + 1."
},
/* 8 */ {
  q: "P is taller than Q but shorter than R. S is taller than R. Who is the tallest?",
  opts: ["S","R","P","Q"], a: 0,
  key: "Write all the clues as one chain, from tallest to shortest.",
  steps: ["P is taller than Q: P > Q.","P is shorter than R: R > P.","S is taller than R: S > R.","Join: S > R > P > Q. The tallest is S."],
  tip: "Join the clues by matching the common person."
},
/* 9 */ {
  q: "In a row of 30 students, Neha is 15th from right. What is her rank from left?",
  opts: ["14th","15th","17th","16th"], a: 3,
  key: "Rank from left = (Total − Rank from right) + 1.",
  steps: ["Students on her right = 15 − 1 = 14.","Students on her left = 30 − 15 = 15.","Her rank from the left = 15 + 1 = 16th."]
},
/* 10 */ {
  q: "If A is taller than B, B is shorter than C and taller than D, E is taller than A But shorter than C. who is the shortest?",
  opts: ["E","D","B","A"], a: 1,
  key: "Make one chain from all the clues.",
  steps: ["A > B (A is taller than B).","C > B and B > D, so C > B > D.","E > A and C > E, so C > E > A.","Join all: C > E > A > B > D. The shortest is D."],
  tip: "The shortest person never appears on the 'taller' side of any clue."
}
  ]
};
window.PAPERS["m2-8"].flows = {
 1:[["Above","11 − 1 = 10"],"+",["Below","45 − 11 = 34"],"+1 →",["From bottom","35th","g"]],
 2:[["7 + 28","35"],"− 1 →",["Total","34","g"]],
 3:[["B's old seat","15th from left, 9th from right"],"(15 + 9) − 1 →",["Total","23","g"]],
 4:[["Sumit from top","(39−17)+1 = 23rd"],"− 5 ahead →",["Ravi","18th","g"]],
 5:[["7th from each end"],"(7 + 7) − 1 →",["Trees","13","g"]],
 6:[["8 + 31","39"],"− 1 →",["Total","38","g"]],
 7:[["Total","(12+18)−1 = 29"],"(29 − 7) + 1 →",["Suresh from front","23rd","g"]],
 8:[["S"],">",["R"],">",["P"],">",["Q"],"→",["Tallest","S","g"]],
 9:[["Total − right","30 − 15 = 15"],"+1 →",["From left","16th","g"]],
 10:[["C"],">",["E"],">",["A"],">",["B"],">",["D"],"→",["Shortest","D","g"]]
};
window.PAPERS["m2-8"].diagrams = {
 1:{t:"stack",parts:[["10 above him",10,"mut"],["Suresh",1,"bad"],["34 below him",34,"mut"]],cap:"10 + 1 + 34 = 45 students"},
 2:{t:"stack",parts:[["6 above Ramu",6,"mut"],["Ramu",1,"bad"],["27 below Ramu",27,"mut"]],cap:"6 + 1 + 27 = 34 students"},
 3:{t:"stack",parts:[["14 on the left",14,"mut"],["B's old seat",1,"bad"],["8 on the right",8,"mut"]],cap:"14 + 1 + 8 = 23 boys"},
 4:{t:"stack",parts:[["17 ahead of Ravi",17,"mut"],["Ravi 18th",1,"bad"],["4 between",4,""],["Sumit 23rd",1,"bad"],["16 behind",16,"mut"]],cap:"17 + 1 + 4 + 1 + 16 = 39 students"},
 5:{t:"stack",parts:[["6 on one side",6,"mut"],["The tree",1,"bad"],["6 on the other side",6,"mut"]],cap:"6 + 1 + 6 = 13 trees"},
 6:{t:"stack",parts:[["7 above",7,"mut"],["Manoj",1,"bad"],["30 below",30,"mut"]],cap:"7 + 1 + 30 = 38 students"},
 7:{t:"stack",parts:[["11 in front",11,"mut"],["Ramesh",1,"bad"],["17 behind him",17,"mut"]],cap:"11 + 1 + 17 = 29 people"},
 9:{t:"stack",parts:[["15 on her left",15,"mut"],["Neha",1,"bad"],["14 on her right",14,"mut"]],cap:"15 + 1 + 14 = 30 students"}
};
window.PAPERS["m2-8"].toolbox = { head:["Need","Formula"], rows:[
 ["Total people","Total = (Rank from top + Rank from bottom) − 1"],
 ["Rank from bottom","Rank from bottom = (Total − Rank from top) + 1"],
 ["Why − 1 ?","The person is counted in BOTH ranks, so remove him or her once."],
 ["Height or age order","Join the clues into one chain: tallest > ... > shortest"]] };
