var canvas =  new fabric.Canvas('myCanvas');

var x_pos = 10;
var y_pos = 10;

var block_image_height = 30;
var block_image_width = 30; 

var player_object = "";
var block_image_object = "";

function player_update() 
{
fabric.Image.fromURL("player.png", function(Img){

player_object = Img; 
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top: y_pos, 
left: x_pos
}
);
canvas.add(player_object);
});
}

function block_update(get_image) 
{
fabric.Image.fromURL(get_image, function(Img){

block_image_object = Img; 
block_image_object.scaleToWidth(block_image_height);
block_image_object.scaleToHeight(block_image_width);
block_image_object.set({
top: y_pos, 
left: x_pos
}
);
canvas.add(block_image_object);
});
}
/*
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
keyPressed = e.keyCode;
console.log(keyPressed);

if(e.shiftKey == true && keyPressed == "80") {
block_image_width = block_image_width + 10;
block_image_height = block_image_height + 10;
document.getElementById("current_width").innerHTML = block_image_width;
document.getElementById("current_height").innerHTML = block_image_height;
}

if(e.shiftKey == true && keyPressed == "77") {
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
    }

if(keyPressed == "37") {
left();
console.log('left arrow key is pressed');
}
if(keyPressed == "38") {
up();
console.log('up arrow key is pressed');
}
if(keyPressed == "39") {
right();
console.log('right arrow key is pressed');
}
if(keyPressed == "40") {
down();
console.log('down arrow key is pressed');
}

if(keyPressed == "67") {
block_update('cloud.jpg');

}

if(keyPressed == "68") {
    block_update('dark_green.png');
}

if(keyPressed == "71") {
block_update('ground.png');
}

if(keyPressed == "76") {
block_update('light_green.png');

}

if(keyPressed == "82") {
block_update('roof.jpg');

}

if(keyPressed == "84") {
block_update('trunk.jpg');

}

if(keyPressed == "85") {
block_update('unique.png');

}

if(keyPressed == "87") {
block_update('wall.jpg');

}

if(keyPressed == "89") {
block_update('yellow_wall.png');

}
}

function up() {
if(y_pos >=0) {
y_pos = y_pos - block_image_height;
canvas.remove(player_object);
player_update();

}
}

function down() {
    if(y_pos <=460) {
    y_pos = y_pos + block_image_height;
    canvas.remove(player_object);
    player_update();
    
    }
    }

    function left() {
        if(x_pos >=0) {
        x_pos = x_pos - block_image_width;
        canvas.remove(player_object);
        player_update();
        
        }
        }

        function right() {
            if(x_pos <=650) {
            x_pos = x_pos + block_image_width;
            canvas.remove(player_object);
            player_update();
            
            }
            }
*/