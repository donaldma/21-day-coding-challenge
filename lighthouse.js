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
  const columnPosition = coord.replace(/[^a-zA-Z ]/g, "")

  return columnPosition.toLowerCase().charCodeAt(0) - 97
}

const convertRow = (coord) => {
  return coord.replace(/[^0-9 ]/g, "") - 1
}

const lightCell = (coord) => {
  const columnPosition = convertColumn(coord)
  const rowPosition = convertRow(coord)
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

const howDangerous = (coord) => {
  if (isRock(coord)) return 100
  if (isCurrent(coord)) return 50
  else return 0
}

const percentageReport = () => {
  const cells = totalCells()
  const rocks = allRocks()
  const currents = allCurrents()
  const rocksPercentage = parseFloat(rocks.length / cells * 100).toFixed(2)
  const currentsPercentage = parseFloat(currents.length / cells * 100).toFixed(2)

  return [rocksPercentage, currentsPercentage]
}

const safetyReport = () => {
  return GRID.map((each, index) =>
    each.map((x, i) => {
      const columnPosition = String.fromCharCode(97 + i).toUpperCase()
      const rowPosition = index + 1
      const coord = columnPosition + rowPosition
      const dangerPercent = howDangerous(coord)

      return dangerPercent
    })
  )
}

const calcDistance = (coord1, coord2) => {
  const coord1Column = convertColumn(coord1)
  const coord1Row = convertRow(coord1)
  const coord2Column = convertColumn(coord2)
  const coord2Row = convertRow(coord2)

  return Math.hypot(coord2Row - coord1Row, coord2Column - coord1Column).toFixed(2)
}
