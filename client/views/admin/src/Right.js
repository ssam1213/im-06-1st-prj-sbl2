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
    constructor(props){
        super(props);
        this.state = {
            itemData : [
                // {id: 1, name: 'item1', price: 3000, visit: 5000},
                // {id: 2, name: 'item2', price: 7000, visit: 8000},
                // {id: 3, name: 'item3', price: 2000, visit: 10000},
                // { id: 4, name: 'item4', price: 1000, visit: 15000 }
            ],
            pagaData : [
                // {id: 1, pages: 'page1', pageView: 70, avgTime: 33},
                // {id: 2, pages: 'page2', pageView: 500, avgTime: 180},
                // {id: 3, pages: 'page3', pageView: 100, avgTime: 77},
                // { id: 4, pages: 'page4', pageView: 100, avgTime: 90 }
            ]
        }
    }

    componentDidMount() {
        console.log(1);
        fetch('http://127.0.0.1:8080/analysisGraph')
            .then(res => res.json())
            .then(data =>
                this.setState({ itemData: data.itemData, pagaData: data.pagaData }))
        // .then(data => console.log('data 1 :', data))

        // .then(json => 
        //     this.setState({data1 : json})
        // );
    }
    
    render(){
        // console.log(2);
        // console.log('state :' , this.state)
        return (
            <div id='right'>
                <div id = 'rightTop'>
                    <h2><u>Top Rated items</u>  </h2>
                    <BootstrapTable keyField='id' data={this.state.itemData} columns={columns1} />
                </div>
                <div id='rightBottom'>
                    <h2><u> Top Landing pages </u></h2>
                    <BootstrapTable keyField='id' data={this.state.pagaData} columns={columns2} />
                </div>
            </div>
        )
    }
}


export default Right;