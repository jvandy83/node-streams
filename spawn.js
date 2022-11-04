const spawn = require('child_process').spawn

const ps = spawn('grep', ['potato'])

ps.stdout.pipe(process.stdout)

ps.stdin.write('cheese\n')

ps.stdin.write('mustard\n')

ps.stdin.write('potatoes\n')

ps.stdin.write('potato macaroni\n')

ps.stdin.end()











