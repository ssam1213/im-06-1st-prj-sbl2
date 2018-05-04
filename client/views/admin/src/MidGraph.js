import React from 'react';
import { Line } from 'react-chartjs-2';
const options = {
    maintainAspectRatio: true,
    responsive: true,
    legend: {
        position: 'left',
        labels: {
            boxWidth: 10
        }
    }
}

var MidGraph = (props) => {
    const midData = {
        labels: ["4", "8", "12", "16", "20", "24"],
        datasets: [
            {
                label: "Visit",
                data: Object.values(props.line.dataset[0].data),
                backgroundColor: "#FF6384"
            }, {
                label: "Revenue",
                data: Object.values(props.line.dataset[1].data),
                borderColor: "#FFCE56"
            }]
        }
    
    return (
        <div>
        <Line data={midData} width={400} height={180} options={options} type='line' /> 
        </div>
    )
}

export default MidGraph;