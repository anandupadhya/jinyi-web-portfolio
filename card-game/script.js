const player1Score = document.querySelector(".player1Score")
const player2Score = document.querySelector(".player2Score")
const scoringCardsDisplay = document.querySelector(".scoringCardsDisplay")
const nonScoringCardsDisplay = document.querySelector(".nonScoringCardsDisplay")
const percentDisplay1 = document.querySelector(".percentDisplay1")
const percentDisplay2 = document.querySelector(".percentDisplay2")
const winnerDisplay = document.querySelector(".winnerDisplay")
const player1Name = document.querySelector(".player1Name")
const player2Name = document.querySelector(".player2Name")
const currRoundDisplay = document.querySelector(".currRoundDisplay")

const card1All = document.querySelectorAll(".card1")
const card2All = document.querySelectorAll(".card2")

const scoringCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const nonScoringCards = []

for (let i = 0; i < scoringCards.length; i++) {
	const j = Math.floor(Math.random() * scoringCards.length)
	const temp = scoringCards[i]
	scoringCards[i] = scoringCards[j]
	scoringCards[j] = temp
}

for (let i = 1; i <= 5; i++) {
	nonScoringCards.push(scoringCards.pop())
}

let swapped = true
while (swapped === true) {
	swapped = false
	for (let i = 0; i <= 3; i++) {
		if (scoringCards[i] > scoringCards[i + 1]) {
			swapped = true
			const temp = scoringCards[i]
			scoringCards[i] = scoringCards[i + 1]
			scoringCards[i + 1] = temp
		}
	}
}

swapped = true
while (swapped === true) {
	swapped = false
	for (let i = 0; i <= 3; i++) {
		if (nonScoringCards[i] > nonScoringCards[i + 1]) {
			swapped = true
			const temp = nonScoringCards[i]
			nonScoringCards[i] = nonScoringCards[i + 1]
			nonScoringCards[i + 1] = temp
		}
	}
}

scoringCards.forEach((val) => {
	const card = document.createElement("div")
	card.classList.add("card")
	card.textContent = val
	scoringCardsDisplay.querySelector("div").appendChild(card)

	const pCard = document.createElement("div")
	pCard.classList.add("pCard")
	pCard.setAttribute("data-num", val)
	pCard.textContent = "10%"
	percentDisplay1.appendChild(pCard) 
})

nonScoringCards.forEach((val) => {
	const card = document.createElement("div")
	card.classList.add("card")
	card.textContent = val
	card.style.backgroundColor = "#333333"
	nonScoringCardsDisplay.querySelector("div").appendChild(card)

	const pCard = document.createElement("div")
	pCard.classList.add("pCard")
	pCard.setAttribute("data-num", val)
	pCard.textContent = "10%"
	percentDisplay2.appendChild(pCard)
})

const cards = []

const updateProb = () => {
	for (let i = 1; i <= 10; i++) {
		const total = cards.length

		let count = 0
		cards.forEach((val) => {
			if (val === i) count++
		})

		document.querySelector(`div[data-num="${i}"]`).textContent = ((count / total) * 100).toFixed(2) + "%"
	}
}

for (let i = 1; i <= 10; i++) {
	for (let j = 1; j <= 8; j++) {
		cards.push(i)
	}
}

for (let i = 0; i < cards.length; i++) {
	const j = Math.floor(Math.random() * cards.length)
	const temp = cards[i]
	cards[i] = cards[j]
	cards[j] = temp
}

let score1 = 0
let score2 = 0
let numClicks = 0
let currRound = 1
let gameOver = false

const checkGameOver = () => {
	scoringCardsDisplay.style.display = "none"
	nonScoringCardsDisplay.style.display = "none"
	winnerDisplay.style.display = "flex"

	if (score1 === score2) {
		winnerDisplay.querySelector("p").textContent = "It's a tie!"
	} else if (score1 > score2) {
		winnerDisplay.querySelector("p").textContent = player1Name.value || "Player 1"
	} else {
		winnerDisplay.querySelector("p").textContent = player2Name.value || "Player 2"
	}
}

const checkRoundOver = () => {
	console.log(numClicks)
	updateProb()

	if (score1 === score2) {
		player1Score.style.color = "#fdd835"
		player2Score.style.color = "#fdd835"
	} else if (score1 > score2) {
		player1Score.style.color = "#229954"
		player2Score.style.color = "#f44336"
	} else {
		player1Score.style.color = "#f44336"
		player2Score.style.color = "#229954"
	}

	if (cards.length === 0) {
		checkGameOver()
		return
	}

	if (numClicks === 10) {
		numClicks = 0

		setTimeout(() => {
			card1All.forEach((card) => {
				card.textContent = "+"
				card.style.backgroundColor = "#E94560"
			})

			card2All.forEach((card) => {
				card.textContent = "+"
				card.style.backgroundColor = "#E94560"
			})

			currRound++
			currRoundDisplay.textContent = currRound
		}, 2000)
	}
}

card1All.forEach((card) => {
	card.addEventListener("click", () => {
		if (gameOver) return 

		if (card.textContent === "+") {
			const rand = cards.pop()
			card.textContent = rand
			numClicks++
			if (scoringCards.includes(rand)) {
				score1 += rand
				player1Score.textContent = score1
			} else {
				card.style.backgroundColor = "#333333"
			}
			checkRoundOver()
		} else {
			return
		}
	})
})

card2All.forEach((card) => {
	card.addEventListener("click", () => {
		if (gameOver) return 

		if (card.textContent === "+") {
			const rand = cards.pop()
			card.textContent = rand
			numClicks++
			if (scoringCards.includes(rand)) {
				score2 += rand
				player2Score.textContent = score2
			} else {
				card.style.backgroundColor = "#333333"
			}
			checkRoundOver()
		} else {
			return
		}
	})
})

