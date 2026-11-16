const { test, expect } = require('@playwright/test');
for (let i=1;i<=3;i++) {
 test(`Agente ${i}: laboratorio local`,async ({page})=>{
  await page.goto('http://127.0.0.1:8765/laboratorio.html');
  await expect(page.locator('#status')).toHaveText('Preparado');
  await page.getByRole('button',{name:'Ejecutar prueba'}).click();
  await expect(page.locator('#status')).toHaveText('Completado');
  await page.screenshot({path:`test-results/agente-${i}.png`,fullPage:true});
 });
}
