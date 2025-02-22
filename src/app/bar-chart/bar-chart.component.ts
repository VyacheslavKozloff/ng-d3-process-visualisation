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


    const process_1 = {
      id: 'group_1',
      label: 'ПИ',
      docs: [
          {label: 'Протокол ПИ', isAdded: true},
          {label: 'Акт', isAdded: false}
      ],
      isActive: false
  };

  const process_2 = {
      id: 'group_2',
      label: 'ПСИ',
      docs: [
          {label: 'Протокол ПСИ', isAdded: false},
      ],
      isActive: false
  };

  const width = 700;
  const height = 300;

  const data = [process_1, process_2];
  const svg = d3.select(".processes_container").append("svg")
                .attr("width", width)
                .attr("height", height);

  const groups = svg.selectAll('g')
      .data(data)
      .join('g')
      .attr('transform', d => translate(0, 20))
      .attr('id', d => d.id);

  groups.append('rect')
      .attr("width", 200) 
      .attr("height", 40)
      .attr("x", (d, i) => (210 * i) + 20)
      .attr("y", 0)
      .attr('fill', 'white')
      .attr('stroke', '#E5E5E5')
      .attr('rx', 15)
      .attr('ry', 15)
      .attr('transform', translate(0, 20))
      .on('mouseover', (e, d) => {
          d.isActive = true;
          d3.select(e.target).classed('rect__expanded', true);
          const rect = d3.select('.rect__expanded');

          d3.select(#${d.id}).append('g').data(d.docs).append('rect')
              .attr("width", 100) 
              .attr("height", 40)
              .attr("x", (d, i) => (210 * i) + 20)
              .attr("y", 150)
              .attr('fill', 'red');
          

          
              // .join('rect')
              // .attr("width", 200) 
              // .attr("height", 40)
              // .attr("x", (d, i) => (210 * i) + 20)
              // .attr("y", 20)
              // .attr('fill', 'red');

          console.log(d3.select(#${d.id}));
          
      })
      .on('mouseout', (e, d) => {
          d.isActive = false;
          d3.select(e.target).classed('rect__expanded', false);
      });

  groups.append('text')
    .text(d => d.label)
    .attr("x", (d, i) => (220 * i) + 60)
    .attr("y", 0)
    .attr('transform', translate(0, 45))
    .style("font-family", "sans-serif")
    .style("font-size", "11px");


  // groups.append('circle')
  //     .attr('cx', (d, i) => (210 * i) + 40)
  //     .attr('cy', 120)
  //     .attr('r', 15)
  //     .attr('fill', '#77aab8');

  }
}
