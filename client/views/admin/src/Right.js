import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

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
    text: 'QTY',
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
    dataField: 'pageview',
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
        return <BootstrapTable keyField='id' isKey={true} data={this.state.itemData} columns={columns1} />
    }

    renderPageGraph = () => {
        return <BootstrapTable keyField='id' isKey={true} data={this.state.pageData} columns={columns2} />
    }

    componentDidMount() {
        setInterval(() => {
            fetch('http://127.0.0.1:8080/analysisGraph')
                .then(res => res.json())
                .then(data =>
                    this.setState({ itemData: data.itemData, pageData: data.pageData }))
                .catch(err => console.log(err))
        }, 100);
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
                    {!this.state.pageData ? 'Loading...' : this.state.pageData.length ? this.renderPageGraph() : 'Loading...'}
                </div>
            </div>
        )
    }
}

export default Right;