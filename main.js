canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
rover_X = 10;
rover_Y = 10;
background_image = "racing (1).gif";
rover_image = "rover.png";
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground();
    background_imgTag = src = background_image;
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover();
    rover_imgTag = src = background_image;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadRover() {
    ctx.drawImage(rover_imgTag, rover_X, rover_Y, rover_width, rover_height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}
function car1_up()
{
    if(car1_y>0)
    {
        car1_y=car1_y - 10;
        console.log("When up arrow is pressed, x = " + "" )
    }
}
function up() {
    if(car1_y>=0) {
        car1_y=car1_y - 10;
        console.log("Block image height =" + block_image_height);
        console.log("Block image Width =" + block_image_width);
        console.log("When up arrow key is pressed, x=" + car1_x +",y=" + car1_y);
        canvas.remove(car1_object);
        car1_update();
    }
 }
 function down() {
        if(car1_y<=450) {
            car1_y=car1_y + 10;
        console.log("Block image height =" + block_image_height)
        console.log("Block image Width =" + block_image_width);
        console.log("When down arrow key is pressed, x= "+ car1_x +",y=" + car1_y);
        canvas.remove(car1_object);
        car1_update();
        }
    }
    function left() {
     if(car1_x>=0) {
        car1_x=car1_x - 10;
     console.log("Block image height =" + block_image_height)
     console.log("Block image Width =" + block_image_width);
     console.log("When left arrow key is pressed, x= "+ car1_x +",y=" + car1_y);
     canvas.remove(car1_object);
     car1_update();
     }
 }
 function right() {
     if(car1_x<850) {
        car1_x=car1_x + 10;
     console.log("Block image height =" + block_image_height)
     console.log("Block image Width =" + block_image_width);
     console.log("When right arrow key is pressed, x= "+ car1_x +",y=" + car1_y);
     canvas.remove(car1_object);
     car1_update();
     }
 }
 