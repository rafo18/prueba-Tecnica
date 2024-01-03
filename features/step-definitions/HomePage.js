const { Given, When, Then, AfterAll, BeforeAll } = require('@cucumber/cucumber')
const {Builder} = require('selenium-webdriver');
const {baseUrl} = require ('../../data/homePage.json')
const HomePage = require('../../pages/HomePage');




let driver;   

BeforeAll(async function() {
    driver = await new Builder().forBrowser('chrome').build();
});


Given('Dado que Ingresé al portal web www.bg.com.bo',{timeout:10000}, async function () { 
    await driver.get(baseUrl);
    driver.manage().window().maximize();
    await driver.findElement(HomePage.locators.popUpCloseButton).click();
});

When('Cuando Ingreso al menú Negocios|Menu hamburguesa|GanaMóvil Empresas', function () {
    HomePage.seleccionarMenu()

});

When('Y busco los datos de contacto', async function () {
    
});

Then('Entonces obtengo un listado con el', async function () {
    
});

// AfterAll(async () =>  await driver.quit());


