/* MODULE 1 – Concept 1.2 */
window.PAPERS = window.PAPERS || {};
window.PAPERS["m1-2"] = {
 "id": "m1-2",
 "title": "1.2 Partnership",
 "subtitle": "Module 1: Quantitative Aptitude · 10 questions",
 "sections": [
  {
   "name": "1.2 Partnership",
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
    "Same time for everyone",
    "Profit ratio = ratio of the money invested (C1: C2)"
   ],
   [
    "Different times",
    "Profit ratio = (money x months) for each partner"
   ],
   [
    "One partner's share",
    "Total profit x (his part / sum of all parts)"
   ]
  ]
 },
 "questions": [
  {
   "label": "1.2.1",
   "q": "A, B, and C start a business investing Rs.20,000, Rs.30,000, and Rs.40,000 respectively. After 6 months, A invests an additional Rs.10,000. If the total annual profit is Rs.76,000, what is A's share?",
   "opts": [
    "Rs.20,000",
    "Rs.22,500",
    "Rs.24,000",
    "Rs.18,000"
   ],
   "a": 0,
   "key": "Everyone's money is counted for the number of months it stayed in the business.",
   "tpre": [
    {
     "head": [
      "Partner",
      "Money x months",
      "Total"
     ],
     "rows": [
      [
       "A",
       "20,000 x 6 + 30,000 x 6",
       "3,00,000"
      ],
      [
       "B",
       "30,000 x 12",
       "3,60,000"
      ],
      [
       "C",
       "40,000 x 12",
       "4,80,000"
      ],
      [
       "Ratio",
       "",
       "5: 6: 8"
      ]
     ]
    }
   ],
   "steps": [
    "A: Rs.20,000 for 6 months + Rs.30,000 (20,000 + 10,000) for 6 months = 1,20,000 + 1,80,000 = <b>3,00,000</b>.",
    "B: 30,000 x 12 = <b>3,60,000</b>. C: 40,000 x 12 = <b>4,80,000</b>.",
    "Ratio A: B: C = 300: 360: 480 = <b>5 : 6 : 8</b> (sum 19).",
    "A's share = (5/19) x 76,000 = <b>Rs.20,000</b>."
   ],
   "tip": "Divide all three by 60,000 to get 5: 6: 8 quickly."
  },
  {
   "label": "1.2.2",
   "q": "A and B start a business with investments of Rs.35,000 and Rs.45,000 respectively. What is the ratio of their profit sharing at the end of a year?",
   "opts": [
    "9: 7",
    "5: 7",
    "7: 9",
    "3: 5"
   ],
   "a": 2,
   "key": "Same time for both, so the profit ratio is the same as the money ratio.",
   "steps": [
    "A: B = 35,000: 45,000.",
    "Divide both by 5,000: <b>7 : 9</b>."
   ],
   "watch": "A is first, so A's part is first: 7: 9, not 9: 7."
  },
  {
   "label": "1.2.3",
   "q": "A, B, and C enter into a partnership with capitals in the ratio 2: 3: 5. If the total profit at the end of the year is Rs.40,000, find B's share.",
   "opts": [
    "Rs.15,000",
    "Rs.8,000",
    "Rs.20,000",
    "Rs.12,000"
   ],
   "a": 3,
   "key": "The ratio is already the profit ratio. Share = total x part / sum of parts.",
   "simg": [
    {
     "src": "m1-2-3-fig.png"
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
    "Sum of ratio parts = 2 + 3 + 5 = <b>10</b>.",
    "One part = 40,000 / 10 = Rs.4,000.",
    "B's share = 3 parts = 3 x 4,000 = <b>Rs.12,000</b>."
   ]
  },
  {
   "label": "1.2.4",
   "q": "A starts a business with Rs.50,000. After 4 months, B joins him with Rs.60,000. At the end of the year, in what ratio will they divide the profit?",
   "opts": [
    "5: 6",
    "1: 1",
    "5: 4",
    "10: 9"
   ],
   "a": 2,
   "key": "B joined late, so B's money works for fewer months.",
   "tpre": [
    {
     "head": [
      "Partner",
      "Money",
      "Months",
      "Money x months"
     ],
     "rows": [
      [
       "A",
       "50,000",
       "12",
       "6,00,000"
      ],
      [
       "B",
       "60,000",
       "8",
       "4,80,000"
      ],
      [
       "Ratio",
       "",
       "",
       "5: 4"
      ]
     ]
    }
   ],
   "steps": [
    "A: 50,000 for 12 months = <b>6,00,000</b>.",
    "B joins after 4 months, so he is in for 12 - 4 = 8 months: 60,000 x 8 = <b>4,80,000</b>.",
    "Ratio = 600: 480 = 60: 48 = <b>5 : 4</b>."
   ]
  },
  {
   "label": "1.2.5",
   "q": "A and B invest in a business in the ratio 4: 5. If 10% of the total profit goes to charity and A's share is Rs.3,600, find the total profit.",
   "opts": [
    "Rs.10,000",
    "Rs.8,100",
    "Rs.9,000",
    "Rs.9,500"
   ],
   "a": 2,
   "key": "First take out the charity part. A's share comes from the remaining 90%.",
   "flow": [
    [
     "Total profit",
     "P"
    ],
    "- 10% →",
    [
     "After charity",
     "0.9 P"
    ],
    "x 4/9 →",
    [
     "A gets 4/9",
     "0.4 P = 3,600",
     "g"
    ]
   ],
   "steps": [
    "Let the total profit be P. After charity, 90% is left = 0.9P.",
    "A's part of that = 4/9, so A's share = (4/9) x 0.9P = <b>0.4P</b>.",
    "0.4P = 3,600, so P = 3,600 / 0.4 = <b>Rs.9,000</b>."
   ],
   "tip": "Check: 10% of 9,000 = 900 to charity. 8,100 left; A gets 4/9 of 8,100 = 3,600."
  },
  {
   "label": "1.2.6",
   "q": "A, B, and C invest capital in the ratio 3: 4: 5 for equal time. If C's profit share is Rs.2,500, what is the total profit?",
   "opts": [
    "Rs.5,000",
    "Rs.6,000",
    "Rs.7,500",
    "Rs.4,500"
   ],
   "a": 1,
   "key": "C's share is 5 parts out of 12.",
   "simg": [
    {
     "src": "m1-2-6-fig.png"
    }
   ],
   "tpre": [
    {
     "head": [
      "3",
      "4",
      "5"
     ],
     "rows": []
    }
   ],
   "steps": [
    "Sum of parts = 3 + 4 + 5 = <b>12</b>. C has 5 of them.",
    "5 parts = 2,500, so 1 part = <b>500</b>.",
    "Total profit = 12 x 500 = <b>Rs.6,000</b>."
   ]
  },
  {
   "label": "1.2.7",
   "q": "A invests Rs.10,000 for 12 months and B invests Rs.15,000 for 8 months. What is the ratio of their profits?",
   "opts": [
    "1: 1",
    "2: 3",
    "3: 2",
    "4: 5"
   ],
   "a": 0,
   "key": "Multiply money by months for each person.",
   "steps": [
    "A: 10,000 x 12 = <b>1,20,000</b>.",
    "B: 15,000 x 8 = <b>1,20,000</b>.",
    "They are equal, so the ratio is <b>1 : 1</b>."
   ]
  },
  {
   "label": "1.2.8",
   "q": "A, B, and C started a business in Mumbai investing Rs.10,000, Rs.25,000, and Rs.60,000 respectively. After 6 months, A and B invested an additional capital of Rs.20,000 and Rs.30,000 respectively. At the end of the year, the total profit earned was Rs.1,20,000. What is A's share in the profit?",
   "opts": [
    "Rs.20,000",
    "Rs.22,500",
    "Rs.24,000",
    "Rs.18,000"
   ],
   "a": 0,
   "key": "Count each amount for the months it stayed in. The extra money works for the last 6 months only.",
   "tpre": [
    {
     "head": [
      "Partner",
      "First amount",
      "Extra amount",
      "Total"
     ],
     "rows": [
      [
       "A",
       "10,000 x 12",
       "20,000 x 6",
       "2,40,000"
      ],
      [
       "B",
       "25,000 x 12",
       "30,000 x 6",
       "4,80,000"
      ],
      [
       "C",
       "60,000 x 12",
       "-",
       "7,20,000"
      ]
     ]
    }
   ],
   "steps": [
    "A: 10,000 x 12 + 20,000 x 6 = 1,20,000 + 1,20,000 = <b>2,40,000</b>.",
    "B: 25,000 x 12 + 30,000 x 6 = 3,00,000 + 1,80,000 = <b>4,80,000</b>.",
    "C: 60,000 x 12 = <b>7,20,000</b>.",
    "Ratio = 24: 48: 72 = 1: 2: 3 (sum 6). A's share = (1/6) x 1,20,000 = <b>Rs.20,000</b>."
   ]
  },
  {
   "label": "1.2.9",
   "q": "Three partners A, B, C shared profit of Rs.12,000 in ratio 1: 2: 3. What is the difference between C's share and A's share?",
   "opts": [
    "Rs.3,000",
    "Rs.2,000",
    "Rs.6,000",
    "Rs.4,000"
   ],
   "a": 3,
   "key": "Find the value of one part first.",
   "steps": [
    "Sum of parts = 1 + 2 + 3 = 6. One part = 12,000 / 6 = <b>Rs.2,000</b>.",
    "A = 1 part = 2,000. C = 3 parts = 6,000.",
    "Difference = 6,000 - 2,000 = <b>Rs.4,000</b>."
   ],
   "tip": "Difference in parts = 3 - 1 = 2 parts = 2 x 2,000."
  },
  {
   "label": "1.2.10",
   "q": "A started a business with Rs.25,000. B joined after 3 months with Rs.30,000. If total profit is Rs.19,000 at year end, find B's share.",
   "opts": [
    "Rs.10,000",
    "Rs.9,000",
    "Rs.8,500",
    "Rs.9,500"
   ],
   "a": 1,
   "key": "B is in the business for 12 - 3 = 9 months.",
   "tpre": [
    {
     "head": [
      "Partner",
      "Money",
      "Months",
      "Money x months"
     ],
     "rows": [
      [
       "A",
       "25,000",
       "12",
       "3,00,000"
      ],
      [
       "B",
       "30,000",
       "9",
       "2,70,000"
      ],
      [
       "Ratio",
       "",
       "",
       "10: 9"
      ]
     ]
    }
   ],
   "steps": [
    "A: 25,000 x 12 = <b>3,00,000</b>. B: 30,000 x 9 = <b>2,70,000</b>.",
    "Ratio = 300: 270 = 30: 27 = <b>10 : 9</b> (sum 19).",
    "B's share = (9/19) x 19,000 = <b>Rs.9,000</b>."
   ]
  }
 ]
};
