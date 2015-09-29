window.unit = {
    youtubeId: 'z19VnM9w0ZE',
    overlays: [{
        id: 123333,
        events: [{
            type: 'HIDEAFTER',
            start: 1,
            duration: 1512,
        }],
        type: 'live-hotspot-quiz',
        x: 0,
        y: 0,
        r: 0,
    }, {
        id: 123123123123,
        events: [{
            type: 'HIDEAFTER',
            start: 10,
            duration: 15,
        }],
        type: 'live-hotspot-quiz',
        x: 0.55,
        y: 0.70,
        r: 0.2,
        combinations: [{
            correct: true,
            feedback: {
                caption: 'C-arm hits table column!',
                reaction: [{
                    type: 'showOverlay',
                    target: 42
                }]
            },
            reaction: [{
                type: 'stop',
            }]
        }]
    }, {
        id: 42,
        events: [{
            type: 'NO-TIMER',
        }],
        question: 'What is question 1, and how does a really long question look like with potentially multiple line breaks?',
        type: 'single-answer-quiz',
        options: ['This is Option 1', 'This is Option 2', 'This is Option 3 and correct!', 'This is Option and has a Reaction!'],
        combinations: [{
            value: 0,
            correct: false,
        }, {
            value: 1,
            correct: false,
            feedback: {
                caption: 'Does this really look like a cable to you?!'
            },
        }, {
            value: 2,
            correct: true,
            feedback: {
                caption: 'This was correct!',
                reaction: [{
                    type: 'play'
                }, {
                    type: 'showOverlay',
                    target: 123333
                }]

            },
        }, {
            value: 3,
            correct: false,

        }]
    }]
};
