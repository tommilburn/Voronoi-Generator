var width = 1600;
var height = 500;
var bound = 5;

function Point(x, y) {
  this.x = typeof x !== 'undefined' ? x : Math.random() * width;
  this.y = typeof y !== 'undefined' ? y : Math.random() * width;
  this.x = Math.trunc(this.x);
  this.y = Math.trunc(this.y);
}


function generatePoints(n) {
  var points = [];
  var i;
  for (i = 0; i < n; i++) {
    points.push(new Point());
  }
  return points;
}

var points = generatePoints(10);
var boundingBox = {xl: bound, xr: width - bound, yt: bound, yb: height - bound};
var voronoi = new Voronoi();
var diagram = voronoi.compute(points, boundingBox);
console.log(diagram);