const {test,expect}=require('@playwright/test');
test('handling dropdown', async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   await page.waitForTimeout(1000);
    await page.locator('#username').fill("rahulshettyacademy");
   await page.waitForTimeout(1000);
    await page.locator('#password').fill("learning")
    await page.waitForTimeout(1000);
    const dropdown= await page.locator("select.form-control");
    await page.waitForTimeout(1000);
    //selecting the consult option from drpdwn
    await dropdown.selectOption("consult");
    await page.waitForTimeout(1000);
    //radio button
    await page.locator("span.radiotextsty").nth(1).click();
    //click upon ok button of popup
    await page.locator("#okayBtn").click();
    await expect(page.locator("span.radiotextsty").nth(1)).toBeChecked();
    await page.waitForTimeout(1000);
   
   //click upon terms and condition checkbox
    await page.locator('#terms').click();
    await expect(page.locator('#terms')).toBeChecked();
    //to validate the blinking link
   await expect(page.locator('[href*=document]')).toHaveAttribute('class','blinkingText')
  console.log(await page.locator('[href*=document]').textContent());
});
