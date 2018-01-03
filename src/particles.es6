class Particle {
    constructor(enemyPosX, enemyPosY, hardness) {
        this.particle = {
            xPos: enemyPosX,
            yPos: enemyPosY,
            width: 20,
            height: 10,
            speed: hardness,
            color: "rgba(23,44,56,1)",
            dead: false,
        }
    }

    move() {
        this.particle.xPos -= this.particle.speed;          // Snelheid van particle
    }

    die() {
        if (this.particle.yPos >= window.innerHeight - 10) {
            this.particle.dead = true;
        }
        if (this.particle.yPos <= 0) {
            this.particle.dead = true;
        }
        if (this.particle.xPos <= 0) {
            this.particle.dead = true;
        }
        if (this.particle.xPos >= window.innerWidth - 10) {
            this.particle.dead = true;
        }
    }

    get pos3() {
        return {
            width: this.particle.width,
            height: this.particle.height,
            x: this.particle.xPos,
            y: this.particle.yPos,
            color: this.particle.color
        };
    }
}

module.exports = Particle;