/* MODULE 1 – Concept 1.9 */
window.PAPERS = window.PAPERS || {};
window.PAPERS["m1-9"] = {
 "id": "m1-9",
 "title": "1.9 Mensuration",
 "subtitle": "Module 1: Quantitative Aptitude · 10 questions",
 "sections": [
  {
   "name": "1.9 Mensuration",
   "from": 1,
   "to": 10
  }
 ],
 "toolbox": {
  "head": [
   "Shape",
   "Formula"
  ],
  "rows": [
   [
    "Rectangle",
    "Area = l x b. Perimeter = 2(l + b)."
   ],
   [
    "Square",
    "Area = a x a = d x d / 2. Perimeter = 4a."
   ],
   [
    "Circle",
    "Area = pi r r. Circumference = 2 pi r."
   ],
   [
    "Triangle",
    "Area = (1/2) x base x height"
   ],
   [
    "Equilateral triangle",
    "Area = (root 3 / 4) x side x side"
   ]
  ]
 },
 "questions": [
  {
   "label": "1.9.1",
   "q": "The length of a rectangular plot is 4 m more than its breadth. If the perimeter is 88 m, find the area of the plot.",
   "opts": [
    "476 sq. m",
    "480 sq. m",
    "520 sq. m",
    "440 sq. m"
   ],
   "a": 1,
   "key": "Use the perimeter 2(l + b) to find l and b. Then area = l x b.",
   "simg": [
    {
     "src": "m1-9-1-fig.png"
    }
   ],
   "steps": [
    "Breadth b = x, length = x + 4. Perimeter: 2(x + 4 + x) = 88, so 2x + 4 = 44 and x = <b>20</b>.",
    "Length = 24 m, breadth = 20 m.",
    "Area = 24 x 20 = <b>480 sq. m</b>."
   ],
   "tip": "Half the perimeter (44) is l + b. With l - b = 4 you get 24 and 20."
  },
  {
   "label": "1.9.2",
   "q": "Find the circumference of a circle whose radius is 14 cm. (Use pi = 22/7)",
   "opts": [
    "176 cm",
    "44 cm",
    "88 cm",
    "616 cm"
   ],
   "a": 2,
   "key": "Circumference = 2 x pi x r.",
   "steps": [
    "C = 2 x (22/7) x 14.",
    "14 / 7 = 2, so C = 2 x 22 x 2 = <b>88 cm</b>."
   ],
   "watch": "616 is the AREA. 44 would be the circumference if r were 7."
  },
  {
   "label": "1.9.3",
   "q": "The area of an equilateral triangle with side length 6 cm is:",
   "opts": [
    "9 root 3 cm<sup>2</sup>",
    "18 root 3 cm<sup>2</sup>",
    "12 root 3 cm<sup>2</sup>",
    "36 cm<sup>2</sup>"
   ],
   "a": 0,
   "key": "Use the formula for an equilateral triangle.",
   "simg": [
    {
     "src": "m1-9-3-fig.png"
    }
   ],
   "steps": [
    "Area = (root 3 / 4) x side<sup>2</sup>.",
    "= (root 3 / 4) x 36 = <b>9 root 3 cm</b><sup>2</sup>."
   ],
   "tip": "Divide 36 by 4 first, then keep the root 3."
  },
  {
   "label": "1.9.4",
   "q": "If the area of a square is 144 cm<sup>2</sup>, what is its perimeter?",
   "opts": [
    "52 cm",
    "36 cm",
    "24 cm",
    "48 cm"
   ],
   "a": 3,
   "key": "Side = square root of the area. Perimeter = 4 x side.",
   "flow": [
    [
     "Area",
     "144 sq cm"
    ],
    "square root →",
    [
     "Side",
     "12 cm"
    ],
    "x 4 →",
    [
     "Perimeter",
     "48 cm",
     "g"
    ]
   ],
   "steps": [
    "Side = square root of 144 = <b>12 cm</b>.",
    "Perimeter = 4 x 12 = <b>48 cm</b>."
   ]
  },
  {
   "label": "1.9.5",
   "q": "The base and height of a triangle are 12 cm and 8 cm respectively. Find its area.",
   "opts": [
    "96 cm<sup>2</sup>",
    "48 cm<sup>2</sup>",
    "24 cm<sup>2</sup>",
    "60 cm<sup>2</sup>"
   ],
   "a": 1,
   "key": "A triangle is HALF of base times height.",
   "simg": [
    {
     "src": "m1-9-5-fig.png"
    }
   ],
   "steps": [
    "Area = (1/2) x 12 x 8 = <b>48 cm</b><sup>2</sup>."
   ],
   "watch": "96 forgets the 1/2."
  },
  {
   "label": "1.9.6",
   "q": "If the radius of a circle is doubled, by how many times does its area increase?",
   "opts": [
    "8 times",
    "2 times",
    "4 times",
    "3 times"
   ],
   "a": 2,
   "key": "Area depends on r x r. Double r and r x r becomes 4 times.",
   "simg": [
    {
     "src": "m1-9-6-fig.png"
    }
   ],
   "steps": [
    "Old area = pi r<sup>2</sup>.",
    "New radius = 2r, so new area = pi (2r)<sup>2</sup> = 4 pi r<sup>2</sup>.",
    "The area becomes <b>4 times</b>."
   ]
  },
  {
   "label": "1.9.7",
   "q": "Find the cost of fencing a rectangular field 30 m long and 20 m wide at Rs.5 per metre.",
   "opts": [
    "Rs.1,000",
    "Rs.600",
    "Rs.300",
    "Rs.500"
   ],
   "a": 3,
   "key": "Fencing goes round the edge: that is the PERIMETER.",
   "simg": [
    {
     "src": "m1-9-7-fig.png"
    }
   ],
   "steps": [
    "Perimeter = 2(30 + 20) = <b>100 m</b>.",
    "Cost = 100 x Rs.5 = <b>Rs.500</b>."
   ],
   "watch": "Area (600 sq m) is for covering the ground, not for fencing."
  },
  {
   "label": "1.9.8",
   "q": "The length of a diagonal of a square is 10 cm. Find the area of the square.",
   "opts": [
    "50 cm<sup>2</sup>",
    "100 cm<sup>2</sup>",
    "25 cm<sup>2</sup>",
    "75 cm<sup>2</sup>"
   ],
   "a": 0,
   "key": "Area of a square = diagonal x diagonal / 2.",
   "simg": [
    {
     "src": "m1-9-8-fig.png"
    }
   ],
   "steps": [
    "Area = 10<sup>2</sup> / 2 = 100 / 2 = <b>50 cm</b><sup>2</sup>."
   ],
   "watch": "100 is d x d, not the area."
  },
  {
   "label": "1.9.9",
   "q": "The perimeter of a circle is equal to the perimeter of a square of side 11 cm. Find radius of circle.",
   "opts": [
    "14 cm",
    "7 cm",
    "3.5 cm",
    "11 cm"
   ],
   "a": 1,
   "key": "Find the square's perimeter, then use it as the circle's circumference.",
   "simg": [
    {
     "src": "m1-9-9-fig.png"
    }
   ],
   "steps": [
    "Square perimeter = 4 x 11 = <b>44 cm</b>.",
    "Circle: 2 x (22/7) x r = 44, so (44/7) x r = 44.",
    "r = <b>7 cm</b>."
   ]
  },
  {
   "label": "1.9.10",
   "q": "The ratio of length to breadth of a rectangle is 3: 2 and its area is 150 cm<sup>2</sup>. Find its perimeter.",
   "opts": [
    "30 cm",
    "60 cm",
    "40 cm",
    "50 cm"
   ],
   "a": 3,
   "key": "Write length = 3x and breadth = 2x.",
   "simg": [
    {
     "src": "m1-9-10-fig.png"
    }
   ],
   "steps": [
    "Area = 3x x 2x = 6x<sup>2</sup> = 150, so x<sup>2</sup> = 25 and x = 5.",
    "Length = 15 cm, breadth = 10 cm.",
    "Perimeter = 2(15 + 10) = <b>50 cm</b>. <b>Module 1 complete. Well done!</b> Practise the tricks, not just the answers."
   ]
  }
 ]
};
