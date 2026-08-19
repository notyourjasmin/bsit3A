// ---- Subject color tokens (pastel) ----
// Each subject gets a consistent pastel identity used across the site.
const SUBJECTS = {
  "IT 302": { name: "Systems Integration and Architecture", short: "Sys. Integration & Architecture", color: "blue" },
  "IT 304D": { name: "Specialization 1 — DBA", short: "Specialization 1 (DBA)", color: "mint" },
  "SSP 101d": { name: "The Entrepreneurial Mind", short: "The Entrepreneurial Mind", color: "yellow" },
  "IT 303": { name: "System Analysis and Design", short: "System Analysis & Design", color: "pink" },
  "IT 306D": { name: "Specialization 3 — DBA", short: "Specialization 3 (DBA)", color: "lilac" },
  "CC 107": { name: "Application Development and Emerging Technologies", short: "App Dev & Emerging Tech", color: "peach" },
  "IT 305D": { name: "Specialization 2 — DBA", short: "Specialization 2 (DBA)", color: "teal" },
};

// ---- Next class day per subject, per batch ----
// Used to show "next up: Tue, Aug 25" style dates on each subject card.
// Pick the earliest day in the week that subject meets (on-site or online).
const NEXT_CLASS_DAY = {
  batch1: {
    "IT 302": "Tuesday",
    "IT 304D": "Tuesday",
    "SSP 101d": "Tuesday",
    "IT 303": "Wednesday",
    "IT 306D": "Friday",
    "CC 107": "Friday",
    "IT 305D": "Saturday",
  },
  batch2: {
    "IT 304D": "Tuesday",
    "IT 305D": "Tuesday",
    "SSP 101d": "Tuesday",
    "IT 302": "Wednesday",
    "IT 303": "Wednesday",
    "CC 107": "Friday",
    "IT 306D": "Friday",
  },
};

// ---- Pending tasks, grouped by subject code ----
const TODOS = {
  batch1: {
    "IT 302": ["Discussion for Week 8 topic"],
    "IT 304D": ["ANOVA laboratory activity", "Decision tree laboratory activity", "Practice the activity uploaded on Google Classroom"],
    "SSP 101d": [
      "Assignment: Billionaires (yellow pad)",
      "Assignment: Lesson 3 (yellow pad)",
      "Assignment: Lesson 4 (yellow pad)",
      "Quiz — Lesson 3 and 4",
      "Midterm project (to be discussed)",
    ],
    "IT 303": [
      "Quiz 2 — Unit 2 Systems Planning: Lesson 1 & 2",
      "Quiz 3 — Unit 2 Systems Planning: Lesson 3",
      "Submission of hard copies of the draft Gantt Chart and Cost-Benefit Analysis (per group)",
    ],
    "IT 306D": ["Take-home activity", "Quiz", "Laboratory activity"],
    "CC 107": [
      "Quiz covering all group reports",
      "Take-home activity 2 (printed)",
      "Take-home activity 3 (printed)",
    ],
    "IT 305D": [
      "Checking of take-home activity in Excel",
      "Quiz — Lessons 4–6",
      "Quiz — Lessons 7–8",
    ],
  },
  batch2: {
    "IT 304D": ["ANOVA laboratory activity", "Decision tree laboratory activity", "Practice the activity uploaded on Google Classroom"],
    "SSP 101d": [
      "Assignment: Billionaires (yellow pad)",
      "Assignment: Lesson 3 (yellow pad)",
      "Assignment: Lesson 4 (yellow pad)",
      "Quiz — Lesson 3 and 4",
      "Midterm project (to be discussed)",
    ],
    "IT 303": [
      "Quiz 2 — Unit 2 Systems Planning: Lesson 1 & 2",
      "Quiz 3 — Unit 2 Systems Planning: Lesson 3",
      "Submission of hard copies of the draft Gantt Chart and Cost-Benefit Analysis (per group)",
    ],
    "IT 306D": ["Take-home activity", "Quiz", "Laboratory activity"],
    "CC 107": [
      "Quiz covering all group reports",
      "Take-home activity 2 (printed)",
      "Take-home activity 3 (printed)",
    ],
    "IT 305D": ["Quiz — Lessons 4–6", "Quiz — Lessons 7–8"],
  },
};

// ---- Future events, grouped by subject code ----
// Same list for both batches for now — tell me if a batch needs a different one.
const FUTURE_EVENTS = {
  batch1: {
    "IT 303": ["Whole system output", "Documentation (Business Case)"],
    "IT 305D": ["Final project (topics are already given per group)"],
  },
  batch2: {
    "IT 303": ["Whole system output", "Documentation (Business Case)"],
    "IT 305D": ["Final project (topics are already given per group)"],
  },
};

// ---- Section Google Drive links ----
const DRIVE_LINKS = [
  { label: "Lesson Materials", url: "https://drive.google.com/drive/folders/1jP0lXF2VFMdICWY39sRGNjN7FVVz2toG" },
  { label: "SAD (Ma'am Joann)", url: "https://drive.google.com/drive/folders/15SUDDx0OkzEFynFTOh8pPAHmvV56b8j-" },
  { label: "AD&ET (Ma'am Tina)", url: "https://drive.google.com/drive/folders/1faE_6su5nBQaF51n5W6iEtbWxnh6hcrS" },
];
