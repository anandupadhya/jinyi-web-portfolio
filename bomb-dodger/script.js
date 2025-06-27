const gameBoard = document.querySelector(".gameBoard")
const resetBtn = document.querySelector(".resetBtn")
const hintBtn = document.querySelector(".hintBtn")
const rowsSelect = document.querySelector(".rowsSelect")
const colsSelect = document.querySelector(".colsSelect")
const remainingDisplay = document.querySelector(".remainingDisplay")
const numBombsDisplay = document.querySelector(".numBombsDisplay")
const percentBombsSelect = document.querySelector(".percentBombsSelect")
const timeDisplay = document.querySelector(".timeDisplay")

let gameOver = false
let gameStarted = false
let numRows = parseInt(rowsSelect.value)
let numCols = parseInt(colsSelect.value)
let percentBombs = parseFloat(percentBombsSelect.value)
let numBombs = Math.floor(numRows * numCols * percentBombs)
numBombsDisplay.textContent = numBombs
let remaining = numRows * numCols - numBombs
remainingDisplay.textContent = remaining
let time
let timer
let numHints = Math.floor(numRows * numCols * 0.05)
hintBtn.disabled = false
hintBtn.textContent = `Hint (${numHints})`
let bombLoc
let bombCount

const updateTime = () => {
	time += 0.1
	// timeDisplay.textContent = Math.round(time * 100) / 100
	timeDisplay.textContent = time.toFixed(2)
}

const startTimer = () => {
	time = 0
	timer = setInterval(updateTime, 100)
}

const stopTimer = () => {
	clearInterval(timer)
}

const resetGrid = () => {
	gameBoard.textContent = ""
	gameBoard.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`
	bombLoc = []
	bombCount = []


	// set all locations to be 0
	for (let r = 0; r < numRows; r++) {
		const row = []
		for(let c = 0; c < numCols; c++) {
			row.push(0)
		}
		bombLoc.push(row)
	}

	// Set numBombs unique locations to be bombs
	for (let i = 0; i < numBombs; i++) {
		let r = Math.floor(Math.random() * numRows)
		let c = Math.floor(Math.random() * numCols)

		while (bombLoc[r][c] === 1) {
			r = Math.floor(Math.random() * numRows)
			c = Math.floor(Math.random() * numCols)
		}

		bombLoc[r][c] = 1
	}

	// console.log(bombLoc)

	// Calculated number of bombs around each cell
	for (let r = 0; r < numRows; r++) {
		const row = []
		for(let c = 0; c < numCols; c++) {
			let count = 0
			// top left
			if (r > 0 && c > 0) {
				count += bombLoc[r - 1][c - 1]
			}
			// top right
			if (r > 0 && c < numCols - 1) {
				count += bombLoc[r - 1][c + 1]
			}
			// bottom left
			if (r < numRows - 1 && c > 0) {
				count += bombLoc[r + 1][c - 1]
			}
			// bottom right
			if (r < numRows - 1 && c < numCols - 1) {
				count += bombLoc[r + 1][c + 1]
			}
			// top
			if (r > 0) {
				count += bombLoc[r - 1][c]
			}
			// bottom
			if (r < numRows - 1) {
				count += bombLoc[r + 1][c]
			}
			// left
			if (c > 0) {
				count += bombLoc[r][c - 1]
			}
			// right
			if (c < numCols - 1) {
				count += bombLoc[r][c + 1]
			}
			row.push(count)
		}
		bombCount.push(row)
	}

	// Display game board
	for (let r = 0; r < numRows; r++) {
		for(let c = 0; c < numCols; c++) {
			const cell = document.createElement("div")
			cell.classList.add("cell")
			cell.setAttribute("data-rc", r + "" + c)

			if (bombLoc[r][c] === 1) {
				cell.setAttribute("data-isBomb", "true")
			}
			
			// click, mouseover, dblclick
			cell.addEventListener("click", () => {
				if (gameOver === true) {
					return
				}

				if (gameStarted === false) {
					gameStarted = true
					startTimer()
				}

				if (bombLoc[r][c] === 1) {
					// cell.textContent = "X"
					// cell.style.backgroundColor = "#f44336"
					gameOver = true
					hintBtn.disabled = true
					stopTimer()
					if (gameOver === true) {
						const bombDivs = document.querySelectorAll('div[data-isBomb="true"]')
						// alert(bombDivs.length)
						bombDivs.forEach((bd) => {
							bd.textContent = "X"
							bd.style.backgroundColor = "#f44336"
							bd.style.opacity = 0.4
						})
					}
					cell.style.opacity = 1

				} else {
					if (cell.textContent === "") {
						const count = bombCount[r][c]
						cell.textContent = count
						remaining--
						remainingDisplay.textContent = remaining

						if (count === 0) {
							cell.style.backgroundColor = "#cddc39"
						} else if (count === 1) {
							cell.style.backgroundColor = "#ffeb3b"
						} else if (count === 2) {
							cell.style.backgroundColor = "#ffc107"
						} else {
							cell.style.backgroundColor = "#ff9800"
						}
					}

					if (remaining === 0) {
						console.log("YOU WIN!")
						gameOver = true
						hintBtn.disabled = true
						stopTimer()
						const bombDivs = document.querySelectorAll('div[data-isBomb="true"]')
						// alert(bombDivs.length)
						bombDivs.forEach((bd) => {
							bd.textContent = "🏆"
							bd.style.backgroundColor = "black"
							bd.style.opacity = 1
						})
					}


				}
			})

			gameBoard.appendChild(cell)
		}
	}
}

resetBtn.addEventListener("click", () => {
	gameOver = false
	gameStarted = false
	numRows = parseInt(rowsSelect.value)
	numCols = parseInt(colsSelect.value)
	percentBombs = parseFloat(percentBombsSelect.value)
	numBombs = Math.floor(numRows * numCols * percentBombs)
	numBombsDisplay.textContent = numBombs
	remaining = numRows * numCols - numBombs
	remainingDisplay.textContent = remaining
	numHints = Math.floor(numRows * numCols * 0.05)
	hintBtn.disabled = false
	hintBtn.textContent = `Hint (${numHints})`
	resetGrid()
})

const showHint = () => {
	while (true) {
		let r = Math.floor(Math.random() * numRows)
		let c = Math.floor(Math.random() * numCols)

		// not a bomb and no bombs around it
		if (bombLoc[r][c] === 0) {
			// console.log(r, c)
			const cell = document.querySelector(`div[data-rc="${r}${c}"]`)
			
			if (cell.textContent === "") {
				const count = bombCount[r][c]
				cell.textContent = count
				remaining--
				remainingDisplay.textContent = remaining

				if (count === 0) {
					cell.style.backgroundColor = "#cddc39"
				} else if (count === 1) {
					cell.style.backgroundColor = "#ffeb3b"
				} else if (count === 2) {
					cell.style.backgroundColor = "#ffc107"
				} else {
					cell.style.backgroundColor = "#ff9800"
				}

				return
			}
		}
	}
}

hintBtn.addEventListener("click", () => {
	if (numHints > 0) {
		numHints--
		showHint()
		hintBtn.textContent = `Hint (${numHints})`
		if (numHints === 0) hintBtn.disabled = true
	}
})


resetGrid()




// NEXT
// If you found all safe locations, all the bomb locations show and change into ice creams