flipHBtn.addEventListener("click", () => {
	const flippedGrid = []
	for (let r = 0; r < numRows; r++) {
		const row = []
		for (let c = numCols - 1; c >= 0; c--) {
			row.push(pixelGrid[r][c])
		}
		flippedGrid.push(row)
	}
	// console.log(flippedGrid)
	undoActions.push(deepCopy(pixelGrid))
	redoActions = []
	pixelGrid = flippedGrid
	resetCanvas()
})

flipVBtn.addEventListener("click", () => {
	const flippedGrid = []
	for (let r = numRows - 1; r >= 0; r--) {
		const row = []
		for (let c = 0; c < numCols; c++) {
			row.push(pixelGrid[r][c])
		}
		flippedGrid.push(row)
	}
	// console.log(flippedGrid)
	undoActions.push(deepCopy(pixelGrid))
	redoActions = []
	pixelGrid = flippedGrid
	resetCanvas()
})

rotateLBtn.addEventListener("click", () => {
	const rotatedGrid = []
	for (let c = numCols - 1; c >= 0; c--) {
		const row = []
		for (let r = 0; r < numRows; r++) {
			row.push(pixelGrid[r][c])
		}
		rotatedGrid.push(row)
	}
	// console.log(flippedGrid)
	undoActions.push(deepCopy(pixelGrid))
	redoActions = []
	pixelGrid = rotatedGrid
	const temp = numRows
	numRows = numCols
	numCols = temp
	resetCanvas()
})

rotateRBtn.addEventListener("click", () => {
	const rotatedGrid = []
	for (let c = 0; c < numCols; c++) {
		const row = []
		for (let r = numRows - 1; r >= 0; r--) {
			row.push(pixelGrid[r][c])
		}
		rotatedGrid.push(row)
	}
	// console.log(flippedGrid)
	undoActions.push(deepCopy(pixelGrid))
	redoActions = []
	pixelGrid = rotatedGrid
	const temp = numRows
	numRows = numCols
	numCols = temp
	resetCanvas()
})