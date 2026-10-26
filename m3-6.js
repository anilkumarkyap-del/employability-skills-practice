/* 3.6 Data Interpretation */
window.PAPERS = window.PAPERS || {};
window.PAPERS["m3-6"] = {
 "id": "m3-6",
 "title": "3.6 Data Interpretation",
 "subtitle": "Module 3: Analytical Reasoning · 30 questions",
 "sections": [
  {
   "name": "3.6 Data Interpretation",
   "from": 1,
   "to": 30
  }
 ],
 "toolbox": {
  "head": [
   "Need",
   "Formula"
  ],
  "rows": [
   [
    "Pie chart sector value",
    "(Central angle / 360) x Total value"
   ],
   [
    "Percentage share",
    "(Sector angle / 360) x 100"
   ],
   [
    "Percentage change",
    "((Final - Initial) / Initial) x 100"
   ],
   [
    "x is what % of y",
    "(x / y) x 100"
   ],
   [
    "Average",
    "Total / number of items"
   ],
   [
    "How much % more",
    "(Difference / the smaller or base number) x 100"
   ]
  ]
 },
 "questions": [
  {
   "label": "3.6.1",
   "q": "What is the ratio of the total number of students enrolled in Commerce across all three schools to the total number of students enrolled in Employability Skills across all three schools?",
   "opts": [
    "45 : 38",
    "38 : 45",
    "5 : 4",
    "9 : 8"
   ],
   "a": 0,
   "data": {
    "head": [
     "School",
     "Commerce",
     "Employability Skills"
    ],
    "rows": [
     [
      "School A",
      "120",
      "100"
     ],
     [
      "School B",
      "150",
      "130"
     ],
     [
      "School C",
      "180",
      "150"
     ]
    ]
   },
   "key": "Add each column first. Then write the ratio of the two totals.",
   "steps": [
    "Commerce total = 120 + 150 + 180 = <b>450</b>.",
    "Employability Skills total = 100 + 130 + 150 = <b>380</b>.",
    "Ratio = 450 : 380. Divide both by 10: <b>45 : 38</b>."
   ],
   "table": {
    "head": [
     "School",
     "Commerce",
     "Employability Skills"
    ],
    "rows": [
     [
      "<b>School A</b>",
      "120",
      "100"
     ],
     [
      "<b>School B</b>",
      "150",
      "130"
     ],
     [
      "<b>School C</b>",
      "180",
      "150"
     ],
     [
      "<b>Total</b>",
      "450",
      "380"
     ]
    ]
   },
   "tip": "Always put the numbers in the order the question asks: Commerce first."
  },
  {
   "label": "3.6.2",
   "q": "The total number of students in College M (Commerce: 120, Science: 100, Arts: 150, Fashion Designing: 80, Nursing: 60) is what percentage of total students in College N (Commerce: 180, Science: 170, Arts: 130, Fashion Designing: 110, Nursing: 90)?",
   "opts": [
    "76%",
    "82%",
    "75%",
    "92%"
   ],
   "a": 2,
   "key": "Find both totals, then use: (M / N) x 100.",
   "steps": [
    "College M = 120 + 100 + 150 + 80 + 60 = <b>510</b>.",
    "College N = 180 + 170 + 130 + 110 + 90 = <b>680</b>.",
    "Percentage = (510 / 680) x 100 = <b>75%</b>."
   ],
   "table": {
    "head": [
     "Course",
     "College M",
     "College N"
    ],
    "rows": [
     [
      "<b>Commerce</b>",
      "120",
      "180"
     ],
     [
      "<b>Science</b>",
      "100",
      "170"
     ],
     [
      "<b>Arts</b>",
      "150",
      "130"
     ],
     [
      "<b>Fashion Designing</b>",
      "80",
      "110"
     ],
     [
      "<b>Nursing</b>",
      "60",
      "90"
     ],
     [
      "<b>Total</b>",
      "510",
      "680"
     ]
    ]
   },
   "note": "The textbook's answer line says (C) 75%, but option (C) is printed as 88% and 75% is not in the printed list. The working gives 75%, so (C) is read as 75% here."
  },
  {
   "label": "3.6.3",
   "q": "In a Pie chart showing expenses, if Factory lighting is 180°, what percentage of total budget is spent on factory lighting?",
   "opts": [
    "25%",
    "50%",
    "30%",
    "15%"
   ],
   "a": 1,
   "key": "A whole pie is 360° = 100%.",
   "simg": [
    {
     "src": "m3-6-3-sol.png"
    }
   ],
   "steps": [
    "Percentage = (sector angle / 360°) x 100.",
    "= (180 / 360) x 100 = <b>50%</b>."
   ],
   "tip": "180° is half a circle, so it is always 50%."
  },
  {
   "label": "3.6.4",
   "q": "If total pie chart spending is Rs.1,00,000 and Education accounts for 90°, how much is spent on Education?",
   "opts": [
    "Rs.33,333",
    "Rs.30,000",
    "Rs.25,000",
    "Rs.15,000"
   ],
   "a": 2,
   "key": "Amount = (angle / 360°) x total.",
   "simg": [
    {
     "src": "m3-6-4-sol.png"
    }
   ],
   "steps": [
    "The whole pie is 360°.",
    "Education = (90 / 360) x 1,00,000 = (1/4) x 1,00,000 = <b>Rs.25,000</b>."
   ],
   "tip": "90° is a quarter of the circle."
  },
  {
   "label": "3.6.5",
   "q": "A bar graph shows sales of 50, 70, 100, 120, and 150 units in 5 quarters. What is the average sales per quarter?",
   "opts": [
    "85 units",
    "90 units",
    "100 units",
    "98 units"
   ],
   "a": 3,
   "key": "Average = total / number of quarters.",
   "steps": [
    "Total = 50 + 70 + 100 + 120 + 150 = <b>490</b> units.",
    "Average = 490 / 5 = <b>98</b> units."
   ],
   "table": {
    "head": [
     "Quarter",
     "1",
     "2",
     "3",
     "4",
     "5",
     "Total"
    ],
    "rows": [
     [
      "<b>Sales (units)</b>",
      "50",
      "70",
      "100",
      "120",
      "150",
      "490"
     ]
    ]
   },
   "tip": "Add in pairs: 50 + 150 = 200, 70 + 120 = 190, then + 100."
  },
  {
   "label": "3.6.6a",
   "q": "The table shows students admitted and the percentage who passed in five colleges. What is the total number of students who passed from Colleges A and C?",
   "opts": [
    "1,560",
    "1,680",
    "1,720",
    "1,800"
   ],
   "a": 1,
   "data": {
    "head": [
     "College",
     "Admitted",
     "% Passed"
    ],
    "rows": [
     [
      "A",
      "800",
      "75%"
     ],
     [
      "B",
      "1,200",
      "65%"
     ],
     [
      "C",
      "1,500",
      "72%"
     ],
     [
      "D",
      "1,000",
      "80%"
     ],
     [
      "E",
      "900",
      "60%"
     ]
    ]
   },
   "key": "Passed = percentage passed x students admitted. Work out the whole 'Passed' column once; it answers parts a to e.",
   "steps": [
    "College A passed = 75% of 800 = <b>600</b>.",
    "College C passed = 72% of 1,500 = <b>1,080</b>.",
    "Total = 600 + 1,080 = <b>1,680</b>."
   ],
   "table": {
    "head": [
     "College",
     "Admitted",
     "% Passed",
     "Passed = % x Admitted",
     "Failed"
    ],
    "rows": [
     [
      "<b>A</b>",
      "800",
      "75%",
      "0.75 x 800 = 600",
      "200"
     ],
     [
      "<b>B</b>",
      "1,200",
      "65%",
      "0.65 x 1,200 = 780",
      "420"
     ],
     [
      "<b>C</b>",
      "1,500",
      "72%",
      "0.72 x 1,500 = 1,080",
      "420"
     ],
     [
      "<b>D</b>",
      "1,000",
      "80%",
      "0.80 x 1,000 = 800",
      "200"
     ],
     [
      "<b>E</b>",
      "900",
      "60%",
      "0.60 x 900 = 540",
      "360"
     ]
    ]
   }
  },
  {
   "label": "3.6.6b",
   "q": "What is the ratio of students who passed in College C to those who failed in College E?",
   "opts": [
    "2 : 1",
    "3 : 1",
    "3 : 2",
    "4 : 1"
   ],
   "a": 1,
   "data": {
    "head": [
     "College",
     "Admitted",
     "% Passed"
    ],
    "rows": [
     [
      "A",
      "800",
      "75%"
     ],
     [
      "B",
      "1,200",
      "65%"
     ],
     [
      "C",
      "1,500",
      "72%"
     ],
     [
      "D",
      "1,000",
      "80%"
     ],
     [
      "E",
      "900",
      "60%"
     ]
    ]
   },
   "key": "Passed in C is from the table. Failed in E = (100% - 60%) of 900.",
   "steps": [
    "Passed in C = <b>1,080</b>.",
    "Failed in E = 40% of 900 = <b>360</b>.",
    "Ratio = 1,080 : 360 = <b>3 : 1</b>."
   ]
  },
  {
   "label": "3.6.6c",
   "q": "What is the average number of students who passed in all five colleges?",
   "opts": [
    "730",
    "750",
    "760",
    "780"
   ],
   "a": 2,
   "data": {
    "head": [
     "College",
     "Admitted",
     "% Passed"
    ],
    "rows": [
     [
      "A",
      "800",
      "75%"
     ],
     [
      "B",
      "1,200",
      "65%"
     ],
     [
      "C",
      "1,500",
      "72%"
     ],
     [
      "D",
      "1,000",
      "80%"
     ],
     [
      "E",
      "900",
      "60%"
     ]
    ]
   },
   "key": "Average = total passed / 5.",
   "steps": [
    "Total passed = 600 + 780 + 1,080 + 800 + 540 = <b>3,800</b>.",
    "Average = 3,800 / 5 = <b>760</b>."
   ]
  },
  {
   "label": "3.6.6d",
   "q": "What is the difference between the number of students who passed from College C and College B?",
   "opts": [
    "250",
    "280",
    "300",
    "320"
   ],
   "a": 2,
   "data": {
    "head": [
     "College",
     "Admitted",
     "% Passed"
    ],
    "rows": [
     [
      "A",
      "800",
      "75%"
     ],
     [
      "B",
      "1,200",
      "65%"
     ],
     [
      "C",
      "1,500",
      "72%"
     ],
     [
      "D",
      "1,000",
      "80%"
     ],
     [
      "E",
      "900",
      "60%"
     ]
    ]
   },
   "key": "Subtract the smaller pass number from the larger.",
   "steps": [
    "College C passed = 1,080. College B passed = 65% of 1,200 = 780.",
    "Difference = 1,080 - 780 = <b>300</b>."
   ]
  },
  {
   "label": "3.6.6e",
   "q": "The number of students passing from College D is how much more than the number passing from College A?",
   "opts": [
    "25%",
    "30%",
    "33.33%",
    "40%"
   ],
   "a": 2,
   "data": {
    "head": [
     "College",
     "Admitted",
     "% Passed"
    ],
    "rows": [
     [
      "A",
      "800",
      "75%"
     ],
     [
      "B",
      "1,200",
      "65%"
     ],
     [
      "C",
      "1,500",
      "72%"
     ],
     [
      "D",
      "1,000",
      "80%"
     ],
     [
      "E",
      "900",
      "60%"
     ]
    ]
   },
   "key": "\"How much % more\" = (difference / the number we compare with) x 100. The base is College A.",
   "steps": [
    "Passed in D = 800. Passed in A = 600. Difference = 200.",
    "Percentage more = (200 / 600) x 100 = <b>33.33%</b> (that is 33 1/3 %)."
   ],
   "watch": "The base is the number after 'than' (College A), not the bigger number."
  },
  {
   "label": "3.6.7a",
   "q": "The table shows the number of students in five courses in two colleges. The number of students in Science in College A is what percentage of the total number of science students in both colleges?",
   "opts": [
    "48.15%",
    "50%",
    "51.85%",
    "52.50%"
   ],
   "a": 2,
   "data": {
    "head": [
     "Course",
     "College A",
     "College B"
    ],
    "rows": [
     [
      "Commerce",
      "120",
      "150"
     ],
     [
      "Science",
      "140",
      "130"
     ],
     [
      "Arts",
      "100",
      "160"
     ],
     [
      "Management",
      "80",
      "110"
     ],
     [
      "Computer Science",
      "160",
      "140"
     ]
    ]
   },
   "key": "Part divided by whole, times 100.",
   "steps": [
    "Science in both colleges = 140 + 130 = <b>270</b>.",
    "Percentage = (140 / 270) x 100 = <b>51.85%</b>."
   ],
   "table": {
    "head": [
     "Course",
     "College A",
     "College B"
    ],
    "rows": [
     [
      "<b>Commerce</b>",
      "120",
      "150"
     ],
     [
      "<b>Science</b>",
      "140",
      "130"
     ],
     [
      "<b>Arts</b>",
      "100",
      "160"
     ],
     [
      "<b>Management</b>",
      "80",
      "110"
     ],
     [
      "<b>Computer Science</b>",
      "160",
      "140"
     ],
     [
      "<b>Total</b>",
      "600",
      "690"
     ]
    ]
   }
  },
  {
   "label": "3.6.7b",
   "q": "What is the percentage increase in the number of Arts students in College B compared to College A?",
   "opts": [
    "40%",
    "50%",
    "60%",
    "80%"
   ],
   "a": 2,
   "data": {
    "head": [
     "Course",
     "College A",
     "College B"
    ],
    "rows": [
     [
      "Commerce",
      "120",
      "150"
     ],
     [
      "Science",
      "140",
      "130"
     ],
     [
      "Arts",
      "100",
      "160"
     ],
     [
      "Management",
      "80",
      "110"
     ],
     [
      "Computer Science",
      "160",
      "140"
     ]
    ]
   },
   "key": "Percentage increase = (increase / starting number) x 100. The start is College A.",
   "steps": [
    "Arts: A = 100, B = 160. Increase = 160 - 100 = <b>60</b>.",
    "Percentage increase = (60 / 100) x 100 = <b>60%</b>."
   ]
  },
  {
   "label": "3.6.7c",
   "q": "What is the ratio of the total number of students in Commerce and Science in College A to the total number of students in Arts and Management in College B?",
   "opts": [
    "13 : 14",
    "26 : 27",
    "27 : 26",
    "14 : 13"
   ],
   "a": 1,
   "data": {
    "head": [
     "Course",
     "College A",
     "College B"
    ],
    "rows": [
     [
      "Commerce",
      "120",
      "150"
     ],
     [
      "Science",
      "140",
      "130"
     ],
     [
      "Arts",
      "100",
      "160"
     ],
     [
      "Management",
      "80",
      "110"
     ],
     [
      "Computer Science",
      "160",
      "140"
     ]
    ]
   },
   "key": "Make two totals, then the ratio.",
   "steps": [
    "Commerce + Science in A = 120 + 140 = <b>260</b>.",
    "Arts + Management in B = 160 + 110 = <b>270</b>.",
    "Ratio = 260 : 270 = <b>26 : 27</b>."
   ]
  },
  {
   "label": "3.6.7d",
   "q": "If 10% of the students in College A and 20% of the students in College B are transferred out, what will be the difference between the remaining total number of students in the two colleges?",
   "opts": [
    "10",
    "12",
    "18",
    "22"
   ],
   "a": 1,
   "data": {
    "head": [
     "Course",
     "College A",
     "College B"
    ],
    "rows": [
     [
      "Commerce",
      "120",
      "150"
     ],
     [
      "Science",
      "140",
      "130"
     ],
     [
      "Arts",
      "100",
      "160"
     ],
     [
      "Management",
      "80",
      "110"
     ],
     [
      "Computer Science",
      "160",
      "140"
     ]
    ]
   },
   "key": "Find each total, then the remaining part (90% of A, 80% of B).",
   "steps": [
    "College A total = 600. After 10% leave: 90% of 600 = <b>540</b>.",
    "College B total = 690. After 20% leave: 80% of 690 = <b>552</b>.",
    "Difference = 552 - 540 = <b>12</b>."
   ]
  },
  {
   "label": "3.6.7e",
   "q": "If the number of students in Commerce and Management in College A increases by 25% and 20% respectively, what will be the new total number of students in College A?",
   "opts": [
    "646",
    "650",
    "656",
    "660"
   ],
   "a": 0,
   "data": {
    "head": [
     "Course",
     "College A",
     "College B"
    ],
    "rows": [
     [
      "Commerce",
      "120",
      "150"
     ],
     [
      "Science",
      "140",
      "130"
     ],
     [
      "Arts",
      "100",
      "160"
     ],
     [
      "Management",
      "80",
      "110"
     ],
     [
      "Computer Science",
      "160",
      "140"
     ]
    ]
   },
   "key": "Only the increases change the total. Add them to 600.",
   "steps": [
    "Commerce increase = 25% of 120 = <b>30</b>.",
    "Management increase = 20% of 80 = <b>16</b>.",
    "New total = 600 + 30 + 16 = <b>646</b>."
   ]
  },
  {
   "label": "3.6.8a",
   "q": "The pie diagram shows a company's annual expenditure. How much is spent on Rent (Total Expenditure = Rs.7,20,000)?",
   "opts": [
    "Rs.1,00,000",
    "Rs.1,20,000",
    "Rs.1,50,000",
    "Rs.1,80,000"
   ],
   "a": 1,
   "img": "m3-6-8-q.png",
   "key": "Amount = (angle / 360°) x total.",
   "steps": [
    "Rent is 60° out of 360° = 60/360 = <b>1/6</b>.",
    "Rent = 7,20,000 x 1/6 = <b>Rs.1,20,000</b>."
   ]
  },
  {
   "label": "3.6.8b",
   "q": "Which category has the highest expenditure?",
   "opts": [
    "Salaries",
    "Rent",
    "Raw Materials",
    "Other Expenses"
   ],
   "a": 2,
   "img": "m3-6-8-q.png",
   "key": "In a pie chart the biggest slice (biggest angle) is the biggest amount.",
   "steps": [
    "Angles: Salaries 90°, Rent 60°, Raw Materials <b>120°</b>, Other 36°.",
    "120° is the largest angle, so <b>Raw Materials</b> is highest."
   ]
  },
  {
   "label": "3.6.8c",
   "q": "The expenditure on Raw Materials is what percentage more than the expenditure on Rent?",
   "opts": [
    "50%",
    "75%",
    "100%",
    "125%"
   ],
   "a": 2,
   "img": "m3-6-8-q.png",
   "key": "Raw Materials has 120° and Rent has 60°: exactly double.",
   "steps": [
    "Raw Materials = 7,20,000 x 120/360 = <b>Rs.2,40,000</b>.",
    "Rent = 7,20,000 x 60/360 = <b>Rs.1,20,000</b>.",
    "More = (2,40,000 - 1,20,000) / 1,20,000 x 100 = <b>100%</b>."
   ]
  },
  {
   "label": "3.6.8d",
   "q": "If the expenditure on Advertising is increased by 50%, what will be the new total expenditure, assuming all other expenses remain unchanged?",
   "opts": [
    "Rs.7,44,000",
    "Rs.7,56,000",
    "Rs.7,68,000",
    "Rs.7,80,000"
   ],
   "a": 0,
   "img": "m3-6-8-q.png",
   "key": "Only the advertising amount changes. Add the increase to the old total.",
   "steps": [
    "Advertising = 7,20,000 x 24/360 = <b>Rs.48,000</b>.",
    "50% increase = 48,000 x 50/100 = <b>Rs.24,000</b>.",
    "New total = 7,20,000 + 24,000 = <b>Rs.7,44,000</b>."
   ]
  },
  {
   "label": "3.6.8e",
   "q": "If the expenditure on Salaries and Other Expenses together is reduced by 10%, how much money will be saved?",
   "opts": [
    "Rs.18,000",
    "Rs.25,200",
    "Rs.30,000",
    "Rs.32,400"
   ],
   "a": 1,
   "img": "m3-6-8-q.png",
   "key": "Add the two angles first, then find the amount.",
   "steps": [
    "Angle = 90° + 36° = <b>126°</b>.",
    "Amount = 7,20,000 x 126/360 = <b>Rs.2,52,000</b>.",
    "Saving at 10% = 2,52,000 x 10/100 = <b>Rs.25,200</b>."
   ]
  },
  {
   "label": "3.6.9a",
   "q": "The pie diagram shows the distribution of 720 students in different courses. Which course has the lowest number of students?",
   "opts": [
    "Management",
    "Arts",
    "Nursing",
    "Commerce"
   ],
   "a": 2,
   "img": "m3-6-9-q.png",
   "key": "The smallest slice is the smallest number.",
   "steps": [
    "Read the numbers: Science 180, Commerce 150, Arts 120, Computer Science 120, Management 90, Nursing <b>60</b>.",
    "60 is the smallest, so <b>Nursing</b>."
   ]
  },
  {
   "label": "3.6.9b",
   "q": "How many students are enrolled in Arts and Computer Science together?",
   "opts": [
    "180",
    "210",
    "240",
    "300"
   ],
   "a": 2,
   "img": "m3-6-9-q.png",
   "key": "Read two slices and add.",
   "steps": [
    "Arts = 120. Computer Science = 120.",
    "Total = 120 + 120 = <b>240</b>."
   ]
  },
  {
   "label": "3.6.9c",
   "q": "The number of students in Commerce is what percentage more than the number of students in Management?",
   "opts": [
    "50%",
    "60%",
    "66.67%",
    "75%"
   ],
   "a": 2,
   "img": "m3-6-9-q.png",
   "key": "Base = the number after 'than' (Management).",
   "steps": [
    "Commerce = 150. Management = 90. Difference = 60.",
    "Percentage more = (60 / 90) x 100 = <b>66.67%</b>."
   ]
  },
  {
   "label": "3.6.9d",
   "q": "What is the ratio of students in Science and Commerce together to students in Arts, Management and Nursing together?",
   "opts": [
    "11 : 9",
    "11 : 10",
    "10 : 11",
    "9 : 11"
   ],
   "a": 0,
   "img": "m3-6-9-q.png",
   "key": "Make two totals, then the ratio.",
   "steps": [
    "Science + Commerce = 180 + 150 = <b>330</b>.",
    "Arts + Management + Nursing = 120 + 90 + 60 = <b>270</b>.",
    "Ratio = 330 : 270 = <b>11 : 9</b>."
   ]
  },
  {
   "label": "3.6.9e",
   "q": "If 20% of the Science students and 30% of the Commerce students shift to Computer Science, what will be the new total number of Computer Science students?",
   "opts": [
    "180",
    "201",
    "210",
    "225"
   ],
   "a": 1,
   "img": "m3-6-9-q.png",
   "key": "Find how many shift from each course, then add them to the old Computer Science number.",
   "steps": [
    "20% of Science (180) = <b>36</b> students.",
    "30% of Commerce (150) = <b>45</b> students.",
    "New Computer Science = 120 + 36 + 45 = <b>201</b>."
   ]
  },
  {
   "label": "3.6.10a",
   "q": "The bar diagram shows the number of cars sold by five companies. What is the difference between the number of cars sold by Company D and Company A?",
   "opts": [
    "80",
    "90",
    "100",
    "120"
   ],
   "a": 1,
   "img": "m3-6-10-q.png",
   "key": "Read the number on top of each bar.",
   "steps": [
    "Company D = 210. Company A = 120.",
    "Difference = 210 - 120 = <b>90</b>."
   ]
  },
  {
   "label": "3.6.10b",
   "q": "What is the average number of cars sold by the five companies?",
   "opts": [
    "140",
    "145",
    "150",
    "155"
   ],
   "a": 2,
   "img": "m3-6-10-q.png",
   "key": "Add all bars, divide by 5.",
   "steps": [
    "Total = 120 + 180 + 150 + 210 + 90 = <b>750</b>.",
    "Average = 750 / 5 = <b>150</b>."
   ]
  },
  {
   "label": "3.6.10c",
   "q": "The number of cars sold by Company B is what percentage of the number sold by Company D?",
   "opts": [
    "75%",
    "80%",
    "85.71%",
    "90%"
   ],
   "a": 2,
   "img": "m3-6-10-q.png",
   "key": "\"B is what % of D\" = (B / D) x 100.",
   "steps": [
    "B = 180 and D = 210.",
    "Percentage = (180 / 210) x 100 = <b>85.71%</b>."
   ]
  },
  {
   "label": "3.6.10d",
   "q": "If Company E increases its car sales by 50% and Company A decreases its sales by 25%, what will be the difference between their new sales figures?",
   "opts": [
    "0",
    "15",
    "30",
    "45"
   ],
   "a": 3,
   "img": "m3-6-10-q.png",
   "key": "Find both new numbers, then subtract.",
   "steps": [
    "E: 50% of 90 = 45, new = 90 + 45 = <b>135</b>.",
    "A: 25% of 120 = 30, new = 120 - 30 = <b>90</b>.",
    "Difference = 135 - 90 = <b>45</b>."
   ]
  },
  {
   "label": "3.6.10e",
   "q": "If the total sales of all five companies increase by 20%, what will be the new total number of cars sold?",
   "opts": [
    "850",
    "875",
    "900",
    "950"
   ],
   "a": 2,
   "img": "m3-6-10-q.png",
   "key": "Find the total, then add 20% of it.",
   "steps": [
    "Total = <b>750</b>.",
    "20% of 750 = <b>150</b>.",
    "New total = 750 + 150 = <b>900</b>."
   ]
  }
 ]
};
