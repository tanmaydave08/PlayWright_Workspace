const {test,expect} = require ('@playwright/test');

test("Popup test", async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    //await page.goto("http://google.com");
    
    //Page navigation
    //await page.goBack();
    //await page.goForward();
    //Visible- Hidden attributes and assertions
    await expect (page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect (page.locator("#displayed-text")).toBeHidden();

    await page.locator("#confirmbtn").click();
    
    
    //Handling popups that are in JavaScript/Java
    page.on('dialog', dialog => dialog.accept());
    
    
    //mouse hover action
    await page.locator("#mousehover").hover();

    //Handling frames inside a webPage
    const frame_page =page.frameLocator("#courses-iframe");
    await frame_page.locator("li a[href*='lifetime-access']:visible").click();
    const textCheck = await frame_page.locator(".text h2").textContent();
    console.log(textCheck.split(" ")[1]);
    

    






})