import React from 'react';
var LineChart = require("react-chartjs").Line;

var a = [
    { visit: 50, revenue: 1000},
    { visit: 20, revenue: 500},
    {visit: 70, revenue: 4000}
    ];


var MyComponent = React.createClass({
    render: function () {
        return <LineChart data={chartData} options={chartOptions} width="600" height="250" />
    }
});



// class Mid extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {

//         };
//     }
    
//     render() {
//         return (
//             <div>
//                 <div>

//                 </div>
//                 <div>

//                 </div>

//             </div>
//         )
//     }
// }





// export default Mid;