var http = required('node:http')
var port = 8080
var hostname = '0.0.0.0'

const server = http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeade('Content-Type','text/plain')
    res.end('Hello World\n')
})

server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})