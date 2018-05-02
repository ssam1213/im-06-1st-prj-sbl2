import React from 'react';
import RC2 from 'react-chartjs2';
import {Pie} from 'react-chartjs-2';

// var data1 = {
//     labels: ["4/27", "4/28", "4/29", "4/30", "5/1", "5/2", "5/3"],
//     datasets: [
//         {
//             label: "Visits",
//             data: [10, 20, 30, 40, 50, 60, 70],
//             backgroundColor: ['#FF6384']
//         },
//           {
//             label: "Revenue",
//             data: [500, 400, 300, 600, 480, 550, 500],
//             borderColor : ['#FFCE56']
//         }
//     ]
// };

// var data2 = {
//     labels: ['Google', 'Naver', 'Daum', 'Bing', 'Zum'],
//     datasets: [
//         {
//             data: [40, 20, 15, 10, 15],
//               backgroundColor: [
//                 '#FF6384',
//                 '#36A2EB',
//                 '#FFCE56',
//                 '#47C83E'
//                 ],
//                 hoverBackgroundColor: [
//                 '#FF6384',
//                 '#36A2EB',
//                 '#FFCE56',
//                 '#47C83E'
//                 ]
//         }
//     ]
// };


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
    constructor(){
        super();
        this.state = {
            data1 : {},
            data2 : {
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
            }
        }

    }

    componentDidMount(){
        // console.log(1);
        fetch('http://127.0.0.1:8080/visitCount')
        // console.log(2);
        .then(res => res.json())
        .then(data => 
            this.setState({data1: data}))
        // .then(data => console.log('data 1 :', data))
        
        // .then(json => 
        //     this.setState({data1 : json})
        // );
    }
    
    render() {
        // console.log(2);
        // console.log('state data1 :', this.state.data1)
        return (
            <div id='mid'>
                <div id = "midTop">
                    <h2><u> Visits & Revenue </u></h2>  
                    <RC2 data={this.state.data1} width={400} height={180} options ={options} type='line'/>
                </div>
                <div id = "midBottom">
                    <h2><u> Visits By Channel </u></h2>  
                    <Pie data={this.state.data2} width = {400} height = {180} options = {options}  />
                </div>
            </div>
         
        )
    }
};



export default Mid;