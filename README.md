# color-game

1.) Created boilerplate with the necessary files.

2.) Added 7 divs, 1 for the conatiner and 6 for the squares.

3.) Added a background color from the css file

4.) Created a classList for the squares to manipulate the width of the squares.

5.)Added in the h1 header

6.) Gave our h1 header a white text

7.) Added our actually squares by using:
    Width, Padding-Bottom, Background, Float, Margin

8.) Added in our #container to the css file to have a defined shape, 600px, and margin, 0 auto.

9.) Created the colors var array that consisted of 6 different colors using RGB.

10.) Created the squares var that consisted of the class .square
    Allows each square to be manipulated

11.) Used a for loop to "loop" through the lengths of the squares then we allowed each "square" from the var to = the colors associated with the "colors" var we created.

12.) Added a <span> tag to the h1 header.
    Allows the textContent to be updated to the "pickedColor" we hard coded in.

13.) Created two new vars
    A.) pickedColor = colors[i]
        The picked color is what controls the color we want the "user" to see in the h1 header.
    B.) colorDisplay = document.getElementById("colorDisplay")

14.) Set colorDisplay.textContent = pickedColor

15.) Added an addEventListener on the squares[i]
    The event listener is a "click" function
    Created a var clickedColor = this.style.backgroundColor
    Included a "if/else" statement for when the "user" clicked the "correct" and/or "wrong" square.

16.) Modified the "wrong Selection" by adding "this.style.background" = "#232323", which is the background-color

17.) Created a new Div with a Span tag nested inside.
    Gave the Span an id = message
    Went into the JS file and created  a new var, messageDisplay
    Added the textContent, "Try Again";