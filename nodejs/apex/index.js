const http = require('http');
const banner = require('./banner');

console.log(banner.getBanner());
console.log("Server IP    : 10.103.50.95");
console.log("Server Port  : 3000");

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('I am a server at 10.103.50.95:3000, please kill leon');
}).listen(3000);