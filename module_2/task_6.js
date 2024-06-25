const fs = require("fs");

function copyFileWithStreams(sourcePath, destinationPath) {
    const readableStream = fs.createReadStream(sourcePath);

    const writableStream = fs.createWriteStream(destinationPath);

    readableStream.on("data", (chunk) => {
        writableStream.write(chunk);
    });

    readableStream.on("end", () => {
        writableStream.end();
        console.log("File copied successfully!");
    });

    readableStream.on("error", (err) => {
        console.error("Error reading the file:", err);
    });

    writableStream.on("error", (err) => {
        console.error("Error writing to the file:", err);
    });
}

const sourceFile = "path/to/source/file.txt";
const destinationFile = "path/to/destination/file.txt";

copyFileWithStreams(sourceFile, destinationFile);
