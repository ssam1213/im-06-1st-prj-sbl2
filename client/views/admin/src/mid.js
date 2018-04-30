import React from 'react';
import RC2 from 'react-chartjs2';
import {Pie} from 'react-chartjs-2';

var data1 = {
    labels: ["4/27", "4/28", "4/29", "4/30", "5/1", "5/2", "5/3"],
    datasets: [
        {
            label: "Visits",
            data: [],
            backgroundColor: ['#FF6384']
        },
          {
            label: "Revenue",
            data: [500, 400, 300, 600, 480, 550, 500],
            borderColor : ['#FFCE56']
        }
    ]
};

var data2 = {
    labels: ['Google', 'Naver', 'Daum', 'Bing', 'Zum'],
    datasets: [
        {
            data: [40, 20, 15, 10, 15],
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#47C83E'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#47C83E'
                ]
        }
    ]
};


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



class Mid extends React.Component {
    render() {
        return (
            <div id='mid'>
                <div id = "midTop">
                    <h2><u> Visits & Revenue </u></h2>  
                    <RC2 data={data1} width={400} height={180} options ={options} type='line'/>
                </div>
                <div id = "midBottom">
                    <h2><u> Visits By Channel </u></h2>  
                    <Pie data={data2} width = {400} height = {180} options = {options}  />
                </div>
            </div>
         
        )
    }
};



export default Mid;