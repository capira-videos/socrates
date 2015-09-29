var unit = {
    "title": "Capira Socrates Showcase",
    video: {
        "type": "youtube",
        "source": "3qKkhgLhJuk"
    },
    "overlays": [{
        "id": "intro",
        "events": [{
            "type": "STOP",
            "start": 7
        }],
        "question": "Schätzfrage: Wie oft muss man ein Blatt Papier falten, damit der Papierstapel, der dabei entsteht, bis zum Mond reicht?",
        "type": "short-answer-quiz",
        "combinations": [{
            "value": "42",
            "grade": 0,
            "feedback": "Richtig! Man muss es ca. 42 Mal falten.",
            "reaction": {
                "type": "play"
            }
        }, {
            "grade": 1,
            "feedback": "Leider falsch... bleib dran!",
            "reaction": {
                "type": "play"
            }
        }]
    }, {
        "id": "hotspot1",
        "events": [{
            "type": "STOP",
            "start": 41
        }],
        "question": "Wie sieht das Papier nach der zweiten Faltung aus?",
        "type": "hotspot-quiz",
        "combinations": [{
            "value": "#ff0000",
            "grade": 0,
            "feedback": "Richtig!",
            "reaction": {
                "type": "seekTo",
                "target": 57
            }
        }, {
            "value": "#00ff00",
            "grade": 2,
            "feedback": "Nein. Kuck dir noch mal genau an, wie das Papier gefaltet wird."
        }, {
            "value": "#ffff00",
            "grade": 2,
            "feedback": "Das Papier wird von links nach rechts gefaltet, nicht von rechts nach links..."
        }, {
            "grade": 2,
            "feedback": "Uuuups. Das ist ganz daneben."
        }]
    }, {
        "id": "quiz1",
        "events": [{
            "type": "STOP",
            "start": 100.73
        }],
        "question": "Wie hoch ist ungefähr eine Packung Druckerpapier?",
        "type": "short-answer-quiz",
        "combinations": [{
            "value": "5 #or <5cm #or 5 cm>",
            "grade": 0,
            "feedback": "Richtig! 500 Blatt Papier sind ca. 5cm hoch.",
            "reaction": {
                "type": "play"
            }
        }, {
            "feedback": "Nicht ganz.",
            "grade": 1,
            "reaction": {
                "type": "showOverlay",
                "target": "cm-annotation"
            }
        }]
    }, {
        "id": "cm-annotation",
        "type": "standard-annotation",
        "heading": "Nicht ganz.",
        "body": "Die Schätzung war nicht ganz richtig. Bleib dran!",
        "reaction": {
            "type": "hideOverlay"
        }
    }, {
        "id": "quiz2",
        "events": [{
            "type": "STOP",
            "start": 137.8
        }],
        "question": "Wie oft muss man ein Blatt Papier falten, damit seine Höhe 5cm beträgt?",
        "type": "custom-quiz",
        "items": [{
            "id": "times",
            "type": "input-item",
            "x": 0.68,
            "y": 0.68,
            "z": 1,
            "w": 0.06,
            "fontSize": 2
        }],
        "combinations": [{
            "value": "<& @times & #equals 9>",
            "grade": 0,
            "feedback": "Korrekt. 9 Mal!",
            "reaction": {
                "type": "seekTo",
                "target": 171.535114
            }
        }, {
            "grade": 1,
            "feedback": "Nicht ganz.",
            "reaction": {
                "type": "play"
            }
        }]
    }, {
        "id": "quiz3",
        "events": [{
            "type": "STOP",
            "start": 210.9
        }],
        "question": "Wie würde die Kurve aussehen, die das Wachstum beschreibt?",
        "type": "draw-quiz",
        "combinations": [{
            "value": {
                "src": "data:image/gif;base64,R0lGODlhIAPCAYABAAC60v///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc5MEI0QkM2NEREQTExRTU5REIxRkY1QUJGRjg0NzNDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc5MEI0QkM3NEREQTExRTU5REIxRkY1QUJGRjg0NzNDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjJBODc5MDU0REQ4MTFFNTlEQjFGRjVBQkZGODQ3M0MiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjJBODc5MDY0REQ4MTFFNTlEQjFGRjVBQkZGODQ3M0MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2s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",
                "threshold": 0.9,
            },
            "grade": 0,
            "feedback": "Richtig! Eine Exponentialkurve.",
            "reaction": {
                "type": "play"
            }
        }, {
            "value": {
                "src": "data:image/gif;base64,R0lGODlhIAPCAYABAAC60v///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc5MEI0QkNBNEREQTExRTU5REIxRkY1QUJGRjg0NzNDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc5MEI0QkNCNEREQTExRTU5REIxRkY1QUJGRjg0NzNDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzkwQjRCQzg0RERBMTFFNTlEQjFGRjVBQkZGODQ3M0MiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzkwQjRCQzk0RERBMTFFNTlEQjFGRjVBQkZGODQ3M0MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2s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",
                "threshold": 0.96,
                "scale": true
            },
            "grade": 2,
            "feedback": "Wächst das wirklich linear?",
            "reaction": {
                "type": "seekTo",
                "target": 176
            }
        }, {
            "grade": 2,
            "feedback": "Leider falsch"
        }]
    }, {
        "id": "quiz4",
        "events": [{
            "type": "STOP",
            "start": 265.1
        }],
        "question": "Wo wäre ungefähr der Mond?",
        "type": "hotspot-quiz",
        "mask": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAADhCAMAAADRaBMuAAAAGXRFW…AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwBv9EWAAWGU2J9vlyjUAAAAASUVORK5CYII=",
        "combinations": [{
            "value": "#ff0003",
            "grade": 0,
            "feedback": "Korrekt!",
            "reaction": {
                "type": "play"
            }
        }, {
            "value": "#0000ff",
            "grade": 2,
            "feedback": "Nein, das ist zu nah."
        }, {
            "value": "#ff00ff",
            "grade": 2,
            "feedback": "Leider falsch, aber fast..."
        }, {
            "value": "#ffff04",
            "grade": 2,
            "feedback": "Würde der Mond dann nicht auf die Erde fallen??"
        }, {
            "feedback": "Nein...",
            "grade": 2
        }]
    }, {
        "id": "quiz5",
        "events": [{
            "type": "STOP",
            "start": 331.5
        }],
        "question": "Wie oft muss man also falten?",
        "type": "custom-quiz",
        "items": [{
            "id": "times",
            "type": "input-item",
            "x": 0.06,
            "y": 0.8,
            "z": 1,
            "w": 0.06,
            "fontSize": 2
        }],
        "combinations": [{
            "value": "<& @times & #equals 42>",
            "grade": 0,
            "feedback": "Richtig! Man müsste ungefähr 42 mal falten.",
            "reaction": {
                "type": "seekTo",
                "target": "528.692662"
            }
        }, {
            "feedback": "Nicht ganz...",
            "grade": 1,
            "reaction": {
                "type": "play"
            }
        }]
    }, {
        "id": "quiz6",
        "events": [{
            "type": "STOP",
            "start": 405
        }],
        "question": "Wie teilt man durch <latex-formula>\\frac{1}{20}</latex-formula>?",
        "type": "single-answer-quiz",
        "options": [
            "Mit 20 multiplizieren.",
            "Durch 20 teilen.",
            "Erst auf einen gemeinsamen Nenner bringen.",
            "Den Kehrwert addieren"
        ],
        "combinations": [{
            "grade": 0,
            "value": 0,
            "feedback": "Korrekt! Man multipliziert einfach mit 20.",
            "reaction": {
                "type": "play"
            }
        }, {
            "value": 2,
            "grade": 2,
            "feedback": "Nein so <i>addiert</i> man Brüche."
        }, {
            "feedback": "Nein...",
            "grade": 2
        }]
    }, {
        "id": "quiz7",
        "events": [{
            "type": "STOP",
            "start": 516.8
        }],
        "question": "Also wie oft müsste man ein Blatt Papier falten, damit der Stapel, der dabei entsteht, bis zum Mond reicht?",
        "type": "custom-quiz",
        "items": [{
            "id": "times",
            "type": "input-item",
            "x": 0.06,
            "y": 0.15,
            "z": 1,
            "w": 0.06,
            "fontSize": 2
        }],
        "combinations": [{
            "value": "<& @times & #equals 42>",
            "grade": 0,
            "feedback": "Richtig! Nur 42 mal. Verblüffend, oder?",
            "reaction": {
                "type": "play"
            }
        }, {
            "grade": 2,
            "feedback": "Nein..."
        }]
    }, {
        "id": "quiz28",
        "events": [{
            "type": "STOP",
            "start": 608
        }],
        "question": "Wie nennt man diese Art von Funktionen?",
        "type": "short-answer-quiz",
        "combinations": [{
            "value": "#nocase Exponential Funktion #or <#nocase Exponentialfunktion #or #nocase exponential>",
            "grade": 0,
            "feedback": "Richtig! Es ist eine Exponentialfunktion!",
            "reaction": {
                "type": "play"
            }
        }, {
            "value": "#typo Exponential Funktion #or <#typo Exponentialfunktion #or #typo exponential>",
            "grade": 2,
            "feedback": "Du bist auf der richtigen Spur! Check Deine Rechtschreibung..."
        }, {
            "value": "#typo lineare Funktion",
            "feedback": "Bist Du Dir sicher, dass es eine <i>lineare</i> Funktion ist?",
            "grade": 2
        }, {
            "value": "#typo quadratische Funktion",
            "feedback": "Bist Du Dir sicher, dass es eine <i>quadratische</i> Funktion ist?",
            "grade": 2
        }, {
            "grade": 2,
            "feedback": "Nein..."
        }]
    }],
    "authorId": 0,
    "videoId": "",
    "id": "5",
    "next": null,
    "admin": false
}
