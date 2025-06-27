const board = document.querySelector("#board")
const wordBank = document.querySelector("#wordBank")

const healthyFoods = [
  ["Q","A","L","U","V","L","O","L","T","E","A","Y","Q","O","U","C","R","A","A","N","R","N"],
  ["R","U","R","R","A","O","R","S","E","N","L","A","A","E","A","A","O","U","R","L","I","R"],
  ["R","D","R","E","T","L","G","L","A","A","F","B","K","L","R","M","T","L","L","E","L","L"],
  ["N","R","O","A","R","F","I","R","L","I","L","A","A","L","E","C","T","B","E","N","T","T"],
  ["E","O","N","I","N","R","E","L","I","T","N","E","L","N","M","E","A","L","U","R","T","R"],
  ["M","S","I","L","K","L","E","L","N","O","L","S","E","N","A","O","T","D","U","R","T","R"],
  ["A","L","L","O","D","A","C","O","V","A","E","A","L","S","S","N","B","U","G","R","O","A"],
  ["R","E","A","I","D","Y","M","R","R","U","A","I","T","B","E","R","A","O","A","U","S","Y"],
  ["A","B","E","N","L","L","A","Y","Q","M","E","L","A","A","S","E","C","E","R","D","R","L"],
  ["W","R","S","R","A","M","T","K","U","L","T","O","O","Y","Q","C","T","I","B","R","I","A"],
  ["R","W","R","S","R","A","E","E","I","R","N","E","S","L","R","O","L","R","E","O","B","R"],
  ["S","R","E","D","B","Y","A","R","N","I","R","N","O","M","E","B","A","B","T","L","I","O"],
  ["R","M","M","T","U","I","O","Y","O","B","E","N","W","Y","W","Q","E","E","S","T","Y","L"],
  ["S","U","Y","I","C","R","E","N","A","M","I","A","R","B","O","U","R","B","T","O","I","N"],
  ["T","O","D","I","B","O","D","A","M","O","R","R","L","N","L","Y","L","O","A","R","R","R"],
  ["L","M","T","L","R","U","L","I","L","O","E","B","N","B","F","M","L","E","A","R","A","R"],
  ["N","D","U","R","D","Y","T","A","E","B","O","M","N","T","I","C","L","I","S","A","B","I"],
  ["A","O","R","I","O","A","C","A","W","A","R","Y","I","A","L","L","T","O","R","S","C","T"],
  ["C","A","N","G","B","B","A","A","I","B","B","O","U","I","U","L","Y","B","I","C","A","O"],
  ["G","T","U","R","M","E","R","I","C","A","M","O","R","A","A","E","B","I","S","C","I","M"],
  ["R","R","B","F","I","T","D","E","B","M","A","O","L","A","C","E","V","Y","L","I","L","T"],
  ["T","T","N","E","S","B","T","N","R","B","O","D","N","O","M","L","A","O","O","O","A","B"]
]

const healthyFoodsWords = [
  "ALMOND",
  "AVOCADO",
  "BANANA",
  "BASIL",
  "BLUEBERRY",
  "BRIE",
  "CARROT",
  "CAULIFLOWER",
  "KALE",
  "LENTIL",
  "ONION",
  "QUINOA",
  "RYE",
  "SALMON",
  "SESAME",
  "STRAWBERRY",
  "TEA",
  "TURMERIC",
  "YOGURT"
]

const elements = [
  ['L','Z','H','F','C','U','I','C','R','O','I','O','L','F','O','N','I','E','U','F','G','M'],
  ['C','E','S','E','S','E','M','R','H','R','I','C','M','M','U','I','L','L','Y','R','E','B'],
  ['T','S','I','L','I','C','O','N','E','I','H','U','N','O','U','L','S','R','B','N','O','N'],
  ['P','O','X','I','S','A','C','H','L','O','R','I','N','E','M','Y','L','Z','U','U','U','R'],
  ['N','C','U','S','I','O','U','R','G','K','P','T','C','M','A','O','C','S','A','U','L','L'],
  ['L','P','P','A','I','I','B','I','I','T','M','C','I','U','T','R','T','E','I','O','C','Z'],
  ['A','N','C','E','G','L','F','E','T','E','E','H','M','I','I','E','R','E','S','O','E','M'],
  ['O','O','U','A','E','C','N','C','N','R','A','U','U','H','D','A','S','U','E','E','I','U'],
  ['I','C','S','K','R','N','M','B','T','L','A','B','O','C','E','R','N','F','N','I','U','C'],
  ['G','I','C','U','E','B','E','N','N','C','E','N','N','I','T','R','O','G','E','N','N','T'],
  ['R','I','N','P','M','Y','O','I','I','R','I','N','E','R','S','R','G','O','M','I','K','S'],
  ['N','G','C','U','U','D','C','N','I','R','M','U','I','L','E','H','O','U','H','M','M','O'],
  ['A','E','O','A','L','C','E','R','C','O','O','D','F','H','N','E','I','G','C','O','S','A'],
  ['M','S','I','E','N','S','E','U','P','N','O','N','S','X','P','S','T','N','L','O','M','M'],
  ['A','A','N','M','R','V','N','C','U','S','E','L','Y','U','S','L','I','Y','D','A','N','U'],
  ['G','M','N','A','L','E','O','C','C','I','C','Y','U','A','L','P','E','I','N','S','E','I'],
  ['N','B','B','I','G','S','O','E','O','U','O','E','T','E','H','F','U','R','Z','I','N','C'],
  ['E','I','S','Y','O','E','U','L','A','A','P','O','F','L','U','M','U','N','I','S','A','L'],
  ['S','O','X','L','U','N','E','R','E','C','P','R','U','N','E','G','O','R','D','Y','H','A'],
  ['I','O','O','C','I','O','S','A','S','T','E','N','I','R','O','U','L','F','P','S','E','C'],
  ['U','R','C','P','H','O','S','P','H','O','R','U','S','T','A','L','U','M','I','N','U','M'],
  ['M','E','U','O','U','L','I','I','I','Y','O','M','U','I','N','A','T','I','T','R','Y','A']
]

const elementsWords = [
  "ALUMINUM",
  "ARSENIC",
  "BERYLLIUM",
  "CALCIUM",
  "CARBON",
  "CHLORINE",
  "COBALT",
  "COPPER",
  "FLUORINE",
  "HELIUM",
  "HYDROGEN",
  "IRON",
  "MAGNESIUM",
  "NICKEL",
  "NITROGEN",
  "OXYGEN",
  "PHOSPHORUS",
  "POTASSIUM",
  "SILICON",
  "SILVER",
  "SODIUM",
  "SULFUR",
  "TITANIUM",
  "ZINC"
]

const dogBreeds = [
  ['R','R','C','O','T','O','R','E','Z','U','A','N','H','C','S','A','R','G','R','L','T','E'],
  ['E','N','R','S','R','L','D','T','O','P','O','M','E','R','A','N','I','A','N','I','R','I'],
  ['T','I','T','I','K','L','S','B','O','S','T','O','N','T','E','R','R','I','E','R','A','R'],
  ['R','G','S','A','I','N','T','B','E','R','N','A','R','D','O','H','E','I','I','D','A','I'],
  ['R','O','E','B','H','H','A','T','P','M','B','O','H','T','S','T','V','S','D','N','H','R'],
  ['E','D','L','M','N','S','E','P','T','O','O','B','R','E','T','R','E','K','H','B','U','B'],
  ['T','P','G','B','I','O','N','A','D','T','O','E','U','Z','T','H','I','H','S','E','A','E'],
  ['H','E','A','E','I','A','E','R','T','R','O','D','A','E','X','E','R','A','S','R','O','E'],
  ['S','E','E','O','E','E','H','T','D','T','O','B','L','K','E','N','T','I','T','O','L','U'],
  ['I','H','B','M','A','L','T','E','S','E','M','G','A','E','E','R','E','I','E','D','H','I'],
  ['T','S','E','U','H','E','R','R','N','R','G','S','C','R','A','A','R','I','U','E','U','B'],
  ['T','I','S','D','E','C','S','R','I','D','D','N','U','H','S','H','C','A','D','I','A','R'],
  ['O','N','U','C','O','O','H','I','L','I','N','A','F','F','I','T','S','A','M','S','A','B'],
  ['C','M','D','L','O','A','I','E','I','U','A','B','E','E','C','H','I','E','S','P','T','B'],
  ['S','R','L','R','E','P','B','R','I','H','R','S','H','R','I','O','U','E','E','S','E','B'],
  ['A','I','R','B','S','O','A','N','E','B','I','R','R','P','G','R','T','A','L','A','B','R'],
  ['E','S','E','O','S','N','I','I','O','D','D','H','N','S','H','H','I','N','H','E','A','E'],
  ['H','R','I','X','R','I','N','A','K','I','T','A','E','A','O','S','L','E','D','U','H','R'],
  ['N','A','P','E','A','T','U','D','Z','A','H','T','G','U','C','L','U','A','S','N','A','B'],
  ['I','F','N','R','H','D','O','B','E','R','M','A','N','G','O','D','L','L','U','B','I','S'],
  ['I','T','F','N','A','I','T','A','M','L','A','D','E','D','R','E','H','P','E','H','S','E'],
  ['A','R','A','B','H','S','L','E','I','N','A','P','S','R','E','K','C','O','C','G','E','R']
]

const dogBreedsWords = [
  "AKITA",
  "BASSET HOUND",
  "BEAGLE",
  "BORDER COLLIE",
  "BOSTON TERRIER",
  "BOXER",
  "BULLDOG",
  "CHIHUAHUA",
  "COCKER SPANIEL",
  "DACHSHUND",
  "DALMATIAN",
  "DOBERMAN",
  "GREAT DANE",
  "MALTESE",
  "MASTIFF",
  "POMERANIAN",
  "POODLE",
  "RETRIEVER",
  "ROTTWEILER",
  "SAINT BERNARD",
  "SCHNAUZER",
  "SCOTTISH TERRIER",
  "SHEEPDOG",
  "SHEPHERD",
  "SHIBA INU",
  "SHIH TZU",
  "SIBERIAN HUSKY",
  "TERRIER"
]

let puzzle = healthyFoods
let words = healthyFoodsWords

let currWord = ""
let direction = ""
let prevRow = null
let prevCol = null

const clearSelection = () => {
	currWord = ""
	const selectedCells = document.querySelectorAll('div[data-selected="true"]')
	selectedCells.forEach((c) => {
		if (c.getAttribute("data-played") == "true") {
			c.style.backgroundColor = "#00CC00"
		} else {
			c.style.backgroundColor = ""
		}
		c.setAttribute("data-selected", "false")
	})
}

const drawBoard = () => {
	board.textContent = ""
	wordBank.textContent = ""
	currWord = ""
	direction = ""

	words.forEach((word) => {
		const p = document.createElement("p") // <p></p>
		p.id = word // <p id="LION"></p>
		p.textContent = word // <p id="LION">LION</p>
		wordBank.appendChild(p) // add it to the html
	})

	for (let r = 0; r < puzzle.length; r++) {
		for (let c = 0; c < puzzle[0].length; c++) {
			const cell = document.createElement("div")
			cell.classList.add("cell")
			cell.textContent = puzzle[r][c]
			cell.addEventListener("click", () => {
				// select first letter
				if (currWord.length === 0) {
					currWord += cell.textContent
					cell.style.backgroundColor = "#FFFF00"
					cell.setAttribute("data-selected", "true")
					prevRow = r
					prevCol = c
				} 
				// select second letter
				else if (currWord.length === 1) {
					if (r === prevRow && c === prevCol + 1) {
						direction = "R"
					} else if (r === prevRow && c === prevCol - 1) {
						direction = "L"
					} else if (r === prevRow - 1 && c === prevCol) {
						direction = "U"
					} else if (r === prevRow + 1 && c === prevCol) {
						direction = "D"
					} else if (r === prevRow - 1 && c === prevCol + 1) {
						direction = "UR"
					} else if (r === prevRow - 1 && c === prevCol - 1) {
						direction = "UL"
					} else if (r === prevRow + 1 && c === prevCol + 1) {
						direction = "DR"
					} else if (r === prevRow + 1 && c === prevCol - 1) {
						direction = "DL"
					} else {
						return
					}
					currWord += cell.textContent
					cell.style.backgroundColor = "#FFFF00"
					cell.setAttribute("data-selected", "true")
					prevRow = r
					prevCol = c
				} 
				// select the rest
				else {
					if (direction === "R" && r === prevRow && c === prevCol + 1) {
						// direction = "R"
					} else if (direction === "L" && r === prevRow && c === prevCol - 1) {
						// direction = "L"
					} else if (direction === "U" && r === prevRow - 1 && c === prevCol) {
						// direction = "U"
					} else if (direction === "D" && r === prevRow + 1 && c === prevCol) {
						// direction = "D"
					} else if (direction === "UR" && r === prevRow - 1 && c === prevCol + 1) {
						// direction = "UR"
					} else if (direction === "UL" && r === prevRow - 1 && c === prevCol - 1) {
						// direction = "UL"
					} else if (direction === "DR" && r === prevRow + 1 && c === prevCol + 1) {
						// direction = "DR"
					} else if (direction === "DL" && r === prevRow + 1 && c === prevCol - 1) {
						// direction = "DL"
					} else {
						return
					}
					currWord += cell.textContent
					cell.style.backgroundColor = "#FFFF00"
					cell.setAttribute("data-selected", "true")
					prevRow = r
					prevCol = c
				}

				// check word match
				if (words.includes(currWord)) {
					const selectedCells = document.querySelectorAll('div[data-selected="true"]')
					selectedCells.forEach((c) => {
						c.style.backgroundColor = "#00CC00"
						c.setAttribute("data-played", "true")
						c.setAttribute("data-selected", "false")
					})

					const matchedWord = document.getElementById(currWord)
					matchedWord.style.color = "lightgray"
					matchedWord.style.textDecoration = "line-through"

					// words = words.filter(w => w !== currWord)

					currWord = ""
				}
			})
			board.appendChild(cell)
		}
	}
}

document.addEventListener("keydown", () => {
  if (event.key === "Escape") {
    clearSelection();
  }
})

const setPuzzle = (topic) => {
	if (topic === "Healthy Foods") {
		puzzle = healthyFoods
		words = healthyFoodsWords
	} else if (topic === "Elements") {
		puzzle = elements
		words = elementsWords
	} else if (topic === "Dog Breeds") {
		puzzle = dogBreeds
		words = dogBreedsWords
	}

	drawBoard()
}

drawBoard()

