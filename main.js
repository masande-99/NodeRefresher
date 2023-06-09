//OS METHOD
const os = require('os')
function Name(name){
console.log(name)
};

Name("Masande");
//console.log(window)
var Free_Memory = os.freemem();
var Host_Name = os.hostname();
var Home_Directory = os.homedir();
var Machine = os.machine();
var Total_Memory = os.totalmem();

console.log(`Machine: ${Machine}`)
console.log(`Free Memory: ${Free_Memory}`);
console.log(`Total Memory: ${Total_Memory}`);
console.log(`Host Name: ${Host_Name}`)
console.log(`Home Directory ${Home_Directory}`)

//HTTP METHOD
const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url ==='/'){
        res.write("This is the home page");
        res.end();
    }

    if (req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3,4]));
        res.end();
    }

    if (req.url === '/api/Test'){
        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write("./main.html");  
        res.end(); 
    }
});

server.on('connection', Socket =>{
    console.log("New connection......")
})

server.listen(3000);

console.log('Listening to port 3000.......')

//EVENTS
// const EventsEmitter = require("events");
// const emmiter = new EventsEmitter();

// //Register a Listener
// emmiter.on("Message Logged", (arg) => {
//   console.log("Listener Called", arg);
// });

//Raise Event

// emmiter.emit("Message Logged", { id: 1, url: "http://" });

// //EXCERSISE
// //Raise Logging (data: message)

// emmiter.on("Logging", ()=>{
//     console.log("Message Logged")
// })

// emmiter.emit("Logging")

// http.createServer(function(req, res){
//     if (req.url === '/api/Test'){
//         fs.readFile('main.html',function (err, data){
//             res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
//             res.write(data);
//             res.end();
//         })};
// }).listen(3000);


// const express = require('express');
// const app = require('express')

// app.get('/images', (req, res) => {
// app.use(express.static('public'));
// });

// app.get('/', (req, res) => {
// 	res.sendFile(__dirname + '/main.html');
// });

// app.listen(3000, () => {
// 	console.log('Server listening on port 3000');
// });




