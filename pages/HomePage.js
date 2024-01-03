const { By } = require ('selenium-webdriver');



class HomePage {
    constructor(driver) {
        this.driver = driver;
        this.locators = {
            popUpCloseButton: By.css('[data-headlessui-state = open] svg'),
            negociosButton: By.linkText('Negocios')
        };
    }
    
     async seleccionarMenu(){
        console.log('error',this.driver);
        let negociosButton =  await this.driver.findElement(this.locators.negociosButton);
        negociosButton.click()
    }

}

module.exports = new HomePage();