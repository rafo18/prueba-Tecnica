const {Builder} = require('selenium-webdriver');
const {baseUrl} = require ('../data/homePage.json')
const HomePage = require('../pages/HomePage');

async function example (){
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get(baseUrl);
    await driver.findElement(HomePage.get.xButton).click();
}

example();