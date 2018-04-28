$(document).ready(() => {
    $('section.main-content').on('click', 'div.product-box', sendProductInfoToServer);
});

var simplyAnalApp = {
    'server': 'http://127.0.0.1:8080'
};

var sendProductInfoToServer = function () {
    var productCode = $(this).find('a.title:first').attr('id');
    var productName = $(this).find('a.title:first').text();
    var category = $(this).find('a.category:first').text();
    var data = {
        'productCode': productCode,
        'productName': productName,
        'category': category
    };
    sendToServer(data);
};

var sendToServer = data => {
    fetch(simplyAnalApp.server + '/' + data.productCode, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => {
        if (!response.redirected) {
            console.log('url:', response.url);
        }
    });
};