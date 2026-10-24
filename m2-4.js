/* MODULE 2 – Concept 2.4 Problems on Calendars */
window.PAPERS = window.PAPERS || {};
window.PAPERS["m2-4"] = {
  id: "m2-4",
  title: "2.4 Problems on Calendars",
  subtitle: "Module 2: Logical Reasoning · 10 questions",
  sections: [{ name: "2.4 Problems on Calendars", from: 1, to: 10 }],
  questions: [
/* 1 */ {
  q: "If 15th August 2021 fell on a Sunday, on which day of the week did 15th August 2022 fall?",
  opts: ["Monday","Tuesday","Sunday","Saturday"], a: 0,
  key: "One year later the same date moves forward by the number of odd days in that year.",
  steps: ["From 15 Aug 2021 to 15 Aug 2022 is one year with no 29 February, so 365 days.","365 days = 52 weeks + 1 odd day.","Sunday + 1 day = Monday."],
  tip: "Ordinary year: date moves 1 weekday forward. Leap year (if 29 Feb is in between): 2 weekdays."
},
/* 2 */ {
  q: "How many odd days are there in an ordinary year of 365 days?",
  opts: ["0 odd days","2 odd days","0 odd days","1 odd day"], a: 3,
  key: "Odd days are the days left over after taking out complete weeks (groups of 7).",
  steps: ["365 ÷ 7 = 52 complete weeks, with 1 day left over (52 × 7 = 364).","So an ordinary year has 1 odd day."],
  table: { head:["Days","Divide by 7","Remainder = odd days"], rows:[["365 days","52 × 7 + 1","1"]] },
  note: "Options (A) and (C) are identical (both '0 odd days') in the textbook. It makes no difference to the answer."
},
/* 3 */ {
  q: "How many odd days are there in a leap year?",
  opts: ["0 odd days","1 odd day","2 odd days","3 odd days"], a: 2,
  key: "Same method: divide the days by 7 and see what is left.",
  steps: ["A leap year has 366 days.","366 ÷ 7 = 52 weeks and 2 days left over (52 × 7 = 364).","So a leap year has 2 odd days."],
  table: { head:["Days","Divide by 7","Remainder = odd days"], rows:[["366 days","52 × 7 + 2","2"]] }
},
/* 4 */ {
  q: "If 6th April 2026 was Monday, what day of the week was Teachers' Day of that year?",
  opts: ["Friday","Saturday","Sunday","Thursday"], a: 1,
  key: "Teachers' Day is 5 September. Count the days from 6 April to 5 September, find the odd days, and move forward from Monday.",
  steps: ["Days from 6 April to 5 September: April 24 + May 31 + June 30 + July 31 + August 31 + September 5 = 152 days.","152 ÷ 7 = 21 weeks and 5 days left over (21 × 7 = 147). So 5 odd days.","Monday + 5 days = Tuesday, Wednesday, Thursday, Friday, Saturday."],
  table: { head:["Month","Days counted"], rows:[["April (7th to 30th)","24"],["May","31"],["June","30"],["July","31"],["August","31"],["September (1st to 5th)","5"],["Total","152 days = 5 odd days"]] },
  note: "The textbook writes the answer as '(A) Saturday', but Saturday is option (B) in the printed list. The correct option is (B)."
},
/* 5 */ {
  q: "Today is Monday. After 61 days, it will be:",
  opts: ["Wednesday","Tuesday","Saturday","Thursday"], a: 2,
  key: "Only the leftover days (after dividing by 7) matter.",
  steps: ["61 ÷ 7 = 8 weeks and 5 days left over (8 × 7 = 56; 61 − 56 = 5).","Monday + 5 days = Tuesday, Wednesday, Thursday, Friday, Saturday."]
},
/* 6 */ {
  q: "Which of the following is a leap year?",
  opts: ["2000","1900","1800","2100"], a: 0,
  key: "A century year (ending in 00) is a leap year only if it is divisible by 400.",
  steps: ["2000 ÷ 400 = 5 exactly, so 2000 is a leap year.","1900, 1800 and 2100 are not divisible by 400, so they are not leap years."],
  table: { head:["Year","Divisible by 400?","Leap year?"], rows:[["2000","Yes (2000 ÷ 400 = 5)","Yes"],["1900","No","No"],["1800","No","No"],["2100","No","No"]] },
  tip: "Century years are the trap. Divide by 400, not 4."
},
/* 7 */ {
  q: "On 6th March 2005 Monday falls. What was the day of the week on 6th March 2004?",
  opts: ["Saturday","Sunday","Monday","Tuesday"], a: 1,
  key: "Count the days between the two dates, find the odd days, then go BACKWARDS from Monday.",
  steps: ["From 6 March 2004 to 6 March 2005, February 2005 is an ordinary February (28 days). The leap day of 2004 (29 February) is BEFORE 6 March 2004, so the period has 365 days.","365 days = 52 weeks + 1 odd day.","6 March 2004 is one weekday before 6 March 2005: Monday − 1 = Sunday."],
  watch: "Do not count 2 odd days. 29 February 2004 comes before 6 March 2004, so it is not inside the period."
},
/* 8 */ {
  q: "What was the day of the week on 15th August 1947?",
  opts: ["Saturday","Thursday","Friday","Wednesday"], a: 2,
  key: "Count odd days for the complete years first, then for the days of 1947 up to 15 August. Then count forward from Sunday (0 odd days).",
  steps: ["1600 years = 0 odd days. 300 years (to 1900) = 1 odd day.","46 years (1901 to 1946) = 11 leap years + 35 ordinary years = 11 × 2 + 35 × 1 = 57 days = 1 odd day.","1 Jan to 15 Aug 1947: Jan 3 + Feb 0 + Mar 3 + Apr 2 + May 3 + Jun 2 + Jul 3 + Aug (15 days = 1) = 17 days = 3 odd days.","Total = 0 + 1 + 1 + 3 = 5 odd days. Sunday + 5 = Friday."],
  table: { head:["Part","Odd days"], rows:[["1600 years","0"],["300 years","1"],["46 years (1901 – 1946)","57 days = 1"],["1 Jan to 15 Aug 1947","17 days = 3"],["Total","5 = Friday"]] },
  tip: "0 Sun, 1 Mon, 2 Tue, 3 Wed, 4 Thu, 5 Fri, 6 Sat."
},
/* 9 */ {
  q: "The calendar for the year 2007 will be same for the year:",
  opts: ["2014","2018","2017","2012"], a: 1,
  key: "Two years have the same calendar when the total odd days between them add up to a multiple of 7 (and both are the same kind of year).",
  steps: ["2007 is an ordinary year. Add the odd days year by year until the total is 0 (a multiple of 7).","2007 (1) + 2008 (2) + 2009 (1) + 2010 (1) + 2011 (1) + 2012 (2) + 2013 (1) + 2014 (1) + 2015 (1) + 2016 (2) + 2017 (1) = 14 = 0 odd days.","So the next year, 2018, starts on the same weekday and has the same calendar."],
  table: { head:["Year","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017"], rows:[["Odd days","1","2","1","1","1","2","1","1","1","2","1"],["Running total","1","3","4","5","6","8","9","10","11","13","14"]] },
  tip: "Leap years (2008, 2012, 2016) give 2 odd days. Others give 1."
},
/* 10 */ {
  q: "If 26th January 2016 was Tuesday, what day was 28th January 2023?",
  opts: ["Thursday","Saturday","Friday","Tuesday"], a: 1,
  key: "First go from 26 Jan 2016 to 26 Jan 2023 (whole years), then add 2 days to reach 28 January.",
  steps: ["From 26 Jan 2016 to 26 Jan 2023 is 7 years. Two 29 Februaries fall inside: 2016 and 2020.","Odd days = 7 (one for each year) + 2 (leap days) = 9, and 9 = 7 + 2, so 2 odd days.","26 Jan 2023 = Tuesday + 2 = Thursday.","28 Jan 2023 is 2 days later: Thursday + 2 = Saturday."],
  note: "The textbook solution has a typing slip ('26 Jan 223'). It should read 26 Jan 2023."
}
  ]
};
window.PAPERS["m2-4"].flows = {
 1:[["15 Aug 2021","Sunday"],"+365 days (1 odd day) →",["15 Aug 2022","Monday","g"]],
 2:[["365 days","52 × 7 + 1"],"→",["Odd days","1","g"]],
 3:[["366 days","52 × 7 + 2"],"→",["Odd days","2","g"]],
 4:[["152 days","21 × 7 + 5"],"→",["Monday","+5"],"→",["5 Sept","Saturday","g"]],
 5:[["61 days","8 × 7 + 5"],"→",["Monday","+5"],"→",["After 61 days","Saturday","g"]],
 6:[["2000 ÷ 400","= 5 ✓"],"vs",["1900, 1800, 2100","not ÷ 400 ✗"],"→",["Leap year","2000","g"]],
 7:[["6 Mar 2004","Sunday"],"+365 days (1 odd day) →",["6 Mar 2005","Monday","g"]],
 8:[["0 + 1 + 1 + 3","= 5 odd days"],"Sunday + 5 →",["15 Aug 1947","Friday","g"]],
 9:[["2007 → 2017","odd days total 14"],"= 0 mod 7 →",["Same calendar","2018","g"]],
 10:[["26 Jan 2016","Tuesday"],"+2 odd days →",["26 Jan 2023","Thursday"],"+2 days →",["28 Jan 2023","Saturday","g"]]
};
window.PAPERS["m2-4"].diagrams = {
 1:{t:"week",from:0,to:1,cap:"+1 day: 2021 → 2022"},
 2:{t:"stack",parts:[["52 weeks (364 days)",364,"mut"],["1 odd day",1,"bad"]],cap:"365 = 364 + 1 → 1 odd day"},
 3:{t:"stack",parts:[["52 weeks (364 days)",364,"mut"],["2 odd days",2,"bad"]],cap:"366 = 364 + 2 → 2 odd days"},
 4:{t:"stack",parts:[["Apr 24",24,"mut"],["May 31",31,""],["Jun 30",30,"mut"],["Jul 31",31,""],["Aug 31",31,"mut"],["Sep 5",5,"bad"]],cap:"Total 152 days = 21 weeks + 5 odd days"},
 5:{t:"week",from:1,to:6,cap:"+5 days: Monday → Saturday"},
 7:{t:"week",from:0,to:1,cap:"+1 day: 2004 → 2005"},
 8:{t:"week",from:0,to:5,cap:"Sunday + 5 odd days = Friday"},
 10:{t:"week",from:2,to:6,cap:"Tue + 2 + 2 = Saturday"}
};
