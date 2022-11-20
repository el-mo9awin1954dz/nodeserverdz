var http = require('http');
var fs = require('fs');

const args = process.argv.slice(2);


const PORT = args[0];
const PATH = args[1];

//Main
if(PORT === undefined || PATH === undefined) {
    console.log('DZ-HACKING-LAB @EL-MO9AWIN\n');
    console.log("USAGE : node server.js PORT PATH ");
    process.exit(1);
}
var server = http.createServer(function(req, res) {
  fs.readFile(PATH, function(err, data) {
    if (!err) {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      res.write(data);
      res.end();
    } else {
      console.log('SERVER ERROR');
    }
  });
});
server.listen(PORT, function(req, res) {
  console.log('SERVER START ON :%s',PORT);
});
