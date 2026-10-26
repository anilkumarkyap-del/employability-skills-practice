/* MODULE 3 – Concept 3.2 Statements and Assumptions */
window.PAPERS = window.PAPERS || {};
window.PAPERS["m3-2"] = {
  id: "m3-2",
  title: "3.2 Statements and Assumptions",
  subtitle: "Module 3: Analytical Reasoning · 10 questions",
  sections: [{ name: "3.2 Statements and Assumptions", from: 1, to: 10 }],
  toolbox: { head:["Rule","Remember"], rows:[
    ["<b>Implicit assumption</b>","Something the speaker MUST believe for the statement to make sense."],
    ["<b>Test</b>","Ask: if this assumption were false, would the statement become meaningless?"],
    ["<b>Advertisements</b>","assume people respond (buy)."],
    ["<b>Notices and warnings</b>","assume people read them and obey."],
    ["<b>Avoid</b>","Extreme or unrelated ideas are usually not assumptions."]] },
  questions: [
/* 1 */ {
  label: "3.2.1",
  q: "Statement: 'Please read safety rules before starting machine in factory.'<br>Assumptions: I. Workers are literate. II. Workers will pay attention to rules.",
  opts: ["Both I and II are implicit","Only I is implicit","Only II is implicit","Neither is implicit"], a: 0,
  key: "A written safety notice only works if people can read it and will follow it.",
  steps: ["A written notice assumes workers <b>can read</b> (I is implicit).","The notice also assumes workers will <b>heed</b> the rules (II is implicit).","Both are implicit."]
},
/* 2 */ {
  label: "3.2.2",
  q: "Statement: 'Buy pure butter of Brand X - Advertisement.'<br>Assumptions: I. People want pure butter. II. Advertisements influence buyers.",
  opts: ["Only I is implicit","Only II is implicit","Both I and II are implicit","Neither is implicit"], a: 2,
  key: "An advertiser believes people want what he is offering, and that advertising works.",
  steps: ["The ad stresses \"pure\", so the advertiser believes customers <b>want purity</b> (I).","Companies pay for ads only if they believe ads <b>drive sales</b> (II).","Both are implicit."]
},
/* 3 */ {
  label: "3.2.3",
  q: "Statement: 'Switch off lights when leaving room.'<br>Assumptions: I. Electricity can be saved. II. People will follow advice.",
  opts: ["Both I and II are implicit","Only I is implicit","Only II is implicit","Neither is implicit"], a: 0,
  key: "Advice is given because the person expects a benefit and expects people to listen.",
  steps: ["The advice assumes it saves electricity (I).","It also assumes people will comply (II).","Both are implicit."]
},
/* 4 */ {
  label: "3.2.4",
  q: "Statement: 'Do not lean out of running train window.'<br>Assumptions: I. Leaning out is dangerous. II. Passengers read warnings.",
  opts: ["Only I is implicit","Both I and II are implicit","Only II is implicit","Neither is implicit"], a: 1,
  key: "A warning exists because there is a danger, and because passengers will see it.",
  steps: ["Warning notices imply a risk of danger (I).","They also assume passengers read the safety notices (II).","Both are implicit."]
},
/* 5 */ {
  label: "3.2.5",
  q: "Statement: 'Apply for admission before 30th June.'<br>Assumptions: I. Candidates apply before deadline. II. Seats will be filled.",
  opts: ["Only I is implicit","Only II is implicit","Both I and II are implicit","Neither is implicit"], a: 0,
  key: "A deadline assumes people will apply by that date. It does not promise that every seat will fill.",
  steps: ["Giving a deadline assumes applicants will submit before that date (I is implicit).","\"Seats will be filled\" is an unstated extra guess (II is not implicit).","Only I is implicit."]
},
/* 6 */ {
  label: "3.2.6",
  q: "Statement: 'Consult a doctor for persistent headache.'<br>Assumptions: I. Headache can be treated by doctor. II. Doctor is qualified.",
  opts: ["Only I is implicit","Only II is implicit","Both I and II are implicit","Neither is implicit"], a: 2,
  key: "You send someone to a doctor only if the problem is treatable and the doctor is capable.",
  steps: ["The advice assumes the problem is treatable (I).","It also assumes doctors have the expertise (II).","Both are implicit."]
},
/* 7 */ {
  label: "3.2.7",
  q: "Statement: 'Plant more trees to prevent soil erosion.'<br>Assumptions: I. Trees help hold soil. II. Soil erosion is desirable.",
  opts: ["Both I and II are implicit","Only I is implicit","Only II is implicit","Neither is implicit"], a: 1,
  key: "The action is suggested because trees help. Nobody wants a problem that they are trying to prevent.",
  steps: ["Tree roots bind the soil, which is why planting is suggested (I is implicit).","Soil erosion is a problem we want to stop, so it is NOT desirable (II is not implicit).","Only I is implicit."]
},
/* 8 */ {
  label: "3.2.8",
  q: "Statement: 'Keep quiet in the library.'<br>Assumptions: I. Library isn't a place for quiet reading. II. Noise disturbs readers.",
  opts: ["Both I and II are implicit","Only I is implicit","Only II is implicit","Neither is implicit"], a: 2,
  key: "The instruction only makes sense if noise causes a problem.",
  steps: ["I says a library is NOT for quiet reading. That would make the instruction pointless: not implicit.","II: noise disturbs readers, which is the reason for the rule: implicit.","Only II is implicit."]
},
/* 9 */ {
  label: "3.2.9",
  q: "Statement: 'Use eco-friendly bags for shopping.'<br>Assumptions: I. Eco-friendly bags increase pollution. II. Plastic bags should be used for shopping.",
  opts: ["Both I and II are implicit","Only I is implicit","Only II is implicit","Neither is implicit"], a: 3,
  key: "The advice is the opposite of both assumptions.",
  steps: ["Recommending eco-friendly bags assumes they have a positive effect on the environment, so I is not implicit.","The advice assumes plastic bags harm the environment, so II is not implicit.","Neither assumption is implicit."]
},
/* 10 */ {
  label: "3.2.10",
  q: "Statement: 'Train tickets must be booked in advance.'<br>Assumptions: I. Advance booking secures seat. II. Trains run on schedule.",
  opts: ["Only I is implicit","Only II is implicit","Both I and II are implicit","Neither is implicit"], a: 0,
  key: "Ask which belief is needed for the rule \"book in advance\".",
  steps: ["Advance booking is asked for because it secures a seat (I is implicit).","Whether trains run on time has nothing to do with booking rules (II is not implicit).","Only I is implicit."]
}
  ]
};
