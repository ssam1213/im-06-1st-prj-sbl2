const adminModels = require('../models/indexAdmin');

module.exports.supplyRightPanelData = (req, res) => {
  const queries = {
    rightTop:
      `
        SELECT
          @N := @N + 1 id,
          itemTable.name name,
          itemTable.price price,
          itemTable.visit visit
        FROM (
          SELECT
            @N := 0,
            itemName AS name,
            SUM(price) AS price,
            COUNT(price) AS visit
          FROM revenue
          LEFT JOIN pageviews
          ON revenue.pageviews_id=pageviews.id
          WHERE DATE(revenueTime) = CURDATE()
          GROUP BY name
          ORDER BY price DESC
          LIMIT 5
        ) AS itemTable;
      `,
    rightBottom:
      `
        SELECT 
        @N := @N + 1 id,
        pageTable.pages pages,
        pageTable.pageview pageview,
        pageTable.avgTime avgTime
        FROM (
          SELECT
            @N := 0,
            pageName AS pages,
            COUNT(id) AS pageview,
            FLOOR(AVG(id)*60) AS avgTime
          FROM pageviews
          WHERE DATE(pageTime) = CURDATE()
          GROUP BY pages
          ORDER BY pageview DESC 
          LIMIT 5
        ) AS pageTable;
      `
  };
  const json = {
    itemData: '',
    pageData: ''
  };
  adminModels.right(queries.rightTop)
    .then((itemData) => {
      json.itemData = itemData;
      adminModels.right(queries.rightBottom)
        .then((pageData) => {
          json.pageData = pageData;
          res.send(JSON.stringify(json));
        });
    });
};
