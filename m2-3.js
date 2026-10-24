/* MODULE 2 – Concept 2.3 Blood Relations */
window.PAPERS = window.PAPERS || {};
window.PAPERS["m2-3"] = {
  id: "m2-3",
  title: "2.3 Blood Relations",
  subtitle: "Module 2: Logical Reasoning · 10 questions",
  sections: [{ name: "2.3 Blood Relations", from: 1, to: 10 }],
  questions: [
/* 1 */ {
  q: "Pointing to a photograph, Priya said, 'His mother's only daughter is my mother.' How is Priya related to the man in the photograph?",
  opts: ["Niece","Sister","Daughter","Mother"], a: 0,
  key: "Work from the inside of the sentence outwards, one link at a time.",
  steps: ["\"His mother's only daughter\" = the man's own sister.","Priya says this person is her mother. So Priya's mother = the man's sister.","Priya is the daughter of the man's sister, so she is his niece."],
  tip: "Sister's daughter = niece. Sister's son = nephew."
},
/* 2 */ {
  q: "A is B's brother. C is A's mother. D is C's father. How is B related to D?",
  opts: ["Daughter","Grand-daughter","Grandfather","Brother"], a: 1,
  key: "Draw the family from the top: D is the oldest, then C, then A and B.",
  steps: ["C is A's mother. A and B are brother and sister, so C is also B's mother.","D is C's father, so D is the father of B's mother: D is B's grandfather.","So B is D's grandchild. Among the options the only grandchild is Grand-daughter."],
  note: "The textbook prints the answer as (A) Grand-daughter, but Grand-daughter is option (B) in the printed list. So the correct option is (B). The question does not give B's gender; Grand-daughter is the only grandchild option, so it is the intended answer."
},
/* 3 */ {
  q: "Pointing to a man, a woman said, 'He is the only son of my mother's mother.' How is the man related to the woman?",
  opts: ["Brother","Father","Maternal Uncle","Nephew"], a: 2,
  key: "\"My mother's mother\" is the woman's grandmother on her mother's side. Her only son is the woman's mother's brother.",
  steps: ["\"My mother's mother\" = the woman's maternal grandmother.","Her only son is the brother of the woman's mother.","Mother's brother = maternal uncle."],
  tip: "Mother's brother = maternal uncle. Father's brother = paternal uncle."
},
/* 4 */ {
  q: "If 'A + B' means A is father of B, 'A − B' means A is sister of B, what does 'P + Q − R' mean?",
  opts: ["P is grandfather of R","P is uncle of R","P is brother of R","P is father of R"], a: 3,
  key: "Read the symbols from left to right, one link at a time.",
  steps: ["P + Q: P is the father of Q.","Q − R: Q is the sister of R, so Q and R are brother and sister.","P is the father of Q, so P is also the father of Q's brother or sister R.","So P is the father of R."],
  tip: "Brothers and sisters have the same father."
},
/* 5 */ {
  q: "A and B are brothers. C and D are sisters. A's son is D's brother. How is B related to C?",
  opts: ["Father","Uncle","Brother","Grandfather"], a: 1,
  key: "A's son is D's brother, so A's son and D are children of the same parent – A.",
  steps: ["A's son is D's brother, so A is the father of D (and of A's son).","C and D are sisters, so C is also a child of A.","B is A's brother, so B is the brother of C's father: C's uncle."],
  tip: "Father's brother = uncle."
},
/* 6 */ {
  q: "Looking at a portrait, a man said, 'I have no brother or sister, but that man's father is my father's son.' Whose portrait was it?",
  opts: ["His son's","His own","His father's","His nephew's"], a: 0,
  key: "\"My father's son\" is either me or my brother. He has no brother, so it must be ME.",
  steps: ["The speaker has no brother or sister, so \"my father's son\" is the speaker himself.","The sentence becomes: \"That man's father is me.\"","So the man in the portrait is the speaker's son."],
  tip: "In 'my father's son' puzzles, first check if it simply means the speaker himself."
},
/* 7 */ {
  q: "E is the son of A. D is the son of B. E is married to C. C is B's daughter. How is D related to E?",
  opts: ["Father-in-law","Uncle","Brother","Brother-in-law"], a: 3,
  key: "Draw the family. Mark who is married to whom and who are the children of B.",
  steps: ["B has two children: D (son) and C (daughter). D is C's brother.","E is married to C, so E is C's husband.","D is the brother of E's wife, so D is E's brother-in-law."],
  tip: "Wife's brother = brother-in-law."
},
/* 8 */ {
  q: "A is the mother of B and C. If D is the husband of C, what is A to D?",
  opts: ["Aunt","Mother-in-law","Mother","Sister"], a: 1,
  key: "The mother of your wife is your mother-in-law.",
  steps: ["A is the mother of C.","D is the husband of C.","So A is the mother of D's wife: D's mother-in-law."],
  tip: "Wife's mother or husband's mother = mother-in-law."
},
/* 9 */ {
  q: "Namana who is the sister-in-law of Ranjith, is the daughter-in-law of Manjula. Pankaj is the father of Darshan who is the only brother of Ranjith. How Manjula is related to Ranjith?",
  opts: ["Aunt","Sister","Mother","Mother in Law"], a: 2,
  key: "Find who Namana is married to. Then see who her mother-in-law is.",
  steps: ["Darshan is the only brother of Ranjith, and Namana is Ranjith's sister-in-law and Manjula's daughter-in-law. So Namana is the wife of Darshan.","Manjula is the mother-in-law of Namana, so Manjula is Darshan's mother.","Darshan and Ranjith are brothers (same parents), so Manjula is also the mother of Ranjith."],
  note: "The textbook spells the name 'Manula' in the question. It is the same person, Manjula."
},
/* 10 */ {
  q: "Introducing a lady, a man said, 'Her husband is the only son of my mother.' How is the lady related to the man?",
  opts: ["Wife","Sister","Mother","Daughter"], a: 0,
  key: "\"The only son of my mother\" is the man himself.",
  steps: ["\"Only son of my mother\" = the man himself.","The sentence becomes: \"Her husband is ME.\"","So the lady is his wife."],
  tip: "'Only son of my mother' or 'only daughter of my father' always means the speaker himself or herself."
}
  ]
};
window.PAPERS["m2-3"].flows = {
 1:[["His mother's only daughter","= his sister"],"= Priya's mother →",["Priya is","sister's daughter"],"→",["Priya is his","Niece","g"]],
 2:[["D","father of C"],"→",["C","mother of A, B"],"→",["B is D's","Grand-daughter","g"]],
 3:[["My mother's mother","grandmother"],"her only son →",["Mother's brother","= maternal uncle","g"]],
 4:[["P + Q","P is father of Q"],"+",["Q − R","Q is sister of R"],"→",["P is","father of R","g"]],
 5:[["A","father of D, C"],"B = A's brother →",["B is C's","Uncle","g"]],
 6:[["No brother","father's son = ME"],"→",["That man's father","= me"],"→",["Portrait of","His son","g"]],
 7:[["D","son of B"],"C = D's sister, E = C's husband →",["D is E's","Brother-in-law","g"]],
 8:[["A","mother of C"],"D = C's husband →",["A is D's","Mother-in-law","g"]],
 9:[["Namana","wife of Darshan"],"→",["Manjula","mother of Darshan"],"Darshan, Ranjith brothers →",["Manjula is Ranjith's","Mother","g"]],
 10:[["Only son of my mother","= ME"],"→",["Her husband","= me"],"→",["Lady is my","Wife","g"]]
};
window.PAPERS["m2-3"].diagrams = {
 1:{t:"tree",nodes:[{id:"gm",x:170,y:30,t:"His mother"},{id:"m",x:85,y:105,t:"Man in photo",c:"g"},{id:"s",x:255,y:105,t:"His sister"},{id:"p",x:255,y:180,t:"Priya"}],edges:[["gm","m"],["gm","s"],["s","p"]],cap:"His sister is Priya's mother, so Priya is the man's niece"},
 2:{t:"tree",nodes:[{id:"d",x:170,y:30,t:"D (C's father)"},{id:"c",x:170,y:105,t:"C (mother of A, B)"},{id:"a",x:85,y:180,t:"A (B's brother)"},{id:"b",x:255,y:180,t:"B",c:"g"}],edges:[["d","c"],["c","a"],["c","b"]],cap:"B is the grandchild of D"},
 3:{t:"tree",nodes:[{id:"gm",x:170,y:30,t:"Woman's mother's mother"},{id:"m",x:85,y:105,t:"Woman's mother"},{id:"u",x:255,y:105,t:"Only son = the man",c:"g"},{id:"w",x:85,y:180,t:"The woman"}],edges:[["gm","m"],["gm","u"],["m","w"]],cap:"The man is the woman's mother's brother: maternal uncle"},
 4:{t:"tree",nodes:[{id:"p",x:170,y:30,t:"P (father)",c:"g"},{id:"q",x:85,y:105,t:"Q (sister of R)"},{id:"r",x:255,y:105,t:"R"}],edges:[["p","q"],["p","r"]],cap:"P is the father of Q, and Q and R are siblings, so P is the father of R"},
 5:{t:"tree",nodes:[{id:"a",x:100,y:30,t:"A (father)"},{id:"b",x:260,y:30,t:"B (A's brother)",c:"g"},{id:"s",x:40,y:105,t:"A's son"},{id:"d",x:150,y:105,t:"D"},{id:"c",x:260,y:105,t:"C"}],edges:[["a","s"],["a","d"]],w:340,cap:"C and D are sisters, children of A. B is A's brother, so B is C's uncle"},
 6:{t:"tree",nodes:[{id:"s",x:170,y:30,t:"Speaker (me)"},{id:"m",x:170,y:105,t:"Man in portrait",c:"g"}],edges:[["s","m"]],cap:"The portrait is of the speaker's son"},
 7:{t:"tree",w:420,nodes:[{id:"b",x:132,y:30,t:"B (parent)"},{id:"a",x:350,y:30,t:"A (parent)"},{id:"d",x:64,y:105,t:"D (son of B)",c:"g"},{id:"c",x:200,y:105,t:"C (daughter of B)"},{id:"e",x:350,y:105,t:"E (son of A)"}],edges:[["b","d"],["b","c"],["c","e","m"],["a","e"]],cap:"D is the brother of E's wife, so D is E's brother-in-law"},
 8:{t:"tree",w:420,nodes:[{id:"a",x:132,y:30,t:"A (mother)",c:"g"},{id:"b",x:64,y:105,t:"B"},{id:"c",x:200,y:105,t:"C (daughter)"},{id:"d",x:350,y:105,t:"D (husband of C)"}],edges:[["a","b"],["a","c"],["c","d","m"]],cap:"A is the mother of D's wife: mother-in-law"},
 9:{t:"tree",w:420,nodes:[{id:"pa",x:90,y:30,t:"Pankaj (father)"},{id:"ma",x:250,y:30,t:"Manjula",c:"g"},{id:"r",x:64,y:105,t:"Ranjith"},{id:"d",x:200,y:105,t:"Darshan"},{id:"n",x:350,y:105,t:"Namana (wife)"}],edges:[["pa","ma","m"],["pa","r"],["pa","d"],["d","n","m"]],cap:"Manjula is the mother of Darshan and of his brother Ranjith"},
 10:{t:"tree",nodes:[{id:"m",x:85,y:60,t:"Man (me)"},{id:"l",x:255,y:60,t:"The lady",c:"g"}],edges:[["m","l","m"]],cap:"Her husband is me, so she is my wife"}
};
