import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const columns1 = [{
    dataField: 'id',
    text: 'No.'
}, {
    dataField: 'name',
    text: 'Item'
},{
    dataField: 'price',
    text: 'Price'
}, {
    dataField: 'visit',
    text: 'Visits'
}
];

const columns2 = [{
    dataField: 'id',
    text: 'No.'
}, {
    dataField: 'pages',
    text: 'pagename'
}, {
    dataField: 'pageView',
    text: 'Pageview'
}, {
    dataField: 'avgTime',
    text: 'Avg.Time'
}
];


class Right extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            itemData : [
                {id: 1, name: 'item1', price: 3000, visit: 5000},
                {id: 2, name: 'item2', price: 7000, visit: 8000},
                {id: 3, name: 'item3', price: 2000, visit: 10000}
            ],
            pagaData : [
                {id: 1, pages: 'page1', pageView: 70, avgTime: 33},
                {id: 2, pages: 'page2', pageView: 500, avgTime: 180},
                {id: 3, pages: 'page3', pageView: 100, avgTime: 77},
            ]
        }
    }

    
    render(){
        return (
            <div>
                <div style = {{backgroundColor : 'white', height: '290px'}}>
                    <BootstrapTable keyField='id' data={this.state.itemData} columns={columns1} />
                </div>
                <div style = {{ backgroundColor: 'white', height: '290px' }}>
                    <BootstrapTable keyField='id' data={this.state.pagaData} columns={columns2} />
                </div>
            </div>
        )
    }
}


// class Right extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             itemData : [
//                 {name: 'item1', price: 3000, visit: 5000},
//                 {name: 'item2', price: 7000, visit: 8000},
//                 {name: 'item3', price: 2000, visit: 10000}
//             ],
//             pagaData : [
//                 {pages: 'page1', pageView: 70, avgTime: 33},
//                 {pages: 'page2', pageView: 500, avgTime: 180},
//                 {pages: 'page3', pageView: 100, avgTime: 77},
//             ]
//         }
//     }


//     render() {
//         return (
//             <div>
//                 <div style={{ backgroundColor: 'white', height: '290px'}}>
//                     <h2> <u>Top Rated items</u> </h2>
//                     <strong> Item Price Visit </strong>
//                     <div> {this.state.itemData.map((item, index) => 
//                     <span key ={index}>{item.name} {item.price} {item.visit}<br/></span>
//                     )}
//                     </div>
//                 </div>
//                 <div style={{ backgroundColor: 'white', height: '290px'}}>
//                     <h2><u> Top Landing pages </u></h2>
//                     <strong> Page PageView AverageTime </strong>
//                     <div> {this.state.pagaData.map((item, index) =>
//                         <span key={index}>{item.pages} {item.pageView} {item.avgTime}<br /></span>
//                     )}
//                     </div>
//                 </div>
//             </div>

//         )
//     }
// };









export default Right;