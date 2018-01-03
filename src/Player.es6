class Player {
    constructor() {
        this.xPos = 50;
        this.yPos = 485;
        this.height = 10;
        this.width = 10;
        this.score = 0;
        this.life = 3;
        this.color = "rgba(0,204,102,1)";
        this.gravity = 2;
        this.gravitySpeed = 0.2;
        this.jump = false;
        this.key = true
    }

    move(movement) {

        if (movement.up && this.key === true) {
            this.jump = true;
            this.key = false;
        }

        if (this.jump === true) {
            console.log(this.yPos);
            this.gravitySpeed += this.gravity;
            this.yPos -= 30 - this.gravitySpeed;
            this.key = false;
        }

        if (this.yPos > 485) {
            this.yPos = 485;
            this.gravitySpeed = 0.5;
            this.key = true;
            this.jump = false;
        }

        this.collision();
    }
    increaseScore(){
        this.score++;
    }

    collision(particle) {
        if (!particle) return;

        if ((particle.x + particle.width >= this.xPos)
            && (particle.x <= this.xPos + this.width)
            && (particle.y + particle.height >= this.yPos)
            && (particle.y <= this.yPos + this.height)
        ) {
            this.life = this.life - 1;
            console.log(this.life);
            this.score = 0;
            this.color = "rgba(200,0,0,1)";
            setTimeout(()=> {
                this.color = "rgba(0,254,0,1)";
            }, 100);
            return true;
        }
        return false;
    }

    get pos1() {
        return {
            x: this.xPos,
            y: this.yPos,
            width: this.width,
            height: this.height,
            color: this.color,

        };
    }

    get pos3() {
        return {
            score: this.score,
            life: this.life
        };
    }
}

module.exports = Player;