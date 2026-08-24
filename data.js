// ============================================================
//  EDIT THIS FILE to update the map. Nothing else needs to change.
//
//  For each continent:
//    id          - do NOT change (must match c1–c7 in index.html)
//    name        - the continent's display name
//    ruler       - the player's name, or null if unclaimed
//    color       - hex color for this ruler's territory (pick anything)
//    taxPercent  - the tax rate the ruler has set
//    siege       - true if this territory is currently being attacked
//
//  After editing, save this file, commit, and push to GitHub —
//  the live site updates within a minute or two.
// ============================================================

const territories = [
  {
    id: "c1",
    name: "Frostholm",
    ruler: zabrehmar,
    color: "#3f5a41",
    taxPercent: 0,
    siege: false
  },
  {
    id: "c2",
    name: "Ashveil",
    ruler: null,
    color: "#5a3f3f",
    taxPercent: 0,
    siege: false
  },
  {
    id: "c3",
    name: "Duskmere",
    ruler: null,
    color: "#3f4f5a",
    taxPercent: 0,
    siege: false
  },
  {
    id: "c4",
    name: "Ironreach",
    ruler: null,
    color: "#5a4f3f",
    taxPercent: 0,
    siege: false
  },
  {
    id: "c5",
    name: "Wraithfen",
    ruler: null,
    color: "#4a3f5a",
    taxPercent: 0,
    siege: false
  },
  {
    id: "c6",
    name: "Solmere",
    ruler: null,
    color: "#5a5a3f",
    taxPercent: 0,
    siege: false
  },
  {
    id: "c7",
    name: "Emberfall",
    ruler: null,
    color: "#5a3f4f",
    taxPercent: 0,
    siege: false
  }
];

// -------------------------------------------------------------
// EXAMPLE of what a claimed, taxed, sieged territory looks like:
//
// {
//   id: "c1",
//   name: "Frostholm",
//   ruler: "Sarah",
//   color: "#3f5a8a",
//   taxPercent: 15,
//   siege: true
// }
// -------------------------------------------------------------
