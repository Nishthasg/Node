const fs = require('fs');
const path = require('path');

const filePath = __dirname;

fs.promises.readdir(filePath).then().catch((err)=>{
    console.error(err);
});