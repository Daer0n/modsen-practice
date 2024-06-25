const fs = require("fs");

function copyFileBlocking(sourcePath, destinationPath) {
    try {
        const data = fs.readFileSync(sourcePath);
        fs.writeFileSync(destinationPath, data);
        console.log("File copied successfully");
    } catch (error) {
        console.error("Error copying file:", error);
    }
}

copyFileBlocking("1.txt", "2.txt");

function copyFileNonBlocking(sourcePath, destinationPath) {
    const sourceStream = fs.createReadStream(sourcePath);
    const destinationStream = fs.createWriteStream(destinationPath);

    sourceStream.pipe(destinationStream);

    sourceStream.on("end", () => {
        console.log("File copied successfully");
    });

    sourceStream.on("error", (error) => {
        console.error("Error copying file:", error);
    });
}

copyFileNonBlocking("1.txt", "2.txt");
