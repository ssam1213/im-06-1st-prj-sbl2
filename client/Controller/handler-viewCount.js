$(document).ready(()=>{
    $('section.main-content').on('click', 'div.product-box', sendProductInfoToServer);
});

var simplyAnalApp = {
    'server': 'http://127.0.0.1:3000'
};

var sendProductInfoToServer = function () {
    var productCode = $(this).find('a.title:first').attr('id');
    var productName = $(this).find('a.title:first').text();
    var category = $(this).find('a.category:first').text();
    var data = {
        'productCode' : productCode,
        'productName' : productName,
        'category' : category
    };
    sendToServer(data);
};

var sendToServer = data => {
     $.ajax({
        url: simplyAnalApp.server + '/product',
        type:'POST',
        contentType: 'application/json',
        data: JSON.stringify(data)
    })
    .done(()=>console.log('posting data to server is success! and data is ', data))
    .fail((jqXHR, err)=>{
        console.log('fail:', err);
    });
};
