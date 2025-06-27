const gameBoard = document.querySelector(".gameBoard")
const counterSpan = document.querySelector(".counterSpan")

// const emojis = Array.from("🐸🐸🐉🐉🎉🎉🪅🪅🏮🏮🪔🪔💰💰😉😉😀😀🤖🤖🎅🎅🎁🎁🍋🍋💻💻🎄🎄🚗🚗🏠🏠🐕🐕🐈🐈🐒🐒🐢🐢🚂🚂🚽🚽🥐🥐🍌🍌🥑🥑⭐⭐")
const emojis = Array.from("🐸🐸🐉🐉🎉🎉🪅🪅🏮🏮🪔🪔💰💰😉😉")
// const emojis = Array.from("AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ00")

for (let i = 0; i < emojis.length; i++) {
	const a = Math.floor(Math.random() * emojis.length)
	const b = Math.floor(Math.random() * emojis.length)
	const temp = emojis[a]
	emojis[a] = emojis[b]
	emojis[b] = temp
}

let firstCard = null
let secondCard = null
let preventClick = false
let count = 0

emojis.forEach((e) => {
	const box = document.createElement("div")
	box.classList.add("box", "closed")

	const emoji = document.createElement("div")
	emoji.classList.add("emoji")
	emoji.textContent = e

	box.addEventListener("click", () => {
		if (preventClick === true) {
			return
		}

		if (box.classList.contains("open") === true) {
			return
		}

		if (box.classList.contains("matched") === true) {
			return
		}

		box.classList.remove("closed")
		box.classList.add("open")

		if (firstCard === null) {
			firstCard = box
		} else if (secondCard === null) {
			secondCard = box
			preventClick = true

			setTimeout(() => {
			const firstEmoji = firstCard.querySelector(".emoji").textContent
			const secondEmoji = secondCard.querySelector(".emoji").textContent

			// alert(firstEmoji + secondEmoji)

			if (firstEmoji === secondEmoji) {
				firstCard.classList.remove("open")
				firstCard.classList.add("matched")
				secondCard.classList.remove("open")
				secondCard.classList.add("matched")
			} else {
				firstCard.classList.remove("open")
				firstCard.classList.add("closed")
				secondCard.classList.remove("open")
				secondCard.classList.add("closed")
			}

			firstCard = null
			secondCard = null
			preventClick = false
			count++
			counterSpan.textContent = count
			}, 500)
		}
	})

	box.appendChild(emoji)
	gameBoard.appendChild(box)
})