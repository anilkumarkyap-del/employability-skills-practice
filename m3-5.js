/* MODULE 3 – Concept 3.5 Syllogisms */
window.PAPERS = window.PAPERS || {};
window.PAPERS["m3-5"] = {
 "id": "m3-5",
 "title": "3.5 Syllogisms",
 "subtitle": "Module 3: Analytical Reasoning · 10 questions",
 "sections": [
  {
   "name": "3.5 Syllogisms",
   "from": 1,
   "to": 10
  }
 ],
 "toolbox": {
  "head": [
   "Form",
   "Meaning and Venn picture"
  ],
  "rows": [
   [
    "All A are B",
    "A inside B"
   ],
   [
    "No A is B",
    "A and B separate"
   ],
   [
    "Some A are B",
    "A and B overlap"
   ],
   [
    "Conversion",
    "All A are B gives Some B are A (but never All B are A). No A is B gives No B is A."
   ]
  ]
 },
 "questions": [
  {
   "label": "3.5.1",
   "q": "Statements: All laptops are computers. Some computers are mobile phones. Conclusions: I. Some laptops are mobile phones. II. Some computers are laptops.",
   "opts": [
    "Only Conclusion I follows",
    "Only Conclusion II follows",
    "Either I or II follows",
    "Neither I nor II follows"
   ],
   "a": 1,
   "key": "Draw Laptops inside Computers. Mobile phones overlap only part of Computers.",
   "simg": [
    {
     "src": "m3-5-1-sol.png"
    }
   ],
   "steps": [
    "II: from \"All laptops are computers\" we can say \"Some computers are laptops\". <b>Follows</b>.",
    "I: nothing links laptops with mobile phones. The mobile-phone part of Computers may be completely away from Laptops. <b>Does not follow</b>.",
    "Only II follows."
   ]
  },
  {
   "label": "3.5.2",
   "q": "Statements: All dogs are mammals. All mammals are animals. Conclusions: I. All dogs are animals. II. Some animals are dogs.",
   "opts": [
    "Both I and II follow",
    "Only I follows",
    "Only II follows",
    "Neither follows"
   ],
   "a": 0,
   "key": "Chain rule: Dogs inside Mammals inside Animals.",
   "simg": [
    {
     "src": "m3-5-2-sol.png"
    }
   ],
   "steps": [
    "I: Dogs are inside Mammals, which are inside Animals, so all dogs are animals. <b>Valid</b>.",
    "II: if all dogs are animals, then some animals are dogs. <b>Valid</b>.",
    "Both follow."
   ]
  },
  {
   "label": "3.5.3",
   "q": "Statements: Some cats are rats. All rats are bats. Conclusions: I. Some cats are bats. II. All bats are cats.",
   "opts": [
    "Only I follows",
    "Only II follows",
    "Both follow",
    "Neither follows"
   ],
   "a": 0,
   "key": "Cats overlap Rats, and Rats sit inside Bats.",
   "simg": [
    {
     "src": "m3-5-3-sol.png"
    }
   ],
   "steps": [
    "I: the cats that are rats are inside Bats too. <b>Follows</b>.",
    "II: Bats is a bigger group; many bats need not be cats. <b>Does not follow</b>.",
    "Only I follows."
   ]
  },
  {
   "label": "3.5.4",
   "q": "Statements: No pen is a pencil. All pencils are erasers. Conclusions: I. No pencil is a pen. II. Some erasers are pens.",
   "opts": [
    "Both I and II follow",
    "Only I follows",
    "Only II follows",
    "Neither follows"
   ],
   "a": 1,
   "key": "\"No A is B\" can be turned round: \"No B is A\".",
   "simg": [
    {
     "src": "m3-5-4-sol.png"
    }
   ],
   "steps": [
    "I is the direct turn-round of \"No pen is a pencil\". <b>Follows</b>.",
    "II: pens are outside Pencils. Pens may or may not touch Erasers, so \"Some erasers are pens\" is not certain. <b>Does not follow</b>.",
    "Only I follows."
   ]
  },
  {
   "label": "3.5.5",
   "q": "Statements: All books are papers. All papers are files. Conclusions: I. All books are files. II. Some files are papers.",
   "opts": [
    "Both I and II follow",
    "Only I follows",
    "Only II follows",
    "Neither follows"
   ],
   "a": 0,
   "key": "Another chain: Books inside Papers inside Files.",
   "simg": [
    {
     "src": "m3-5-5-sol.png"
    }
   ],
   "steps": [
    "I: Books are inside Papers, which are inside Files. <b>Valid</b>.",
    "II: \"All papers are files\" gives \"Some files are papers\". <b>Valid</b>.",
    "Both follow."
   ]
  },
  {
   "label": "3.5.6",
   "q": "Statements: Some apples are sweet. All sweet things are healthy. Conclusions: I. Some apples are healthy. II. All healthy things are apples.",
   "opts": [
    "Only I follows",
    "Only II follows",
    "Both follow",
    "Neither follows"
   ],
   "a": 0,
   "key": "Apples overlap Sweet, and all of Sweet is inside Healthy.",
   "simg": [
    {
     "src": "m3-5-6-sol.png"
    }
   ],
   "steps": [
    "I: the apples that are sweet are inside Healthy. <b>Follows</b>.",
    "II: Healthy is a big group with many other things. <b>Does not follow</b>.",
    "Only I follows."
   ]
  },
  {
   "label": "3.5.7",
   "q": "Statements: All cars are vehicles. No vehicle is a boat. Conclusions: I. No car is a boat. II. Some vehicles are cars.",
   "opts": [
    "Only I follows",
    "Only II follows",
    "Both I and II follow",
    "Neither follows"
   ],
   "a": 2,
   "key": "Cars inside Vehicles; Boat separate from Vehicles.",
   "simg": [
    {
     "src": "m3-5-7-sol.png"
    }
   ],
   "steps": [
    "I: cars are inside Vehicles, and Vehicles do not touch Boat. So no car is a boat. <b>Follows</b>.",
    "II: \"All cars are vehicles\" gives \"Some vehicles are cars\". <b>Follows</b>.",
    "Both follow."
   ]
  },
  {
   "label": "3.5.8",
   "q": "Statements: Some birds fly. All flyers have wings. Conclusions: I. Some birds have wings. II. All birds fly.",
   "opts": [
    "Only I follows",
    "Only II follows",
    "Both follow",
    "Neither follows"
   ],
   "a": 0,
   "key": "Birds that fly are flyers, and flyers have wings.",
   "simg": [
    {
     "src": "m3-5-8-sol.png"
    }
   ],
   "steps": [
    "I: the birds that fly are flyers, and all flyers have wings. <b>Follows</b>.",
    "II: the statement says SOME birds fly, so \"All birds fly\" goes against it. <b>Does not follow</b>.",
    "Only I follows."
   ]
  },
  {
   "label": "3.5.9",
   "q": "Statements: All roses are flowers. Some flowers fade quickly. Conclusions: I. Some roses fade quickly. II. All flowers are roses.",
   "opts": [
    "Both follow",
    "Only I follows",
    "Only II follows",
    "Neither I nor II follows"
   ],
   "a": 3,
   "key": "The flowers that fade quickly may or may not be roses.",
   "simg": [
    {
     "src": "m3-5-9-sol.png"
    }
   ],
   "steps": [
    "I: the \"fade quickly\" flowers might be roses, or might not. It is uncertain. <b>Does not follow</b>.",
    "II: turning \"All roses are flowers\" into \"All flowers are roses\" is wrong. <b>Does not follow</b>.",
    "Neither follows."
   ]
  },
  {
   "label": "3.5.10",
   "q": "Statements: No student is lazy. Rahul is a student. Conclusions: I. Rahul is not lazy. II. All diligent people are students.",
   "opts": [
    "Both follow",
    "Only I follows",
    "Only II follows",
    "Neither follows"
   ],
   "a": 1,
   "key": "Rahul belongs to the group \"students\", and students are never lazy.",
   "simg": [
    {
     "src": "m3-5-10-sol.png"
    }
   ],
   "steps": [
    "I: Rahul is a student, and no student is lazy, so Rahul is not lazy. <b>Follows</b>.",
    "II brings in a new word (diligent) that is not in the statements. <b>Does not follow</b>.",
    "Only I follows."
   ]
  }
 ]
};
