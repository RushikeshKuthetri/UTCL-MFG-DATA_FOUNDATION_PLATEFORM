const fs = require('fs');
const path = require('path');
const { readFilesInDirectory, extractTags } = require('./utils/fileReader');
const ExcelJS = require('exceljs');

const directoryPath = path.join(__dirname, '../../Mimics/UI'); // Replace 'your-directory' with the actual directory path
const tagRegex = /label:\s*"([^"]+)"/g;
const SHEET_NAME = 'Tags7';


function main() {
    try {
        const fileContents = readFilesInDirectory(directoryPath);
        const allTags = extractTags(fileContents, tagRegex);
        const tagStrings = [...new Set(allTags)];
        const uniqueTags = tagStrings
            .map(tag => {
                return tag.replace(/label:\s*"/, '').replace(/"/g, '');
            })

        console.log('Unique Tags:', uniqueTags);
        console.log('Unique Tags Count:', uniqueTags.length);
        writeTagsToExcel(uniqueTags);

    } catch (error) {
        console.error('Error reading files:', error);
    }
}

async function writeTagsToExcel(tags) {
    const filePath = 'tags.xlsx';
    const workbook = new ExcelJS.Workbook();

    if (fs.existsSync(filePath)) {
        await workbook.xlsx.readFile(filePath);
    }

    const sheet = workbook.addWorksheet(SHEET_NAME);

    sheet.columns = [
        { header: 'Tag', key: 'tag', width: 30 }
    ];

    tags.forEach(tag => {
        sheet.addRow({ tag });
    });

    await workbook.xlsx.writeFile(filePath);
    console.log(`Tags written to sheet ${SHEET_NAME} Excel file successfully.`);
}

main();