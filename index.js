const http = require ("node:http")
const server = http.createServer((req,res)=>{
    return res.writeHead(200,{"Content-Type":"text/html"}).end("My test with Barghod")
})
const port = process.env.PORT || 4000
server.listen(port, ()=>{
    console.log(`Server listen on port ${port}`)
})