import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class FormularioElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getFieldUsername(): Locator {
    return this.page.locator('#username-input');
  }

  getFieldEmail(): Locator {
    return this.page.locator('#email-input');
  }

  getFieldPassword(): Locator {
    return this.page.locator('#password-input');
  }

  getCheckboxEmailNotifications(): Locator {
    return this.page.locator('#notifications-checkbox');
  }

  getButtonSubmit(): Locator {
    return this.page.locator('#submit-form-button');
  }

  getFormValidateMessage(): Locator {
    return this.page.locator('#form-success');
  }
  
}
