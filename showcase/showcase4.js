window.unit = {
    title: 'Capira Socrates Showcase',
    youtubeId: '3qKkhgLhJuk',
    overlays: [{
        id: 'intro',
        events: [{
            type: 'STOP',
            start: 7,
        }],

        question: 'Schätzfrage: Wie oft muss man ein Blatt Papier falten, damit der Papierstapel, der dabei entsteht, bis zum Mond reicht?',
        type: 'short-answer-quiz',
        combinations: [{
            value: '42',
            grade: 0,
            feedback:'Richtig! Man muss es ca. 42 Mal falten.',
            reaction: {
                type: 'play'
            }
        }, {
            grade: 1,
            feedback: 'Leider falsch... bleib dran!',
            reaction: {
                type: 'play'
            }
        }]

    }, {
        id: 'hotspot1',
        events: [{
            type: 'STOP',
            start: 41,
        }],
        question: 'Wie sieht das Papier nach der zweiten Faltung aus?',
        type: 'hotspot-quiz',
        mask: 'data:image/gif;base64,R0lGODlhkAHhAJEAAP//////AP8AAAD/ACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM2M0E0NTZFNEREMjExRTU5REIxRkY1QUJGRjg0NzNDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM2M0E0NTZGNEREMjExRTU5REIxRkY1QUJGRjg0NzNDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzYzQTQ1NkM0REQyMTFFNTlEQjFGRjVBQkZGODQ3M0MiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzYzQTQ1NkQ0REQyMTFFNTlEQjFGRjVBQkZGODQ3M0MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQAAAAAACwAAAAAkAHhAAAC/4SPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/g8MCofEovGITCqXzKbzCY1Kp9Sq9YrNarfcrvcLDovH5LL5jE6r1+y2+w2Py+f0uv2Oz+v3/L7/DxgoOEhYaHiImKi4yNjo+AgZKTlJWWl5iZmpucnZ6fkJGio6SlpqeoqaqrrK2ur6ChsrO0tba3uLm6u7y9vr+wscLDxMXGx8jJysvMzc7PwMHS09TV1tfY2drb3N3e39DR4uPk5ebn6Onq6+zt7u/g4fLz9PX29/j5+vv8/f7/8PMKDAgQQLGjyIMKHChQwbOnwIMaLEiRQrWryIMaPGjf8cO3r8CDKkyJEkS5o8iTKlypUsW7p8CTOmzJk0a9q8iTOnzp08e/r8CTSo0KFEixo9ijSp0qVMmzp9CjWq1KlUq1q9Ok2A1q1bD3D96vVrV3ABypo1e+Cs2hkD2rp1e+Ct3Lhy4bIQizev3r0Csqn9CzgwWhV1Cxs+jHjACb6MG+stJhiA4MmUI5tIjDnz4RGOO3vm+quy6NGkA4zQjDr1WxCfW3vmVTq2bMAhVNtO3cG17te3Zvv+XbbD7eG4M+w+7tgW8OWzNxB/rhkD8umMZzG/LjsD9O2YLVD/vjcW9vGlL3A/j7gC+PViYZF/L9o8+vlzJ7C/D7oV/P2UK9D//79aBPgNqJV+/B1ImwQALtiWgATixwqCEq6lIIMAQvAggapMyOFgD1jI4AMZDrhhhxxGAOKCDoyo4SkmmvhhiioywCKJLr54ogMyzrhAjRCagmOHMe5IXwM+3ndjkBIOSSR6NB6JZClK5rhAkxcqAGWUpEw5YQNW/tdjlutJyeWSDHxZJJZigkdmmQd6iaaTaq5JXZtu7gdnnNyFSed0dt75Xp56Qsdnn8f9Ceh4gg5KXKGG6oZootctyuhtjj7aWqSSLkdppao9iWmmmm7qG5OeFndpqI0BSSp2pp4aHaiqdpZkq8C9Cmt3ss66Kqu23qpjrqimyiteqPwKLK7CxxYmYrHV1YpsbCguq+uKzj6WSrTZVUitYQ5ea2y22pbHbbd1SQBue6uMO5p/5taHbroFRshufxa8a5d98vZlYL2ByYevd+m65+9f2r0r3bXiFXyWc91q4Kx1DJvGAbW5haqcv7WdytqjuNR7WqWcrQkbsifoudiRobW6gpUtYAsAzDALQ6VlMYA4kaJH8GhRZDYvcR5WKHwq9M3eFo100kovzXTTTj8NddRST0111VZfjXXWWm/Ndddefw122GKPTXbZZp/NQAEAOw==',
        combinations: [{
            value: '#ff0000',
            grade: 0,
            feedback: 'Richtig!',
            reaction: {
                type: 'seekTo',
                target: 57
            }
        }, {
            value: '#00ff00',
            grade: 2,
            feedback: 'Nein. Kuck dir noch mal genau an, wie das Papier gefaltet wird.',
        }, {
            value: '#ffff00',
            grade: 2,
            feedback: 'Das Papier wird von links nach rechts gefaltet, nicht von rechts nach links...',
        }, {
            grade: 2,
            feedback: 'Uuuups. Das ist ganz daneben.',
        }]
    }, {
        id: 'quiz1',
        events: [{
            type: 'STOP',
            start: 100.73,
        }],
        question: 'Wie hoch ist ungefähr eine Packung Druckerpapier?',
        type: 'short-answer-quiz',
        combinations: [{
            value: '5 #or <5cm #or 5 cm>',
            grade: 0,
            feedback: 'Richtig! 500 Blatt Papier sind ca. 5cm hoch.',
            reaction: {
                type: 'play'
            }
        }, {
            feedback: 'Nicht ganz.',
            grade: 1,
            reaction: {
                type: 'showOverlay',
                target: 'cm-annotation'
            }
        }]
    }, {
        id: 'cm-annotation',
        type: 'standard-annotation',
        heading: 'Nicht ganz.',
        body: 'Die Schätzung war nicht ganz richtig. Bleib dran!',
        reaction: {
            type: 'hideOverlay'
        }
    }, {
        id: 'quiz2',
        events: [{
            type: 'STOP',
            start: 137.8,
        }],
        question: 'Wie oft muss man ein Blatt Papier falten, damit seine Höhe 5cm beträgt?',
        type: 'custom-quiz',
        items: [{
            id: 'times',
            type: 'input-item',
            x: .68,
            y: .68,
            z: 1,
            w: .04,
            fontSize: 2
        }],
        combinations: [{
            value: '<& @times & #equals 9>',
            grade: 0,
            feedback: 'Korrekt. 9 Mal!',
            reaction: {
                type: 'seekTo',
                target: 171.535114
            }
        }, {
            grade: 1,
            feedback: 'Nicht ganz.',
            reaction: {
                type: 'play'
            }
        }]
    }, {
        id: 'quiz3',
        events: [{
            type: 'STOP',
            start: 210.9,
        }],
        question: 'Wie würde die Kurve aussehen, die das Wachstum beschreibt?',
        type: 'draw-quiz',
        combinations: [{
            value: 'data:image/gif;base64,R0lGODlhIAPCAYABAAC60v///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc5MEI0QkM2NEREQTExRTU5REIxRkY1QUJGRjg0NzNDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc5MEI0QkM3NEREQTExRTU5REIxRkY1QUJGRjg0NzNDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjJBODc5MDU0REQ4MTFFNTlEQjFGRjVBQkZGODQ3M0MiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjJBODc5MDY0REQ4MTFFNTlEQjFGRjVBQkZGODQ3M0MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2s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',
            threshold: 0.9,
            grade: 0,
            feedback:  'Richtig! Eine Exponentialkurve.',
            reaction: {
                type: 'play'
            }
        }, {
            value: 'data:image/gif;base64,R0lGODlhIAPCAYABAAC60v///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc5MEI0QkNBNEREQTExRTU5REIxRkY1QUJGRjg0NzNDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc5MEI0QkNCNEREQTExRTU5REIxRkY1QUJGRjg0NzNDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzkwQjRCQzg0RERBMTFFNTlEQjFGRjVBQkZGODQ3M0MiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzkwQjRCQzk0RERBMTFFNTlEQjFGRjVBQkZGODQ3M0MiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2s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',
            threshold: 0.96,
            grade: 2,
            feedback: 'Wächst das wirklich linear?',
            reaction: {
                type: 'seekTo',
                target: 176
            }
        }, {
            grade: 2,
            feedback: 'Leider falsch'
        }]
    }, {
        id: 'quiz4',
        events: [{
            type: 'STOP',
            start: 265.1,
        }],
        question: 'Wo wäre ungefähr der Mond?',
        type: 'hotspot-quiz',
        mask: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAADhCAMAAADRaBMuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBQjdDNEY5NTRERTExMUU1OURCMUZGNUFCRkY4NDczQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBQjdDNEY5NjRERTExMUU1OURCMUZGNUFCRkY4NDczQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFCN0M0RjkzNERFMTExRTU5REIxRkY1QUJGRjg0NzNDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFCN0M0Rjk0NERFMTExRTU5REIxRkY1QUJGRjg0NzNDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+08D8SgAAAA9QTFRF//////8E/wD//wADAAD/dPiFkQAAAk1JREFUeNrs3dtuozAUQFHb+P+/eaYajRq1gLkZbLPWcy9wtgiJ2uSEAAAAAADAQOK3pS/JHwzsWtM/MzWWmuRfxpxMmndDjO8kcU4px5BF0opbcnwFiUtKPfpP8mPaqeToz9+e42+QGItF8rIaY8oFN1wN55ts/MZpV5C4YUAVBr7D5l90UY5TtuQoBIkb5ndzgmvipWds6FEIEo8+guQWPd3jR5PpWJA8ksd7fCY5FCTmPFyR9LS1HsUgYbgiKTVRZDoYZLRLJKfURpHDQYIgNYpMh4NEPWoQpJMeG4IEQdoKEgURZPQeggwVJAhyXw9BBBFEkI5uIe+6qSfPsgQRxOsQQQQRRBBBBPHCUBBBBOn/T7iCtBbETV0QQQQRRBD/BiSIIIIIIogggggiiCCCCCLI29+wM0IQ79cRRBBBBHl5D0EEEaRSELcQQQQRpJ8gnvUK8oog6WiQnBVpKUgQpK0gWZCmgoz2cXK59yBZkKaCXHWBPPhh5EMFCY/UqNum7yDh0RZV0nQe5MwYKu79OHNQHQc5c/b3LWXZe1TdBtl3zk0szNl2jI0XCeUes+fb+jaj/4f4+2hbDzK7hGroDXVtF5nbmjf6zsD2g3xEecMSx6YvkVeu1WyjRxCkqSJLW9qCJHOzql5vae1RUGQtRq0qK4slFSnXuPoBcHX16ptdkmN3mPXtkuHlLqtxnCDNEaThJGYBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwBv9EWAAWGU2J9vlyjUAAAAASUVORK5CYII=',
        combinations: [{
            value: '#ff0003',
            grade: 0,
            feedback: 'Korrekt!',
            reaction: {
                type: 'play'
            }
        }, {
            value: '#0000ff',
            grade: 2,
            feedback: 'Nein, das ist zu nah.',
        }, {
            value: '#ff00ff',
            grade: 2,
            feedback: 'Leider falsch, aber fast...',
        }, {
            value: '#ffff04',
            grade: 2,
            feedback: 'Würde der Mond dann nicht auf die Erde fallen??',
        }, {
            feedback: 'Nein...',
            grade: 2,
        }]
    }, {
        id: 'quiz5',
        events: [{
            type: 'STOP',
            start: 331.5,
        }],
        question: 'Wie oft muss man also falten?',
        type: 'custom-quiz',
        items: [{
            id: 'times',
            type: 'input-item',
            x: .06,
            y: .80,
            z: 1,
            w: .04,
            fontSize: 2
        }],
        combinations: [{
            value: '<& @times & #equals 42>',
            grade: 0,
            feedback: 'Richtig! Man müsste ungefähr 42 mal falten.',
            reaction: {
                type: 'seekTo',
                target: '528.692662'
            }
        }, {
            feedback: 'Nicht ganz...',
            grade: 1,
            reaction: {
                type: 'play'
            }
        }]
    }, {
        id: 'quiz6',
        events: [{
            type: 'STOP',
            start: 405,
        }],
        question: 'Wie teilt man durch <latex-formula>\\frac{1}{20}</latex-formula>?',
        type: 'single-answer-quiz',
        options: ["Mit 20 multiplizieren.",
            "Durch 20 teilen.",
            "Erst auf einen gemeinsamen Nenner bringen.",
            "Den Kehrwert addieren"
        ],
        combinations: [{
            grade: true,
            value: 0,
            grade: 0,
            feedback: 'Korrekt! Man multipliziert einfach mit 20.',
            reaction: {
                type: 'play'
            }
        }, {
            value: 2,
            grade: 2,
            feedback: 'Nein so <i>addiert</i> man Brüche.'
        }, {
            feedback: 'Nein...',
            grade: 2
        }]
    }, {
        id: 'quiz7',
        events: [{
            type: 'STOP',
            start: 516.8,
        }],
        question: 'Also wie oft müsste man ein Blatt Papier falten, damit der Stapel, der dabei entsteht, bis zum Mond reicht?',
        type: 'custom-quiz',
        items: [{
            id: 'times',
            type: 'input-item',
            x: .06,
            y: .15,
            z: 1,
            w: .04,
            fontSize: 2
        }],
        combinations: [{
            value: '<& @times & #equals 42>',
            grade: 0,
            feedback: 'Richtig! Nur 42 mal. Verblüffend, oder?',
            reaction: {
                type: 'play'
            }
        }, {
            grade: 2,
            feedback: 'Nein...'
        }]
    }, {
        id: 'quiz28',
        events: [{
            type: 'STOP',
            start: 608,
        }],
        question: 'Wie nennt man diese Art von Funktionen?',
        type: 'short-answer-quiz',
        combinations: [{
            value: '#nocase Exponential Funktion #or <#nocase Exponentialfunktion #or #nocase exponential>',
            grade: 0,
            feedback: 'Richtig! Es ist eine Exponentialfunktion!',
            reaction: {
                type: 'play'
            }
        }, {
            value: '#typo Exponential Funktion #or <#typo Exponentialfunktion #or #typo exponential>',
            grade: 2,
            feedback: 'Du bist auf der richtigen Spur! Check Deine Rechtschreibung...',
        }, {
            value: '#typo lineare Funktion',
            feedback: 'Bist Du Dir sicher, dass es eine <i>lineare</i> Funktion ist?',
            grade: 2
        }, {
            value: '#typo quadratische Funktion',
            feedback: 'Bist Du Dir sicher, dass es eine <i>quadratische</i> Funktion ist?',
            grade: 2
        }, {
            grade: 2,
            feedback: 'Nein...'
        }]
    }]
};
