class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.gues = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.g=0; 
    }
    
    guess() {
        this.g =  Math.round((this.max + this.min) / 2) ;
        return this.g

    }

    lower() {
        this.max = this.g

    }

    greater() {
        this.min = this.g

    }
}

module.exports = GuessingGame;
