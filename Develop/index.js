// TODO: Include packages needed for this application
import  inquirer  from 'inquirer';
import  fs  from 'fs';
import chalk from 'chalk';
import generateMarkdown from './utils/generateMarkdown.js';


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
    message: chalk.blue('What is the description for this project?'),
  },
  {
    type: 'input',
    name: 'installation',
    message: chalk.blue('What are the installation instructions?'),
  },
  {
    type: 'input',
    name: 'usage',
    message: chalk.blue('What is the information on usage?'),
  },
  {
    type: 'input',
    name: 'contribution',
    message: chalk.blue('What are the contribution guidelnes?'),
  },
  {
    type: 'input',
    name: 'test',
    message: chalk.blue('What are the test instructions?'),
  },
  {
    type: 'list',
    name: 'license',
    message: chalk.blue('What is the license for your application?'),
    choices: ['Apache License 2.0', 'MIT', 'BSD', 'None'],
  }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Data logged! README.md file generated!')
  );

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answer) => {
      
    writeToFile("./generatedREADME.md", generateMarkdown(answer));    
    });
    
}

// Function call to initialize app
init();
