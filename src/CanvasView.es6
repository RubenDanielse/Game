class CanvasView {
    constructor() {
        this.c = document.getElementById("myCanvas");
        this.ctx = this.c.getContext("2d");
        this.c.width = window.innerWidth = 650;
        this.c.height = window.innerHeight = 500;
    }

    clear() {
        this.ctx.clearRect(0, 0, this.c.width, this.c.height);
    }

    drawScore(score) {
        this.ctx.font = '20px arial';
        this.ctx.fillStyle = 'blue';
        this.ctx.fillText('Score = '+ score, 30, 50)
    }
    drawLife(life) {
        this.ctx.font = '20px arial';
        this.ctx.fillStyle = 'blue';
        this.ctx.fillText('Lifes = '+ life, 30, 100)
    }
    drawPlayer(pos1) {
        this.ctx.fillStyle = pos1.color;
        this.ctx.fillRect(pos1.x, pos1.y, pos1.width, pos1.height);
    }

    drawEnemy(pos2) {
        this.ctx.fillStyle = pos2.color;
        this.ctx.fillRect(pos2.x, pos2.y, pos2.width, pos2.height);
    }

    drawParticles(pos3) {
        this.ctx.fillStyle = pos3.color;
        this.ctx.fillRect(pos3.x, pos3.y, pos3.width, pos3.height);
    }

    get bounds() {
        return {
            width: this.c.width,
            height: this.c.height,
        }
    }
}

module.exports = CanvasView;