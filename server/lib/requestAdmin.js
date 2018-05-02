var adminModels = require('../models/indexAdmin');

module.exports.mid = function (req, res) {
    console.log('mid model activated')
    var data1 = {
        labels: [],
        datasets: [
        {
            label: 'visit',
            data: [],
            backgroundColor: ['#FF6384']
        },
        {
            label: 'revenue',
            data:[],
            borderColor: ['#FFCE56']
        }
        ]
    }
    // var time = ["'2018-05-01 00:00:00' and '2018-05-01 03:59:59';", 
    //             "'2018-05-01 04:00:00' and '2018-05-01 07:59:59';", 
    //             "'2018-05-01 08:00:00' and '2018-05-01 11:59:59';", 
    //             "'2018-05-01 12:00:00' and '2018-05-01 15:59:59';", 
    //             "'2018-05-01 16:00:00' and '2018-05-01 19:59:59';", 
    //             "'2018-05-01 20:00:00' and '2018-05-01 23:59:59';"];
    // var queryRevenue = 'SELECT sum(id) FROM visitors WHERE visitorTime BETWEEN';
    // var queryVisitors = 'SELECT sum(id) FROM visitors WHERE visitorTime BETWEEN ';
    // var queryRevenue = 'SELECT sum(price) FROM revenue WHERE revenueTime BETWEEN ';
    // var queryVisitors = 'SELECT count(token) FROM visitors WHERE visitorTime BETWEEN ';

    // for (var i = 0; i < time.length; i++) {
    //     var query = queryRevenue + time[i];
    //     console.log('query : ', query);
    //     adminModels.mid(query, function (err, rows) {
    //         if (err) {
    //             throw err;
    //         } else {
    //             data1.dataset[1].data.push(rows);
    //         }
    //     })
    //     var query = queryVisitors + time[i];
    //     console.log('query : ', query);
    //     adminModels.mid(query, function (err, rows) {
    //         if (err) {
    //             throw err;
    //         } else {
    //             data1.dataset[0].data.push(rows);
    //         }
    //     })
    // }
    // console.log('data1 : ', data1);
    res.send(JSON.stringify(data1));
}

module.exports.left = function (req, res) {
    console.log('left model activated')
    var stats = [
        {
            'title': 'Revenue',
            'current': 0,
            'timeSeries': []
        },
        {
            'title': 'PageViews',
            'current': 0,
            'timeSeries': []
        },
        {
            'title': 'Visitors',
            'current': 0,
            'timeSeries': []
        },
    ];

    // var time = ["'2018-05-01 00:00:00' and '2018-05-01 03:59:59';", 
    //             "'2018-05-01 04:00:00' and '2018-05-01 07:59:59';", 
    //             "'2018-05-01 08:00:00' and '2018-05-01 11:59:59';", 
    //             "'2018-05-01 12:00:00' and '2018-05-01 15:59:59';", 
    //             "'2018-05-01 16:00:00' and '2018-05-01 19:59:59';", 
    //             "'2018-05-01 20:00:00' and '2018-05-01 23:59:59';"];
    // var queryRevenue = 'SELECT sum(price) FROM revenue WHERE revenueTime BETWEEN ';
    // var queryPageviews = 'SELECT count(pageName) FROM pageviews WHERE pageTime BETWEEN ';
    // var queryVisitors = 'SELECT count(token) FROM visitors WHERE visitorTime BETWEEN ';

    // var queryRe = 'SELECT sum(price) FROM revenue;';
    // var queryPa = 'SELECT count(pageName) FROM pageviews;';
    // var queryVi = 'SELECT count(token) FROM visitors;';

    // adminModels.left(queryRe, function (err, rows) {
    //     if (err) {
    //         throw err;
    //     } else {
    //         stats[0].current = rows;
    //     }
    // })

    // adminModels.left(queryPa, function (err, rows) {
    //     if (err) {
    //         throw err;
    //     } else {
    //         stats[1].current = rows;
    //     }
    // })

    // adminModels.left(queryVi, function (err, rows) {
    //     if (err) {
    //         throw err;
    //     } else {
    //         stats[2].current = rows;
    //     }
    // })

    // for (var i = 0; i < time.length; i++) {
    //     var query = queryRevenue + time[i];
    //     console.log('query : ', query);
    //     adminModels.left(query, function (err, rows) {
    //         if (err) {
    //             throw err;
    //         } else {
    //             stats[0].timeSeries.push(rows);
    //         }
    //     })
    //     var query = queryPageviews + time[i];
    //     console.log('query : ', query);
    //     adminModels.left(query, function (err, rows) {
    //         if (err) {
    //             throw err;
    //         } else {
    //             stats[1].timeSeries.push(rows);
    //         }
    //     })
    //     var query = queryVisitors + time[i];
    //     console.log('query : ', query);
    //     adminModels.left(query, function (err, rows) {
    //         if (err) {
    //             throw err;
    //         } else {
    //             stats[2].timeSeries.push(rows);
    //         }
    //     })
    // }
    // console.log('stats : ', stats);
    res.send(JSON.stringify(stats));
}

module.exports.right = function (req, res) {
    console.log('right model activated')
    var result = {
        itemData: [
            // { id: 1, name: '', price: 0, visit: 0 },
            // { id: 2, name: '', price: 0, visit: 0 },
            // { id: 3, name: '', price: 0, visit: 0 },
            // { id: 4, name: '', price: 0, visit: 0 }
        ],
        pagaData: [
            // { id: 1, pages: '', pageView: 0, avgTime: 33 },
            // { id: 2, pages: '', pageView: 0, avgTime: 180 },
            // { id: 3, pages: '', pageView: 0, avgTime: 77 },
            // { id: 4, pages: '', pageView: 0, avgTime: 90 }
        ]
    }
   

    // var item = '';
    // var queryItem = 'SELECT itemName, count(itemName) AS pageView FROM pageviews GROUP BY pageName ORDER BY count(pageName) DESC;';
    // adminModels.right(queryItem, function (err, rows) {
    //     if (err) {
    //         throw err;
    //     } else {
    //         item = rows[0];
    //     }
    // })
    // var queryItemPrice = `SELECT sum(price) FROM revenue WHERE itemName = '${item}'`;
    // adminModels.right(queryItemPrice, function (err, rows) {
    //     if (err) {
    //         throw err;
    //     } else {
    //         result.itemData[0].price = rows;
    //     }
    // })
    // var queryItemVisits = `SELECT count(token) FROM visitors LEFT JOIN pageviews ON pageviews.visitors_id = visitors.id LEFT JOIN revenue ON revenue.pageviews_id = pageviews.id WHERE itemName = '${item}';`;
    // adminModels.right(queryItemVisits, function (err, rows) {
    //     if (err) {
    //         throw err;
    //     } else {
    //         result.itemData[0].visit = rows;
    //     }
    // })

    // var page = '';
    // var queryPage = 'SELECT pageName, count(pageName) AS pageView FROM pageviews GROUP BY pageName ORDER BY count(pageName) DESC;';
    // adminModels.right(queryPage, function (err, rows) {
    //     if (err) {
    //         throw err;
    //     } else {
    //         page = rows[0];
    //     }
    // })
    // var queryPageview = `SELECT count(pageTime) FROM pageviews WHERE pageName = '${page}';`;
    // adminModels.right(queryPageview, function (err, rows) {
    //     if (err) {
    //         throw err;
    //     } else {
    //         result.pageData[0].pageview = rows;
    //     }
    // })
    res.send(JSON.stringify(result))
}

