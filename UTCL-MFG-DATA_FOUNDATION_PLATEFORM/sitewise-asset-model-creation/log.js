
const fs = require('fs');
const filename = new Date().toISOString().replace(/:/g, '-').replace(/\./g, '-') + '.log';

function logDataToFile(data) {
  console.log(data);
  try {
    const logFilePath = filename;
    
    const logContent = typeof data === 'string' ? data : JSON.stringify(data, null, 2);

    const logContentWithTimestamp = `${new Date().toISOString()}: ${logContent}\n`;
    fs.writeFileSync(logFilePath, logContentWithTimestamp, { flag: 'a' }, (err) => {
      if (err) {
        console.error('Error writing to log file:', err);
      } else {
        console.log(`Data logged to ${filename}`);
      }
    });
  } catch (err) {
    console.error('Error writing to log file:', err);
  }
}
logDataToFile('Hello, World!');
logDataToFile('Hello, World!');