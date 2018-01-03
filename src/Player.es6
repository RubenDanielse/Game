class Player {
    constructor() {
        this.player = {
            xPos: 50,
            yPos: 485,
            height: 10,
            width: 10,
            score: 0,
            life: 3,
            color: "rgba(0,204,102,1)",
            gravity: 2,
            gravitySpeed: 0.2,
            jump: false
        };
        this.key = true
    }

    move(movement) {

        if (movement.up && this.key === true) {
            this.player.jump = true;
            this.key = false;
        }

        if (this.player.jump === true) {
            console.log(this.player.yPos);
            this.player.gravitySpeed += this.player.gravity;
            this.player.yPos -= 30 - this.player.gravitySpeed;
            this.key = false;
        }

        if (this.player.yPos > 485) {
            this.player.yPos = 485;
            this.player.gravitySpeed = 0.5;
            this.key = true;
            this.player.jump = false;
        }

        this.collision();
    }

    collision(particle) {
        if (!particle) return;

        if ((particle.x + particle.width >= this.player.xPos)
            && (particle.x <= this.player.xPos + this.player.width)
            && (particle.y + particle.height >= this.player.yPos)
            && (particle.y <= this.player.yPos + this.player.height)
        ) {
            this.player.life = this.player.life - 1;
            console.log(this.player.life);
            this.player.score = 0;
            this.player.color = "rgba(200,0,0,1)";
            setTimeout(()=> {
                this.player.color = "rgba(0,254,0,1)";
            }, 100);
            return true;
        }
        return false;
    }

    get pos1() {
        return {
            x: this.player.xPos,
            y: this.player.yPos,
            width: this.player.width,
            height: this.player.height,
            color: this.player.color,

        };
    }

    get pos3() {
        return {
            score: this.player.score,
            life: this.player.life
        };
    }
}

module.exports = Player;