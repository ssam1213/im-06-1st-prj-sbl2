$(document).ready(function () {
    $('#sub').click(loginSubEvent);
    $('#buy').click(buyEvent);
});

var simplyAnalApp = {
    'server': 'http://127.0.0.1:8080'
};

var loginSubEvent = function(){
    var login = {
        mail: $('#email2').val(),
        password: $('#password2').val(),
        name: $('#name').val(),
        birthDate: $('#birthdate').val()
    };
        console.log(login)
    $.ajax({
        type: 'POST',
        url: simplyAnalApp.server + '/register',
        contentType: 'application/json',
        data: JSON.stringify({
            mail: login.mail,
            password: login.password,
            name: login.name,
            birthDate: login.birthDate
        }),
        success: (data) => {
            alert('success');
        },
        error: (error) => {
            console.log('error :', error);
        }
    })
}


var buyEvent = function(){
    var buyItem ={
       product : $('.product').text(),
        price: $('.price').text(),
    }
    console.log(buyItem);
      $.ajax({
          type: 'POST',
          url: simplyAnalApp.server + '/order',
          contentType: 'application/json',
          data: JSON.stringify({
              product: buyItem.product,
              price: buyItem.price
          }),
          success: (data) => {
              alert('success');
          },
          error: (error) => {
              console.log('error :', error);
          }
      })
    }
