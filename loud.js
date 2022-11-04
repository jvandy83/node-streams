const fs = require('fs')
const through = require('through2')

process.stdin
  .pipe(toupper())
  .pipe(process.stdout)

function toupper () {
  return through(function (buf, enc, next) {
    next(null, buf.toString().toUpperCase())
  })
}
