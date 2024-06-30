const fs = require('fs');
const { marked } = require('marked');
const { Command } = require('commander');

// Create a new Command instance
const program = new Command();

// Configure the command-line interface
program
    .name('markdown-to-html-converter')
    .description('Convert Markdown files to HTML')
    .version('1.0.0')
    .argument('<inputFilePath>', 'Path to the input Markdown file')
    .argument('<outputFilePath>', 'Path to the output HTML file')
    .action((inputFilePath, outputFilePath) => {
        // Function to convert Markdown to HTML
        function convertMarkdownToHTML(inputFilePath, outputFilePath) {
            // Read the Markdown file
            fs.readFile(inputFilePath, 'utf8', (err, data) => {
                if (err) {
                    console.error(`Error reading the file: ${err.message}`);
                    return;
                }

                // Convert Markdown to HTML
                const htmlContent = marked(data);

                // Write the HTML to the output file
                fs.writeFile(outputFilePath, htmlContent, (err) => {
                    if (err) {
                        console.error(`Error writing the file: ${err.message}`);
                        return;
                    }
                    console.log(`Converted ${inputFilePath} to ${outputFilePath}`);
                });
            });
        }

        // Convert the Markdown file to HTML
        convertMarkdownToHTML(inputFilePath, outputFilePath);
    });

// Parse the command-line arguments
program.parse(process.argv);