/* MODULE 2 – Concept 2.1 Coding-Decoding */
window.PAPERS = window.PAPERS || {};
window.PAPERS["m2-1"] = {
  id: "m2-1",
  title: "2.1 Coding-Decoding",
  subtitle: "Module 2: Logical Reasoning · 10 questions",
  sections: [{ name: "2.1 Coding-Decoding", from: 1, to: 10 }],
  questions: [
/* 1 */ {
  q: "If 'DELHI' is coded as 'EFMIJ', how will 'MUMBAI' be coded in that same language?",
  opts: ["NVNCBJ","NVNCAJ","NVNCBJ","NVNDBJ"], a: 2,
  key: "Compare each letter with the coded letter in the same position. If every letter moves the same number of places, it is a fixed shift.",
  steps: ["D to E, E to F, L to M, H to I, I to J. Every letter moves +1.","Apply +1 to MUMBAI: M to N, U to V, M to N, B to C, A to B, I to J.","The coded word is NVNCBJ."],
  table: { head:["Original","D","E","L","H","I"], rows:[["Shift","+1","+1","+1","+1","+1"],["Coded","E","F","M","I","J"]] },
  tip: "Check the rule on the first two letters, then confirm it on the rest.",
  note: "Options (A) and (C) are identical (both NVNCBJ) in the textbook. The textbook marks (C). The textbook solution also types the code as EFMII by mistake; the correct code is EFMIJ."
},
/* 2 */ {
  q: "If 'CAT' is coded as 24 and 'DOG' is coded as 26, how will 'PIG' be coded?",
  opts: ["32","30","28","34"], a: 0,
  key: "A word coded as a number is usually the SUM of its letter positions. Test the rule on the given examples first.",
  steps: ["CAT: C = 3, A = 1, T = 20, so 3 + 1 + 20 = 24. It matches.","DOG: D = 4, O = 15, G = 7, so 4 + 15 + 7 = 26. It matches, so the rule is right.","PIG: P = 16, I = 9, G = 7, so 16 + 9 + 7 = 32."],
  tip: "Write the position numbers under the letters first, then add."
},
/* 3 */ {
  q: "In a certain code language, 'ROSE' is written as '6821' and 'CHAIR' as '73456'. How is 'SEARCH' written?",
  opts: ["213467","214567","214673","214637"], a: 2,
  key: "Each letter has its own digit. Build a letter-to-digit table from the two given words.",
  steps: ["ROSE = 6821 gives R=6, O=8, S=2, E=1.","CHAIR = 73456 gives C=7, H=3, A=4, I=5, R=6. R is 6 in both words, so the table is consistent.","SEARCH: S=2, E=1, A=4, R=6, C=7, H=3. Written together: 214673."],
  table: { head:["Letter","S","E","A","R","C","H"], rows:[["Digit","2","1","4","6","7","3"]] },
  tip: "A letter that appears in both words (R here) is your safety check."
},
/* 4 */ {
  q: "If 'APPLE' is coded as '50', how is 'ORANGE' coded using letter positions?",
  opts: ["70","55","65","60"], a: 3,
  key: "Same method as 2.1.2: add the position numbers of all the letters.",
  steps: ["APPLE: 1 + 16 + 16 + 12 + 5 = 50. The rule is confirmed.","ORANGE: O = 15, R = 18, A = 1, N = 14, G = 7, E = 5.","15 + 18 + 1 + 14 + 7 + 5 = 60."],
  table: { head:["Letter","O","R","A","N","G","E"], rows:[["Position","15","18","1","14","7","5"]] },
  tip: "Write all the positions in a row, then add them."
},
/* 5 */ {
  q: "If 'COMPUTER' is written as 'RFUVQNPC', how is 'MEDICINE' written in that code?",
  opts: ["EOJDJEFM","EOJDEJFM","MFEJDJOE","EOJDJMFE"], a: 0,
  key: "Two rules work together. First the word is written BACKWARDS. Then the first and last letters stay the same and every middle letter moves +1.",
  steps: ["Reverse COMPUTER: R-E-T-U-P-M-O-C. Keep R and C; shift the middle letters +1: E to F, T to U, U to V, P to Q, M to N, O to P. Result: RFUVQNPC. It matches, so both rules are right.","Reverse MEDICINE: E-N-I-C-I-D-E-M.","Keep the ends (E and M). Shift the middle: N to O, I to J, C to D, I to J, D to E, E to F.","The coded word is EOJDJEFM."],
  table: { head:["Reversed","E","N","I","C","I","D","E","M"], rows:[["Change","0","+1","+1","+1","+1","+1","+1","0"],["Coded","E","O","J","D","J","E","F","M"]] },
  tip: "When two rules are mixed, apply them one at a time: reverse first, then shift."
},
/* 6 */ {
  q: "In a certain code, '247' means 'spread red carpet' and '256' means 'dust one carpet'. Which digit means 'carpet'?",
  opts: ["2","4","7","5"], a: 0,
  key: "Look for the word that appears in both sentences and the digit that appears in both codes. They mean the same thing.",
  steps: ["Common word in 'spread red carpet' and 'dust one carpet': carpet.","Common digit in 247 and 256: 2.","So carpet = 2."],
  table: { head:["Code","Meaning"], rows:[["247","spread red carpet"],["256","dust one carpet"],["Common","2 = carpet"]] },
  tip: "This works whenever one word appears in two coded sentences."
},
/* 7 */ {
  q: "If 'LIGHT' is coded as 'MJHIU', how is 'FLAME' coded?",
  opts: ["GNCNE","GMBNF","GLBND","GMBNF"], a: 3,
  key: "Check whether every letter moves by the same amount.",
  steps: ["L to M, I to J, G to H, H to I, T to U. Every letter moves +1.","Apply +1 to FLAME: F to G, L to M, A to B, M to N, E to F.","The coded word is GMBNF."],
  table: { head:["Original","F","L","A","M","E"], rows:[["Shift","+1","+1","+1","+1","+1"],["Coded","G","M","B","N","F"]] },
  note: "Options (B) and (D) are identical (both GMBNF) in the textbook. The textbook marks (D)."
},
/* 8 */ {
  q: "If 'A' = 1 and 'PAT' = 37, then 'TAP' = ?",
  opts: ["40","35","37","31"], a: 2,
  key: "The value of a word is the sum of its letters. A sum does not change when you change the order.",
  steps: ["PAT: P = 16, A = 1, T = 20, so 16 + 1 + 20 = 37.","TAP has the same three letters: 20 + 1 + 16 = 37."],
  tip: "Same letters in a different order always give the same sum. No calculation needed."
},
/* 9 */ {
  q: "In a code, 'TEACHER' is written as 'VGCEJGT'. How is 'CHILDREN' written?",
  opts: ["EJKNFUGP","EJKNFTGP","EJKNFTHQ","EJKMFTGP"], a: 1,
  key: "Check how far the first letter has moved, then confirm that every other letter has moved by the same amount. Here the shift is +2.",
  steps: ["T to V (skip U), E to G (skip F), A to C, C to E, H to J, E to G, R to T. Every letter moves +2.","Apply +2 to CHILDREN: C to E, H to J, I to K, L to N, D to F, R to T, E to G, N to P.","The coded word is EJKNFTGP."],
  table: { head:["Original","C","H","I","L","D","R","E","N"], rows:[["Shift","+2","+2","+2","+2","+2","+2","+2","+2"],["Coded","E","J","K","N","F","T","G","P"]] },
  tip: "For +2, move two letters ahead: C, D, E so C becomes E."
},
/* 10 */ {
  q: "If 'WATER' is coded as 'TXQBO', how is 'FIRE' coded?",
  opts: ["HLUG","HKRE","GJTF","CFOB"], a: 3,
  key: "Here the coded letters are BEHIND the original letters, so the rule is a backward shift (−3).",
  steps: ["W to T (V, U, T). A to X (counting back from A wraps round to Z, Y, X). T to Q, E to B, R to O. Every letter moves −3.","Apply −3 to FIRE: F to C, I to F, R to O, E to B.","The coded word is CFOB."],
  table: { head:["Original","F","I","R","E"], rows:[["Shift","−3","−3","−3","−3"],["Coded","C","F","O","B"]] },
  tip: "Going back past A wraps round to Z. Think of the alphabet as a circle."
}
  ]
};
window.PAPERS["m2-1"].flows = {
 1:[["DELHI","+1 each"],"→",["MUMBAI","+1 each"],"→",["Code","NVNCBJ","g"]],
 2:[["CAT","3+1+20 = 24"],"✓",["PIG","16+9+7"],"→",["Code","32","g"]],
 3:[["R=6 O=8 S=2 E=1","C=7 H=3 A=4 I=5"],"→",["SEARCH","2 1 4 6 7 3"],"→",["Code","214673","g"]],
 4:[["APPLE","50 ✓"],"→",["ORANGE","15+18+1+14+7+5"],"=",["Code","60","g"]],
 5:[["Step 1","Reverse the word"],"→",["Step 2","Middle letters +1"],"→",["MEDICINE","EOJDJEFM","g"]],
 6:[["Common word","carpet"],"=",["Common digit","2"],"→",["carpet","2","g"]],
 7:[["LIGHT → MJHIU","+1 each"],"so",["FLAME","GMBNF","g"]],
 8:[["PAT","16+1+20 = 37"],"same letters →",["TAP","37","g"]],
 9:[["TEACHER","+2 each"],"so",["CHILDREN","EJKNFTGP","g"]],
 10:[["WATER","−3 each"],"so",["FIRE","CFOB","g"]]
};
window.PAPERS["m2-1"].toolbox = { head:["Topic","Remember"], rows:[
 ["Alphabet positions","A=1, B=2 ... M=13, N=14 ... Z=26"],
 ["Reverse position","Reverse position = 27 − forward position (A=26 ... Z=1)"],
 ["Letter shift","+1 = one place forward (A to B). −3 = three places back. After Z comes A."],
 ["Word to number","Try the SUM of the letter positions first."],
 ["Mixed rules","Apply one rule at a time (for example reverse first, then shift)."],
 ["Two coded sentences","Match the common word with the common digit."]] };
