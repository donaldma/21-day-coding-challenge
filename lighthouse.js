// GRID CODE
const GRID = [
  ["", "", "", "^", "", "", "", "", "", ""],
  ["", "", "v", "", "~", "", "", "", "", ""],
  ["", "v", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "^", "^", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "v", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "^", "~", "~", "", "", "", "^", "", ""],
  ["", "^", "", "~", "~", "", "", "", "", ""],
  ["", "^", "", "", "~", "~", "", "", "", ""],
];

// Day 1
const countRows = () => {
  return GRID.length
}

// Day 2
const countColumns = () => {
  const rows = countRows()
  const total = GRID.reduce((total, x) => total + x.length, 0)

  return total / rows
}

// Day 3
const gridSize = () => {
  const rows = countRows()
  const columns = countColumns()

  return `${columns} x ${rows}`
}