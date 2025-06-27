const mainBoard = document.querySelector(".mainBoard")
const resetBtn = document.querySelector(".resetBtn")
const currentPlayerDisplay = document.querySelector(".currentPlayerDisplay")
const winnerDisplay = document.querySelector(".winnerDisplay")

let board
let player
let gameOver

const isFinalWinner = (b, p) => {
	return b[0][0] === p && b[0][1] === p && b[0][2] === p ||
	       b[1][0] === p && b[1][1] === p && b[1][2] === p ||
	       b[2][0] === p && b[2][1] === p && b[2][2] === p ||
	       b[0][0] === p && b[1][0] === p && b[2][0] === p ||
	       b[0][1] === p && b[1][1] === p && b[2][1] === p ||
	       b[0][2] === p && b[1][2] === p && b[2][2] === p ||
	       b[0][0] === p && b[1][1] === p && b[2][2] === p ||
	       b[2][0] === p && b[1][1] === p && b[0][2] === p
}

const isWinner = (b, p ,i, j) => {
	const color = p === "X" ? "#7cb342" : "#039be5"

	if (b[0][0] === p && b[0][1] === p && b[0][2] === p) {
		document.querySelector('div[data-ijrc="' + i + j + '00"]').style.backgroundColor = color
		document.querySelector('div[data-ijrc="' + i + j + '01"]').style.backgroundColor = color
		document.querySelector('div[data-ijrc="' + i + j + '02"]').style.backgroundColor = color
		return true
	}

	if (b[1][0] === p && b[1][1] === p && b[1][2] === p) {
		document.querySelector('div[data-ijrc="' + i + j + '10"]').style.backgroundColor = color
		document.querySelector('div[data-ijrc="' + i + j + '11"]').style.backgroundColor = color
		document.querySelector('div[data-ijrc="' + i + j + '12"]').style.backgroundColor = color
		return true
	}

	if (b[2][0] === p && b[2][1] === p && b[2][2] === p) {
		document.querySelector('div[data-ijrc="' + i + j + '20"]').style.backgroundColor = color
		document.querySelector('div[data-ijrc="' + i + j + '21"]').style.backgroundColor = color
		document.querySelector('div[data-ijrc="' + i + j + '22"]').style.backgroundColor = color
		return true
	}

	if (b[0][0] === p && b[1][0] === p && b[2][0] === p) {
		document.querySelector('div[data-ijrc="' + i + j + '00"]').style.backgroundColor = color
		document.querySelector('div[data-ijrc="' + i + j + '10"]').style.backgroundColor = color
		document.querySelector('div[data-ijrc="' + i + j + '20"]').style.backgroundColor = color
		return true
	}

	if (b[0][1] === p && b[1][1] === p && b[2][1] === p) {
		document.querySelector('div[data-ijrc="' + i + j + '01"]').style.backgroundColor = color
		document.querySelector('div[data-ijrc="' + i + j + '11"]').style.backgroundColor = color
		document.querySelector('div[data-ijrc="' + i + j + '21"]').style.backgroundColor = color
		return true
	}

	if (b[0][2] === p && b[1][2] === p && b[2][2] === p) {
		document.querySelector('div[data-ijrc="' + i + j + '02"]').style.backgroundColor = color
		document.querySelector('div[data-ijrc="' + i + j + '12"]').style.backgroundColor = color
		document.querySelector('div[data-ijrc="' + i + j + '22"]').style.backgroundColor = color
		return true
	}

	if (b[0][0] === p && b[1][1] === p && b[2][2] === p) {
		document.querySelector('div[data-ijrc="' + i + j + '00"]').style.backgroundColor = color
		document.querySelector('div[data-ijrc="' + i + j + '11"]').style.backgroundColor = color
		document.querySelector('div[data-ijrc="' + i + j + '22"]').style.backgroundColor = color
		return true
	}

	if (b[2][0] === p && b[1][1] === p && b[0][2] === p) {
		document.querySelector('div[data-ijrc="' + i + j + '20"]').style.backgroundColor = color
		document.querySelector('div[data-ijrc="' + i + j + '11"]').style.backgroundColor = color
		document.querySelector('div[data-ijrc="' + i + j + '02"]').style.backgroundColor = color
		return true
	}

	return false
}

const resetBoard = () => {
	mainBoard.textContent = ""
	gameOver = false

	board = []
	for (let i = 0; i < 3; i++) {
		const mainRow = []
		for (let j = 0; j < 3; j++) {
			const board = []
			for (let r = 0; r < 3; r++) {
				const row = []
				for (let c = 0; c < 3; c++) {
					row.push("")
				}
				board.push(row)
			}
			mainRow.push(board)
		}
		board.push(mainRow)
	}

	gameState = [
		["", "", ""],
		["", "", ""],
		["", "", ""],
	]

	player = "X"
	currentPlayerDisplay.querySelector("span").textContent = player

	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			const subBoard = document.createElement("div")
			subBoard.classList.add("subBoard")
			for (let r = 0; r < 3; r++) {
				for (let c = 0; c < 3; c++) {
					const cell = document.createElement("div")
					cell.classList.add("cell")
					cell.setAttribute("data-ijrc", `${i}${j}${r}${c}`)
					
					cell.addEventListener("click", () => {
						// alert(cell.getAttribute("data-ijrc"))
						if (gameState[i][j] === "" && board[i][j][r][c] === "" && !gameOver) {
							board[i][j][r][c] = player
							cell.textContent = player

							if (isWinner(board[i][j], player, i, j) === true) {
								gameState[i][j] = player

								if (isFinalWinner(gameState, player)) {
									gameOver = true
									// alert(player + " is the winner!")
									currentPlayerDisplay.style.display = "none"
									winnerDisplay.style.display = "block"
									winnerDisplay.textContent = `Winner: ${player}`
								}
							}

							player = player === "X" ? "O" : "X"
							currentPlayerDisplay.querySelector("span").textContent = player
						}
						console.log(board)
					})

					subBoard.appendChild(cell)
				}
			}
			mainBoard.appendChild(subBoard)
		}
	}
}

resetBtn.addEventListener("click", resetBoard)

resetBoard()