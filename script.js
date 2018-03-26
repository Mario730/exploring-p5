var grid;
var numrows = 10;
var numcolumns = 20;
var rowHeight = 50;
var columnWidth = 50;

function setup() {
  createCanvas(1500, 1500);
  //var seed = Math.floor(random(2));
  //randomSeed(seed);
  //console.log("seed:", seed)
  grid = [];
  for (var row = 0; row < numrows; row++) {
    grid[row] = [];
    for (var col = 0; col < numcolumns; col++) {
      grid[row][col] = false;
    }
  }
  grid[3][3] = true;
}

function static() {
  var row = Math.floor(random(numrows));
  var col = Math.floor(random(numcolumns));
  grid[row][col] = random([true, false]);
}

function interesting() {
  var row = Math.floor(random(numrows));
  var col = Math.floor(random(numcolumns));
  var topleft = grid[row-1] && grid[row-1][col-1];
  var top = grid[row-1] && grid[row-1][col];
  var topright = grid[row-1] && grid[row-1][col+1];
  var left = grid[row][col-1];
  var right = grid[row][col+1];
  var bottomleft = grid[row+1] && grid[row+1][col-1];
  var bottom = grid[row+1] && grid[row+1][col];
  var bottomright = grid[row+1] && grid[row+1][col+1];
  var side = top || left || right || bottom;
  var corner = topleft || topright || bottomleft || bottomright;
  if ((top || left || right || bottom) && !(topleft && top && left) && !(top && topright && right) && !(left && bottomleft && bottom) && !(right && bottom && bottomright)){
    grid[row][col] = true;
  }
  //console.log("Row: ", row);
  //console.log("Column: ", col);
}

function draw() {
  //static();
  interesting();
  //console.log(grid);
  grid.forEach(function (row, y) {
    row.forEach(function (cell, x) {
      if (cell) {
        fill(250, 250, 250);
      }
      else {
        fill(60, 60, 60);
      }
      rect(x*rowHeight, y*columnWidth, rowHeight, columnWidth);
    })
  })
}
