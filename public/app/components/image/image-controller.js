function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
	var imageService = new ImageService
	function drawImage() {
		imageService.getImage(function (drawImage){
		console.log(drawImage)
		document.body.style.backgroundImage = `url(${drawImage.url})`
	})
	}
	drawImage()
}


