import React from 'react';
import LineGraph from './LineGraph';


class Left extends React.Component{
    constructor(){
        super();
        this.state = {
        }
    }

    renderGraph = () => {
        return this.state.stats.map((stat, i) => {
            return <LineGraph stat={stat} key={i} />
        })
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8080/analysisSummary')
            .then(res => res.json())
            .then(data =>
                this.setState({stats: data}))
            .catch(err => console.log(err))
    }

    render(){
        return(
            <div className='stat'>
                <h2><u>Summary</u></h2>
                {!this.state.stats ? 'Loading...' : this.state.stats[0].timeSeries.length && this.state.stats[1].timeSeries.length && this.state.stats[2].timeSeries.length ? this.renderGraph() : 'Loading...' }
            </div>
        )
    }

}


export default Left;