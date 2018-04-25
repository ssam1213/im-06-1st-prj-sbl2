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

    
}




// $.post('http://localhost:5000/',
        //         {
        //             name: "Donald Duck",
        //             city: "Duckburg"
        //         },
        //         crossDomain: true,
        //         function (data, status) {
        //             alert("Data: " + data + "\nStatus: " + status);
        //         });





// var loginSubEvent = function(){
    // var login = {
    //     email: $('#email2').val(),
    //     password: $('#password2').val(),
    //     name: $('#name').val(),
    //     birthdate: $('#birthdate').val()
    // }
//     console.log(login); 
// }



// $(document).on('click', '#sub', loginSubEvent);

// $(document).ready(function () {
//     $(document).click('#sub', loginSubEvent);
//     var loginSubEvent = function () {
//         var login = {
//             email: $('#email2').val(),
//             password: $('#password2').val(),
//             name: $('#name').val(),
//             birthdate: $('#birthdate').val()
//         }
//         console.log(login);
//     }
// })







// var app = {
//     server : ,
//     init: () => $(document).ready(function () {
//         $(document).on('click', '#sub', app.send)

//         }),
//     send : function(data){
//         console.log(data);
//         $.ajax({
//             type : 'POST',
//             url : app.server,
//             contentType : application/json,
//             data : JSON.stringify({
//                 email: login.email,
//                 password: login.password,
//                 name: login.name,
//                 birthdate: login.birthdate
//             }),
//             success(data) => {console.log(JSON.parse(data))}
//         });
//     }
// }

// var app = {
//     server: ,
//     init: () => $(document).ready(function () {
//         $(document).on('click', '#sub', app.send)

//     }),
//     send: function (data) {
//         console.log(data);
//         $.ajax({
//             type: 'POST',
//             url: app.server,
//             contentType: application / json,
//             data: JSON.stringify({
//                 email: login.email,
//                 password: login.password,
//                 name: login.name,
//                 birthdate: login.birthdate
//             }),
//             success(data) => { console.log(JSON.parse(data)) }
//         });
//     }
// }



// var app = {
//     server: 'http://127.0.0.1:5000/',
//     init: () => $(document).ready(function () {
//         $('#sub').click(app.loginSubEvent);
//     }),
//     loginSubEvent: function () {
//         var login = {
//             email: $('#email2').val(),
//             password: $('#password2').val(),
//             name: $('#name').val(),
//             birthdate: $('#birthdate').val()
//         };
//         console.log(login)
//         $.ajax({
//             type: 'POST',
//             url: app.server,
//             contentType: 'application/json',
//             data: JSON.stringify({
//                 email: login.email,
//                 password: login.password,
//                 name: login.name,
//                 birthdate: login.birthdate
//             }),
//             success: (data) => {
//                 alert('success');
//             },
//             error: function (e) { alert('fail') }
//         });
//     }
// }

// app.init();