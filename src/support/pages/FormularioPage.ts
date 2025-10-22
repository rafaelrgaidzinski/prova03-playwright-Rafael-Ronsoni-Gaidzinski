import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import FormularioElements from '../elements/FormularioElements';
import BasePage from './BasePage';

export default class FormularioPage extends BasePage {
  readonly formularioElements: FormularioElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.formularioElements = new FormularioElements(page);
  }

  async preencherCampos(): Promise<void> {
    await this.formularioElements
      .getFieldUsername()
      .fill(faker.person.firstName());
    await this.formularioElements.getFieldEmail().fill(faker.internet.email());
    await this.formularioElements
      .getFieldPassword()
      .fill(faker.internet.password());
    await this.formularioElements.getCheckboxEmailNotifications().click();
  }

  async enviarFormulario(): Promise<void> {
    await this.formularioElements.getButtonSubmit().click();
  }

  async validarEnvioFormulario(): Promise<void> {
    await expect(this.formularioElements.getFormValidateMessage()).toBeVisible();
  }
}
