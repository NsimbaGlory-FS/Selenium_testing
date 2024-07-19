require("chromedriver");
const { Builder, By, Key, until } = require("selenium-webdriver");

async function chrome_test() {
  const driver = new Builder().forBrowser("chrome").build();

  await driver.get("http://www.google.com/ncr");

  await driver.findElement(By.name("q")).sendKeys("nicholas cage", Key.RETURN);

  await driver.wait(until.titleIs("nicholas cage - Google Search"), 1000);

  setInterval(function () {
    driver.quit();
  }, 1000);
}

chrome_test();
