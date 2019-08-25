const fs = require('fs');
const path = require('path');
const program = require('commander');
const deployrunner = require('../lib/deployrunner');

program
  .arguments('<file>')
  .action((file) => {
    const configPath = path.resolve(file);
    const config = JSON.parse(fs.readFileSync(configPath));
    deployrunner(config);
  })
  .parse(process.argv);