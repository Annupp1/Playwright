const {test,expect}=require('@playwright/test');

test.only('with browser fixture',async({browser})=>{
   const context= await browser.newContext();

   const page= await context.newPage();
  await page.goto("https://google.com");
  let title= await page.title();
  console.log(title);
  await expect(page).toHaveTitle(title);

  await page.close();
});

test("with page fixture", async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/ ")
    //to slow down the execution
    await page.waitForTimeout(3000);
    let title= await page.title();
  console.log(title)
 await expect(page).toHaveTitle(title);
    await page.close();

});