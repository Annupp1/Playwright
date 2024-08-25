const {test,expect}=require('@playwright/test')
test('locator', async({page})=>{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
let title=await page.title();
await expect(page).toHaveTitle(title);
await page.locator('#username').fill("rahulshettyacademy");
await page.waitForTimeout(1000);
await page.locator('#password').fill("lerning");
await page.waitForTimeout(1000);
await page.locator('#signInBtn').click();
//Getting the text present in error box
console.log(await page.locator("[style*='block']").textContent());
//validation
await expect(page.locator("[style*='block']")).toContainText('Incorrect');


});