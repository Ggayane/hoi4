$(document).ready(function () {
    audioElement = new Audio('Sabaton - The Price Of A Mile');
    audioElement.play();
    setTimeout(fakeLoad, 4000);
    function fakeLoad() {
        $('#loader').fadeOut(1000);
        $('#container').fadeIn(1000);
        fadeContent();
    }

// quotes

    var quotesArray = [
        'We shall defend our island whatever the cost may be. We shall fight on beaches, landing grounds, in fields, in streets and on the hills. We shall never surrender. - Winston Churchill.',
        'History knows no greater display of courage than that shown by the people of the Soviet Union. - Henry Stimson.',
        'Today we rule Germany, tomorrow, the world. - Adolf Hitler',
        'The atom bomb was no great decision... It was merely another powerful weapon in the arsenal of righteousness. -President Harry Truman'
    ];

    function fadeContent() {
        var rand = Math.floor(Math.random() * quotesArray.length);
        $("#quotes").fadeIn(500).delay(4000).fadeOut(500, function () {
            $(this).html(quotesArray[rand]);
            fadeContent();
        });
    }

// timer
    var today = new Date();
    // My target date is this month 30th 9.25pm
    var target = new Date('06-06-2016');

    $('#container > .countdown.countdown-container.container').final_countdown({
        'start': today.getTime() / 1000,
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
            borderColor: '#748074',
            borderWidth: '6'
        },
        minutes: {
            borderColor: '#7A7748',
            borderWidth: '6'
        },
        hours: {
            borderColor: '#C0AC87',
            borderWidth: '6'
        },
        days: {
            borderColor: '#C0985A',
            borderWidth: '6'
        }
    }, function () {
// Finish callback
    });

});
