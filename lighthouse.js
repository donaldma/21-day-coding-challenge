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

// Day 4
const totalCells = () => {
  const rows = countRows()
  const columns = countColumns()

  return columns * rows
}

// Day 5
const convertColumn = (coord) => {
  const coordSplit = coord.split("")
  const columnPosition = coordSplit[0]

  return columnPosition.toLowerCase().charCodeAt(0) - 97
}

// Day 6
const lightCell = (coord) => {
  const columnPosition = convertColumn(coord)
  const rowPosition = coord.split("")[1] - 1

  return GRID[rowPosition][columnPosition]
}

// Day 7
const isRock = (coord) => {
  const cell = lightCell(coord)

  return cell === '^'
}

// Day 8
const isCurrent = (coord) => {
  const cell = lightCell(coord)

  return cell === '~'
}

// Day 9
const isShip = (coord) => {
  const cell = lightCell(coord)

  return cell === 'v'
}

// Day 10
const lightRow = (row) => {
  return GRID[row - 1]
}

// Day 11
const lightColumn = (col) => {
  const columnPosition = convertColumn(col)
  return GRID.map(x => x[columnPosition])
}