$(document).ready(function () {
    indexVisitEvent();
    // // window.onbeforeunload = unloadEvent;
    // window.addEventListener('beforeunload', unloadEvent);
});

var simplyAnalApp = {
    'server': 'http://127.0.0.1:8080'
};

var indexVisitEvent = function () {
    $.ajax({
        type: "GET",
        url: simplyAnalApp.server + '/indexVisit',
        success: (data) => {
            window.localStorage.setItem('session', data.session);
        }
    })
};