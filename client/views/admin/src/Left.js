import React from 'react';
import LineGraph from './LineGraph';



class Left extends React.Component{
    constructor(){
        super();
        this.state = {
            stats: [
                // {
                //     'title': 'Revenue',
                //     'current': 1000,
                //     'timeSeries': [10, 11, 15, 13, 14, 17, 19],
                // },
                // {
                //     'title': 'PageViews',
                //     'current': 55,
                //     'timeSeries': [47, 36, 29, 33, 36, 48, 51],
                // },
                // {
                //     'title': 'Visits',
                //     'current': 85,
                //     'timeSeries': [67, 55, 49, 63, 56, 78, 61],
                // },
                // {
                //     'title': 'Visitors',
                //     'current': 35,
                //     'timeSeries': [47, 36, 29, 33, 36, 48, 51],
                // },
                // {
                //     'title': 'Sales',
                //     'current': 1055,
                //     'timeSeries': [721, 536, 629, 773, 536, 648, 851],
                // }
            ]
        }
    }

    componentDidMount() {
        console.log(1);
        fetch('http://127.0.0.1:8080/analysisSummary')
            .then(res => res.json())
            .then(data =>
                this.setState({stats: data}))
    }

    render(){
        return(
            <div className='stat'>
                <h2><u>Summary</u></h2>
                {
                    this.state.stats.map((stat, i) => {
                        return <LineGraph stat={stat} key={i} />
                    })
                }
            </div>
        )
    }




}

// var Left = ({ stats }) => {
//     stats = [
//         {
//             'title': 'Revenue',
//             'current': 1000,
//             'timeSeries': [10, 11, 15, 13, 14, 17, 19],
//         },
//         {
//             'title': 'PageViews',
//             'current': 55,
//             'timeSeries': [47, 36, 29, 33, 36, 48, 51],
//         },
//         // {
//         //     'title': 'Visits',
//         //     'current': 85,
//         //     'timeSeries': [67, 55, 49, 63, 56, 78, 61],
//         // },
//         {
//             'title': 'Visitors',
//             'current': 35,
//             'timeSeries': [47, 36, 29, 33, 36, 48, 51],
//         },
//         // {
//         //     'title': 'Sales',
//         //     'current': 1055,
//         //     'timeSeries': [721, 536, 629, 773, 536, 648, 851],
//         // }
//     ];
    
//     return (
//         <div className='stat'>
//             <h2><u>Summary</u></h2>
//                 {
//                     stats.map((stat, i) => {
//                         return <LineGraph stat={stat} key={i} />})
//                 }
//         </div>
//     );
// };

export default Left;