
        setTimeout(() => {
        const path = [
            { x: 13, y: 15 },

        ];
        requestAnimationFrame((timestamp) =>
            moveGhostInLoop(ghost2, path, ghostPosition2, timestamp, 0, 2)
        );
    }, 15000);