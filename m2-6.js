/* MODULE 2 – Concept 2.6 Number and Letter Series */
window.PAPERS = window.PAPERS || {};
window.PAPERS["m2-6"] = {
  id: "m2-6",
  title: "2.6 Number and Letter Series",
  subtitle: "Module 2: Logical Reasoning · 10 questions",
  sections: [{ name: "2.6 Number and Letter Series", from: 1, to: 10 }],
  questions: [
/* 1 */ {
  q: "Find the missing term in the number series: 7, 14, 28, 56, 112, ?",
  opts: ["224","168","196","240"], a: 0,
  key: "Each term is the PREVIOUS term multiplied by the same number.",
  steps: ["14 ÷ 7 = 2, 28 ÷ 14 = 2, 56 ÷ 28 = 2, 112 ÷ 56 = 2. Each term is multiplied by 2.","Next term = 112 × 2 = 224."]
},
/* 2 */ {
  q: "Look at the series: 2, 3, 5, 7, 11.... What number should come next?",
  opts: ["17","15","13","12"], a: 2,
  key: "These are the PRIME numbers in order. A prime number is divisible only by 1 and itself.",
  steps: ["2, 3, 5, 7, 11 are the first five primes.","The next prime after 11 is 13. (12 = 3 × 4, so 12 is not prime.)"],
  watch: "The gaps (1, 2, 2, 4) show no pattern. If differences do not work, think prime numbers."
},
/* 3 */ {
  q: "Complete the series: 3, 5, 9, 17, 33, ?",
  opts: ["60","65","55","70"], a: 1,
  key: "Look at the differences between the terms.",
  steps: ["Differences: 5 − 3 = 2, 9 − 5 = 4, 17 − 9 = 8, 33 − 17 = 16. The differences are 2, 4, 8, 16: they double each time.","Next difference = 16 × 2 = 32.","Next term = 33 + 32 = 65."],
  tip: "Another way: each term = 2 × previous − 1. For example 2 × 33 − 1 = 65."
},
/* 4 */ {
  q: "Find the missing letter term: A, C, F, J, O, ?",
  opts: ["W","T","V","U"], a: 3,
  key: "Change the letters into positions and look at the gaps.",
  steps: ["A = 1, C = 3, F = 6, J = 10, O = 15.","The gaps are +2, +3, +4, +5. They grow by 1 each time.","Next gap = +6, so 15 + 6 = 21, and position 21 is U."],
  tip: "Position 21 is U (A=1, ... T=20, U=21)."
},
/* 5 */ {
  q: "Which number replaces '?' in: 4, 9, 16, 25, 36, ?",
  opts: ["49","64","45","50"], a: 0,
  key: "Check whether the numbers are perfect squares.",
  steps: ["4 = 2², 9 = 3², 16 = 4², 25 = 5², 36 = 6².","The next square is 7² = 49."],
  tip: "Learn squares up to 20 and cubes up to 10."
},
/* 6 */ {
  q: "Find the next term: Z, W, T, Q, ?",
  opts: ["M","N","O","P"], a: 1,
  key: "Turn the letters into positions. They are going DOWN.",
  steps: ["Z = 26, W = 23, T = 20, Q = 17.","Each step is −3.","Next position = 17 − 3 = 14, and position 14 is N."]
},
/* 7 */ {
  q: "Complete series: 10, 100, 200, 310, ?",
  opts: ["400","420","410","430"], a: 3,
  key: "Look at the differences between the terms.",
  steps: ["Differences: 100 − 10 = 90, 200 − 100 = 100, 310 − 200 = 110.","The differences go up by 10 each time: 90, 100, 110, so the next is 120.","Next term = 310 + 120 = 430."]
},
/* 8 */ {
  q: "Identify wrong number in series: 1, 8, 27, 64, 124, 216",
  opts: ["124","64","27","216"], a: 0,
  key: "Test every term against the pattern. These look like cubes.",
  steps: ["1 = 1³, 8 = 2³, 27 = 3³, 64 = 4³.","5³ = 125, but the series shows 124.","6³ = 216 is correct. So 124 is the wrong number (it should be 125)."],
  table: { head:["n","1","2","3","4","5","6"], rows:[["Cube","1","8","27","64","125","216"],["Given","1","8","27","64","124","216"],["Match?","Yes","Yes","Yes","Yes","NO","Yes"]] }
},
/* 9 */ {
  q: "Find missing term: 2BCD, ____, BCD4, 5BCD, B6CD",
  opts: ["BC3D","B3CD","B2C3D","BCD3"], a: 1,
  key: "The letters B, C, D never change. Watch the NUMBER: how it grows and where it sits.",
  steps: ["The numbers go up by 1 each time: 2, 3, 4, 5, 6. So the missing term has the number 3.","Where does the number sit? 2BCD has it at the front. 5BCD (front) is followed by B6CD (second place), so after the front it moves to the second place.","So the missing term is B3CD."],
  table: { head:["Term","2BCD","B3CD (?)","BCD4","5BCD","B6CD"], rows:[["Number","2","3","4","5","6"],["Place","front","second","end","front","second"]] },
  tip: "Check: the pattern 'front, second, end' repeats. The second term must have the number in the second place."
},
/* 10 */ {
  q: "Complete series: 12, 21, 23, 32, 34, ?",
  opts: ["35","45","43","41"], a: 2,
  key: "Two steps repeat one after the other: reverse the digits, then add 2.",
  steps: ["12 reversed is 21 (reverse). 21 + 2 = 23 (add 2).","23 reversed is 32 (reverse). 32 + 2 = 34 (add 2).","34 reversed is 43 (reverse)."],
  tip: "When numbers jump up and down, look for two different steps taking turns."
}
  ]
};
window.PAPERS["m2-6"].flows = {
 1:[["7"],"×2",["14"],"×2",["28"],"×2",["56"],"×2",["112"],"×2",["224","","g"]],
 2:[["2"],["3"],["5"],["7"],["11"],"next prime →",["13","","g"]],
 3:[["3"],"+2",["5"],"+4",["9"],"+8",["17"],"+16",["33"],"+32",["65","","g"]],
 4:[["A","1"],"+2",["C","3"],"+3",["F","6"],"+4",["J","10"],"+5",["O","15"],"+6",["U","21","g"]],
 5:[["2²","4"],["3²","9"],["4²","16"],["5²","25"],["6²","36"],"→",["7²","49","g"]],
 6:[["Z","26"],"−3",["W","23"],"−3",["T","20"],"−3",["Q","17"],"−3",["N","14","g"]],
 7:[["10"],"+90",["100"],"+100",["200"],"+110",["310"],"+120",["430","","g"]],
 8:[["4³","64"],"→",["5³","125"],"but given",["124","wrong","g"]],
 9:[["2BCD","front"],["B3CD","second","g"],["BCD4","end"],["5BCD","front"],["B6CD","second"]],
 10:[["12"],"reverse",["21"],"+2",["23"],"reverse",["32"],"+2",["34"],"reverse",["43","","g"]]
};
window.PAPERS["m2-6"].toolbox = { head:["Look for","Example"], rows:[
 ["Multiply by the same number","7, 14, 28, 56 (× 2)"],
 ["Differences that grow","3, 5, 9, 17 (differences 2, 4, 8)"],
 ["Prime numbers","2, 3, 5, 7, 11, 13"],
 ["Squares and cubes","4, 9, 16, 25 (squares) | 1, 8, 27, 64 (cubes)"],
 ["Letters","Turn letters into positions (A=1 ... Z=26) and look at the gaps"],
 ["Odd one out","Check every term against the pattern"]] };
