const http = require('http');
// const url = require('url');
const router = require('./router/index.js');





http.createServer((req,res)=>{
    if(req.url === '/favicon.ico'){
        return null;
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    router(req,res);
})
    .listen(8089);