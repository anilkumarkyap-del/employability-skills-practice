/* MODULE 4 – Digital Literacy: MS Word, MS Excel, MS PowerPoint */
window.PAPERS = window.PAPERS || {};
window.PAPERS["m4"] = {
  id: "m4",
  title: "Module 4: Digital Literacy",
  subtitle: "15 questions · MS Word, MS Excel, MS PowerPoint",
  sections: [
    { name: "4.1 MS Word", from: 1, to: 5,
      toolbox: { head:["Topic","Remember"], rows:[
        ["Window parts","Title Bar (top), Quick Access Toolbar (Save, Undo, Redo), Ribbon (tabs and tools), Ruler, Document Area, Status Bar (bottom)."],
        ["Shortcuts","Ctrl+S Save | Ctrl+Z Undo | Ctrl+Y Redo | Ctrl+P Print | Ctrl+F Find | Ctrl+H Find and Replace"],
        ["Features","Mail Merge = many personal letters. Track Changes = shows edits. WordArt = decorative text."]] } },
    { name: "4.2 MS Excel", from: 6, to: 10,
      toolbox: { head:["Topic","Remember"], rows:[
        ["Grid","Columns have LETTERS (A, B, C). Rows have NUMBERS (1, 2, 3). A cell address = letter + number, like B3."],
        ["Formulas","Every formula starts with =. Example: =A1+A2, =SUM(A1:A10)"],
        ["Functions","MAX = highest | MIN = lowest | AVERAGE = mean | COUNT = how many numbers | SUM = total"],
        ["Data tools","Sorting = arrange in order | Filtering = show only some rows | Freezing = keep header rows visible"]] } },
    { name: "4.3 MS PowerPoint", from: 11, to: 15,
      toolbox: { head:["Topic","Remember"], rows:[
        ["Slide show keys","F5 = start from the first slide | Shift + F5 = start from the current slide | Esc = end the show | Ctrl + M = new slide"],
        ["Between slides","TRANSITION = effect while changing from one slide to the next."],
        ["Inside a slide","ANIMATION = effect on text or objects inside one slide."],
        ["File types","Word .docx | Excel .xlsx | PowerPoint .pptx | Text .txt"]] } }
  ],
  questions: [
/* 1 */ {
  q: "MS Word is mainly used for:",
  opts: ["Creating spreadsheets","Creating and editing documents","Creating presentations","Browsing the internet"], a: 1,
  key: "Match each Microsoft Office program with its main job. Word = words = documents.",
  simg: [{ src: "m4-q1-win.png" }, { src: "m4-q1-leg.png", leg: 1 }],
  steps: ["Word is a <b>word processor</b>: you type, edit and format text such as letters, reports and resumes.","Spreadsheets are made in Excel, presentations in PowerPoint, and the internet is browsed with a web browser (Chrome, Edge)."],
  table: { head:["Program","Main job"], rows:[["<b>MS Word</b>","Creating and editing documents"],["<b>MS Excel</b>","Spreadsheets and calculations"],["<b>MS PowerPoint</b>","Presentations (slides)"],["<b>Web browser</b>","Browsing the internet"]] },
  tip: "Word = Words = Documents."
},
/* 2 */ {
  q: "Which part of MS Word contains commands such as Save, Undo, and Redo?",
  opts: ["Status Bar","Quick Access Toolbar","Ruler","Document Area"], a: 1,
  key: "Think of the small row of icons at the very top-left corner of the Word window.",
  simg: [{ src: "m4-q2-win.png" }, { src: "m4-q2-leg.png", leg: 1 }],
  steps: ["The <b>Quick Access Toolbar</b> sits at the top-left, above the ribbon.","It holds the most used commands: <b>Save, Undo and Redo</b>.","The Status Bar (bottom) shows the page number and word count, the Ruler sets margins, and the Document Area is where you type."],
  tip: "You can add your own favourite commands to the Quick Access Toolbar."
},
/* 3 */ {
  q: "Which MS Word shortcut key is used to Find and Replace text?",
  opts: ["Ctrl + F","Ctrl + R","Ctrl + H","Ctrl + P"], a: 2,
  key: "Learn what each Ctrl shortcut does. Find and Replace together is Ctrl + H.",
  simg: [{ src: "m4-q3-win.png" }, { src: "m4-q3-leg.png", leg: 1 }],
  steps: ["<b>Ctrl + H</b> opens the Find and Replace box. You type the old word and the new word, and Word changes it.","Ctrl + F only <b>finds</b> text (no replace). Ctrl + R aligns text to the right. Ctrl + P prints."],
  table: { head:["Shortcut","What it does"], rows:[["<b>Ctrl + F</b>","Find (search only)"],["<b>Ctrl + H</b>","Find and Replace"],["<b>Ctrl + R</b>","Right align the text"],["<b>Ctrl + P</b>","Print"]] },
  watch: "Ctrl + F looks right because of 'Find', but the question asks for Find AND Replace. That is Ctrl + H."
},
/* 4 */ {
  q: "Which MS Word feature is used to create personalized letters for many recipients?",
  opts: ["Track Changes","Mail Merge","WordArt","Find and Replace"], a: 1,
  key: "One letter + a list of names = many personal letters. That is Mail Merge.",
  simg: [{ src: "m4-q4-win.png" }, { src: "m4-q4-leg.png", leg: 1 }, { src: "m4-q4-merge.png" }],
  steps: ["Write the letter once with a blank for the name, e.g. \"Dear &lt;Name&gt;\".","Connect a list of recipients (names and addresses).","<b>Mail Merge</b> fills in each name and makes one personal letter for every recipient."],
  tip: "Like posting one invitation to 100 guests, each with their own name. Others: Track Changes shows edits, WordArt decorates text."
},
/* 5 */ {
  q: "Which part of MS Word is used to set margins, indents, and tab positions?",
  opts: ["Status Bar","Ruler","Ribbon","Scroll Bar"], a: 1,
  key: "The ruler is the measuring strip above the page (and on the left side). It controls how text sits on the page.",
  simg: [{ src: "m4-q5-win.png" }, { src: "m4-q5-leg.png", leg: 1 }, { src: "m4-q5-ruler.png" }],
  steps: ["The <b>Ruler</b> shows the margins (the grey ends), the indent markers and the tab stops.","You can drag the markers on the ruler to change them.","The Status Bar shows page information, the Ribbon holds commands, and the Scroll Bar moves the page up and down."],
  tip: "Ruler = Rule the page: margins, indents and tabs."
},
/* 6 */ {
  q: "MS Excel is mainly used for?",
  opts: ["Creating and displaying slides","Organizing, calculating, and analysing data","Editing photographs","Creating web pages"], a: 1,
  key: "Excel is a SPREADSHEET program: numbers in rows and columns.",
  simg: [{ src: "m4-q6-flow.png" }],
  steps: ["Excel stores data in rows and columns and can <b>organize</b> it (sorting, filtering), <b>calculate</b> it (formulas) and <b>analyse</b> it (charts).","Slides are made in PowerPoint. Photos are edited in photo editors. Web pages are made with web design tools."],
  tip: "Excel = numbers and tables."
},
/* 7 */ {
  q: "In MS Excel, the intersection of a row and a column is called?",
  opts: ["Worksheet","Range","Cell","Formula Bar"], a: 2,
  key: "Look at the grid: the small box where a row and a column cross is one cell.",
  simg: [{ src: "m4-q7-grid.png", small: 1 }],
  steps: ["A <b>cell</b> is the box where a row meets a column (for example B3 = column B, row 3).","A <b>range</b> is a group of cells (A1:B5). A <b>worksheet</b> is the whole grid. The <b>formula bar</b> shows what is inside the selected cell."],
  tip: "Cell address = column letter + row number."
},
/* 8 */ {
  q: "Which Excel formula is used to find the highest value in a range?",
  opts: ["=MIN(A1:A10)","=AVERAGE(A1:A10)","=MAX(A1:A10)","=COUNT(A1:A10)"], a: 2,
  key: "MAX means maximum, the highest value.",
  table: { head:["Formula","Result"], rows:[["<b>=MAX(A1:A10)</b>","Highest value"],["<b>=MIN(A1:A10)</b>","Lowest value"],["<b>=AVERAGE(A1:A10)</b>","Average (mean)"],["<b>=COUNT(A1:A10)</b>","How many cells have numbers"]] },
  steps: ["<b>=MAX(A1:A10)</b> gives the largest number in the cells A1 to A10.","MIN gives the smallest, AVERAGE gives the mean, and COUNT counts how many cells have numbers."],
  tip: "MAX = biggest, MIN = smallest."
},
/* 9 */ {
  q: "Every formula in MS Excel begins with?",
  opts: ["+","#","=","@"], a: 2,
  key: "Excel needs a signal to know that you are typing a formula and not ordinary text.",
  table: { head:["You type","What Excel does"], rows:[["<b>=A1+A2</b>","Adds the two cells and shows the total"],["<b>A1+A2</b>","Shows the text A1+A2 (no calculation)"]] },
  steps: ["The signal is the equals sign (=).","With the = sign, =A1+A2 adds the two cells. Without it, Excel treats A1+A2 as plain text."],
  tip: "No equals sign, no formula."
},
/* 10 */ {
  q: "Which Excel feature is useful for arranging data in alphabetical or numerical order?",
  opts: ["Filtering","Sorting","Formatting","Freezing"], a: 1,
  key: "Arranging in order (A to Z, smallest to biggest) is called sorting.",
  table: { head:["Name (before)","Name (after sorting A to Z)"], rows:[["<b>Ravi</b>","Anil"],["<b>Priya</b>","Priya"],["<b>Anil</b>","Ravi"]] },
  steps: ["<b>Sorting</b> arranges data in order: A to Z, Z to A, smallest to largest or largest to smallest.","Filtering only HIDES rows that do not match. Formatting changes the look (colour, font). Freezing keeps header rows or columns visible while you scroll."],
  extra: { head:["Feature","What it does"], rows:[["<b>Sorting</b>","Puts data in order"],["<b>Filtering</b>","Shows only the rows you want"],["<b>Formatting</b>","Changes colours, fonts, borders"],["<b>Freezing</b>","Keeps headings in view when scrolling"]] },
  tip: "Sort = arrange. Filter = select."
},
/* 11 */ {
  q: "Which key starts a PowerPoint slide show from the beginning?",
  opts: ["F2","F5","Esc","Ctrl + M"], a: 1,
  key: "Learn the slide show keys. F5 starts the show from the first slide.",
  table: { head:["Key","Action"], rows:[["<b>F5</b>","Start slide show from the first slide"],["<b>Shift + F5</b>","Start from the current slide"],["<b>Esc</b>","End the slide show"],["<b>Ctrl + M</b>","Insert a new slide"],["<b>F2</b>","Edit text in a selected shape"]] },
  steps: ["<b>F5</b> starts the slide show from the first slide.","Shift + F5 starts from the current slide. Esc ends the show. Ctrl + M adds a new slide."],
  tip: "F5 = from the beginning. Shift + F5 = from here."
},
/* 12 */ {
  q: "MS PowerPoint is mainly used for?",
  opts: ["Creating presentations using slides","Performing calculations","Creating databases","Writing long documents only"], a: 0,
  key: "PowerPoint = Power + Point: you make slides that present your points.",
  simg: [{ src: "m4-q12-ppt.png" }],
  steps: ["PowerPoint is used to make <b>presentations</b>: a set of slides with text, pictures, charts and effects.","Calculations are done in Excel, databases in Access, and long documents in Word."],
  tip: "Slides = PowerPoint."
},
/* 13 */ {
  q: "Which feature is used to add effects when moving from one slide to another?",
  opts: ["Animation","Transition","Design","Slide Master"], a: 1,
  key: "Read the key words: effects when moving FROM ONE SLIDE TO ANOTHER.",
  simg: [{ src: "m4-q13-trans.png" }],
  steps: ["An effect between two slides is a <b>Transition</b> (for example Fade, Push, Wipe).","Animation is different: it moves text or objects INSIDE one slide."],
  table: { head:["Feature","Use"], rows:[["<b>Transition</b>","Effect while changing from one slide to the next"],["<b>Animation</b>","Effect on text or objects inside a slide"],["<b>Design</b>","Themes, colours and backgrounds"],["<b>Slide Master</b>","Common layout for all slides"]] },
  watch: "Animation and Transition sound alike. Between slides = Transition. Inside a slide = Animation."
},
/* 14 */ {
  q: "What are the basic operations of MS PowerPoint?",
  opts: ["Inserting pictures, tables, shapes, and charts","Applying themes and designs","Changing the background","All the above"], a: 3,
  key: "Check each option. If every option is a real PowerPoint operation, the answer is 'All the above'.",
  table: { head:["Option","PowerPoint tool","True?"], rows:[["A","Insert: pictures, tables, shapes, charts","Yes"],["B","Design: themes and designs","Yes"],["C","Format Background","Yes"],["D","All of A, B and C","Yes"]] },
  steps: ["Option A: Insert tab lets you add pictures, tables, shapes and charts. True.","Option B: the Design tab applies themes and designs. True.","Option C: Format Background changes the background. True.","All three are basic operations, so the answer is <b>All the above</b>."],
  tip: "When every option is correct, choose 'All the above'."
},
/* 15 */ {
  q: "What is the default extension of a PowerPoint presentation?",
  opts: [".docx",".xlsx",".pptx",".txt"], a: 2,
  key: "Each Office program saves files with its own ending (extension).",
  table: { head:["Extension","Program"], rows:[["<b>.docx</b>","MS Word"],["<b>.xlsx</b>","MS Excel"],["<b>.pptx</b>","MS PowerPoint"],["<b>.txt</b>","Notepad (plain text)"]] },
  steps: ["PowerPoint files end with <b>.pptx</b> (P-P-T-X: PowerPoint).","Word uses .docx, Excel uses .xlsx, and .txt is a plain text file."],
  tip: "The letter before the x tells you the program: d = document, x = excel (sheet), p = PowerPoint.",
  extraTitle: "Quick revision: shortcut keys",
  extra: { head:["Program","Shortcut","Action"], rows:[["Word","<b>Ctrl + H</b>","Find and Replace"],["Word","<b>Ctrl + F</b>","Find"],["Word","<b>Ctrl + S / Ctrl + P</b>","Save / Print"],["Excel","<b>= (equals sign)</b>","Starts every formula"],["Excel","<b>Alt + =</b>","AutoSum"],["PowerPoint","<b>F5</b>","Slide show from the start"],["PowerPoint","<b>Shift + F5</b>","Slide show from the current slide"],["PowerPoint","<b>Ctrl + M</b>","New slide"]] }
}
  ]
};

window.PAPERS["m4"].diagrams = {
 7:{t:"xl",cols:["A","B","C","D"],nrows:5,name:"B3",fx:"",sel:"B3",hdr:["B"],rhdr:[3],cells:{"B3":"B3"},cap:"Column B + Row 3 meet in the cell B3 (look at the name box on the left)"},
 8:{t:"xl",cols:["A","B","C"],nrows:10,name:"B1",fx:"=MAX(A1:A10)",sel:"B1",range:"A1:A10",hi:["A6"],cells:{"A1":"12","A2":"45","A3":"8","A4":"67","A5":"23","A6":"91","A7":"34","A8":"56","A9":"19","A10":"72","B1":"91","C1":"\u25C4 highest value"},cap:"=MAX(A1:A10) looks at A1 to A10 and shows the highest number, 91"},
 9:{t:"xl",cols:["A","B","C"],nrows:3,name:"B1",fx:"=A1+A2",sel:"B1",cells:{"A1":"5","A2":"7","B1":"12","B2":"A1+A2","C1":"\u25C4 with =  adds","C2":"\u25C4 no =  text only"},hi:["B2"],cap:"With = Excel calculates (12). Without = it shows the text A1+A2"},
 10:{t:"xl",tab:"Data",btn:"Sort A to Z",cols:["A","B","C","D"],nrows:4,name:"A2",fx:"Ravi",sel:"A2",cells:{"A1":"Before","D1":"After sorting","A2":"Ravi","A3":"Priya","A4":"Anil","B2":"Sort A-Z \u25BA","D2":"Anil","D3":"Priya","D4":"Ravi"},cap:"Data tab > Sort A to Z puts the names in alphabetical order"}
};
