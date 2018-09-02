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

18.) Added Span to the CSS file and gave all spans a white text color.

19.) Modified the If/Else statment for when we guess the correct one.
    When we guess correct, we will display correct.

20.) Added logic to the "if" statment of the "pickedColor" and created a new function, changeColors
    When the correct color is picked, then we will change to background color of all "squares" to match
    The function will A.) Loop through each square and B.) match the clicked color "if" correct.

21.) Modified the colors variable at the top of the JS file
    A.) Made colors equal to a function, generateRandomColors(6)
    B.)Added the function, generateRandomColrs(6), to the bottom of JS file
    C.) Psuedo coded the 3 steps to make this function generate 6 random colors
22.) Modified the generateRandomColors(num) function
    Added another function which will actually generate the 6 colors we need.
23.) Added a new function randomColor()
    Created 3 new variables, R G B, which each consist of there own random numbers between 0 - 255
24.) Concatenated the 3 variables before using the push method on the arr to generate the 6 random numbers.
    Included a comment for the HTML to explain where we get the number of Squares.
25.) Added an additional space between the , and " of the return rgb, specifically the G and B.
    During the actual gameplay, when we would pick the correct square it was not identical to the spacing of the clicked color.  
    This was the only true solution.
26.) Added logic to change to h1 style background color when we "clicked" the correct color.
    Created a new variable
    Modified our logic in our if/else correct statement.
27.) Deleted the Span CSS Selector so we could see our black text when we guess incorrectly.
    Added a new button to our HTML in addition to CSS to the "Stripe" Div.
28.) Created our resetButton
    added an event listener and included our psuedo code.
29.) Included our logic within our resetButton event listener
    generated new colors, picked a new random color, change the display to match the picked color, and changed the colors of the squares.
30.) Modified our logic to change the text of the New Game to Play Again?
    When we press Play Again? the h1 style background reverts back to the color in the CSS file.
31.) Added in 2 new buttons, 2 new variables, and another selector in our CSS file.
    Building an easy and hard mode for our game.
32.) Added 2 new Event Listeners with the alert message to make sure they are functioning properly.
33.)*** Modified the easy and hard event listeners. ***
    Used the method .remove and .add to toggle off and on the selected difficulty level.
34.) Adding additional functionality to the easyBtn
    Generates 3 new colors/squares; runs the pickColor() to get a new picked number; the Dom updates to display the picked color.
    Created a for loop that consist of an if where the first 3 squares will display the new random colors
    Else, the squares not selected will not display any colors.
35.) Improved our hardBtn functionality.
    Generated 6 new numbers, picked a number we want the user to select, displayed that color, and used a for loop to display the 6 squares.
36.) Created a new variable.  Allows us to tailor our squares to the specified difficulty of the game.
37.) Updated our Css file so that our h1 text is aligned centered.
38.) Updated our background color for our h1.
39.) Updated the logic in our JS file to make sure that our h1 background is consistently steel blue.
40.) Added in Margin 0 to both the body and h1 selectors in our CSS file.  Needed to get rid of any additional spaces.
41.) Modified the text-family of the body with 2 build in family styles.
    Not a good idea but added in 2 line breaks for the h1.
    h1 selector we added in line-height, font-weight, and text-transform
    incldued in the colorDisplay selector and modified its font-weight.
42.) Adding in padding into our h1 file.
43.) Added in the button selector to our css file, and we gave the borders none.
    Added in the following properties: background, text-transformation, color, height, font-weight, letter-spacing, and font size.
44.) Added the message selector into our CSS file.
    Included the display inline-block property and the width property.
45.)*** Added in the button:hover selector in our CSS file. ***
    When we hover over the buttons the colors we have will alternate.
    Also Modified the selected class in the CSS file to coincide with our button:hover selector
46.) Updated our square class property with the border-radius.  Gives us that rounded curve for our squares.
    Updated our button selector to give it a transition to all button properties when we hover over the button.
47.) Modified our .square class by giving it a background transition so that way it can fade out.