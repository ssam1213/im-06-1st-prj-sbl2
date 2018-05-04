$(document).ready(function () {
    $('#login').click(loginEvent);
    $('#logout').click(logOutEvent);
});

var simplyAnalApp = {
    'server': 'http://13.125.241.31:8080'
};

var loginEvent = function () {
    var login = {
        mail: $('#email-login').val(),
        password: $('#password-login').val(),
    };
    $.ajax({
        type: 'POST',
        url: simplyAnalApp.server + '/login',
        contentType: 'application/json',
        data: JSON.stringify({
            mail: login.mail,
            password: login.password,
        }),
        success: (response) => {
            console.log('response', response);
            if (response.result === 'redirect') {
                window.location.replace('/views/shoppingmall/logout.html');
            }
        },
        error: (error) => {
            console.log('error :', error);
        }
    })
}

var logOutEvent = function (session) {
    $.ajax({
        type: "GET",
        url: simplyAnalApp.server + '/logout',
        success: (response) => {
            if (response.result === 'redirect') {
                window.location.replace('/views/shoppingmall/index.html');
            }
        }
    })
}