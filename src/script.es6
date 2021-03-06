const Player = require("./Player.es6");
const Enemy = require("./Enemy.es6");
const Particles = require("./particles.es6");
const KeyView = require("./KeyView.es6");
const CanvasView = require("./CanvasView.es6");
import StartButton from './StartButton'

import './style.css';
class Controller {
    constructor() {
        this.player = new Player();
        this.enemy = new Enemy();
        this.particles = [];
        this.key = new KeyView();
        this.canvas = new CanvasView();
        this.lastPush = Date.now();                 // Huidige tijd
        this.interval = Math.random() * 2000;       // Random getal tussen 0 en 2000
        this.hardness = 0;                          // Zet moeilijkheidsgraad
    }
    loop() {
        this.canvas.clear();
        this.player.move(this.key.location);
        this.player.increaseScore();
        this.enemy.move(this.canvas.bounds);
        this.canvas.drawPlayer(this.player.pos1);
        this.canvas.drawEnemy(this.enemy.pos2);
        this.canvas.drawScore(this.player.score);
        this.canvas.drawLife(this.player.life);

        if (Date.now() - this.lastPush > this.interval){
            let x = this.enemy.pos2.x + this.enemy.pos2.width/2;
            let y = this.enemy.pos2.y + this.enemy.pos2.height/2;
            this.particles.push(new Particles(x,y,this.hardness));

            this.lastPush = Date.now();             // Zet nieuwe huidige tijd
            this.interval = Math.random() * 2000;   // Zet nieuw random getal
        //    console.log("new")
        }

        this.hardness = 3+this.player.score/500;

        this.particles.forEach((part) => {
            part.move();
            part.die();
            this.canvas.drawParticles(part.pos3);
            let dead = this.player.collision(part.pos3);
            if (dead) {
                part.particle.dead = true;
            }
        });

        this.particles = this.particles.filter (function(part) {
            return part.particle.dead === false;
        });

        window.requestAnimationFrame(() => {
            this.loop();
        });
    }
}


window.onload = () => {
    const control = new Controller();
    // voert control.loop uit wanneer de startbutton klaar is met aftellen
    document.body.appendChild(StartButton(() => control.loop()));
}