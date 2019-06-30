class Snake {

    constructor() {
        this.x = 1;
        this.y = 1;
        this.xDir = 0;
        this.yDir = 0;
    }

    show() {
        noStroke();
        fill('black');
        rect(this.x, this.y, 1, 1);
    }

    update() {
        this.x += this.xDir;
        this.y += this.yDir;
    }

    setDirection(x, y) {
        this.xDir = x;
        this.yDir = y;
    }





}