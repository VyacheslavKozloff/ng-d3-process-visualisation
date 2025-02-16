import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css'
})
export class BarChartComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.createBarChart();
  }
 
  private createBarChart(): void {
    const data = [30, 200, 100, 400, 150, 250];
    const data2 = ['Process 1', 'Process 2', 'Process 3', 'Process 4'];
    const svg = d3.select("app-bar-chart").append("svg")
                  .attr("width", 700)
                  .attr("height", 300);

    const groups = svg.selectAll('g').data(data2).join('g');

    groups.append('rect')
      .attr("width", 80) 
      .attr("height", 40)
      .attr("x", (d, i) => (100 * i))
      .attr("y", 0)
      .attr('fill', 'red');
    
    groups.select('rect').classed("rect__blue", true);

    groups.append('text')
      .text(d => d)
      .attr("x", (d, i) => (100 * i) + 60)
      .attr("y", 12)
      .attr("text-anchor", "end")
      .style("font-family", "sans-serif")
      .style("font-size", "11px")
      .attr('class', 'text__white');

    // svg.selectAll("rect")
    //   .data(data)
    //   .enter()
    //   .append("rect")
    //   .attr("x", (d, i) => i * 70)
    //   .attr("y", d => 300 - d)
    //   .attr("width", 65)
    //   .attr("height", d => d)
    //   .attr("fill", "blue");
  }
}
