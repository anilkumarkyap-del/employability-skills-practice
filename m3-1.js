/* MODULE 3 – Concept 3.1 Statements and Conclusions */
window.PAPERS = window.PAPERS || {};
window.PAPERS["m3-1"] = {
  id: "m3-1",
  title: "3.1 Statements and Conclusions",
  subtitle: "Module 3: Analytical Reasoning · 10 questions",
  sections: [{ name: "3.1 Statements and Conclusions", from: 1, to: 10 }],
  toolbox: { head:["Rule","Remember"], rows:[
    ["Direct deduction","A conclusion follows only if the statement fully supports it."],
    ["Extreme words","Words like only, all, always, never, daily, from now on usually make a conclusion wrong."],
    ["Outside knowledge","Do not use general knowledge or guesses. Use only what the statement says."],
    ["Advice or opinion","\"People should ...\" is a suggestion, not a logical conclusion."]] },
  questions: [
/* 1 */ {
  label: "3.1.1",
  q: "Statement: Govt. of India announced subsidies for EV buyers to reduce urban air pollution.<br>Conclusions: I. Electric Vehicles produce zero tailpipe emissions. II. People will buy only EVs from now on.",
  opts: ["Only Conclusion I follows","Only Conclusion II follows","Both I and II follow","Neither I nor II follows"], a: 0,
  key: "Conclusion I explains WHY the government wants EVs. Conclusion II is an extreme guess.",
  steps: ["Conclusion I: the subsidy is meant to cut pollution through EVs. That makes sense only because EVs have no tailpipe exhaust. It <b>follows</b>.","Conclusion II: \"only EVs from now on\" is an overgeneralisation. Subsidies encourage EVs but do not stop other vehicles. It does <b>not follow</b>.","So only Conclusion I follows."],
  tip: "The word \"only\" is a warning sign."
},
/* 2 */ {
  label: "3.1.2",
  q: "Statement: Regular physical exercise is necessary for maintaining good health.<br>Conclusions: I. All healthy people exercise daily. II. Inactive lifestyle causes health issues.",
  opts: ["Neither I nor II follows","Only I follows","Only II follows","Both follow"], a: 2,
  key: "Check each conclusion against the statement. Extreme claims (all, daily) are not supported.",
  steps: ["I says \"all healthy people exercise daily\". The statement says only that regular exercise is necessary. It is extreme and unsupported: does not follow.","II says an inactive lifestyle causes health problems. If exercise is necessary for health, then no exercise harms health: follows.","So only Conclusion II follows."]
},
/* 3 */ {
  label: "3.1.3",
  q: "Statement: The price of petrol has increased significantly over last six months.<br>Conclusions: I. Crude oil prices in international market have risen. II. People should stop using vehicles.",
  opts: ["Only I follows","Only II follows","Both follow","Neither follows"], a: 0,
  key: "A conclusion should be a logical result of the statement, not a piece of advice.",
  steps: ["I is a possible and logical explanation for the rise in petrol prices: follows.","II is an extreme action recommendation, not a logical conclusion: does not follow.","So only Conclusion I follows."],
  tip: "\"People should ...\" is advice. Conclusions must be facts that come out of the statement."
},
/* 4 */ {
  label: "3.1.4",
  q: "Statement: Company X has doubled its revenue this financial year.<br>Conclusions: I. Company X products are popular. II. The management team performed efficiently.",
  opts: ["Both I and II follow","Only I follows","Only II follows","Neither follows"], a: 0,
  key: "Doubling revenue points to both demand for the products and good management.",
  steps: ["Revenue doubled, so more people bought the products: they are popular (I follows).","Doubling revenue also shows effective running of the company: efficient management (II follows).","Both follow."]
},
/* 5 */ {
  label: "3.1.5",
  q: "Statement: Honesty is the best policy.<br>Conclusions: I. Honest people are always rewarded. II. Dishonest people never succeed.",
  opts: ["Both follow","Only I follows","Only I follows","Neither I nor II follows"], a: 3,
  key: "A proverb gives a general idea. It does not promise \"always\" or \"never\".",
  steps: ["I uses \"always\" and II uses \"never\". These extreme words are not supported by the proverb.","So neither conclusion follows."],
  watch: "Do not choose an option just because the idea sounds good. Check the extreme words.",
  note: "In the textbook option (C) is printed as 'Only I follows' by mistake; it should read 'Only II follows'. It does not change the answer."
},
/* 6 */ {
  label: "3.1.6",
  q: "Statement: Many students failed in mathematics exam this year.<br>Conclusions: I. Math question paper was extremely difficult. II. Teaching standard was poor.",
  opts: ["Both follow","Only I follows","Only II follows","Neither follows directly"], a: 3,
  key: "Failure can have many causes. The statement does not name any one of them.",
  steps: ["The failure could be due to a hard paper, poor teaching, lack of preparation, and more.","Neither cause can be proved from the statement alone.","So neither conclusion follows directly."]
},
/* 7 */ {
  label: "3.1.7",
  q: "Statement: Sunlight is a rich source of Vitamin D.<br>Conclusions: I. Human body synthesizes Vitamin D in sunlight. II. Vitamin D cannot be taken through food.",
  opts: ["Only I follows","Only II follows","Both follow","Neither follows"], a: 0,
  key: "Use only what the statement says: sunlight gives Vitamin D.",
  steps: ["I connects sunlight with Vitamin D making in the body: follows.","II says food cannot give Vitamin D. This is not stated and goes against general knowledge: does not follow.","Only Conclusion I follows."]
},
/* 8 */ {
  label: "3.1.8",
  q: "Statement: Organic fruits are grown without synthetic pesticides.<br>Conclusions: I. Organic fruits are safer. II. Non-organic fruits are poisonous.",
  opts: ["Only I follows","Only II follows","Both follow","Neither follows"], a: 0,
  key: "No pesticides supports safety. Calling other fruits poisonous is an exaggeration.",
  steps: ["Growing without synthetic pesticides supports the idea that organic fruits are safer (I follows).","\"Non-organic fruits are poisonous\" is an extreme exaggeration (II does not follow).","Only I follows."]
},
/* 9 */ {
  label: "3.1.9",
  q: "Statement: All engineers are creative thinkers.<br>Conclusions: I. Raman is an engineer so he is a creative thinker. II. All creative thinkers are engineers.",
  opts: ["Both follow","Only I follows","Only II follows","Neither follows"], a: 1,
  key: "Engineers are INSIDE the group of creative thinkers. Going from the small group to the big group is fine; going back is not.",
  steps: ["I: Raman is an engineer, engineers are creative thinkers, so Raman is a creative thinker. Follows.","II reverses the statement. Creative thinkers can include people who are not engineers. Does not follow.","Only I follows."],
  watch: "\"All A are B\" does not mean \"All B are A\"."
},
/* 10 */ {
  label: "3.1.10",
  q: "Statement: Climate change is leading to unpredictable weather patterns globally.<br>Conclusions: I. Weather forecasting is no longer needed. II. Global temperatures are shifting.",
  opts: ["Only I follows","Only II follows","Both follow","Neither follows"], a: 1,
  key: "Unpredictable weather comes from changing climate. It makes forecasting MORE important, not less.",
  steps: ["II: unpredictable patterns come from shifting temperatures and climate factors. Follows.","I: unpredictable weather increases the need for forecasting. Does not follow.","Only II follows."]
}
  ]
};
