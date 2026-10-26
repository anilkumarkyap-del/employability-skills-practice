/* MODULE 1 – Concept 1.3 */
window.PAPERS = window.PAPERS || {};
window.PAPERS["m1-3"] = {
 "id": "m1-3",
 "title": "1.3 Time, Speed and Distance",
 "subtitle": "Module 1: Quantitative Aptitude · 10 questions",
 "sections": [
  {
   "name": "1.3 Time, Speed and Distance",
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
    "Basic",
    "Speed = Distance / Time. Time = Distance / Speed. Distance = Speed x Time."
   ],
   [
    "Unit change",
    "km/h to m/s: multiply by 5/18. m/s to km/h: multiply by 18/5."
   ],
   [
    "Average speed (equal distances)",
    "2uv / (u + v)"
   ],
   [
    "Relative speed",
    "Opposite directions: add. Same direction: subtract."
   ],
   [
    "Train crossing",
    "A pole or a man: distance = train length. A platform or bridge: train length + platform length."
   ],
   [
    "Boat",
    "Downstream = u + v. Upstream = u - v. Boat = (D + U)/2. Stream = (D - U)/2."
   ]
  ]
 },
 "questions": [
  {
   "label": "1.3.1",
   "q": "A train 180 metres long is moving at a uniform speed of 54 km/h. How many seconds will it take to cross a platform 270 metres long?",
   "opts": [
    "25 seconds",
    "30 seconds",
    "35 seconds",
    "20 seconds"
   ],
   "a": 1,
   "key": "The train must cover its own length PLUS the platform. Change km/h to m/s.",
   "simg": [
    {
     "src": "m1-3-1-fig.png"
    }
   ],
   "steps": [
    "Total distance = 180 + 270 = <b>450 m</b>.",
    "Speed = 54 x 5/18 = <b>15 m/s</b>.",
    "Time = 450 / 15 = <b>30 seconds</b>."
   ]
  },
  {
   "label": "1.3.2",
   "q": "A boatman rows 9 km/h in still water. If the river current speed is 3 km/h, find the total time taken to row 36 km downstream and return.",
   "opts": [
    "8 hours",
    "9 hours",
    "10 hours",
    "7.5 hours"
   ],
   "a": 1,
   "key": "With the current add the speeds. Against the current subtract.",
   "tpre": [
    {
     "head": [
      "Direction",
      "Speed",
      "Time = 36 / speed"
     ],
     "rows": [
      [
       "Downstream",
       "12 km/h",
       "3 hours"
      ],
      [
       "Upstream",
       "6 km/h",
       "6 hours"
      ]
     ]
    }
   ],
   "steps": [
    "Downstream speed = 9 + 3 = <b>12 km/h</b>. Upstream speed = 9 - 3 = <b>6 km/h</b>.",
    "Time downstream = 36 / 12 = <b>3 hours</b>. Time upstream = 36 / 6 = <b>6 hours</b>.",
    "Total time = 3 + 6 = <b>9 hours</b>."
   ]
  },
  {
   "label": "1.3.3",
   "q": "A train running at 72 km/h crosses a telegraph pole in 9 seconds. What is the length of the train?",
   "opts": [
    "180 m",
    "150 m",
    "200 m",
    "160 m"
   ],
   "a": 0,
   "key": "A pole has no length, so the train only covers its OWN length.",
   "flow": [
    [
     "Speed",
     "20 m/s"
    ],
    "x →",
    [
     "Time",
     "9 s"
    ],
    "= →",
    [
     "Length",
     "180 m",
     "g"
    ]
   ],
   "steps": [
    "72 km/h = 72 x 5/18 = <b>20 m/s</b>.",
    "Length = speed x time = 20 x 9 = <b>180 m</b>."
   ]
  },
  {
   "label": "1.3.4",
   "q": "A person travels a distance of 120 km at 60 km/h and returns at 40 km/h. What is his average speed for the entire journey?",
   "opts": [
    "45 km/h",
    "50 km/h",
    "48 km/h",
    "52 km/h"
   ],
   "a": 2,
   "key": "For equal distances: average speed = 2uv / (u + v).",
   "steps": [
    "Average = (2 x 60 x 40) / (60 + 40) = 4,800 / 100 = <b>48 km/h</b>.",
    "Check: time = 2 h + 3 h = 5 h for 240 km, and 240 / 5 = 48."
   ],
   "watch": "Not (60 + 40)/2 = 50. He spends more time at the slower speed."
  },
  {
   "label": "1.3.5",
   "q": "A boat goes 12 km downstream in 48 minutes. If the speed of the current is 3 km/h, what is the speed of the boat in still water?",
   "opts": [
    "10 km/h",
    "15 km/h",
    "9 km/h",
    "12 km/h"
   ],
   "a": 3,
   "key": "Find the downstream speed, then take away the current.",
   "steps": [
    "48 minutes = 48/60 = <b>0.8 hour</b>.",
    "Downstream speed = 12 / 0.8 = <b>15 km/h</b>.",
    "15 = boat + 3, so boat = <b>12 km/h</b>."
   ],
   "watch": "15 km/h is the downstream speed, not the still-water speed."
  },
  {
   "label": "1.3.6",
   "q": "Two trains running in opposite directions at 40 km/h and 50 km/h cross each other in 12 seconds. What is the combined length of both trains?",
   "opts": [
    "200 m",
    "250 m",
    "300 m",
    "350 m"
   ],
   "a": 2,
   "key": "Opposite directions: ADD the speeds.",
   "steps": [
    "Relative speed = 40 + 50 = <b>90 km/h</b> = 90 x 5/18 = <b>25 m/s</b>.",
    "Combined length = 25 x 12 = <b>300 m</b>."
   ],
   "tip": "Opposite: add. Same direction: subtract.",
   "note": "The textbook prints the answer as '(A) 300 m', but 300 m is option (C) in the printed list. The correct option is (C)."
  },
  {
   "label": "1.3.7",
   "q": "Walking at 3/4 of his usual speed, a man reaches his office 20 minutes late. What is his usual time to reach office?",
   "opts": [
    "50 mins",
    "40 mins",
    "80 mins",
    "60 mins"
   ],
   "a": 3,
   "key": "Slower speed means more time. Speed and time are opposite: 3/4 speed means 4/3 time.",
   "flow": [
    [
     "Usual",
     "60 min"
    ],
    "x 4/3 →",
    [
     "Slow (3/4 speed)",
     "80 min"
    ],
    "extra →",
    [
     "Late by",
     "20 min",
     "g"
    ]
   ],
   "steps": [
    "Let the usual time be X minutes. At 3/4 speed the time is (4/3) X.",
    "The extra time is 20 minutes: (4/3) X - X = 20, so X/3 = 20.",
    "X = <b>60 minutes</b>.",
    "Check: new time = 80 minutes, which is 20 more than 60."
   ],
   "tip": "If speed is 3/4, the extra time is 1/3 of the usual time."
  },
  {
   "label": "1.3.8",
   "q": "A train 150 m long passes a standing man in 5 seconds. What is the speed of the train in km/h?",
   "opts": [
    "90 km/h",
    "108 km/h",
    "72 km/h",
    "120 km/h"
   ],
   "a": 1,
   "key": "Passing a man means covering only its own length.",
   "steps": [
    "Speed = 150 / 5 = <b>30 m/s</b>.",
    "In km/h: 30 x 18/5 = 6 x 18 = <b>108 km/h</b>."
   ],
   "tip": "m/s to km/h: multiply by 3.6."
  },
  {
   "label": "1.3.9",
   "q": "A speed of 15 metres per second is equal to how many km/h?",
   "opts": [
    "50 km/h",
    "45 km/h",
    "60 km/h",
    "54 km/h"
   ],
   "a": 3,
   "key": "m/s to km/h: multiply by 18/5.",
   "steps": [
    "15 x 18/5 = 3 x 18 = <b>54 km/h</b>."
   ],
   "tip": "Multiply by 3.6: 15 x 3.6 = 54."
  },
  {
   "label": "1.3.10",
   "q": "A motorboat can travel at 10 km/h in still water. It travelled 91 km downstream in 7 hours. What is the speed of the stream?",
   "opts": [
    "4 km/h",
    "2 km/h",
    "3 km/h",
    "2.5 km/h"
   ],
   "a": 2,
   "key": "Find the downstream speed, then take away the boat speed.",
   "steps": [
    "Downstream speed = 91 / 7 = <b>13 km/h</b>.",
    "13 = 10 + stream, so the stream = <b>3 km/h</b>."
   ]
  }
 ]
};
