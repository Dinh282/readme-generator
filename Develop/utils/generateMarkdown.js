// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 return (license == "None") ? '': `![license](https://img.shields.io/badge/License-${license.split(' ').join("%20")}-yellowgreen)`;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, abrvLicenseName) {
  return (license == "None") ? '': `[${license}](https://choosealicense.com/licenses/${abrvLicenseName}/)`; 

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
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

// TODO: Create a function to generate markdown for README
function generateMarkdown({username, email, title, description, installation, 
    usage, contribution, test, license}) {
   
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

// module.exports = generateMarkdown;
export default generateMarkdown;
