const {Builder} = require('selenium-webdriver');
const {baseUrl} = require ('../data/homePage.json')
const HomePage = require('../pages/HomePage');

let homePage;   


async function example (){
    let driver = await new Builder().forBrowser('chrome').build();
homePage = new HomePage(driver);

    await driver.get('https://www.bg.com.bo/canales-digitales/ganamovil-empresas/');
    // await driver.findElement(homePage.locators.popUpCloseButton).click();
    await driver.sleep(2000)
    await driver.executeScript('window.scrollBy(0, 500);')    
}

example();