'use strict';

Capira.OverlaysPalette = function() {
    return [{
        category: 'Quizzes',
        overlays: [{
            title: 'Single Answer Quiz',
            description: 'Select a single answer from multiple choices.',
            preview: {
                question: 'Why is 42 the answer to the Ultimate Question of Life, the Universe, and Everything?',
                type: 'single-answer-quiz',
                options: ['Because 42 will do.', 'Because 42 is 101010 in binary code.', 'Because light refracts off water by 42 degrees to create a rainbow.', 'Because light requires <latex-formula>10^{-42}</latex-formula> seconds to cross the diameter of a proton.'],
            },
            template: {
                type: 'single-answer-quiz',
                question: 'Type a Question',
                options: [],
                combinations: [{
                    feedback: 'Not quite...',
                    grade: 2
                }]
            }
        }, {
            notYet: true,
            title: 'Multi Answer Quiz',
            description: 'Select multiple answers from multiple choices.',
            preview: {
                question: 'Why is 42 the answer to the Ultimate Question of Life, the Universe, and Everything?',
                type: 'multi-answer-quiz',
                options: ['Because 42 will do.', 'Because 42 is 101010 in binary code.', 'Because light refracts off water by 42 degrees to create a rainbow.', 'Because light requires <latex-formula>10^{-42}</latex-formula> seconds to cross the diameter of a proton.'],
            },
            template: {
                type: 'multi-answer-quiz',
                question: 'Type a Question',
                options: [],
                combinations: [{
                    feedback: 'Not quite...',
                    grade: 2
                }]
            }
        }, {
            title: 'Short Answer Quiz',
            description: 'Answer by typing a short answer.',
            preview: {
                type: 'short-answer-quiz',
                question: 'Lorem Ipsum?'
            },
            template: {
                type: 'short-answer-quiz',
                question: 'Type a Question',
                combinations: [{
                    feedback: 'Not quite...',
                    grade: 2
                }]
            }
        }, {
            title: 'Math Quiz',
            description: 'Answer by typing a mathematical expression.',
            preview: {
                type: 'math-quiz',
                question: 'Lorem Ipsum?'
            },
            template: {
                type: 'math-quiz',
                question: 'Type a Question',
                combinations: [{
                    feedback: 'Not quite...',
                    grade: 2
                }]
            }
        }, {
            title: 'Hotspot Quiz',
            icon: 'player-icons:my-location',
            description: 'Answer by clicking into the visual context.',
            preview: {
                question: 'Where is Germany on this map?',
                type: 'hotspot-quiz',
                backgroundImage: '/static/img/user-quiz-images/europe.gif',
            },
            template: {
                type: 'hotspot-quiz',
                question: 'Type a Question',
                mask: [],
                combinations: [{
                    feedback: 'Not quite...',
                    grade: 2
                }]
            }
        }, {
            title: 'Draw Quiz',
            icon: 'player-icons:brush',
            description: 'Answer with a sketch.',
            preview: {
                question: 'Where is Germany on this map?',
                type: 'draw-quiz',
                backgroundImage: '/static/img/user-quiz-images/coordinate-system.png',
            },
            template: {
                type: 'draw-quiz',
                question: 'Type a Question',
                combinations: [{
                    feedback: 'Not quite...',
                    grade: 2
                }]
            }
        }, {
            title: 'In-context Quiz',
            description: 'Answer within the visual context.',
            preview: {
                question: 'What is the sum of the two fractions?',
                type: 'custom-quiz',
                backgroundImage: '/static/img/user-quiz-images/fractions.png',
                items: [{
                    id: 'numerator',
                    type: 'input-item',
                    x: .75,
                    y: .1,
                    z: 1,
                    w: .15,
                    fontSize: 5
                }, {
                    id: 'denominator',
                    type: 'input-item',
                    x: 0.75,
                    y: 0.4,
                    z: 1,
                    w: 0.15,
                    fontSize: 5
                }]
            },
            template: {
                type: 'custom-quiz',
                question: 'Type a Question',
                items: [],
                combinations: [{
                    feedback: 'Not quite...',
                    grade: 2
                }]
            }
        }, {
            notYet: true,
            title: 'Number Range Quiz',
            description: 'Select a numerical value from a range.',
            preview: {
                type: 'number-range-quiz',
                question: 'How much is <latex-formula>\\pi</latex-formula>?',
                min: 3,
                max: 3.4,
                step: 0.01
            },
            combinations: [{
                feedback: 'Not quite...',
                grade: 2
            }]
        }]
    }, {
        category: 'Annotations',
        overlays: [{
            title: 'Standard Annotation',
            description: 'Further information and explanations.',
            preview: {
                type: 'standard-annotation',
                heading: 'Capira Socrates Quiz Showcase',
                body: '<h3>Welcome to the first preview of Capira Socrates!</h3>We made this preview to demonstrate the basic functionality.<br/><br/>We would appreciate feedback, to make sure that we are building what instructors need and students love.<br/><br/>Click the play button to go on!',
            },
            template: {
                type: 'standard-annotation',
                heading: 'Heading',
                body: '<h3>Body</h3>...',
            },
        }, {
            notYet: true,
            title: 'Switch Annotation',
            description: 'Select from multiple options to continue.',
            preview: {
                type: 'switch-annotation',
                heading: 'Which type of quiz do you want to learn more about?',
                options: ['Short Answer Quiz', 'Hotspot Quiz', 'Draw Quiz', 'Custom Quiz'],

            }
        }, {
            notYet: true,
            title: 'In-context Annotation',
            description: 'Further information and explanations within the visual context.',
            preview: {
                type: 'switch-annotation',
                heading: 'Which type of quiz do you want to learn more about?',
                options: ['Short Answer Quiz', 'Hotspot Quiz', 'Draw Quiz', 'Custom Quiz'],

            }
        }]
    }];
};
