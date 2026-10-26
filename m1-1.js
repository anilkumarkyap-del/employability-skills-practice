/* MODULE 1 – Concept 1.1 */
window.PAPERS = window.PAPERS || {};
window.PAPERS["m1-1"] = {
 "id": "m1-1",
 "title": "1.1 Percentages, Profit and Loss, Discount",
 "subtitle": "Module 1: Quantitative Aptitude · 15 questions",
 "sections": [
  {
   "name": "1.1 Percentages, Profit and Loss, Discount",
   "from": 1,
   "to": 15
  }
 ],
 "toolbox": {
  "head": [
   "Topic",
   "Formula"
  ],
  "rows": [
   [
    "Percentage",
    "(Value / Total) x 100"
   ],
   [
    "Profit and Loss",
    "Profit = SP - CP. Loss = CP - SP."
   ],
   [
    "Profit % and Loss %",
    "(Profit / CP) x 100 and (Loss / CP) x 100 - always on the COST price"
   ],
   [
    "SP from CP",
    "SP = CP x (100 + Profit%) / 100 or CP x (100 - Loss%) / 100"
   ],
   [
    "Discount",
    "Discount = MP - SP. Discount % = (Discount / MP) x 100 - on the MARKED price"
   ],
   [
    "Successive discounts d1, d2",
    "Single equivalent discount = d1 + d2 - (d1 x d2)/100"
   ],
   [
    "Price up r%",
    "Reduce consumption by r / (100 + r) x 100 %"
   ]
  ]
 },
 "questions": [
  {
   "label": "1.1.1",
   "q": "In an examination, a student must secure 40% marks to pass. Rahul secured 175 marks and failed by 25 marks. What was the total maximum marks of the examination?",
   "opts": [
    "400",
    "500",
    "600",
    "450"
   ],
   "a": 1,
   "key": "Pass marks = marks you got + marks you were short by. That pass mark is 40% of the full paper.",
   "simg": [
    {
     "src": "m1-1-1-fig.png"
    }
   ],
   "tpre": [
    {
     "head": [
      "175",
      "",
      "300"
     ],
     "rows": []
    }
   ],
   "steps": [
    "Passing marks = 175 + 25 = <b>200</b>.",
    "Let the maximum marks be M. 40% of M = 200, so (40/100) x M = 200.",
    "M = 200 x 100 / 40 = <b>500</b>."
   ],
   "tip": "\"Failed by x marks\" means: Pass mark = Obtained + x."
  },
  {
   "label": "1.1.2",
   "q": "A shopkeeper buys a laptop for Rs.45,000 and spends Rs.3,000 on transportation. If he sells it for Rs.52,800, what is his profit percentage?",
   "opts": [
    "8%",
    "10%",
    "12%",
    "15%"
   ],
   "a": 1,
   "key": "Extra expenses (transport) are part of the real cost. Add them to the buying price first.",
   "flow": [
    [
     "Buy",
     "Rs.45,000"
    ],
    "+ →",
    [
     "Transport",
     "Rs.3,000"
    ],
    "= →",
    [
     "Real cost",
     "Rs.48,000",
     "g"
    ],
    "sell →",
    [
     "Sold for",
     "Rs.52,800"
    ]
   ],
   "steps": [
    "Effective cost price = 45,000 + 3,000 = <b>Rs.48,000</b>.",
    "Profit = 52,800 - 48,000 = <b>Rs.4,800</b>.",
    "Profit % = (4,800 / 48,000) x 100 = <b>10%</b>."
   ],
   "tip": "Profit % is always on the cost price (with expenses added)."
  },
  {
   "label": "1.1.3",
   "q": "An electronics store marks a TV at Rs.80,000. It offers two successive discounts of 15% and 10%. Find the final selling price.",
   "opts": [
    "Rs.61,200",
    "Rs.60,000",
    "Rs.62,400",
    "Rs.58,000"
   ],
   "a": 0,
   "key": "Each discount is on the NEW price. Do not add the two discounts.",
   "flow": [
    [
     "Marked",
     "Rs.80,000"
    ],
    "x 0.85 →",
    [
     "After 15% off",
     "Rs.68,000"
    ],
    "x 0.90 →",
    [
     "After 10% off",
     "Rs.61,200",
     "g"
    ]
   ],
   "steps": [
    "After 15% off: 80,000 x 0.85 = <b>Rs.68,000</b>.",
    "After 10% off: 68,000 x 0.90 = <b>Rs.61,200</b>.",
    "Quick way: SP = 80,000 x 0.85 x 0.90 = Rs.61,200."
   ],
   "watch": "15% + 10% = 25% would give Rs.60,000. That is the trap option."
  },
  {
   "label": "1.1.4",
   "q": "If the price of sugar increases by 20%, by what percentage should a household reduce its consumption so that expenditure remains unchanged?",
   "opts": [
    "16.67%",
    "20%",
    "15%",
    "25%"
   ],
   "a": 0,
   "key": "Spending = price x quantity. Price goes up, so quantity must come down.",
   "flow": [
    [
     "Old price",
     "Rs.100 / kg"
    ],
    "+20% →",
    [
     "New price",
     "Rs.120 / kg"
    ],
    "spend Rs.100 →",
    [
     "Buys (same Rs.100)",
     "5/6 kg",
     "g"
    ]
   ],
   "steps": [
    "Formula: reduction % = [r / (100 + r)] x 100, with r = 20.",
    "= (20 / 120) x 100 = (1/6) x 100 = <b>16.67%</b>.",
    "Check with numbers: Rs.100 buys 1 kg. At Rs.120 per kg, Rs.100 buys only 5/6 kg: a fall of 1/6."
   ],
   "watch": "Do not answer 20%. The cut is on the NEW higher price, so it is smaller."
  },
  {
   "label": "1.1.5",
   "q": "A man buys an item for Rs.1,200 and sells it at a loss of 10%. What is the selling price of the item?",
   "opts": [
    "Rs.1,080",
    "Rs.1,020",
    "Rs.1,100",
    "Rs.1,050"
   ],
   "a": 0,
   "key": "Loss % is on the cost price. Find the loss in rupees, then subtract.",
   "flow": [
    [
     "Cost",
     "Rs.1,200"
    ],
    "→",
    [
     "Loss 10%",
     "- Rs.120"
    ],
    "→",
    [
     "Selling price",
     "Rs.1,080",
     "g"
    ]
   ],
   "steps": [
    "Loss = 10% of 1,200 = <b>Rs.120</b>.",
    "SP = CP - Loss = 1,200 - 120 = <b>Rs.1,080</b>."
   ]
  },
  {
   "label": "1.1.6",
   "q": "A single discount equivalent to two successive discounts of 20% and 10% is:",
   "opts": [
    "30%",
    "28%",
    "25%",
    "22%"
   ],
   "a": 1,
   "key": "Use the single equivalent discount formula.",
   "flow": [
    [
     "Price",
     "Rs.100"
    ],
    "- 20% →",
    [
     "After 20% off",
     "Rs.80"
    ],
    "- 10% →",
    [
     "After 10% off",
     "Rs.72",
     "g"
    ]
   ],
   "steps": [
    "Equivalent discount = d1 + d2 - (d1 x d2)/100.",
    "= 20 + 10 - (20 x 10)/100 = 30 - 2 = <b>28%</b>.",
    "Check with Rs.100: after 20% off = 80; after 10% off 80 = 72. Total off = 28."
   ],
   "watch": "The answer is not 30%. The second discount is on the smaller price."
  },
  {
   "label": "1.1.7",
   "q": "By selling an article for Rs.1,440, a trader gains 20%. What was the original cost price of the article?",
   "opts": [
    "Rs.1,180",
    "Rs.1,250",
    "Rs.1,200",
    "Rs.1,300"
   ],
   "a": 2,
   "key": "A 20% gain means SP = 120% of CP.",
   "steps": [
    "SP is 120% of CP: 1,440 = 120/100 x CP.",
    "CP = (1,440 x 100) / 120 = 12 x 100 = <b>Rs.1,200</b>.",
    "Check: 20% of 1,200 = 240, and 1,200 + 240 = 1,440."
   ],
   "tip": "CP = SP x 100 / (100 + Gain %)."
  },
  {
   "label": "1.1.8",
   "q": "What percentage of 2.5 kg is 50 grams?",
   "opts": [
    "2.5%",
    "5%",
    "0.2%",
    "2%"
   ],
   "a": 3,
   "key": "Both quantities must be in the SAME unit before you find a percentage.",
   "steps": [
    "2.5 kg = 2.5 x 1000 = <b>2,500 g</b>.",
    "Percentage = (50 / 2,500) x 100 = 50 / 25 = <b>2%</b>."
   ],
   "watch": "Do not divide 50 by 2.5. Convert kg to grams first."
  },
  {
   "label": "1.1.9",
   "q": "A trader marks his goods 30% above the cost price and allows a discount of 10%. What is his gain percentage?",
   "opts": [
    "17%",
    "20%",
    "15%",
    "18%"
   ],
   "a": 0,
   "key": "Take cost price = 100. Find the marked price, then the selling price after discount.",
   "flow": [
    [
     "Cost",
     "Rs.100"
    ],
    "+30% →",
    [
     "Marked",
     "Rs.130"
    ],
    "-10% →",
    [
     "Selling",
     "Rs.117",
     "g"
    ]
   ],
   "steps": [
    "Let CP = Rs.100. Marked price = 100 + 30 = <b>Rs.130</b>.",
    "Discount = 10% of 130 = Rs.13. SP = 130 - 13 = <b>Rs.117</b>.",
    "Gain = 117 - 100 = 17, so gain % = <b>17%</b>."
   ],
   "watch": "Not 30 - 10 = 20. The discount is on the marked price (130), not on the cost."
  },
  {
   "label": "1.1.10",
   "q": "If 15% of a number is 45, what is 40% of that same number?",
   "opts": [
    "135",
    "150",
    "100",
    "120"
   ],
   "a": 3,
   "key": "Find the number first, then take 40% of it.",
   "steps": [
    "15% of x = 45, so x = (45 x 100) / 15 = <b>300</b>.",
    "40% of 300 = (40/100) x 300 = <b>120</b>.",
    "Shortcut: 15% = 45, so 5% = 15, and 40% = 8 x 15 = 120."
   ],
   "tip": "Use 5% as a building block: 5% x 8 = 40%."
  },
  {
   "label": "1.1.11",
   "q": "A shopkeeper in Delhi buys a laptop for Rs.45,000. He spends Rs.3,000 on transportation and insurance. If he sells the laptop for Rs.52,800, what is his profit percentage?",
   "opts": [
    "8%",
    "10%",
    "12%",
    "15%"
   ],
   "a": 1,
   "key": "Transport and insurance are extra costs. Add them to the buying price.",
   "steps": [
    "Total CP = 45,000 + 3,000 = <b>Rs.48,000</b>.",
    "Profit = 52,800 - 48,000 = <b>Rs.4,800</b>.",
    "Profit % = (4,800 / 48,000) x 100 = <b>10%</b>."
   ],
   "tip": "Same pattern as 1.1.2. Cost price includes every expense."
  },
  {
   "label": "1.1.12",
   "q": "An electronics store in Bengaluru marks an OLED TV at Rs.80,000. The store offers two successive discounts of 15% and 10%. Find the final selling price of the TV.",
   "opts": [
    "Rs.62,400",
    "Rs.60,000",
    "Rs.61,200",
    "Rs.58,000"
   ],
   "a": 2,
   "key": "Same as 1.1.3: apply the discounts one after the other.",
   "steps": [
    "After 15%: 80,000 x 0.85 = <b>Rs.68,000</b>.",
    "After 10% on that: 68,000 x 0.90 = <b>Rs.61,200</b>."
   ],
   "watch": "Do not add 15% + 10%."
  },
  {
   "label": "1.1.13",
   "q": "The percentage profit earned by selling an article for Rs.1,920 is equal to the percentage loss incurred by selling the same article for Rs.1,280. At what price should the article be sold to make 25% profit?",
   "opts": [
    "Rs.2,400",
    "Rs.2,200",
    "Rs.2,000",
    "Rs.2,800"
   ],
   "a": 2,
   "key": "If profit % at one price equals loss % at another, the cost price is exactly in the MIDDLE of the two prices.",
   "steps": [
    "Let the cost be x. Profit = 1,920 - x and loss = x - 1,280. The percentages are equal, so 1,920 - x = x - 1,280.",
    "2x = 3,200, so x = <b>Rs.1,600</b> (the average of 1,920 and 1,280).",
    "For 25% profit: SP = 125% of 1,600 = 1,600 x 125/100 = <b>Rs.2,000</b>."
   ],
   "tip": "CP = (1,920 + 1,280) / 2. Check: profit = 320 and loss = 320, both on the same cost 1,600."
  },
  {
   "label": "1.1.14",
   "q": "A man sold an article at a loss of 20%. If he had sold it for Rs.12 more, then he would have gained 10%. The cost price of the article is",
   "opts": [
    "60",
    "40",
    "30",
    "22"
   ],
   "a": 1,
   "key": "Write both selling prices as a percentage of the cost. The gap between them is Rs.12.",
   "flow": [
    [
     "Loss 20%",
     "SP = 80% of CP"
    ],
    "Rs.12 more →",
    [
     "Gain 10%",
     "SP = 110% of CP"
    ],
    "so →",
    [
     "Difference",
     "30% of CP = Rs.12",
     "g"
    ]
   ],
   "steps": [
    "Loss 20%: SP = 80% of CP. Gain 10%: SP = 110% of CP.",
    "Difference = 110% - 80% = <b>30%</b> of CP = Rs.12.",
    "CP = 12 x 100 / 30 = <b>Rs.40</b>."
   ],
   "tip": "Check: 80% of 40 = 32, 110% of 40 = 44. The gap is 12."
  },
  {
   "label": "1.1.15",
   "q": "A shopkeeper marks an article 20% above its cost price. He allows a discount of 10% on the marked price. If the cost of the article is 2,000, find the selling price.",
   "opts": [
    "2,460",
    "2,600",
    "3,000",
    "2,160"
   ],
   "a": 3,
   "key": "Marked price first (on the cost), then the discount (on the marked price).",
   "tpre": [
    {
     "head": [
      "Step",
      "Amount"
     ],
     "rows": [
      [
       "Marked price (2,000 x 120/100)",
       "2,400"
      ],
      [
       "Less: Discount (2,400 x 10/100)",
       "240"
      ],
      [
       "Selling price",
       "2,160"
      ]
     ]
    }
   ],
   "steps": [
    "Marked price = 2,000 x 120/100 = <b>2,400</b>.",
    "Discount = 10% of 2,400 = <b>240</b>.",
    "Selling price = 2,400 - 240 = <b>2,160</b>."
   ],
   "tip": "Shortcut: 2,000 x 1.2 x 0.9 = 2,160."
  }
 ]
};
