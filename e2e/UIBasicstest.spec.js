const {test, expect} =require('@playwright/test');

/* test('First Playwright Test', async ({page}) =>
{

    console.log("This is my first Playwright Test");
    
    const userName =page.locator("input#username");
    const password = page.locator("input#password");
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    console.log( await page.title());
    await userName.fill("rahulshettyacadem");
    await password.fill("Learning@830$3mK2");
    await page.locator("[type='submit']").click();
    // wait for alert/message to appear, then print it
    const alert = page.locator("[style*='block']");
    
    await expect(alert).toBeVisible({ timeout: 5000 });
    console.log(await alert.textContent());
    
    // Use Playwright locator matcher for text content
    await expect(alert).toContainText("Incorrect");
    
    //Fill
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await password.fill("");
    await password.fill("Learning@830$3mK2");
    await page.locator("[type='submit']").click();
    await expect(page).toHaveTitle("ProtoCommerce");

    console.log(await page.locator(".card-body  a").first().textContent());
    console.log(await page.locator(".card-body  a").nth(1).textContent());
    console.log(await page.locator(".card-body  a").last().textContent());
    const allTitles = page.locator(".card-body  a");
    const count = await allTitles.count();
    console.log(count);
    console.log(await allTitles.allTextContents());
    console.log("Test Completed Successfully");




}); */


// test('Page Playwright Test', async ({browser, page}) =>{
//     await page.goto('https://google.com');
    
//     console.log( await page.title());
//     expect(await page.title()).toBe("Google");



// });

/* test('@Child windows handle', async ({browser})=>
 {
    const context = await browser.newContext();
    const page =  await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
    
    //Creating new Page Context. Learn more about Promise.all
    const [newPage]=await Promise.all(
   [
      context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
      documentLink.click(),
   
   ])//new page is opened
   
   
   const  text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@")
    const domain =  arrayText[1].split(" ")[0]
    //console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").inputValue());
 
 }) */
