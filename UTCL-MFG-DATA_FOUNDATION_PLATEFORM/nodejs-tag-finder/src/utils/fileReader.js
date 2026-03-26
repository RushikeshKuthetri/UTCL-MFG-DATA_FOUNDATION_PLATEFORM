const fs = require('fs');
const path = require('path');

function readFilesInDirectory(directoryPath) {
    let fileContents = [];

    function readDirectory(directory) {
        if (path.basename(directory) === 'node_modules') {
            return;
        }

        const files = fs.readdirSync(directory);

        files.forEach(file => {
            const fullPath = path.join(directory, file);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                readDirectory(fullPath);
            } else if (['.js', '.jsx'].includes(path.extname(file))) {
                const content = fs.readFileSync(fullPath, 'utf-8');
                fileContents.push(content);
            }
        });
    }

    readDirectory(directoryPath);
    return fileContents;
}

function extractTags(fileContents, tagRegex) {
    const tags = new Set();

    fileContents.forEach(content => {
        let match;
        while ((match = tagRegex.exec(content)) !== null) {
            tags.add(match[0]);
        }
    });

    return Array.from(tags);
}

module.exports = {
    readFilesInDirectory,
    extractTags
};