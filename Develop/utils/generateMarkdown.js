// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 (license = "None") ? '': `[license]https://img.shields.io/badge/License-${license}-yellowgreen`

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache License 2.0':
      return 'https://www.apache.org/licenses/LICENSE-2.0';
    case 'MIT':
      return 'https://pitt.libguides.com/openlicensing/MIT';
    case 'BSD':
      return 'https://appmaster.io/blog/what-is-the-bsd-license';
    case '':
      return "";
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  (license = "None") ? '': ``


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ${renderLicenseSection}
`;

}

// module.exports = generateMarkdown;
export default generateMarkdown;
