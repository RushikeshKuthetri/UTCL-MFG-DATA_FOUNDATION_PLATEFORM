const { exit } = require('process');
const xlsx = require('xlsx');

const FILE = "Copy of KCW2_PlantVariable_UTCL_KotputliCW_L2_10Mar2025_Rev1.xlsx";
const OUTPUT_FILE = "duplicates-new.xlsx";

async function main() {
    let twoTimes = 0;
    let threeTimes = 0;
    let fourTimes = 0;
    let moreThanFourTimes = 0;
    let allDuplicatesCount = 0;

    const workbook = xlsx.readFile(FILE);
    const sheetName = workbook.SheetNames[1];
    console.log(sheetName)
    const worksheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(worksheet);
    console.log(data.length);
    const filterredData = data.filter(row => {
        return row['Endpoint'] && row['OPC UA Path'];
    });
    console.log(filterredData.length);

    const pathCounts = filterredData.reduce((acc, row) => {
        const path = `${row['Endpoint']}-${row['OPC UA Path']}`;
        if (path) {
            acc[path] = (acc[path] || 0) + 1;
        }
        return acc;
    }, {});

    const duplicateRows = [];

    for (const [path, count] of Object.entries(pathCounts)) {
        if (count > 1) {
            allDuplicatesCount++;
            if (count === 2) {
                twoTimes++;
            } else if (count === 3) {
                threeTimes++;
            } else if (count === 4) {
                fourTimes++;
            } else {
                moreThanFourTimes++;
            }
            duplicateRows.push(...filterredData.filter(row => `${row['Endpoint']}-${row['OPC UA Path']}` === path));
        }
    }
    console.log(`twoTimes: ${twoTimes}, threeTimes: ${threeTimes}, fourTimes: ${fourTimes}, moreThanFourTimes: ${moreThanFourTimes}, allDuplicatesCount: ${allDuplicatesCount}`);

    const newWorkbook = xlsx.utils.book_new();
    const newWorksheet = xlsx.utils.json_to_sheet(duplicateRows);
    xlsx.utils.book_append_sheet(newWorkbook, newWorksheet, 'Duplicates');
    xlsx.writeFile(newWorkbook, OUTPUT_FILE);
}

main();