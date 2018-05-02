import React from 'react';
import { Line } from 'react-chartjs-2';

class LineGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lineData: {
                labels: [],
                datasets: [{
                    data: props.stat.timeSeries,
                    borderColor: "#3e95cd",
                    fill: false
                }]
            },
        };
    }

    render() {
        return (
            <div className='containerLineChart'>
                <div className='title'>
                    <h3>{this.props.stat.title}</h3>
                </div>
                <div className='statCurrent'>
                    <h3>{this.props.stat.current}</h3>
                </div>
                <div className='LineChart'>
                    <Line
                        data={this.state.lineData}
                        height={50}
                        options={{
                            maintainAspectRatio: true,
                            responsive: true,
                            legend: { display: false },
                            scales: {
                                xAxes: [{ gridLines: { display: false } }],
                                yAxes: [{
                                    display: true,
                                    gridLines: { display: false }
                                }]
                            }
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default LineGraph;