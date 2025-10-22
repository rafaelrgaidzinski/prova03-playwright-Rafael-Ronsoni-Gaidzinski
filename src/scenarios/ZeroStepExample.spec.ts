import { test } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('zerostep example', async ({ page }) => {
  await page.goto('https://www.practicetestqa.xyz/forms');

  const aiArgs = { page, test };
  await ai('Fill the username field with: Rafael', aiArgs);
  await ai('Fill the email field with: rafael@gmail.com', aiArgs);
  await ai('Fill the password field using faker.internet.password', aiArgs);
  await ai('Click the checkbox Email Notifications', aiArgs);
  await ai('Click the button submit', aiArgs);
  await ai('Scroll the page to the top', aiArgs);
});
