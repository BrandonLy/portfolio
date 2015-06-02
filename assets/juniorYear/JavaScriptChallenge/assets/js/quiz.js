//These arrays contain the questions for the quiz
var historyquestions = ["Why was the internet created?", "What role did DARPA play in the creation of the internet?", "When did commercial ISPs begin to pop up?", "What was the first word to be sent across the internet?", "What was ARPANET?", "Who created http://?", "What does the W3C do?", "Which of the following was the first major browser to be marketed?", "Which browser was Netscape influenced by?", "What is the difference between the internet and the world wide web?"];

var htmlquestions = ["What tag are all pages supposed to start with?", "Which tag will create a new paragraph?", "Which version of html is currently recommended by the W3C school?", "What type of tag should be used to group elements on your page?", "What is the appropriate way to create a new paragraph with the words This is a paragraph inside?", "Every opening html tag should have a what?", "How do you link to an external style sheet in HTML 5?", "Which browser doesn’t support HTML 5?", "How do you write a comment in HTML?", "Why should you add comments to your code?"];

var cssquestions = ["What is the benefit of using an external style sheet?", "What does CSS stand for?", "How do you change the color of text in CSS?", "Which answer will allow set the background image?", "Why should you use percentages to scale your pages instead of pixels?", "How can you select a color in CSS?", "How do you change the opacity in CSS?", "Which hex code represents white", "Which hex code represents black", "What do the digits in a hex code represent?"];

var jsquestions = ["How do you write a comment in JavaScript?", "What does pop do?", "What does unshift do?", "What does Math.random() do?", "What is the purpose of using functions?", "What is the first index in an array?", "Which of these will tell you whether a value is odd or even?", "Which of the following will return the value 7?", "What is the difference between parseFloat and parseInt?", "Which of these will output 3?"];

//This line of code creates a variable that has a value of an array equal to the lables in the html page
var radioChoices = document.getElementsByTagName("label");
var radioForm = document.getElementById("answers");
var radioValues = radioForm.getElementsByTagName("input");

//These are the answer choices for the quiz
var historychoiceA = ["The military wanted a way to communicate packets over a long distance", "They created it", "1970’s", "Login", "One of the first successful packet switching networks", "Vannevar Bush", "Update html pages for people", "Google Chrome", "Mosaic", "The internet is the only one that still exists"];
var historychoiceB = ["Steve Jobs was bored", "They wanted to prevent it from happening", "1980’s", "Test", "The military company behind the internet", "Donald Davies", "Set standards and guidelines to help the internet grow", "Nexus", "Internet Explorer", "The world wide web is an information sharing network, while the internet is a network of computers."];
var historychoiceC = ["People wanted a way to talk over long distances", "They were not involved", "1990’s", "Email", "The president’s internet provider", "Tim Berners-Lee", "Develops new browsers for companies like Mozilla", "Erwise", "Samba", "The internet is an information sharing network, while the world wide web is a network of computers."];
var historychoiceD = ["Jonathan had too much time on his hands", "They funded it", "1860’s", "Obama", "The name of the first computer that provided the internet", "Douglas Engelbart", "Organizes the search results for Google", "Mosaic", "Opera", "The internet was Russian and the world wide web is American"];

var htmlchoiceA = ["< html >", "< paragraph >", "HMTL 4", "< span >", "< p >This is a paragraph", "A closing tag", "< css > < /css >", "Chrome", "/*This is a comment*/", "It makes it easier to understand what you were trying to do later on"];
var htmlchoiceB = ["< !DOCTYPE html >", "< textarea >", "HTML 5", "< group >", "< p >\"This is a paragraph\"", "A backslash", "< src=\"\" >", "Safari 6", "< !--This is a comment >", "It makes it so others can read your code"];
var htmlchoiceC = ["< head >", "< input >", "XHTML 1", "< class >", "< p >This is a paragraph< /p >", "a forward slash", "< style >< /style >", "Firefox", "//This is a comment", "It allows you to exclude a portion of code without deleting"];
var htmlchoiceD = ["< new >", "< p >", "CSS 3", "< div >", "< p >\"This is a paragraph\"< /p >", "quotation marks", "< link type=\"\" > ", "Internet Explorer 6", "< comment >This is a comment< /comment >", "All of the above"];

var csschoiceA = ["It allows you to style mulitple pages at the same time", "Combat Service Support", "text-color", "background-image: url(\"source goes here\");", "Pixels are only used in China", "Hex codes", "opacity:", "#FFFF00", "#000000", "red, blue, green"];
var csschoiceB = ["It's the only way to style an html page", "Coding Style Support", "font-color", "background-img: url(\"source goes here\");", "Pixels are only understood by newer browsers", "RGB codes", "rgba()", "#00FFFF", "#FFFFFF", "blue, green, red"];
var csschoiceC = ["It allows you to style the page more ways", "Cascading Style Sheets", "word-color", "background: url(\"source goes here\");", "Percentages allow you to use jQuery", "Name", "gradient:", "#000000", "#FFFF00", "red, green, blue"];
var csschoiceD = ["It's the only way to code in Sublime", "Code Style Sheets", "color", "background-image: src(\"source goes here\");", "Percentages make your page more dynamic", "All of the above", "transparency:", "#FFFFFF", "00FFFF", "red, yellow, blue"];

var jschoiceA = ["/*Comment goes here*/ or /-Comment goes here-/", "It takes the last value of an array off and returns it", "It takes a value and adds it to the end of an array", "It creates a number between 1 and 2", "It allows you to create local variables", "1", "if ( x % 2 != 0){console.log(it’s odd);}", "console.log(3 + 4);", "parseInt requires a second argument", "console.log(Math.floor(2.7));"];
var jschoiceB = ["/*Comment goes here*/ or //Comment goes here", "It takes the first value of an array off and returns it", "It takes a value off the end of an array and returns it", "It creates a number between -1 and 1", "It allows you to reuse blocks of code", "2", "if ( x /2 != 0){console.log(it’s odd);}", "console.log(7);", "parseFloat requires a second argument", "console.log(Math.round(2.3));"];
var jschoiceC = ["<--Comment goes here--> or ?-Comment goes here", "It puts a value onto the end of the array", "It takes a value off the beginning of an array and returns it", "It creates a number between 0 and 1", "It allows you to shorten your code", "3", "if ( x % 1 != 0){console.log(it’s odd);}", "console.log(parseFloat(“3”) + parseFloat(“4”));", "parseFloat allows you to pull a number from a string", "console.log(Math.ceil(3.2));"];
var jschoiceD = ["#Comment goes here", "It puts a value onto the front of an array", "It takes a value and adds it to the beginning of an array", "It creates a number between -1 and 0", "All of the above", "0", "if ( x / 1a != 0){console.log(it’s odd);}", "All of the above", "parseInt allows you to pull a number from a string", "console.log(Math.floor(3.2));"];

//will be used to set values for the answer choices 1 will be correct and 0 will be incorrect
var historyAvalues = [1,0,0,1,1,0,0,0,1,0];
var historyBvalues = [0,0,0,0,0,0,1,0,0,1];
var historyCvalues = [0,0,1,0,0,1,0,0,0,0];
var historyDvalues = [0,1,0,0,0,0,0,1,0,0];

var htmlAvalues = [0,0,1,0,0,1,0,0,0,0];
var htmlBvalues = [1,0,0,0,0,0,0,0,1,0];
var htmlCvalues = [0,0,0,0,1,0,0,0,0,0];
var htmlDvalues = [0,1,0,1,0,0,1,1,0,1];

var cssAvalues = [1,0,0,1,0,0,0,0,1,0];
var cssBvalues = [0,0,0,0,0,0,1,0,0,0];
var cssCvalues = [0,1,0,0,0,0,0,0,0,1];
var cssDvalues = [0,0,1,0,1,1,0,1,0,0];

var jsAvalues = [0,1,0,0,0,0,1,0,1,0];
var jsBvalues = [1,0,0,0,0,0,0,0,0,0];
var jsCvalues = [0,0,0,1,0,0,0,0,0,0];
var jsDvalues = [0,0,1,0,1,1,0,1,0,1];

var right = 0;
var wrong = 0;
//This will be used later to check the value of the selected radio value
var selected;
radioValues[0].style.display = "none";
radioValues[1].style.display = "none";
radioValues[2].style.display = "none";
radioValues[3].style.display = "none";
//This code makes it so the radio buttons on the html page are invisible
document.getElementById("answers").style.display = "none";

//var name = prompt("What is your name?");
//if(isNaN(name) == true && name != null){
//    document.getElementById("name").innerHTML = "Current Quiztaker: " + name;
//}else{
//    name = prompt("Please enter a valid name");
//    document.getElementById("name").innerHTML = "Current Quiztaker: " + name;
//}

//The code above this comment will write into the html page the person taking the quiz based on their response to the prompt


//This will be the counter for the quiz, so it knows how many questions have been called.
var i = 0;
//document.getElementById("submit").style.display = "none";
var total;
//This function will write the number of correct and incorrect answers in the html file
function updateScore(){
    total = i - 1;
    //document.getElementById("right").innerHTML = right;
    //document.getElementById("wrong").innerHTML = wrong;
    document.getElementById("score").innerHTML = right + "/" + total;
}

function jsquiz(){
    if (i <= 39){
        //This code will change the html's heading to tell the user what type of questions they are seeing
        //This works the same within cssquiz(), htmlquiz(), and history quiz()
        document.getElementById("quizhead").innerHTML = "JavaScript Information";
        //This code generates a random number based on the number of items left in the array, so one question will not be called twice
        //This works the same within cssquiz(), htmlquiz(), and history quiz()
        randomInt = Math.floor(Math.random() * jsquestions.length); 
        //This takes the id question and fills it with a string based on the array's index of a random number 1 - the array's length
        //This works the same within cssquiz(), htmlquiz(), and historyquiz()
        document.getElementById("question").innerHTML = jsquestions[randomInt];
        //This fills the radio buttons with the answer choices by calling the array's values based on the random number above
        //This works the same within cssquiz(), htmlquiz(), and history quiz()
        radioChoices[0].innerHTML = jschoiceA[randomInt];
        radioChoices[1].innerHTML = jschoiceB[randomInt];
        radioChoices[2].innerHTML = jschoiceC[randomInt];
        radioChoices[3].innerHTML = jschoiceD[randomInt];
        //will set the value of the input tags in html to be either a 0 or 1 based the on the generated index
        //works the same in cssquiz(), htmlquiz(), and historyquiz()
        radioValues[0].value = jsAvalues[randomInt];
        radioValues[1].value = jsBvalues[randomInt];
        radioValues[2].value = jsCvalues[randomInt];
        radioValues[3].value = jsDvalues[randomInt];
        //The splices below make it so an item that has already been called for the quiz will be removed and no longer can be used
        //This works the same within cssquiz(), htmlquiz(), and history quiz()
        jsquestions.splice(randomInt, 1);
        jschoiceA.splice(randomInt, 1);
        jschoiceB.splice(randomInt, 1);
        jschoiceC.splice(randomInt, 1);
        jschoiceD.splice(randomInt, 1);
        //This splice below removes the previously called values from the array, making each relative and dynamic
        jsAvalues.splice(randomInt, 1);
        jsBvalues.splice(randomInt, 1);
        jsCvalues.splice(randomInt, 1);
        jsDvalues.splice(randomInt, 1);
        //This adds one to the variable i so that we know how many questions have been called
        //This works the same within cssquiz(), htmlquiz(), and historyquiz()
        i++;
        updateScore();
    }else if(i == 40){
        i++;
        updateScore();
        //document.getElementById("finish").innerHTML = score;
        //This will remove the next question button from the html page after all the questions have been called

var score = Math.round((right / total)*100);
document.getElementById("finalScore").innerHTML = "You scored " + score + "%";
    }else{
        alert("You've already finished the quiz");
    }
}

function cssquiz(){
    if (i <= 29){
        document.getElementById("quizhead").innerHTML = "CSS Information";
        randomInt = Math.floor(Math.random() * cssquestions.length);                   
        document.getElementById("question").innerHTML = cssquestions[randomInt];
        radioChoices[0].innerHTML = csschoiceA[randomInt];
        radioChoices[1].innerHTML = csschoiceB[randomInt];
        radioChoices[2].innerHTML = csschoiceC[randomInt];
        radioChoices[3].innerHTML = csschoiceD[randomInt];
        radioValues[0].value = cssAvalues[randomInt];
        radioValues[1].value = cssBvalues[randomInt];
        radioValues[2].value = cssCvalues[randomInt];
        radioValues[3].value = cssDvalues[randomInt];
        cssquestions.splice(randomInt, 1);
        csschoiceA.splice(randomInt, 1);
        csschoiceB.splice(randomInt, 1);
        csschoiceC.splice(randomInt, 1);
        csschoiceD.splice(randomInt, 1);
        cssAvalues.splice(randomInt, 1);
        cssBvalues.splice(randomInt, 1);
        cssCvalues.splice(randomInt, 1);
        cssDvalues.splice(randomInt, 1);
        i++;
        updateScore();
    }else{
        //This will say that if all the questions in this part of the quiz have been used, move on to the next one
        //This works the same in the html and history quizzes
        jsquiz();
    }
}

function htmlquiz(){
    if (i <= 19){
        document.getElementById("quizhead").innerHTML = "HTML Information";
        randomInt = Math.floor(Math.random() * htmlquestions.length);                   
        document.getElementById("question").innerHTML = htmlquestions[randomInt];
        //document.getElementById("submit").style.display = "block";
        radioChoices[0].innerHTML = htmlchoiceA[randomInt];
        radioChoices[1].innerHTML = htmlchoiceB[randomInt];
        radioChoices[2].innerHTML = htmlchoiceC[randomInt];
        radioChoices[3].innerHTML = htmlchoiceD[randomInt];
        radioValues[0].value = htmlAvalues[randomInt];
        radioValues[1].value = htmlBvalues[randomInt];
        radioValues[2].value = htmlCvalues[randomInt];
        radioValues[3].value = htmlDvalues[randomInt];
        htmlquestions.splice(randomInt, 1);
        htmlchoiceA.splice(randomInt, 1);
        htmlchoiceB.splice(randomInt, 1);
        htmlchoiceC.splice(randomInt, 1);
        htmlchoiceD.splice(randomInt, 1);
        htmlAvalues.splice(randomInt, 1);
        htmlBvalues.splice(randomInt, 1);
        htmlCvalues.splice(randomInt, 1);
        htmlDvalues.splice(randomInt, 1);
        i++;
        updateScore();
    }else{
        cssquiz();
    }
}

function historyquiz(){
    if (i <= 9){
        document.getElementById("quizhead").innerHTML = "Historical Information";
        var randomInt = Math.floor(Math.random() * historyquestions.length);
        document.getElementById("question").innerHTML = historyquestions[randomInt];
        document.getElementById("answers").style.display = "block";
        radioValues[0].style.display = "inline";
        radioValues[1].style.display = "inline";
        radioValues[2].style.display = "inline";
        radioValues[3].style.display = "inline";
        document.getElementById("next").style.display = "none";
        radioChoices[0].innerHTML = historychoiceA[randomInt];
        radioChoices[1].innerHTML = historychoiceB[randomInt];
        radioChoices[2].innerHTML = historychoiceC[randomInt];
        radioChoices[3].innerHTML = historychoiceD[randomInt];
        radioValues[0].value = historyAvalues[randomInt];
        radioValues[1].value = historyBvalues[randomInt];
        radioValues[2].value = historyCvalues[randomInt];
        radioValues[3].value = historyDvalues[randomInt];
        document.getElementById("next").innerHTML = "Next Question";
        historyquestions.splice(randomInt, 1);
        historychoiceA.splice(randomInt, 1);
        historychoiceB.splice(randomInt, 1);
        historychoiceC.splice(randomInt, 1);
        historychoiceD.splice(randomInt, 1);
        historyAvalues.splice(randomInt, 1);
        historyBvalues.splice(randomInt, 1);
        historyCvalues.splice(randomInt, 1);
        historyDvalues.splice(randomInt, 1);
        i++;
        updateScore();
    }else{
        htmlquiz();
    }
}

//This function cycles through the buttons until it finds one that has been selected and changes the value of selected to that button
function getCheckedRadio() {
    for (var int = 0; int < radioValues.length; int++) {
        selected = radioValues[int];
        if (selected.checked) {
        return selected;
        }
    }
}
//This function takes the new value of selected and checks if it matches 1 (correct), 0 (wrong), or if nothing is selected
function checkAnswer(){
    //document.getElementById("submit").style.display = "none";
    getCheckedRadio();
    if(selected.value == 1){
        document.getElementById("displayCorrect").innerHTML = "That's Correct";
        right++;
        selected.checked = false;
    }else if(selected.value == 0){
        document.getElementById("displayCorrect").innerHTML = "That's Incorrect";
        wrong++;
        selected.checked = false;
    }else{
        document.getElementById("displayCorrect").innerHTML = "You Must Select an Answer Choice";
    }
}