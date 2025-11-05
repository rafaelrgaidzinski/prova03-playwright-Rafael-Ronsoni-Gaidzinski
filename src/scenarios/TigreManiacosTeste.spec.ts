import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import TigreManiacosPage from '../support/pages/TigreManiacosPage';

test.describe('Testes funcionais no site TigreManiacos', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let tigreManiacosPage: TigreManiacosPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.tigreManiacos')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    tigreManiacosPage = new TigreManiacosPage(page);
    await page.goto(BASE_URL);
  });

  test('Validar cadastro pessoa fisica', async ({ page }) => {
    await tigreManiacosPage.cadastrarPessoaFisica();
  });

  test('Validar cadastro pessoa juridica', async ({ page }) => {
    await tigreManiacosPage.cadastrarPessoaJuridica();
  });

  test('Validar cadastro pessoa juridica sem repetir senha', async ({
    page
  }) => {
    await tigreManiacosPage.cadastrarPessoaFisicaSemRepetirSenha();
  });
});
