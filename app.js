// Constructor function for question objects.
function Question(question, questionCategory, responseOptions, responseOptionScores) {
    this.question = question;                   // string
    this.questionCategory = questionCategory;   // string
    this.responseOptions = responseOptions;     // array of strings
    this.responseOptionScores = responseOptionScores;   // array of numbers
    this.userResponse;                          // index in responseOptions
}

// Function to display one question on webpage.
function askQuestion(questionObject) {
    // Clear page.
    let mainEl = document.getElementsByTagName("main")[0];
    mainEl.innerText = "";

    // Add question title to page.
    let questionTitle = document.createElement("h1");
    for (let i = 0; i < questionObjects.length; i++) {
        if (questionObjects[i].question == questionObject.question) {
            questionTitle.innerText = `Question ${i+1} of ${questionObjects.length}`;
            break;
        }
    }
    mainEl.appendChild(questionTitle);

    // Display question on page.
    let questionEl = document.createElement("p");
    questionEl.innerText = questionObject.question;
    mainEl.appendChild(questionEl);

    // Display answer choices on page.
    let answersEl = document.createElement("ul");
    for (i = 0; i < questionObject.responseOptions.length; i++) {
        let answerEl = document.createElement("li");
        answerEl.innerText = questionObject.responseOptions[i];
        answersEl.appendChild(answerEl);
    }
    mainEl.appendChild(answersEl);

    document.getElementsByTagName("ul")[0].addEventListener("click", handleResponse);   // Wait for user to click their response choice.
}

// Function to handle user response (click).
// Records which response option the user selected.
function handleResponse(event) {
    let elementClicked = event.target; // returns the list element "<li>3</li>" that was clicked on
    
    // Record user selection.
    let questionObject;

    // Find the questionObject that corresponds to the question the user responded to.
    for (i = 0; i < questionObjects.length; i++) {
        if (document.getElementsByTagName("p")[0].innerText == questionObjects[i].question) {
            questionObjects[i].userResponse = Array.from(elementClicked.parentNode.children).indexOf(elementClicked);
            break;
        }
    }
    // Ask next question if questions are left to be asked. Otherwise, get results.
    if (questionsAlreadyAsked.length == questionObjects.length) {
        document.getElementsByTagName("ul")[0].removeEventListener("click", handleResponse);
        getResults();
    } else {
        askNextQuestion();
    }
}

function askNextQuestion() {
    // Ask all the questions in questionObjects. Do not ask repeat questions.
    for (let i = 0; i < questionObjects.length; i++) {
        // if questoinObjects[i] is in questionsAlreadyAsked, go to next questionObject
        if (questionsAlreadyAsked.includes(questionObjects[i])) {
            // do nothing, go to next question.
        } else {
            // else ask the question and push it into the questions already asked array.
            questionsAlreadyAsked.push(questionObjects[i]); // Keep track of which questions the user has been asked.
            askQuestion(questionObjects[i]);
            break;
        }
    }
}
 
// Calculates results of user responses into format results chart can use.
function getResults() {

    // For loop to loop through questionObjects.
    // After this loop completes should have array that looks like this: ["Depression", "GAD", "SAD", "ADHD", "PTSD", "GD"];
    let questionCategories = [];
    let sumOfEachCategory = [];
    for (let i = 0; i < questionObjects.length; i++) {
        // Push new questionCategories into an array to keep track of which questionCategories exist
        if (questionCategories.includes(questionObjects[i].questionCategory)) {
            // Question category is already in the questionCategories list, so do nothing.
        } else {
            questionCategories.push(questionObjects[i].questionCategory)
            sumOfEachCategory.push(0);
        }
    }

    // New array to keep track of total values for each category: sumOfEachCategory = [sumOfDepressionScores, sumofGADScores, ...]
    // For loop to assemble the results for each index in the question categories array.
    for (let j = 0; j < questionObjects.length; j++) {
        for (let i = 0; i < questionCategories.length; i++) {
            if (questionCategories[i] == questionObjects[j].questionCategory) {
                sumOfEachCategory[i] = sumOfEachCategory[i] + questionObjects[j].responseOptionScores[Number(questionObjects[j].userResponse)];
            }
        }
    }

    console.log(questionCategories);
    console.log(sumOfEachCategory);

    // Goal is to get array of questionCategories.
    // 2nd goal is to get array of scores for each question category (sumOfEachCategory).
}

// Displays results chart.
function showResults() {

}

// Temporary question object.
let question1 = new Question("What is your favorite color?", "Depression", ["Not likely","Sometimes","Never","Occasionally"], [0, 5, 10, 15])
let question2 = new Question("What is your favorite color2?", "Depression2", [5,6,7,8], [0, 6, 11, 16])

let questionObjects = [];

for (let i = 0; i < question.length; i++) {
    questionObjects.push(question)
}


// Keep track of which questions have already been asked.
let questionsAlreadyAsked = [];
askNextQuestion();
