var dataset = [
  {country: 0, percent: 48},
  {country: 1, percent: 42},
  {country: 2, percent: 38},
  {country: 3, percent: 33},
  {country: 4, percent: 26},
  {country: 5, percent: 17},
  {country: 6, percent: 11},
  {country: 7, percent: 10},
  {country: 8, percent: 5}
];

var height = 500;
var width = 500;
var margin = {left: 60, bottom: 60, right: 10, top: 10};

var percentScale     = d3.scaleLinear().domain([0,200]).range([height - margin.bottom, margin.top]);
var countryScale        = d3.scaleLinear().domain([0,60]).range([margin.left, width - margin.right]);


function percentToY (data) {
 return percentScale(data.percent);
};

function countryToX (data) {
  return countryScale(data.country);
};

var svg = d3.select('svg');
var axisBottom =d3.axisBottom(countryScale);
var axisLeft =d3.axisLeft(percentScale);

function biggen(datum,index) {
  var elem = d3.select(this);
  d3.select('.footnote').transition().style("opacity", "1");
  d3.select("#country").text(datum.country)
  d3.select("#percent").text(datum.percent)
  elem.classed("selected", true)
  elem.transition()
    .duration(250)
    .delay(0)
    .ease(d3.easeElastic)
    .attr("r", 20);

}

function smallen(datum,index) {
  var elem = d3.select(this);
  d3.select('.footnote').transition().duration(1000).style("opacity", "0");
  elem.classed("selected", false)
  elem.transition()
    .duration(1000)
    .delay(10)
    .attr("r", 10);

}


svg.selectAll('rect')
  .data(dataset)
  .enter()
  .append("rect")
  .attr('class', 'percent')
  .attr("cx", countryToX)
  .attr("cy", percentToY)
  .attr("fill", "hsl(0,40%,60%)")
  .attr("r", 10)
  .on("mouseover", biggen)
  .on("mouseout", smallen);

svg.append('g')
  .attr("transform", "translate(0," + (height - margin.bottom) + ")")
  .call(axisBottom);

svg.append('g')
  .attr("transform", "translate(" + margin.left + ",0)")
  .call(axisLeft);

// text label for the y axis
svg.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", margin.left/3)
  .attr("x", 0 - (height / 2))
  .style("text-anchor", "middle")
  .text("% of new U.S. mother who are ages 35 or older, by nativity and region of birth, 2011-2014");

// text label for the x axis
svg.append("text")
  .attr("y", height - margin.bottom/3)
  .attr("x", width / 2)
  .style("text-anchor", "middle")
