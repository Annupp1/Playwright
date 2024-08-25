const {test,expect}=require ('@playwright/test');
test('shadow dom', async({page})=>{
  await  page.goto('https://practice.expandtesting.com/shadowdom');
  const mes=  await page.locator('#my-btn').nth(1).textContent();
  console.log(mes);

});