// Home page


// Questionnaire


// Stats page



// Resource page


// Constructor function for question objects.
function Question(question, questionCategory, responseOptions, userResponse) {
    this.question = question;                   // string
    this.questionCategory = questionCategory;   // string
    this.responseOptions = responseOptions;     // array of strings or numbers?
    this.userResponse = userResponse;           // index in responseOptions
}

// Function to display one question on webpage.
function askQuestion() {}

// Function to keep track of which questions have been asked / which questions to ask next.
function askQuestions() {}

// Calculates results of user responses into format results chart can use.
function getResults() {}

// Displays results chart.
function showResults() {}