/* ============================================================
   PAPER 1 – Employability Skills Model Question Paper (Section A)
   Format of every question:
   {
     q:      "question text (HTML allowed)",
     note0:  "optional direction line shown above options",
     img:    "optional image path (relative to site root)",
     opts:   ["A text","B text","C text","D text"],
     a:      0-3  (index of correct option: A=0, B=1, C=2, D=3),
     key:    "KEY IDEA text",
     steps:  ["step 1","step 2", ...],
     table:  { head:[..], rows:[[..],[..]] }   // optional
     tip:    "optional TIP",
     watch:  "optional WATCH OUT",
     note:   "optional NOTE (printing mistake explained)"
   }
   ============================================================ */
window.PAPERS = window.PAPERS || {};
window.PAPERS["paper1"] = {
  id: "paper1",
  title: "Employability Skills – Model Paper 1",
  subtitle: "Section A · 65 questions",
  sections: [
    { name: "Quantitative Aptitude", from: 1, to: 20 },
    { name: "Reasoning: Coding, Directions, Relations, Calendar", from: 21, to: 34 },
    { name: "Series, Seating & Logical Reasoning", from: 35, to: 48 },
    { name: "Data Interpretation", from: 49, to: 53 },
    { name: "Non-Verbal, Analogy & Computer", from: 54, to: 65 }
  ],
  questions: [
/* 1 */ {
  q: "In an examination, a student must secure 40% marks to pass. Rahul secured 175 marks and failed by 25 marks. What was the total maximum marks of the examination?",
  opts: ["400","500","600","450"], a: 1,
  key: "Pass marks = the marks you got + the marks you were short by. That pass mark is 40% of the full paper.",
  steps: ["Pass marks = 175 + 25 = 200.","200 is 40% of the maximum marks M, so (40/100) × M = 200.","M = 200 × 100 / 40 = 500.","Check: 40% of 500 = 200, and 200 − 175 = 25 short. It matches the question."],
  tip: "“Failed by x marks” always means: Pass mark = Obtained + x."
},
/* 2 */ {
  q: "A shopkeeper buys a laptop for Rs.45,000 and spends Rs.3,000 on transportation. If he sells it for Rs.52,800, what is his profit percentage?",
  opts: ["8%","10%","12%","15%"], a: 1,
  key: "Transport is part of the cost. Add it to the buying price first, then find profit % on that total cost.",
  steps: ["Cost price = 45,000 + 3,000 = Rs.48,000.","Profit = Selling price − Cost price = 52,800 − 48,000 = Rs.4,800.","Profit % = (4,800 / 48,000) × 100 = 10%."],
  tip: "Extra expenses (transport, repairs) are added to the cost price before finding profit."
},
/* 3 */ {
  q: "An electronics store marks a TV at Rs.80,000. It offers two successive discounts of 15% and 10%. Find the final selling price.",
  opts: ["Rs.61,200","Rs.60,000","Rs.62,400","Rs.58,000"], a: 0,
  key: "Successive discounts are applied one after another, each on the new reduced price. Never add them.",
  steps: ["After 15% off: 80,000 × 85/100 = Rs.68,000.","After 10% off on 68,000: 68,000 × 90/100 = Rs.61,200.","Quick check: one equal discount = 15 + 10 − (15×10)/100 = 23.5%, and 80,000 × 76.5% = Rs.61,200."],
  watch: "Adding 15% + 10% = 25% gives Rs.60,000. That is the trap option (B)."
},
/* 4 */ {
  q: "A and B start a business with investments of Rs.35,000 and Rs.45,000 respectively. What is the ratio of their profit sharing at the end of a year?",
  opts: ["9:7","5:7","7:9","3:5"], a: 2,
  key: "Same time period means profit is shared in the same ratio as the money invested.",
  steps: ["Write the ratio: 35,000 : 45,000.","Divide both by 5,000: 7 : 9.","A is named first, so A's share comes first: 7 : 9 (not 9 : 7)."],
  tip: "If the time periods are different, use (investment × time) for each partner."
},
/* 5 */ {
  q: "A train 180 meters long is moving at a uniform speed of 54 km/h. How many seconds will it take to cross a platform 270 meters long?",
  opts: ["25 seconds","30 seconds","35 seconds","20 seconds"], a: 1,
  key: "To cross a platform, the train must travel its own length PLUS the platform length. Change km/h to m/s first.",
  steps: ["Total distance = 180 + 270 = 450 m.","Speed in m/s = 54 × 5/18 = 15 m/s.","Time = Distance / Speed = 450 / 15 = 30 seconds."],
  tip: "km/h to m/s: multiply by 5/18. m/s to km/h: multiply by 18/5."
},
/* 6 */ {
  q: "A boatman rows 9 km/h in still water. If the river current speed is 3 km/h, find the total time taken to row 36 km downstream and return.",
  opts: ["8 hours","9 hours","10 hours","7.5 hours"], a: 1,
  key: "With the current the boat is faster (add). Against the current it is slower (subtract).",
  steps: ["Downstream speed = 9 + 3 = 12 km/h; upstream speed = 9 − 3 = 6 km/h.","Downstream time = 36 / 12 = 3 hours.","Return (upstream) time = 36 / 6 = 6 hours.","Total time = 3 + 6 = 9 hours."],
  table: { head:["Direction","Speed","Time = 36 / speed"], rows:[["Downstream (with current)","9 + 3 = 12 km/h","3 hours"],["Upstream (against current)","9 − 3 = 6 km/h","6 hours"]] },
  tip: "The return trip is slower, so it always takes longer."
},
/* 7 */ {
  q: "A person travels a distance of 120 km at 60 km/h and returns at 40 km/h. What is his average speed for the entire journey?",
  opts: ["45 km/h","50 km/h","48 km/h","52 km/h"], a: 2,
  key: "Average speed = total distance / total time. It is NOT (60 + 40)/2.",
  steps: ["Time going = 120 / 60 = 2 hours. Time returning = 120 / 40 = 3 hours.","Total distance = 240 km. Total time = 5 hours.","Average speed = 240 / 5 = 48 km/h.","Shortcut for equal distances: 2xy/(x + y) = 2 × 60 × 40 / 100 = 48."],
  watch: "Option (B) 50 is the trap. He spends MORE time at the slower speed, so the average is pulled below 50."
},
/* 8 */ {
  q: "If Simple Interest on a certain sum is Rs.360 for 2 years at 6% rate of interest per annum, find the principal amount.",
  opts: ["Rs.1,000","Rs.3,000","Rs.5,000","Rs.3,600"], a: 1,
  key: "Use SI = (P × R × T) / 100 and solve for P.",
  steps: ["Write the values: SI = 360, R = 6, T = 2.","Substitute: 360 = P × 6 × 2 / 100 = 0.12 × P.","P = 360 / 0.12 = Rs.3,000.","Check: 3,000 × 6 × 2 / 100 = 360 ✓"],
  tip: "Rearranged formula: P = (SI × 100) / (R × T)."
},
/* 9 */ {
  q: "What is the difference between compound interest and simple interest for 2 years on a sum of Rs.1,000 at 10% per annum?",
  opts: ["Rs.100","Rs.50","Rs.10","Rs.200"], a: 2,
  key: "Compound interest earns interest on interest. For 2 years the difference is only the interest on the first year's interest.",
  steps: ["Simple interest = 1,000 × 10 × 2 / 100 = Rs.200.","Compound amount = 1,000 × 1.10 × 1.10 = Rs.1,210, so CI = Rs.210.","Difference = 210 − 200 = Rs.10.","Shortcut for 2 years: CI − SI = P × (R/100)² = 1,000 × (0.1)² = Rs.10."],
  table: { head:["Year","Simple interest","Compound interest"], rows:[["Year 1","100","100"],["Year 2","100","110 (10% of 1,100)"],["Total","200","210"]] },
  tip: "The extra Rs.10 is exactly 10% of the first year's Rs.100 interest."
},
/* 10 */ {
  q: "The sum of two numbers is 60 and their difference is 6. What is the ratio of the two numbers?",
  opts: ["11:9","4:3","12:7","13:6"], a: 0,
  key: "Two clues (sum and difference) give two equations. Add them to find the bigger number.",
  steps: ["Let the numbers be x and y: x + y = 60 and x − y = 6.","Add the equations: 2x = 66, so x = 33. Then y = 60 − 33 = 27.","Ratio = 33 : 27. Divide both by 3 to get 11 : 9."],
  tip: "Bigger number = (sum + difference)/2. Smaller number = (sum − difference)/2."
},
/* 11 */ {
  q: "The average monthly income of a family of 5 members is Rs.24,000. If one earning member with monthly income Rs.40,000 leaves, what is the new average income?",
  opts: ["Rs.20,000","Rs.21,000","Rs.22,000","Rs.19,500"], a: 0,
  key: "Average × number of members = total. Change the total, then divide by the new number of members.",
  steps: ["Total income of 5 members = 5 × 24,000 = Rs.1,20,000.","One member (Rs.40,000) leaves: 1,20,000 − 40,000 = Rs.80,000 for 4 members.","New average = 80,000 / 4 = Rs.20,000."],
  tip: "Always go average → total → change the total → divide again."
},
/* 12 */ {
  q: "The ratio between two numbers is 3:4. If each number is increased by 2, the ratio becomes 7:9. Find the numbers.",
  opts: ["12 & 16","9 & 12","15 & 20","6 & 8"], a: 0,
  key: "Write the numbers as 3x and 4x, add 2 to each, and make an equation with the new ratio.",
  steps: ["Numbers are 3x and 4x. After adding 2: (3x + 2)/(4x + 2) = 7/9.","Cross-multiply: 9(3x + 2) = 7(4x + 2), so 27x + 18 = 28x + 14.","Solve: x = 4. Numbers = 3 × 4 = 12 and 4 × 4 = 16.","Check: (12 + 2)/(16 + 2) = 14/18 = 7/9 ✓"],
  tip: "You can also test the options: only 12 and 16 give 14:18 = 7:9."
},
/* 13 */ {
  q: "The ratio of present ages of Anand and Bharat is 4:5. Six years hence, the ratio becomes 5:6. What is Anand's present age?",
  opts: ["20 years","24 years","30 years","18 years"], a: 1,
  key: "Present ages are 4x and 5x. Add 6 years to both and match the new ratio.",
  steps: ["(4x + 6)/(5x + 6) = 5/6.","Cross-multiply: 6(4x + 6) = 5(5x + 6), so 24x + 36 = 25x + 30.","x = 6. Anand = 4 × 6 = 24 years (Bharat = 30).","Check: after 6 years 30 : 36 = 5 : 6 ✓"],
  watch: "The question asks for ANAND's age, so give 4x = 24, not 5x = 30."
},
/* 14 */ {
  q: "In how many different ways can the letters of the word 'FIGHT' be arranged?",
  opts: ["50","5","120","4"], a: 2,
  key: "If all n letters are different, the number of arrangements is n! (n factorial).",
  steps: ["Count the letters: F, I, G, H, T = 5 letters, all different.","Choose a letter for each place: 5 choices, then 4, then 3, then 2, then 1.","Arrangements = 5! = 5 × 4 × 3 × 2 × 1 = 120."],
  tip: "If letters repeat (like LETTER), divide by the factorial of each repeat count."
},
/* 15 */ {
  q: "In how many ways can a committee of 5 people be chosen from 7 men and 4 women such that it contains exactly 3 men?",
  opts: ["140","210","350","105"], a: 1,
  key: "“Exactly 3 men” forces the other 2 members to be women. Choose men and women separately, then multiply.",
  steps: ["Choose 3 men from 7: C(7,3) = (7 × 6 × 5)/(3 × 2 × 1) = 35.","Choose 2 women from 4: C(4,2) = (4 × 3)/(2 × 1) = 6.","Total committees = 35 × 6 = 210."],
  tip: "Use multiplication when both choices must happen together (men AND women)."
},
/* 16 */ {
  q: "Two unbiased coins are tossed simultaneously. What is the probability of getting at most one head?",
  opts: ["2/3","3/4","1/2","1/4"], a: 1,
  key: "List all outcomes, then count those with 0 or 1 head.",
  steps: ["Two coins give 4 outcomes: HH, HT, TH, TT.","“At most one head” means 0 or 1 head: HT, TH and TT = 3 outcomes.","P = 3/4. Check: 1 − P(HH) = 1 − 1/4 = 3/4."],
  table: { head:["Outcome","HH","HT","TH","TT"], rows:[["Heads","2","1","1","0"],["At most 1 head?","No","Yes","Yes","Yes"]] },
  tip: "“At most” = that number or fewer. “At least” = that number or more."
},
/* 17 */ {
  q: "In a single throw of a die, what is the probability of getting a number greater than 4?",
  opts: ["2/5","1/6","4/6","1/3"], a: 3,
  key: "Probability = favourable outcomes / total outcomes.",
  steps: ["Total outcomes = 6 (1, 2, 3, 4, 5, 6).","Numbers greater than 4 are 5 and 6, so favourable = 2.","P = 2/6 = 1/3."],
  watch: "“Greater than 4” does not include 4 itself."
},
/* 18 */ {
  q: "The length of a rectangular plot is 4 m more than its breadth. If the perimeter is 88 m, find the area of the plot.",
  opts: ["476 sq. m","480 sq. m","520 sq. m","440 sq. m"], a: 1,
  key: "Use the perimeter 2(l + b) to find l and b, then Area = l × b.",
  steps: ["Let breadth = b, so length = b + 4.","Perimeter: 2(b + b + 4) = 88, so 2b + 4 = 44 and b = 20 m. Length = 24 m.","Area = 24 × 20 = 480 sq. m."],
  tip: "Half the perimeter (44) is l + b. With l − b = 4 you get l = 24 and b = 20 at once."
},
/* 19 */ {
  q: "Find the circumference of a circle whose radius is 14 cm. (Use π = 22/7)",
  opts: ["176 cm","44 cm","88 cm","616 cm"], a: 2,
  key: "Circumference of a circle = 2 × π × r.",
  steps: ["Substitute: C = 2 × (22/7) × 14.","14 / 7 = 2, so C = 2 × 22 × 2 = 88 cm."],
  watch: "616 is the AREA (π × r × r). 44 would be the circumference only if r were 7."
},
/* 20 */ {
  q: "If the area of a square is 144 cm², what is its perimeter?",
  opts: ["52 cm","36 cm","24 cm","48 cm"], a: 3,
  key: "Area = side × side, so side = square root of the area. Then perimeter = 4 × side.",
  steps: ["Side = √144 = 12 cm.","Perimeter = 4 × 12 = 48 cm."],
  watch: "Do not mix up area (cm²) with perimeter (cm)."
},
/* 21 */ {
  q: "If 'DELHI' is coded as 'EFMIJ', how will 'MUMBAI' be coded in that same language?",
  opts: ["NVNCBJ","NVNCAJ","NVNCBJ","NVNDBJ"], a: 0,
  key: "Compare each letter with the coded letter in the same position. If all letters move by the same amount, it is a fixed shift.",
  steps: ["Find the rule from DELHI: D→E, E→F, L→M, H→I, I→J. Every letter moves +1.","Apply +1 to every letter of MUMBAI: M→N, U→V, M→N, B→C, A→B, I→J.","The coded word is NVNCBJ."],
  tip: "Check the rule on the first two letters, then confirm it on the rest.",
  note: "In the printed paper options (A) and (C) are identical (both NVNCBJ). (B) has A instead of B, and (D) has D instead of C, so both are wrong. Choose (A) as per the key."
},
/* 22 */ {
  q: "In a code language, if TRAINS is coded as RTIASN, how will FLOWER be coded in the same language?",
  opts: ["LFOWER","LFWORE","WORELF","ERFLOW"], a: 1,
  key: "Split the word into pairs of two letters. In each pair the two letters swap places.",
  steps: ["Check TRAINS: pairs TR, AI, NS become RT, IA, SN. Joined: RTIASN. The rule works.","FLOWER has 6 letters = 3 pairs: FL, OW, ER.","Swap each pair: LF, WO, RE. Coded word = LFWORE."],
  watch: "Option (A) LFOWER is wrong because OW and ER were not swapped. Swap EVERY pair."
},
/* 23 */ {
  q: "If MIRROR is coded as 1391818181518 in a certain code language, how will APPLE be coded?",
  opts: ["11616125","3984145","1162254","11213147"], a: 0,
  key: "Each letter is replaced by its alphabet position, and the numbers are written side by side.",
  steps: ["Test on MIRROR: M=13, I=9, R=18, R=18, O=15, R=18 written together.","Positions for APPLE: A=1, P=16, P=16, L=12, E=5.","Join without spaces: 1 | 16 | 16 | 12 | 5 = 11616125."],
  tip: "Write each position under its letter, then join them without spaces.",
  note: "MIRROR really gives 13-9-18-18-15-18 = 13918181518, but the printed code has one extra '18'. It looks like a typing slip. The alphabet-position rule is clear and gives option (A)."
},
/* 24 */ {
  q: "Rohan walks 12 km North, then turns Right and walks 5 km. How far and in which direction is he from the starting point?",
  opts: ["15 km North-East","17 km North","13 km South-East","13 km North-East"], a: 3,
  key: "Draw the path. The two walks make a right angle, so the distance from the start is the slanted side of a right triangle.",
  steps: ["Facing North, a right turn points East. So he walks 12 km North, then 5 km East.","Distance = √(12² + 5²) = √(144 + 25) = √169 = 13 km.","He is North of the start and East of the start, so the direction is North-East."],
  tip: "Learn the triples: 3-4-5, 5-12-13, 6-8-10, 8-15-17. You will spot them instantly."
},
/* 25 */ {
  q: "A man walks 6 km South, turns Left and walks 8 km. How far is he from his starting point?",
  opts: ["10 km","14 km","12 km","8 km"], a: 0,
  key: "One 90-degree turn makes a right triangle. The distance from the start is the slanted side.",
  steps: ["Facing South, your left hand points East. So he walks 6 km South, then 8 km East.","Distance = √(6² + 8²) = √(36 + 64) = √100 = 10 km."],
  tip: "The turn only decides the direction. The distance would still be 10 km for a left or a right turn."
},
/* 26 */ {
  q: "Tom walked 10 m towards north then turned right and walked 25 m. Then he turned right and walked 30 m. Now he turned left and walked 10 m. Finally, he turned left and walked 20 m. How far and in which direction is he from starting point?",
  opts: ["50 m East","35 m East","40 m North","30 m North"], a: 1,
  key: "Track his position on a grid: East is +x, North is +y. After every turn, update the direction he is facing.",
  steps: ["Start at (0, 0), facing North. Walk 10 m: now at (0, 10).","Right turn gives East. Walk 25 m: (25, 10).","Right turn gives South. Walk 30 m: (25, −20).","Left turn (from South) gives East. Walk 10 m: (35, −20).","Left turn (from East) gives North. Walk 20 m: (35, 0). So he is 35 m East of the start."],
  table: { head:["Move","Turn","Facing","Walk","Position (x, y)"], rows:[["1","–","North","10 m","(0, 10)"],["2","Right","East","25 m","(25, 10)"],["3","Right","South","30 m","(25, −20)"],["4","Left","East","10 m","(35, −20)"],["5","Left","North","20 m","(35, 0)"]] },
  tip: "From South, left = East. From East, left = North. Re-check the facing direction after every turn."
},
/* 27 */ {
  q: "Pointing to a photograph, Priya said, 'His mother's only daughter is my mother.' How is Priya related to the man in the photograph?",
  opts: ["Niece","Sister","Daughter","Mother"], a: 0,
  key: "Work from the inside of the sentence outwards, one link at a time.",
  steps: ["“His mother's only daughter” = the man's own sister.","Priya says this person is her mother. So Priya's mother = the man's sister.","Priya is the daughter of the man's sister, so she is his niece."],
  tip: "Brother's or sister's daughter = niece. Brother's or sister's son = nephew."
},
/* 28 */ {
  q: "Nicholas said, 'This girl is the wife of the grandson of my mother.' Who is Nicholas to this girl?",
  opts: ["Father","Husband","Grandfather","Father-in-law"], a: 3,
  key: "Break the sentence into links: Nicholas's mother, then her grandson, then his wife.",
  steps: ["Nicholas's mother's grandson = the son of Nicholas (the standard reading for this pattern).","The girl is the wife of Nicholas's son, so she is Nicholas's daughter-in-law.","So Nicholas is her father-in-law."],
  tip: "“Grandson of my mother” is taken as “my son” in this question set."
},
/* 29 */ {
  q: "Pointing towards a photograph Mr. Sharma said, 'She is the only daughter of mother of my brother's sister.' How is Mr. Sharma related to the lady in the photograph?",
  opts: ["Cousin","Brother","Sister","Uncle"], a: 1,
  key: "Decode from right to left: my brother's sister, then her mother, then that mother's only daughter.",
  steps: ["“My brother's sister” = Sharma's own sister.","“Mother of my brother's sister” = Sharma's mother.","“Only daughter of Sharma's mother” = Sharma's sister. So the lady is Sharma's sister.","Mr. Sharma is male, so he is her brother."],
  watch: "The question asks Sharma's relation TO the lady (brother), not the lady's relation to him (sister)."
},
/* 30 */ {
  q: "If Vivekananda Jayanthi in 2018 fell on Friday, then on which day of the week did Vivekananda Jayanthi fall in 2019?",
  opts: ["Sunday","Monday","Tuesday","Saturday"], a: 3,
  key: "An ordinary year (365 days) = 52 weeks + 1 day, so the same date moves ONE weekday forward. A leap day would add one more.",
  steps: ["Vivekananda Jayanthi is on 12 January. From 12 Jan 2018 to 12 Jan 2019 there is no 29 February.","So the number of odd days = 365 mod 7 = 1.","Friday + 1 day = Saturday."],
  tip: "The leap-year effect counts only if 29 February falls between the two dates."
},
/* 31 */ {
  q: "Today is Sunday. What day of the week will it be after 65 days?",
  opts: ["Sunday","Monday","Tuesday","Wednesday"], a: 2,
  key: "The week repeats every 7 days, so only the remainder after dividing by 7 matters.",
  steps: ["65 / 7 = 9 weeks and a remainder of 2 (9 × 7 = 63; 65 − 63 = 2).","Move 2 days forward from Sunday: Monday, then Tuesday."],
  tip: "Odd days = the remainder when the number of days is divided by 7."
},
/* 32 */ {
  q: "Which of the following years is a leap year?",
  opts: ["2000","1900","1800","2100"], a: 0,
  key: "A year is a leap year if it is divisible by 4. A century year (ending in 00) must be divisible by 400.",
  steps: ["Test each century year by dividing by 400.","2000 / 400 = 5, so 2000 is a leap year.","1900, 1800 and 2100 are not divisible by 400, so they are not leap years."],
  table: { head:["Year","Divisible by 400?","Leap year?"], rows:[["2000","2000 / 400 = 5 → Yes","Yes"],["1900","No (4.75)","No"],["1800","No (4.5)","No"],["2100","No (5.25)","No"]] },
  tip: "Century years are the only trap. Divide by 400, not by 4."
},
/* 33 */ {
  q: "What is the angle between the hour hand and the minute hand of a clock at 3:30 PM?",
  opts: ["105°","85°","75°","90°"], a: 2,
  key: "The hour hand moves 0.5° per minute. The minute hand moves 6° per minute. Measure both from 12.",
  steps: ["Hour hand at 3:30 = 3 × 30 + 30 × 0.5 = 90 + 15 = 105°.","Minute hand at 30 minutes = 30 × 6 = 180°.","Angle = 180° − 105° = 75°.","Formula check: |30 × 3 − 5.5 × 30| = |90 − 165| = 75°."],
  tip: "At half past, the hour hand is halfway between two numbers, not on the number."
},
/* 34 */ {
  q: "The angle between the minute hand and the hour hand of a clock when the time is 4:20 is:",
  opts: ["0°","10°","5°","20°"], a: 1,
  key: "Same method: find each hand's angle from 12 and subtract.",
  steps: ["Hour hand at 4:20 = 4 × 30 + 20 × 0.5 = 120 + 10 = 130°.","Minute hand at 20 minutes = 20 × 6 = 120°.","Angle = 130° − 120° = 10°.","Formula check: |30 × 4 − 5.5 × 20| = |120 − 110| = 10°."],
  watch: "Do not put the hour hand exactly on 4 (120°). It has moved on by 10° by 4:20."
},
/* 35 */ {
  q: "Find the next number in the series: 4, 6, 9, 13, 18, ?",
  opts: ["23","24","25","26"], a: 1,
  key: "Look at the gap between each pair of neighbours. If the gaps are not equal, check whether the gaps follow a pattern.",
  steps: ["Gaps: 6 − 4 = 2, 9 − 6 = 3, 13 − 9 = 4, 18 − 13 = 5.","The gap grows by 1 each time, so the next gap is +6.","Next number = 18 + 6 = 24."],
  tip: "If differences are not constant, look at whether the differences themselves form a pattern."
},
/* 36 */ {
  q: "Complete the letter series: H, L, P, T, ?",
  opts: ["V","Z","X","Y"], a: 2,
  key: "Turn each letter into its position in the alphabet, then look for the gap.",
  steps: ["H = 8, L = 12, P = 16, T = 20.","Each letter is +4 places after the previous one.","Next position = 24, and position 24 is X."],
  tip: "Position 24 is X (A=1 … X=24)."
},
/* 37 */ {
  q: "M, N, O, P, R are sitting together. P is at extreme right. N is to the immediate left of O. R is in between M and N. Who is sitting to the immediate left of P?",
  opts: ["M","R","O","N"], a: 2,
  key: "Build the row one clue at a time. Fix the extreme end first, then join the pairs.",
  steps: ["Clue 1: P is at the extreme right: _ _ _ _ P.","Clue 2: N is immediately left of O, so “N O” stay together in that order.","Clue 3: R is between M and N: M R N.","Join them: <b>M R N O P</b>. The person just left of P is O."],
  tip: "Fix the extreme end first, then join people who must be next to each other."
},
/* 38 */ {
  q: "Five friends are sitting on a bench facing North. Sushma is to the immediate left of Raksha and immediate right of Bindia. Meena is right to Raksha. Tina is exactly between Raksha and Meena. Who is sitting at the rightmost end?",
  opts: ["Tina","Meena","Sushma","Raksha"], a: 1,
  key: "Facing North, left is West and right is East, so the left-to-right order is the order the sitters see.",
  steps: ["Sushma is immediately left of Raksha and immediately right of Bindia: Bindia – Sushma – Raksha.","Meena is to the right of Raksha, and Tina is exactly between them: Raksha – Tina – Meena.","Join both parts: <b>Bindia, Sushma, Raksha, Tina, Meena</b>. The rightmost person is Meena."],
  tip: "Facing North, right = East. If they faced South, left and right would swap."
},
/* 39 */ {
  q: "In a class rank list of 45 students, Suresh ranks 11th from the top. What is his rank from the bottom?",
  opts: ["34th","35th","36th","33rd"], a: 1,
  key: "Rank from bottom = Total − Rank from top + 1.",
  steps: ["Students above Suresh = 11 − 1 = 10.","Students below Suresh = 45 − 11 = 34.","His rank from the bottom = 34 + 1 = 35th (add 1 for Suresh himself)."],
  watch: "Do not forget the +1 for Suresh himself. Answer (A) 34th forgets him."
},
/* 40 */ {
  q: "The total of the ages of Amar, Akbar, and Anthony is 80 years. What was the total of their ages 3 years ago?",
  opts: ["71 Years","72 Years","74 Years","77 Years"], a: 0,
  key: "Each of the three people was 3 years younger, so the total falls by 3 years for EACH person.",
  steps: ["Total decrease = 3 persons × 3 years = 9 years.","Total 3 years ago = 80 − 9 = 71 years."],
  watch: "Subtracting only 3 gives 77 (option D). Multiply 3 by the number of persons."
},
/* 41 */ {
  q: "<b>Statement:</b> Govt. of India announced subsidies for EV buyers to reduce urban air pollution.<br><b>Conclusions:</b> I. Electric Vehicles produce zero tailpipe emissions. II. People will buy only EVs from now on.",
  opts: ["Only Conclusion I follows","Only Conclusion II follows","Both I and II follow","Neither I nor II follows"], a: 0,
  key: "A conclusion follows only if the statement supports it directly. Extreme words like “only” are a warning sign.",
  steps: ["Conclusion I: the government pays for EVs to cut pollution. This works because EVs have no exhaust from the tailpipe. It supports the statement, so it follows.","Conclusion II: “only EVs from now on” is an extreme guess. Subsidies encourage EVs but do not stop people buying other vehicles, so it does not follow.","So only Conclusion I follows."],
  tip: "Words like only, all and never in a conclusion are warning signs.",
  note: "This is a judgement-type question. The answer given is the standard one for this pattern."
},
/* 42 */ {
  q: "<b>Statement:</b> Everybody loves reading adventure stories.<br><b>Assumptions:</b> I. Adventure stories are the only reading material. II. Nobody loves reading any other material.",
  opts: ["Only assumption I is implicit","Only assumption II is implicit","Either I or II is implicit","Neither I nor II is implicit"], a: 3,
  key: "An assumption is something the speaker must take for granted for the statement to make sense. Absolute claims are rarely assumed.",
  steps: ["Assumption I says adventure stories are the ONLY reading material. The statement only says everybody loves them. Other material may exist. Not implicit.","Assumption II says nobody loves any other material. People can love adventure stories and other books too. Not implicit.","So neither is implicit."],
  tip: "Test it: would the statement collapse if the assumption were false? Here it would not."
},
/* 43 */ {
  q: "<b>Statement:</b> Should Indian universities offer online degrees for all courses?<br><b>Arguments:</b> I. Yes, it helps rural students access higher education. II. No, it lacks practical lab experience and hands-on exposure.",
  opts: ["Both I and II are strong","Only I is strong","Only II is strong","Neither is strong"], a: 0,
  key: "A strong argument is important, specific and directly connected to the question. Judge each argument on its own.",
  steps: ["Argument I: online degrees remove distance and cost barriers for rural students. It is a real benefit and relevant, so it is strong.","Argument II: science, engineering and medicine need labs and hands-on practice, which online mode cannot fully give. It is real and relevant, so it is strong.","Both are strong, even though they point in opposite directions."],
  tip: "Two opposite arguments can both be strong. Judge them separately."
},
/* 44 */ {
  q: "Which of the following represents the best relation between Women, Sisters and others",
  img: "q44.png",
  opts: ["Diagram A","Diagram B","Diagram C","Diagram D"], a: 0,
  key: "Decide how each pair of groups is related: inside, overlapping or separate. Then match the diagram.",
  steps: ["Every sister is a woman and every mother is a woman, so the Sisters and Mothers circles lie <b>inside</b> the Women circle.","A woman can be both a sister and a mother, so the Sisters and Mothers circles must <b>overlap</b>.","Only diagram (A) shows both of these."],
  table: { head:["Diagram","What it shows","Correct?"], rows:[["(A)","Sisters and Mothers overlap, both inside Women","Yes"],["(B)","Sisters and Mothers separate, inside Women","No – ignores the overlap"],["(C)","Three separate circles","No – sisters and mothers are women"],["(D)","Women inside Mothers (reversed)","No"]] },
  tip: "Ask: can one person belong to both groups? If yes, draw overlapping circles.",
  note: "The paper's heading says 'Women, Sisters and others', but the diagrams use Sisters, Mothers and Women, so the question is read as that relation."
},
/* 45 */ {
  q: "By which letter, the married teachers who live in joint family are represented?",
  note0: "Directions for Q45 and Q46: Rectangle = Married people; Circle = People who live in joint family; Triangle = School teachers.",
  img: "q45.png",
  opts: ["R","U","U","Q"], a: 3,
  key: "“Married teachers who live in a joint family” needs ALL THREE properties, so look for the region common to the rectangle, the triangle and the circle.",
  steps: ["Read each region of the figure (see the table).","The region inside all three shapes is <b>Q</b>."],
  table: { head:["Region","Inside which shapes","Meaning"], rows:[["U","Triangle only","Teachers, not married, not joint family"],["Q","Triangle + Rectangle + Circle","Married teachers in joint family"],["R","Triangle + Rectangle","Married teachers, not joint family"],["S","Rectangle + Circle","Married, joint family, not teachers"],["T","Circle only","Joint family, not married, not teachers"],["P","Rectangle only","Married only"]] },
  tip: "For “A and B and C”, look for the region where all three shapes overlap.",
  note: "Options (B) and (C) are both printed as 'U' in the paper."
},
/* 46 */ {
  q: "By which letter, the people who live in joint family but are neither married nor teachers are represented?",
  note0: "Refer to the same figure as Question 45. (Rectangle = Married people; Circle = Joint family; Triangle = School teachers.)",
  img: "q45.png",
  opts: ["T","R","S","Q"], a: 0,
  key: "We need the part inside the circle only: outside the rectangle (not married) AND outside the triangle (not teachers).",
  steps: ["Regions inside the circle: T, S and Q.","S and Q are also inside the rectangle (married), so remove them. Q is also inside the triangle.","The region inside the circle only is <b>T</b>."],
  tip: "“Neither … nor” means outside both of those shapes."
},
/* 47 */ {
  q: "<b>Statements:</b> All laptops are computers. Some computers are mobile phones.<br><b>Conclusions:</b> I. Some laptops are mobile phones. II. Some computers are laptops.",
  opts: ["Only Conclusion I follows","Only Conclusion II follows","Either I or II follows","Neither I nor II follows"], a: 1,
  key: "Draw it: Laptops sit completely inside Computers. Mobile phones overlap only PART of Computers.",
  steps: ["Conclusion I: the mobile-phone part of Computers may lie completely outside Laptops, so we cannot say any laptop is a mobile phone. Does not follow.","Conclusion II: all laptops are computers, so some computers (the laptops) are laptops. Follows.","So only Conclusion II follows."],
  tip: "“All A are B” always gives “Some B are A”, but never “All B are A”."
},
/* 48 */ {
  q: "<b>Statements:</b> All dogs are mammals. All mammals are animals.<br><b>Conclusions:</b> I. All dogs are animals. II. Some animals are dogs.",
  opts: ["Both I and II follow","Only I follows","Only II follows","Neither follows"], a: 0,
  key: "Draw three circles, one inside the other: Dogs inside Mammals inside Animals.",
  steps: ["Conclusion I: Dogs are inside Mammals, which are inside Animals. So all dogs are animals. Follows.","Conclusion II: if all dogs are animals, then some animals (the dogs) are dogs. Follows.","Both follow."],
  tip: "Two “All” statements in a chain give an “All” conclusion, and its converse gives a “Some” conclusion."
},
/* 49 */ {
  q: "What is the total number of students who passed from Colleges A and C?",
  note0: "Directions for Q49–53: The table shows the number of students admitted and the percentage who passed in five colleges.",
  data: { head:["College","Admitted","% Passed"], rows:[["A","800","75%"],["B","1,200","65%"],["C","1,500","72%"],["D","1,000","80%"],["E","900","60%"]] },
  opts: ["1,560","1,680","1,720","1,800"], a: 1,
  key: "Passed = % passed × students admitted. Work it out for every college ONCE; the same table answers Q49 to Q53.",
  steps: ["College A passed = 0.75 × 800 = 600.","College C passed = 0.72 × 1,500 = 1,080.","Total = 600 + 1,080 = 1,680."],
  table: { head:["College","Admitted","% Passed","Passed","Failed"], rows:[["A","800","75%","600","200"],["B","1,200","65%","780","420"],["C","1,500","72%","1,080","420"],["D","1,000","80%","800","200"],["E","900","60%","540","360"]] },
  tip: "Work out the 'passed' column once and reuse it for all five questions."
},
/* 50 */ {
  q: "What is the ratio of students who passed in College C to those who failed in College E?",
  data: { head:["College","Admitted","% Passed"], rows:[["A","800","75%"],["B","1,200","65%"],["C","1,500","72%"],["D","1,000","80%"],["E","900","60%"]] },
  opts: ["2:1","3:1","3:2","4:1"], a: 1,
  key: "Passed in C comes from the table. Failed in E = (100% − 60%) of 900.",
  steps: ["Passed in College C = 1,080.","Failed in College E = 40% of 900 = 360.","Ratio = 1,080 : 360. Divide both by 360 to get 3 : 1."],
  tip: "Failed % = 100 − Passed %."
},
/* 51 */ {
  q: "What is the average number of students who passed in all five colleges?",
  data: { head:["College","Admitted","% Passed"], rows:[["A","800","75%"],["B","1,200","65%"],["C","1,500","72%"],["D","1,000","80%"],["E","900","60%"]] },
  opts: ["730","750","760","780"], a: 2,
  key: "Average = total passed / number of colleges.",
  steps: ["Passed: A = 600, B = 780, C = 1,080, D = 800, E = 540.","Total = 600 + 780 + 1,080 + 800 + 540 = 3,800.","Average = 3,800 / 5 = 760."],
  tip: "Add in pairs to avoid mistakes: 600 + 800 = 1,400 and 780 + 540 = 1,320. Then add 1,080."
},
/* 52 */ {
  q: "What is the difference between the number of students who passed from College C and College B?",
  data: { head:["College","Admitted","% Passed"], rows:[["A","800","75%"],["B","1,200","65%"],["C","1,500","72%"],["D","1,000","80%"],["E","900","60%"]] },
  opts: ["250","280","300","320"], a: 2,
  key: "Subtract the number who passed in B from the number who passed in C.",
  steps: ["Passed in C = 1,080. Passed in B = 780.","Difference = 1,080 − 780 = 300."],
  tip: "C has more admissions and a higher pass percentage, so the difference is positive."
},
/* 53 */ {
  q: "The number of students passing from College D is how much more than the number passing from College A?",
  data: { head:["College","Admitted","% Passed"], rows:[["A","800","75%"],["B","1,200","65%"],["C","1,500","72%"],["D","1,000","80%"],["E","900","60%"]] },
  opts: ["25%","30%","33 1/3 %","40%"], a: 2,
  key: "“How much % more” = (Difference / the number we compare with) × 100. The comparison base is College A.",
  steps: ["Passed in D = 800. Passed in A = 600.","Difference = 800 − 600 = 200.","% more = (200 / 600) × 100 = 33 1/3 %."],
  watch: "The base is the number after the word 'than' (College A), not the bigger number.",
  note: "The printed option reads '33?%' (the fraction sign is unclear in the scan). The working gives 33 1/3 %."
},
/* 54 */ {
  q: "Find the mirror image of the word MARKET.",
  img: "q54.png",
  opts: ["TEKRAN","TEKRAM","KRAMET","MARKET with every letter flipped (see figure)"], a: 3,
  key: "In a mirror image two things happen together: the ORDER of the letters is reversed AND each letter is flipped left-to-right.",
  steps: ["Reverse the order of the letters: M-A-R-K-E-T becomes T-E-K-R-A-M.","Now flip each letter sideways. T, A and M look the same, but E, K and R turn into their reflections.","Only option (D) shows the letters flipped. (B) TEKRAM has the right order but the letters are not flipped, so it is only half the mirror change."],
  tip: "Letters that look the same in a mirror: T, A, M, H, I, O. Letters that change: E, K, R, S, B, C, D, F, G, J, L, N, P, Q, Z.",
  note: "If your textbook counts a mirror image as only a reversal of letter order, its key may say (B) TEKRAM. By the proper rule of lateral inversion the answer is (D)."
},
/* 55 */ {
  q: "Choose the alternative that correctly represents the Water image of the question figure.",
  img: "q55.png",
  opts: ["Answer figure A","Answer figure B","Answer figure C","Answer figure D"], a: 0,
  key: "A water image is a reflection below the object: the figure is flipped TOP to BOTTOM. Left and right stay where they are.",
  steps: ["Look at the question figure: the beak points LEFT near the top, a diagonal runs lower-left to upper-right, a dot sits at the upper right, and the funnel base is at the BOTTOM.","Flip it top-to-bottom: the base goes to the TOP, the beak points left near the bottom, the diagonal now runs upper-left to lower-right, and the dot moves to the lower right.","Compare with the options. Only (A) matches all of these."],
  table: { head:["Option","Base","Beak","Dot","Match?"], rows:[["(A)","Top","Left, lower","Lower right","Yes"],["(B)","Top","Right","Lower left","No – left and right swapped"],["(C)","Top","Left","Upper right","No – dot not flipped"],["(D)","Top","Right","Upper left","No"]] },
  tip: "Water image = top/bottom flip. Mirror image = left/right flip."
},
/* 56 */ {
  q: "Identify the figure that completes the pattern.",
  img: "q56.png",
  opts: ["Figure A","Figure B","Figure C","Figure D"], a: 3,
  key: "Find the smallest repeating unit of the grid, then see what the missing block must contain.",
  steps: ["Every small rectangle in the grid has the same design: ONE straight line from the bottom-left corner to the top-right corner.","The block marked '?' is as tall as TWO small rectangles, so it must hold two stacked rectangles, each with one such rising line.","Option (D) has exactly two stacked rectangles with one rising line in each."],
  table: { head:["Option","What it contains","Match?"], rows:[["(A)","Extra criss-crossing lines in each half","No"],["(B)","Vertical split with lines leaning the other way","No"],["(C)","Diagonal in the lower half only","No"],["(D)","Two stacked rectangles, one rising line in each","Yes"]] },
  tip: "In pattern-completion questions, find the smallest repeating unit first."
},
/* 57 */ {
  q: "Find out the alternative figure which contains figure (M) as its part.",
  img: "q57.png",
  opts: ["Figure A","Figure B","Figure C","Figure D"], a: 0,
  key: "In an embedded-figure question, you must be able to trace figure (M) inside the answer figure without adding or removing lines, at the same size and direction.",
  steps: ["Look at the longest, most unusual line of (M): one long diagonal rising from the bottom-left to the top-right, with the top and bottom bars.","Option (A) has the box with the long rising diagonal from bottom-left to top-right plus the top and bottom bars, so M can be traced inside it.","In (B), (C) and (D) the diagonals are short (they stop at a middle line or form a diamond), so no full-height rising diagonal like M's exists."],
  tip: "Trace the longest or most unusual line of the given figure first and look for it in each option.",
  check: "This answer depends on fine details of the scanned drawing and is the least certain one in the paper. Please check it against your printed answer key."
},
/* 58 */ {
  q: "If 'Wall' is called 'Window', 'Window' is called 'Door', 'Door' is called 'Floor', 'Floor' is called 'Roof', and 'Roof' is called 'Ventilator', what will a person stand on?",
  opts: ["Door","Ventilator","Roof","Floor"], a: 2,
  key: "Ignore the new names at first. Find what the person REALLY stands on, then replace that word with its new name.",
  steps: ["A person really stands on the floor.","In this language, Floor is called Roof.","So the answer is Roof."],
  tip: "Find the real object first. Then look it up in the list of new names."
},
/* 59 */ {
  q: "Complete the analogy: 'Karnataka : Bengaluru :: Maharashtra : ?'",
  opts: ["Mumbai","Pune","Nagpur","Nashik"], a: 0,
  key: "Find the relation in the first pair, then use the same relation for the second pair.",
  steps: ["Bengaluru is the capital of Karnataka (State : Capital).","The capital of Maharashtra is Mumbai."],
  watch: "Pune and Nagpur are famous cities, but Nagpur is only the winter-session capital. Mumbai is the capital."
},
/* 60 */ {
  q: "Complete the analogy: '6 : 216 :: 8 : ?'",
  opts: ["640","512","64","343"], a: 1,
  key: "Test whether the second number is the square, the cube or something else of the first.",
  steps: ["6 × 6 = 36, which is not 216. But 6 × 6 × 6 = 216, so the rule is the cube of the number.","8³ = 8 × 8 × 8 = 512."],
  tip: "Learn the cubes: 2³=8, 3³=27, 4³=64, 5³=125, 6³=216, 7³=343, 8³=512.",
  note: "In the printed paper two options carry the label (B): '64' and '512'. The correct value is 512."
},
/* 61 */ {
  q: "Which part of MS Word displays the page number and word count?",
  opts: ["Ribbon","Status Bar","Ruler","Title Bar"], a: 1,
  key: "Picture the Word window: Title Bar at the top, then Ribbon, then Ruler, and the Status Bar along the bottom.",
  steps: ["The Status Bar runs along the bottom of the Word window.","It shows the current page number, the word count, the language and the zoom controls.","So the answer is Status Bar."],
  tip: "Title Bar shows the file name. Ribbon holds the commands. Ruler shows margins and tabs."
},
/* 62 */ {
  q: "Which shortcut key is used to save a document in MS Word?",
  opts: ["Ctrl + P","Ctrl + O","Ctrl + S","Ctrl + N"], a: 2,
  key: "Match each Ctrl shortcut to the first letter of its action.",
  steps: ["Ctrl + S = Save, Ctrl + P = Print, Ctrl + O = Open, Ctrl + N = New.","Saving = Ctrl + S."],
  tip: "S for Save, P for Print, O for Open, N for New."
},
/* 63 */ {
  q: "Which key starts a PowerPoint slide show from the beginning?",
  opts: ["F2","F5","Esc","Ctrl + M"], a: 1,
  key: "Remember the slide show keys: F5 starts from the first slide.",
  steps: ["F5 starts the slide show from the first slide.","Shift + F5 starts from the current slide. Esc ends the show. Ctrl + M inserts a new slide.","So the answer is F5."],
  table: { head:["Key","Action"], rows:[["F5","Start slide show from the first slide"],["Shift + F5","Start from the current slide"],["Esc","End the slide show"],["Ctrl + M","Insert a new slide"],["F2","Edit text in a selected shape"]] },
  tip: "F5 = from the start. Shift + F5 = from the current slide."
},
/* 64 */ {
  q: "Rows in an MS Excel worksheet are identified by:",
  opts: ["Letters","Numbers","Symbols","Formulas"], a: 1,
  key: "Excel labels its grid in two ways: columns with letters, rows with numbers.",
  steps: ["Columns are labelled with letters: A, B, C, …","Rows are labelled with numbers: 1, 2, 3, …","A cell address joins them: B3 = column B, row 3."],
  tip: "Cell address = column letter + row number."
},
/* 65 */ {
  q: "In MS Excel, the intersection of a row and a column is called:",
  opts: ["Worksheet","Range","Cell","Formula Bar"], a: 2,
  key: "The box where a row and a column meet is one cell.",
  steps: ["A cell is the box where a row meets a column (like B3).","A range is a group of cells, e.g. A1:B5. A worksheet is the whole grid. The formula bar shows what is inside a cell.","So the answer is Cell."],
  tip: "A range is many cells. A cell is just one."
}
  ]
};
