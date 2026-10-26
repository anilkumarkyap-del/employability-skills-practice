/* MODULE 1 – Concept 1.8 */
window.PAPERS = window.PAPERS || {};
window.PAPERS["m1-8"] = {
 "id": "m1-8",
 "title": "1.8 Probability",
 "subtitle": "Module 1: Quantitative Aptitude · 10 questions",
 "sections": [
  {
   "name": "1.8 Probability",
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
    "Probability",
    "P(E) = favourable outcomes / total outcomes"
   ],
   [
    "Range",
    "0 to 1 (0 = impossible, 1 = certain)"
   ],
   [
    "Complement",
    "P(not E) = 1 - P(E)"
   ],
   [
    "Either A or B",
    "P(A or B) = P(A) + P(B) - P(both)"
   ]
  ]
 },
 "questions": [
  {
   "label": "1.8.1",
   "q": "Two coins are tossed simultaneously. What is the probability of getting at least one head?",
   "opts": [
    "1/4",
    "1/2",
    "3/4",
    "2/3"
   ],
   "a": 2,
   "key": "List all outcomes. \"At least one\" means one or more.",
   "tpre": [
    {
     "head": [
      "Outcome",
      "HH",
      "HT",
      "TH",
      "TT"
     ],
     "rows": [
      [
       "Heads",
       "2",
       "1",
       "1",
       "0"
      ],
      [
       "At least 1 head?",
       "Yes",
       "Yes",
       "Yes",
       "No"
      ]
     ]
    }
   ],
   "steps": [
    "Outcomes: HH, HT, TH, TT = <b>4</b>.",
    "At least one head: HH, HT, TH = <b>3</b>.",
    "Probability = <b>3/4</b>."
   ],
   "tip": "Check: 1 - P(TT) = 1 - 1/4 = 3/4."
  },
  {
   "label": "1.8.2",
   "q": "In a single throw of a die, what is the probability of getting an even prime number?",
   "opts": [
    "1/3",
    "1/6",
    "1/2",
    "2/3"
   ],
   "a": 1,
   "key": "Find numbers that are BOTH even and prime.",
   "steps": [
    "Sample space: 1, 2, 3, 4, 5, 6 = 6 outcomes.",
    "The only even prime is <b>2</b>.",
    "Probability = <b>1/6</b>."
   ],
   "tip": "2 is the only even prime number."
  },
  {
   "label": "1.8.3",
   "q": "A card is drawn from a well-shuffled pack of 52 cards. Find the probability that it is a king or a queen.",
   "opts": [
    "1/26",
    "1/13",
    "4/13",
    "2/13"
   ],
   "a": 3,
   "key": "Count the kings and queens together.",
   "steps": [
    "Kings = 4, queens = 4. Favourable = 4 + 4 = <b>8</b>.",
    "Probability = 8/52 = <b>2/13</b>."
   ],
   "tip": "No card is both a king and a queen, so just add."
  },
  {
   "label": "1.8.4",
   "q": "Three unbiased coins are tossed. What is the probability of getting exactly 2 heads?",
   "opts": [
    "5/8",
    "1/2",
    "1/4",
    "3/8"
   ],
   "a": 3,
   "key": "Three coins give 2 x 2 x 2 = 8 outcomes.",
   "tpre": [
    {
     "head": [
      "HHH",
      "HHT",
      "HTH",
      "THH",
      "HTT",
      "THT",
      "TTH",
      "TTT"
     ],
     "rows": [
      [
       "3 H",
       "2 H",
       "2 H",
       "2 H",
       "1 H",
       "1 H",
       "1 H",
       "0 H"
      ]
     ]
    }
   ],
   "steps": [
    "Outcomes with exactly 2 heads: HHT, HTH, THH = <b>3</b>.",
    "Probability = <b>3/8</b>."
   ]
  },
  {
   "label": "1.8.5",
   "q": "Two dice are thrown together. What is the probability that the sum of the numbers obtained is 8?",
   "opts": [
    "5/36",
    "1/6",
    "1/9",
    "7/36"
   ],
   "a": 0,
   "key": "Two dice give 6 x 6 = 36 outcomes. Count the pairs that add to 8.",
   "tpre": [
    {
     "head": [
      "First die",
      "2",
      "3",
      "4",
      "5",
      "6"
     ],
     "rows": [
      [
       "Second die",
       "6",
       "5",
       "4",
       "3",
       "2"
      ],
      [
       "Sum",
       "8",
       "8",
       "8",
       "8",
       "8"
      ]
     ]
    }
   ],
   "steps": [
    "Pairs: (2,6), (3,5), (4,4), (5,3), (6,2) = <b>5</b>.",
    "Probability = <b>5/36</b>."
   ],
   "watch": "(4,4) is ONE outcome, but (2,6) and (6,2) are two different outcomes."
  },
  {
   "label": "1.8.6",
   "q": "What is the probability of drawing a red card from a standard deck of 52 playing cards?",
   "opts": [
    "1/4",
    "1/2",
    "1/13",
    "3/4"
   ],
   "a": 1,
   "key": "Hearts and Diamonds are red.",
   "steps": [
    "Red cards = 13 hearts + 13 diamonds = <b>26</b>.",
    "Probability = 26/52 = <b>1/2</b>."
   ]
  },
  {
   "label": "1.8.7",
   "q": "A bag contains 4 white and 6 black balls. One ball is drawn at random. What is the probability that it is white?",
   "opts": [
    "2/5",
    "3/5",
    "1/2",
    "4/5"
   ],
   "a": 0,
   "key": "White balls divided by all balls.",
   "steps": [
    "Total balls = 4 + 6 = <b>10</b>.",
    "Probability = 4/10 = <b>2/5</b>."
   ]
  },
  {
   "label": "1.8.8",
   "q": "What is the probability that a non-leap year selected at random will contain 53 Sundays?",
   "opts": [
    "3/7",
    "2/7",
    "1/7",
    "52/365"
   ],
   "a": 2,
   "key": "A non-leap year has 52 weeks plus 1 extra day.",
   "steps": [
    "365 days = 52 weeks + 1 day. The 52 weeks already give 52 Sundays.",
    "The 1 extra day can be any of the 7 weekdays. It must be Sunday for a 53rd Sunday.",
    "Probability = <b>1/7</b>."
   ],
   "tip": "A leap year has 2 extra days, so the answer there is 2/7."
  },
  {
   "label": "1.8.9",
   "q": "A single die is rolled. Find the probability of getting a number greater than 4.",
   "opts": [
    "2/3",
    "1/2",
    "1/6",
    "1/3"
   ],
   "a": 3,
   "key": "\"Greater than 4\" does not include 4.",
   "steps": [
    "Numbers greater than 4: 5 and 6 = <b>2</b> outcomes out of 6.",
    "Probability = 2/6 = <b>1/3</b>."
   ]
  },
  {
   "label": "1.8.10",
   "q": "A bag contains 5 red balls, 4 green balls, and 3 blue balls. If two balls are drawn at random, what is the probability that both are red?",
   "opts": [
    "5/33",
    "10/33",
    "15/66",
    "5/11"
   ],
   "a": 0,
   "key": "Use combinations: ways to pick 2 red / ways to pick any 2.",
   "flow": [
    [
     "Both red",
     "5C2 = 10"
    ],
    "out of →",
    [
     "All pairs",
     "12C2 = 66"
    ],
    "= →",
    [
     "Probability",
     "10/66 = 5/33",
     "g"
    ]
   ],
   "steps": [
    "Total balls = 12. Ways to draw 2 = 12C2 = (12 x 11)/2 = <b>66</b>.",
    "Ways to draw 2 red from 5 = 5C2 = (5 x 4)/2 = <b>10</b>.",
    "Probability = 10/66 = <b>5/33</b>."
   ]
  }
 ]
};
