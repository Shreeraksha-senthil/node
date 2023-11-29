const http=require("http");
const fs=require("fs");
http.createServer(function(req,res){
24
fs.readFile("index.html",function(err,data){
if(err)
{
res.writeHead(404,{'content-type':'text/html'});
return res.end('404 not found');
}
res.writeHead(200,{'content-type':'text/html'});
res.write(data);
})
}).listen(8080);