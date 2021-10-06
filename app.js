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
    showResults(questionCategories, sumOfEachCategory)
    // Goal is to get array of questionCategories.
    // 2nd goal is to get array of scores for each question category (sumOfEachCategory).
}

// Displays results chart.
function showResults(x, y) {
    
    console.log("hi")        
    let mainEl = document.getElementsByTagName("main")[0]
    mainEl.innerText = ""
    let canvasEl = document.createElement("canvas")
    mainEl.appendChild(canvasEl)
    let ctx = canvasEl.getContext("2d")
    
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: x,
            datasets: [{
                label: 'Questionnaire Results',
                data: y,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}




// Question bank and associated arrays to build question objects out of.
QuestionCategory = ['Depression','Depression','Depression','Generalized Anxiety','Generalized Anxiety','Social Anxiety','Social Anxiety','Social Anxiety','Social Anxiety','Social Anxiety','ADHD','ADHD','ADHD','ADHD','ADHD','ADHD','Gender Dysphoria','Gender Dysphoria','Gender Dysphoria','Gender Dysphoria','Gender Dysphoria','PTSD','PTSD','PTSD']
Questions = ['Little interest or pleasure in doing things','Feeling down, depressed, or hopeless','Thoughts that you would be better off dead, or thoughts of hurting yourself in some way?','Feeling nervous, anxious, or on edge','Not being able to stop or control worrying','I find it difficult to mix comfortably with the people I work with.','I am at ease meeting people at parties, etc. (Invert score!!)','I have difficulty talking with other people.','I worry about expressing myself in case I appear awkward.','I find myself worrying that I won\'t know what to say in social situations.','How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?','How often do you have difficulty getting things in order when you have to do a task that requires organization?','How often do you have problems remembering appointments or obligations?','When you have a task that requires a lot of thought, how often do you avoid or delay getting started?','How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?','How often do you feel overly active and compelled to do things, like you were driven by a motor?','Every time someone treats me like my assigned sex I feel hurt','It feels good to live as my affirmed gender','A life in my affirmed gender is more attractive for me than a life in my assigned sex','I wish I had been born as my affirmed gender','I feel unhappy when someone misgenders me','Memories of trauma come to mind at unwanted moments','At random times, I feel a burst of anger and/or guilt about past trauma','I feel a physical effect when remembering a past trauma, effects can range from racing pulse, excessive sweating, chills or shaking?']
ResponseOptions = [['Not at all','Several days','More than half the days','Nearly every day'],['Not at all','Several days','More than half the days','Nearly every day'],['Not at all','Several days','More than half the days','Nearly every day'],['Not at all','Several days','More than half the days','Nearly every day'],['Not at all','Several days','More than half the days','Nearly every day'],['Not at all','Slightly','Moderately','Very','Extremely'],['Not at all','Slightly','Moderately','Very','Extremely'],['Not at all','Slightly','Moderately','Very','Extremely'],['Not at all','Slightly','Moderately','Very','Extremely'],['Not at all','Slightly','Moderately','Very','Extremely'],['Never','Rarely','Sometimes','Often','Very Often'],['Never','Rarely','Sometimes','Often','Very Often'],['Never','Rarely','Sometimes','Often','Very Often'],['Never','Rarely','Sometimes','Often','Very Often'],['Never','Rarely','Sometimes','Often','Very Often'],['Never','Rarely','Sometimes','Often','Very Often'],['Disagree completely','Disagree','Neither agree nor disagree','Agree','Agree completely'],['Disagree completely','Disagree','Neither agree nor disagree','Agree','Agree completely'],['Disagree completely','Disagree','Neither agree nor disagree','Agree','Agree completely'],['Disagree completely','Disagree','Neither agree nor disagree','Agree','Agree completely'],['Disagree completely','Disagree','Neither agree nor disagree','Agree','Agree completely'],['Disagree completely','Disagree','Neither agree nor disagree','Agree','Agree completely'],['Disagree completely','Disagree','Neither agree nor disagree','Agree','Agree completely'],['Disagree completely','Disagree','Neither agree nor disagree','Agree','Agree completely']]
ScoringKey = [[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3,4],[4,3,2,1,0],[0,1,2,3,4],[0,1,2,3,4],[0,1,2,3,4],[0,0,1,1,1],[0,0,1,1,1],[0,0,1,1,1],[0,0,0,1,1],[0,0,0,1,1],[0,0,0,1,1],[0,0,0,1,2],[0,0,0,1,2],[0,0,0,1,2],[0,0,0,1,2],[0,0,0,1,2],[0,0,0,1,2],[0,0,0,1,2],[0,0,0,1,2]]

let questionObjects = [];

for (let i = 0; i < Questions.length; i++) {
    let tempObj = new Question(Questions[i], QuestionCategory[i], ResponseOptions[i], ScoringKey[i])
    questionObjects.push(tempObj)
}

// Keep track of which questions have already been asked.
let questionsAlreadyAsked = [];
document.getElementById("yes").addEventListener("click", askNextQuestion);
