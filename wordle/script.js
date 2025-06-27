const board = document.getElementById("board")
const message = document.getElementById("message")

const wordList = [
  "apple", "bread", "cabin", "dance", "eagle", "flame", "grape", "heart", "ivory", "jelly",
  "kneel", "lemon", "magic", "noble", "ocean", "piano", "quiet", "rider", "stone", "tiger",
  "uncle", "vivid", "whale", "xenon", "yacht", "zebra", "angel", "blaze", "crisp", "drift",
  "earth", "frost", "glide", "honey", "ideal", "jumps", "karma", "lunar", "mirth", "nurse",
  "orbit", "peace", "queen", "roast", "smile", "trust", "unite", "vapor", "witty", "xerox",
  "yield", "zesty", "algae", "brave", "coral", "dealt", "enjoy", "fable", "giant", "haste",
  "inbox", "jewel", "kites", "liver", "mango", "nails", "optic", "plaza", "query", "raven",
  "shine", "trick", "upper", "valve", "waltz", "xylem", "yearn", "zonal", "aisle", "beard",
  "chalk", "dizzy", "ember", "flood", "gloom", "harsh", "inlet", "joist", "knees", "latch",
  "motel", "nerdy", "oxide", "pouch", "quilt", "rough", "spice", "theme", "udder", "vines"
]

let word
let currentRow
let currentGuess

const createBoard = () => {
  for (let i = 0; i < 30; i++) {
    const tile = document.createElement("div")
    tile.classList.add("tile")
    board.appendChild(tile)
  }

  word = wordList[Math.floor(Math.random() * wordList.length)]
  // alert(word)
  currentRow = 0
  currentGuess = ""
}

const updateBoard = () => {
  for (let i = 0; i < 5; i++) {
    const tile = document.querySelectorAll(".tile")[currentRow * 5 + i]
    if (currentGuess[i] !== null) {
      tile.textContent = currentGuess[i]
    } else {
      tile.textContent = ""
    }
  }
}

const checkGuess = () => {
  if (currentGuess === word) {
    message.textContent = "🎉 You guessed it!"
  } else {
    message.textContent = "😭 Not quite right yet!"
    currentGuess = ""
    currentRow++
  }
}

const handleKeyPress = (event) => {
  // alert(event.key)
  if (event.key === "Backspace" && currentGuess.length > 0) {
    currentGuess = currentGuess.slice(0, -1)
    updateBoard()
  } 

  else if (/^[a-zA-Z]$/.test(event.key) && currentGuess.length < 5) {
    currentGuess += event.key.toLowerCase()
    updateBoard()
  }

  else if (event.key === "Enter" && currentGuess.length === 5) {
    checkGuess()
  }
}

createBoard()
window.addEventListener("keydown", handleKeyPress)
















