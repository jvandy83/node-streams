const net = require('net')

net.createServer(function (stream) {
  stream.pipe(net.connect(5000, 'localhost')).stream
}).listen(5001)
