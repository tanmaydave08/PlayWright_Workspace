const {test, expect} =require('@playwright/test');
/* test("Client App Test - Registration", async ({page})=>{

    await page.goto('https://rahulshettyacademy.com/client/');
    await page.locator('a.text-reset').click();
    await page.locator('#firstName').fill("John");
    await page.locator('#lastName').fill("Wick");
    await page.locator('#userEmail').fill("johnwick@gmail.com");
    await page.locator('#userMobile').fill("9876543210");
    
    await page.locator('select[formcontrolname="occupation"] option[value*="Doctor"]').click();
    await page.locator("[value='Male']").click();
    await page.locator('#userPassword').fill("John@1234");
    await page.locator('#confirmPassword').fill("John@1234");
    
    await page.locator(".col-md-1").click();
    await page.locator("input#login").click();
    console.log("Registration Completed Successfully"); 




}); */

 
test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productName = 'zara coat 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").type("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").last().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
 
})