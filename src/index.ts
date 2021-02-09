#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');

clear();

program
  .version('0.0.1')
  .description("An example CLI to manage a library")
  .option('-u, --username <username>', 'login')
  .option("-l, --list <authorname>", "list books from an author" )
  .parse(process.argv);

  
console.log(
  chalk.blue(
    figlet.textSync('library', { horizontalLayout: 'full'})
  )
)

