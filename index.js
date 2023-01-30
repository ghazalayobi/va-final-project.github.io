
  // set the dimensions and margins of the graph
  const margin = {top: 20, right: 30, bottom: 20, left: 0},
  width = window.innerWidth,
  height = 500 - margin.top - margin.bottom;
  
  // append the svg object to the body of the page
  const svg = d3.select("#home-description")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
        `translate(${margin.left},${margin.top})`);
  // get the data
  d3.csv("https://raw.githubusercontent.com/ghazalayobi/CS-visual-analytics/main/Final-Project/data/alcohol.csv").then( function(data) {


  // Add the path using this helper function


    svg.append('text')
    .attr('x', 0)
    .attr('y', 20)
    .style("font-size", "28px") 
    .style("text-decoration", "underline")
    .text('Personality Scores Analysis of Drug Users');

    svg.append('text')
    .attr('x', 0)
    .attr('y', 70)
    .style("font-size", "18px") 
    .text('Personality Scores Analysis of Drug Users');



});


