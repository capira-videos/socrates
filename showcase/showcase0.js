window.unit = {
    overlays: [{
        id: 1,
        type: "socrates-standard-annotation",
        heading: "Capira Socrates Quiz Showcase",
        body: "<h3>Welcome to the first preview of Capira Socrates!</h3>We made this preview to demonstrate the basic functionality.<br/><br/>We would appreciate feedback, to make sure that we are building what instructors need and students love.<br/><br/>Click the play button to go on!",
        reaction: {
            type: "showOverlay",
            target: 0
        }
    }, {
        id: 0,
        type: "socrates-switch-annotation",
        heading: "What do you want to learn more about?",
        options: ["Quiz types", "Socratic questioning", "Learning math with Capira"],
        reactions: [{
            type: "showOverlay",
            target: "quiz-types"
        }, {
            type: "showOverlay",
            target: "socratic-intro"
        }, {
            type: "showOverlay",
            target: "math-intro"
        }]
    }, {
        id: "quiz-types",
        type: "socrates-switch-annotation",
        heading: "Which type of quiz do you want to learn more about?",
        options: ["Multiple Choice Quiz", "Short Answer Quiz", "Number Range Quiz", "Hotspot Quiz", "Draw Quiz", "Custom Quiz"],
        reactions: [{
            type: "showOverlay",
            target: "multi-choice-intro"
        }, {
            type: "showOverlay",
            target: "short-answer-intro"
        }, {
            type: "showOverlay",
            target: "number-range-intro"
        }, {
            type: "showOverlay",
            target: "hotspot-intro"
        }, {
            type: "showOverlay",
            target: "draw-intro"
        }, {
            type: "showOverlay",
            target: "custom-intro"
        }]
    }]
}, window.addShowcase = function(t) {
    window.unit.overlays = window.unit.overlays.concat(t)
}, window.listMarkup = function(t, e) {
    return e && e.length > 0 ? "<h3>" + t + "</h3><ul>" + e.reduce(function(t, e) {
        return t + "<li>" + e + "</li>"
    }, "") + "</ul>" : ""
}, window.introMarkup = function(t, e, o) {
    var a = t;
    return a += listMarkup("Features", e), a += listMarkup("Hints for the Example", o)
};
addShowcase([{
    id: "short-answer-intro",
    type: "socrates-standard-annotation",
    heading: "Short Answer Quiz",
    body: "The <i>Short Answer Quiz</i> accepts a word or short phrase as an answer. <ul><li>Separate Reactions can be defined for any number of answers.</li><li>Spelling mistakes can be detected.</li></ul>.",
    reaction: {
        type: "showOverlay",
        target: "short-answer"
    }
}, {
    id: "short-answer",
    type: "socrates-short-answer-quiz",
    question: "What is the capital of Germany?",
    combinations: [{
        value: "#nocase Berlin",
        grade: 0,
        feedback: "Correct! Berlin is the capital of Germany.",
        reaction: {
            type: "showOverlay",
            target: 0
        }
    }, {
        value: "#typo Berlin",
        grade: 2,
        feedback: "You are on the right track, but watch your spelling!"
    }, {
        value: "#typo hamburg #and <#not #nocase homburg>",
        grade: 2,
        feedback: "Hamburg a big city in Germany, but it's not the capital!"
    }, {
        value: "#nocase Paris",
        grade: 2,
        feedback: "Nope, that's the capital of France."
    }, {
        value: "#typo Paris",
        grade: 2,
        feedback:  'Do you mean "Paris"?'
    }, {
        value: "#nocase Rome",
        grade: 2,
        feedback: "Nope, that's the capital of Italy."
    }, {
        value: "#nocase London",
        feedback: "Nope, that's the capital of England.",
        grade: 2,
    }, {
        value: "#nocase Germany",
        grade: 2,
        feedback: "Well, no. Germany is not its own capital!",
    }, {
        feedback: "Hint: I know 5 Cities in Europe: Paris, Rome, Hamburg, London and Berlin.",
        grade: 2
    }]
}]);
addShowcase([{
    id: "multi-choice-intro",
    type: "socrates-standard-annotation",
    heading: "Single Answer Quiz",
    body: window.introMarkup("", ["Students can select one from a set of choices"], ["Try out all of the answers"]),
    reaction: {
        type: "showOverlay",
        target: "single-answer"
    }
}, {
    id: "single-answer",
    question: "Why is 42 the answer to the Ultimate Question of Life, the Universe, and Everything?",
    type: "quiz-single-answer",
    options: ["Because 42 will do.", "Because 42 is 101010 in binary code.", "Because light refracts off water by 42 degrees to create a rainbow.", "Because light requires <latex-formula>10^{-42}</latex-formula> seconds to cross the diameter of a proton."],
    combinations: [{
        value: 0,
        grade: 0,
        feedback: "Exactly! Dougles Adams choose 42 randomly.",
        reaction: {
            type: "showOverlay",
            target: "multi-answer-intro"
        }
    }, {
        value: 1,
        grade: 1,
        feedback: "Do you believe he thought that deeply about every random fact? ;)",
        reaction: {
            type: "showOverlay",
            target: "single-answer-hint"
        }
    }, {
        value: 3,
        grade: 2,
        feedback: "Do you believe he thought that deeply about every random fact? ;)",
        reaction: {
            type: "showOverlay",
            target: "single-answer-hint"
        }
    }, {
        grade: 2,
        feedback: 'Not quite, try again!'
    }]
}, {
    id: "single-answer-hint",
    type: "socrates-standard-annotation",
    heading: "Many theories were proposed, but Douglas Adams rejected them all.",
    body: "<i>\"The answer to this is very simple. It was a joke. It had to be a number, an ordinary, smallish number, and I chose that one. Binary representations, base thirteen, Tibetan monks are all complete nonsense. I sat at my desk, stared into the garden and thought '42 will do'. I typed it out. End of story.\"</i>",
    reaction: {
        type: "showOverlay",
        target: "single-answer"
    }
}, {
    id: "multi-answer-intro",
    type: "socrates-standard-annotation",
    heading: "Multi Answer Quiz",
    body: window.introMarkup("", ["Students can select multiple answers from a set of choices", "Feedback can be defined for each combination of choices"], ["Try picking just one color, or color combinations that don’t make orange"]),
    reaction: {
        type: "showOverlay",
        target: "multi-answer"
    }
}, {
    id: "multi-answer",
    question: "Mixing which two colors makes orange?",
    type: "socrates-multi-answer-quiz",
    options: ["Blue", "Yellow", "Red"],
    combinations: [{
        value: "[1, 2]",
        grade: 0,
        feedback: 'Correct!',
        reaction: {
            type: "showOverlay",
            target: 0
        }
    }, {
        value: "[0, 2]",
        grade: 2,
        feedback: "No, that's purple!"
    }, {
        value: "[0, 1]",
        grade: 2,
        feedback: "No, that's green!"
    }, {
        value: "[1] #or [2]",
        grade: 2,
        feedback: "Almost... what color could you add?"
    }, {
        value: "[0]",
        grade: 2,
        feedback: "Hmm... how can you mix one color?"
    }]
}]);
addShowcase([{
    id: "number-range-intro",
    type: "socrates-standard-annotation",
    heading: "Number Range Quiz",
    body: introMarkup("", ["Students select a number from a pre-defined range", "Separate feedback can be defined for any number or range"], ["Try picking numbers that are close, and numbers that are completely wrong"]),
    reaction: {
        type: "showOverlay",
        target: "number-range"
    }
}, {
    id: "number-range",
    type: "socrates-number-range-quiz",
    question: "How much is <latex-formula>\\pi</latex-formula>?",
    min: 3,
    max: 3.4,
    step: .01,
    combinations: [{
        value: "#approx 3.14 #epsilon 0.01",
        grade: 0,
        feedback: "Correct! <latex-formula>\\pi\\approx 3.14</latex-formula>",
        reaction: {
            type: "showOverlay",
            target: 0
        }
    }, {
        value: "#lt 3.1 #or #gt 3.2",
        grade: 2,
        feedback: "That's way off!"
    }, {
        value: "#lt 3.14",
        grade: 2,
        feedback: "That's a little too low..."
    }, {
        value: "#gt 3.14",
        grade: 2,
        feedback: "That's a little too much..."
    }]
}]);
addShowcase([{
    id: "hotspot-intro",
    type: "socrates-standard-annotation",
    heading: "Hotspot Quiz",
    body: window.introMarkup("", ["Students can click directly on a video or image", "Separate feedback can be defined for any location in the quiz"], ["Try clicking on different countries, or in the ocean"]),
    reaction: {
        type: "showOverlay",
        target: "hotspot"
    }
}, {
    id: "hotspot",
    question: "Where is Germany on this map?",
    type: "socrates-hotspot-quiz",
    backgroundImage: "/static/img/user-quiz-images/europe.gif",
    mask: "data:image/gif;base64,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",
    combinations: [{
        value: "#ffd479",
        grade: 0,
        feedback: "Yeah, that's Germany!",
        reaction: {
            type: "showOverlay",
            target: 0
        }
    }, {
        value: "#76d6ff",
        grade: 2,
        feedback: "Nope, that's France!"
    }, {
        value: "#fffc79",
        grade: 2,
        feedback: "Nope, that's Poland!"
    }, {
        value: "#76d6ff",
        grade: 2,
        feedback: "Nope, that's Switzerland!"
    }, {
        value: "#d4fb79",
        grade: 2,
        feedback: "Nope, that's the Netherlands!"
    }, {
        value: "#73fdff",
        grade: 2,
        feedback: "Nope, that's Sweden!"
    }, {
        value: "#73fcd6",
        grade: 2,
        feedback: "Nope, that's Belgium!"
    }, {
        value: "#005493",
        grade: 2,
        feedback: "Nope, that's the ocean!"
    }, {
        value: "#0096ff",
        grade: 2,
        feedback: "Nope, that's Norway!"
    }, {
        value: "#009193",
        grade: 2,
        feedback: "Nope, that's Finland!"
    }, {
        value: "#fffb00",
        grade: 2,
        feedback: "Nope, that's Belarus!"
    }, {
        value: "#ff2600",
        grade: 2,
        feedback: "Nope, that's Ukraine!"
    }, {
        value: "#ff85ff",
        grade: 2,
        feedback: "Nope, that's Russia!"
    }, {
        value: "#00f900",
        grade: 2,
        feedback: "Nope, that's the UK!"
    }, {
        value: "#7a81ff",
        grade: 2,
        feedback: "Nope, that's Italy!"
    }, {
        value: "#942193",
        grade: 2,
        feedback: "Nope, that's Iceland!"
    }, {
        value: "#ff2f92",
        grade: 2,
        feedback: "Nope, that's Portugal!"
    }]
}]);

addShowcase([{
    id: "draw-intro",
    type: "socrates-standard-annotation",
    heading: "Draw Quiz",
    body: window.introMarkup("", ["Students can draw any shape on top of a video or image"]),
    reaction: {
        type: "showOverlay",
        target: "draw"
    }
}, {
    id: "draw",
    question: "Draw a circle with diameter 1 and center at (3, 0).",
    type: "socrates-draw-quiz",
    backgroundImage: "/static/img/user-quiz-images/coordinate-system.png",
    combinations: [{
        value: "data:image/gif;base64,R0lGODdhIAPCAbMAAAAAAACA/wCqqgCq1QC1zQC10gC12wC60gC7zgC/3wDGxgDMzAD//////wAAAAAAACH5BAkAAA4ALAAAAAAgA8IBAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/C4fE6v2+/4vH7P7/v/gIGCg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+goaKjpKWmp6ipqqusra6vsLGys7S1tre4ubq7vL2+v8DBwsPExcbHyMnKy8zNzs/Q0dLT1NXW19jZ2tvc3d7f4OHi4+Tl5ufo6err7O3u7/Dx8vP09fb3+Pn6+/z9/v8AAwocSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48g/0OKHEmypMmTKFOqXMmypcuXMGPKnEmzps2bOHPq3Mmzp8+fQIMKHUq0qNGjSJMqXcq0qdOnUKNKnUq1qtWrWLNq3cq1q9evYMOKHUu2rNmzaNOqXcu2rdu3cOPKnUu3rt27ePPq3cu3r9+/gAMLHky4sOHDiBMrXsy4sePHkCNLnky5suXLmDNr3sy5s+fPoEOLHk26tOnTqFOrXs26tevXsGPLnk27tu3buHPr3s27t+/fwIMLH068uPHjyJMrX868ufPn0KNLn069uvXr2LNr3869u/fv4MOLH0++vPnz6NOrX8++vfv38OPLn0+/vv37+PPr38+/v///AAYo4P+ABBZo4IEIJqjgggw26OCDEEYo4YQUVmjhhRhmqOGGHHbo4YcghijiiCSWaOKJKKao4oostujiizDGKOOMNNZo44045qjjjjz26OOPQAYp5JBEFmnkkUgmqeSSTDbp5JNQRinllFRWaeWVWGap5ZZcdunll2CGKeaYZJZp5plopqnmmmy26eabcMYp55x01jncAXjaWQyefB6gZzB9Bsrnn7oIamifhNJy6KKBJvrKohMwOqijqUB6gaR+UlrKoR1IqqkohorA6KedcEqCpaRiEioKpqZayaoqwOpqJLKuIOistN4Kg664MlKrC7z2ikiwMjQqbCLEFovosYYkq+z/pMwO4uwMxkYbSLU4YGttH9pmC+223C67Q7fg4iHuuOeWm0e6OrCrbh3kepvnu+u6K2+m9N4R7w375utGvzUA7O8aAlNr78BtHMyvwgirwXDADzd8RsQGfyvxvxajm/HFBFMcg8cci1Hws/iGnDDIL6Bs8hcqt9DyylyMnPLLMGshM7A015zFzSzwrHPMPqeQ889YBM3qxkRPPLSoSyddxbS7Nu00FVDjjPTUZVTd89VYk/Gr1fN23bHRH5AtdtGtbs312VmjKrTUbD+N6chux33y3HiPanccefdt9t4s+4034HoI/jXhiCeu+OKMN+7445BHLvnklFdu+eWYZ675xeacd+7556CHLvropJdu+umop6766qy37vrrsMcu++y012777bjnrvvuvPfu++/ABy/88MQXb/zxyCev/PLMN+/889BHL/301Fdv/fXYZ6/99tx37/334Icv/vjkl2/++einr/767Lfv/vvwxy///PTXb//9+Oev//789+///wAMoAAHSMACGvCACEygAhfIwAY68IEQjKAEJ0jBClrwghjMoAY3yMEOevCDIAyhCEdIwhKa8IQoTKEKV8jCFrrwhTBcRwQAADs=",
        grade: 0,
        threshold: .94,
        feedback: "Well done!",
        reaction: {
            type: "showOverlay",
            target: 0
        }
    }, {
        value: "data:image/gif;base64,R0lGODdhIAPCAbMAAAAAAACA/wCqqgCq1QC1zQC10gC12wC60gC7zgC/3wDGxgDMzAD//////wAAAAAAACH5BAkAAA4ALAAAAAAgA8IBAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/C4fE6v2+/4vH7P7/v/gIGCg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+goaKjpKWmp6ipqqusra6vsLGys7S1tre4ubq7vL2+v8DBwsPExcbHyMnKy8zNzs/Q0dLT1NXW19jZ2tvc3d7f4OHi4+Tl5ufo6err7O3u7/Dx8vP09fb3+Pn6+/z9/v8AAwocSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48g/0OKHEmypMmTKFOqXMmypcuXMGPKnEmzps2bOHPq3Mmzp8+fQIMKHUq0qNGjSJMqXcq0qdOnUKNKnUq1qtWrWLNq3cq1q9evYMOKHUu2rNmzaNOqXcu2rdu3cOPKnUu3rt27ePPq3cu3r9+/gAMLHky4sOHDiBMrXsy4sePHkCNLnky5suXLmDNr3sy5s+fPoEOLHk26tOnTqFOrXs26tevXsGPLnk27tu3buHPr3s27t+/fwIMLH068uPHjyJMrX868ufPn0KNLn069uvXr2LNr3869u/fv4MOLH0++vPnz6NOrX8++vfv38OPLn0+/vv37+PPr38+/v///AAYo4P+ABBZo4IEIJqjgggw26OCDEEYo4YQUVmjhhRhmqOGGHHbo4YcghijiiCSWaOKJKKao4oostujiizDGKOOMNNZo44045qjjjjz26OOPQAYp5JBEFmnkkUgmqeSSTDbp5JNQRinllFRWaeWVWGap5ZZcdunll2CGKeaYZJZp5plopqnmmmy26eabcMYp55x01jncAXjaWQyefB6gZzB9Bsrnn7oIamifhNJy6KKBJvrKohMwOqijqUB6gaR+UlrKoR1IqqkohorA6KedcEqCpaRiEioKpqZayaoqwOpqJLKuIOistN4Kg664MlKrC7z2ikiwMjQqbCLEFovosYYkq+z/pMwO4uwMxkYbSLU4YGttH9pmC+223C67Q7fg4iHuuOeWm0e6OrCrbh3kepvnu+u6K2+m9N4R7w375utGvzUA7O8aAlNr78BtHMyvwgirwXDADzd8RsQGfyvxvxajm/HFBFMcg8cci1Hws/iGnDDIL6Bs8hcqt9DyylyMnPLLMGshM7A015zFzSzwrHPMPqeQ889YBM3qxkRPPLSoSyddxbS7Nu00FVDjjPTUZVTd89VYk/Gr1fN23bHRH5AtdtGtbs312VmjKrTUbD+N6chux33y3HiPanccefdt9t4s+4034HoI/jXhiCeu+OKMN+7445BHLvnklFdu+eWYZ675xeacd+7556CHLvropJdu+umop6766qy37vrrsMcu++y012777bjnrvvuvPfu++/ABy/88MQXb/zxyCev/PLMN+/889BHL/301Fdv/fXYZ6/99tx37/334Icv/vjkl2/++einr/767Lfv/vvwxy///PTXb//9+Oev//789+///wAMoAAHSMACGvCACEygAhfIwAY68IEQjKAEJ0jBClrwghjMoAY3yMEOevCDIAyhCEdIwhKa8IQoTKEKV8jCFrrwhTBcRwQAADs=",
        threshold: .94,
        grade: 2,
        translateX: !0,
        translateY: !0,
        feedback: "The circle should be centered at (3,0)",
    }, {
        value: "data:image/gif;base64,R0lGODdhIAPCAbMAAAAAAACA/wCqqgCq1QC1zQC10gC12wC60gC7zgC/3wDGxgDMzAD//////wAAAAAAACH5BAkAAA4ALAAAAAAgA8IBAAT/0MlJq7046827/2AojmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEgsGo/IpHLJbDqf0Kh0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/C4fE6v2+/4vH7P7/v/gIGCg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+goaKjpKWmp6ipqqusra6vsLGys7S1tre4ubq7vL2+v8DBwsPExcbHyMnKy8zNzs/Q0dLT1NXW19jZ2tvc3d7f4OHi4+Tl5ufo6err7O3u7/Dx8vP09fb3+Pn6+/z9/v8AAwocSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48g/0OKHEmypMmTKFOqXMmypcuXMGPKnEmzps2bOHPq3Mmzp8+fQIMKHUq0qNGjSJMqXcq0qdOnUKNKnUq1qtWrWLNq3cq1q9evYMOKHUu2rNmzaNOqXcu2rdu3cOPKnUu3rt27ePPq3cu3r9+/gAMLHky4sOHDiBMrXsy4sePHkCNLnky5suXLmDNr3sy5s+fPoEOLHk26tOnTqFOrXs26tevXsGPLnk27tu3buHPr3s27t+/fwIMLH068uPHjyJMrX868ufPn0KNLn069uvXr2LNr3869u/fv4MOLH0++vPnz6NOrX8++vfv38OPLn0+/vv37+PPr38+/v///AAYo4P+ABBZo4IEIJqjgggw26OCDEEYo4YQUVmjhhRhmqOGGHHbo4YcghijiiCSWaOKJKKao4oostujiizDGKOOMNNZo44045qjjjjz26OOPQAYp5JBEFmnkkUgmqeSSTDbp5JNQRinllFRWaeWVWGap5ZZcdunll2CGKeaYZJZp5plopqnmmmy26eabcMYp55x01jncAXjaWQyefB6gZzB9Bsrnn7oIamifhNJy6KKBJvrKohMwOqijqUB6gaR+UlrKoR1IqqkohorA6KedcEqCpaRiEioKpqZayaoqwOpqJLKuIOistN4Kg664MlKrC7z2ikiwMjQqbCLEFovosYYkq+z/pMwO4uwMxkYbSLU4YGttH9pmC+223C67Q7fg4iHuuOeWm0e6OrCrbh3kepvnu+u6K2+m9N4R7w375utGvzUA7O8aAlNr78BtHMyvwgirwXDADzd8RsQGfyvxvxajm/HFBFMcg8cci1Hws/iGnDDIL6Bs8hcqt9DyylyMnPLLMGshM7A015zFzSzwrHPMPqeQ889YBM3qxkRPPLSoSyddxbS7Nu00FVDjjPTUZVTd89VYk/Gr1fN23bHRH5AtdtGtbs312VmjKrTUbD+N6chux33y3HiPanccefdt9t4s+4034HoI/jXhiCeu+OKMN+7445BHLvnklFdu+eWYZ675xeacd+7556CHLvropJdu+umop6766qy37vrrsMcu++y012777bjnrvvuvPfu++/ABy/88MQXb/zxyCev/PLMN+/889BHL/301Fdv/fXYZ6/99tx37/334Icv/vjkl2/++einr/767Lfv/vvwxy///PTXb//9+Oev//789+///wAMoAAHSMACGvCACEygAhfIwAY68IEQjKAEJ0jBClrwghjMoAY3yMEOevCDIAyhCEdIwhKa8IQoTKEKV8jCFrrwhTBcRwQAADs=",
        threshold: .975,
        scale: !0,
        grade: 2,
        feedback: "The circle should have a diameter of 1",
    }, {
        grade: 2,
        feedback: 'Not quite, try again!'
    }]}]);

addShowcase([{
    id: "custom-intro",
    type: "socrates-standard-annotation",
    heading: "Custom Quiz",
    body: window.introMarkup("", ["Quiz questions can be placed directly on an image or video"], []),
    reaction: {
        type: "showOverlay",
        target: "custom"
    }
}, {
    id: "custom",
    question: "What is the sum of the two fractions?",
    type: "quiz-custom",
    backgroundImage: "/static/img/user-quiz-images/fractions.png",
    items: [{
        id: "numerator",
        type: "input-item",
        x: .75,
        y: .1,
        z: 1,
        w: .15,
        fontSize: 5
    }, {
        id: "denominator",
        type: "input-item",
        x: .75,
        y: .4,
        z: 1,
        w: .15,
        fontSize: 5
    }],
    combinations: [{
        value: '<& @numerator/@denominator & #equals 13/15>',
        grade: 0,
        feedback: 'Correct!',
        reaction: {
            type: "showOverlay",
            target: "0"
        }
    }, {
        value: '<& @denominator & #equals 8>',
        grade: 2,
        feedback: "Instead of adding the denominators, try to find a common denominator."
    }, {
        value:'<& @denominator & #equals 15>',
        grade: 2,
        feedback: "The denominator is grade, but check the numerator again..."
    }, {
        grade: 2,
        feedback: 'Not quite, try again!'
    }]
}]);
addShowcase([{
    id: "math-intro",
    type: "socrates-standard-annotation",
    heading: "Math in Capira",
    body: window.introMarkup("Capira has a number of features to support learning math.", ["Any text field can display LaTeX expressions.", "Students can answer by typing a mathematical expression."], []) + "Check out examples in the next quiz!",
    reaction: {
        type: "showOverlay",
        target: "latex"
    }
}, {
    id: "latex",
    type: "quiz-single-answer",
    question: "Which of the following expressions is the largest?",
    options: ["<latex-formula>\\sqrt{140}</latex-formula>", "<latex-formula>\\sum_{i=1}^{5} i</latex-formula>", "<latex-formula>4\\pi</latex-formula>", "<latex-formula>\\left(\\frac{7}{2}\\right)^2</latex-formula>", "<latex-formula>\\displaystyle f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi</latex-formula>"],
    combinations: [{
        value: 1,
        grade: 0,
        feedback: "Yes! <latex-formula>\\sum_{i=1}^{5} i = 15</latex-formula>",
        reaction: {
            type: "showOverlay",
            target: "seman-intro"
        }
    }, {
        value: 0,
        grade: 2,
        feedback: "Not quite.<br/><i>Hint</i>: Do you know what <latex-formula>\\sqrt{144}</latex-formula> is?"
    }, {
        value: 2,
        grade: 2,
        feedback: "Not quite. <latex-formula>4\\pi\\approx 4 \\cdot 3.14 = 12.56 </latex-formula>"
    }, {
        value: 3,
        grade: 2,
        feedback: "Not quite. <latex-formula>\\left(\\frac{7}{2}\\right)^2 = \\frac{7^2}{2^2}=\\frac{49}{4} \\approx 12</latex-formula>"
    }, {
        value: 4,
        grade: 2,
        feedback: "<latex-formula>\\displaystyle f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi</latex-formula> <br>is just some fancy expression ;)"
    }, {
        grade: 2,
        feedback: 'Not quite, try again!'
    }]
}, {
    id: "seman-intro",
    type: "socrates-standard-annotation",
    heading: "Math Quiz",
    body: window.introMarkup("Math Quizzes can be used to evaluate mathematical answers.", ["Students can enter a mathematical expression as an answer", "Any answer that is mathematically equivalent to the reference answer is grade"], ["Try playing around with different ways to write the given expression!"]),
    reaction: {
        type: "showOverlay",
        target: "seman"
    }
}, {
    id: "seman",
    type: "math-quiz",
    question: "Try writing any expression that is equivalent to <latex-formula>a^2 + 2ab+b^2</latex-formula>",
    combinations: [{
        value: "#equals a^2+2ab+b^2",
        grade: 0,
        feedback: 'Correct!',
        reaction:
        {
            type: "showOverlay",
            target: "syntax-intro"
        }
    }, {
        value: "#equals a^2-2ab+b^2",
        grade: 2,
        feedback: "Not quite. This is equivalent to <latex-formula>a^2 + 2ab+b^2</latex-formula>."
    }, {
        grade: 2,
        feedback: 'Not quite, try again!'
    }]
}, {
    id: "syntax-intro",
    type: "socrates-standard-annotation",
    heading: "Math Quiz",
    body: window.introMarkup("Math Quizzes can also be configured to accept only answers in a specific form. This helps students understand the individual steps to solve math problems.", [], ["Try copying the expression given in the question exactly", "Try changing the order of the expressions in the grade answer"]),
    reaction: {
        type: "showOverlay",
        target: "syntax"
    }
}, {
    id: "syntax",
    type: "math-quiz",
    question: "Multiply out the expression <latex-formula>a\\left(b+c\\right)</latex-formula>",
    combinations: [{
        value: "#identic ab+ac",
        grade: 0,
        feedback: 'Correct!',
        reaction: {
            type: "showOverlay",
            target: 0
        }
    }, {
        value: "#equals a(b + c)",
        grade: 2,
        feedback: "You need to expand the expression!"
    }, {
        grade: 2,
        feedback: 'Not quite, try again!'
    }]
}]);
addShowcase([{
    id: "socratic-intro",
    type: "socrates-standard-annotation",
    heading: "Socratic Questioning with Capira",
    body: "coming soon...",
    reaction: {
        type: "showOverlay",
        target: 0
    }
}]);
