var width = 1600;
var height = 500;
var bound = 0;

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



document.addEventListener("DOMContentLoaded", function(event) { 
  var points = generatePoints(10);
  var boundingBox = {xl: bound, xr: width - bound, yt: bound, yb: height - bound};
  var voronoi = new Voronoi();
  var diagram = voronoi.compute(points, boundingBox);
  // console.log(diagram);
  var svgNS = "http://www.w3.org/2000/svg";  
  var myPolygon = document.createElementNS(svgNS,"polygon"); //to create a circle. for rectangle use "rectangle"
  var p = "";
  for(var i = 0; i < diagram.cells[0].halfedges.length; i++){
    var e = diagram.cells[0].halfedges[i].edge;
    console.log(e.va, e.vb);
    p += e.va.x + "," + e.va.y + " ";

  }
  myPolygon.setAttributeNS(null, "points", p);

  document.getElementById("mySVG").appendChild(myPolygon);
});