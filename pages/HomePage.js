
const { By } = require('selenium-webdriver');

class HomePage {
  constructor(driver) {
    this.driver = driver;
        this.locators = {
            popUpCloseButton: By.css('[data-headlessui-state = open] svg'),
            negociosButton: By.linkText('Negocios'),
            burgerButton: By.css("[id = menu-superior] button[class*=item]"),
            tutorialButton: By.linkText('Tutoriales'),
        };
  }

  

  async visitPage(url){
    this.driver.get(url);
    this.driver.manage().window().maximize();
  }

  async closePopUp(){
    await this.driver.findElement(this.locators.popUpCloseButton).click();
  }

  async selectMenu(element) {
    const xpathButton = `//h6[contains(text(), '${element}')]`; 
    
    await this.driver.findElement(this.locators.negociosButton).click();
    await this.driver.findElement(this.locators.burgerButton).click();
    await this.driver.sleep(600);
    await this.driver.findElement(By.xpath(xpathButton)).click();
  }

 

  
}

module.exports = HomePage;
