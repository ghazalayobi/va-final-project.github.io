

  // get the data
  d3.csv("https://raw.githubusercontent.com/ghazalayobi/CS-visual-analytics/main/Final-Project/data/data_hist.csv").then( function(data) {

    // set the dimensions and margins of the graph
    const margin = {top: 20, right: 30, bottom: 20, left: 0},
    width = window.innerWidth - 400,
    height = 700 - margin.top - margin.bottom;
    
    // append the svg object to the body of the page
    const svg = d3.select("#alcohol-description")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
          `translate(${margin.left},${margin.top})`);

  // Add the path using this helper function


    svg.append('text')
    .attr('x', 0)
    .attr('y', 20)
    .style("font-size", "20px") 
    .style("text-decoration", "underline")
    .text('Personality Scores Analysis of Alcohol Users');

    var text1 = "Analyzing personality scores of alcohol users. \n The section covers personality score distribution among gender, average scores by age and education, and a radar chart showing average scores \n of alcohol users and the period when they last use alcohol.";

svg.append("text")
  .attr("x", 0)
  .attr("y", 70)
  .style("font-size", "14px")
  .selectAll("tspan")
  .data(text1.split(/\n/g))
  .enter()
  .append("tspan")
  .attr("x", 0)
  .attr("dy", "1.2em")
  .text(function(d) { 
    return d.charAt(0).toLowerCase() + d.slice(1);
  });
    
  svg.append('text')
  .attr('x', 0)
  .attr('y', 150)
  .style("font-size", "20px") 
  .style("text-decoration", "underline")
  .text('Histograms');

  var text2 = "The histograms illustrate the distribution of personality scores among both male and female participants, \n with the added convenience of interactive buttons for a dynamic viewing experience.";
  svg.append("text")
  .attr("x", 0)
  .attr("y", 170)
  .style("font-size", "14px")
  .selectAll("tspan")
  .data(text2.split(/\n/g))
  .enter()
  .append("tspan")
  .attr("x", 0)
  .attr("dy", "1.2em")
  .text(function(d) { 
    return d.charAt(0).toLowerCase() + d.slice(1);
  });



  svg.append('text')
  .attr('x', 0)
  .attr('y', 240)
  .style("font-size", "20px") 
  .style("text-decoration", "underline")
  .text('Average scores by Age Groups');

  var text3 = "The Average Scores by Age Groups visualization showcases the average personality scores for both male and female participants across \n various age groups, providing a clear understanding of personality traits among different age demographics.";
  svg.append("text")
  .attr("x", 0)
  .attr("y", 270)
  .style("font-size", "14px")
  .selectAll("tspan")
  .data(text3.split(/\n/g))
  .enter()
  .append("tspan")
  .attr("x", 0)
  .attr("dy", "1.2em")
  .text(function(d) { 
    return d.charAt(0).toLowerCase() + d.slice(1);
  });


  svg.append('text')
  .attr('x', 0)
  .attr('y', 340)
  .style("font-size", "20px") 
  .style("text-decoration", "underline")
  .text('Average scores by Education levels');

  var text4 = "The Average Scores by Education levels visualization showcases the average personality scores for both male and female participants across \n various education levels";
  svg.append("text")
  .attr("x", 0)
  .attr("y", 380)
  .style("font-size", "14px")
  .selectAll("tspan")
  .data(text4.split(/\n/g))
  .enter()
  .append("tspan")
  .attr("x", 0)
  .attr("dy", "1.2em")
  .text(function(d) { 
    return d.charAt(0).toLowerCase() + d.slice(1);
  });


  svg.append('text')
  .attr('x', 0)
  .attr('y', 450)
  .style("font-size", "20px") 
  .style("text-decoration", "underline")
  .text('Radar Personality scores chart');


  var text5 = "The Radar chart analyzes the average personality scores for participants when they last consumed alcohol.  ";
  svg.append("text")
  .attr("x", 0)
  .attr("y", 490)
  .style("font-size", "14px")
  .selectAll("tspan")
  .data(text5.split(/\n/g))
  .enter()
  .append("tspan")
  .attr("x", 0)
  .attr("dy", "1.2em")
  .text(function(d) { 
    return d.charAt(0).toLowerCase() + d.slice(1);
  });

  svg.append('text')
  .attr('x', 0)
  .attr('y', 550)
  .style("font-size", "20px") 
  .style("text-decoration", "underline")
  .text('Filter Buttons');

  var text6 = "The filter buttons allow users to navigate across various personality scores";
  svg.append("text")
  .attr("x", 0)
  .attr("y", 580)
  .style("font-size", "14px")
  .selectAll("tspan")
  .data(text6.split(/\n/g))
  .enter()
  .append("tspan")
  .attr("x", 0)
  .attr("dy", "1.2em")
  .text(function(d) { 
    return d.charAt(0).toLowerCase() + d.slice(1);
  });

});






{


  
  // get the data
  d3.csv("https://raw.githubusercontent.com/ghazalayobi/CS-visual-analytics/main/Final-Project/data/data_hist.csv").then( function(data) {
  
  
  // set the dimensions and margins of the graph
  const margin = {top: 100, right: 30, bottom: 30, left: 40},
  width = 500 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;
  
  // append the svg object to the body of the page
  const svg = d3.select("#female-scores")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
        `translate(${margin.left},${margin.top})`);

  // X axis: scale and draw:
  const x = d3.scaleLinear()
    .domain([-4,4])     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
    .range([0, width]);
  svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x));
  
  
  
  // set the parameters for the histogram
  const histogram = d3.histogram()
    .value(function(d) { return +d.value; })   // I need to give the vector of value
    .domain(x.domain())  // then the domain of the graphic
    .thresholds(x.ticks(40)); // then the numbers of bins
  
  // And apply twice this function to data to get the bins.
  const bins1 = histogram(data.filter( function(d){
  return d.variable === "oscore" && d.gender === "F" && d.drug_type === "alcohol"
  }));
  const bins2 = histogram(data.filter( function(d){
  return d.variable === "cscore" && d.gender === "F" && d.drug_type === "alcohol"
  }));
  const bins3 = histogram(data.filter( function(d){
  return d.variable === "escore" && d.gender === "F" && d.drug_type === "alcohol"
  }));
  const bins4 = histogram(data.filter( function(d){
  return d.variable === "ascore" && d.gender === "F" && d.drug_type === "alcohol"
  }));
  const bins5 = histogram(data.filter( function(d){
  return d.variable === "nscore" && d.gender === "F" && d.drug_type === "alcohol"
  }));
  
  
  // Y axis: scale and draw:
  const y = d3.scaleLinear()
    .range([height, 0]);
    y.domain([0, d3.max(bins2, function(d) { return d.length; })]);   // d3.hist has to be called before the Y axis obviously
  svg.append("g")
    .call(d3.axisLeft(y));
  
  // append the bars for series 1
  var bar1 = svg.selectAll(".bar1")
  .data(bins1)
  .enter()
  .append('g')    
  .attr("class", "bar1")
  .attr("transform", function(d) { return `translate(${x(d.x0)} , ${y(d.length)})`});
  
  bar1.append("rect")
      .attr("x", 1)  
      .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
      .attr("height", function(d) { return height - y(d.length); })
      .style("fill", "#FDE725FF ")
      .style("opacity", 1)
      .on("mouseover", function(d) {
          d3.select(this)
            .style("fill", "grey");
          tooltip.html(`Bin range: ${d.x0.toFixed(2)} to ${d.x1.toFixed(2)} <br> Elements: ${d.length}`)
          .style('visibility', 'visible')
          .style('left', (d3.event.pageX) + 'px')
          .style('top', (d3.event.pageY - 28) + 'px');
      })
      .on("mouseout", function() {
          d3.select(this)
            .style("fill", "#FDE725FF ");
          tooltip.style('visibility', 'hidden');
      });
  
  
  
  // append the bars for series 2
  var bar2 = svg.selectAll(".bar2")
  .data(bins2)
  .enter()
  .append('g')
  .attr("class", "bar2")
  .attr("transform", function(d) { return `translate(${x(d.x0)} , ${y(d.length)})`});
  
  bar2.append("rect")
      .attr("x", 1)  
      .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
      .attr("height", function(d) { return height - y(d.length); })
      .style("fill", "#7AD151FF")
      .style("opacity", 1)
      .on("mouseover", function(d) {
          d3.select(this)
            .style("fill", "grey");
          tooltip.html(`Bin range: ${d.x0.toFixed(2)} to ${d.x1.toFixed(2)} <br> Elements: ${d.length}`)
          .style('visibility', 'visible')
          .style('left', (d3.event.pageX) + 'px')
          .style('top', (d3.event.pageY - 28) + 'px');
      })
      .on("mouseout", function() {
          d3.select(this)
            .style("fill", "#7AD151FF");
          tooltip.style('visibility', 'hidden');
      });
  
  
  
  // append the bars for series 3
  var bar3 = svg.selectAll(".bar3")
  .data(bins3)
  .enter()
  .append('g')    
  .attr("class", "bar3")
  .attr("transform", function(d) { return `translate(${x(d.x0)} , ${y(d.length)})`});
  
  bar3.append("rect")
      .attr("x", 1)  
      .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
      .attr("height", function(d) { return height - y(d.length); })
      .style("fill", "#2A788EFF ")
      .style("opacity", 1)
      .on("mouseover", function(d) {
          d3.select(this)
            .style("fill", "grey");
          tooltip.html(`Bin range: ${d.x0.toFixed(2)} to ${d.x1.toFixed(2)} <br> Elements: ${d.length}`)
          .style('visibility', 'visible')
          .style('left', (d3.event.pageX) + 'px')
          .style('top', (d3.event.pageY - 28) + 'px');
      })
      .on("mouseout", function() {
          d3.select(this)
            .style("fill", "#2A788EFF ");
          tooltip.style('visibility', 'hidden');
      });
  
  // append the bars for series 4
  var bar4 = svg.selectAll(".bar4")
  .data(bins4)
  .enter()
  .append('g')    
  .attr("class", "bar4")
  .attr("transform", function(d) { return `translate(${x(d.x0)} , ${y(d.length)})`});
  
  bar4.append("rect")
      .attr("x", 1)  
      .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
      .attr("height", function(d) { return height - y(d.length); })
      .style("fill", "#414487FF ")
      .style("opacity", 1)
      .on("mouseover", function(d) {
          d3.select(this)
            .style("fill", "grey");
          tooltip.html(`Bin range: ${d.x0.toFixed(2)} to ${d.x1.toFixed(2)} <br> Elements: ${d.length}`)
          .style('visibility', 'visible')
          .style('left', (d3.event.pageX) + 'px')
          .style('top', (d3.event.pageY - 28) + 'px');
      })
      .on("mouseout", function() {
          d3.select(this)
            .style("fill", "#414487FF ");
          tooltip.style('visibility', 'hidden');
      });
  
  // append the bars for series 5
  var bar5 = svg.selectAll(".bar5")
  .data(bins5)
  .enter()
  .append('g')    
  .attr("class", "bar5")
  .attr("transform", function(d) { return `translate(${x(d.x0)} , ${y(d.length)})`});
  
  bar5.append("rect")
      .attr("x", 1)  
      .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
      .attr("height", function(d) { return height - y(d.length); })
      .style("fill", "#440154FF ")
      .style("opacity", 1)
      .on("mouseover", function(d) {
          d3.select(this)
            .style("fill", "grey");
          tooltip.html(`Bin range: ${d.x0.toFixed(2)} to ${d.x1.toFixed(2)} <br> Elements: ${d.length}`)
          .style('visibility', 'visible')
          .style('left', (d3.event.pageX) + 'px')
          .style('top', (d3.event.pageY - 28) + 'px');
      })
      .on("mouseout", function() {
          d3.select(this)
            .style("fill", "#440154FF ");
          tooltip.style('visibility', 'hidden');
      });
  
  
  svg.append("text")
  .attr("x", (width / 2))             
  .attr("y", 0 - (margin.top / 2))
  .attr("text-anchor", "middle")  
  .style("font-size", "20px") 
  .style("text-decoration", "underline")  
  .text("Female Personality Score");

  // for adding line and description of line to the threshold zero 
  svg.append("line")
  .attr("x1", x(0))
  .attr("x2",  x(0))
  .attr("y1", y(0))
  .attr("y2", 0 - (margin.top / 5))
  .attr("stroke", "grey")
  .attr("stroke-dasharray", "4");
  
  svg
  .append("text")
  .attr("x", width/2)
  .attr("y", 0 - (margin.top / 4))
  .text("threshold: Zero")
  .style("font-size", "14px");
  
  
});
  
};
{
  
  // get the data
  d3.csv("https://raw.githubusercontent.com/ghazalayobi/CS-visual-analytics/main/Final-Project/data/data_hist.csv").then( function(data) {
// this codde is done for multiple hisograms 
  // set the dimensions and margins of the graph
  const margin = {top: 100, right: 30, bottom: 30, left: 40},
  width = 500 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;
  
  // append the svg object to the body of the page
  const svg = d3.select("#male-scores")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
        `translate(${margin.left},${margin.top})`);
      
  
  // X axis: scale and draw:
  const x = d3.scaleLinear()
    .domain([-4,4])     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
    .range([0, width]);
  svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x));
  
  
  
  // set the parameters for the histogram
  const histogram = d3.histogram()
    .value(function(d) { return +d.value; })   // I need to give the vector of value
    .domain(x.domain())  // then the domain of the graphic
    .thresholds(x.ticks(40)); // then the numbers of bins
  
  // And apply twice this function to data to get the bins.
  const bins1 = histogram(data.filter( function(d){
  return d.variable === "oscore" && d.gender === "M" && d.drug_type === "alcohol"
  }));
  const bins2 = histogram(data.filter( function(d){
  return d.variable === "cscore" && d.gender === "M" && d.drug_type === "alcohol"
  }));
  const bins3 = histogram(data.filter( function(d){
  return d.variable === "escore" && d.gender === "M" && d.drug_type === "alcohol"
  }));
  const bins4 = histogram(data.filter( function(d){
  return d.variable === "ascore" && d.gender === "M" && d.drug_type === "alcohol"
  }));
  const bins5 = histogram(data.filter( function(d){
  return d.variable === "nscore" && d.gender === "M" && d.drug_type === "alcohol"
  }));
  
  
  // Y axis: scale and draw:
  const y = d3.scaleLinear()
    .range([height, 0]);
    y.domain([0, d3.max(bins1, function(d) { return d.length; })]);   // d3.hist has to be called before the Y axis obviously
  svg.append("g")
    .call(d3.axisLeft(y));
  
  // append the bars for series 1
  var bar1 = svg.selectAll(".bar1")
  .data(bins1)
  .enter()
  .append('g')    
  .attr("class", "bar1")
  .attr("transform", function(d) { return `translate(${x(d.x0)} , ${y(d.length)})`});
  
  bar1.append("rect")
      .attr("x", 1)  
      .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
      .attr("height", function(d) { return height - y(d.length); })
      .style("fill", "#FDE725FF ")
      .style("opacity", 1)
      .on("mouseover", function(d) {
          d3.select(this)
            .style("fill", "grey");
          tooltip.html(`Bin range: ${d.x0.toFixed(2)} to ${d.x1.toFixed(2)} <br> Elements: ${d.length}`)
          .style('visibility', 'visible')
          .style('left', (d3.event.pageX) + 'px')
          .style('top', (d3.event.pageY - 28) + 'px');
      })
      .on("mouseout", function() {
          d3.select(this)
            .style("fill", "#FDE725FF ");
          tooltip.style('visibility', 'hidden');
      });
  
  
  
  // append the bars for series 2
  var bar2 = svg.selectAll(".bar2")
  .data(bins2)
  .enter()
  .append('g')
  .attr("class", "bar2")
  .attr("transform", function(d) { return `translate(${x(d.x0)} , ${y(d.length)})`});
  
  bar2.append("rect")
      .attr("x", 1)  
      .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
      .attr("height", function(d) { return height - y(d.length); })
      .style("fill", "#7AD151FF")
      .style("opacity", 1)
      .on("mouseover", function(d) {
          d3.select(this)
            .style("fill", "grey");
          tooltip.html(`Bin range: ${d.x0.toFixed(2)} to ${d.x1.toFixed(2)} <br> Elements: ${d.length}`)
          .style('visibility', 'visible')
          .style('left', (d3.event.pageX) + 'px')
          .style('top', (d3.event.pageY - 28) + 'px');
      })
      .on("mouseout", function() {
          d3.select(this)
            .style("fill", "#7AD151FF");
          tooltip.style('visibility', 'hidden');
      });
  
  
  
  // append the bars for series 3
  var bar3 = svg.selectAll(".bar3")
  .data(bins3)
  .enter()
  .append('g')    
  .attr("class", "bar3")
  .attr("transform", function(d) { return `translate(${x(d.x0)} , ${y(d.length)})`});
  
  bar3.append("rect")
      .attr("x", 1)  
      .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
      .attr("height", function(d) { return height - y(d.length); })
      .style("fill", "#2A788EFF ")
      .style("opacity", 1)
      .on("mouseover", function(d) {
          d3.select(this)
            .style("fill", "grey");
          tooltip.html(`Bin range: ${d.x0.toFixed(2)} to ${d.x1.toFixed(2)} <br> Elements: ${d.length}`)
          .style('visibility', 'visible')
          .style('left', (d3.event.pageX) + 'px')
          .style('top', (d3.event.pageY - 28) + 'px');
      })
      .on("mouseout", function() {
          d3.select(this)
            .style("fill", "#2A788EFF ");
          tooltip.style('visibility', 'hidden');
      });
  
  // append the bars for series 4
  var bar4 = svg.selectAll(".bar4")
  .data(bins4)
  .enter()
  .append('g')    
  .attr("class", "bar4")
  .attr("transform", function(d) { return `translate(${x(d.x0)} , ${y(d.length)})`});
  
  bar4.append("rect")
      .attr("x", 1)  
      .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
      .attr("height", function(d) { return height - y(d.length); })
      .style("fill", "#414487FF ")
      .style("opacity", 1)
      .on("mouseover", function(d) {
          d3.select(this)
            .style("fill", "grey");
          tooltip.html(`Bin range: ${d.x0.toFixed(2)} to ${d.x1.toFixed(2)} <br> Elements: ${d.length}`)
          .style('visibility', 'visible')
          .style('left', (d3.event.pageX) + 'px')
          .style('top', (d3.event.pageY - 28) + 'px');
      })
      .on("mouseout", function() {
          d3.select(this)
            .style("fill", "#414487FF ");
          tooltip.style('visibility', 'hidden');
      });
  
  // append the bars for series 5
  var bar5 = svg.selectAll(".bar5")
  .data(bins5)
  .enter()
  .append('g')    
  .attr("class", "bar5")
  .attr("transform", function(d) { return `translate(${x(d.x0)} , ${y(d.length)})`});
  
  bar5.append("rect")
      .attr("x", 1)  
      .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
      .attr("height", function(d) { return height - y(d.length); })
      .style("fill", "#440154FF ")
      .style("opacity", 1)
      .on("mouseover", function(d) {
          d3.select(this)
            .style("fill", "grey");
          tooltip.html(`Bin range: ${d.x0.toFixed(2)} to ${d.x1.toFixed(2)} <br> Elements: ${d.length}`)
          .style('visibility', 'visible')
          .style('left', (d3.event.pageX) + 'px')
          .style('top', (d3.event.pageY - 28) + 'px');
      })
      .on("mouseout", function() {
          d3.select(this)
            .style("fill", "#440154FF ");
          tooltip.style('visibility', 'hidden');
      });
  

  
  svg.append("text")
  .attr("x", (width / 2))             
  .attr("y", 0 - (margin.top / 2))
  .attr("text-anchor", "middle")  
  .style("font-size", "20px") 
  .style("text-decoration", "underline")  
  .text("Male Personality Score");
  
  
  // for adding line and description of line to the threshold zero 
  svg.append("line")
  .attr("x1", x(0))
  .attr("x2",  x(0))
  .attr("y1", y(0))
  .attr("y2", 0 - (margin.top / 5))
  .attr("stroke", "grey")
  .attr("stroke-dasharray", "4");
  
  svg
  .append("text")
  .attr("x", width/2)
  .attr("y", 0 - (margin.top / 4))
  .text("threshold: Zero")
  .style("font-size", "14px");
  
  
  
   });
}




// below code is for average o-score for age groups
d3.csv("https://raw.githubusercontent.com/ghazalayobi/CS-visual-analytics/main/Final-Project/data/data_bar_age.csv", d => {
  return {
    'drug_type':d.drug_type,
    'variable':d.variable,
    'gender':d.gender,
    'Age 18-24':+d.age18to24,
    'Age 25-34':+d.age25to34,
    'Age 35-44':+d.age35to44,
    'Age 45-54':+d.age45to54,
    'Age 55-64':+d.age55to64
    
  }
}
).then(data_o => {
  

  const data = data_o.filter(d => d.drug_type === 'alcohol').filter(d => d.variable === 'oscore');

  data.forEach(d => {
    delete d.drug_type;
  });

  data.forEach(d => {
    delete d.variable;
  });

  console.log(data)

    const series = d3.stack()
      .keys(['Age 18-24', 'Age 25-34', 'Age 35-44', 'Age 45-54', 'Age 55-64'])
      .offset(d3.stackOffsetDiverging)
      (data);


  const margin = {top: 100, right: 30, bottom: 40, left: 50},
      width = 450 - margin.left - margin.right,
      height = 700 - margin.top - margin.bottom;

  const svg = d3.selectAll("#agebar_o")
    .append('svg')
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)

  const x = d3.scaleBand()
      .domain(data.map(function(d) { return d.gender; }))
      .rangeRound([margin.left, width - margin.right])
      .padding(0.1);

  const y = d3.scaleLinear()
      .domain([d3.min(series, stackMin), d3.max(series, stackMax)])
      .rangeRound([height - margin.bottom, margin.top]);

  const z = d3.scaleOrdinal(d3.schemePuBuGn[5]);


  svg.selectAll("g")
    .data(series)
    .enter().append("g")
      .attr("fill", function(d) { return z(d.key); })
    .selectAll("rect")
    .data(function(d) { return d; })
    .enter().append("rect")
      .attr("width", x.bandwidth)
      .attr("x", function(d) { return x(d.data.gender); })
      .attr("y", function(d) { return y(d[1]); })
      .attr("height", function(d) { return y(d[0]) - y(d[1]); });

  // Add text elements to display values
  svg.selectAll("g")
    .data(series)
    .selectAll("text")
    .data(function(d) { return d; })
    .enter().append("text")
      .attr("x", function(d) { return x(d.data.gender) + x.bandwidth() / 2; })
      .attr("y", function(d) { return y(d[1]) + 24; })
      .text(function(d) { return (d[1] - d[0]).toFixed(2); })
      .attr("font-size", "12px")
      .attr('fill', 'grey')
      .attr("text-anchor", "middle");

  svg.append("g")
      .attr("transform", "translate(0," + y(0) + ")")
      .call(d3.axisBottom(x));

  svg.append("g")
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(d3.axisLeft(y));

  function stackMin(serie) {
    return d3.min(serie, function(d) { return d[0]; });
  }

  function stackMax(serie) {
    return d3.max(serie, function(d) { return d[1]; });
  }

  svg.append("text")
    .attr("x", width/2)
    .attr("y", margin.top/2)
    .attr("text-anchor", "middle")
    .text("Openness Score by Age Groups (Avg)")
    .style("font-size", "16px")
    .style("text-decoration", "underline") ;


    const legend = svg.append("g")
    .attr("transform", "translate(" + (width - margin.right + 20) + "," + margin.top + ")");
  
  legend.selectAll("rect")
    .data(series)
    .enter().append("rect")
      .attr("width", 18)
      .attr("height", 18)
      .attr("x", 0)
      .attr("y", function(d, i) { return i * 20; })
      .attr("fill", function(d) { return z(d.key); });
  
  legend.selectAll("text")
    .data(series)
    .enter().append("text")
      .attr("x", 20)
      .attr("y", function(d, i) { return i * 20 + 9; })
      .attr("dy", "0.35em")
      .style("font-size", "10px")
      .text(function(d) { return d.key; });
  

})


// the below code is for average c-score for age stacked bar chart


d3.csv("https://raw.githubusercontent.com/ghazalayobi/CS-visual-analytics/main/Final-Project/data/data_bar_age.csv", d => {
  return {
    'drug_type':d.drug_type,
    'variable':d.variable,
    'gender':d.gender,
    'Age 18-24':+d.age18to24,
    'Age 25-34':+d.age25to34,
    'Age 35-44':+d.age35to44,
    'Age 45-54':+d.age45to54,
    'Age 55-64':+d.age55to64
    
  }
}
).then(data_o => {
  

  const data = data_o.filter(d => d.drug_type === 'alcohol').filter(d => d.variable === 'cscore');

  data.forEach(d => {
    delete d.drug_type;
  });

  data.forEach(d => {
    delete d.variable;
  });

  console.log(data)

    const series = d3.stack()
      .keys(['Age 18-24', 'Age 25-34', 'Age 35-44', 'Age 45-54', 'Age 55-64'])
      .offset(d3.stackOffsetDiverging)
      (data);


  const margin = {top: 100, right: 30, bottom: 40, left: 50},
      width = 450 - margin.left - margin.right,
      height = 700 - margin.top - margin.bottom;

  const svg = d3.selectAll("#agebar_c")
    .append('svg')
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)

  const x = d3.scaleBand()
      .domain(data.map(function(d) { return d.gender; }))
      .rangeRound([margin.left, width - margin.right])
      .padding(0.1);

  const y = d3.scaleLinear()
      .domain([d3.min(series, stackMin), d3.max(series, stackMax)])
      .rangeRound([height - margin.bottom, margin.top]);

  const z = d3.scaleOrdinal(d3.schemePuBuGn[5]);


  svg.selectAll("g")
    .data(series)
    .enter().append("g")
      .attr("fill", function(d) { return z(d.key); })
    .selectAll("rect")
    .data(function(d) { return d; })
    .enter().append("rect")
      .attr("width", x.bandwidth)
      .attr("x", function(d) { return x(d.data.gender); })
      .attr("y", function(d) { return y(d[1]); })
      .attr("height", function(d) { return y(d[0]) - y(d[1]); });

  // Add text elements to display values
  svg.selectAll("g")
    .data(series)
    .selectAll("text")
    .data(function(d) { return d; })
    .enter().append("text")
      .attr("x", function(d) { return x(d.data.gender) + x.bandwidth() / 2; })
      .attr("y", function(d) { return y(d[1]) + 24; })
      .text(function(d) { return (d[1] - d[0]).toFixed(2); })
      .attr("font-size", "12px")
      .attr('fill', 'grey')
      .attr("text-anchor", "middle");

  svg.append("g")
      .attr("transform", "translate(0," + y(0) + ")")
      .call(d3.axisBottom(x));

  svg.append("g")
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(d3.axisLeft(y));

  function stackMin(serie) {
    return d3.min(serie, function(d) { return d[0]; });
  }

  function stackMax(serie) {
    return d3.max(serie, function(d) { return d[1]; });
  }

  svg.append("text")
    .attr("x", width/2)
    .attr("y", margin.top/2)
    .attr("text-anchor", "middle")
    .text("Conscientiousness Score by Age Groups (Avg)")
    .style("font-size", "16px")
    .style("text-decoration", "underline") ;


    const legend = svg.append("g")
    .attr("transform", "translate(" + (width - margin.right + 20) + "," + margin.top + ")");
  
  legend.selectAll("rect")
    .data(series)
    .enter().append("rect")
      .attr("width", 18)
      .attr("height", 18)
      .attr("x", 0)
      .attr("y", function(d, i) { return i * 20; })
      .attr("fill", function(d) { return z(d.key); });
  
  legend.selectAll("text")
    .data(series)
    .enter().append("text")
      .attr("x", 20)
      .attr("y", function(d, i) { return i * 20 + 9; })
      .attr("dy", "0.35em")
      .style("font-size", "10px")
      .text(function(d) { return d.key; });
  

})

// the below code is for average e-score for age stacked bar chart


d3.csv("https://raw.githubusercontent.com/ghazalayobi/CS-visual-analytics/main/Final-Project/data/data_bar_age.csv", d => {
  return {
    'drug_type':d.drug_type,
    'variable':d.variable,
    'gender':d.gender,
    'Age 18-24':+d.age18to24,
    'Age 25-34':+d.age25to34,
    'Age 35-44':+d.age35to44,
    'Age 45-54':+d.age45to54,
    'Age 55-64':+d.age55to64
    
  }
}
).then(data_o => {
  

  const data = data_o.filter(d => d.drug_type === 'alcohol').filter(d => d.variable === 'escore');

  data.forEach(d => {
    delete d.drug_type;
  });

  data.forEach(d => {
    delete d.variable;
  });

  console.log(data)

    const series = d3.stack()
      .keys(['Age 18-24', 'Age 25-34', 'Age 35-44', 'Age 45-54', 'Age 55-64'])
      .offset(d3.stackOffsetDiverging)
      (data);


  const margin = {top: 100, right: 30, bottom: 40, left: 50},
      width = 450 - margin.left - margin.right,
      height = 700 - margin.top - margin.bottom;

  const svg = d3.selectAll("#agebar_e")
    .append('svg')
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)

  const x = d3.scaleBand()
      .domain(data.map(function(d) { return d.gender; }))
      .rangeRound([margin.left, width - margin.right])
      .padding(0.1);

  const y = d3.scaleLinear()
      .domain([d3.min(series, stackMin), d3.max(series, stackMax)])
      .rangeRound([height - margin.bottom, margin.top]);

  const z = d3.scaleOrdinal(d3.schemePuBuGn[5]);


  svg.selectAll("g")
    .data(series)
    .enter().append("g")
      .attr("fill", function(d) { return z(d.key); })
    .selectAll("rect")
    .data(function(d) { return d; })
    .enter().append("rect")
      .attr("width", x.bandwidth)
      .attr("x", function(d) { return x(d.data.gender); })
      .attr("y", function(d) { return y(d[1]); })
      .attr("height", function(d) { return y(d[0]) - y(d[1]); });

  // Add text elements to display values
  svg.selectAll("g")
    .data(series)
    .selectAll("text")
    .data(function(d) { return d; })
    .enter().append("text")
      .attr("x", function(d) { return x(d.data.gender) + x.bandwidth() / 2; })
      .attr("y", function(d) { return y(d[1]) + 24; })
      .text(function(d) { return (d[1] - d[0]).toFixed(2); })
      .attr("font-size", "12px")
      .attr('fill', 'grey')
      .attr("text-anchor", "middle");

  svg.append("g")
      .attr("transform", "translate(0," + y(0) + ")")
      .call(d3.axisBottom(x));

  svg.append("g")
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(d3.axisLeft(y));

  function stackMin(serie) {
    return d3.min(serie, function(d) { return d[0]; });
  }

  function stackMax(serie) {
    return d3.max(serie, function(d) { return d[1]; });
  }

  svg.append("text")
    .attr("x", width/2)
    .attr("y", margin.top/2)
    .attr("text-anchor", "middle")
    .text("Extraversion Score by Age Groups (Avg)")
    .style("font-size", "16px")
    .style("text-decoration", "underline") ;


    const legend = svg.append("g")
    .attr("transform", "translate(" + (width - margin.right + 20) + "," + margin.top + ")");
  
  legend.selectAll("rect")
    .data(series)
    .enter().append("rect")
      .attr("width", 18)
      .attr("height", 18)
      .attr("x", 0)
      .attr("y", function(d, i) { return i * 20; })
      .attr("fill", function(d) { return z(d.key); });
  
  legend.selectAll("text")
    .data(series)
    .enter().append("text")
      .attr("x", 20)
      .attr("y", function(d, i) { return i * 20 + 9; })
      .attr("dy", "0.35em")
      .style("font-size", "10px")
      .text(function(d) { return d.key; });
  

})




// the below code is for average for average ascore for age stacked bar chart

d3.csv("https://raw.githubusercontent.com/ghazalayobi/CS-visual-analytics/main/Final-Project/data/data_bar_age.csv", d => {
  return {
    'drug_type':d.drug_type,
    'variable':d.variable,
    'gender':d.gender,
    'Age 18-24':+d.age18to24,
    'Age 25-34':+d.age25to34,
    'Age 35-44':+d.age35to44,
    'Age 45-54':+d.age45to54,
    'Age 55-64':+d.age55to64
    
  }
}
).then(data_o => {
  

  const data = data_o.filter(d => d.drug_type === 'alcohol').filter(d => d.variable === 'ascore');

  data.forEach(d => {
    delete d.drug_type;
  });

  data.forEach(d => {
    delete d.variable;
  });

  console.log(data)

    const series = d3.stack()
      .keys(['Age 18-24', 'Age 25-34', 'Age 35-44', 'Age 45-54', 'Age 55-64'])
      .offset(d3.stackOffsetDiverging)
      (data);


  const margin = {top: 100, right: 30, bottom: 40, left: 50},
      width = 450 - margin.left - margin.right,
      height = 700 - margin.top - margin.bottom;

  const svg = d3.selectAll("#agebar_a")
    .append('svg')
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)

  const x = d3.scaleBand()
      .domain(data.map(function(d) { return d.gender; }))
      .rangeRound([margin.left, width - margin.right])
      .padding(0.1);

  const y = d3.scaleLinear()
      .domain([d3.min(series, stackMin), d3.max(series, stackMax)])
      .rangeRound([height - margin.bottom, margin.top]);

  const z = d3.scaleOrdinal(d3.schemePuBuGn[5]);


  svg.selectAll("g")
    .data(series)
    .enter().append("g")
      .attr("fill", function(d) { return z(d.key); })
    .selectAll("rect")
    .data(function(d) { return d; })
    .enter().append("rect")
      .attr("width", x.bandwidth)
      .attr("x", function(d) { return x(d.data.gender); })
      .attr("y", function(d) { return y(d[1]); })
      .attr("height", function(d) { return y(d[0]) - y(d[1]); });

  // Add text elements to display values
  svg.selectAll("g")
    .data(series)
    .selectAll("text")
    .data(function(d) { return d; })
    .enter().append("text")
      .attr("x", function(d) { return x(d.data.gender) + x.bandwidth() / 2; })
      .attr("y", function(d) { return y(d[1]) + 24; })
      .text(function(d) { return (d[1] - d[0]).toFixed(2); })
      .attr("font-size", "12px")
      .attr('fill', 'grey')
      .attr("text-anchor", "middle");

  svg.append("g")
      .attr("transform", "translate(0," + y(0) + ")")
      .call(d3.axisBottom(x));

  svg.append("g")
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(d3.axisLeft(y));

  function stackMin(serie) {
    return d3.min(serie, function(d) { return d[0]; });
  }

  function stackMax(serie) {
    return d3.max(serie, function(d) { return d[1]; });
  }

  svg.append("text")
    .attr("x", width/2)
    .attr("y", margin.top/2)
    .attr("text-anchor", "middle")
    .text("Agreeableness Score by Age Groups (Avg) ")
    .style("font-size", "16px")
    .style("text-decoration", "underline") ;


    const legend = svg.append("g")
    .attr("transform", "translate(" + (width - margin.right + 20) + "," + margin.top + ")");
  
  legend.selectAll("rect")
    .data(series)
    .enter().append("rect")
      .attr("width", 18)
      .attr("height", 18)
      .attr("x", 0)
      .attr("y", function(d, i) { return i * 20; })
      .attr("fill", function(d) { return z(d.key); });
  
  legend.selectAll("text")
    .data(series)
    .enter().append("text")
      .attr("x", 20)
      .attr("y", function(d, i) { return i * 20 + 9; })
      .attr("dy", "0.35em")
      .style("font-size", "10px")
      .text(function(d) { return d.key; });
  

})

// the below code is for average for average nscore for age stacked bar chart

d3.csv("https://raw.githubusercontent.com/ghazalayobi/CS-visual-analytics/main/Final-Project/data/data_bar_age.csv", d => {
  return {
    'drug_type':d.drug_type,
    'variable':d.variable,
    'gender':d.gender,
    'Age 18-24':+d.age18to24,
    'Age 25-34':+d.age25to34,
    'Age 35-44':+d.age35to44,
    'Age 45-54':+d.age45to54,
    'Age 55-64':+d.age55to64
    
  }
}
).then(data_o => {
 

  const data = data_o.filter(d => d.drug_type === 'alcohol').filter(d => d.variable === 'nscore');

  data.forEach(d => {
    delete d.drug_type;
  });

  data.forEach(d => {
    delete d.variable;
  });

  console.log(data)

    const series = d3.stack()
      .keys(['Age 18-24', 'Age 25-34', 'Age 35-44', 'Age 45-54', 'Age 55-64'])
      .offset(d3.stackOffsetDiverging)
      (data);


  const margin = {top: 100, right: 30, bottom: 40, left: 50},
      width = 450 - margin.left - margin.right,
      height = 750 - margin.top - margin.bottom;

  const svg = d3.selectAll("#agebar_n")
    .append('svg')
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)

  const x = d3.scaleBand()
      .domain(data.map(function(d) { return d.gender; }))
      .rangeRound([margin.left, width - margin.right])
      .padding(0.1);

  const y = d3.scaleLinear()
      .domain([d3.min(series, stackMin), d3.max(series, stackMax)])
      .rangeRound([height - margin.bottom, margin.top]);

  const z = d3.scaleOrdinal(d3.schemePuBuGn[5]);


  svg.selectAll("g")
    .data(series)
    .enter().append("g")
      .attr("fill", function(d) { return z(d.key); })
    .selectAll("rect")
    .data(function(d) { return d; })
    .enter().append("rect")
      .attr("width", x.bandwidth)
      .attr("x", function(d) { return x(d.data.gender); })
      .attr("y", function(d) { return y(d[1]); })
      .attr("height", function(d) { return y(d[0]) - y(d[1]); });

  // Add text elements to display values
  svg.selectAll("g")
    .data(series)
    .selectAll("text")
    .data(function(d) { return d; })
    .enter().append("text")
      .attr("x", function(d) { return x(d.data.gender) + x.bandwidth() / 2; })
      .attr("y", function(d) { return y(d[1]) + 24; })
      .text(function(d) { return (d[1] - d[0]).toFixed(2); })
      .attr("font-size", "12px")
      .attr('fill', 'grey')
      .attr("text-anchor", "middle");

  svg.append("g")
      .attr("transform", "translate(0," + y(0) + ")")
      .call(d3.axisBottom(x));

  svg.append("g")
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(d3.axisLeft(y));

  function stackMin(serie) {
    return d3.min(serie, function(d) { return d[0]; });
  }

  function stackMax(serie) {
    return d3.max(serie, function(d) { return d[1]; });
  }

  svg.append("text")
    .attr("x", width/2)
    .attr("y", margin.top/2)
    .attr("text-anchor", "middle")
    .text("Neuroticism Score by Age Groups (Avg)")
    .style("font-size", "16px")
    .style("text-decoration", "underline") ;


    const legend = svg.append("g")
    .attr("transform", "translate(" + (width - margin.right + 20) + "," + margin.top + ")");
  
  legend.selectAll("rect")
    .data(series)
    .enter().append("rect")
      .attr("width", 18)
      .attr("height", 18)
      .attr("x", 0)
      .attr("y", function(d, i) { return i * 20; })
      .attr("fill", function(d) { return z(d.key); });
  
  legend.selectAll("text")
    .data(series)
    .enter().append("text")
      .attr("x", 20)
      .attr("y", function(d, i) { return i * 20 + 9; })
      .attr("dy", "0.35em")
      .style("font-size", "10px")
      .text(function(d) { return d.key; });
  

})






// here is the new section for the education stacked bar chart
///////////////////////////////////////////////////////////////
//////////////////////Education Levels////////////////////////
/////////////////////////////////////////////////////////////


// the below code is for average opennes score acorss different education levels

d3.csv("https://raw.githubusercontent.com/ghazalayobi/CS-visual-analytics/main/Final-Project/data/data_bar_edu.csv", d => {
  return {
    'drug_type':d.drug_type,
    'variable':d.variable,
    'gender':d.gender,
    'Doctorate Degree': +d.Doctorate_degree,
    'Left school at 16': +d.Left_school_16,
    'Left school at 17': +d.Left_school_17,
    'Left school at 18': +d.Left_school_18,
    'Left school before 16': +d.Left_school_before_16,
    'Masters Degree': +d.Masters_degree,
    'Professional certificate': +d.Professional_certificate,
    'No certificate/degree' : +d.no_certificate_degree,
    'University Degree': +d.University_degree
    
  }
}
).then(data_o => {
 
  const data = data_o.filter(d => d.drug_type === 'alcohol').filter(d => d.variable === 'oscore');

  data.forEach(d => {
    delete d.drug_type;
  });

  data.forEach(d => {
    delete d.variable;
  });

  console.log(data)

    const series = d3.stack()
      .keys(['Doctorate Degree', 'Masters Degree', 'University Degree', 'Professional certificate', 'No certificate/degree',
      'Left school at 18' ,'Left school at 17' ,'Left school at 16', 'Left school before 16' ])

      .offset(d3.stackOffsetDiverging)
      (data);


  const margin = {top: 100, right: 30, bottom: 40, left: 50},
      width = 450 - margin.left - margin.right,
      height = 750 - margin.top - margin.bottom;

  const svg = d3.selectAll("#edubar_o")
    .append('svg')
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)

  const x = d3.scaleBand()
      .domain(data.map(function(d) { return d.gender; }))
      .rangeRound([margin.left, width - margin.right])
      .padding(0.1);

  const y = d3.scaleLinear()
      .domain([d3.min(series, stackMin), d3.max(series, stackMax)])
      .rangeRound([height - margin.bottom, margin.top]);

  const z = d3.scaleOrdinal(d3.schemeYlGnBu[9]);


  svg.selectAll("g")
    .data(series)
    .enter().append("g")
      .attr("fill", function(d) { return z(d.key); })
    .selectAll("rect")
    .data(function(d) { return d; })
    .enter().append("rect")
      .attr("width", x.bandwidth)
      .attr("x", function(d) { return x(d.data.gender); })
      .attr("y", function(d) { return y(d[1]); })
      .attr("height", function(d) { return y(d[0]) - y(d[1]); });

  // Add text elements to display values
  svg.selectAll("g")
    .data(series)
    .selectAll("text")
    .data(function(d) { return d; })
    .enter().append("text")
      .attr("x", function(d) { return x(d.data.gender) + x.bandwidth() / 2; })
      .attr("y", function(d) { return y(d[1]) + 15; })
      .text(function(d) { return (d[1] - d[0]).toFixed(2); })
      .attr("font-size", "12px")
      .attr('fill', 'grey')
      .attr("text-anchor", "middle");

  svg.append("g")
      .attr("transform", "translate(0," + y(0) + ")")
      .call(d3.axisBottom(x));

  svg.append("g")
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(d3.axisLeft(y));

  function stackMin(serie) {
    return d3.min(serie, function(d) { return d[0]; });
  }

  function stackMax(serie) {
    return d3.max(serie, function(d) { return d[1]; });
  }

  svg.append("text")
    .attr("x", width/2)
    .attr("y", margin.top/2)
    .attr("text-anchor", "middle")
    .text("Openness Score by Education Level (Avg)")
    .style("font-size", "16px")
    .style("text-decoration", "underline") ;


    const legend = svg.append("g")
    .attr("transform", "translate(" + (width - margin.right + 0) + "," + margin.top + ")");
  
  legend.selectAll("rect")
    .data(series)
    .enter().append("rect")
      .attr("width", 18)
      .attr("height", 18)
      .attr("x", 0)
      .attr("y", function(d, i) { return i * 20; })
      .attr("fill", function(d) { return z(d.key); });
  
  legend.selectAll("text")
    .data(series)
    .enter().append("text")
      .attr("x", 20)
      .attr("y", function(d, i) { return i * 20 + 9; })
      .attr("dy", "0.35em")
      .style("font-size", "10px")
      .text(function(d) { return d.key; });
  

})

// the below code is for average c score acorss different education levels

d3.csv("https://raw.githubusercontent.com/ghazalayobi/CS-visual-analytics/main/Final-Project/data/data_bar_edu.csv", d => {
  return {
    'drug_type':d.drug_type,
    'variable':d.variable,
    'gender':d.gender,
    'Doctorate Degree': +d.Doctorate_degree,
    'Left school at 16': +d.Left_school_16,
    'Left school at 17': +d.Left_school_17,
    'Left school at 18': +d.Left_school_18,
    'Left school before 16': +d.Left_school_before_16,
    'Masters Degree': +d.Masters_degree,
    'Professional certificate': +d.Professional_certificate,
    'No certificate/degree' : +d.no_certificate_degree,
    'University Degree': +d.University_degree
    
  }
}
).then(data_o => {
 
  const data = data_o.filter(d => d.drug_type === 'alcohol').filter(d => d.variable === 'cscore');

  data.forEach(d => {
    delete d.drug_type;
  });

  data.forEach(d => {
    delete d.variable;
  });

  console.log(data)

    const series = d3.stack()
      .keys(['Doctorate Degree', 'Masters Degree', 'University Degree', 'Professional certificate', 'No certificate/degree',
      'Left school at 18' ,'Left school at 17' ,'Left school at 16', 'Left school before 16' ])

      .offset(d3.stackOffsetDiverging)
      (data);


  const margin = {top: 100, right: 30, bottom: 40, left: 50},
      width = 450 - margin.left - margin.right,
      height = 750 - margin.top - margin.bottom;

  const svg = d3.selectAll("#edubar_c")
    .append('svg')
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)

  const x = d3.scaleBand()
      .domain(data.map(function(d) { return d.gender; }))
      .rangeRound([margin.left, width - margin.right])
      .padding(0.1);

  const y = d3.scaleLinear()
      .domain([d3.min(series, stackMin), d3.max(series, stackMax)])
      .rangeRound([height - margin.bottom, margin.top]);

  const z = d3.scaleOrdinal(d3.schemeYlGnBu[9]);


  svg.selectAll("g")
    .data(series)
    .enter().append("g")
      .attr("fill", function(d) { return z(d.key); })
    .selectAll("rect")
    .data(function(d) { return d; })
    .enter().append("rect")
      .attr("width", x.bandwidth)
      .attr("x", function(d) { return x(d.data.gender); })
      .attr("y", function(d) { return y(d[1]); })
      .attr("height", function(d) { return y(d[0]) - y(d[1]); });

  // Add text elements to display values
  svg.selectAll("g")
    .data(series)
    .selectAll("text")
    .data(function(d) { return d; })
    .enter().append("text")
      .attr("x", function(d) { return x(d.data.gender) + x.bandwidth() / 2; })
      .attr("y", function(d) { return y(d[1]) + 15; })
      .text(function(d) { return (d[1] - d[0]).toFixed(2); })
      .attr("font-size", "12px")
      .attr('fill', 'grey')
      .attr("text-anchor", "middle");

  svg.append("g")
      .attr("transform", "translate(0," + y(0) + ")")
      .call(d3.axisBottom(x));

  svg.append("g")
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(d3.axisLeft(y));

  function stackMin(serie) {
    return d3.min(serie, function(d) { return d[0]; });
  }

  function stackMax(serie) {
    return d3.max(serie, function(d) { return d[1]; });
  }


  // Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism
  svg.append("text")
    .attr("x", width/2)
    .attr("y", margin.top/2)
    .attr("text-anchor", "middle")
    .text("Conscientiousness Score by Education Level (Avg)")
    .style("font-size", "16px")
    .style("text-decoration", "underline") ;


    const legend = svg.append("g")
    .attr("transform", "translate(" + (width - margin.right + 0) + "," + margin.top + ")");
  
  legend.selectAll("rect")
    .data(series)
    .enter().append("rect")
      .attr("width", 18)
      .attr("height", 18)
      .attr("x", 0)
      .attr("y", function(d, i) { return i * 20; })
      .attr("fill", function(d) { return z(d.key); });
  
  legend.selectAll("text")
    .data(series)
    .enter().append("text")
      .attr("x", 20)
      .attr("y", function(d, i) { return i * 20 + 9; })
      .attr("dy", "0.35em")
      .style("font-size", "10px")
      .text(function(d) { return d.key; });
  

})

// the below code is for average e score acorss different education levels

d3.csv("https://raw.githubusercontent.com/ghazalayobi/CS-visual-analytics/main/Final-Project/data/data_bar_edu.csv", d => {
  return {
    'drug_type':d.drug_type,
    'variable':d.variable,
    'gender':d.gender,
    'Doctorate Degree': +d.Doctorate_degree,
    'Left school at 16': +d.Left_school_16,
    'Left school at 17': +d.Left_school_17,
    'Left school at 18': +d.Left_school_18,
    'Left school before 16': +d.Left_school_before_16,
    'Masters Degree': +d.Masters_degree,
    'Professional certificate': +d.Professional_certificate,
    'No certificate/degree' : +d.no_certificate_degree,
    'University Degree': +d.University_degree
    
  }
}
).then(data_o => {
 
  const data = data_o.filter(d => d.drug_type === 'alcohol').filter(d => d.variable === 'escore');

  data.forEach(d => {
    delete d.drug_type;
  });

  data.forEach(d => {
    delete d.variable;
  });

  console.log(data)

    const series = d3.stack()
      .keys(['Doctorate Degree', 'Masters Degree', 'University Degree', 'Professional certificate', 'No certificate/degree',
      'Left school at 18' ,'Left school at 17' ,'Left school at 16', 'Left school before 16' ])

      .offset(d3.stackOffsetDiverging)
      (data);


  const margin = {top: 100, right: 30, bottom: 40, left: 50},
      width = 450 - margin.left - margin.right,
      height = 750 - margin.top - margin.bottom;

  const svg = d3.selectAll("#edubar_e")
    .append('svg')
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)

  const x = d3.scaleBand()
      .domain(data.map(function(d) { return d.gender; }))
      .rangeRound([margin.left, width - margin.right])
      .padding(0.1);

  const y = d3.scaleLinear()
      .domain([d3.min(series, stackMin), d3.max(series, stackMax)])
      .rangeRound([height - margin.bottom, margin.top]);

  const z = d3.scaleOrdinal(d3.schemeYlGnBu[9]);


  svg.selectAll("g")
    .data(series)
    .enter().append("g")
      .attr("fill", function(d) { return z(d.key); })
    .selectAll("rect")
    .data(function(d) { return d; })
    .enter().append("rect")
      .attr("width", x.bandwidth)
      .attr("x", function(d) { return x(d.data.gender); })
      .attr("y", function(d) { return y(d[1]); })
      .attr("height", function(d) { return y(d[0]) - y(d[1]); });

  // Add text elements to display values
  svg.selectAll("g")
    .data(series)
    .selectAll("text")
    .data(function(d) { return d; })
    .enter().append("text")
      .attr("x", function(d) { return x(d.data.gender) + x.bandwidth() / 2; })
      .attr("y", function(d) { return y(d[1]) + 15; })
      .text(function(d) { return (d[1] - d[0]).toFixed(2); })
      .attr("font-size", "12px")
      .attr('fill', 'grey')
      .attr("text-anchor", "middle");

  svg.append("g")
      .attr("transform", "translate(0," + y(0) + ")")
      .call(d3.axisBottom(x));

  svg.append("g")
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(d3.axisLeft(y));

  function stackMin(serie) {
    return d3.min(serie, function(d) { return d[0]; });
  }

  function stackMax(serie) {
    return d3.max(serie, function(d) { return d[1]; });
  }


  // Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism
  svg.append("text")
    .attr("x", width/2)
    .attr("y", margin.top/2)
    .attr("text-anchor", "middle")
    .text("Extraversion Score by Education Level (Avg)")
    .style("font-size", "16px")
    .style("text-decoration", "underline") ;


    const legend = svg.append("g")
    .attr("transform", "translate(" + (width - margin.right + 0) + "," + margin.top + ")");
  
  legend.selectAll("rect")
    .data(series)
    .enter().append("rect")
      .attr("width", 18)
      .attr("height", 18)
      .attr("x", 0)
      .attr("y", function(d, i) { return i * 20; })
      .attr("fill", function(d) { return z(d.key); });
  
  legend.selectAll("text")
    .data(series)
    .enter().append("text")
      .attr("x", 20)
      .attr("y", function(d, i) { return i * 20 + 9; })
      .attr("dy", "0.35em")
      .style("font-size", "10px")
      .text(function(d) { return d.key; });
  

})



// the below code is for average a score acorss different education levels

d3.csv("https://raw.githubusercontent.com/ghazalayobi/CS-visual-analytics/main/Final-Project/data/data_bar_edu.csv", d => {
  return {
    'drug_type':d.drug_type,
    'variable':d.variable,
    'gender':d.gender,
    'Doctorate Degree': +d.Doctorate_degree,
    'Left school at 16': +d.Left_school_16,
    'Left school at 17': +d.Left_school_17,
    'Left school at 18': +d.Left_school_18,
    'Left school before 16': +d.Left_school_before_16,
    'Masters Degree': +d.Masters_degree,
    'Professional certificate': +d.Professional_certificate,
    'No certificate/degree' : +d.no_certificate_degree,
    'University Degree': +d.University_degree
    
  }
}
).then(data_o => {
 
  const data = data_o.filter(d => d.drug_type === 'alcohol').filter(d => d.variable === 'ascore');

  data.forEach(d => {
    delete d.drug_type;
  });

  data.forEach(d => {
    delete d.variable;
  });

  console.log(data)

    const series = d3.stack()
      .keys(['Doctorate Degree', 'Masters Degree', 'University Degree', 'Professional certificate', 'No certificate/degree',
      'Left school at 18' ,'Left school at 17' ,'Left school at 16', 'Left school before 16' ])

      .offset(d3.stackOffsetDiverging)
      (data);


  const margin = {top: 100, right: 30, bottom: 40, left: 50},
      width = 450 - margin.left - margin.right,
      height = 750 - margin.top - margin.bottom;

  const svg = d3.selectAll("#edubar_a")
    .append('svg')
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)

  const x = d3.scaleBand()
      .domain(data.map(function(d) { return d.gender; }))
      .rangeRound([margin.left, width - margin.right])
      .padding(0.1);

  const y = d3.scaleLinear()
      .domain([d3.min(series, stackMin), d3.max(series, stackMax)])
      .rangeRound([height - margin.bottom, margin.top]);

  const z = d3.scaleOrdinal(d3.schemeYlGnBu[9]);


  svg.selectAll("g")
    .data(series)
    .enter().append("g")
      .attr("fill", function(d) { return z(d.key); })
    .selectAll("rect")
    .data(function(d) { return d; })
    .enter().append("rect")
      .attr("width", x.bandwidth)
      .attr("x", function(d) { return x(d.data.gender); })
      .attr("y", function(d) { return y(d[1]); })
      .attr("height", function(d) { return y(d[0]) - y(d[1]); });

  // Add text elements to display values
  svg.selectAll("g")
    .data(series)
    .selectAll("text")
    .data(function(d) { return d; })
    .enter().append("text")
      .attr("x", function(d) { return x(d.data.gender) + x.bandwidth() / 2; })
      .attr("y", function(d) { return y(d[1]) + 15; })
      .text(function(d) { return (d[1] - d[0]).toFixed(2); })
      .attr("font-size", "12px")
      .attr('fill', 'grey')
      .attr("text-anchor", "middle");

  svg.append("g")
      .attr("transform", "translate(0," + y(0) + ")")
      .call(d3.axisBottom(x));

  svg.append("g")
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(d3.axisLeft(y));

  function stackMin(serie) {
    return d3.min(serie, function(d) { return d[0]; });
  }

  function stackMax(serie) {
    return d3.max(serie, function(d) { return d[1]; });
  }


  // Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism
  svg.append("text")
    .attr("x", width/2)
    .attr("y", margin.top/2)
    .attr("text-anchor", "middle")
    .text("Agreeableness Score by Education Level (Avg)")
    .style("font-size", "16px")
    .style("text-decoration", "underline") ;


    const legend = svg.append("g")
    .attr("transform", "translate(" + (width - margin.right + 0) + "," + margin.top + ")");
  
  legend.selectAll("rect")
    .data(series)
    .enter().append("rect")
      .attr("width", 18)
      .attr("height", 18)
      .attr("x", 0)
      .attr("y", function(d, i) { return i * 20; })
      .attr("fill", function(d) { return z(d.key); });
  
  legend.selectAll("text")
    .data(series)
    .enter().append("text")
      .attr("x", 20)
      .attr("y", function(d, i) { return i * 20 + 9; })
      .attr("dy", "0.35em")
      .style("font-size", "10px")
      .text(function(d) { return d.key; });
  

})



// the below code is for average n score acorss different education levels

d3.csv("https://raw.githubusercontent.com/ghazalayobi/CS-visual-analytics/main/Final-Project/data/data_bar_edu.csv", d => {
  return {
    'drug_type':d.drug_type,
    'variable':d.variable,
    'gender':d.gender,
    'Doctorate Degree': +d.Doctorate_degree,
    'Left school at 16': +d.Left_school_16,
    'Left school at 17': +d.Left_school_17,
    'Left school at 18': +d.Left_school_18,
    'Left school before 16': +d.Left_school_before_16,
    'Masters Degree': +d.Masters_degree,
    'Professional certificate': +d.Professional_certificate,
    'No certificate/degree' : +d.no_certificate_degree,
    'University Degree': +d.University_degree
    
  }
}
).then(data_o => {
 
  const data = data_o.filter(d => d.drug_type === 'alcohol').filter(d => d.variable === 'nscore');

  data.forEach(d => {
    delete d.drug_type;
  });

  data.forEach(d => {
    delete d.variable;
  });

  console.log(data)

    const series = d3.stack()
      .keys(['Doctorate Degree', 'Masters Degree', 'University Degree', 'Professional certificate', 'No certificate/degree',
      'Left school at 18' ,'Left school at 17' ,'Left school at 16', 'Left school before 16' ])

      .offset(d3.stackOffsetDiverging)
      (data);


  const margin = {top: 100, right: 30, bottom: 40, left: 50},
      width = 450 - margin.left - margin.right,
      height = 750 - margin.top - margin.bottom;

  const svg = d3.selectAll("#edubar_n")
    .append('svg')
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)

  const x = d3.scaleBand()
      .domain(data.map(function(d) { return d.gender; }))
      .rangeRound([margin.left, width - margin.right])
      .padding(0.1);

  const y = d3.scaleLinear()
      .domain([d3.min(series, stackMin), d3.max(series, stackMax)])
      .rangeRound([height - margin.bottom, margin.top]);

  const z = d3.scaleOrdinal(d3.schemeYlGnBu[9]);


  svg.selectAll("g")
    .data(series)
    .enter().append("g")
      .attr("fill", function(d) { return z(d.key); })
    .selectAll("rect")
    .data(function(d) { return d; })
    .enter().append("rect")
      .attr("width", x.bandwidth)
      .attr("x", function(d) { return x(d.data.gender); })
      .attr("y", function(d) { return y(d[1]); })
      .attr("height", function(d) { return y(d[0]) - y(d[1]); });

  // Add text elements to display values
  svg.selectAll("g")
    .data(series)
    .selectAll("text")
    .data(function(d) { return d; })
    .enter().append("text")
      .attr("x", function(d) { return x(d.data.gender) + x.bandwidth() / 2; })
      .attr("y", function(d) { return y(d[1]) + 15; })
      .text(function(d) { return (d[1] - d[0]).toFixed(2); })
      .attr("font-size", "12px")
      .attr('fill', 'grey')
      .attr("text-anchor", "middle");

  svg.append("g")
      .attr("transform", "translate(0," + y(0) + ")")
      .call(d3.axisBottom(x));

  svg.append("g")
      .attr("transform", "translate(" + margin.left + ",0)")
      .call(d3.axisLeft(y));

  function stackMin(serie) {
    return d3.min(serie, function(d) { return d[0]; });
  }

  function stackMax(serie) {
    return d3.max(serie, function(d) { return d[1]; });
  }


  // Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism
  svg.append("text")
    .attr("x", width/2)
    .attr("y", margin.top/2)
    .attr("text-anchor", "middle")
    .text("Neuroticism Score by Education Level (Avg)")
    .style("font-size", "16px")
    .style("text-decoration", "underline") ;


    const legend = svg.append("g")
    .attr("transform", "translate(" + (width - margin.right + 0) + "," + margin.top + ")");
  
  legend.selectAll("rect")
    .data(series)
    .enter().append("rect")
      .attr("width", 18)
      .attr("height", 18)
      .attr("x", 0)
      .attr("y", function(d, i) { return i * 20; })
      .attr("fill", function(d) { return z(d.key); });
  
  legend.selectAll("text")
    .data(series)
    .enter().append("text")
      .attr("x", 20)
      .attr("y", function(d, i) { return i * 20 + 9; })
      .attr("dy", "0.35em")
      .style("font-size", "10px")
      .text(function(d) { return d.key; });
  

})


  
  
  
// here comes radar chart 

/////////////////////////////////////////
///////////////radar chart functon///////
/////////////////////////////////////////


  function RadarChart(id, data, options, chartname) {
    var cfg = {
     w: ((window.screen.width- 500  )/10 *3),				//Width of the circle
     h: 700,				//Height of the circle
     margin: {top: 20, right: 20, bottom: 20, left: 20}, //The margins of the SVG
     levels: 3,				//How many levels or inner circles should there be drawn
     maxValue: 0, 			//What is the value that the biggest circle will represent
     labelFactor: 1.25, 	//How much farther than the radius of the outer circle should the labels be placed
     wrapWidth: 60, 		//The number of pixels after which a label needs to be given a new line
     opacityArea: 0.35, 	//The opacity of the area of the blob
     dotRadius: 4, 			//The size of the colored circles of each blog
     opacityCircles: 0.1, 	//The opacity of the circles of each blob
     strokeWidth: 2, 		//The width of the stroke around each blob
     roundStrokes: false,	//If true the area and stroke will follow a round path (cardinal-closed)
     color: d3.scaleOrdinal(d3.schemeCategory10)	//Color function
    };
    
    //Put all of the options into a variable called cfg
    if('undefined' !== typeof options){
      for(var i in options){
      if('undefined' !== typeof options[i]){ cfg[i] = options[i]; }
      }//for i
    }//if
    
    //If the supplied maxValue is smaller than the actual one, replace by the max in the data
    var maxValue = Math.max(cfg.maxValue, d3.max(data, function(i){return d3.max(i.map(function(o){return o.value;}))}));
      
    var allAxis = (data[0].map(function(i, j){return i.axis})),	//Names of each axis
      total = allAxis.length,					//The number of different axes
      radius = Math.min(cfg.w/2, cfg.h/2), 	//Radius of the outermost circle
      Format = d3.format('0.01'),			 	//Percentage formatting
      angleSlice = Math.PI * 2 / total;		//The width in radians of each "slice"
    
    //Scale for the radius
    var rScale = d3.scaleLinear()
      .range([0, radius])
      .domain([0, maxValue]);
      
    /////////////////////////////////////////////////////////
    //////////// Create the container SVG and g /////////////
    /////////////////////////////////////////////////////////
  
    //Remove whatever chart with the same id/class was present before
    d3.select(id).select("svg").remove();
    //Initiate the radar chart SVG
    var svg = d3.select(id).append("svg")
        .attr("width",  cfg.w + cfg.margin.left + cfg.margin.right)
        .attr("height", cfg.h + cfg.margin.top + cfg.margin.bottom)
        .attr("class", "radar"+id);
    //Append a g element		
    var g = svg.append("g")
        .attr("transform", "translate(" + (cfg.w/2 + cfg.margin.left) + "," + (cfg.h/2 + cfg.margin.top) + ")");
    
    /////////////////////////////////////////////////////////
    ////////// Glow filter for some extra pizzazz ///////////
    /////////////////////////////////////////////////////////
    
    //Filter for the outside glow
    var filter = g.append('defs').append('filter').attr('id','glow'),
      feGaussianBlur = filter.append('feGaussianBlur').attr('stdDeviation','2.5').attr('result','coloredBlur'),
      feMerge = filter.append('feMerge'),
      feMergeNode_1 = feMerge.append('feMergeNode').attr('in','coloredBlur'),
      feMergeNode_2 = feMerge.append('feMergeNode').attr('in','SourceGraphic');
  
    /////////////////////////////////////////////////////////
    /////////////// Draw the Circular grid //////////////////
    /////////////////////////////////////////////////////////
    
    //Wrapper for the grid & axes
    var axisGrid = g.append("g").attr("class", "axisWrapper");
    
    //Draw the background circles
    axisGrid.selectAll(".levels")
       .data(d3.range(1,(cfg.levels+1)).reverse())
       .enter()
      .append("circle")
      .attr("class", "gridCircle")
      .attr("r", function(d, i){return radius/cfg.levels*d;})
      .style("fill", "#CDCDCD")
      .style("stroke", "#CDCDCD")
      .style("fill-opacity", cfg.opacityCircles)
      .style("filter" , "url(#glow)");
  
    //Text indicating at what % each level is
    axisGrid.selectAll(".axisLabel")
       .data(d3.range(1,(cfg.levels+1)).reverse())
       .enter().append("text")
       .attr("class", "axisLabel")
       .attr("x", 4)
       .attr("y", function(d){return -d*radius/cfg.levels;})
       .attr("dy", "0.4em")
       .style("font-size", "10px")
       .attr("fill", "#737373")
       .text(function(d,i) { return Format(maxValue * d/cfg.levels); });
  
    /////////////////////////////////////////////////////////
    //////////////////// Draw the axes //////////////////////
    /////////////////////////////////////////////////////////
    
    //Create the straight lines radiating outward from the center
    var axis = axisGrid.selectAll(".axis")
      .data(allAxis)
      .enter()
      .append("g")
      .attr("class", "axis");
    //Append the lines
    axis.append("line")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", function(d, i){ return rScale(maxValue*1.1) * Math.cos(angleSlice*i - Math.PI/2); })
      .attr("y2", function(d, i){ return rScale(maxValue*1.1) * Math.sin(angleSlice*i - Math.PI/2); })
      .attr("class", "line")
      .style("stroke", "white")
      .style("stroke-width", "2px");
  
    //Append the labels at each axis
    axis.append("text")
      .attr("class", "legend")
      .style("font-size", "15px")
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .attr("x", function(d, i){ return rScale(maxValue * cfg.labelFactor) * Math.cos(angleSlice*i - Math.PI/2); })
      .attr("y", function(d, i){ return rScale(maxValue * cfg.labelFactor) * Math.sin(angleSlice*i - Math.PI/2); })
      .text(function(d){return d})
      .call(wrap, cfg.wrapWidth);
  
    /////////////////////////////////////////////////////////
    ///////////// Draw the radar chart blobs ////////////////
    /////////////////////////////////////////////////////////
    
    //The radial line function
    var radarLine = d3.lineRadial()
      //.interpolate("linear-closed")
          .curve(d3.curveLinearClosed)
      .radius(function(d) { return rScale(d.value); })
      .angle(function(d,i) {	return i*angleSlice; });
      
    // if(cfg.roundStrokes) {
    // 	radarLine.interpolate("cardinal-closed");
    // }
          
    //Create a wrapper for the blobs	
    var blobWrapper = g.selectAll(".radarWrapper")
      .data(data)
      .enter().append("g")
      .attr("class", "radarWrapper");
        
    //Append the backgrounds	
    blobWrapper
      .append("path")
      .attr("class", "radarArea")
      .attr("d", function(d,i) { return radarLine(d); })
      .style("fill", function(d,i) { return cfg.color(i); } )
      .style("fill-opacity", cfg.opacityArea)
      .on('mouseover', function (d,i){
        //Dim all blobs
        d3.selectAll(".radarArea")
          .transition().duration(200)
          .style("fill-opacity", 0.1); 
        //Bring back the hovered over blob
        d3.select(this)
          .transition().duration(200)
          .style("fill-opacity", 0.7);	
      })
      .on('mouseout', function(){
        //Bring back all blobs
        d3.selectAll(".radarArea")
          .transition().duration(200)
          .style("fill-opacity", cfg.opacityArea);
      });
      
    //Create the outlines	
    blobWrapper.append("path")
      .attr("class", "radarStroke")
      .attr("d", function(d,i) { return radarLine(d); })
      .style("stroke-width", cfg.strokeWidth + "px")
      .style("stroke", function(d,i) { return cfg.color(i); })
      .style("fill", "none")
      .style("filter" , "url(#glow)");		
    
    //Append the circles
    blobWrapper.selectAll(".radarCircle")
      .data(function(d,i) { return d; })
      .enter().append("circle")
      .attr("class", "radarCircle")
      .attr("r", cfg.dotRadius)
      .attr("cx", function(d,i){ return rScale(d.value) * Math.cos(angleSlice*i - Math.PI/2); })
      .attr("cy", function(d,i){ return rScale(d.value) * Math.sin(angleSlice*i - Math.PI/2); })
      .style("fill", function(d,i,j) { return cfg.color(j); } )
      .style("fill-opacity", 0.8);
  
    /////////////////////////////////////////////////////////
    //////// Append invisible circles for tooltip ///////////
    /////////////////////////////////////////////////////////
    
    //Wrapper for the invisible circles on top
    var blobCircleWrapper = g.selectAll(".radarCircleWrapper")
      .data(data)
      .enter().append("g")
      .attr("class", "radarCircleWrapper");
      
    //Append a set of invisible circles on top for the mouseover pop-up
    blobCircleWrapper.selectAll(".radarInvisibleCircle")
      .data(function(d,i) { return d; })
      .enter().append("circle")
      .attr("class", "radarInvisibleCircle")
      .attr("r", cfg.dotRadius*1.5)
      .attr("cx", function(d,i){ return rScale(d.value) * Math.cos(angleSlice*i - Math.PI/2); })
      .attr("cy", function(d,i){ return rScale(d.value) * Math.sin(angleSlice*i - Math.PI/2); })
      .style("fill", "none")
      .style("pointer-events", "all")
      .on("mouseover", function(event,d) {
        newX =  parseFloat(d3.select(this).attr('cx')) - 10;
        newY =  parseFloat(d3.select(this).attr('cy')) - 10;
        tooltip
          .attr('x', newX)
          .attr('y', newY)
          .text(Format(d.value))
          .transition().duration(200)
          .style('opacity', 1);
      })
      .on("mouseout", function(){
        tooltip.transition().duration(200)
          .style("opacity", 0);
      });
      
    //Set up the small tooltip for when you hover over a circle
    var tooltip = g.append("text")
      .attr("class", "tooltip")
      .style("opacity", 0);


  svg.append("text")
    .attr("x", width/2 + 90)
    .attr("y", margin.top/6)
    .attr("text-anchor", "middle")
    .text(chartname)
    .style("font-size", "20px")
    .style("text-decoration", "underline") ;
    
    /////////////////////////////////////////////////////////
    /////////////////// Helper Function /////////////////////
    /////////////////////////////////////////////////////////
  
    //Taken from http://bl.ocks.org/mbostock/7555321
    //Wraps SVG text	
    function wrap(text, width) {
      text.each(function() {
      var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.4, // ems
        y = text.attr("y"),
        x = text.attr("x"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", dy + "em");
        
      while (word = words.pop()) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", x).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
        }
      }
      });
    }//wrap	
    
  }
  
  //RadarChart
  
  
  /* Radar chart design created by Nadieh Bremer - VisualCinnamon.com */
  
  ////////////////////////////////////////////////////////////// 
  //////////////////////// Set-Up ////////////////////////////// 
  ////////////////////////////////////////////////////////////// 
  
  var margin = {top: 100, right: 100, bottom: 100, left: 100},
    width = Math.min(600, window.innerWidth - 10) - margin.left - margin.right,
    height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);
      
  ////////////////////////////////////////////////////////////// 
  ////////////////////////// Data ////////////////////////////// 
  ////////////////////////////////////////////////////////////// 
  
  var o_data = [
    [
      {axis:"Last_Day",value:3.39, drug_type: 'alcohol', gender: 'F', variable: 'oscore'},
      {axis:"Last_Week",value:3.11, drug_type: 'alcohol', gender: 'F', variable: 'oscore'},
      {axis:"Last_Month",value:3.29, drug_type: 'alcohol', gender: 'F', variable: 'oscore'},
      {axis:"Last_Year",value:3.38, drug_type: 'alcohol', gender: 'F', variable: 'oscore'},
      {axis:"Last_Decade",value:3.19, drug_type: 'alcohol', gender: 'F', variable: 'oscore'},
      ],[
      {axis:"Last_Day",value:3.58, drug_type: 'alcohol', gender: 'M', variable: 'oscore'},
      {axis:"Last_Week",value:3.64, drug_type: 'alcohol', gender: 'M', variable: 'oscore'},
      {axis:"Last_Month",value:3.83, drug_type: 'alcohol', gender: 'M', variable: 'oscore'},
      {axis:"Last_Year",value:3.52, drug_type: 'alcohol', gender: 'M', variable: 'oscore'},
      {axis:"Last_Decade",value:3.49, drug_type: 'alcohol', gender: 'M', variable: 'oscore'},
    ]
  ];
  
  var c_data = [
  
    [
      {axis:"Last_Day",value:3.62, drug_type: 'alcohol', gender: 'F', variable: 'cscore'},
      {axis:"Last_Week",value:3.44, drug_type: 'alcohol', gender: 'F', variable: 'cscore'},
      {axis:"Last_Month",value:3.67, drug_type: 'alcohol', gender: 'F', variable: 'cscore'},
      {axis:"Last_Year",value:3.7, drug_type: 'alcohol', gender: 'F', variable: 'cscore'},
      {axis:"Last_Decade",value:3.42, drug_type: 'alcohol', gender: 'F', variable: 'cscore'},
    
      ],[
      {axis:"Last_Day",value:3.29, drug_type: 'alcohol', gender: 'M', variable: 'cscore'},
      {axis:"Last_Week",value:3.11, drug_type: 'alcohol', gender: 'M', variable: 'cscore'},
      {axis:"Last_Month",value:3.24, drug_type: 'alcohol', gender: 'M', variable: 'cscore'},
      {axis:"Last_Year",value:3.28, drug_type: 'alcohol', gender: 'M', variable: 'cscore'},
      {axis:"Last_Decade",value:3.16, drug_type: 'alcohol', gender: 'M', variable: 'cscore'},
      ]
  ];
  
  var e_data = [
    [
      
      {axis:"Last_Day",value:3.55, drug_type: 'alcohol', gender: 'F', variable: 'escore'},
      {axis:"Last_Week",value:3.15, drug_type: 'alcohol', gender: 'F', variable: 'escore'},
      {axis:"Last_Month",value:3.35, drug_type: 'alcohol', gender: 'F', variable: 'escore'},
      {axis:"Last_Year",value:3.69, drug_type: 'alcohol', gender: 'F', variable: 'escore'},
      {axis:"Last_Decade",value:3.15, drug_type: 'alcohol', gender: 'F', variable: 'escore'},
      ],[
      
      {axis:"Last_Day",value:3.39, drug_type: 'alcohol', gender: 'M', variable: 'escore'},
      {axis:"Last_Week",value:3.16, drug_type: 'alcohol', gender: 'M', variable: 'escore'},
      {axis:"Last_Month",value:3.46, drug_type: 'alcohol', gender: 'M', variable: 'escore'},
      {axis:"Last_Year",value:3.52, drug_type: 'alcohol', gender: 'M', variable: 'escore'},
      {axis:"Last_Decade",value:3.01, drug_type: 'alcohol', gender: 'M', variable: 'escore'},
      ]
  ];
  
  var a_data = [
    [
      {axis:"Last_Day",value:3.59, drug_type: 'alcohol', gender: 'F', variable: 'ascore'},
      {axis:"Last_Decade",value:3.62, drug_type: 'alcohol', gender: 'F', variable: 'ascore'},
      {axis:"Last_Month",value:3.69, drug_type: 'alcohol', gender: 'F', variable: 'ascore'},
      {axis:"Last_Week",value:3.75, drug_type: 'alcohol', gender: 'F', variable: 'ascore'},
      {axis:"Last_Year",value:3.56, drug_type: 'alcohol', gender: 'F', variable: 'ascore'},
    
    
      ],[
      {axis:"Last_Day",value:3.18, drug_type: 'alcohol', gender: 'M', variable: 'ascore'},
      {axis:"Last_Decade",value:3.12, drug_type: 'alcohol', gender: 'M', variable: 'ascore'},
      {axis:"Last_Month",value:3.26, drug_type: 'alcohol', gender: 'M', variable: 'ascore'},
      {axis:"Last_Week",value:3.29, drug_type: 'alcohol', gender: 'M', variable: 'ascore'},
      {axis:"Last_Year",value:3.12, drug_type: 'alcohol', gender: 'M', variable: 'ascore'},
    
    ]
  ];
  
  var n_data = [
    [
      {axis:"Last_Day",value:3.58, drug_type: 'alcohol', gender: 'F', variable: 'nscore'},
      {axis:"Last_Week",value:3.78, drug_type: 'alcohol', gender: 'F', variable: 'nscore'},
      {axis:"Last_Month",value:3.55, drug_type: 'alcohol', gender: 'F', variable: 'nscore'},
      {axis:"Last_Year",value:3.47, drug_type: 'alcohol', gender: 'F', variable: 'nscore'},
      {axis:"Last_Decade",value:3.63, drug_type: 'alcohol', gender: 'F', variable: 'nscore'},
      ],[
      {axis:"Last_Day",value:3.47, drug_type: 'alcohol', gender: 'M', variable: 'nscore'},
      {axis:"Last_Week",value:3.74, drug_type: 'alcohol', gender: 'M', variable: 'nscore'},
      {axis:"Last_Month",value:3.34, drug_type: 'alcohol', gender: 'M', variable: 'nscore'},
      {axis:"Last_Year",value:3.31, drug_type: 'alcohol', gender: 'M', variable: 'nscore'},
      {axis:"Last_Decade",value:3.46, drug_type: 'alcohol', gender: 'M', variable: 'nscore'},
      ]
  ];
  
  
        
    ////////////////////////////////////////////////////////////// 
    //////////////////// Draw the Chart ////////////////////////// 
    ////////////////////////////////////////////////////////////// 
  
    var color = d3.scaleOrdinal()
      .range(["pink","blue"]);
      
    var radarChartOptions = {
      w: width,
      h: height,
      margin: margin,
      maxValue: 5,
      levels: 5,
      roundStrokes: true,
      color: color
    };
    //Call function to draw the Radar chart
    //RadarChart(".radarChart", data, radarChartOptions);
    //		 conscientiousness  extraversion  agreeableness  neuroticism
  
  
  
///////////////////////////////////////////////////////////////////////
/////////////////////all Levels buttons ////////////////////////
///////////////////////////////////////////////////////////////////////

function toggleChart1() {
  var edubar_o = document.getElementById("edubar_o");
  var edubar_c = document.getElementById("edubar_c");
  var edubar_e = document.getElementById("edubar_e");
  var edubar_a = document.getElementById("edubar_a");
  var edubar_n = document.getElementById("edubar_n");

  var agebar_o = document.getElementById("agebar_o");
  var agebar_c = document.getElementById("agebar_c");
  var agebar_e = document.getElementById("agebar_e");
  var agebar_a = document.getElementById("agebar_a");
  var agebar_n = document.getElementById("agebar_n");

  var chart1 = document.getElementById("chart1");
  var chart2 = document.getElementById("chart2");
  var chart3 = document.getElementById("chart3");
  var chart4 = document.getElementById("chart4");
  var chart5 = document.getElementById("chart5");

  var openness = document.getElementById("openness");
  var conscientiousness = document.getElementById("conscientiousness");
  var extraversion = document.getElementById("extraversion");
  var agreeableness = document.getElementById("agreeableness");
  var neuroticism = document.getElementById("neuroticism");


  if (edubar_o.style.display === "none") {
    edubar_o.style.display = "block";
    edubar_c.style.display = "none";
    edubar_e.style.display = "none";
    edubar_a.style.display = "none";
    edubar_n.style.display = "none";
    
    agebar_o.style.display = "block";
    agebar_c.style.display = "none";
    agebar_e.style.display = "none";
    agebar_a.style.display = "none";
    agebar_n.style.display = "none";

    chart1.style.display = "block";
    chart2.style.display = "none";
    chart3.style.display = "none";
    chart4.style.display = "none";
    chart5.style.display = "none";
    RadarChart("#radarChart1", o_data, radarChartOptions, "Openness score for last Drug usage (Avg)");

  } else {
    edubar_o.style.display = "none";
    agebar_o.style.display = "none";
    chart1.style.display = "none";
  }
}



function toggleChart2() {
  var edubar_o = document.getElementById("edubar_o");
  var edubar_c = document.getElementById("edubar_c");
  var edubar_e = document.getElementById("edubar_e");
  var edubar_a = document.getElementById("edubar_a");
  var edubar_n = document.getElementById("edubar_n");

  var agebar_o = document.getElementById("agebar_o");
  var agebar_c = document.getElementById("agebar_c");
  var agebar_e = document.getElementById("agebar_e");
  var agebar_a = document.getElementById("agebar_a");
  var agebar_n = document.getElementById("agebar_n");


  var chart1 = document.getElementById("chart1");
  var chart2 = document.getElementById("chart2");
  var chart3 = document.getElementById("chart3");
  var chart4 = document.getElementById("chart4");
  var chart5 = document.getElementById("chart5");

  var openness = document.getElementById("openness");
  var conscientiousness = document.getElementById("conscientiousness");
  var extraversion = document.getElementById("extraversion");
  var agreeableness = document.getElementById("agreeableness");
  var neuroticism = document.getElementById("neuroticism");
  
  if (edubar_c.style.display === "none") {
  edubar_c.style.display = "block";
  edubar_o.style.display = "none";
  edubar_e.style.display = "none";
  edubar_a.style.display = "none";
  edubar_n.style.display = "none";

  agebar_c.style.display = "block";
  agebar_o.style.display = "none";
  agebar_e.style.display = "none";
  agebar_a.style.display = "none";
  agebar_n.style.display = "none";

  chart2.style.display = "block";
  chart1.style.display = "none";
  chart3.style.display = "none";
  chart4.style.display = "none";
  chart5.style.display = "none";
  RadarChart("#radarChart2", c_data, radarChartOptions, "Conscientiousness score for last Drug usage (Avg)");

  } else {
  edubar_c.style.display = "none";
  agebar_c.style.display = "none";
  chart2.style.display = "none";
  }
  }



  
  
  function toggleChart3() {
    var edubar_o = document.getElementById("edubar_o");
    var edubar_c = document.getElementById("edubar_c");
    var edubar_e = document.getElementById("edubar_e");
    var edubar_a = document.getElementById("edubar_a");
    var edubar_n = document.getElementById("edubar_n");

    var agebar_o = document.getElementById("agebar_o");
    var agebar_c = document.getElementById("agebar_c");
    var agebar_e = document.getElementById("agebar_e");
    var agebar_a = document.getElementById("agebar_a");
    var agebar_n = document.getElementById("agebar_n");

    var chart1 = document.getElementById("chart1");
    var chart2 = document.getElementById("chart2");
    var chart3 = document.getElementById("chart3");
    var chart4 = document.getElementById("chart4");
    var chart5 = document.getElementById("chart5");

    var openness = document.getElementById("openness");
    var conscientiousness = document.getElementById("conscientiousness");
    var extraversion = document.getElementById("extraversion");
    var agreeableness = document.getElementById("agreeableness");
    var neuroticism = document.getElementById("neuroticism");

    if (edubar_e.style.display === "none") {
    edubar_e.style.display = "block";
    edubar_o.style.display = "none";
    edubar_c.style.display = "none";
    edubar_a.style.display = "none";
    edubar_n.style.display = "none";

    agebar_e.style.display = "block";
    agebar_o.style.display = "none";
    agebar_c.style.display = "none";
    agebar_a.style.display = "none";
    agebar_n.style.display = "none";

    chart3.style.display = "block";
    chart1.style.display = "none";
    chart2.style.display = "none";
    chart4.style.display = "none";
    chart5.style.display = "none";
    RadarChart("#radarChart3", e_data, radarChartOptions, "Extraversion score for last Drug usage (Avg)");

    } else {
    edubar_e.style.display = "none";
    agebar_e.style.display = "none";
    chart3.style.display = "none";
    }
    }



    function toggleChart4() {
      var edubar_o = document.getElementById("edubar_o");
      var edubar_c = document.getElementById("edubar_c");
      var edubar_e = document.getElementById("edubar_e");
      var edubar_a = document.getElementById("edubar_a");
      var edubar_n = document.getElementById("edubar_n");
      
      var agebar_o = document.getElementById("agebar_o");
      var agebar_c = document.getElementById("agebar_c");
      var agebar_e = document.getElementById("agebar_e");
      var agebar_a = document.getElementById("agebar_a");
      var agebar_n = document.getElementById("agebar_n");

      var chart1 = document.getElementById("chart1");
      var chart2 = document.getElementById("chart2");
      var chart3 = document.getElementById("chart3");
      var chart4 = document.getElementById("chart4");
      var chart5 = document.getElementById("chart5");

      var openness = document.getElementById("openness");
      var conscientiousness = document.getElementById("conscientiousness");
      var extraversion = document.getElementById("extraversion");
      var agreeableness = document.getElementById("agreeableness");
      var neuroticism = document.getElementById("neuroticism");
    
      if (edubar_a.style.display === "none") {
        edubar_a.style.display = "block";
        edubar_o.style.display = "none";
        edubar_c.style.display = "none";
        edubar_e.style.display = "none";
        edubar_n.style.display = "none";

        agebar_a.style.display = "block";
        agebar_o.style.display = "none";
        agebar_c.style.display = "none";
        agebar_e.style.display = "none";
        agebar_n.style.display = "none";

        chart4.style.display = "block";
        chart1.style.display = "none";
        chart2.style.display = "none";
        chart3.style.display = "none";
        chart5.style.display = "none";
        RadarChart("#radarChart4", a_data, radarChartOptions, "Agreeableness score for last Drug usage (Avg)");
      } else {
        edubar_a.style.display = "none";
        agebar_a.style.display = "none";
        chart4.style.display = "none";
      }
    }
    



function toggleChart5() {
  var edubar_o = document.getElementById("edubar_o");
  var edubar_c = document.getElementById("edubar_c");
  var edubar_e = document.getElementById("edubar_e");
  var edubar_a = document.getElementById("edubar_a");
  var edubar_n = document.getElementById("edubar_n");


  var agebar_o = document.getElementById("agebar_o");
  var agebar_c = document.getElementById("agebar_c");
  var agebar_e = document.getElementById("agebar_e");
  var agebar_a = document.getElementById("agebar_a");
  var agebar_n = document.getElementById("agebar_n");


  var chart1 = document.getElementById("chart1");
  var chart2 = document.getElementById("chart2");
  var chart3 = document.getElementById("chart3");
  var chart4 = document.getElementById("chart4");
  var chart5 = document.getElementById("chart5");

  var openness = document.getElementById("openness");
  var conscientiousness = document.getElementById("conscientiousness");
  var extraversion = document.getElementById("extraversion");
  var agreeableness = document.getElementById("agreeableness");
  var neuroticism = document.getElementById("neuroticism");


  if (edubar_n.style.display === "none") {
      edubar_n.style.display = "block";
      edubar_o.style.display = "none";
      edubar_c.style.display = "none";
      edubar_e.style.display = "none";
      edubar_a.style.display = "none";


      agebar_n.style.display = "block";
      agebar_o.style.display = "none";
      agebar_c.style.display = "none";
      agebar_e.style.display = "none";
      agebar_a.style.display = "none";

      chart5.style.display = "block";
      chart1.style.display = "none";
      chart2.style.display = "none";
      chart3.style.display = "none";
      chart4.style.display = "none";
      RadarChart("#radarChart5", n_data, radarChartOptions, "Neuroticism score for last Drug Usage (Avg)");
  } else {
      edubar_n.style.display = "none";
      agebar_n.style.display = "none";
      chart5.style.display = "none";
  }
}



window.onload = function() {
  var edubar_o = document.getElementById("edubar_o");
  var edubar_c = document.getElementById("edubar_c");
  var edubar_e = document.getElementById("edubar_e");
  var edubar_a = document.getElementById("edubar_a");
  var edubar_n = document.getElementById("edubar_n");

  var openness = document.getElementById("openness");
  var conscientiousness = document.getElementById("conscientiousness");
  var extraversion = document.getElementById("extraversion");
  var agreeableness = document.getElementById("agreeableness");
  var neuroticism = document.getElementById("neuroticism");
  
  var agebar_o = document.getElementById("agebar_o");
  var agebar_c = document.getElementById("agebar_c");
  var agebar_e = document.getElementById("agebar_e");
  var agebar_a = document.getElementById("agebar_a");
  var agebar_n = document.getElementById("agebar_n");

  var chart1 = document.getElementById("chart1");
  var chart2 = document.getElementById("chart2");
  var chart3 = document.getElementById("chart3");
  var chart4 = document.getElementById("chart4");
  var chart5 = document.getElementById("chart5");
  
  edubar_o.style.display = "block";
  edubar_c.style.display = "none";
  edubar_e.style.display = "none";
  edubar_a.style.display = "none";
  edubar_n.style.display = "none";
  
  agebar_o.style.display = "block";
  agebar_c.style.display = "none";
  agebar_e.style.display = "none";
  agebar_a.style.display = "none";
  agebar_n.style.display = "none";

  chart1.style.display = "block";
  chart2.style.display = "none";
  chart3.style.display = "none";
  chart4.style.display = "none";
  chart5.style.display = "none";
  RadarChart("#radarChart1", o_data, radarChartOptions, "Openness score for last Drug usage (Avg)");
  };
  
  


// Get the buttons by their id
var openness = document.getElementById("openness");
var conscientiousness = document.getElementById("conscientiousness");
var extraversion = document.getElementById("extraversion");
var agreeableness = document.getElementById("agreeableness");
var neuroticism = document.getElementById("neuroticism");

// Add click event listeners to the buttons

openness.addEventListener("click", function() {
  var bar1 = d3.selectAll(".bar1");
  var visibility = bar1.style("visibility");
  if (visibility == "visible") {
      bar1.style("visibility", "hidden");
  } else {
      bar1.style("visibility", "visible");
  }
});



conscientiousness.addEventListener("click", function() {
  var bar2 = d3.selectAll(".bar2");
  var visibility = bar2.style("visibility");
  if (visibility == "visible") {
      bar2.style("visibility", "hidden");
  } else {
      bar2.style("visibility", "visible");
  }
});


extraversion.addEventListener("click", function() {
  var bar3 = d3.selectAll(".bar3");
  var visibility = bar3.style("visibility");
  if (visibility == "visible") {
      bar3.style("visibility", "hidden");
  } else {
      bar3.style("visibility", "visible");
  }
});

agreeableness.addEventListener("click", function() {
  var bar4 = d3.selectAll(".bar4");
  var visibility = bar4.style("visibility");
  if (visibility == "visible") {
      bar4.style("visibility", "hidden");
  } else {
      bar4.style("visibility", "visible");
  }
});
neuroticism.addEventListener("click", function() {
  var bar5 = d3.selectAll(".bar5");
  var visibility = bar5.style("visibility");
  if (visibility == "visible") {
      bar5.style("visibility", "hidden");
  } else {
      bar5.style("visibility", "visible");
  }
});