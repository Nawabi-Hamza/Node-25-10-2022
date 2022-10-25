// var fs = require('fs')
// var Read = fs.createReadStream('massage.txt')
// var writes = fs.createWriteStream('Noori.txt')
// Read.pipe(writes)

// ===================== Basic Routing ===================
// var fs = require("fs");
// var http = require('http');
// var url = require('url')
// http.createServer((req,res)=>{
//     console.log('request made for'+req.url)
//     if(req.url ==="/home"){
//         res.writeHead(200,{'content-type':'text/html'})
//         fs.createReadStream('./index.html').pipe(res)
//     }
//     else if(req.url ==="/contact"){
//         res.writeHead(200,{'content-type':'text/html'})
//         fs.createReadStream('./contact.html').pipe(res)
//     }
//     else if(req.url ==="/Api"){
//         res.writeHead(200,{'content-type':'Application/json'})
//         fs.createReadStream('./myJson.json').pipe(res)
//     }
//     else if(req.url === "/nodemon"){
//         res.writeHead(200,{'content-type':'text/html'})
//         fs.createReadStream('./Active The nodemon.html').pipe(res)
//     }
//     else{
//         fs.createReadStream("./404.html").pipe(res)
//     }
// }).listen(8090,()=>{
//     console.log('server is runing')
// })

// =============Events In node Js======================
console.log("testing...")
// var Event = require('events')
// var myEmit = new Event.EventEmitter();
// myEmit.on('someEvent' , (pro)=>{
//     console.log("the props you passsed is : "+pro)
// })
// myEmit.emit('someEvent' , ' some enent is ')

// var Hello = require('events')
// var Emmit = new Hello.EventEmitter()
// Emmit.on('say',(pro)=>{
//     console.log(pro+" Word")
// })
// Emmit.emit("say",'hello')

// ====== call function in events =======
// var even = require('events')
// var Emmit = new even.EventEmitter()
// var myFunc = ()=>{
//     console.log("I am Function called")
// }
// Emmit.on('say',myFunc)
// Emmit.emit("say")

// ============= node send Email ==================
// for install node mailer (npm install nodemailer)
// var nodeMailer = require('nodemailer')
// var transport = nodeMailer.createTransport({
//     service:'gmail',
//     auth:{
//         user:'your email',
//         pass:'your password'
//     }
// });
// var mailOption = {
//     from:'user email',
//     to:'ouremail',
//     subject: 'this is the email we send by node Js ',
//     text: 'this is my massage from node js body '
// };
// transport.sendMail(mailOption,(err,info)=>{
//     if(err){ 
//     console.log(err)    
//     }else{
//     console.log("your email is sended : "+info.res)
//     }
// })

// ===================email send try ===================
// var Emails = 'h.nawabi007@gmail.com , fayaz.nasrat10@gmail.com , hasibfarahi01@gmail.com'
// var theSub = "This is the subject of node js"
// var massage = 'the new massage'
// var nodeMailer = require('nodemailer')
// var transport = nodeMailer.createTransport({
//     service:'gmail',
//     auth:{
//         user:'hamza.nawabi119@gmail.com',
//         pass:'fbqentytadoqyqga'
//     }
// });
// var mailOption = {
//     from:'hamza.nawabi119@gmail.com',
//     to: Emails,
//     cc: '',
//     bcc: '',
//     subject: theSub,
//     text: massage
// };
// transport.sendMail(mailOption,(err,info)=>{
//     if(err){ 
//     console.log(err)    
//     }else{
//     console.log("your email is sended : "+ info)
//     }
// })

// ==============Data base in nodeJs====================
