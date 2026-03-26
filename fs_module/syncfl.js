const fs = require('fs');
const path = require('path');
const fileName = 'text.txt';

// const writeFile = fs.writeFileSync(
//   fileName,
//   "This is the initial data",
//   "utf-8"
// );

// console.log(writeFile);

//Alternative way

const filePath = path.join(__dirname, fileName);
console.log(__dirname);

const writeFile = fs.writeFileSync(
    filePath,
    "This is updated",
    "utf-8"
);
 
// Read the file data
const readFile = fs.readFileSync(filePath, "utf-8");
console.log(readFile);

//Update the data
const appendFile = fs.appendFileSync(filePath, "\n Hey Updated data", "utf-8");
console.log(appendFile);

//Delete file
// const fileDelete = fs.unlinkSync(fileName);

//Rename file
const fileRename = fs.renameSync(filePath, "update.txt");