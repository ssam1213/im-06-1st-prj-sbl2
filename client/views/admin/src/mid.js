import React from 'react';
import RC2 from 'react-chartjs2';
import {Pie} from 'react-chartjs-2';

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

    renderGraph = () => {
      return <RC2 data={this.state.data1} width={400} height={180} options={options} type='line' />    
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8080/visitCount')
        .then(res => res.json())
        .then(data => 
            this.setState({data1: data}))
        .catch(err => console.log(err))
    }
    
    render() {
        return (
            <div id='mid'>
                <div id = "midTop">
                    <h2><u> Visits & Revenue </u></h2>  
                    {!this.state.data1 ? 'Loading...' : this.state.data1.datasets[0].data.length && this.state.data1.datasets[1].data.length ? this.renderGraph() : 'Loading...'  }
                   
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