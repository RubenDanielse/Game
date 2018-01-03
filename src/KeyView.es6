class KeyView {
    constructor() {
        this.up = false;

        document.addEventListener("keypress", (onKeyPress) => {
            if (onKeyPress.keyCode === 32) {
                this.up = true;
            }
        });

       document.addEventListener("keyup", (onKeyUp) => {

        if(onKeyUp.keyCode === 32) {
              this.up =  false;
            }
        });
    }

    get location (){
        return {

            up: this.up,

        };
    }
}

module.exports = KeyView;

