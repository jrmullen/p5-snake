const resolution = 10;

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
    Canvas is 400x400 but is scaled to x10
    so it should be thought of as 40x40
     */
    scale(resolution);
    background(220);

    // Create objects on canvas and update them
    snake.update();
    snake.show();
    food.show();

    if (snake.eat(food)) {
        createNewFood();
        snake.grow();
    }
}

function createNewFood() {
    food = new Food(floor(random(canvasWidth)), floor(random(canvasHeight)));
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
