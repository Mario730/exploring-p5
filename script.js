var grid;
var row = 0;
var cell = 0;

function setup() {
  createCanvas(1500, 1500);
  grid = [
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, false, false, true, true, true, false, false, true, true, true, false, true, true, true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, true],
    [true, false, true, false, true, false, true, false, true, true, false, true, false, true, true, true, true, true, true, true, false, true, false, true, true, true, true, true, true, true],
    [true, false, true, false, true, false, true, false, true, true, false, true, false, true, true, true, true, true, true, false, true, true, false, true, true, true, true, true, true, true],
    [true, false, true, true, false, true, true, false, true, false, true, true, true, false, true, true, true, true, true, false, true, true, false, true, true, true, true, true, true, true],
    [true, false, true, true, true, true, true, false, true, false, false, false, false, false, true, true, true, true, false, true, true, true, false, true, true, true, true, true, true, true],
    [true, false, true, true, true, true, true, false, true, false, true, true, true, false, true, true, true, true, false, true, true, true, false, false, false, false, false, true, true, true],
    [true, false, true, true, true, true, true, false, true, false, true, true, true, false, true, true, true, false, true, true, true, true, false, true, true, true, true, true, true, true],
    [true, false, true, true, true, true, true, false, true, false, true, true, true, false, true, true, false, true, true, true, true, true, false, true, true, true, true, true, true, true],
    [true, false, true, true, true, true, true, false, true, false, true, true, true, false, true, true, false, true, true, true, true, true, false, true, true, true, true, true, true, true],
    [true, false, true, true, true, true, true, false, true, false, true, true, true, false, true, false, true, true, true, true, true, true, false, true, true, true, true, true, true, true],
    [true, false, true, true, true, true, true, false, true, false, true, true, true, false, true, false, false, false, false, false, false, true, false, false, false, false, false, false, false, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true],
    [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
  ];
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
      rect(x*50, y*50, 50, 50);
    })
  })
  if (cell < 30)
    cell ++;
  else {
    cell = 0;
    row ++;
  }
}
