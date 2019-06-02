import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class ChartExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: [
                    '2012',
                    '2013',
                    '2014',
                    '2015',
                    '2016',
                    '2017',
                    '2018',
                    '2019 (YTD)'
                ],
                datasets: [
                    {
                        label: 'Employee',
                        data: [
                            13181,
                            11923,
                            9864,
                            8658,
                            8986,
                            8574,
                            8647,
                            7893
                        ],
                        // backgroundColor: 'rgba(255, 99, 132, 0.6)'
                        backgroundColor: 'rgba(54, 162, 235, 0.6)'
                        // backgroundColor: 'rgba(255, 206, 86, 0.6)'
                        // backgroundColor: 'rgba(75, 192, 192, 0.6)'
                        // backgroundColor: 'rgba(153, 102, 255, 0.6)'
                        // backgroundColor: 'rgba(255, 159, 64, 0.6)'
                    },
                    {
                        label: 'Outsource',
                        data: [
                            6175,
                            6337,
                            5721,
                            5887,
                            6178,
                            5501,
                            5040,
                            4714
                        ],
                        // backgroundColor: 'rgba(255, 99, 132, 0.6)'
                        // backgroundColor: 'rgba(54, 162, 235, 0.6)'
                        // backgroundColor: 'rgba(255, 206, 86, 0.6)'
                        // backgroundColor: 'rgba(75, 192, 192, 0.6)'
                        // backgroundColor: 'rgba(153, 102, 255, 0.6)'
                        backgroundColor: 'rgba(255, 159, 64, 0.6)'
                    },
                ]
            }
        }
    }

    static defaultProps = {
        legendPosition: 'right'
    }

    render() {
        return (
            <Bar
                data={this.state.chartData}
                options={{
                    scales: {
                        xAxes: [{
                            stacked: true
                        }],
                        yAxes: [{
                            stacked: true
                        }],
                    },
                    title: {
                        display: true,
                        text: 'Historical Data',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: this.props.legendPosition
                    }
                }}
            />
        )
    }
}

export default ChartExample;