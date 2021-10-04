# Software Requirements
## Vision
### Minimum Length: 3-5 sentences
- What is the vision of this product?<br> To create a simple and friendly way to bring awareness and light through statistics to mental health conditions by providing a user friendly screening report.
- What pain point does this project solve? <br>Bringing awareness to mental health can be helpful to both people affected as well as those around them. Having a screening tool for multiple conditions can help bring awareness to people affected by conditions they weren’t aware of ahead of time. Having statistics can highlight the prevalence of mental health in our current society, and help better understand one another.
- Why should we care about your product?<br> Mental health is a topic that is still considered taboo and unspoken about, which in turn leads a person to be more inclosed and insecure about speaking out on certain subjects. This project will make it easier to get self guided help without the worries of projected judgement by society.
## Scope (In/Out)
### IN - What will your product do
#### Describe the individual features that your product will do.
#### High overview of each. Only need to list 4-5

- The web app will provide a screening with 25 multiple choice based questions which will ask the user about their mental health.<br>
The web app will provide an interactable chart showing (if applicable) which mental health conditions they relate closely to based on the answers the user provided to the questions.
- A resources page that will have links to helpful links.
- A statistics page that has information on mental health conditions, such as the prevalence, demographics.
### OUT - What will your product not do.
- My website will never turn into an IOS or Android app.
- Be clear to the user that the results of the questionnaire are not considered medical advice and should be discussed with their doctor if concerned with anything.
No user data will leave the website.

## Minimum Viable Product vs
An MVP is a site that returns a questionnaire as a chart. Functionally, it is all that is needed and the purpose of this project. We can accomplish an MVP with HTML, CSS, JavaScript and ChartJS. Obviously, we want to add more resources than the bare minimum. MVP will be a website that has a resources page, a statistics page, and a questionnaire page.
# Functional Requirements
- List the functionality of your product. This will consist of tasks such as the following:
1. A user will be able to input answers into a form. 
2. A user will be able to retake the questionnaire once completed. 
3. A user can interact with the generated chart to access other pages. 
## Data Flow
Describe the flow of data in your application. Write out what happens from the time the user begins using the app to the time the user is done with the app. Think about the “Happy Path” of the application. Describe through visuals and text what requests are made, and what data is processed, in addition to any other details about how the user moves through the site.
1. User loads webpage
2. User is met with a question talking about and inviting them to take the questionnaire
3. If user agrees, questionnaire will be loaded one question at a time (~25 questions)
4. Once the questionnaire is complete, display the chart to the user. 
5. Offers links to sites with helpful information 
