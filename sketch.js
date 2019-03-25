let bg = 0
let x = 0
let y = 0
function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	//fill(bg)
	background('white')
	rect(x, y, 100, 100)

	if (keyIsDown(UP_ARROW))
		y--
	if (keyIsDown(DOWN_ARROW))
		y++
	if (keyIsDown(LEFT_ARROW))
		x--
	if (keyIsDown(RIGHT_ARROW))
		x++
}

function keyPressed(){
	//if (key == 'A') 
	//bg = bg == 255 ? 0 : 255

	//if (keyCode == LEFT_ARROW)
	//	x--
	//else if(keyCode == RIGHT_ARROW)
	//	x++
	//else if (keyCode == UP_ARROW)
	//	y--
	//else if (keyCode == UP_ARROW)
	//	y++
}