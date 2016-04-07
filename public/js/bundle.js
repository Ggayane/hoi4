$(document).ready(function () {
    setTimeout(fakeLoad, 4000);
    function fakeLoad() {
        $('#loader').fadeOut(1000);
        $('#container').fadeIn(1000);
        //audioElement = new Audio('Panzerkampf');
        //audioElement.play();
    }

    var today = new Date();

    // My target date is this month 30th 9.25pm
    var target = new Date(today);
    target.setDate(30);
    target.setHours(21, 25, 0, 0);

    // Countdown start from yesterday
    var yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    yesterday.setHours(0, 0, 0, 0);

    $('#container > .countdown.countdown-container.container').final_countdown({
        'start': yesterday.getTime() / 1000,
        'end': target.getTime() / 1000,
        'now': today.getTime() / 1000,
        selectors: {
            value_seconds: '.clock-seconds .val',
            canvas_seconds: 'canvas_seconds',
            value_minutes: '.clock-minutes .val',
            canvas_minutes: 'canvas_minutes',
            value_hours: '.clock-hours .val',
            canvas_hours: 'canvas_hours',
            value_days: '.clock-days .val',
            canvas_days: 'canvas_days'
        },
        seconds: {
            borderColor: '#7995D5',
            borderWidth: '6'
        },
        minutes: {
            borderColor: '#ACC742',
            borderWidth: '6'
        },
        hours: {
            borderColor: '#ECEFCB',
            borderWidth: '6'
        },
        days: {
            borderColor: '#FF9900',
            borderWidth: '6'
        }
    }, function () {
// Finish callback
    });

});
