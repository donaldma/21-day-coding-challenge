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

const countRows = () => {
  return GRID.length
}

const countColumns = () => {
  const rows = countRows()
  const total = GRID.reduce((total, x) => total + x.length, 0)

  return total / rows
}

const gridSize = () => {
  const rows = countRows()
  const columns = countColumns()

  return `${columns} x ${rows}`
}

const totalCells = () => {
  const rows = countRows()
  const columns = countColumns()

  return columns * rows
}

const convertColumn = (coord) => {
  const coordSplit = coord.split("")
  const columnPosition = coordSplit[0]

  return columnPosition.toLowerCase().charCodeAt(0) - 97
}

const lightCell = (coord) => {
  const columnPosition = convertColumn(coord)
  const rowPosition = coord.split("")[1] - 1
  const cell = GRID[rowPosition][columnPosition]

  return cell ? cell : false
}

const isRock = (coord) => {
  const cell = lightCell(coord)

  return cell === '^'
}

const isCurrent = (coord) => {
  const cell = lightCell(coord)

  return cell === '~'
}

const isShip = (coord) => {
  const cell = lightCell(coord)

  return cell === 'v'
}

const lightRow = (row) => {
  return GRID[row - 1]
}

const lightColumn = (col) => {
  const columnPosition = convertColumn(col)
  return GRID.map(x => x[columnPosition])
}

const getAllCoordsForItem = (item) => {
    const array = GRID.map((each, index) =>
    each.map((x, i) => {
      if (x === item) {
        const columnPosition = String.fromCharCode(97 + i).toUpperCase()
        const rowPosition = index + 1
        return columnPosition + rowPosition
      }
    }).filter(x => x !== undefined)
  )

  return [].concat(...array)
}

const allRocks = () => {
return getAllCoordsForItem('^')
}

const allCurrents = () => {
  return getAllCoordsForItem('~')
}

const allShips = () => {
  return getAllCoordsForItem('v')
}

const firstRock = () => {
  const rocks = allRocks()

  return rocks[0]
}

const firstCurrent = () => {
  const currents = allCurrents()

  return currents[0]
}

const shipReport = () => {
  const ships = allShips()

  return [ships[0], ships[ships.length - 1]]
}