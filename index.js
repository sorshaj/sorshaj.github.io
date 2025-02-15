console.log(d3.scaleUtc);

// Declare the chart dimensions and margins.
const width = 640;
const height = 400;
const marginTop = 20;
const marginRight = 20;
const marginBottom = 30;
const marginLeft = 40;

const x = d3.scaleLinear()
    .domain([0, 100])
    .range([marginLeft, width-marginRight]);

const y = d3.scaleLinear()
    .domain([0, 100])
    .range([height - marginBottom, marginTop]);

// Create the SVG container.
const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height);

// Add the x-axis.
svg.append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x));

// Add the y-axis.
svg.append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y));


const xScale = d3.scaleLinear().domain([0, 100]).range([marginLeft, width-marginRight]);
const yScale = d3.scaleLinear().domain([0, 100]).range([height-marginBottom, marginTop]);
svg.append("polygon")
    .attr("points", `
        ${xScale(40)},${yScale(40)}
        ${xScale(40)},${yScale(50)}
        ${xScale(50)},${yScale(50)}
        ${xScale(50)},${yScale(40)}
    `)
    .attr("fill", "blue")
    .attr("stroke", "black")
    .attr("stroke-width", 2);

const container = document.getElementById("hello");
container.append(svg.node());
    

/*
const xScale = d3.scaleLinear().domain([0, 10]).range([50, 450]);
const yScale = d3.scaleLinear().domain([0, 10]).range([250, 50]);

svg.append("polygon")
    .attr("points", `
        ${xScale(3)},${yScale(7)}
        ${xScale(6)},${yScale(2)}
        ${xScale(1)},${yScale(2)}
    `)
    .attr("fill", "blue")
    .attr("stroke", "black")
    .attr("stroke-width", 2);

// Append the SVG element.
*/

