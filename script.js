var grid;
var numrows = 50;
var numcolumns = 50;
var rowHeight = 20;
var columnWidth = 20;

function setup() {
  createCanvas(1000, 1000);
  grid = [];
  for (var row = 0; row < numrows; row++) {
    grid[row] = [];
    for (var col = 0; col < numcolumns; col++) {
      grid[row][col] = false;
    }
  }
  grid[1][1] = true;
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
  if ((top || left || right || bottom) && !(topleft && top && left) && !(top && topright && right) && !(left && bottomleft && bottom) && !(right && bottom && bottomright)) {
    grid[row][col] = true;
  }
}

function dab() {
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
  if (top) {
    random([row++, col++]);
  }
  if (left) {
    random([row--, col++, row++]);
  }
  if (bottom) {
    random([row--, col++]);
  }
  grid[row][col] = true;
  console.log("Row: ", row);
  console.log("Column: ", col);
}

row = 1;
col = 2;

function snake() {
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
  grid[row][col] = true;
  if (top) {
    if ((random(["Right", "Down"]) == "Down") && (row < numrows-1) && !(bottomleft)) {
      row++;
    }
    else {
      col++;
    }
  }
  if (left) {
    var direction = random(["Up", "Right", "Down"])
    if ((direction == "Up") && (row > 0) && !(topleft)) {
      row--;
    }
    else if ((direction == "Down") && (row < numrows-1) && !(bottomleft))  {
      row++;
    }
    else {
      col++;
    }
  }
  if (bottom) {
    if ((random(["Up", "Right"]) == "Up") && (row > 0) && !(topleft)) {
      row--;
    }
    else {
      col++;
    }
  }
  if (col > numcolumns) {
    throw new Error('Program end');
  }
}

function draw() {
  //static();
  //interesting();
  //dab();
  snake();
  //console.log(grid);
  grid.forEach(function (row, y) {
    row.forEach(function (cell, x) {
      if (cell) {
        fill(random(256), random(256), random(256));
      }
      else {
        fill(256, 256, 256);
        noStroke();
      }
      rect(x*rowHeight, y*columnWidth, rowHeight, columnWidth);
    })
  })
}
