#!/usr/bin/env node

const chalk = require("chalk");
const appleSystemStatus = require(".");

appleSystemStatus()
  .then(services => {
    if (services.length <= 0) {
      console.log(chalk.green.bold("All services are available."));
      return;
    }
    services.forEach(s => {
      console.log(`${chalk.red.underline.bold(s.serviceName)} - ${s.redirectUrl}`);
      console.log(s.events);
    });
  })
  .catch(console.error);
