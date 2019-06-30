class Food {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show() {
        noStroke();
        fill('red');
        rect(this.x, this.y, 1, 1);
    }
}