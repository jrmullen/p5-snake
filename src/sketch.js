const resolution = 10;

let snake;

function setup() {
    createCanvas(400, 400);
    frameRate(15);

    snake = new Snake();
}

function draw() {
    scale(resolution);
    background(220);

    snake.update();
    snake.show();
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
