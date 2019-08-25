const fs = require('fs')
const path = require('path')
const program = require('commander')

program
  .arguments('<file>')
  .action((file) => {
    const configPath = path.resolve(file)
    const config = JSON.parse(fs.readFileSync(configPath))
    console.log(config)
  })
  .parse(process.argv)