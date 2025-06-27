const gameBoard = document.querySelector(".gameBoard")
const resetBtn = document.querySelector(".resetBtn")

let board
let player
let gameOver

const isWinner = (b, p) => {
	if (b[0][0] === p && b[0][1] === p && b[0][2] === p) {
		document.querySelector('div[data-rc="0 0"]').style.backgroundColor = "#7cb342"
		document.querySelector('div[data-rc="0 1"]').style.backgroundColor = "#7cb342"
		document.querySelector('div[data-rc="0 2"]').style.backgroundColor = "#7cb342"
		return true
	}

	if (b[1][0] === p && b[1][1] === p && b[1][2] === p) {
		document.querySelector('div[data-rc="1 0"]').style.backgroundColor = "#7cb342"
		document.querySelector('div[data-rc="1 1"]').style.backgroundColor = "#7cb342"
		document.querySelector('div[data-rc="1 2"]').style.backgroundColor = "#7cb342"
		return true
	}

	if (b[2][0] === p && b[2][1] === p && b[2][2] === p) {
		document.querySelector('div[data-rc="2 0"]').style.backgroundColor = "#7cb342"
		document.querySelector('div[data-rc="2 1"]').style.backgroundColor = "#7cb342"
		document.querySelector('div[data-rc="2 2"]').style.backgroundColor = "#7cb342"
		return true
	}

	if (b[0][0] === p && b[1][0] === p && b[2][0] === p) {
		document.querySelector('div[data-rc="0 0"]').style.backgroundColor = "#7cb342"
		document.querySelector('div[data-rc="1 0"]').style.backgroundColor = "#7cb342"
		document.querySelector('div[data-rc="2 0"]').style.backgroundColor = "#7cb342"
		return true
	}

	if (b[0][1] === p && b[1][1] === p && b[2][1] === p) {
		document.querySelector('div[data-rc="0 1"]').style.backgroundColor = "#7cb342"
		document.querySelector('div[data-rc="1 1"]').style.backgroundColor = "#7cb342"
		document.querySelector('div[data-rc="2 1"]').style.backgroundColor = "#7cb342"
		return true
	}

	if (b[0][2] === p && b[1][2] === p && b[2][2] === p) {
		document.querySelector('div[data-rc="0 2"]').style.backgroundColor = "#7cb342"
		document.querySelector('div[data-rc="1 2"]').style.backgroundColor = "#7cb342"
		document.querySelector('div[data-rc="2 2"]').style.backgroundColor = "#7cb342"
		return true
	}

	if (b[0][0] === p && b[1][1] === p && b[2][2] === p) {
		document.querySelector('div[data-rc="0 0"]').style.backgroundColor = "#7cb342"
		document.querySelector('div[data-rc="1 1"]').style.backgroundColor = "#7cb342"
		document.querySelector('div[data-rc="2 2"]').style.backgroundColor = "#7cb342"
		return true
	}

	if (b[2][0] === p && b[1][1] === p && b[0][2] === p) {
		document.querySelector('div[data-rc="2 0"]').style.backgroundColor = "#7cb342"
		document.querySelector('div[data-rc="1 1"]').style.backgroundColor = "#7cb342"
		document.querySelector('div[data-rc="0 2"]').style.backgroundColor = "#7cb342"
		return true
	}

	return false
}

const resetBoard = () => {
	gameBoard.textContent = ""

	gameOver = false

	board = [
		["", "", ""],
		["", "", ""],
		["", "", ""],
	]

	player = "X"

	for (let r = 0; r < 3; r++) {
		for (let c = 0; c < 3; c++) {
			const cell = document.createElement("div")
			cell.classList.add("cell")

			cell.setAttribute("data-rc", r + " " + c)

			cell.addEventListener("click", () => {
				if (board[r][c] === "" && !gameOver) {
					board[r][c] = player
					cell.textContent = player

					if (isWinner(board, player) === true) {
						gameOver = true
						// alert("You won!")
						// highlightWin(player)
					}

					player = player === "X" ? "O" : "X"
				}
			})

			gameBoard.appendChild(cell)
		}
	}
}

resetBtn.addEventListener("click", resetBoard)

resetBoard()