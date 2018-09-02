var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

// In the beginning, the init function runs
init();

function init(){
    // mode button even listeners are then setup
    setupModeButtons();
    // setup the square listeners
    setupSquares();
    // Then reset runs and it will actually generate the numbers and colors for us.
    reset();
}

function setupModeButtons(){
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if (clickedColor === pickedColor) {
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
}

function reset(){
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from the array
    pickedColor = pickColor();
    // change colorDisplay to match pickedColors
    colorDisplay.textContent = pickedColor;
    // removes "Play Again" and adds "New Colors"
    resetButton.textContent = "New Colors";
    // clears the "Correct" text to blank
    messageDisplay.textContent = "";
    // change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }
    h1.style.background = "steelblue";
}

// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     // Generated 3 new colors
//     colors = generateRandomColors(numSquares);
//     // Pick a color for the User to guess
//     pickedColor = pickColor();
//     // Display what that pickedColor was
//     colorDisplay.textContent = pickedColor;
//     // loops the length of the squares, this case 3
//     // if it is the 3 then squares color = the colors generated
//     // else, the remaining squares will not display
//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.background = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener("click", function () {
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//             squares[i].style.background = colors[i];
//             squares[i].style.display = "block";
//         }
//     }
// );

resetButton.addEventListener("click", function(){
   reset();
})

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