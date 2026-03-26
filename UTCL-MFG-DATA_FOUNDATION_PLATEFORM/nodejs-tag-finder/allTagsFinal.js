const fs = require("fs");

const filepath = "./cementmill-1.jsx";
const ExtractTags = "./ExtractedTags.txt";

const extractUniqueTagsFromFile = (filepath, ExtractTags) => {
  fs.readFile(filepath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }

    const tagRegex =
      /(?:(\b\w*label\w*\b)\s*[:=]\s*['"]([^'"]+)['"]|(?:use(?:\w+)?ColorStatus\w*)\s*\(\s*['"]([^'"]+)['"]\s*\))/gis;

    const uniqueTags = new Set();
    let match;

    while ((match = tagRegex.exec(data)) !== null) {
      uniqueTags.add(match[2]);
    }

    if (uniqueTags.size > 0) {
      const outputContent = Array.from(uniqueTags).join("\n");
      fs.writeFile(ExtractTags, outputContent, (err) => {
        if (err) {
          console.error("Error:", err);
        } else {
          console.log("Unique tags successfully extracted");
        }
      });
    } else {
      console.log("No tags found.");
    }
  });
};

extractUniqueTagsFromFile(filepath, ExtractTags);
