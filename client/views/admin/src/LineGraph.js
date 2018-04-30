import React from 'react';
import { Line } from 'react-chartjs-2';

class LineGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lineData: {
                labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
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
                    <h5>{this.props.stat.title}</h5>
                </div>
                <div className='statCurrent'>
                    <h3>{this.props.stat.current}</h3>
                </div>
                <div className='LineChart'>
                    <Line
                        data={this.state.lineData}
                        width={250}
                        height={100}
                        options={{
                            maintainAspectRatio: false,
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