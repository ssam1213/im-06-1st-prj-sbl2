$(document).ready(function () {
    $('#sub').click(loginSubEvent);
    $('#buy').click(buyEvent);
    });


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
        url: 'http://127.0.0.1:3000/',
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
        error: function (error) {
            console.log('error :', error);
        }
    })
}


var buyEvent = function(){
    var a = $('.product').text();
    console.log(a);
      $.ajax({
          type: 'POST',
          url: 'http://127.0.0.1:3000/',
          contentType: 'application/json',
          data: JSON.stringify(a),
          success: (data) => {
              alert('success');
          },
          error: function (error) {
              console.log('error :', error);
          }
      })
    
}

