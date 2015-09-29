window.unit = {
    youtubeId: 'RYjZLmDQyeU',
    overlays: [{
        id: 232,
        events: [{
            type: 'STOP',
            start: 4.6,
        }],

        question: 'Schätzen Sie wie viele Graustufen das menschliche Auge ungefähr erkennen kann:',
        type: 'number-range-quiz',
        min: 1,
        max: 100,
        combinations: [{
            value: '#geq 30 #and #leq 50',
            correct: true,
            feedback: {
                caption: 'Richtig! Wir können zwischen 30 und 50 Graustufen unterscheiden.',
            },
        }, {
            value: '#geq 15 #and #lt 30',
            correct: false,
            feedback: {
                caption: 'Unter normalen Umständen können wir schon ein bisschen mehr Graustufen erkennen',
                reaction: {
                    type: 'showOverlay',
                    target: 123
                }
            },
        }, {
            value: '#lt 15',
            correct: false,
            feedback: {
                caption: 'Wir können deutlich mehr Graustufen unterscheiden! ',
                reaction: {
                    type: 'showOverlay',
                    target: 123
                }
            },
        }, {
            value: '#gt 50 #and #lt 75',
            correct: false,
            feedback: {
                caption: 'Es sind eher ein bisschen weniger...',
                reaction: {
                    type: 'showOverlay',
                    target: 123
                }
            },
        }, {
            value: '#geq 75',
            correct: false,
            feedback: {
                caption: 'Nein wir können doch deutlich weniger Graustufen erkennen...',
                reaction: {
                    type: 'showOverlay',
                    target: 123
                }
            },
        }]

    }, {
        id: 123,
        events: [{
            type: 'NO-TIMER',
            start: 5,
        }],

        backgroundColor: 'white',
        type: 'custom-annotation',
        items: [{
            id: 1,
            type: 'image-item',
            x: 0.3,
            y: 0.3,
            z: 1,
            w: 0.4,
            h: 0.4,
            src: 'http://www.dma.ufg.ac.at/assets/7367/intern/nurraster.gif'
        }],
        reaction: {
            type: 'showOverlay',
            target: 232
        }
    }]
};
