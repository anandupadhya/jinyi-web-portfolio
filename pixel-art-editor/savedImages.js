let savedImages = JSON.parse(localStorage.getItem("savedImages")) || [
	{
		name: "Tree",
		pixelGrid: [["","","","","","","","","",""],["","","#1b5e20","#1b5e20","#1b5e20","","","","",""],["","","#1b5e20","#6d4c41","#1b5e20","#1b5e20","","","",""],["","#1b5e20","#1b5e20","#1b5e20","#6d4c41","#1b5e20","#1b5e20","#1b5e20","",""],["","#1b5e20","#1b5e20","#1b5e20","#6d4c41","#6d4c41","#6d4c41","#1b5e20","",""],["","#1b5e20","#6d4c41","#6d4c41","#6d4c41","#6d4c41","#1b5e20","#1b5e20","",""],["","","#1b5e20","#6d4c41","#6d4c41","#6d4c41","","","",""],["","","","","#6d4c41","#6d4c41","","","",""],["","","","","#6d4c41","#6d4c41","","","",""],["#43a047","#43a047","#43a047","#43a047","#43a047","#43a047","#43a047","#43a047","#43a047","#43a047"]]
	},
	{
		name: "Banana",
		pixelGrid: [["","","","","","","","","",""],["","","","","","","#212121","#212121","",""],["","","","","","","#212121","#212121","",""],["","","","","","","#fdd835","#fdd835","",""],["","","","","","#fdd835","#fdd835","#fdd835","",""],["","","","","#fdd835","#fdd835","#fdd835","#fdd835","",""],["","","","#fdd835","#fdd835","#fdd835","#fdd835","","",""],["","","#fdd835","#fdd835","#fdd835","","","","",""],["","#fdd835","#fdd835","#fdd835","","","","","",""],["","","","","","","","","",""]]
	}
]

savedImages.forEach((image) => {
	const btn = document.createElement("button")
	btn.textContent = image.name
	btn.addEventListener("click", () => {
		pixelGrid = image.pixelGrid
		numRows = pixelGrid.length
		numCols = pixelGrid[0].length
		resetCanvas()
	})
	savedImagesLinks.appendChild(btn)
})

saveBtn.addEventListener("click", () => {
	const image = {
		name: nameInput.value || "Image",
		pixelGrid: pixelGrid,
	}

	savedImages.push(image)
	localStorage.setItem("savedImages", JSON.stringify(savedImages))

	const btn = document.createElement("button")
	btn.textContent = image.name
	btn.addEventListener("click", () => {
		pixelGrid = image.pixelGrid
		numRows = pixelGrid.length
		numCols = pixelGrid[0].length
		resetCanvas()
	})
	savedImagesLinks.appendChild(btn)
})