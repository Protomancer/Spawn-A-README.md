// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const fs = require('fs');

const util = require('util');

// const api = require('./utils/api.js');

const generateMarkdown = require('./utils/generateMarkdown.js');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "Current git hub user name?",
        name: 'username',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please include a valid GitHUb username.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the name of your repo?",
        name: 'repo',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please provide a valid github repo.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "App Title?",
        name: 'title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please provide a valid title.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Give a description of your App",
        name: 'description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please provide a valid description for the app");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please give a detailed description of how to install your app.",
        name: 'installation',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('Please provide a valid installation walk through.');
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please provide info on how to use your app.",
        name: 'usage',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log ('Please show the usage of your app.');
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Explain how others can help contribute to your project.",
        name: 'contributing',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log ('Please provide info for how to contribute.')
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please provide any test for your application and how to run them here.",
        name: 'tests',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log ('Please provide valid test info.')
            }
            return true;
        }

    },
    {
        type: 'list',
        message: "Select License",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license',
        validate: function (answer) {
            if (answer.length <1) {
                return console.log ('Please select a valid license.')
            }
        }
    }
];


const userResponse = inquirer.prompt(questions).then(function(data){
console.table(data)
init(data)
});
// TODO: Create a function to initialize app
async function init(testData) {
    try {
        console.log('Response:', userResponse);
        console.log('Thanks,fetching gitHub info...')
        
        // const userData = await api.getUser(userResponse);
        // console.log ('gitHub user info:', userData);

        console.log ('Spawning your README....')
        const makeMarkdown = generateMarkdown(testData);
        console.log(makeMarkdown);

        // await writeFileAsync('testREADME.md', makeMarkdown)

        fs.writeFile("userFile.md",makeMarkdown,err => {
            if (err){
                return console.log(err);
            }
            console.log ('Congrats! We have spawned a README.md')
        });

    } catch (error){
        console.log(error);
    }
};

// Function call to initialize app
// init();
