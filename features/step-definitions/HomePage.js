const { Given, When, Then, AfterAll, BeforeAll } = require('@cucumber/cucumber')
const {Builder, By} = require('selenium-webdriver');
const {baseUrl} = require ('../../data/homePage.json')
const HomePage = require('../../pages/HomePage');
const GanaMovilEmpresas = require('../../pages/GanaMovilEmpresas');

let driver;
let homePage;   
let ganaMovilEmpresasPage

BeforeAll(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    homePage = new HomePage(driver);
    ganaMovilEmpresasPage = new GanaMovilEmpresas( driver );
});


Given('Dado que Ingresé al portal web www.bg.com.bo',{timeout:10000}, async function () { 
    homePage.visitPage(baseUrl);
    homePage.closePopUp();
});

When('Cuando Ingreso al menú Negocios|Menu hamburguesa|GanaMóvil Empresas',{timeout: 10000}, async function () {
    homePage.selectMenu('GanaMóvil Empresas');
    await driver.sleep(2000)
    await driver.executeScript('window.scrollBy(0, 500);')
    
});

When('Y busco los datos de contacto',{timeout: 10000}, async function () {

    
});



Then('Entonces obtengo un listado con el', async function () {
    
});

// AfterAll(async () =>  await driver.quit());


