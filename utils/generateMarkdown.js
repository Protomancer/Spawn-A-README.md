// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// added the info outputs that the user chooses.
function generateMarkdown(data) {
  return `# ${data.title}

  
# github user name.  
 ${data.username}
# Email
 ${data.Email}
# github user repo.
 ${data.repo}
# Project Title.
 ${data.title}
# Project description.
 ${data.description}
# How to install.
 ${data.installation}
# How to use the app.
 ${data.usage}
# How to contribute.
 ${data.contributing}
# What test can you run?
 ${data.tests}
# What are the licenses being used?
 ${data.license}

`;
}

module.exports = generateMarkdown;
