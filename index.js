const http = require ("node:http")
const server = http.createServer((req,res)=>{
    return res.writeHead(200,{"Content-Type":"text/html"}).end("My test with Barghod")
})
server.listen(4000, ()=>{
    console.log("Server listen on port 4000")
})