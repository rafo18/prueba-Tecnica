const { By } = require('selenium-webdriver');

class GanaMovilEmpresas {
  constructor(driver) {
    this.driver = driver;
        this.locators = {
            tutorialButton: By.linkText('Tutoriales'),
        };
  }

  async clickOnNavbarButton() {
    await this.driver.findElement(this.locators.tutorialButton).click();
  }

  
}

module.exports = GanaMovilEmpresas;