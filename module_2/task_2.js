const fs = require("fs");
const path = require("path");

function deleteFilesWithExtension(directoryPath, extension) {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error("Error reading directory:", err);
            return;
        }

        files.forEach((file) => {
            const filePath = path.join(directoryPath, file);
            if (
                fs.statSync(filePath).isFile() &&
                path.extname(file) === `.${extension}`
            ) {
                fs.unlink(filePath, (err) => {
                    if (err) {
                        console.error("Error deleting file:", err);
                        return;
                    }
                    console.log(`Deleted file: ${filePath}`);
                });
            }
        });
    });
}

const directoryPath = "/path/to/directory";
const extension = "txt";

deleteFilesWithExtension(directoryPath, extension);
