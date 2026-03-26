const fs = require('fs');
const path = require('path');


const folderPath = './Line4/U4CementMillRP';  
const ExtractTags = './ExtractedTags.txt'; 

const extractUniqueTagsFromFile = (filePath, ExtractTags) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    // Regular expression 
    const tagRegex = /(label:|runLabel:|healthyLabel:|firstCircleLabel:|secondCircleLabel:|label=|openLabel:|closeLabel:|blackTextLabel:|blackTextLabel1:|dotLabel:)\s*"([^"]+)"/g;

    const uniqueTags = new Set(); 
    let match;

    while ((match = tagRegex.exec(data)) !== null) {
      uniqueTags.add(match[2]);  // Add the matched value (tag) to the set
    }

    // If unique tags were found, append them to the output file
    if (uniqueTags.size > 0) {
      const outputContent = Array.from(uniqueTags).join('\n'); // Join the unique tags into a string

      // Append to the output file
      fs.appendFile(ExtractTags, outputContent + '\n', (err) => {
        if (err) {
          console.error('Error writing to file:', err);
        } else {
          console.log('Unique tags successfully extracted and written to', ExtractTags);
        }
      });
    } else {
      console.log('No tags found in', filePath);
    }
  });
};

// Function to read and process files recursively in subfolders
const processFilesInFolder = (folderPath, ExtractTags) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(folderPath, file);

      // Check if the current filePath is a directory
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error('Error checking file stats:', err);
          return;
        }

        if (stats.isDirectory()) {
          // If it's a directory
          processFilesInFolder(filePath, ExtractTags);  // Recursive call for subfolder
        } else {
          // If it's a file
          console.log('Processing file:', filePath);
          extractUniqueTagsFromFile(filePath, ExtractTags);
        }
      });
    });
  });
};

processFilesInFolder(folderPath, ExtractTags);
