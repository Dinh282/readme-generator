// this function returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
 //ternary operator that checks of the license passed is equal to "None", if so return '', else return string for badge image. 
 return (license == "None") ? '': `![license](https://img.shields.io/badge/License-${license.split(' ').join("%20")}-yellowgreen)`;

}

//this function return the license link, it takes in the license name and an abriviated name used as a
//path name for the link to an article about the license.
function renderLicenseLink(license, abrvLicenseName) {
  return (license == "None") ? '': `[${license}](https://choosealicense.com/licenses/${abrvLicenseName}/)`; 

}

//this function returns the license section of the generated README.md
// if there is no license, return an empty string
function renderLicenseSection(license) {
  //we use switch case here since we are adding a short summary of each license to the section, and the content
  //varies depending on which license was selected by user.
  switch (license) {
    case 'Apache 2.0':
      return `${license} - A permissive license whose main conditions require preservation 
      of copyright and license notices. Contributors provide an express grant of patent rights
      . Licensed works, modifications, and larger works may be distributed under different 
      terms and without source code. For more information on this license, 
      visit: ${renderLicenseLink(license, 'apache-2.0')}`;
    case 'MIT':
      return `${license} - A short and simple permissive license with conditions only requiring
      preservation of copyright and license notices. Licensed works, modifications, and larger
      works may be distributed under different terms and without source code. For more 
      information on this license, 
      visit: ${renderLicenseLink(license, 'mit')}`;
    case 'Mozilla Public License 2.0':
      return `${license} - Permissions of this weak copyleft license are conditioned on making 
      available source code of licensed files and modifications of those files under the same 
      license (or in certain cases, one of the GNU licenses). Copyright and license notices 
      must be preserved. For more information on this license, 
      visit: ${renderLicenseLink(license, 'mpl-2.0')}`;
    case 'None':
      return '';
  }

}

//this function generates the data for the markdown for README using the destructed object given by inquirer.
function generateMarkdown({username, email, title, description, installation, 
    usage, contribution, test, license}) {
   
//we inject the variables into our template as needed.      
return `

# ${title}

${renderLicenseBadge(license)}

## Description
${description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)    

## Installation
${installation}

## Usage
${usage}

## License
${renderLicenseSection(license)}

## Contributing
${contribution}

## Tests
${test}

## Questions
Feel free to contact me at ${email} for additional information.  
Also, checkout my other projects on [GitHub](https://github.com/${username})

`;

};

//we use export default instead of module.exports = generateMarkdown to comply with ES 6(instead of Common JS)
 //since we are using inquirer 9.2.2 instead of 8.2.4;
export default generateMarkdown;
