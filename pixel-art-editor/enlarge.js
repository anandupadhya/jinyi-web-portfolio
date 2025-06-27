const enlarge = () => {
	const enlargedPixelGrid = []

	for (let r = 0; r < numRows; r++) {
		const newRow = []
		for (let c = 0; c < numCols; c++) {
			for (let i = 0; i < enlargeFactor; i++) {
				newRow.push(pixelGrid[r][c])
			}
		}
		for (let i = 0; i < enlargeFactor; i++) {
			enlargedPixelGrid.push(newRow)
		}
	}

	numRows *= enlargeFactor
	numCols *= enlargeFactor
	pixelGrid = enlargedPixelGrid
	resetCanvas()
}

x2Btn.addEventListener("click", () => {
	enlargeFactor = 2
	enlarge()
})

x3Btn.addEventListener("click", () => {
	enlargeFactor = 3
	enlarge()
})

x4Btn.addEventListener("click", () => {
	enlargeFactor = 4
	enlarge()
})

x5Btn.addEventListener("click", () => {
	enlargeFactor = 5
	enlarge()
})