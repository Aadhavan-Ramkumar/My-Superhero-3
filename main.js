var Canvas = new fabric.Canvas("MyCanvas");

var BlockHeight = 30;
var BlockWidth = 30;

var PlayerX = 10;
var PlayerY = 10;

var PlayerObject = "";
var BlockObject = "";

function PlayerUpdate() {
    fabric.Image.fromURL("Player.png", function (img) {
        PlayerObject = img;
        PlayerObject.scaleToWidth(150);
        PlayerObject.scaleToHeight(140);
        PlayerObject.set({
            top: PlayerY,
            left: PlayerX
        });
        Canvas.add(PlayerObject);
    });
}

function NewImage(GetImage) {
    fabric.Image.fromURL(GetImage, function (img) {
        BlockObject = img;
        BlockObject.scaleToWidth(BlockWidth);
        BlockObject.scaleToHeight(BlockHeight);
        BlockObject.set({
            top: PlayerY,
            left: PlayerX
        });
        Canvas.add(BlockObject);
    });
}
//Part 2
window.addEventListener("keydown", MyKeyDown);

function MyKeyDown(e) {
    KeyPressed = e.keyCode;
    console.log(KeyPressed);
    if (e.shiftKey == true && KeyPressed == '80') {
        console.log("Shift + P");
        BlockHeight = BlockHeight + 10;
        BlockWidth = BlockWidth + 10;
        document.getElementById("CurrentHeight").innerHTML = BlockHeight;
        document.getElementById("CurrentWidth").innerHTML = BlockWidth;
    }
    if (e.shiftKey == true && KeyPressed == '77') {
        console.log("Shift + M");
        BlockHeight = BlockHeight - 10;
        BlockWidth = BlockWidth - 10;
        document.getElementById("CurrentHeight").innerHTML = BlockHeight;
        document.getElementById("CurrentWidth").innerHTML = BlockWidth;
    }
    if (KeyPressed == '37') {
        Left();
        console.log("Left");
    }
    if (KeyPressed == '38') {
        Up();
        console.log("Up");
    }
    if (KeyPressed == '39') {
        Right();
        console.log("Right");
    }
    if (KeyPressed == '40') {
        Down();
        console.log("Down");
    }
    if (KeyPressed == '70') {
        NewImage("Iron Man Face.png");
        console.log("F");
    }
    if (KeyPressed == '66') {
        NewImage("Spiderman Body.png");
        console.log("B");
    }
    if (KeyPressed == '76') {
        NewImage("Hulk Legs.png");
        console.log("L");
    }
    if (KeyPressed == '82') {
        NewImage("Thor Right Hand.png");
        console.log("R");
    }
    if (KeyPressed == '72') {
        NewImage("Captain America Left Hand.png");
        console.log("H");
    }
}
//Part 3
function Up() {
    if (PlayerY >= 30) {
        PlayerY = PlayerY - BlockHeight;
        console.log("The block height is " + BlockHeight);
        console.log("X = " + PlayerX + "Y = " + PlayerY);
        Canvas.remove(PlayerObject);
        PlayerUpdate();
    }
}

function Down() {
    if (PlayerY <= 450) {
        PlayerY = PlayerY + BlockHeight;
        console.log("The block height is " + BlockHeight);
        console.log("X = " + PlayerX + "Y = " + PlayerY);
        Canvas.remove(PlayerObject);
        PlayerUpdate();
    }
}

function Left() {
    if (PlayerX >= 30) {
        PlayerX = PlayerX - BlockHeight;
        console.log("The block height is " + BlockWidth);
        console.log("X = " + PlayerX + "Y = " + PlayerY);
        Canvas.remove(PlayerObject);
        PlayerUpdate();
    }
}

function Right() {
    if (PlayerX <= 840) {
        PlayerX = PlayerX + BlockHeight;
        console.log("The block height is " + BlockWidth);
        console.log("X = " + PlayerX + "Y = " + PlayerY);
        Canvas.remove(PlayerObject);
        PlayerUpdate();
    }
}