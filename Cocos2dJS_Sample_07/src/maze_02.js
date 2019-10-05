// This program is based on "http://algoful.com/Archive/Algorithm/MazeDig" by Algoful.
// by T. Fujita

var maze = [];
var startCells = [];

var Maze = function(X, Y) 
{
    var w = X;									// 幅（奇数）
    var h = Y;									// 高さ（奇数）
    if(w < 11) {w = 11;}
    if(h < 11) {h = 11;}
    if(w % 2 == 0) {w = w - 1;}
    if(h % 2 == 0) {h = h - 1;}

    var x;
    var y;
    var results = [];

    var currentCells = [];

    for (x = 0; x < w; x++) {
	maze[x] = new Array();
	for (y = 0; y < h; y++) {
            if (x == 0 || y == 0 || x == w - 1 || y == h - 1) {
                maze[x][y] = "F";						// 外周を通路に設定
            } else {
		maze[x][y] = "W";						// 残りを壁に設定
	    }
	}
    }

    startCells[0] = [];
    startCells[0][0] = (Math.floor(Math.random() * (w / 2 - 2))) * 2 + 1;
    startCells[0][1] = (Math.floor(Math.random() * (h / 2 - 2))) * 2 + 1;

    Dig(startCells[0][0], startCells[0][1]);

    for (x = 0; x < w; x++)
    {
	for (y = 0; y < h; y++)
	{
	    if (x == 0 || y == 0 || x == w - 1 || y == h - 1)
	    {
		maze[x][y] = "W";						// 外周を壁に戻す
	    }
	}
    }
    let i = 0;
    while (maze[i][1] == "W") {
	if(maze[i + 1][1] == "F") {
	    maze[i + 1][1] = "P";
	    break;
	}
	i = i + 1;
    }
    i = maze.length - 2;
    let j = maze[0].length - 1;
    while(maze[i][j] == "W") {
	if(maze[i - 1][j - 1] == "F") {
	    maze[i - 1][j] = "G";
	    break;
	}
	i = i - 1;
    }
    for (y = 0; y < h; y++) {
	results[y] = [];
	for (x = 0; x < w; x++) {
	    results[y] = results[y] + maze[x][y];
	}
    }
// alert(results[0] + "\n" + results[1]);
    return results;
}


function Dig(x, y) 
{
  while (true) {
    var directions = [];
    if(maze[x][y-1] == "W" && maze[x][y-2] =="W") {directions.push("UP");}
    if(maze[x][y+1] == "W" && maze[x][y+2] =="W") {directions.push("DOWN");}
    if(maze[x-1][y] == "W" && maze[x-2][y] =="W") {directions.push("LEFT");}
    if(maze[x+1][y] == "W" && maze[x+2][y] =="W") {directions.push("RIGHT");}
    if(directions.length == 0) {break;}
    var rnd = Math.floor(Math.random() * directions.length);
    switch (directions[rnd])
    {
	case 'UP':
	    SetPath(x, --y);
            SetPath(x, --y);
            break;
        case 'DOWN':
            SetPath(x, ++y);
            SetPath(x, ++y);
            break;
        case 'LEFT':
            SetPath(--x, y);
            SetPath(--x, y);
            break;
        case 'RIGHT':
            SetPath(++x, y);
            SetPath(++x, y);
            break;
    }
// console.log(maze[0] + "\n" + maze[1] + "\n" + maze[2] + "\n" + maze[3] + "\n" + maze[4] + "\n" + maze[5]);
    var cell = GetStartCell();
    if(cell != null)
    {
	Dig(cell[0], cell[1]);
    }
  }
}


function SetPath(x, y) 
{
    maze[x][y] = "F";
    if((x % 2 == 1) && (y % 2 == 1))
    {
	var Temp = [x, y];
	startCells.push(Temp);
    }
}


function GetStartCell()
{
    if(startCells.length == 0) {return null;}
    var rnd = Math.floor(Math.random() * startCells.length);
    var cell = startCells[rnd];
    startCells.splice(rnd, 1);
    return cell;
}

