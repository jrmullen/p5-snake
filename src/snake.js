class Snake {

    constructor() {
        this.body = [];
        this.body[0] = createVector(floor(canvasHeight / 2), floor(canvasWidth / 2));
        this.xDir = 0;
        this.yDir = 0;
        this.len = 0;
    }

    show() {
        for (let i = 0; i < this.body.length; i++) {
            noStroke();
            fill('black');
            rect(this.body[i].x, this.body[i].y, 1, 1);
        }
    }

    update() {
        let head = this.body[this.body.length - 1].copy();
        this.body.shift();
        head.x += this.xDir;
        head.y += this.yDir;
        this.body.push(head);
    }

    setDirection(x, y) {
        this.xDir = x;
        this.yDir = y;
    }

    eat(food) {
        let x = this.body[this.body.length - 1].x;
        let y = this.body[this.body.length - 1].y;

        return x === food.x && y === food.y;
    }

    grow() {
        let head = this.body[this.body.length - 1].copy();
        this.len++;
        this.body.push(head);
    }

    hasEatenItself() {
        let x = this.body[this.body.length - 1].x;
        let y = this.body[this.body.length - 1].y;

        if (x > canvasWidth - 1 || x < 0 || y > canvasHeight - 1 || y < 0) {
            return true;
        }

        for (let i = 0; i < this.body.length - 1; i++) {
            let part = this.body[i];
            if (part.x === x && part.y === y) {
                return true;
            }
        }

        return false;
    }

}