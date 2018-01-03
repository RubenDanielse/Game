class Enemy {
    constructor() {
            this.xPos = 625;
            this.yPos = 475;
            this.height = 20;
            this.width = 20;
            this.color = "rgba(200,0,0,1)";
            this.xvel = 0;
            this.yvel = 0
    }

    get pos2() {
        return {
            x: this.xPos,
            y: this.yPos,
            width: this.width,
            height: this.height,
            color: this.color
        };
    }

    move(bounds) {
        this.xPos += this.xvel;
        this.yPos += this.yvel;

        if (this.xPos + this.width > bounds.width)
        {
            this.xPos = bounds.width - this.width;
            this.xvel *= -1;
        } else if (this.xPos < 0 )
        {
            this.xPos = 0;
            this.xvel *= -1;
        }
        if (this.yPos + this.height > bounds.height)
        {
            this.yPos = bounds.height - this.height;
            this.yvel *= -1;

        } else if (this.yPos < 0 )
        {
            this.yPos = 0;
            this.yvel *= -1;
        }
    }
}

module.exports = Enemy;