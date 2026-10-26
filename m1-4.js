/* MODULE 1 – Concept 1.4 */
window.PAPERS = window.PAPERS || {};
window.PAPERS["m1-4"] = {
 "id": "m1-4",
 "title": "1.4 Simple and Compound Interest",
 "subtitle": "Module 1: Quantitative Aptitude · 10 questions",
 "sections": [
  {
   "name": "1.4 Simple and Compound Interest",
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
    "Simple interest",
    "SI = P x R x T / 100"
   ],
   [
    "Amount under SI",
    "A = P + SI"
   ],
   [
    "Compound amount",
    "A = P (1 + r/100) to the power n"
   ],
   [
    "Compound interest",
    "CI = A - P"
   ],
   [
    "CI - SI (2 years)",
    "P x (R/100) x (R/100)"
   ],
   [
    "Doubling at SI",
    "Time = 100 / R years"
   ]
  ]
 },
 "questions": [
  {
   "label": "1.4.1",
   "q": "Find the simple interest on Rs.8,000 at 5% per annum for 3 years.",
   "opts": [
    "Rs.1,200",
    "Rs.1,000",
    "Rs.1,500",
    "Rs.800"
   ],
   "a": 0,
   "key": "Use SI = P x R x T / 100.",
   "steps": [
    "P = 8,000, R = 5, T = 3.",
    "SI = (8,000 x 5 x 3) / 100 = 80 x 15 = <b>Rs.1,200</b>."
   ],
   "tip": "Interest for 1 year = 5% of 8,000 = 400. For 3 years = 1,200."
  },
  {
   "label": "1.4.2",
   "q": "At what rate of simple interest per annum will a sum of money double itself in 8 years?",
   "opts": [
    "10%",
    "12.5%",
    "15%",
    "8%"
   ],
   "a": 1,
   "key": "If money doubles, the interest equals the original sum (SI = P).",
   "steps": [
    "Amount = 2P, so SI = 2P - P = P.",
    "P = (P x R x 8)/100. Cancel P: 1 = 8R/100.",
    "R = 100/8 = <b>12.5%</b>."
   ],
   "tip": "Doubling in n years at SI: rate = 100 / n."
  },
  {
   "label": "1.4.3",
   "q": "What will be the compound interest on Rs.10,000 for 2 years at 10% per annum compounded annually?",
   "opts": [
    "Rs.2,200",
    "Rs.2,000",
    "Rs.2,100",
    "Rs.1,900"
   ],
   "a": 2,
   "key": "Find the amount first. Then CI = Amount - Principal.",
   "tpre": [
    {
     "head": [
      "Year",
      "Start",
      "Interest (10%)",
      "End"
     ],
     "rows": [
      [
       "1",
       "10,000",
       "1,000",
       "11,000"
      ],
      [
       "2",
       "11,000",
       "1,100",
       "12,100"
      ],
      [
       "CI",
       "",
       "2,100",
       ""
      ]
     ]
    }
   ],
   "steps": [
    "A = 10,000 x (1.10) x (1.10) = 10,000 x 1.21 = <b>Rs.12,100</b>.",
    "CI = 12,100 - 10,000 = <b>Rs.2,100</b>."
   ],
   "watch": "Do not give 2,000. In the 2nd year interest is on 11,000, not on 10,000."
  },
  {
   "label": "1.4.4",
   "q": "The difference between Simple Interest and Compound Interest (compounded annually) on Rs.15,000 for 2 years at 10% per annum is:",
   "opts": [
    "Rs.120",
    "Rs.150",
    "Rs.180",
    "Rs.200"
   ],
   "a": 1,
   "key": "For 2 years: CI - SI = P x (R/100)<sup>2</sup>.",
   "steps": [
    "15,000 x (10/100) x (10/100) = 15,000 x 1/100 = <b>Rs.150</b>."
   ],
   "tip": "The difference is the interest on the first year's interest."
  },
  {
   "label": "1.4.5",
   "q": "A sum of money invested at SI amounts to Rs.800 in 3 years and Rs.900 in 4 years. Find the principal sum.",
   "opts": [
    "Rs.650",
    "Rs.600",
    "Rs.550",
    "Rs.500"
   ],
   "a": 3,
   "key": "The extra year adds exactly one year of interest.",
   "flow": [
    [
     "3 years",
     "Rs.800"
    ],
    "→",
    [
     "+ 1 year",
     "+ Rs.100"
    ],
    "→",
    [
     "4 years",
     "Rs.900"
    ]
   ],
   "steps": [
    "SI for 1 year = 900 - 800 = <b>Rs.100</b>.",
    "SI for 3 years = 3 x 100 = Rs.300.",
    "Principal = amount after 3 years - SI = 800 - 300 = <b>Rs.500</b>."
   ]
  },
  {
   "label": "1.4.6",
   "q": "If SI on a certain sum for 2 years at 8% per annum is Rs.320, what is the principal amount?",
   "opts": [
    "Rs.2,500",
    "Rs.2,000",
    "Rs.1,800",
    "Rs.3,000"
   ],
   "a": 1,
   "key": "Use SI = PRT/100 and solve for P.",
   "steps": [
    "320 = (P x 8 x 2)/100 = 16P/100.",
    "P = (320 x 100)/16 = 20 x 100 = <b>Rs.2,000</b>."
   ],
   "tip": "Check: 8% of 2,000 = 160 per year, for 2 years = 320."
  },
  {
   "label": "1.4.7",
   "q": "Find the amount received when Rs.5,000 is compounded annually for 2 years at 6% p.a.",
   "opts": [
    "Rs.5,618",
    "Rs.5,600",
    "Rs.5,500",
    "Rs.5,650"
   ],
   "a": 0,
   "key": "Amount = P x (1.06) x (1.06).",
   "tpre": [
    {
     "head": [
      "Year",
      "Start",
      "Interest (6%)",
      "End"
     ],
     "rows": [
      [
       "1",
       "5,000",
       "300",
       "5,300"
      ],
      [
       "2",
       "5,300",
       "318",
       "5,618"
      ]
     ]
    }
   ],
   "steps": [
    "(1.06)<sup>2</sup> = 1.1236.",
    "A = 5,000 x 1.1236 = <b>Rs.5,618</b>."
   ]
  },
  {
   "label": "1.4.8",
   "q": "In how many years will Rs.2,000 amount to Rs.2,420 at 10% p.a. compound interest?",
   "opts": [
    "2 years",
    "3 years",
    "1.5 years",
    "4 years"
   ],
   "a": 0,
   "key": "Find how many times the money has multiplied, then match the power of 1.1.",
   "steps": [
    "Amount / Principal = 2,420 / 2,000 = 1.21.",
    "1.1 x 1.1 = 1.21, so (1.1)<sup>n</sup> = (1.1)<sup>2</sup>.",
    "n = <b>2 years</b>."
   ],
   "tip": "Learn: 1.1 x 1.1 = 1.21."
  },
  {
   "label": "1.4.9",
   "q": "A sum of money doubles itself at Compound Interest in 5 years. In how many years will it become 4 times itself?",
   "opts": [
    "20 years",
    "15 years",
    "10 years",
    "12 years"
   ],
   "a": 2,
   "key": "At compound interest the money multiplies by the same factor every 5 years.",
   "flow": [
    [
     "Start",
     "P"
    ],
    "x 2 →",
    [
     "After 5 years",
     "2P"
    ],
    "x 2 →",
    [
     "After 10 years",
     "4P",
     "g"
    ]
   ],
   "steps": [
    "In 5 years: P becomes 2P.",
    "In the next 5 years: 2P becomes 2 x 2P = 4P.",
    "Total = 5 + 5 = <b>10 years</b>."
   ],
   "watch": "At SI it would be 15 years. At CI each doubling takes the same time."
  },
  {
   "label": "1.4.10",
   "q": "The simple interest on a sum of money at 6% p.a. for 5 years is Rs.1,500. Find the sum.",
   "opts": [
    "Rs.5,500",
    "Rs.6,000",
    "Rs.4,500",
    "Rs.5,000"
   ],
   "a": 3,
   "key": "Use SI = PRT/100 and solve for P.",
   "steps": [
    "1,500 = (P x 6 x 5)/100 = 30P/100.",
    "P = (1,500 x 100)/30 = 50 x 100 = <b>Rs.5,000</b>."
   ],
   "tip": "6% for 5 years = 30% of P. So 30% of P = 1,500."
  }
 ]
};
