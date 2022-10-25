// var http = require('http')
// var fs = require('fs')
// http.createServer((req,res)=>{
//     res.write("welcome")
//     res.end()
// }).listen(8080,()=>{
//     console.log("server is runing...")
// })
// for(var a=0 ; a<20; a++){
//     // fs.writeFile(`the${a}.txt`,`the text ${a}`,()=>{
//     //     console.log('file added'+a)
//     fs.unlinkSync(`the${a}.txt`,`the text ${a}`)
//     }

// var fs = require('fs')
// var myReadStream = fs.createReadStream(__dirname+'/massage.txt','');
// var myWriteSteam = fs.createWriteStream(__dirname+'/WriteStream.txt')
// myReadStream.on('data',function(chunk){
//         console.log("new chunck recieved")
//         // console.log(chunk)
//         myWriteSteam.write(chunk)
// })

// var fs = require("fs");
// var readable = fs.createReadStream('massage.txt');
// var writable = fs.createWriteStream('Noori.txt');
// readable.pipe(writable);
// console.log("File Added");

// var fs = require("fs");
// var http = require('http')
// var url = require('url')
// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/html'})
//         var myReadStream = fs.createReadStream(__dirname+'/massage.txt','utf8');
//         myReadStream.pipe(res);
    
// }).listen(800,()=>{
//     console.log('server is runing')
// })

// var fs = require("fs");
// var http = require('http')
// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'text/html'})
//     // one way 
//         // var myReadStream = fs.createReadStream(__dirname+'/index.html','utf8');
//         // myReadStream.pipe(res);
//     // second way
//     fs.readFile('index.html',(err,data)=>{
//         if(err) throw err
//         res.write(data)
//         return res.end()
//     })
// }).listen(800,()=>{
//     console.log('server is runing')
// })

// var fs = require("fs");
// var http = require('http')
// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'Application/json'})
//     // for file create in here
//     // var myObj = {
//     //     name:'hamza',
//     //     job:'WD',
//     //     age:20
//     // }
//     // res.end(JSON.stringify(myObj))
//     // for file json local
//     // var myObj = fs.readFileSync('myJson.json','utf8')
//     // res.end(myObj)
//     //use file json with pipe
//     // var myReadStream = fs.createReadStream(__dirname+'/myJson.json','utf8');
//     //  myReadStream.pipe(res);
//     fs.createReadStream('myJson.json').pipe(res);
// }).listen(800,()=>{
//     console.log('server is runing')
// })

// ===================== Basic Routing ===================
var fs = require("fs");
var http = require('http');
var url = require('url')
http.createServer((req,res)=>{
    console.log('request made for'+req.url)
    if(req.url ==="/home"){
        res.writeHead(200,{'content-type':'text/html'})
        fs.createReadStream('./index.html').pipe(res)
    }
    else if(req.url ==="/contact"){
        res.writeHead(200,{'content-type':'text/html'})
        fs.createReadStream('./contact.html').pipe(res)
    }
    else if(req.url ==="/Api/employe"){
        res.writeHead(200,{'content-type':'Application/json'})
        fs.createReadStream('./myJson.json').pipe(res)
    }
    else{
        fs.createReadStream("./404.html").pipe(res)
    }
}).listen(800,()=>{
    console.log('server is runing')
})