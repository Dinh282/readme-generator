// TODO: Include packages needed for this application
import  inquirer  from "inquirer";
import  fs  from 'fs';
import chalk from 'chalk';


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'username',
    message: chalk.blue('What is your GitHub username?'),
  },   
  {
    type: 'input',
    name: 'email',
    message: chalk.blue('What is your Email address?'),
  },  
  {
    type: 'input',
    name: 'title',
    message: chalk.blue('What is the title of your project?'),
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description for this project?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the information on usage?',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What are the contribution guidelnes?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What are the test instructions?',
  },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, htmlTL, (err) =>
    err ? console.log(err) : console.log('Data logged! HTML file generated!')
  );


}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    
    
}

// Function call to initialize app
init();
