import Game from '../scripts/game.js';

window.addEventListener('load', () => {
    const mainCanvas = document.getElementById('main_canvas');
    mainCanvas.width = 600;
    mainCanvas.height = 700;
    const ctx = mainCanvas.getContext('2d');
    
    let game = new Game(mainCanvas);

    let lasttime = 0;
    function animate(currenttime){
        let deltatime = currenttime - lasttime;
        lasttime = currenttime;
        ctx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
        game.update();
        game.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate(0);
});

