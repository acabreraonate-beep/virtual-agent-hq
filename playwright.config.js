const { defineConfig } = require('@playwright/test');
module.exports = defineConfig({testDir:'./tests',fullyParallel:true,workers:3,retries:0,reporter:[['list'],['html',{open:'never'}]],use:{browserName:'chromium',headless:true,viewport:{width:390,height:844}}});
