#!/usr/bin/env node
"use strict";
var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var path = require('path');
var program = require('commander');
clear();
console.log(chalk.blue(figlet.textSync('solid-library-kata', { horizontalLayout: 'full' })));
program
    .version('0.0.1')
    .description("An example CLI to manage a library")
    .option('-u, --username <username>', 'login')
    .option("-l, --list <authorname>", "list books from an author")
    .parse(process.argv);
