// Home page


// Questionnaire


// Stats page



// Resource page


// Constructor function for question objects.
function Question(question, questionCategory, responseOptions) {
    this.question = question;                   // string
    this.questionCategory = questionCategory;   // string
    this.responseOptions = responseOptions;     // array of strings or numbers?
    this.userResponse;           // index in responseOptions
}

// Temporary question object.
let question1 = new Question("What is your favorite color?", "Depression", [0,1,2,3])
askQuestion(question1);

// Function to display one question on webpage.
function askQuestion(questionObject) {
    // Display question on page.
    let mainEl = document.getElementsByTagName("main")[0];
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
}

// Function to keep track of which questions have been asked / which questions to ask next.
function askQuestions() {}

// Calculates results of user responses into format results chart can use.
function getResults() {}

// Displays results chart.
function showResults() {}