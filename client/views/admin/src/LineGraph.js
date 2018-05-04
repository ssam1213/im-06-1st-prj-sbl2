import React from 'react';
import { Line } from 'react-chartjs-2';

var LineGraph = (props) => {
    const lineData = {
        labels: Object.keys(props.stat.data),
        datasets: [{
            data: Object.values(props.stat.data),
            borderColor: "#3e95cd",
            fill: false
        }]
    };

    return (
        <div className='containerLineChart'>
            <div className='title'>
                <h3>{props.stat.title}</h3>
            </div>
            <div className='statCurrent'>
                <h3>{props.stat.current}</h3>
            </div>
            <div className='LineChart'>
                <Line
                    data={lineData}
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
};

export default LineGraph;