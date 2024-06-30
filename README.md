# Markdown to HTML Converter

This project provides a command-line interface (CLI) tool for converting Markdown files to HTML using Node.js. The tool leverages the `marked` library for Markdown parsing and the `commander` library for building the CLI.

## Features

- Converts Markdown files to HTML.
- Simple command-line interface.
- Provides usage information and version details.

## Installation

1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Clone this repository.
3. Install the required dependencies:

   ```sh
   npm install
   ```

## Usage

To use the CLI tool, run the following command:

```sh
node converter.js <inputFilePath> <outputFilePath>
```

### Arguments

- `<inputFilePath>`: Path to the input Markdown file.
- `<outputFilePath>`: Path to the output HTML file.

### Example

```sh
node converter.js example.md example.html
```

This command will convert the `example.md` Markdown file to an `example.html` HTML file.

## Help and Version Information

You can view the help information and version details using the following commands:

```sh
node converter.js --help
node converter.js --version
```

## License

This project is licensed under the MIT License.
