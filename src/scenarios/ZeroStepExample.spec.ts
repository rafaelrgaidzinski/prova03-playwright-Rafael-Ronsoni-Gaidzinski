import { test } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('zerostep example', async ({ page }) => {
  await page.goto('https://www.tigremaniacos.com.br/cadastro');

  const aiArgs = { page, test };
  await ai('Fill the field Nome with: Rafael', aiArgs);
  await ai('Fill the field Sobrenome with: Ronsoni Gaidzinski', aiArgs);
  await ai('Fill the field Data de Nascimento with: 30/10/1991', aiArgs);
  await ai('Select the option Masculino in the field Sexo', aiArgs);
  await ai('Fill the field CPF with: 05105745051', aiArgs);
  await ai('Fill the field E-mail with: rafael@gmail.com', aiArgs);
  await ai('Fill the field Telefone Celular with: 48999998888', aiArgs);
  await ai('Fill the field Telefone Fixo with: 4899998888', aiArgs);
  await ai('Fill the field Senha with: !Mag1991', aiArgs);
  await ai('Fill the field Repita a Senha with: !Mag1991', aiArgs);
  await ai('Click the button Cadastrar', aiArgs);
});
