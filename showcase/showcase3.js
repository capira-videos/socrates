window.unit = {
    youtubeId: '9BshzMOJKRg',
    overlays: [{
        id: 42,
        events: [{
            type: 'STOP',
            start: 5,
        }],
        question: 'What is question 1, and how does a really long question look like with potentially multiple line breaks?',
        type: 'single-answer-quiz',
        options: ['This is Option and will seek', 'This is Option 2', 'This is Option 3 and correct!', 'This is Option and has a Reaction!'],
        combinations: [{
            value: 0,
            correct: false,
            reaction: {
                type: 'seekTo',
                target: '2'
            },
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
                reaction: {
                    type: 'showOverlay',
                    target: '1221111'
                }
            },
        }, {
            value: 3,
            correct: false,
            reaction: {
                type: 'showOverlay',
                target: '4242'
            },
        }]

    }, {
        id: 1211,
        events: [{
            type: 'STOP',
            start: 2.35,
        }],
        question: 'Where is the Battery Cable of this Drone?',
        type: 'hotspot-quiz',
        mask: 'data:image/gif;base64,R0lGODdhkAHhALMAAAAAAAAA//8AAAAF9QAI7gAU1gA7igBAgABXUQBiOgBwHwB8AACAAP///wAAAAAAACH5BAkAAA4ALAAAAACQAeEAAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/C4fE6v2+/4vH7P7/v/gIGCg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+goaKjpKWmp6ipqqusra6vsLGys7S1tre4ubq7vL2+v8DBwsPExcbHyMnKy8zNzs/Q0dLT1NXW19jZ2tvc3d7f4OHi4+Tl5ufo6err7O3u7/Dx8vP09fb3+Pn6+/z9/v8AAwocSLCgwYMIEypcyLChw4cQI0qcSLGiRRgCMgq4SEmjx4wc/x19HBlS0ciTIEsWQslS5SCWMF0CgklTph+aNZkE2GmTB86cSXYKDdAzx0+gRoYOLWrjKE4kSpcyneEUKZGoQqdSrdoSalStW7meVKIUbFixH5dkNSsD7Vi2b9yShOtGblpTZdPZ9VgKK1G9ezeS8vv3XGDBowjjmKsrcF+sN7rmcjwYcg2rtvbizUvj5y65qKR2dtpY7DSupUlLQ9sLszPQdONojh13Nu01hxHfRpN73VpTuXWXG0oAAfDe56IaYFAqeHLlDJiPcm4Oq4LopKhXH1ogunRR2s0N2DkggffsyM8tOHBgwfkx2J+kN+f9vZj6UCifq28fDP/vTOhH3/9/8PGXH2zoEHifgvKxpg6D/kHohGnrSOiFhROqVqGBC+JnxVPtYMiFiLt1QGIW/wFYIggnYtHiihmkGCGHMIYg4xc31shijiimqKKOHqS4gBY+xgfkjjxOUaSRRyLJ35BULMlkk0EuKYWUP1JpopROYJmllltyqYSXYJbg5ZRCYAllmSSciaYParJ5gpv9WUCmCW7KOSedNErA559urqmnmYAWamieg+556KKMeidoom02KumhkKow6aWIVmopppy+qCkJ7nWK6ac1hCqqoaTmYOqpYqYKBKv1PerqEKseKuusTyx5K6689urrr8AGK+ywxBZr7LHIJqvsssw26+xHs9BGK+201FZr7bXYZqvtttx26+234IYr7rjklmvuueimq+667Lbr7rvwxivvvPTWa++9+Oar77789uvvvwAHLPDABBfMTAQAOw==',
        combinations: [{
            value: 0,
            correct: false,
            feedback: {
                caption: 'Nope, totally wrong!'
            },
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
            },
        }, {
            value: 3,
            correct: false,
            feedback: {
                caption: 'Nope those are the LEDs!',
            },
        }],

    }, {
        id: 123,
        events: [{
            type: 'STOP',
            start: 22,
        }],
        question: 'What is question 1, and how does a really long question look like with potentially multiple line breaks?',
        type: 'multi-answer-quiz',
        options: ['This is Option 1', 'This is Option 2', 'This is Option 3 and correct!', 'This is Option 4'],
        combinations: [{
            value: [0,2],
            correct: false,
            feedback: {
                caption: 'standard'
            },
        }, {
            value: [1],
            correct: false,
            feedback: {
                caption: 'Does this really look like a cable to you?!'
            },
        }, {
            value: [0,2],
            correct: true,
            feedback: {
                caption: 'This was correct!',
                reaction: {
                    type: 'showOverlay',
                    target: '123123123'
                }
            },
        }, {
            value: [3],
            correct: false,
            feedback: {
                caption: 'Nope those are the LEDs!',
                reaction: {
                    type: 'showOverlay',
                    target: '123123123'
                }
            },
        }]
    }, {
        id: 221,
        events: [{
            type: 'STOP',
            start: 10,
        }],
        question: 'What is question 1 ?',
        type: 'short-answer-quiz',
        combinations: [{
            value: 'correct answer',
            correct: true,
            feedback: {
                caption: 'Yep, this is correct!'
            }
        }]

    }, {
        id: 232,
        events: [{
            type: 'STOP',
            start: 12,
        }],
        question: 'How much is the fish?',
        type: 'number-range-quiz',
        min: 10,
        max: 100,
        combinations: [{
            value: '#approx 50 #epsilon 5',
            correct: true,
            feedback: {
                caption: 'You are awe.some!!!'
            },
        }, {
            value: '#lt 45',
            correct: false,
            feedback: {
                caption: 'This is too less?!'
            },
        }, {
            value: '#gt 45',
            correct: false,
            feedback: {
                caption: 'This was too much!',
                reaction: {
                    type: 'showOverlay',
                    target: '123123123'
                }
            },
        }]

    }, {
        id: 4242,
        events: [{
            type: 'NO-TIMER',
        }],
        question: 'Wow! Is this a question that will not be triggert by Event-Timer???',
        type: 'math-quiz',
        combinations: [{
            value: '#equals x+1',
            correct: true,
            reaction: {
                type: 'showOverlay',
                target: '42'
            }
        }]

    }, {
        id: 12211,
        events: [{
            type: 'STOP',
            start: 1.5,
        }],
        question: 'Where is this ball on the right?',
        type: 'draw-quiz',
        combinations: [{
            value: 'data:image/gif;base64,R0lGODdhIAPCAbMAAAAAAACA/wCqqgCq1QC1zQC10gC12wC60gC7zgC/3wDGxgDMzAD//////wAAAAAAACH5BAkAAA4ALAAAAAAgA8IBAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/C4fE6v2+/4vH7P7/v/gIGCg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+goaKjpKWmp6ipqqusra6vsLGys7S1tre4ubq7vL2+v8DBwsPExcbHyMnKy8zNzs/Q0dLT1NXW19jZ2tvc3d7f4OHi4+Tl5ufo6err7O3u7/Dx8vP09fb3+Pn6+/z9/v8AAwocSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48g/0OKHEmypMmTKFOqXMmypcuXMGPKnEmzps2bOHPq3Mmzp8+fQIMKHUq0qNGjSJMqXcq0qdOnUKNKnUq1qtWrWLNq3cq1q9evYMOKHUu2rNmzaNOqXcu2rdu3cOPKnUu3rt27ePPq3cu3r9+/gAMLHky4sOHDiBMrXsy4sePHkCNLnky5suXLmDNr3sy5s+fPoEOLHk26tOnTqFOrXs26tevXsGPLnk27tu3buHPr3s27t+/fwIMLH068uPHjyJMrX868ufPn0KNLn069uvXr2LNr3869u/fv4MOLH0++vPnz6NOrX8++vfv38OPLn0+/vv37+PPr38+/v///AAYo4P+ABBZo4IEIJqjgggw26OCDEEYo4YQUVmjhhRhmqOGGHHbo4YcghijiiCSWaOKJKKao4oostujiizDGKOOMNNZo44045qjjjjz26OOPQAYp5JBEFmnkkUgmqeSSTDbp5JNQRinllFRWaeWVWGap5ZZcdunll2CGKeaYZJZp5plopqnmmmy26eabcMYp55x01jncAXjaWQyefB6gZzB9Bsrnn7oIamifhNJy6KKBJvrKohMwOqijqUB6gaR+UlrKoR1IqqkohorA6KedcEqCpaRiEioKpqZayaoqwOpqJLKuIOistN4Kg664MlKrC7z2ikiwMjQqbCLEFovosYYkq+z/pMwO4uwMxkYbSLU4YGttH9pmC+223C67Q7fg4iHuuOeWm0e6OrCrbh3kepvnu+u6K2+m9N4R7w375utGvzUA7O8aAlNr78BtHMyvwgirwXDADzd8RsQGfyvxvxajm/HFBFMcg8cci1Hws/iGnDDIL6Bs8hcqt9DyylyMnPLLMGshM7A015zFzSzwrHPMPqeQ889YBM3qxkRPPLSoSyddxbS7Nu00FVDjjPTUZVTd89VYk/Gr1fN23bHRH5AtdtGtbs312VmjKrTUbD+N6chux33y3HiPanccefdt9t4s+4034HoI/jXhiCeu+OKMN+7445BHLvnklFdu+eWYZ675xeacd+7556CHLvropJdu+umop6766qy37vrrsMcu++y012777bjnrvvuvPfu++/ABy/88MQXb/zxyCev/PLMN+/889BHL/301Fdv/fXYZ6/99tx37/334Icv/vjkl2/++einr/767Lfv/vvwxy///PTXb//9+Oev//789+///wAMoAAHSMACGvCACEygAhfIwAY68IEQjKAEJ0jBClrwghjMoAY3yMEOevCDIAyhCEdIwhKa8IQoTKEKV8jCFrrwhTBcRwQAADs=',
            correct: true,
            threshold: 0.95,
            feedback: {
                caption: 'Well done!'
            },
        }],
    }, {
        id: 1221111,
        events: [{
            type: 'NO-TIMER',
        }],
        type: 'custom-annotation',
        items: [{
            id: 1,
            type: 'image-item',
            x: 0.5,
            y: 0.5,
            z: 1,
            w: 0.1,
            h: 0.1,
            src: 'http://qft.physik.hu-berlin.de/wp-content/uploads/2013/10/ThomasKlose-e1424356713620.jpg'
        }, {
            id: 2,
            type: 'image-item',
            x: 0.8,
            y: 0.5,
            z: 1,
            w: 0.1,
            h: 0.1,
            src: 'http://qft.physik.hu-berlin.de/wp-content/uploads/2013/10/ThomasKlose-e1424356713620.jpg'
        }]

    }, {
        id: 12312312312312,
        events: [{
            type: 'HIDEAFTER',
            start: 15,
            duration: 4,

        }],
        type: 'live-hotspot-quiz',
        x: 0.5,
        y: 0.5,
        r: 0.2

    }, {
        id: 333,
        events: [{
            type: 'STOP',
            start: 1,
        }],
        type: 'custom-quiz',
        items: [{
            id: 1,
            type: 'image-item',
            x: 0.5,
            y: 0.5,
            z: 1,
            w: 0.1,
            h: 0.1,
            src: 'http://qft.physik.hu-berlin.de/wp-content/uploads/2013/10/ThomasKlose-e1424356713620.jpg'
        }, {
            id: 2,
            type: 'image-item',
            x: 0.8,
            y: 0.5,
            z: 1,
            w: 0.1,
            h: 0.1,
            src: 'http://qft.physik.hu-berlin.de/wp-content/uploads/2013/10/ThomasKlose-e1424356713620.jpg'
        }]
    }]
};
