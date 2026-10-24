/* PAPER 2 – Employability Skills Model Question Paper (Section A) */
window.PAPERS = window.PAPERS || {};
window.PAPERS["paper2"] = {
  id: "paper2",
  title: "Employability Skills – Model Paper 2",
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
  q: "If the price of sugar increases by 20%, by what percentage should a household reduce its consumption so that expenditure remains unchanged?",
  opts: ["16.67%","20%","15%","25%"], a: 0,
  key: "Spending = price × quantity. If price goes up, quantity must come down so the product stays the same. Use an easy starting number like 100.",
  steps: ["Let the old price be Rs.100 per kg. Spending Rs.100 buys 1 kg.","New price = Rs.120 per kg. To spend the same Rs.100, he buys 100/120 = 5/6 kg.","Reduction = 1 − 5/6 = 1/6 = 16.67%.","Shortcut: reduction = 20 / (100 + 20) × 100 = 16.67%."],
  watch: "Do not answer 20%. The reduction is taken on the NEW (higher) price, so it is smaller than 20%."
},
/* 2 */ {
  q: "A trader marks his goods 30% above the cost price and allows a discount of 10%. What is his gain percentage?",
  opts: ["17%","20%","15%","18%"], a: 0,
  key: "Start with cost price = 100. Find the marked price, then the selling price after discount.",
  steps: ["Let cost price = Rs.100. Marked price = 100 + 30% = Rs.130.","Discount 10% on 130: selling price = 130 × 90/100 = Rs.117.","Gain = 117 − 100 = 17, so gain % = 17%."],
  watch: "Do not do 30% − 10% = 20%. The discount is on the marked price (130), not on the cost price."
},
/* 3 */ {
  q: "A man sold an article at a loss of 20%. If he had sold it for Rs.12 more, then he would have gained 10%. Find the cost price of the article.",
  opts: ["Rs.60","Rs.40","Rs.30","Rs.22"], a: 1,
  key: "Write both selling prices as a percentage of the cost price. The gap between them is Rs.12.",
  steps: ["Let the cost price be C. At 20% loss: selling price = 80% of C.","At 10% gain: selling price = 110% of C.","Difference = 110% − 80% = 30% of C = Rs.12.","C = 12 × 100 / 30 = Rs.40."],
  tip: "Check: 80% of 40 = 32 and 110% of 40 = 44. The difference 44 − 32 = 12 matches."
},
/* 4 */ {
  q: "A starts a business with Rs.50,000. After 4 months, B joins him with Rs.60,000. At the end of the year, in what ratio will they divide the profit?",
  opts: ["5 : 6","1 : 1","5 : 4","10 : 9"], a: 2,
  key: "Profit is shared in the ratio of (money invested × number of months). B joined late, so B's money works for fewer months.",
  steps: ["A invests Rs.50,000 for 12 months.","B joins after 4 months, so B invests Rs.60,000 for 12 − 4 = 8 months.","A : B = 50,000 × 12 : 60,000 × 8 = 600,000 : 480,000.","Divide both by 120,000: 5 : 4."],
  table: { head:["Partner","Money","Months","Money × months"], rows:[["A","50,000","12","600,000"],["B","60,000","8","480,000"],["Ratio","","","600 : 480 = 5 : 4"]] },
  watch: "Do not use only the money (5 : 6). Time matters when the partners join at different times."
},
/* 5 */ {
  q: "A train running at 72 km/h crosses a telegraph pole in 9 seconds. What is the length of the train?",
  opts: ["180 m","150 m","200 m","160 m"], a: 0,
  key: "A pole has no length. To cross it, the train only has to cover its OWN length. So length = speed × time.",
  steps: ["Change the speed to m/s: 72 × 5/18 = 20 m/s.","Length = speed × time = 20 × 9 = 180 m."],
  tip: "km/h to m/s: multiply by 5/18. A quick check: 72 km/h is 20 m/s."
},
/* 6 */ {
  q: "A boat goes 12 km downstream in 48 minutes. If the speed of the current is 3 km/h, what is the speed of the boat in still water?",
  opts: ["10 km/h","15 km/h","9 km/h","12 km/h"], a: 3,
  key: "First find the downstream speed. Then remove the current to get the boat's own speed.",
  steps: ["Change the time: 48 minutes = 48/60 = 0.8 hour.","Downstream speed = 12 / 0.8 = 15 km/h.","Downstream speed = boat + current, so boat = 15 − 3 = 12 km/h."],
  watch: "Option (B) 15 km/h is the downstream speed, not the speed in still water."
},
/* 7 */ {
  q: "Two trains running in opposite directions at 40 km/h and 50 km/h cross each other in 12 seconds. What is the combined length of both trains?",
  opts: ["200 m","250 m","300 m","350 m"], a: 2,
  key: "When trains move in opposite directions, their speeds ADD. They cross each other when they cover the sum of their lengths.",
  steps: ["Relative speed = 40 + 50 = 90 km/h.","Change to m/s: 90 × 5/18 = 25 m/s.","Combined length = speed × time = 25 × 12 = 300 m."],
  tip: "Opposite directions: add the speeds. Same direction: subtract the speeds."
},
/* 8 */ {
  q: "At what rate of simple interest per annum will a sum of money double itself in 8 years?",
  opts: ["10%","12.5%","15%","8%"], a: 1,
  key: "If the money doubles, the interest earned equals the original sum (SI = P).",
  steps: ["Money doubles, so interest = P.","SI = P × R × T / 100, so P = P × R × 8 / 100.","Cancel P: 1 = R × 8 / 100, so R = 100/8 = 12.5%."],
  tip: "Doubling in n years at simple interest: rate = 100 / n %. Here 100 / 8 = 12.5%."
},
/* 9 */ {
  q: "The difference between Simple Interest and Compound Interest (compounded annually) on Rs.15,000 for 2 years at 10% per annum is:",
  opts: ["Rs.120","Rs.150","Rs.180","Rs.200"], a: 1,
  key: "For 2 years, CI − SI = P × (R/100)². The long method gives the same answer.",
  steps: ["Shortcut: 15,000 × (10/100)² = 15,000 × 0.01 = Rs.150.","Check with the long method: SI = 15,000 × 10 × 2 / 100 = Rs.3,000.","CI: amount = 15,000 × 1.1 × 1.1 = 18,150, so CI = Rs.3,150.","Difference = 3,150 − 3,000 = Rs.150."],
  table: { head:["Year","Simple interest","Compound interest"], rows:[["Year 1","1,500","1,500"],["Year 2","1,500","1,650 (10% of 16,500)"],["Total","3,000","3,150"]] },
  tip: "The extra Rs.150 is exactly the interest on the first year's interest (10% of Rs.1,500)."
},
/* 10 */ {
  q: "The average of 5 numbers is 27. If one number is excluded, the average becomes 25. What is the excluded number?",
  opts: ["32","30","35","28"], a: 2,
  key: "Average × count = total. Find both totals; the difference is the number that left.",
  steps: ["Total of 5 numbers = 5 × 27 = 135.","Total of the remaining 4 numbers = 4 × 25 = 100.","Excluded number = 135 − 100 = 35."]
},
/* 11 */ {
  q: "Two numbers are in the ratio 3 : 5. If 9 is subtracted from each, the ratio becomes 12 : 23. Find the smaller number.",
  opts: ["45","27","36","33"], a: 3,
  key: "Write the numbers as 3x and 5x, subtract 9 from each, and match the new ratio.",
  steps: ["Numbers are 3x and 5x. After subtracting 9: (3x − 9)/(5x − 9) = 12/23.","Cross-multiply: 23(3x − 9) = 12(5x − 9), so 69x − 207 = 60x − 108.","9x = 99, so x = 11. Numbers: 3 × 11 = 33 and 5 × 11 = 55.","Check: (33 − 9) : (55 − 9) = 24 : 46 = 12 : 23 ✓"],
  watch: "The question asks for the SMALLER number, which is 3x = 33, not 55."
},
/* 12 */ {
  q: "The average age of a class of 30 students is 15 years. If the teacher's age is included, the average increases by 1 year. What is the teacher's age?",
  opts: ["46 years","45 years","40 years","50 years"], a: 0,
  key: "Convert averages to totals. The teacher's age is the extra total.",
  steps: ["Total age of 30 students = 30 × 15 = 450.","With the teacher there are 31 people and the average is 16: total = 31 × 16 = 496.","Teacher's age = 496 − 450 = 46 years."],
  tip: "Shortcut: teacher = old average + (increase × 31) = 15 + 31 = 46."
},
/* 13 */ {
  q: "Father is 4 times older than his son. After 20 years, he will be twice as old as his son. Find the present age of the father.",
  opts: ["40 years","36 years","48 years","32 years"], a: 0,
  key: "Let the son's age be s. Then the father is 4s. Add 20 years to both and use the 'twice' clue.",
  steps: ["Son = s, Father = 4s. After 20 years: son = s + 20, father = 4s + 20.","Father = 2 × son: 4s + 20 = 2(s + 20) = 2s + 40.","2s = 20, so s = 10. Father = 4 × 10 = 40 years.","Check: after 20 years father 60, son 30. 60 = 2 × 30 ✓"],
  watch: "The question asks the FATHER's age (4s = 40), not the son's age (10)."
},
/* 14 */ {
  q: "How many 3-digit numbers can be formed using the digits 1, 2, 3, 4, 5 without repetition?",
  opts: ["60","120","24","80"], a: 0,
  key: "Fill the three places one by one. Each time, one digit has already been used, so the number of choices goes down.",
  steps: ["Hundreds place: any of the 5 digits = 5 ways.","Tens place: 4 digits are left = 4 ways.","Units place: 3 digits are left = 3 ways.","Total = 5 × 4 × 3 = 60."],
  tip: "This is 5P3 = 5!/2! = 60. Only 3 places, so stop after 3 factors."
},
/* 15 */ {
  q: "In how many different ways can a cricket team of 11 players be selected out of a 15-member squad?",
  opts: ["2,400","1,200","720","1,365"], a: 3,
  key: "The order of players does not matter, so use combinations: C(15, 11). Choosing 11 to play is the same as choosing 4 to leave out.",
  steps: ["C(15, 11) = C(15, 4) (choose the 4 who will not play).","C(15, 4) = (15 × 14 × 13 × 12) / (4 × 3 × 2 × 1).","= 32,760 / 24 = 1,365."],
  tip: "C(n, r) = C(n, n − r). Always take the smaller r to make the calculation short."
},
/* 16 */ {
  q: "In a single throw of a standard fair die, what is the probability of getting an even prime number?",
  opts: ["1/3","1/6","1/2","2/3"], a: 1,
  key: "List the numbers that are BOTH even and prime. Then use favourable / total.",
  steps: ["Even numbers on a die: 2, 4, 6. Prime numbers: 2, 3, 5.","The only number that is both even and prime is 2. So favourable = 1.","Probability = 1/6."],
  table: { head:["Number","1","2","3","4","5","6"], rows:[["Even?","No","Yes","No","Yes","No","Yes"],["Prime?","No","Yes","Yes","No","Yes","No"],["Both?","No","YES","No","No","No","No"]] },
  tip: "2 is the only even prime number."
},
/* 17 */ {
  q: "Two dice are thrown together. What is the probability that the sum of the numbers obtained is 8?",
  opts: ["5/36","1/6","1/9","7/36"], a: 0,
  key: "Two dice have 6 × 6 = 36 equally likely outcomes. Count the pairs that add up to 8.",
  steps: ["Total outcomes = 6 × 6 = 36.","Pairs with sum 8: (2,6), (3,5), (4,4), (5,3), (6,2) = 5 pairs.","Probability = 5/36."],
  table: { head:["First die","2","3","4","5","6"], rows:[["Second die","6","5","4","3","2"],["Sum","8","8","8","8","8"]] },
  watch: "(4,4) counts only ONCE, but (2,6) and (6,2) are two different outcomes."
},
/* 18 */ {
  q: "If the area of a square field is 144 cm², what is its perimeter?",
  opts: ["52 cm","36 cm","24 cm","48 cm"], a: 3,
  key: "Area = side × side, so side = square root of the area. Perimeter = 4 × side.",
  steps: ["Side = √144 = 12 cm.","Perimeter = 4 × 12 = 48 cm."],
  watch: "Do not mix up area (cm²) with perimeter (cm)."
},
/* 19 */ {
  q: "The base and height of a triangle are 12 cm and 8 cm respectively. Find its area.",
  opts: ["96 cm²","48 cm²","24 cm²","60 cm²"], a: 1,
  key: "Area of a triangle = half of base × height.",
  steps: ["Area = (1/2) × base × height.","= (1/2) × 12 × 8 = (1/2) × 96 = 48 cm²."],
  watch: "Option (A) 96 forgets the 1/2. A triangle is half of the rectangle 12 × 8."
},
/* 20 */ {
  q: "The length of a diagonal of a square is 10 cm. Find the area of the square.",
  opts: ["50 cm²","100 cm²","25 cm²","75 cm²"], a: 0,
  key: "The diagonal splits a square into two right triangles, so diagonal² = 2 × side². That gives Area = diagonal² / 2.",
  steps: ["Let the side be s. By Pythagoras: s² + s² = 10² = 100.","So 2 × s² = 100 and s² = 50.","Area of a square = s² = 50 cm²."],
  watch: "100 cm² is the diagonal squared, not the area of the square.",
  tip: "Shortcut formula: Area of a square = (diagonal × diagonal) / 2 = 10 × 10 / 2 = 50."
},
/* 21 */ {
  q: "In a certain code language, 'ROSE' is written as '6821' and 'CHAIR' as '73456'. How is 'SEARCH' written in that code?",
  opts: ["213467","214567","214673","214637"], a: 2,
  key: "Each letter has its own digit. Build a letter-to-digit table from the two given words, then write the new word.",
  steps: ["Match ROSE = 6821: R=6, O=8, S=2, E=1.","Match CHAIR = 73456: C=7, H=3, A=4, I=5, R=6. R is 6 in both words, so the table is consistent.","Write SEARCH letter by letter: S=2, E=1, A=4, R=6, C=7, H=3.","SEARCH = 214673."],
  table: { head:["Letter","R","O","S","E","C","H","A","I"], rows:[["Digit","6","8","2","1","7","3","4","5"]] },
  tip: "A letter that appears in both words (R here) lets you check that your table is correct."
},
/* 22 */ {
  q: "If 'LIGHT' is coded as 'MJHIU', how is 'FLAME' coded in that language?",
  opts: ["GNCNE","GMBNF","GLBND","GMBNF"], a: 1,
  key: "Compare each letter with the coded letter in the same position. If every letter moves the same number of places, it is a fixed shift.",
  steps: ["L→M, I→J, G→H, H→I, T→U. Every letter moves +1.","Apply +1 to FLAME: F→G, L→M, A→B, M→N, E→F.","The coded word is GMBNF."],
  tip: "Check the rule on the first two letters, then confirm it on the rest.",
  note: "In the paper options (B) and (D) are identical (both GMBNF). Either one is the correct answer."
},
/* 23 */ {
  q: "If 'WATER' is coded as 'TXQBO', how is 'FIRE' coded using the same rule?",
  opts: ["HLUG","HKRE","GJTF","CFOB"], a: 3,
  key: "Here the coded letters are BEHIND the original letters, so the rule is a backward shift (−3).",
  steps: ["Check the rule: W→T (V, U, T = 3 back). A→X (Z, Y, X = 3 back, wrapping round). T→Q, E→B, R→O. Every letter moves −3.","Apply −3 to FIRE: F→C, I→F, R→O, E→B.","The coded word is CFOB."],
  tip: "Going back past A wraps round to Z, so think of the alphabet as a circle."
},
/* 24 */ {
  q: "Karan travels 10 km towards North, turns South and walks 6 km, then walks 3 km East. How far is he from his starting point?",
  opts: ["4 km","7 km","10 km","5 km"], a: 3,
  key: "Cancel the opposite walks first (North against South). Then use Pythagoras on what is left.",
  steps: ["Go 10 km North, then 6 km South. The South walk cancels part of the North walk: net = 10 − 6 = 4 km North.","Then walk 3 km East. Now he is 4 km North and 3 km East of the start.","Distance = √(4² + 3²) = √25 = 5 km (the 3-4-5 triple)."],
  tip: "Always cancel opposite directions first. Then it is one simple right triangle.",
  note: "In the diagram the 6 km South walk is drawn slightly to the right only so you can see it. It really goes back along the same road."
},
/* 25 */ {
  q: "Anil facing West turns 45° clockwise, then 180° clockwise. Which direction is he facing now?",
  opts: ["South-West","North-East","South-East","North-West"], a: 2,
  key: "Clockwise turns ADD degrees. Measure every direction from North: N = 0°, E = 90°, S = 180°, W = 270°.",
  steps: ["Start: facing West = 270°.","Turn 45° clockwise: 270° + 45° = 315° = North-West.","Turn 180° clockwise: 315° + 180° = 495°. Subtract 360°: 135° = South-East.","Check: 180° gives the exact opposite, and the opposite of North-West is South-East."],
  tip: "A 180° turn always gives the opposite direction. You can skip the maths for that step."
},
/* 26 */ {
  q: "Point A is 5 m West of Point B. Point C is 5 m South of Point B. In which direction is A with respect to C?",
  opts: ["North-East","South-West","North-West","South-East"], a: 2,
  key: "“A with respect to C” means: stand at C and look towards A.",
  steps: ["Place B in the middle. A is 5 m to its West (left). C is 5 m to its South (below).","Stand at C. To reach A, go up 5 m (North) to B's level, then left 5 m (West).","A is North and West of C, so the direction is North-West."],
  tip: "“X with respect to Y” always means: stand at Y and look at X."
},
/* 27 */ {
  q: "If 'A + B' means A is the father of B, and 'A − B' means A is the sister of B, what does 'P + Q − R' mean?",
  opts: ["P is grandfather of R","P is uncle of R","P is brother of R","P is father of R"], a: 3,
  key: "Read the symbols from left to right, one link at a time.",
  steps: ["P + Q means P is the father of Q.","Q − R means Q is the sister of R. So Q and R are brother and sister (same parents).","P is the father of Q, so P is also the father of Q's brother or sister, R.","So P is the father of R."],
  tip: "If two people are brother and sister, their father is the same person."
},
/* 28 */ {
  q: "Looking at a portrait, a man said, 'I have no brother or sister, but that man's father is my father's son.' Whose portrait was it?",
  opts: ["His son's","His own","His father's","His nephew's"], a: 0,
  key: "“My father's son” is either me or my brother. He has no brother, so it must be ME.",
  steps: ["The man has no brother or sister. So “my father's son” can only be the man himself.","The sentence becomes: “That man's father is me.”","If the man in the portrait has the speaker as his father, the portrait is of the speaker's son."],
  tip: "In 'my father's son' puzzles, check first whether it just means the speaker himself."
},
/* 29 */ {
  q: "E is the son of A. D is the son of B. E is married to C. C is B's daughter. How is D related to E?",
  opts: ["Father-in-law","Uncle","Brother","Brother-in-law"], a: 3,
  key: "Draw the family. Mark who is married to whom and who are the children of B.",
  steps: ["B has two children: D (son) and C (daughter). So D is C's brother.","E is married to C, so E is C's husband.","D is the brother of E's wife, so D is E's brother-in-law."],
  tip: "Wife's brother = brother-in-law. Husband's brother = brother-in-law too."
},
/* 30 */ {
  q: "How many odd days are there in a standard leap year of 366 days?",
  opts: ["0 odd days","1 odd day","2 odd days","3 odd days"], a: 2,
  key: "Odd days are the extra days left over after taking out complete weeks (groups of 7).",
  steps: ["A leap year has 366 days.","366 / 7 = 52 weeks and 2 days left over (52 × 7 = 364, and 366 − 364 = 2).","So a leap year has 2 odd days."],
  tip: "Ordinary year: 365 = 52 weeks + 1 day, so 1 odd day. Leap year: 2 odd days."
},
/* 31 */ {
  q: "On 6th March 2005 Monday falls. What was the day of the week on 6th March 2004?",
  opts: ["Saturday","Sunday","Monday","Tuesday"], a: 1,
  key: "Count the days between the two dates, then find the odd days. Going BACK in time means moving backwards through the week.",
  steps: ["From 6 March 2004 to 6 March 2005 is exactly one year. The leap day (29 February 2004) comes BEFORE 6 March 2004, so this year has 365 days.","365 days = 52 weeks + 1 odd day.","So 6 March 2005 is 1 day after the weekday of 6 March 2004.","6 March 2004 = Monday − 1 day = Sunday."],
  watch: "Do not add the leap-year extra day here. 29 February 2004 falls before 6 March 2004.",
  note: "This question uses the data given in it (6 March 2005 = Monday). Solve with the given data."
},
/* 32 */ {
  q: "What was the day of the week on 15th August 1947?",
  opts: ["Saturday","Thursday","Friday","Wednesday"], a: 2,
  key: "Count odd days for the complete years before 1947, then for the days up to 15 August. Use 0 = Sunday, 1 = Monday … 6 = Saturday.",
  steps: ["1600 years = 0 odd days. The next 300 years (to 1900) = 1 odd day.","The 46 years 1901 to 1946: 46 + 11 leap years = 57 days; 57 / 7 leaves 1 odd day.","Days in 1947 up to 15 August: 31+28+31+30+31+30+31+15 = 227; 227 / 7 leaves 3 odd days.","Total odd days = 0 + 1 + 1 + 3 = 5, and 5 means Friday."],
  table: { head:["Part","Days","Odd days"], rows:[["1600 years","–","0"],["300 years","–","1"],["46 years (1901–1946)","46 + 11 leap = 57","1"],["1 Jan to 15 Aug 1947","227","3"],["Total","","0 + 1 + 1 + 3 = 5 = Friday"]] },
  tip: "Memory: 0 Sun, 1 Mon, 2 Tue, 3 Wed, 4 Thu, 5 Fri, 6 Sat."
},
/* 33 */ {
  q: "An accurate clock shows 9 o'clock in the morning. Through how many degrees will the hour hand rotate when the clock shows 3 o'clock in the afternoon?",
  opts: ["150°","180°","160°","210°"], a: 1,
  key: "The hour hand moves 30° every hour (360° / 12 hours).",
  steps: ["Time from 9 am to 3 pm = 6 hours.","Rotation = 6 × 30° = 180°.","Check: 9 to 12 is 3 hours (90°) and 12 to 3 is 3 hours (90°). Total 180°."],
  tip: "Hour hand: 30° per hour (0.5° per minute). Minute hand: 6° per minute."
},
/* 34 */ {
  q: "How many times in a day (24 hours) are the hands of a clock at right angles (90°)?",
  opts: ["22 times","44 times","24 times","48 times"], a: 1,
  key: "First find how many times in 12 hours, then double it for 24 hours.",
  steps: ["In every hour the two hands make a right angle twice, so 12 hours would give 12 × 2 = 24.","But at exactly 3:00 and 9:00 the right angle is the same moment counted in two neighbouring hours. So 2 are counted twice: 24 − 2 = 22 times in 12 hours.","In 24 hours: 22 × 2 = 44 times."],
  tip: "Remember the set: in 12 hours, right angles 22 times, straight line (180°) 11 times, overlap 11 times."
},
/* 35 */ {
  q: "Look at the number series: 2, 3, 5, 7, 11… What number should come next?",
  opts: ["17","15","13","12"], a: 2,
  key: "These numbers are all PRIME numbers, in order. A prime number can only be divided by 1 and itself.",
  steps: ["2, 3, 5, 7, 11 are the first five prime numbers.","The next prime after 11 is 13.","Check: 12 = 3 × 4, so it is not prime. 13 has no divisors except 1 and 13."],
  watch: "The gaps (1, 2, 2, 4) do not form a pattern, so a differences method fails. Think prime numbers."
},
/* 36 */ {
  q: "Find the missing term in the letter series: Z, W, T, Q, ?",
  opts: ["M","N","O","P"], a: 1,
  key: "Turn each letter into its position in the alphabet and find the gap.",
  steps: ["Z = 26, W = 23, T = 20, Q = 17.","Each letter is 3 places BACK from the one before (26, 23, 20, 17 …).","Next position = 17 − 3 = 14, and position 14 is N."],
  tip: "Position 14 is N (A=1, … M=13, N=14)."
},
/* 37 */ {
  q: "In a circular arrangement facing the center, P is to the immediate right of Q. Who is to the immediate left of P?",
  opts: ["S","R","Q","Cannot be determined"], a: 2,
  key: "When people face the centre of a circle, one person's RIGHT hand points the same way as the next person's LEFT hand. So if P is to the right of Q, then Q is to the left of P.",
  steps: ["Facing the centre, “P is to the immediate right of Q” means P stands next to Q on Q's right-hand side.","Standing at P and looking at Q, Q is on P's left-hand side.","So the person to the immediate left of P is Q."],
  tip: "In a circle facing the centre, 'A is right of B' always means 'B is left of A'."
},
/* 38 */ {
  q: "5 boys P, Q, R, S, and T are sitting in a circle facing the center. R is between S and T. P is to the left of T. Who is to the right of S?",
  opts: ["R","P","T","Q"], a: 3,
  key: "Place the boys one clue at a time. Facing the centre, a person's left side is the clockwise direction.",
  steps: ["R is between S and T, so these three sit together as S – R – T.","P is to the immediate left of T. Going clockwise from T (the left side), the next seat is P.","The last boy, Q, takes the empty seat between P and S. Clockwise order: S, R, T, P, Q.","The person to the right of S (anticlockwise side) is Q."],
  tip: "Draw the circle, mark each boy facing inside, and check left/right from the boy's own point of view."
},
/* 39 */ {
  q: "In a row of boys, A is 10th from the left and B is 9th from the right. If they interchange positions, A becomes 15th from the left. How many boys are in the row?",
  opts: ["25","24","23","22"], a: 2,
  key: "After swapping, A stands where B stood. So B's original place from the left is 15.",
  steps: ["After the interchange, A is 15th from the left. A took B's old seat, so B was 15th from the left.","B is also 9th from the right.","Total boys = (15 from left) + (9 from right) − 1 = 23."],
  watch: "Do not use A's first position (10th). B's position is what decides the total.",
  tip: "Total = position from left + position from right − 1."
},
/* 40 */ {
  q: "P is taller than Q but shorter than R. S is taller than R. Who is the tallest?",
  opts: ["S","R","P","Q"], a: 0,
  key: "Write all the clues as one chain from tallest to shortest.",
  steps: ["P > Q (P is taller than Q).","R > P (P is shorter than R).","S > R (S is taller than R).","Join them: S > R > P > Q. The tallest is S."],
  tip: "Join the clues into one chain by matching the common person."
},
/* 41 */ {
  q: "<b>Statement:</b> Regular physical exercise is necessary for maintaining good health.<br><b>Conclusions:</b> I. All healthy people exercise daily. II. Inactive lifestyle causes health issues.",
  opts: ["Neither I nor II follows","Only I follows","Only II follows","Both follow"], a: 2,
  key: "A conclusion follows only if the statement supports it. Extreme words like “all” and “daily” are warning signs.",
  steps: ["Conclusion I: the statement says exercise must be REGULAR, not necessarily DAILY, and it does not say every healthy person exercises. It is too strong. Does not follow.","Conclusion II: if exercise is necessary for good health, then a lifestyle with no exercise (inactive) harms health. Follows.","So only Conclusion II follows."],
  tip: "Words like all, only, daily and never in a conclusion are warning signs.",
  note: "This is a judgement-type question. The answer given is the standard one for this pattern."
},
/* 42 */ {
  q: "<b>Statement:</b> 'Buy pure butter of Brand X – Advertisement.'<br><b>Assumptions:</b> I. People want pure butter. II. Advertisements influence buyers.",
  opts: ["Only I is implicit","Only II is implicit","Both I and II are implicit","Neither is implicit"], a: 2,
  key: "An assumption is something the advertiser must take for granted for the advertisement to make sense. Test it: would the advertisement make sense if the assumption were false?",
  steps: ["Assumption I: the advertiser stresses “pure” because he believes people want pure butter. Without this, the word “pure” would not attract anyone. Implicit.","Assumption II: nobody spends money on an advertisement unless he believes it will influence buyers. Implicit.","Both are implicit."],
  tip: "Ask: if this assumption were false, would the statement collapse? If yes, it is implicit."
},
/* 43 */ {
  q: "<b>Statement:</b> Should Indian universities offer online degrees for all courses?<br><b>Arguments:</b> I. Yes, helps rural students. II. No, lacks practical lab experience.",
  opts: ["Both I and II are strong","Only I is strong","Only II is strong","Neither is strong"], a: 0,
  key: "A strong argument is important and directly connected to the question. Judge each argument on its own.",
  steps: ["Argument I: online degrees remove distance and cost barriers for rural students. It is a real benefit, so it is strong.","Argument II: many courses (science, engineering, medicine) need labs and hands-on practice, which online mode cannot fully give. It is a real limit, so it is strong.","Both are strong, even though they point in opposite directions."],
  tip: "Two opposite arguments can both be strong. Judge them separately."
},
/* 44 */ {
  q: "Which Venn diagram best represents: 'Chartered Accountants', 'Advocates', and 'Professionals'?",
  fig: { t:"vopts", kinds:["tri","sep","nest","row"] },
  opts: ["Diagram A","Diagram B","Diagram C","Diagram D"], a: 1,
  key: "Decide how each pair of groups is related: inside, overlapping or separate.",
  steps: ["Chartered Accountants and Advocates are both kinds of <b>professionals</b>, so both circles lie INSIDE the Professionals circle.","A person is not both a Chartered Accountant and an Advocate (they are different professions), so these two circles do NOT overlap.","So we need a big circle with two separate small circles inside: <b>diagram (B)</b>."],
  table: { head:["Diagram","What it shows","Correct?"], rows:[["(A)","Three circles overlapping","No – CA and Advocate do not overlap"],["(B)","Big circle with two separate circles inside","Yes"],["(C)","Circles inside circles","No – CA is not inside Advocates"],["(D)","Three separate circles","No – both are professionals"]] },
  tip: "Two different professions = separate circles inside the bigger group."
},
/* 45 */ {
  q: "Which diagram best represents: 'Dogs', 'Pets', and 'Animals'?",
  fig: { t:"vopts", kinds:["sep","tri","nest","ov"] },
  opts: ["Diagram A","Diagram B","Diagram C","Diagram D"], a: 3,
  key: "Think: can one animal be both a dog and a pet? Is every dog a pet? Is every pet a dog?",
  steps: ["Dogs and pets are both animals, so both circles lie inside the Animals circle.","Some dogs are pets (a pet dog), but some dogs are not pets (stray dogs), and some pets are not dogs (cats, parrots). So Dogs and Pets overlap.","A big circle with two overlapping circles inside: <b>diagram (D)</b>."],
  table: { head:["Diagram","What it shows","Correct?"], rows:[["(A)","Big circle with two separate circles","No – some dogs are pets"],["(B)","Three circles overlapping","No – Animals contains both"],["(C)","Circles inside circles","No – dogs are not all pets"],["(D)","Big circle with two overlapping circles","Yes"]] },
  tip: "Ask: can one thing belong to both groups? If yes, the circles overlap."
},
/* 46 */ {
  q: "The diagram below represents those students who play Cricket, Football and Kabaddi. Study the diagram and identify the students who play all the three games.",
  fig: { t:"kab" },
  opts: ["P, Q and R","V and T","S, T and V","S only"], a: 3,
  key: "Students who play ALL three games are in the region where all three rectangles overlap.",
  steps: ["Region Q lies inside Kabaddi and Football only. Region T lies inside Kabaddi and Cricket only. Region V lies inside Football and Cricket only.","Regions P, R and U each lie inside only ONE rectangle.","Only region <b>S</b> lies inside all three rectangles (Kabaddi, Football and Cricket)."],
  table: { head:["Region","Plays"], rows:[["P","Football only"],["Q","Football + Kabaddi"],["R","Kabaddi only"],["S","ALL THREE"],["T","Kabaddi + Cricket"],["U","Cricket only"],["V","Football + Cricket"]] },
  tip: "For 'all three', find the one small region common to every shape."
},
/* 47 */ {
  q: "<b>Statements:</b> Some cats are rats. All rats are bats.<br><b>Conclusions:</b> I. Some cats are bats. II. All bats are cats.",
  opts: ["Only I follows","Only II follows","Both follow","Neither follows"], a: 0,
  key: "Draw it. Cats overlap Rats, and all of Rats sits inside Bats.",
  steps: ["Conclusion I: the cats that are rats are inside the Rats circle, which is inside Bats. So some cats are bats. Follows.","Conclusion II: Bats is a bigger group. Many bats need not be cats. “All bats are cats” does not follow.","So only Conclusion I follows."],
  tip: "“All A are B” never gives “All B are A”."
},
/* 48 */ {
  q: "<b>Statements:</b> No pen is a pencil. All pencils are erasers.<br><b>Conclusions:</b> I. No pencil is a pen. II. Some erasers are pens.",
  opts: ["Both I and II follow","Only I follows","Only II follows","Neither follows"], a: 1,
  key: "Draw the circles. Pens and Pencils are completely separate. Pencils are inside Erasers.",
  steps: ["Conclusion I: “No pen is a pencil” can be turned around: “No pencil is a pen”. Follows.","Conclusion II: Pencils are erasers, but pens are outside the Pencils circle. Pens may or may not touch the Erasers circle. We cannot be sure, so “Some erasers are pens” does not follow.","So only Conclusion I follows."],
  tip: "“No A is B” can always be turned around to “No B is A”."
},
/* 49 */ {
  q: "What is the difference between the number of cars sold by Company D and Company A?",
  note0: "Directions for Q49–53: The bar diagram shows the number of cars sold by five different companies.",
  fig: { t:"bars", pre:"Company ", top:250, labels:["A","B","C","D","E"], s:[{n:"Cars sold",v:[120,180,150,210,90]}] },
  opts: ["80","90","100","120"], a: 1,
  key: "Read the two bar values from the chart and subtract the smaller from the larger.",
  steps: ["Company D sold 210 cars (value on top of the bar).","Company A sold 120 cars.","Difference = 210 − 120 = 90."],
  tip: "Always read the number printed on top of the bar, not just the height of the bar."
},
/* 50 */ {
  q: "What is the average number of cars sold by the five companies?",
  fig: { t:"bars", pre:"Company ", top:250, labels:["A","B","C","D","E"], s:[{n:"Cars sold",v:[120,180,150,210,90]}] },
  opts: ["140","145","150","155"], a: 2,
  key: "Average = total of all the values / number of companies.",
  steps: ["Add: 120 + 180 + 150 + 210 + 90 = 750.","Average = 750 / 5 = 150."],
  tip: "Add in pairs to avoid mistakes: 120 + 180 = 300, 150 + 210 = 360, then 300 + 360 + 90 = 750."
},
/* 51 */ {
  q: "The number of cars sold by Company B is what percentage of the number sold by Company D?",
  fig: { t:"bars", pre:"Company ", top:250, labels:["A","B","C","D","E"], s:[{n:"Cars sold",v:[120,180,150,210,90]}] },
  opts: ["75%","80%","85.71%","90%"], a: 2,
  key: "“x is what % of y” = (x / y) × 100. The number after the word “of” goes at the bottom.",
  steps: ["Company B = 180 and Company D = 210.","Percentage = (180 / 210) × 100.","180 / 210 = 6/7 = 0.8571, so the answer is 85.71%."],
  watch: "The base (bottom number) is Company D, the one after the word 'of'."
},
/* 52 */ {
  q: "If Company E increases its car sales by 50% and Company A decreases its sales by 25%, what will be the difference between their new sales figures?",
  fig: { t:"bars", pre:"Company ", top:250, labels:["A","B","C","D","E"], s:[{n:"Cars sold",v:[120,180,150,210,90]}] },
  opts: ["0","15","30","45"], a: 3,
  key: "Find each new sales figure separately, then subtract.",
  steps: ["Company E: 90 + 50% of 90 = 90 + 45 = 135.","Company A: 120 − 25% of 120 = 120 − 30 = 90.","Difference = 135 − 90 = 45."],
  tip: "Check: E increases by half of 90 = 45. A loses a quarter of 120 = 30."
},
/* 53 */ {
  q: "If the total sales of all five companies increase by 20%, what will be the new total number of cars sold?",
  fig: { t:"bars", pre:"Company ", top:250, labels:["A","B","C","D","E"], s:[{n:"Cars sold",v:[120,180,150,210,90]}] },
  opts: ["850","875","900","950"], a: 2,
  key: "First find the total sales. Then add 20% of it (or multiply by 1.2).",
  steps: ["Total sales = 120 + 180 + 150 + 210 + 90 = 750.","20% of 750 = 150.","New total = 750 + 150 = 900. (Or 750 × 1.2 = 900.)"],
  tip: "Increase by p% means multiply by (100 + p)/100. For 20%, multiply by 1.2."
},
/* 54 */ {
  q: "Find the water image.",
  img: "p2-q54.png",
  opts: ["Answer figure A","Answer figure B","Answer figure C","Answer figure D"], a: 2,
  key: "A water image is a reflection BELOW the object: the figure is flipped TOP to BOTTOM. Left and right stay where they are.",
  steps: ["Question figure: a right triangle with the right angle at the bottom-right, the slanted side rising to the right, and a small box above the slanted side.","Flip it top-to-bottom: the right angle goes to the top-right, the slanted side now slopes DOWN to the right, and the box moves to the bottom.","Left and right do not change, so the right angle stays on the right side.","Only figure (C) has the right angle at the top-right with the box at the bottom."],
  table: { head:["Option","Right angle at","Small box","Match?"], rows:[["(A)","Bottom-left","Top","No – left and right swapped (mirror)"],["(B)","Top-left","Bottom","No – turned round, not flipped"],["(C)","Top-right","Bottom","Yes"],["(D)","Bottom-right","Top","No – same as the question figure"]] },
  tip: "Water image = top/bottom flip. Mirror image = left/right flip."
},
/* 55 */ {
  q: "An analog clock placed in front of a mirror shows the time 8:25. What is the actual time shown by the clock in the mirror reflection?",
  opts: ["3:25","3:35","4:35","4:25"], a: 1,
  key: "A mirror flips left and right. For a clock, actual time = 12:00 − the time seen in the mirror (written as 11:60).",
  steps: ["Write 12:00 as 11:60 so that you can subtract the minutes.","11:60 − 8:25 = 3:35.","Check: 3:35 has the hour hand just past 3 and the minute hand on 7 (35 minutes). A mirror shows the hour hand just before 9 and the minute hand on 5 (25 minutes) = 8:25."],
  tip: "Mirror clock: subtract the shown time from 12:00. If the answer is more than 12, subtract 12 again."
},
/* 56 */ {
  q: "Identify the figure that completes the pattern.",
  img: "p2-q56.png",
  opts: ["1st answer figure","2nd answer figure","3rd answer figure","4th answer figure"], a: 0,
  key: "Look at how the picture is built. Then see which corner of the empty cell the lines must start from.",
  steps: ["The big square is made of 4 cells. The top-left cell and the top-right cell are mirror images of each other: each has a fan of lines from the OUTER top corner.","The bottom-left cell has a fan of lines from the outer bottom-left corner. So the bottom-right cell must be its mirror image, with the fan starting at the outer bottom-right corner.","Among the four answer figures, the first one (counting from the left) shows exactly that fan of lines from the bottom-right corner, with the same small crossing lines near the top-left. The other figures differ in the lines at the corner or in the inside details."],
  tip: "In pattern-completion questions, look for mirror or rotation between the cells you can see.",
  check: "In the scan, the letters (A) to (D) printed under the figures are shifted: the label (B) sits under the first answer figure. That is why the answer key at the top of the paper says (B). Here the four answer figures are counted from the left, so the first one is correct."
},
/* 57 */ {
  q: "Find out the alternative figure which contains figure (M) as its part. (Figure M is on the left; the four answer figures A, B, C, D follow from left to right.)",
  img: "p2-q57.png",
  opts: ["Figure A","Figure B","Figure C","Figure D"], a: 3,
  key: "The given figure must be found inside the answer figure without adding or removing any line, and at the same size and direction.",
  steps: ["Figure (M) is made of two curved lines that bend towards each other and almost touch in the middle: like )(, forming an X-shaped waist.","Figures (A) and (B) are made of curves that bulge OUTWARDS, like ( ) (lens shapes). They do not contain the )( waist.","Figure (C) has its curves in separate groups on the left and the right, so there is no waist in the middle.","Figure (D) has a )( X-shape right in the centre, so (M) can be traced inside it."],
  tip: "Trace the most unusual part of the given figure first, then look for it in each option."
},
/* 58 */ {
  q: "Complete the analogy: Doctor : Hospital :: Teacher : ?",
  opts: ["Exam","School","Office","Student"], a: 1,
  key: "Find the relation in the first pair, then use the same relation for the second.",
  steps: ["A doctor works in a hospital (Person : Place of work).","A teacher works in a school."],
  tip: "Say the relation as a sentence: 'A doctor works in a hospital'. Then use the same sentence."
},
/* 59 */ {
  q: "Complete the analogy: Author : Book :: Sculptor : ?",
  opts: ["Statue","Paint","Canvas","Museum"], a: 0,
  key: "The relation is: a person and the thing he or she creates.",
  steps: ["An author creates (writes) a book.","A sculptor creates a statue."],
  watch: "Paint and canvas are materials, not the finished creation. A museum is only a place to display it."
},
/* 60 */ {
  q: "Complete the analogy: Profit & Loss A/c : Income Statement :: Balance Sheet : ?",
  opts: ["Ledger","Journal","Trial Balance","Position Statement"], a: 3,
  key: "The relation is: an accounting statement and its other name.",
  steps: ["Profit & Loss Account is also called the Income Statement (same thing, another name).","The Balance Sheet is also called the Position Statement (Statement of Financial Position)."],
  tip: "Ledger, Journal and Trial Balance are accounting records, not other names of the Balance Sheet."
},
/* 61 */ {
  q: "Which part of MS Word contains commands such as Save, Undo, and Redo?",
  opts: ["Status Bar","Quick Access Toolbar","Ruler","Document Area"], a: 1,
  key: "Think of the small row of icons at the very top-left corner of the Word window.",
  steps: ["The Quick Access Toolbar sits at the top-left, above the ribbon.","It holds the most used commands: Save, Undo and Redo.","The Status Bar (bottom) shows page and word count, the Ruler shows margins, and the Document Area is where you type."],
  tip: "You can add your favourite commands to the Quick Access Toolbar."
},
/* 62 */ {
  q: "Which MS Word feature is used to check spelling and grammar?",
  opts: ["F2","F5","F7","F12"], a: 2,
  key: "Learn the function keys of Word. F7 opens the Spelling and Grammar check.",
  steps: ["Press F7 to start the spelling and grammar check.","The other keys do different jobs (see the table)."],
  table: { head:["Key","What it does in MS Word"], rows:[["F7","Spelling and Grammar check"],["F12","Save As"],["F5","Go To (Find and Replace box)"],["F2","Move the selected text"]] },
  tip: "Remember: F7 = Spelling. F12 = Save As."
},
/* 63 */ {
  q: "Which feature is used to add effects when moving from one slide to another?",
  opts: ["Animation","Transition","Design","Slide Master"], a: 1,
  key: "Look at the words in the question: effects when moving FROM ONE SLIDE TO ANOTHER.",
  steps: ["An effect between two slides is called a Transition (for example Fade, Push, Wipe).","Animation is different: it moves text or objects INSIDE one slide."],
  table: { head:["Feature","Use"], rows:[["Transition","Effect while changing from one slide to the next"],["Animation","Effect on text or objects inside a slide"],["Design","Themes, colours and backgrounds"],["Slide Master","Common layout and formatting for all slides"]] },
  watch: "Animation and Transition sound alike. Between slides = Transition. Inside a slide = Animation."
},
/* 64 */ {
  q: "Which Excel formula is used to find the highest value in a range?",
  opts: ["=MIN(A1:A10)","=AVERAGE(A1:A10)","=MAX(A1:A10)","=COUNT(A1:A10)"], a: 2,
  key: "MAX = maximum = the highest value.",
  steps: ["=MAX(A1:A10) gives the largest number in cells A1 to A10.","The others: MIN gives the smallest, AVERAGE gives the mean, COUNT counts how many numbers there are."],
  table: { head:["Formula","Result"], rows:[["=MAX(A1:A10)","Highest value"],["=MIN(A1:A10)","Lowest value"],["=AVERAGE(A1:A10)","Average (mean)"],["=COUNT(A1:A10)","How many cells have numbers"]] },
  tip: "MAX = largest, MIN = smallest."
},
/* 65 */ {
  q: "Which shortcut key is used to apply AutoSum in MS Excel?",
  opts: ["Ctrl + S","Alt + =","Ctrl + 1","F2"], a: 1,
  key: "AutoSum adds up a column or row of numbers. Its shortcut is Alt + = (hold Alt, then press the equals key).",
  steps: ["Select the cell below (or beside) your numbers.","Press Alt + =. Excel writes the SUM formula for you.","Ctrl + S saves the file, Ctrl + 1 opens Format Cells, and F2 edits the active cell."],
  table: { head:["Shortcut","Action in Excel"], rows:[["Alt + =","AutoSum"],["Ctrl + S","Save"],["Ctrl + 1","Format Cells"],["F2","Edit the active cell"]] },
  tip: "Alt + = is the keyboard way of clicking the AutoSum button.",
  note: "In the paper the option letters are printed in the order A, C, B, D. The correct option, Alt + =, is the one printed as (B)."
}
  ]
};

/* ---- Small calculation boxes shown inside the solution ---- */
window.PAPERS["paper2"].flows = {
 1:[["Old price","Rs.100/kg"],"+20% →",["New price","Rs.120/kg"],"Rs.100 buys →",["Buys","5/6 kg"],"→",["Reduction","16.67%","g"]],
 2:[["Cost","Rs.100"],"+30% →",["Marked","Rs.130"],"−10% →",["Selling","Rs.117"],"→",["Gain","17%","g"]],
 3:[["Loss 20%","SP = 80% of CP"],"vs",["Gain 10%","SP = 110% of CP"],"30% of CP = 12 →",["Cost price","Rs.40","g"]],
 4:[["A","50,000 × 12 = 6,00,000"],":",["B","60,000 × 8 = 4,80,000"],"→",["Ratio","5 : 4","g"]],
 5:[["Speed","72 km/h = 20 m/s"],"×",["Time","9 s"],"=",["Length","180 m","g"]],
 6:[["Downstream","12 km in 0.8 h"],"→",["Speed","15 km/h"],"− 3 current →",["Still water","12 km/h","g"]],
 7:[["Opposite","40 + 50 = 90 km/h"],"× 5/18 →",["In m/s","25 m/s"],"× 12 s →",["Length","300 m","g"]],
 8:[["Doubles","SI = P"],"1 = R × 8 / 100 →",["Rate","12.5%","g"]],
 9:[["Simple interest","3,000"],"vs",["Compound interest","3,150"],"→",["Difference","Rs.150","g"]],
 10:[["Total of 5","5 × 27 = 135"],"−",["Total of 4","4 × 25 = 100"],"=",["Excluded","35","g"]],
 11:[["Numbers","3x : 5x"],"− 9 →",["Solve","x = 11"],"→",["Smaller (3x)","33","g"]],
 12:[["30 students","30 × 15 = 450"],"vs",["31 people","31 × 16 = 496"],"→",["Teacher","46 years","g"]],
 13:[["Son s, Father 4s","after 20 yrs"],"4s + 20 = 2(s + 20) →",["s","10"],"→",["Father (4s)","40 years","g"]],
 14:[["Hundreds","5"],"×",["Tens","4"],"×",["Units","3"],"=",["Total","60","g"]],
 15:[["C(15,11)","= C(15,4)"],"32,760 ÷ 24 →",["Ways","1,365","g"]],
 16:[["Even","2, 4, 6"],"and",["Prime","2, 3, 5"],"→ only 2 →",["Probability","1/6","g"]],
 17:[["Total outcomes","36"],"favourable (2,6)(3,5)(4,4)(5,3)(6,2) →",["Probability","5/36","g"]],
 18:[["Area","144"],"√",["Side","12 cm"],"× 4",["Perimeter","48 cm","g"]],
 19:[["½ × base × height","½ × 12 × 8"],"=",["Area","48 cm²","g"]],
 20:[["s² + s² = 10²","2s² = 100"],"→",["Area = s²","50 cm²","g"]],
 21:[["SEARCH","S=2 E=1 A=4 R=6 C=7 H=3"],"→",["Code","214673","g"]],
 22:[["LIGHT → MJHIU","+1 each letter"],"so",["FLAME","GMBNF","g"]],
 23:[["WATER → TXQBO","−3 each letter"],"so",["FIRE","CFOB","g"]],
 24:[["North","10 − 6 = 4 km"],"+",["East","3 km"],"→ √25 →",["Distance","5 km","g"]],
 25:[["West","270°"],"+45° →",["North-West","315°"],"+180° →",["South-East","135°","g"]],
 26:[["A","5 m West of B"],"&",["C","5 m South of B"],"→ stand at C, look at A →",["A from C","North-West","g"]],
 27:[["P + Q","P is father of Q"],"Q − R →",["Q and R","brother & sister"],"→",["P is","father of R","g"]],
 28:[["My father's son","= me"],"→",["That man's father","= me"],"→",["Portrait of","my son","g"]],
 29:[["D","brother of C"],"C is wife of E →",["D is E's","Brother-in-law","g"]],
 30:[["366","= 52 × 7 + 2"],"→",["Odd days","2","g"]],
 31:[["6 Mar 2005","Monday"],"− 1 odd day →",["6 Mar 2004","Sunday","g"]],
 32:[["1600 yrs","0"],"+",["300 yrs","1"],"+",["46 yrs","1"],"+",["1947","3"],"= 5 →",["Day","Friday","g"]],
 33:[["9 am → 3 pm","6 hours"],"× 30° →",["Rotation","180°","g"]],
 34:[["12 hours","22 times"],"× 2 →",["24 hours","44 times","g"]],
 35:[["2"],["3"],["5"],["7"],["11"],"next prime →",["13","","g"]],
 36:[["Z","26"],"−3",["W","23"],"−3",["T","20"],"−3",["Q","17"],"−3",["N","14","g"]],
 40:[["S","tallest","g"],">",["R"],">",["P"],">",["Q","shortest"]],
 49:[["D","210"],"−",["A","120"],"=",["Difference","90","g"]],
 50:[["Total","750"],"÷ 5 →",["Average","150","g"]],
 51:[["B","180"],"÷",["D","210"],"× 100 →",["Percentage","85.71%","g"]],
 52:[["E: 90","+50% = 135"],"−",["A: 120","−25% = 90"],"=",["Difference","45","g"]],
 53:[["Total","750"],"+ 20% (150) →",["New total","900","g"]],
 55:[["12:00 → 11:60","− 8:25"],"=",["Actual time","3:35","g"]],
 58:[["Doctor","Hospital"],"::",["Teacher","School","g"]],
 59:[["Author","Book"],"::",["Sculptor","Statue","g"]],
 60:[["P&L A/c","Income Statement"],"::",["Balance Sheet","Position Statement","g"]]
};

/* ---- Drawn diagrams shown inside the solution ---- */
window.PAPERS["paper2"].diagrams = {
 24:{t:"path",pts:[[0,0],[0,10],[0.6,4],[3.6,4]],labels:["10 km North","6 km South","3 km East"],dist:"5 km"},
 25:{t:"compass",arrows:[{deg:270,l:"Start: facing West"},{deg:315,l:"+45° → North-West"},{deg:135,l:"+180° → South-East"}]},
 26:{t:"path",pts:[[0,-5],[0,0],[-5,0]],labels:["5 m (C is South of B)","5 m (A is West of B)"],sl:"C",el:"A",dist:"A from C = North-West"},
 27:{t:"tree",nodes:[{id:"p",x:170,y:30,t:"P (father)",c:"g"},{id:"q",x:85,y:105,t:"Q (sister of R)"},{id:"r",x:255,y:105,t:"R"}],edges:[["p","q"],["p","r"]],cap:"P is the father of Q, and Q and R are siblings, so P is the father of R"},
 28:{t:"tree",nodes:[{id:"s",x:170,y:30,t:"Speaker (me)"},{id:"m",x:170,y:105,t:"Man in portrait",c:"g"}],edges:[["s","m"]],cap:"The portrait is of the speaker's son"},
 29:{t:"tree",w:420,nodes:[{id:"b",x:132,y:30,t:"B (parent)"},{id:"a",x:350,y:30,t:"A (parent)"},{id:"d",x:64,y:105,t:"D (son of B)",c:"g"},{id:"c",x:200,y:105,t:"C (daughter of B)"},{id:"e",x:350,y:105,t:"E (son of A)"}],edges:[["b","d"],["b","c"],["c","e","m"],["a","e"]],cap:"D is the brother of E's wife, so D is E's brother-in-law"},
 30:{t:"stack",parts:[["52 weeks (364 days)",364,"mut"],["2 odd days",2,"bad"]],cap:"366 = 364 + 2 → 2 odd days"},
 31:{t:"week",from:0,to:1,cap:"+1 day: 2004 → 2005"},
 33:{t:"clockpair",a:[9,0,"9:00 am"],b:[3,0,"3:00 pm"],mid:"6 h × 30°"},
 37:{t:"ring",seats:["P","Q","?","?","?"],hi:[1]},
 38:{t:"ring",seats:["S","R","T","P","Q"],hi:[4]},
 39:{t:"stack",parts:[["14 on his left",14,"mut"],["A→B seat",1,""],["8 on his right",8,"mut"]],cap:"Total = 15 + 9 − 1 = 23"},
 44:{t:"vopts",kinds:["tri","sep","nest","row"],hi:1},
 45:{t:"vopts",kinds:["sep","tri","nest","ov"],hi:3},
 46:{t:"kab",hi:true},
 47:{t:"circles",H:232,items:[{x:200,y:110,r:100,v:0,l:"BATS",lx:200,ly:28},{x:200,y:122,r:46,v:2,l:"Rats",lx:225,ly:127},{x:118,y:122,r:55,v:1,l:"Cats",lx:95,ly:127}],notes:["Cats and Rats overlap, and all Rats are inside Bats.","So the overlap part of Cats is inside Bats."]},
 48:{t:"circles",H:232,items:[{x:250,y:110,r:92,v:0,l:"ERASERS",lx:262,ly:32},{x:262,y:120,r:46,v:2,l:"Pencils",lx:262,ly:124},{x:95,y:120,r:50,v:1,l:"Pens",lx:95,ly:124}],notes:["Pens are outside Pencils. Pens may or may not touch Erasers","(we cannot be sure)."]},
 55:{t:"clockpair",a:[8,25,"Mirror shows 8:25"],b:[3,35,"Actual time 3:35"],mid:"12:00 − 8:25"}
};
