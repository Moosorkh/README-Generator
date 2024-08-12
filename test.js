// Import the generateMarkdown function 
import generateMarkdown from './utils/generateMarkdown.js';
import fs from 'fs';

// Simple Test Function
function runTest() {
    const testData = {
        title: 'Test Project',
        description: 'This is a description for a test project.',
        installation: 'Run npm install to install dependencies.',
        usage: 'Run node index.js to start the application.',
        contributing: 'Feel free to contribute!',
        tests: 'No tests available yet.',
        license: 'MIT',
        github: 'testuser',
        email: 'test@example.com',
    };

    console.log('Running test mode...');
    const output = generateMarkdown(testData);
    console.log(output);

    // Write the test output to a file
    fs.writeFile('TEST_README.md', output, (err) => {
        if (err) {
            console.error('Error writing test output:', err);
        } else {
            console.log('TEST_README.md file created successfully!');
        }
    });
}

// Run the test function
runTest();