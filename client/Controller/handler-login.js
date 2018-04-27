$(document).ready(function () {
    $('#login').click(loginEvent);
});

var simplyAnalApp = {
    'server': 'http://127.0.0.1:8080'
};

var loginEvent = function () {
    var login = {
        mail: $('#email-login').val(),
        password: $('#password-login').val(),
    };

    console.log(login);
    $.ajax({
        type: 'POST',
        url: simplyAnalApp.server + '/login',
        contentType: 'application/json',
        data: JSON.stringify({
            mail: login.mail,
            password: login.password,
        }),
        error: (error) => {
            console.log('error :', error);
        }
    })
}