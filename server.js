const StaticServer = require('static-server');
let server = new StaticServer({
  rootPath: './dist',            // required, the root of the server file tree
  port: 8000
});
 
server.start(function () {
  console.log('Server Started at ', server.port);
});