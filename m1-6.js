/* MODULE 1 – Concept 1.6 */
window.PAPERS = window.PAPERS || {};
window.PAPERS["m1-6"] = {
 "id": "m1-6",
 "title": "1.6 Problems on Ages",
 "subtitle": "Module 1: Quantitative Aptitude · 10 questions",
 "sections": [
  {
   "name": "1.6 Problems on Ages",
   "from": 1,
   "to": 10
  }
 ],
 "toolbox": {
  "head": [
   "Topic",
   "Remember"
  ],
  "rows": [
   [
    "Past and future",
    "Age n years ago = x - n. Age n years hence = x + n."
   ],
   [
    "Age gap",
    "The difference between two people's ages NEVER changes."
   ],
   [
    "Ratio ages",
    "Write present ages as ax and bx, then put the change in both."
   ]
  ]
 },
 "questions": [
  {
   "label": "1.6.1",
   "q": "The ratio of present ages of Anand and Bharat is 4: 5. Six years hence, the ratio becomes 5: 6. What is Anand's present age?",
   "opts": [
    "20 years",
    "24 years",
    "30 years",
    "18 years"
   ],
   "a": 1,
   "key": "Present ages are 4x and 5x. Add 6 to both and match the new ratio.",
   "tpre": [
    {
     "head": [
      "",
      "Anand",
      "Bharat"
     ],
     "rows": [
      [
       "Now (4x, 5x)",
       "24",
       "30"
      ],
      [
       "After 6 years",
       "30",
       "36 (30: 36 = 5: 6)"
      ]
     ]
    }
   ],
   "steps": [
    "(4x + 6) / (5x + 6) = 5/6.",
    "Cross-multiply: 6(4x + 6) = 5(5x + 6), so 24x + 36 = 25x + 30, so x = 6.",
    "Anand's age = 4x = <b>24 years</b> (Bharat = 30)."
   ],
   "watch": "The question asks for ANAND (4x), not Bharat (5x)."
  },
  {
   "label": "1.6.2",
   "q": "Father is 4 times older than his son. After 20 years, he will be twice as old as his son. Find the present age of the father.",
   "opts": [
    "40 years",
    "36 years",
    "48 years",
    "32 years"
   ],
   "a": 0,
   "key": "Son = x, Father = 4x. Add 20 to both and use the 'twice' clue.",
   "tpre": [
    {
     "head": [
      "",
      "Son",
      "Father"
     ],
     "rows": [
      [
       "Now",
       "10",
       "40"
      ],
      [
       "After 20 years",
       "30",
       "60 (= 2 x 30)"
      ]
     ]
    }
   ],
   "steps": [
    "After 20 years: father = 4x + 20, son = x + 20.",
    "4x + 20 = 2(x + 20) = 2x + 40, so 2x = 20 and x = <b>10</b>.",
    "Father = 4 x 10 = <b>40 years</b>."
   ]
  },
  {
   "label": "1.6.3",
   "q": "The sum of ages of 5 children born at intervals of 3 years each is 50 years. What is the age of the youngest child?",
   "opts": [
    "2 years",
    "8 years",
    "10 years",
    "4 years"
   ],
   "a": 3,
   "key": "Children are x, x+3, x+6, x+9, x+12 years old.",
   "tpre": [
    {
     "head": [
      "Child",
      "1",
      "2",
      "3",
      "4",
      "5"
     ],
     "rows": [
      [
       "Age",
       "4",
       "7",
       "10",
       "13",
       "16"
      ]
     ]
    }
   ],
   "steps": [
    "Sum = 5x + (3 + 6 + 9 + 12) = 5x + 30.",
    "5x + 30 = 50, so 5x = 20 and x = <b>4 years</b>."
   ],
   "tip": "Check: 4 + 7 + 10 + 13 + 16 = 50."
  },
  {
   "label": "1.6.4",
   "q": "A man is 24 years older than his son. In two years, his age will be twice the age of his son. The present age of his son is:",
   "opts": [
    "18 years",
    "20 years",
    "22 years",
    "24 years"
   ],
   "a": 2,
   "key": "Age gap = 24 always. Son = x, man = x + 24.",
   "steps": [
    "In 2 years: man = x + 26, son = x + 2.",
    "x + 26 = 2(x + 2) = 2x + 4, so x = <b>22</b>.",
    "Check: man 46, son 22. After 2 years: 48 and 24. 48 = 2 x 24."
   ]
  },
  {
   "label": "1.6.5",
   "q": "Present ages of Sameer and Anand are in ratio 5: 4. Three years hence, ratio becomes 11: 9. What is Anand's present age?",
   "opts": [
    "20 years",
    "27 years",
    "24 years",
    "30 years"
   ],
   "a": 2,
   "key": "Ages 5x and 4x. Add 3 to both.",
   "steps": [
    "(5x + 3)/(4x + 3) = 11/9, so 9(5x + 3) = 11(4x + 3).",
    "45x + 27 = 44x + 33, so x = 6.",
    "Anand = 4x = <b>24 years</b>."
   ],
   "tip": "Check: Sameer 30, Anand 24. After 3 years: 33 and 27 = 11: 9."
  },
  {
   "label": "1.6.6",
   "q": "Ten years ago, P was half of Q's age. If the ratio of their present ages is 3: 4, what is the sum of their present ages?",
   "opts": [
    "35 years",
    "40 years",
    "45 years",
    "30 years"
   ],
   "a": 0,
   "key": "Present ages 3x and 4x. Ten years ago: 3x - 10 and 4x - 10.",
   "steps": [
    "3x - 10 = (1/2)(4x - 10), so 2(3x - 10) = 4x - 10.",
    "6x - 20 = 4x - 10, so x = 5.",
    "Ages: P = 15, Q = 20. Sum = 7x = <b>35 years</b>."
   ],
   "tip": "Check: 10 years ago P = 5 and Q = 10. P is half of Q."
  },
  {
   "label": "1.6.7",
   "q": "Six years ago, the ratio of ages of Kunal and Sagar was 6: 5. Four years hence, the ratio becomes 11: 10. What is Sagar's present age?",
   "opts": [
    "14 years",
    "18 years",
    "20 years",
    "16 years"
   ],
   "a": 3,
   "key": "Use the age 6 years ago as the base: 6x and 5x.",
   "tpre": [
    {
     "head": [
      "",
      "Kunal",
      "Sagar"
     ],
     "rows": [
      [
       "6 years ago",
       "12",
       "10 (12: 10 = 6: 5)"
      ],
      [
       "Now",
       "18",
       "16"
      ],
      [
       "4 years hence",
       "22",
       "20 (22: 20 = 11: 10)"
      ]
     ]
    }
   ],
   "steps": [
    "Present ages = 6x + 6 and 5x + 6. Four years hence = 6x + 10 and 5x + 10.",
    "(6x + 10)/(5x + 10) = 11/10, so 60x + 100 = 55x + 110.",
    "5x = 10, so x = 2. Sagar now = 5(2) + 6 = <b>16 years</b>."
   ]
  },
  {
   "label": "1.6.8",
   "q": "A father's age is 3 times the sum of ages of his two sons. After 5 years his age will be twice the sum of their ages. Father's present age is:",
   "opts": [
    "50 years",
    "45 years",
    "40 years",
    "55 years"
   ],
   "a": 1,
   "key": "Let the sum of the sons' ages be S. Two sons means 10 years more after 5 years.",
   "steps": [
    "Father = 3S. After 5 years: father = 3S + 5; sons' sum = S + 10.",
    "3S + 5 = 2(S + 10) = 2S + 20, so S = 15.",
    "Father = 3 x 15 = <b>45 years</b>."
   ],
   "watch": "The sons' sum rises by 5 + 5 = 10 (two sons), not by 5."
  },
  {
   "label": "1.6.9",
   "q": "At present, the ratio between the ages of Arun and Deepak is 4: 3. After 6 years, Arun's age will be 26 years. What is Deepak's present age?",
   "opts": [
    "18 years",
    "12 years",
    "15 years",
    "20 years"
   ],
   "a": 2,
   "key": "Find Arun's present age first, then use the ratio.",
   "steps": [
    "Arun now = 26 - 6 = <b>20 years</b>.",
    "4 parts = 20, so 1 part = 5.",
    "Deepak = 3 parts = <b>15 years</b>."
   ]
  },
  {
   "label": "1.6.10",
   "q": "The total age of A and B is 12 years more than total age of B and C. How many years C is younger than A?",
   "opts": [
    "24 years",
    "12 years",
    "6 years",
    "10 years"
   ],
   "a": 1,
   "key": "B appears on both sides, so it cancels.",
   "steps": [
    "A + B = B + C + 12.",
    "Take B away from both sides: A = C + 12.",
    "So A - C = <b>12</b>: C is 12 years younger than A."
   ]
  }
 ]
};
