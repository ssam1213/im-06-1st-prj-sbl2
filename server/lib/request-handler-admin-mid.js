var adminModels = require('../models/indexAdmin');

const sendJSON = (res, data) => {
  const json = {
    labels: ['4', '8', '12', '16', '20', '24'],
    dataset: [
      {
        label: 'visit',
        data: {
          '4': 0,
          '8': 0,
          '12': 0,
          '16': 0,
          '20': 0,
          '24': 0
        },
        backgroundColor: ['#FF6384']
      },
      {
        label: 'revenue',
        data: {
          '4': 0,
          '8': 0,
          '12': 0,
          '16': 0,
          '20': 0,
          '24': 0
        },
        borderColor: ['#FFCE56']
      }
    ]
  };

  for (let i in data) {
    if (json.dataset[0].data.hasOwnProperty(data[i].hour)) {
      json.dataset[0].data[data[i].hour] = data[i].visit;
      json.dataset[1].data[data[i].hour] = data[i].revenue;
    }
  }
  res.send(JSON.stringify(json));
};

module.exports.supplyMidPanelData = (req, res) => {
  const query =
    `
      SELECT 
      t1.hour, t2.visit, t1.revenue 
      FROM (
      SELECT
        (FLOOR(HOUR(revenueTime)/4)+1)*4 AS hour,
        SUM(price) AS revenue
      FROM
        revenue
      WHERE
        DATE(revenueTime) = CURDATE()
      GROUP BY
        hour
      ) AS t1
      LEFT JOIN
      (SELECT 
        (FLOOR(HOUR(visitorTime)/4)+1)*4 AS hour, 
        COUNT(id) AS visit
      FROM 
        visitors
      WHERE
        DATE(visitorTime) = CURDATE()
      GROUP BY 
        hour
      ) AS t2
      ON
      t1.hour = t2.hour;
    `;
  adminModels.mid(query, (err, rows) => {
    if (err) throw err;
    sendJSON(res, rows);
  });
};