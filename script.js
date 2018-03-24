var grid;
var row = 0;
var cell = 0;
var numrows = 30;
var numcolumns = 60;
var rowHeight = 25;
var columnWidth = 25;

function setup() {
  createCanvas(1500, 1500);
  //randomSeed(Math.floor(random(4)));
  grid = [];
  for (var row = 0; row < numrows; row++) {
    grid[row] = [];
    for (var col = 0; col < numcolumns; col++) {
      grid[row][col] = false;
    }
  }
}

function draw() {
  if (row > 0) {
    if (grid[row-1][cell] && grid[row][cell-1]) {
      grid[row][cell] = random([true, true, true, false]);
    }
    else {
      grid[row][cell] = random([true, true, false, false]);
    }
  }
  else {
    if (grid[row][cell-1]) {
      grid[row][cell] = random([true, true, true, false]);
    }
    else {
      grid[row][cell] = random([true, true, false, false]);
    }
  }
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
  if (cell < (numcolumns-1))
    cell ++;
  else {
    cell = 0;
    row ++;
  }
}
