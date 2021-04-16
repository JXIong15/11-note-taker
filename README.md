# 11 Express.js: Note Taker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## TO DO:
* Heroku: deploy and include links
* functionality, tasks-completed, demos
* assets
* Submit to BCS with links

## Table of Contents
* [Introduction](#introduction)
* [Functionality](#functionality)
* [Tasks Completed](#tasks-completed)
* [Technologies Used](#technologies-used)
* [Installations](#installations)
* [Demos](#demos)
* [Sources](#sources)
* [License](#license)


 ## Introduction
 Uses Node, Express, and UUID to generate a Note Taking application. Users can create, save, and delete notes.
 * GitHub Repository: https://github.com/JXIong15/11-note-taker
 * Link to Heroku App: 

<p align="center"><img src="./assets/notes.png" width="80%" stylealt="html desktop"/></p>


## Functionality
* When the user types "node index.js" in the "/10-employee" directory, then the program is initiated.
* The user, who is the manager, is then asked a series of questions about themself: name, email, id, and office number.
* The manager is then asked if they want to add more employees.
  * If "No", then the program generates an HTML doc containing the Manger's employee card
  * If "Yes", then the program asks the manager if they want to add an Intern or an Engineer
* When an Engineer is selected, the app asks for the Engineer's name, email, id, and GitHub username.
* When an Intern is selected, the app asks for the Intern's name, email, id, and school name.
* The manager is continuously prompted after each employee so that they can add their whole team. 
  * The moment the Manager chooses, "No" to adding more employees, then the HTML document
  containing each team member's employee card is generated from the generateEmployeeCards.js file.
* For each employee and employee role, a class.js and questions.js file was created.


## Tasks Completed
* In the 10-employee directory, downloaded the inquirer and jest packages using npm.
* Created a "library", "tests", and a "questions" directories. Each one contains an Engineer, Manager, and Intern file. Libary and _tests_ both have an Employee file as well.
  * Each Questions.js file contains questions for each role
  * Each role in the "library" contains constructor classes
  * Each test.js file contains tests for the constructor classes for each role
* In the index.js file:
	* included all of the required packages and other js files needed
	* created an empty array to hold the team members
  * created a function to run when initiated by the user. This function prompts for the Manager's information.
    * addMore() function is created to give the Manager the option to add more team members.
    * if more team members are desired, then an employeeRole() function prompts the Manager to choose the employee role and then asks the questions pertaining to the employee's information
      * created functions for 'intern' and 'engineer' questions respectively
        * all Manager, Engineer, and Intern question functions use their respective role constructors to create the new employee for that role
    * once the manager decides not to add more employees, then a writeToFile() function creates an HTML document by passing the 'team' array into the generateEmployeeCards() function
* in the generateEmployeeCards.js file, which is prompted by the index.js generateEmpployeeCards() function:
  * the generateEmployeeCards(team) function uses a forEach loop to iterate through each employee in the 'team' array
    * the empployee is then passed into a makeCard() function, which creates and returns an employee card for them
      * an iconRole() function returns the employee role to generate the correct icon for the employee
      * a lastQ() function uses the employee role to return the unique information for the role
    * the generateEmployeeCards() function returns a Template Literal containing the code for the HTML file. 
      * This code is returned to the writeToFile() function in the index.js file, which then genereates an HTML file with the code.
* once the HTML file is generated, the application closes. The user can then click on the HTML file and open it to see the different cards for their employee(s).


## Installations
* Download [Node and npm](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs)
* Then, download the UUID Package by typing, "npm install uuid" in command line
* Then, download the express package by typing, "npm install express" in the command line


## Technologies Used
* JavaScript (main code)
* HTML
* Node
  * UUID to generate random unique IDs for each note
  * Express to use a server and URL routes
* Txt File (License)
* JSON file to store the array of notes


## Demos
App Demo: https://drive.google.com/file/d/1aIvexVPLv0fNYhxhRUbo314YsrOxEjaT/view

[HTML Demo](https://drive.google.com/file/d/1ybL3uqKS64OgW7tM9ZE1uXvXf5EliXBA/view):
   <p align="center"><img src="./assets/html-demo.gif" width="100% height="100%" stylealt="html demo"/></p>

[Test Demo](https://drive.google.com/file/d/1uyzILccmIV30b2TPJxF5O80SlY-bFXh7/view):
   <p align="center"><img src="./assets/test-demo.gif" stylealt="test demo"/></p>



## Sources
* UUID Package: https://www.npmjs.com/package/uuid
* Express Package: https://www.npmjs.com/package/express


## License
Licensed under the [MIT License](LICENSE).

<p align="center">© 2021 Jou Xiong, Trilogy, Northwestern Coding Bootcamp</p>








## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.


