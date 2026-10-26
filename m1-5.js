/* MODULE 1 – Concept 1.5 */
window.PAPERS = window.PAPERS || {};
window.PAPERS["m1-5"] = {
 "id": "m1-5",
 "title": "1.5 Ratio, Proportion and Averages",
 "subtitle": "Module 1: Quantitative Aptitude · 10 questions",
 "sections": [
  {
   "name": "1.5 Ratio, Proportion and Averages",
   "from": 1,
   "to": 10
  }
 ],
 "toolbox": {
  "head": [
   "Topic",
   "Formula"
  ],
  "rows": [
   [
    "Ratio",
    "A: B = A / B"
   ],
   [
    "Proportion",
    "a: b:: c: d means a x d = b x c"
   ],
   [
    "Mean proportional",
    "Between a and b = square root of (a x b)"
   ],
   [
    "Average",
    "Total / number of items. Total = average x number."
   ],
   [
    "New average",
    "(Old total plus or minus the value) / new count"
   ]
  ]
 },
 "questions": [
  {
   "label": "1.5.1",
   "q": "The average monthly income of a family of 5 members is Rs.24,000. If one earning member with monthly income Rs.40,000 leaves, what is the new average income?",
   "opts": [
    "Rs.20,000",
    "Rs.21,000",
    "Rs.22,000",
    "Rs.19,500"
   ],
   "a": 0,
   "key": "Average -&gt; total -&gt; change the total -&gt; divide by the new number.",
   "flow": [
    [
     "5 members",
     "Rs.1,20,000"
    ],
    "→",
    [
     "He leaves",
     "- Rs.40,000"
    ],
    "→",
    [
     "4 members",
     "Rs.80,000"
    ]
   ],
   "steps": [
    "Total = 5 x 24,000 = <b>Rs.1,20,000</b>.",
    "After he leaves: 1,20,000 - 40,000 = <b>Rs.80,000</b> for 4 members.",
    "New average = 80,000 / 4 = <b>Rs.20,000</b>."
   ]
  },
  {
   "label": "1.5.2",
   "q": "If A: B = 2: 3 and B: C = 4: 5, find the ratio A: C.",
   "opts": [
    "2: 5",
    "8: 15",
    "6: 10",
    "3: 4"
   ],
   "a": 1,
   "key": "B appears in both ratios. Make B the same number in both.",
   "tpre": [
    {
     "head": [
      "",
      "A",
      "B",
      "C"
     ],
     "rows": [
      [
       "First ratio",
       "2",
       "3",
       ""
      ],
      [
       "Second ratio",
       "",
       "4",
       "5"
      ],
      [
       "Make B equal (12)",
       "8",
       "12",
       "15"
      ]
     ]
    }
   ],
   "steps": [
    "A / B = 2/3 and B / C = 4/5.",
    "A / C = (A / B) x (B / C) = (2/3) x (4/5) = <b>8/15</b>.",
    "So A: C = <b>8 : 15</b>."
   ],
   "tip": "LCM of 3 and 4 is 12. Then A: B: C = 8: 12: 15."
  },
  {
   "label": "1.5.3",
   "q": "The average of 5 numbers is 27. If one number is excluded, the average becomes 25. What is the excluded number?",
   "opts": [
    "32",
    "30",
    "35",
    "28"
   ],
   "a": 2,
   "key": "Find the two totals; the difference is the number that left.",
   "flow": [
    [
     "Total of 5",
     "135"
    ],
    "minus →",
    [
     "Total of 4",
     "100"
    ],
    "= →",
    [
     "Excluded",
     "35",
     "g"
    ]
   ],
   "steps": [
    "Sum of 5 numbers = 5 x 27 = <b>135</b>.",
    "Sum of the remaining 4 = 4 x 25 = <b>100</b>.",
    "Excluded number = 135 - 100 = <b>35</b>."
   ]
  },
  {
   "label": "1.5.4",
   "q": "Two numbers are in the ratio 3: 5. If 9 is subtracted from each, the ratio becomes 12 : 23. Find the smaller number.",
   "opts": [
    "45",
    "27",
    "36",
    "33"
   ],
   "a": 3,
   "key": "Write the numbers as 3x and 5x, subtract 9, and match the new ratio.",
   "steps": [
    "(3x - 9) / (5x - 9) = 12/23.",
    "Cross-multiply: 23(3x - 9) = 12(5x - 9), so 69x - 207 = 60x - 108.",
    "9x = 99, so x = 11. Smaller number = 3 x 11 = <b>33</b>."
   ],
   "tip": "Check: 33 - 9 = 24 and 55 - 9 = 46. 24: 46 = 12: 23."
  },
  {
   "label": "1.5.5",
   "q": "Find the mean proportional between 9 and 25.",
   "opts": [
    "16",
    "15",
    "20",
    "12.5"
   ],
   "a": 1,
   "key": "Mean proportional = square root of (a x b).",
   "steps": [
    "9 x 25 = 225.",
    "Square root of 225 = <b>15</b>."
   ],
   "tip": "Check: 9: 15 = 15: 25 (both are 3: 5)."
  },
  {
   "label": "1.5.6",
   "q": "The average age of a class of 30 students is 15 years. If the teacher's age is included, the average increases by 1 year. What is the teacher's age?",
   "opts": [
    "46 years",
    "45 years",
    "40 years",
    "50 years"
   ],
   "a": 0,
   "key": "Convert both averages to totals. The difference is the teacher's age.",
   "flow": [
    [
     "30 students",
     "450"
    ],
    "add teacher →",
    [
     "31 people",
     "496"
    ],
    "minus →",
    [
     "Teacher",
     "46",
     "g"
    ]
   ],
   "steps": [
    "30 students: 30 x 15 = <b>450</b> years.",
    "31 people with average 16: 31 x 16 = <b>496</b> years.",
    "Teacher = 496 - 450 = <b>46 years</b>."
   ]
  },
  {
   "label": "1.5.7",
   "q": "If 4x = 5y = 6z, find the ratio x: y: z.",
   "opts": [
    "15: 12: 10",
    "4: 5: 6",
    "6: 5: 4",
    "10: 12: 15"
   ],
   "a": 0,
   "key": "Call the common value k. The bigger multiplier means a SMALLER number.",
   "steps": [
    "4x = 5y = 6z = k, so x = k/4, y = k/5, z = k/6.",
    "x: y: z = 1/4: 1/5: 1/6.",
    "Multiply by the LCM 60: 15: 12: 10."
   ],
   "tip": "x is the biggest because it is multiplied by the smallest number (4)."
  },
  {
   "label": "1.5.8",
   "q": "The ratio of two quantities is 4: 7. If the antecedent is 28, find the consequent.",
   "opts": [
    "35",
    "42",
    "48",
    "49"
   ],
   "a": 3,
   "key": "In A: B, A is the antecedent (first) and B is the consequent (second).",
   "steps": [
    "28 / consequent = 4 / 7.",
    "Consequent = (28 x 7)/4 = 7 x 7 = <b>49</b>."
   ],
   "tip": "28 is 4 x 7, so the second term is 7 x 7."
  },
  {
   "label": "1.5.9",
   "q": "The average weight of 8 persons increases by 1.5 kg when a new person comes in place of one weighing 65 kg. Find weight of new person.",
   "opts": [
    "75 kg",
    "77 kg",
    "80 kg",
    "72 kg"
   ],
   "a": 1,
   "key": "The total weight goes up by 8 x 1.5.",
   "steps": [
    "Total increase = 8 x 1.5 = <b>12 kg</b>.",
    "New person = old person + increase = 65 + 12 = <b>77 kg</b>."
   ]
  },
  {
   "label": "1.5.10",
   "q": "Divide Rs.1,050 among A, B, and C in the ratio 2: 3: 5. Find B's share.",
   "opts": [
    "Rs.525",
    "Rs.210",
    "Rs.315",
    "Rs.300"
   ],
   "a": 2,
   "key": "Find the value of one part, then multiply.",
   "simg": [
    {
     "src": "m1-5-10-fig.png"
    }
   ],
   "tpre": [
    {
     "head": [
      "2",
      "3",
      "5"
     ],
     "rows": []
    }
   ],
   "steps": [
    "Sum of parts = 2 + 3 + 5 = <b>10</b>.",
    "One part = 1,050 / 10 = Rs.105.",
    "B's share = 3 x 105 = <b>Rs.315</b>."
   ]
  }
 ]
};
