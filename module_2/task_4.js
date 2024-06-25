const path = require("path");

const filePath = process.argv[2];

const directoryName = path.dirname(filePath);

const fileExtension = path.extname(filePath);

console.log(`Directory: ${directoryName}\n Extendion: ${fileExtension}`);
