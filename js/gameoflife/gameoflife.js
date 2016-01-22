window.addEventListener("load", onWindowLoaded, false);

function onWindowLoaded() {
	Debugger.log("window loaded.");
	AppMain();
}
var Cell = function(x, y, size, life){
	this.x = x;
	this.y = y;
	this.size = size;
	this.life = life;
	this.style_death = "#dddddd";
	this.style_alive = "#555555";
};
Cell.prototype.draw = function(context) {
	context.save();
	context.beginPath();
	context.rect(this.x,this.y,this.size,this.size);
	context.closePath();
	if (this.life) {
		context.fillStyle = this.style_alive;
	}
	else {
		context.fillStyle = this.style_death;
	}
	context.fill();
	context.restore();
};
function AppMain() {
	Debugger.log("AppMain start.");
	if (!canvasSupport) {
		Debugger.log("canvas do not support.");
		return;
	}

	var canvas = document.getElementById("screen");
	var context = canvas.getContext("2d");

	document.addEventListener("mousedown", eventMouseDown, false);
	document.addEventListener("mouseUp", eventMouseUp, false);
	document.addEventListener("keydown", eventKeyDown, false);
	document.addEventListener("keyup", eventKeyUp, false);

	var keyState = [];
	var clickState = [];
	function eventKeyDown(e) {
		keyState[e.keyCode] = true;
	}
	function eventKeyUp(e) {
		if (keyState[e.keyCode]) {
			clickState[parseInt(e.keyCode)] = true;
			Debugger.log(e.keyCode + " is clicked");
		}
		keyState[e.keyCode] = false;
	}
	var bgcolor = "rgb(100,120,200)";
	var grid = [];
	var orig = [];
	var stage = true;
	var size = 10;
	var row_max = parseInt(canvas.height/size);
	var col_max = parseInt(canvas.width/size);
	var count_alive = 0;

	Debugger.log("canvas width : " + canvas.width);
	Debugger.log("canvas height : " + canvas.height);
	Debugger.log("row max : " + row_max);
	Debugger.log("col max : " + col_max);

	function eventMouseDown(e) {
		var mx = e.pageX - canvas.offsetLeft;
		var my = e.pageY - canvas.offsetTop;
		var x = parseInt(mx/size);
		var y = parseInt(my/size);
		if (stage) {
			if (grid[x] !== undefined && grid[x][y] !== undefined) {
				grid[x][y].life = !grid[x][y].life;
			}
		}
		else {
			if (orig[x] !== undefined && orig[x][y] !== undefined) {
				orig[x][y].life = !orig[x][y].life;
			}
		}
	}
	function eventMouseUp(e) {
	}

	function initialize() {
		// make cells which fill the entire canvas.
		var count = 0;
		for (var col = 0; col < col_max; ++col) {
			var vline = [];
			var vline2 = [];
			for (var row = 0; row < row_max; ++row) {
				vline.push(new Cell(col*size, row*size, size, false));
				vline2.push(new Cell(col*size, row*size, size, false));
				count++;
			}
			grid.push(vline);
			orig.push(vline2);
		}
		Debugger.log("total cell is " + count);
		Debugger.log("grid length is " + grid.length);
		Debugger.log("grid[0] length is " + grid[0].length);
		Debugger.log("orig length is " + orig.length);
		Debugger.log("orig[0] length is " + orig[0].length);

		// make test case
		grid[15][20].life = true;
		grid[16][19].life = true;
		grid[17][19].life = true;
		grid[17][18].life = true;
	}
	var stop_update = true;
	function inputProcess() {
		if (clickState[parseInt(KeyBoard.Enter)]) {
			Debugger.log(KeyBoard.Enter + " click processing");
			stop_update = !stop_update;
			clickState[parseInt(KeyBoard.Enter)] = false;
		}
		if (clickState[parseInt(KeyBoard.Esc)]) {
			if (stage) {
				Debugger.log(grid);
			}
			else {
				Debugger.log(orig);
			}
		}
	}
	function isAlive(arr, x, y) {
		x = parseInt(x);
		y = parseInt(y);
//		if (typeof arr === undefined) {
//			alert("arr is undefined");
//		}
//		else {
//			alert("arr type is " + typeof arr);
//			alert("arr length is " + arr.length);
//			alert("arr[0] length is " + arr[0].length);
//		}

		var count_alive = 0;
		if (arr[x-1] !== undefined && arr[x-1][y-1] !== undefined) {
			count_alive += arr[x-1][y-1].life? 1 : 0;
		}
		if (arr[x] !== undefined && arr[x][y-1] !== undefined) {
			count_alive += arr[x][y-1].life? 1 : 0;
		}
		if (arr[x+1] !== undefined && arr[x+1][y-1] !== undefined) {
			count_alive += arr[x+1][y-1].life? 1 : 0;
		}
		if (arr[x-1] !== undefined && arr[x-1][y] !== undefined) {
			count_alive += arr[x-1][y].life? 1 : 0;
		}
		if (arr[x+1] !== undefined && arr[x+1][y] !== undefined) {
			count_alive += arr[x+1][y].life? 1 : 0;
		}
		if (arr[x-1] !== undefined && arr[x-1][y+1] !== undefined) {
			count_alive += arr[x-1][y+1].life? 1 : 0;
		}
		if (arr[x] !== undefined && arr[x][y+1] !== undefined) {
			count_alive += arr[x][y+1].life? 1 : 0;
		}
		if (arr[x+1] !== undefined && arr[x+1][y+1] !== undefined) {
			count_alive += arr[x+1][y+1].life? 1 : 0;
		}

//		if (count_alive != 0) {
//			Debugger.log(x + "," + y + " life : " + arr[x][y].getLife() + ", count alive : " + count_alive);
//			Debugger.log("["+(x-1)+","+(y-1)+"]" + arr[x-1][y-1].getLife());
//			Debugger.log("["+x+","+(y-1)+"]" + arr[x][y-1].getLife());
//			Debugger.log("["+(x+1)+","+(y-1)+"]" + arr[x+1][y-1].getLife());
//			Debugger.log("["+(x-1)+","+y+"]" + arr[x-1][y].getLife());
//			Debugger.log("["+(x+1)+","+y+"]" + arr[x+1][y].getLife());
//			Debugger.log("["+(x-1)+","+(y+1)+"]" + arr[x-1][y+1].getLife());
//			Debugger.log("["+x+","+(y+1)+"]" + arr[x][y+1].getLife());
//			Debugger.log("["+(x+1)+","+(y+1)+"]" + arr[x+1][y+1].getLife());
//		}
		if (arr[x][y].life) {
			if (count_alive == 3 || count_alive == 2)
				return true;
		}
		else {
			if (count_alive == 3)
				return true;
		}

		return false;
	}
	function updateObjects() {
		count_alive = 0;
		var x, y;
		var alive;
		if (stage) {
			for (x in orig) {
				for (y in orig[x]) {
					alive = isAlive(grid, x, y);
					if (alive) {
						//Debugger.log("x : " + x + ", y : " + y);
						++count_alive;
					}
					orig[x][y].life = alive;
				}
			}
			//Debugger.log("alive count is " + count_alive);
		}
		else {
			for (x in grid) {
				for (y in grid[x]) {
					alive = isAlive(orig, x, y);
					if (alive) {
						//Debugger.log("x : " + x + ", y : " + y);
						++count_alive;
					}
					grid[x][y].life = alive;
				}
			}
			//Debugger.log("alive count is " + count_alive);
		}
	}
	function drawSome() {
		var x, y;
		if (stage) {
			for (x in grid) {
				for (y in grid[x]) {
					grid[x][y].draw(context);
				}
			}
		}
		else {
			for (x in orig) {
				for (y in orig[x]) {
					orig[x][y].draw(context);
				}
			}
		}

		if (!stop_update) {
			stage = !stage;
		}
		if (count_alive === 0){
			stop_update = true;
		}
	}
	function drawui() {
	}
	function drawScreen () {
		context.fillStyle = bgcolor;
		context.strokeStyle = "#eeaaaa";
		context.lineWidth = 10;
		context.lineCap = 'butt';
		context.lineJoin = 'sqaure';

		context.clearRect(0,0,canvas.width,canvas.height);
		context.fillRect(0,0,canvas.width,canvas.height);
		//context.strokeRect(5,5,canvas.width-10,canvas.height-10);

		drawui();
		drawSome();
	}

	function mainloop() {
		inputProcess();
		if (!stop_update) {
			updateObjects();
		}
		drawScreen();
		setTimeout(mainloop, 1000/24);
	}

	initialize();
	mainloop();
}
