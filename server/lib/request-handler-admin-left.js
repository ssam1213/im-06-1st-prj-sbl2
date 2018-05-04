const adminModels = require('../models/indexAdmin');
const timeConfig = require('../lib/utility').getTimeConfig();

const sendJson = (res, data) => {
    const json = {
        labels: ['4', '8', '12', '16', '20', '24'],
        header: {
            'year': timeConfig.year,
            'month': timeConfig.month,
            'day': timeConfig.day
        },
        dataset: [
            {
                title: 'revenue',
                current: 0,
                data: {
                    '4': 0,
                    '8': 0,
                    '12': 0,
                    '16': 0,
                    '20': 0,
                    '24': 0
                },
              },
            {
                title: 'pageview',
                current: 0,
                data: {
                    '4': 0,
                    '8': 0,
                    '12': 0,
                    '16': 0,
                    '20': 0,
                    '24': 0
                }
            },
            {
                title: 'visit',
                current: 0,
                data: {
                    '4': 0,
                    '8': 0,
                    '12': 0,
                    '16': 0,
                    '20': 0,
                    '24': 0
                }
            },
        ]
    };

    for (let i in data) {
        if (json.dataset[0].data.hasOwnProperty(data[i].hour)) {
            json.dataset[0].data[data[i].hour] = data[i].sRev;
            json.dataset[1].data[data[i].hour] = data[i].sPview;
            json.dataset[2].data[data[i].hour] = data[i].sVisitor;
            json.dataset[0].current += data[i].sRev;
            json.dataset[1].current += data[i].sPview;
            json.dataset[2].current += data[i].sVisitor;
        }
    }
    // console.log('json :', JON.stringify(json));


    res.send(JSON.stringify(json));
};

module.exports.supplyLeftPanelData = (req, res) => {

    const timeSpan = 4;
    const query = getQueryByTime(timeConfig.year,
        timeConfig.month,
        timeConfig.day,
        timeSpan);

    console.log('query :', query);
    adminModels.left(query, (err, rows) => {
        if (err) throw err;
        sendJson(res, rows);
    });
};

const getQueryByTime = (year,
    month,
    day,
    timeSpan) => {
    const query =
        `
      SELECT t12.date, t12.hour, t12.sRev, t3.sPview, t12.sVisitor 
      FROM (
        SELECT t1.date, t1.hour, t1.sVisitor, t2.sRev 
        FROM (
          SELECT CONCAT(DATE(visitorTime),'-',ROUND(HOUR(visitorTime)/${timeSpan})*${timeSpan}) date, 
                ROUND(HOUR(visitorTime)/${timeSpan})*${timeSpan} hour, 
                COUNT(*) AS sVisitor
          FROM visitors 
          WHERE YEAR(visitorTime)=${year} 
            AND MONTH(visitorTime)=${month} 
            AND DAY(visitorTime)=${day}
          GROUP BY date, hour
          ORDER BY hour
          ) t1 
        LEFT OUTER JOIN 
          (
            SELECT CONCAT(DATE(revenueTime),'-',ROUND(HOUR(revenueTime)/${timeSpan})*${timeSpan}) date,
                ROUND(HOUR(revenueTime)/${timeSpan})*${timeSpan} hour, 
                sum(price) AS sRev 
            FROM revenue 
            WHERE YEAR(revenueTime)=${year}
              AND MONTH(revenueTime)=${month}
              AND DAY(revenueTime)=${day}
            GROUP BY date, hour
            ORDER BY hour
          ) t2
        ON t1.date=t2.date
        ) t12
      LEFT OUTER JOIN
        (
        SELECT CONCAT(DATE(pageTime),'-', ROUND(HOUR(pageTime)/${timeSpan})*${timeSpan}) date,
            ROUND(HOUR(pageTime)/${timeSpan})*${timeSpan} hour, 
            COUNT(*) AS sPview
        FROM pageviews 
        WHERE YEAR(pageTime)=${year}
          AND MONTH(pageTime)=${month} 
          AND DAY(pageTime)=${day}
        GROUP BY date, hour
        ORDER BY hour
        ) t3
      ON t12.date=t3.date
    `;
    return query;
};

