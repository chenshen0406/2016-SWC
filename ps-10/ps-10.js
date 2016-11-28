var dataset = {
  //x: [
    //"Other North America", "Europe", "Asia", "All foreign born", "Latin Africa",
    //"Ocenia", "U.S. born"
  //],
  y: [41, 37, 35, 34, 33, 30, 27, 21, 18]
};

var height =700;
var width = 700;
var margin = {
  left: 100,
  bottom: 50,
  right: 80,
  top: 50
};

// xscale
var xScale = d3.scaleBand()
  .domain([0,1,2,3,4,5,6,7,8])//dataset.map(function (d,i){
    //return d[i]
  //}
  .range([margin.left, width - margin.right]);
// yscale
var yScale = d3.scaleLinear()
  .domain([d3.max(dataset.y)+10,0])
  .range([margin.left, height - margin.top - margin.bottom]);
// x，y
var xAxis = d3.axisBottom()
  .scale(xScale);
var yAxis = d3.axisLeft()
  .scale(yScale);

var svg = d3.select('svg');

svg.append('g')
  .attr('class', 'axis')
  .attr('transform', 'translate(0,' + (height - margin.bottom - margin.top) + ')')
  .call(xAxis);

svg.append('g')
  .attr('class', 'axis')
  .attr('transform', 'translate(100,1)')
  .call(yAxis);

  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", margin.left/3)
    .attr("x", 0 - (height / 2))
    .style("text-anchor", "middle")
    .text("% of new U.S. mother who are ages 35 or older, by nativity and region of birth, 2011-2014");

var rectMargin = 10;

svg.selectAll('.bar')
  .data(dataset.y)
  .enter()
  .append('rect')
  .attr('class', 'bar')
  .attr('x', function(d, i) {console.log(d,xScale(i));
    return xScale(i);
  })
  .attr('y', function(d, i) {
    return yScale(d);
  })
  .attr('width', 20)
  .attr('height', function(d, i) {
    return height - margin.top - margin.bottom - yScale(d);
  })
  .attr("fill", "hsl(0,40%,60%)")
