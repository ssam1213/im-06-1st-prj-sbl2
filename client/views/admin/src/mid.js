import React from 'react';
var LineChart = require("react-chartjs").Line;

// var a = [
//     { visit: 50, revenue: 1000},
//     { visit: 20, revenue: 500},
//     {visit: 70, revenue: 4000}
//     ];

var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};

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