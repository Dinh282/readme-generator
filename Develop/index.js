//packages needed for this application. we using import from instead of require
//to comply with ES 6 since our version of inquirer is later than 8.2.4
import  inquirer  from 'inquirer';
import  fs  from 'fs';
import chalk from 'chalk';
import generateMarkdown from './utils/generateMarkdown.js';


//array of questions for inquirer to get user input with
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
    choices: ['Apache 2.0', 'MIT', 'Mozilla Public License 2.0', 'None'],
  }

];

//this function takes on two arguments and writes a README file using fs. The first argument is the file name,
//and the second is the data to be written to the file.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    //ternary operator. if there is error, console.log the err, else console.log message letting user know
    //that the data is logged and a README.md file was created.
    err ? console.log(err) : console.log('Data logged! README.md file generated!')
  );

}

//this function initializes app. calls inquirer to get data from user.
function init() {
    inquirer.prompt(questions)
    .then((answer) => {
    //once inquirer is done prmpting user, we call on writeToFile function.  
    writeToFile("./generatedREADME.md", generateMarkdown(answer));   
     
    });
}

// Function call to initialize app
init();
