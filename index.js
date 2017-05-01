#!/usr/bin/env node

"use strict";
const driver = require("promise-phantom");
const phantomjs = require("phantomjs-prebuilt");
const jsdom = require("jsdom").jsdom;
const Table = require("cli-table2");
const co = require("co");
const Entities = require("html-entities").AllHtmlEntities;

const entities = new Entities();

co(function*() {
  const spinner = require("ora")("Loading...").start();
  const phantom = yield driver.create({ path: phantomjs.path });
  const page = yield phantom.createPage();

  yield page.open("https://developer.apple.com/system-status/");
  const result = yield page.evaluate(getServices);
  const table = new Table({
    head: ["name", "status"],
    colWidths: [40, 15],
  });
  for (let e of result) {
    const service = jsdom(e);
    table.push([
      entities.decode(service.querySelector(".matrix_p").innerHTML),
      service.querySelector("span").className,
    ]);
  }

  yield page.close();
  spinner.stop();
  console.log(table.toString());
  yield phantom.exit();
});

function getServices() {
  var tds = document.querySelectorAll("#dashboard tr>td");
  var innerHTMLs = [];
  for (var i = 0; i < tds.length; i++) {
    innerHTMLs.push(tds[i].innerHTML);
  }
  return innerHTMLs;
}
