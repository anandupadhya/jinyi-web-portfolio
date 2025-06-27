let rectFillMode = false
let eyeDropperMode = false
let topLeft = null
let bottomRight = null
let numRows = parseInt(rowsSelect.value)
let numCols = parseInt(colsSelect.value)
let pixelGrid = []
let undoActions = []
let redoActions = []
let enlargeFactor
let pixelSize = 25

// localStorage.removeItem("savedImages")

for (let r = 0; r < numRows; r++) {
	const row = []
	for (let c = 0; c < numCols; c++) {
		row.push("")
	}
	pixelGrid.push(row)
}

let currColor = colors[Math.floor(Math.random() * colors.length)]
currColorDisplay.style.backgroundColor = currColor

colors.forEach((c) => {
	addColorBox(c)
})



eyeDropperBtn.addEventListener("click", () => {
	eyeDropperMode = true
})

const resetCanvas = () => {
	canvas.textContent = ""
	canvas.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`
	widthDisplay.textContent = numCols
	heightDisplay.textContent = numRows

	for (let r = 0; r < numRows; r++) {
		// const row = []
		for(let c = 0; c < numCols; c++) {
			// row.push("")
			const pixel = document.createElement("div")
			pixel.classList.add("pixel")
			pixel.setAttribute("data-row", r)
			pixel.setAttribute("data-col", c)
			if (toggleGridBtn.textContent === "Grid On") {
				pixel.style.border = "0px solid #546e7a"
			}	
			pixel.style.backgroundColor = pixelGrid[r][c]

			pixel.addEventListener("click", () => {
				if (eyeDropperMode === true) {
					currColor = pixel.style.backgroundColor
					currColorDisplay.style.backgroundColor = currColor
					eyeDropperMode = false
					return
				}

				undoActions.push(deepCopy(pixelGrid))
				redoActions = []
					pixel.style.backgroundColor = currColor
					pixelGrid[r][c] = currColor
				// console.log(undoActions)

				if (rectFillMode === true) {
					if (topLeft === null) {
						topLeft = pixel
						
					} else if (bottomRight === null) {
						bottomRight = pixel

						const r1 = parseInt(topLeft.getAttribute("data-row"))
						const c1 = parseInt(topLeft.getAttribute("data-col"))
						const r2 = parseInt(bottomRight.getAttribute("data-row"))
						const c2 = parseInt(bottomRight.getAttribute("data-col"))

						rectFill(r1, c1, r2, c2)
						topLeft = null
						bottomRight = null
						rectFillMode = false
					}
				}

				// console.log(pixelGrid)
			})
			canvas.appendChild(pixel)
		}
		// pixelGrid.push(row)
	}
}

resetBtn.addEventListener("click", () => {
	pixelGrid = []
	numRows = parseInt(rowsSelect.value)
	numCols = parseInt(colsSelect.value)
	for (let r = 0; r < numRows; r++) {
		const row = []
		for (let c = 0; c < numCols; c++) {
			row.push("")
		}
		pixelGrid.push(row)
	}
	currColor = colors[Math.floor(Math.random() * colors.length)]
	currColorDisplay.style.backgroundColor = currColor
	resetCanvas()
})

resetCanvas()


// When eraser is clicked set the curr color display to be a white box with a red slash
// turn on/off grid lines (still buggy)
// be able to enlarge image 2x 3x 4x

// Paint mode: click, mouseover (start/stop with key press) !!!


// be able to undo/redo upto the last 10 actions
// be able to save the image and download it as png


// Rectangle Fill -> 1) solid 2) hollow
// border fill is not saved separately for undo/redo

// Add textarea that can be used to output the JSON string of the pixelgrid 

// BE able to change background color of the page
// fish
// [["#b71c1c","","","","","","","","","","","","","","","","","","","#b71c1c"],["","#b71c1c","","","","","","","","","","","","","","","","","#b71c1c",""],["","","#b71c1c","","","","","","","","","","","","","","","#b71c1c","",""],["","","","#b71c1c","","","","","","","","","","","","","#b71c1c","","",""],["","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","",""],["","","","#b71c1c","","","","","","","","","","","","","#b71c1c","","",""],["","","#b71c1c","","","","","","","","","","","","","","","#b71c1c","",""],["","#b71c1c","","","","","","","","","","","","","","","","","#b71c1c",""],["#b71c1c","","","","","","","","","","","","","","","","","","","#b71c1c"]]