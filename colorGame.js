var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    // Generated 3 new colors
    colors = generateRandomColors(3);
    // Pick a color for the User to guess
    pickedColor = pickColor();
    // Display what that pickedColor was
    colorDisplay.textContent = pickedColor;
    // loops the length of the squares, this case 3
    // if it is the 3 then squares color = the colors generated
    // else, the remaining squares will not display
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
});

resetButton.addEventListener("click", function(){
    // generate all new colors
    colors =generateRandomColors(6);
    // pick a new random color from the array
    pickedColor = pickColor();
    // change colorDisplay to match pickedColors
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = "#232323";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares
    squares[i].addEventListener("click", function() {
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    // Loop Through all Squares
    for(var i = 0; i < squares.length; i++) {
    // Change colors of all Squares to match the correct square
    squares[i].style.background = color;
    }

}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
        // Need a random Number for RGB that is a whole number
    return colors[random];
}

// This function below will generate 3 single numbers to create our RGB.
// We then can modify the "num" parameter so that it can create that many different colors.
// 1 num = 1 color, 2 num = 2 colors, 3 num = 3 colors, etc...
function generateRandomColors(num){
    // Make an array
    var arr = [];
    // Repeat num times
    for(var i = 0; i < num; i++){
        // get random color and push to arr
        arr.push(randomColor())
    }
    // return that array
    return arr;
}

function randomColor(){
    // pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    // pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    // pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}