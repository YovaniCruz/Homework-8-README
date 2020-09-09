// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ### Author ${data.GitHub}

`;
}

module.exports = generateMarkdown;
