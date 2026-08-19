// ---- Subject color tokens (pastel) ----
// Each subject gets a consistent pastel identity used across schedule + todos.
const SUBJECTS = {
  "IT 302": { name: "Systems Integration and Architecture", short: "Sys. Integration & Architecture", color: "blue" },
  "IT 304D": { name: "Specialization 1 — DBA", short: "Specialization 1 (DBA)", color: "mint" },
  "SSP 101d": { name: "The Entrepreneurial Mind", short: "The Entrepreneurial Mind", color: "yellow" },
  "IT 303": { name: "System Analysis and Design", short: "System Analysis & Design", color: "pink" },
  "IT 306D": { name: "Specialization 3 — DBA", short: "Specialization 3 (DBA)", color: "lilac" },
  "CC 107": { name: "Application Development and Emerging Technologies", short: "App Dev & Emerging Tech", color: "peach" },
  "IT 305D": { name: "Specialization 2 — DBA", short: "Specialization 2 (DBA)", color: "teal" },
};

// ---- Pending tasks / to-dos, grouped by subject code ----
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

// Replace this with your section's actual Google Drive folder link.
const GDRIVE_LINK = "https://drive.google.com/drive/folders/YOUR-FOLDER-ID-HERE";
