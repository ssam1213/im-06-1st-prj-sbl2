import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

const columns1 = [{
    dataField: 'id',
    text: 'No.'
}, {
    dataField: 'name',
    text: 'Item',
    sort: true
},{
    dataField: 'price',
    text: 'Price',
    sort: true
}, {
    dataField: 'visit',
    text: 'Visits',
    sort: true
}
];

const columns2 = [{
    dataField: 'id',
    text: 'No.'
}, {
    dataField: 'pages',
    text: 'pagename',
    sort: true
}, {
    dataField: 'pageView',
    text: 'Pageview',
    sort: true
}, {
    dataField: 'avgTime',
    text: 'Avg.Time',
    sort: true
}
];


class Right extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }
    
    renderItemGraph = () => {
        return <BootstrapTable keyField='id' data={this.state.itemData} columns={columns1} />
    }

    renderPageGraph = () => {
        return <BootstrapTable keyField='id' data={this.state.pagaData} columns={columns2} />
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8080/analysisGraph')
            .then(res => res.json())
            .then(data =>
                this.setState({ itemData: data.itemData, pagaData: data.pagaData }))
            .catch(err => console.log(err))
    }
    
    render(){
        return (
            <div id='right'>
                <div id = 'rightTop'>
                    <h2><u>Top Rated items</u></h2>
                    {!this.state.itemData ? 'Loading...' : this.state.itemData.length ? this.renderItemGraph() : 'Loading...' }
                    
                </div>
                <div id='rightBottom'>
                    <h2><u> Top Landing pages </u></h2>
                    {!this.state.pagaData ? 'Loading...' : this.state.pagaData.length ? this.renderPageGraph() : 'Loading...'}
                </div>
            </div>
        )
    }
}


export default Right;