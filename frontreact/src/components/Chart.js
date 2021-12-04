import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

import '../styles/pages/_report.scss'
export const Chart = ({ width = 600, height = 600, data }) => {
  const barChart = useRef();

  var tooltip = d3.select("body").append("div").attr("class", "toolTip");

  useEffect(() => {
    const margin = { top: 10, left: 50, bottom: 40, right: 10 };
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top - margin.bottom;

    const svg = d3.select(barChart.current);
    svg.attr('width', width);
    svg.attr('height', height);

    let g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const y = d3.scaleLinear().domain([0, 500]).range([iheight, 0]);

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.name))
      .range([0, iwidth])
      .padding(0.1);

    // Continue with implementation. Don't forget the tooltip

    g.selectAll(".bar")
      	.data(data)
      .enter().append("rect")
      .style('fill', 'blue')
      .attr('x', item => x(item.name))
      .attr('y', item => y(parseInt(item.stock)))
      .attr('height', item => iheight - y(item.stock))
      .attr('width', x.bandwidth())
      .on("mouseover", function(obj, item){
        tooltip
          .style("display", "inline-block")
          .style('left', (obj.x + 20) + 'px')
          .style('top', (obj.y + 20) + 'px')
          .html((item.name) + "<br>" + (item.stock));
    })
    .on("mouseout", function(){ tooltip.style("display", "none");});

    g.append('g')
      .classed('y--axis', true)
      .call(d3.axisLeft(y));

    const div = d3.select('body')
      .append('div')
      .style('position', 'absolute')
      .style('opacity', 0);

  });

  return (
    <div id='chartArea'>
      <svg ref={barChart}></svg>
    </div>
  );
};
