const deepCopy = (grid) => {
	const copy = []
	for (let r = 0; r < grid.length; r++) {
		const row = []
		for (let c = 0; c < grid[0].length; c++) {
			row.push(grid[r][c])
		}
		copy.push(row)
	}
	return copy
}

copyBtn.addEventListener("click", () => {
	navigator.clipboard.writeText(JSON.stringify(pixelGrid))	
})

toggleGridBtn.addEventListener("click", () => {
	const pixels = document.querySelectorAll(".pixel")
	if (toggleGridBtn.textContent === "Grid Off") {
		pixels.forEach((p) => {
			p.style.border = "0px solid #546e7a"
		})
		toggleGridBtn.textContent = "Grid On"
	} else {
		pixels.forEach((p) => {
			p.style.border = "0.1px solid #546e7a"
		})
		toggleGridBtn.textContent = "Grid Off"
	}
})

undoBtn.addEventListener("click", () => {
	if (undoActions.length === 0) {
		return
	}

	const currState = deepCopy(pixelGrid)
	redoActions.push(currState)
	const prevState = undoActions.pop()
	pixelGrid = prevState
	resetCanvas()
})

redoBtn.addEventListener("click", () => {
	if (redoActions.length === 0) {
		return
	}

	const currState = deepCopy(pixelGrid)
	undoActions.push(currState)
	const nextState = redoActions.pop()
	pixelGrid = nextState
	resetCanvas()
})

zoomInBtn.addEventListener("click", () => {
	if (pixelSize > 40) return

	pixelSize++

	const pixels = document.querySelectorAll(".pixel")
	pixels.forEach((p) => {
		p.style.width = pixelSize + "px"
		p.style.height = pixelSize + "px"
	})
})

zoomOutBtn.addEventListener("click", () => {
	if (pixelSize < 2) return

	pixelSize--

	const pixels = document.querySelectorAll(".pixel")
	pixels.forEach((p) => {
		p.style.width = pixelSize + "px"
		p.style.height = pixelSize + "px"
	})
})





