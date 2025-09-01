        const vägMarkering = [
            'WWWWWWWWWWWWWWWWWWWWWWWWWWWW',
            'W..........................W',
            'W.WWWWW.WWWWWW.WWWWWW.WWWW.W',
            'W.WWWWW.WWWWWW.WWWWWW.WWWW.W',
            'W.WWWWW.WWWWWW.WWWWWW.WWWW.W',
            'W.WWWWW.WWWWWW.WWWWWW.WWWW.W',
            'W.WWWWW.WWWWWW.WWWWWW.WWWW.W',
            'W.WWWWW.WWWWWW.WWWWWW.WWWW.W',
            'W..........................W',
            'W.WWWWW.WWWWWW.WWWWW.WWWWW.W',
            'W.WWWWW.WWWWWW.WWWWW.WWWWW.W',
            'W.WWWWW.WWWWWW.WWWWW.WWWWW.W',
            'W.WWWWW.WWWWWW.WWWWW.WWWWW.W',
            '  ......................... ',
            'W.WWWWWW.WWWWW.WWWW.WWWWWW.W',
            'W.WWWWWW.WWWWW.WWWW.WWWWWW.W',
            'W.WWWWWW.WWWWW.WWWW.WWWWWW.W',
            ' .......................... ',
            'W.WWWWW.WWWWWW.WWWWW.WWWWW.W',
            'W.WWWWW.WWWWWW.WWWWW.WWWWW.W',
            'W.WWWWW.WWWWWW.WWWWW.WWWWW.W',
            'W.WWWWW.WWWWWW.WWWWW.WWWWW.W',
            'W..........................W',
            'W.WWWWW.WWWWWW.WWWWW.WWWWW.W',
            'W.WWWWW.WWWWWW.WWWWW.WWWWW.W',
            'W.WWWWW.WWWWWW.WWWWW.WWWWW.W',
            'W.WWWWW.WWWWWW.WWWWW.WWWWW.W',
            'W.WWWWW.WWWWWW.WWWWW.WWWWW.W',
            'W.WWWWW.WWWWWW.WWWWW.WWWWW.W',
            'W..........................W',
            'WWWWWWWWWWWWWWWWWWWWWWWWWWWW'
        ];
        function Markering() {
            map.forEach((row, rowIndex) => {
                [...row].forEach((cell, colIndex) => {
                    if (cell === '.') {
                        const dot = document.createElement('div');
                        dot.classList.add('dot');
                        dot.style.gridColumn = `${colIndex + 1}`;
                        dot.style.gridRow = `${rowIndex + 1}`;
                        gameArea.appendChild(dot);
                    }
                });
            });
        }