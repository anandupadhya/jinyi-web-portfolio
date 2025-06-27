eraserBtn.addEventListener("click", () => {
	currColor = ""
	currColorDisplay.style.backgroundColor = currColor
})

fillAllBtn.addEventListener("click", () => {
	undoActions.push(deepCopy(pixelGrid))
	redoActions = []
	const pixels = document.querySelectorAll(".pixel")
	pixels.forEach((p) => {
		const r = p.getAttribute("data-row")
		const c = p.getAttribute("data-col")
		p.style.backgroundColor = currColor
		pixelGrid[r][c] = currColor
	})
})

const rectFill = (r1, c1, r2, c2) => {
	const pixels = document.querySelectorAll(".pixel")
	pixels.forEach((p) => {
		const r = p.getAttribute("data-row")
		const c = p.getAttribute("data-col")
		if (r >= r1 && r <= r2 && c >= c1 && c <= c2) {
			p.style.backgroundColor = currColor
			pixelGrid[r][c] = currColor
		}
	})
}

rectFillBtn.addEventListener("click", () => {
	rectFillMode = true
})

borderFillBtn.addEventListener("click", () => {
	const pixels = document.querySelectorAll(".pixel")
	pixels.forEach((p) => {
		const r = p.getAttribute("data-row")
		const c = p.getAttribute("data-col")
		if (r == 0 || c == 0 || r == numRows - 1 || c == numCols - 1) {
			p.style.backgroundColor = currColor
			pixelGrid[r][c] = currColor
		}
	})
})