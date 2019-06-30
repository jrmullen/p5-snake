const resolution = 20;

let snake;
let food;
let canvasWidth;
let canvasHeight;

function setup() {
    createCanvas(400, 400);
    frameRate(5);

    canvasWidth = floor(width / resolution);
    canvasHeight = floor(height / resolution);

    snake = new Snake();
    createNewFood();
}

function draw() {

    /*
    Canvas is 400x400 but is scaled to x20
    so it should be thought of as 20x20
     */
    scale(resolution);
    background(220);

    // Create objects on canvas and update them
    snake.update();
    snake.show();
    food.show();

    if (snake.hasEatenItself()) {
        print('GAME OVER');
        background(255, 0, 0);
        noLoop();
    }

    if (snake.eat(food)) {
        createNewFood();
        snake.grow();
    }
}

function createNewFood() {
    // TODO don't let a food appear on a pixel that the snake is on
    food = new Food(floor(random(canvasWidth)), floor(random(canvasHeight)));
}

function keyPressed() {
    switch (keyCode) {
        case LEFT_ARROW:
            if (snake.xDir !== 1) {
                snake.setDirection(-1, 0);
            }
            break;
        case RIGHT_ARROW:
            if (snake.xDir !== -1) {
                snake.setDirection(1, 0);
            }
            break;
        case DOWN_ARROW:
            if (snake.yDir !== -1) {
                snake.setDirection(0, 1);
            }
            break;
        case UP_ARROW:
            if (snake.yDir !== 1) {
                snake.setDirection(0, -1);
            }
            break;
    }
}
