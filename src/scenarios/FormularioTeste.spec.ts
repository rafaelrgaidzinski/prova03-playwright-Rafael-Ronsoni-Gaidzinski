import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import FormularioPage from '../support/pages/FormularioPage';

test.describe('Testes funcionais no formulário de teste', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let formularioPage: FormularioPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.teste')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    formularioPage = new FormularioPage(page);
    await page.goto(BASE_URL);
  });

  test('Validar preenchimento do formulário', async ({ page }) => {
    await formularioPage.preencherCampos();
    await formularioPage.enviarFormulario();
    await page.locator('#form-success').scrollIntoViewIfNeeded();
    await formularioPage.validarEnvioFormulario();
  });
});
