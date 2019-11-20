const path = require('path');
const fs = require('fs');

module.exports = function resFile(req,res){
    const filesUrl = path.resolve(__dirname, `./../files/决不投降(Live)_黑与白的错章(3).m4a`);
    let head = { 'Content-Type': 'video/m4a' };
    res.writeHead(200, head);
    fs.createReadStream(filesUrl)
        .pipe(res);
    // res.end();
}