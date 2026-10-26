/* MODULE 1 – Concept 1.7 */
window.PAPERS = window.PAPERS || {};
window.PAPERS["m1-7"] = {
 "id": "m1-7",
 "title": "1.7 Permutations and Combinations",
 "subtitle": "Module 1: Quantitative Aptitude · 10 questions",
 "sections": [
  {
   "name": "1.7 Permutations and Combinations",
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
    "Factorial",
    "n! = n x (n-1) x... x 1"
   ],
   [
    "Permutation (order matters)",
    "nPr = n! / (n - r)!"
   ],
   [
    "Combination (order does not matter)",
    "nCr = n! / [r! (n - r)!]"
   ],
   [
    "Circular arrangement",
    "(n - 1)!"
   ],
   [
    "'Together'",
    "Treat the group as ONE item, then arrange inside the group."
   ]
  ]
 },
 "questions": [
  {
   "label": "1.7.1",
   "q": "Find the value of 8P3.",
   "opts": [
    "138",
    "56",
    "336",
    "672"
   ],
   "a": 2,
   "key": "nPr: multiply r numbers, starting from n and going down.",
   "steps": [
    "8P3 = 8! / (8 - 3)! = 8 x 7 x 6.",
    "= <b>336</b>."
   ],
   "tip": "3 numbers, starting at 8: 8 x 7 x 6."
  },
  {
   "label": "1.7.2",
   "q": "How many 3-digit numbers can be formed using digits 1, 2, 3, 4, 5 without repetition?",
   "opts": [
    "60",
    "120",
    "24",
    "80"
   ],
   "a": 0,
   "key": "Choose a digit for each place. One digit is used up every time.",
   "flow": [
    [
     "Hundreds",
     "5 ways"
    ],
    "x →",
    [
     "Tens",
     "4 ways"
    ],
    "x →",
    [
     "Units",
     "3 ways"
    ],
    "= →",
    [
     "Total",
     "5x4x3 = 60",
     "g"
    ]
   ],
   "steps": [
    "5 digits, 3 places: 5P3 = 5! / 2! = (5 x 4 x 3 x 2 x 1) / 2 = <b>60</b>.",
    "Or: 5 choices x 4 choices x 3 choices = 60."
   ]
  },
  {
   "label": "1.7.3",
   "q": "In how many different ways can the letters of the word 'KERALA' be arranged such that the vowels always come together?",
   "opts": [
    "120",
    "72",
    "360",
    "180"
   ],
   "a": 1,
   "key": "Tie the vowels into one block. Arrange the block with the consonants, then arrange inside the block.",
   "flow": [
    [
     "Consonants",
     "K, R, L"
    ],
    "+ →",
    [
     "Vowel block",
     "EAA as 1 item"
    ],
    "→",
    [
     "Outside",
     "4! = 24 ways",
     "g"
    ],
    "x →",
    [
     "Inside",
     "3!/2! = 3 ways",
     "g"
    ]
   ],
   "steps": [
    "KERALA has 6 letters: consonants K, R, L and vowels E, A, A.",
    "Block (E, A, A) + 3 consonants = 4 items: 4! = <b>24</b> ways.",
    "Inside the block, E, A, A with two A's: 3! / 2! = <b>3</b> ways.",
    "Total = 24 x 3 = <b>72</b>."
   ],
   "watch": "Repeated letters (the two A's) mean you must divide by 2! inside the block."
  },
  {
   "label": "1.7.4",
   "q": "In how many ways can the letters of the word 'LEADING' be arranged so that vowels always come together?",
   "opts": [
    "720",
    "360",
    "1440",
    "480"
   ],
   "a": 0,
   "key": "LEADING has 7 different letters. Vowels: E, A, I. Consonants: L, D, N, G.",
   "flow": [
    [
     "Consonants",
     "L, D, N, G"
    ],
    "+ →",
    [
     "Vowel block",
     "1 item"
    ],
    "→",
    [
     "Outside",
     "5! = 120",
     "g"
    ],
    "x →",
    [
     "Inside",
     "3! = 6",
     "g"
    ]
   ],
   "steps": [
    "Block (E, A, I) + 4 consonants = 5 items: 5! = <b>120</b> ways.",
    "Inside the block: 3! = <b>6</b> ways.",
    "Total = 120 x 6 = <b>720</b>."
   ]
  },
  {
   "label": "1.7.5",
   "q": "Find the value of 10C3.",
   "opts": [
    "240",
    "120",
    "720",
    "360"
   ],
   "a": 1,
   "key": "nCr: write r numbers on top and r! on the bottom.",
   "steps": [
    "10C3 = (10 x 9 x 8) / (3 x 2 x 1) = 720 / 6 = <b>120</b>."
   ]
  },
  {
   "label": "1.7.6",
   "q": "In how many different ways a cricket team of 11 can be selected out of 15 members' squad?",
   "opts": [
    "2,400",
    "1,200",
    "720",
    "1,365"
   ],
   "a": 3,
   "key": "Choosing 11 to play = choosing 4 to leave out. Use the smaller number.",
   "steps": [
    "15C11 = 15C4 = (15 x 14 x 13 x 12) / (4 x 3 x 2 x 1).",
    "= 32,760 / 24 = <b>1,365</b>."
   ],
   "tip": "nCr = nC(n - r). Always use the smaller one."
  },
  {
   "label": "1.7.7",
   "q": "In how many ways can a committee of 5 people be chosen from 7 men and 4 women such that it contains exactly 3 men?",
   "opts": [
    "140",
    "210",
    "350",
    "105"
   ],
   "a": 1,
   "key": "Exactly 3 men means the other 2 are women. Choose men AND women, then multiply.",
   "steps": [
    "3 men from 7: 7C3 = (7 x 6 x 5)/(3 x 2 x 1) = <b>35</b>.",
    "2 women from 4: 4C2 = (4 x 3)/(2 x 1) = <b>6</b>.",
    "Total = 35 x 6 = <b>210</b>."
   ],
   "tip": "\"AND\" means multiply."
  },
  {
   "label": "1.7.8",
   "q": "In how many ways can 5 people sit around a circular table?",
   "opts": [
    "24",
    "120",
    "60",
    "48"
   ],
   "a": 0,
   "key": "In a circle, rotating everybody gives the same arrangement. So fix one person.",
   "steps": [
    "Circular arrangements = (n - 1)!.",
    "(5 - 1)! = 4! = 4 x 3 x 2 x 1 = <b>24</b>."
   ],
   "watch": "Not 5! = 120. That counts rotations as different."
  },
  {
   "label": "1.7.9",
   "q": "How many words can be formed by using all letters of the word 'EXTRA'?",
   "opts": [
    "640",
    "60",
    "120",
    "240"
   ],
   "a": 2,
   "key": "All 5 letters are different, so arrange all of them.",
   "steps": [
    "5! = 5 x 4 x 3 x 2 x 1 = <b>120</b>."
   ]
  },
  {
   "label": "1.7.10",
   "q": "In how many ways can 2 cards be drawn from a pack of 52 cards?",
   "opts": [
    "2652",
    "1326",
    "1300",
    "2704"
   ],
   "a": 1,
   "key": "Drawing cards is a selection (order does not matter).",
   "steps": [
    "52C2 = (52 x 51) / (2 x 1) = 26 x 51 = <b>1,326</b>."
   ],
   "watch": "2,652 = 52 x 51 counts the order. Divide by 2."
  }
 ]
};
