var grid;

function setup() {
  createCanvas(1000, 1000);
  grid = [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
  ];
}

function draw() {
  grid[Math.floor(random(5))][Math.floor(random(5))] = random([true, false]);
  //console.log("I am in the draw function");
  //console.log(grid);
  //grid[3][1] = true;
  grid.forEach(function (row, y) {
    row.forEach(function (cell, x) {
      if(cell) {
        fill(250, 250, 250);
      }
      else {
        fill(60, 60, 60);
      }
      rect(x*50, y*50, 50, 50);
    })
  })
  //var x1 = round(random(4))*50;
  //var y1 = round(random(4))*50;
  //rect(x1, y1, 50, 50);
}
