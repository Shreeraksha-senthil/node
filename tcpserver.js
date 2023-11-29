var net=require("net");
var server=net.createServer();
var colors=require("colors");
server.on("connection",function(socket){
var radd=socket.remoteAddress+":"+socket.remotePort;
console.log("new client connection is made %s".green,radd);
socket.on("data",function(d){
console.log("data from %s%s".cyan,radd,d);
socket.write(d+"Ack");
})
socket.once("close",function(){
console.log("connection from %s closed".yellow,radd);
})
socket.on("error",function(err){
console.log("connection %s error: %s closed".red,radd,err.message);
})
}).listen(8080);
