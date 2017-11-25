#!/usr/bin/env node

"use strict";

const ora = require("ora");
const meow = require("meow");

const cli = meow(
  `
    Usage
    $ foo <input1> <input2>

    Options
    --yellow, -y Make spinner and output text yellow

    Examples
    $ node-cli-starter 1 2 --yellow
    3
`,
  {
    alias: {
      y: "yellow"
    },
    flags: {
      yellow: {
        type: "boolean",
        alias: "y"
      }
    }
  }
);

const spinner = ora("Calculating").start();
const chalk = require("chalk");
const add = require("../lib/add");

if (cli.flags.yellow) {
  spinner.color = "yellow";
}
setTimeout(() => {
  const answer = add(cli.input[0], cli.input[1]);
  const colouredAnswer = cli.flags.yellow
    ? chalk.yellow(answer)
    : chalk.green(answer);
  spinner.succeed(colouredAnswer);
}, 1000);
