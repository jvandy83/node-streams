const concat = require('concat-stream')
const http = require('http')
const qs = require('qs')

const server = http.createServer(function (req, res) {
  req.pipe(concat({encoding: 'string'}, function (body) {
    const params = qs.parse(body) 
    console.log(params)
    res.end('ok')
  }))
})

server.listen(5000)
