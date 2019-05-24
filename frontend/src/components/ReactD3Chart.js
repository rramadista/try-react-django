import React, { Component } from 'react';
import * as d3 from 'd3';

let expenses = [
    {
        name: 'Coffee',
        amount: 4,
        date: new Date()
    }, {
        name: 'Tea',
        amount: 46,
        date: new Date()
    }, {
        name: 'Cola',
        amount: 40,
        date: new Date()
    }, {
        name: 'Milk',
        amount: 15,
        date: new Date()
    }
]

let width = 1100;
let height = 400
let radius = 20;
let simulation = d3.forceSimulation()
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('change', d3.forceManyBody())
    .force('collide', d3.forceCollide(radius))
    .stop();

class DataVizExample extends Component {

    constructor(props) {
        super(props);
        this.forceTick = this.forceTick.bind(this);
    }

    componentWillMount() {
        simulation.on('tick', this.forceTick);
    }

    componentDidMount() {
        this.container = d3.select(this.refs.container);
        this.renderCircles();

        simulation
            .nodes(expenses)
            .alpha(0.8)
            .restart();
    }

    componentDidUpdate() {
        this.renderCircles();
    }

    renderCircles() {
        this.circles = this.container.selectAll('circle')
            .data(expenses, d => d.name);
        this.circles
            .exit()
            .remove();
        this.circles = this.circles
            .enter()
            .append('circle')
            .merge(this.circles)
            .attr('r', radius)
            .attr('opacity', 0.5)
            .attr("fill", "yellow")
            .attr("stroke", "black")
            .attr("stroke-width", d => d / 2);
    }

    forceTick() {
        this.circles
            .attr('cx', d => d.x)
            .attr('cy', d => d.y)
    }

    render() {
        return (
            <svg width={width} height={height} ref="container">

            </svg>
        )
    }
}
export default DataVizExample;