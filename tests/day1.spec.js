const {test,expect}=require('@playwright/test');

test('with browser fixture',async({browser})=>{
   const context= await browser.newContext();

   const page= await context.newPage();
  await page.goto("https://google.com");
  let title= await page.title();
  console.log(title);
  await expect(page).toHaveTitle(title);

  await page.close();
});
test.only('with page fixture',async({page})=>{
  
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 let title= await page.title();
 console.log(title);
 await expect(page).toHaveTitle(title);

 await page.close();
});
