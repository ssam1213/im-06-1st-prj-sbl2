import React from 'react';
import LineGraph from './LineGraph';


class Left extends React.Component{
    constructor(){
        super();
        this.state = {
            // stats: []
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
                {!this.state.stats ?  'Loading...' : this.renderGraph()}
            </div>
        )
    }

}


export default Left;