const {test,expect}=require('@playwright/test');

test('with browser fixture',async({browser})=>{
   const context= await browser.newContext();

   const page= await context.newPage();
  await page.goto("https://google.com");
  let title= await page.title();
  console.log(title);
  await expect(page).toHaveTitle("gogle");

  await page.close();
});
