const http = require('http');

//It is a eventEmitter
const server = http.createServer((req,res) =>{
    if(req.url === "/"){
        res.write("Welcome to the Web Server!!123");
        res.end(); //to send the response
    }
    if(req.url === "/about"){
        res.write("About Page");
        res.end();
    }
});

const PORT = 3000;
server.listen(PORT, ()=>{
 console.log(`Listening on Port ${PORT}`);
});