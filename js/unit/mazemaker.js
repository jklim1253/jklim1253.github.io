window.addEventListener("load", onWindowLoaded, false);
function onWindowLoaded(e) {
	AppMain();
}
function Block(x,y,size,state) {
	this.x = x;
	this.y = y;
	this.size = size;
	this.state = state;
	this.hover = false;
}
Block.normal = "#eeeeee";
Block.selected = "#555555";
Block.start = "#fefe55";
Block.end = "#5555fe";

Block.prototype.draw = function(context) {
	context.save();
	context.beginPath();
	context.rect(this.x, this.y, this.size, this.size);
	context.closePath();
	if (this.state === "normal") {
		context.fillStyle = Block.normal;
	}
	else if (this.state === "selected") {
		context.fillStyle = Block.selected;
	}
	else if (this.state === "start") {
		context.fillStyle = Block.start;
	}
	else if (this.state === "end") {
		context.fillStyle = Block.end;
	}
	context.fill();
	if (this.state === "start") {
		context.font = "40px Open Sans";
		context.fillStyle = "#ff5555";
		context.textAlign = "center";
		context.textBaseline = "middle";
		context.fillText("S", this.x + this.size/2, this.y + this.size/2);
	}
	else if (this.state === "end") {
		context.font = "40px Open Sans";
		context.fillStyle = "#ff5555";
		context.textAlign = "center";
		context.textBaseline = "middle";
		context.fillText("E", this.x + this.size/2, this.y + this.size/2);
	}
	context.restore();
};
function Position(x, y) {
	if (x === undefined) {
		this.x = -1;
	}
	else {
		this.x = x;
	}
	if (y === undefined) {
		this.y = -1;
	}
	else {
		this.y = y;
	}
}
Position.prototype.equal = function(o) {
	return (this.x === o.x && this.y === o.y);
};
Position.prototype.equalByElement = function(x, y) {
	return (this.x === x && this.y === y);
};
Position.prototype.reset = function() {
	this.x = -1;
	this.y = -1;
};
Position.prototype.debug = function() {
	Debugger.log(this.x + ", " + this.y);
};
function AppMain() {
	var canvas = document.getElementById("screen");
	var context = canvas.getContext("2d");

	var blocksize = 40;
	var margin = 20;
	var blocks = [];
	var cols = parseInt((canvas.width-margin*2)/blocksize);
	var rows = parseInt((canvas.height-margin*2)/blocksize);
	var mousepressed = false;
	var prevcell = new Position();
	var keyclicked = [];
	var keypressed = [];
	var hoverindex = new Position();
	var clickindex = new Position();

	document.addEventListener("mousedown", onMouseDown, false);
	document.addEventListener("mouseup", onMouseUp, false);
	document.addEventListener("mousemove", onMouseMove, false);
	document.addEventListener("keydown", onKeyDown, false);
	document.addEventListener("keyup", onKeyUp, false);
	function getBlockIndexByMouse(mx, my) {
		var xi = -1, yi = -1;
		if (mx >= margin && mx <= canvas.width - margin &&
			my >= margin && my <= canvas.height - margin) {
			xi = parseInt((mx-margin)/blocksize);
			yi = parseInt((my-margin)/blocksize);
		}
		return new Position(xi, yi);
	}
	function zerofill(n, size) {
		var returnValue = "" + n;
		while (returnValue.length < size) {
			returnValue = '0' + returnValue;
		}
		return returnValue;
	}
	function makeMazeId(array) {
		var returnValue = "";
		for (var x in array) {
			var v = 0x00;
			for (var y in array[x]) {
				v = v << 1;
				if (array[x][y].state === "selected") {
					v = v | 0x01;
				}
			}
			v = v.toString(16);
			v = zerofill(v, 4);
			returnValue += v.toUpperCase();
		}
		return returnValue;
	}
	function onMouseDown(e) {
		mousepressed = true;

		var mx = e.pageX - canvas.offsetLeft;
		var my = e.pageY - canvas.offsetTop;
		clickindex = getBlockIndexByMouse(mx, my);
	}
	function onMouseUp(e) {
		mousepressed = false;

		var mx = e.pageX - canvas.offsetLeft;
		var my = e.pageY - canvas.offsetTop;

		var now = getBlockIndexByMouse(mx, my);

		clickindex.debug();
		now.debug();

		if (clickindex.equal(now)) {
			if (clickindex.x === -1 || clickindex.y === -1) {
				// do nothing.
			}
			else if (blocks[clickindex.x][clickindex.y].state === "start" ||
				blocks[clickindex.x][clickindex.y].state === "end") {
				// do nothing.
			}
			else if (blocks[clickindex.x][clickindex.y].state === "selected") {
				blocks[clickindex.x][clickindex.y].state = "normal";
			}
			else {
				blocks[clickindex.x][clickindex.y].state = "selected";
			}
		}
	}
	function onMouseMove(e) {
		var mx = e.pageX - canvas.offsetLeft;
		var my = e.pageY - canvas.offsetTop;
		for (var x in blocks) {
			for (var y in blocks[x]) {
				blocks[x][y].hover = false;
			}
		}

		if (mx >= margin && mx <= canvas.width - margin &&
			my >= margin && my <= canvas.height - margin) {
			var xi = parseInt((mx-margin)/blocksize);
			var yi = parseInt((my-margin)/blocksize);
			if (xi < 0 || xi >= cols ||
				yi < 0 || yi >= rows) {
				hoverindex.reset();
				return;
			}
			hoverindex.x = xi;
			hoverindex.y = yi;
			blocks[xi][yi].hover = true;
			if (blocks[xi][yi].state === "start" ||
				blocks[xi][yi].state === "end") {
				// do nothing.
			}
			else if (prevcell.equalByElement(xi, yi)) {
				// do nothing.
			}
			else if (mousepressed) {
				if (blocks[xi][yi].state === "normal") {
					blocks[xi][yi].state = "selected";
				}
				else {
					blocks[xi][yi].state = "normal";
				}
				prevcell.x = xi;
				prevcell.y = yi;
			}
		}
		else {
			hoverindex.reset();
		}
	}
	function onKeyDown(e) {
		keypressed[e.keyCode] = true;
	}
	function onKeyUp(e) {
		if (keypressed[e.keyCode]) {
			keyclicked[e.keyCode] = true;
			inputProcess();
		}
		keypressed[e.keyCode] = false;
	}

	function initialize() {
		for (var x = 0; x < cols; ++x) {
			var vline = [];
			for (var y = 0; y < rows; ++y) {
				vline.push(new Block(
							margin+x*blocksize,
							margin+y*blocksize,
							blocksize,
							"normal"
							));
			}
			blocks.push(vline);
		}
		blocks[0][0].state = "end";
		blocks[cols-1][rows-1].state = "start";
	}
	function inputProcess() {
		// clear map.
		if (keyclicked[KeyBoard.Esc]) {
			for (var x in blocks) {
				for (var y in blocks[x]) {
					blocks[x][y].state = "normal";
				}
			}
			blocks[0][0].state = "end";
			blocks[cols-1][rows-1].state = "start";
		}
		// save map.
		if (keyclicked[KeyBoard.S]) {
		}
	}
	function updateObjects() {
	}
	function clearScreen() {
		context.clearRect(0,0,canvas.width,canvas.height);
	}
	function drawBackground() {
		context.save();
		context.fillStyle = "#555555";
		context.fillRect(0,0,canvas.width,canvas.height);
		context.restore();
	}
	function drawObjects() {
		for (var x in blocks) {
			for (var y in blocks[x]) {
				blocks[x][y].draw(context);
			}
		}
		if (hoverindex.x >= 0 && hoverindex.x < cols &&
			hoverindex.y >= 0 && hoverindex.y < rows) {
			context.save();
			context.beginPath();
			context.rect(blocks[hoverindex.x][hoverindex.y].x-1,
						 blocks[hoverindex.x][hoverindex.y].y-1,
						 blocksize+2, blocksize+2);
			context.closePath();
			context.lineWidth = 2;
			context.strokeStyle = "#fe5555";
			context.stroke();
			context.restore();
		}
	}
	function drawUI() {
		var mazeid = document.getElementById("mazeid");
		mazeid.value = makeMazeId(blocks);
	}
	function drawScreen() {
		clearScreen();
		drawBackground();
		drawObjects();
		drawUI();
	}
	function mainloop() {
		//inputProcess();
		updateObjects();
		drawScreen();
		setTimeout(mainloop, 1000/24); // 24 fps
	}

	initialize();
	mainloop();
}
