const resolution = 10;

let snake;
let food;

function setup() {
    createCanvas(400, 400);
    frameRate(5);

    snake = new Snake();
    food = new Food(10, 10);
}

function draw() {

    /*
    Canvas is 400x400 but is scaled to x10
    so it should be thought of as 40x40
     */
    scale(resolution);
    background(220);

    snake.update();
    snake.show();
    food.show();
}

function keyPressed() {

    switch (keyCode) {
        case LEFT_ARROW:
            snake.setDirection(-1, 0);
            break;
        case RIGHT_ARROW:
            snake.setDirection(1, 0);
            break;
        case DOWN_ARROW:
            snake.setDirection(0, 1);
            break;
        case UP_ARROW:
            snake.setDirection(0, -1);
            break;
    }
}
