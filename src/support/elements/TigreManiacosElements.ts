import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class TigreManiacosElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getFieldPessoaFisica(): Locator {
    return this.page.locator('#customer-type-person');
  }

  getFieldPessoaJuridica(): Locator {
    return this.page.locator('#customer-type-company');
  }

  getFieldNome(): Locator {
    return this.page.locator('#AddOrSetCustomer-Name');
  }

  getFieldSobrenome(): Locator {
    return this.page.locator('#AddOrSetCustomer-Surname');
  }

  getFieldDataNascimento(): Locator {
    return this.page.locator('#AddOrSetCustomer-BirthDate');
  }

  getFieldSexo(): Locator {
    return this.page.locator('#AddOrSetCustomer-Gender');
  }

  getFieldCPF(): Locator {
    return this.page.locator('#AddOrSetCustomer-Cpf');
  }

  getFieldRazaoSocial(): Locator {
    return this.page.locator('#AddOrSetCustomer-TradingName');
  }

  getFieldCNPJ(): Locator {
    return this.page.locator('#AddOrSetCustomer-Cnpj');
  }

  getFieldInscriçãoEstadual(): Locator {
    return this.page.locator('#AddOrSetCustomer-ExtendedProperties-0-Value');
  }

  getFieldEmail(): Locator {
    return this.page.locator('#AddOrSetCustomer-Email');
  }

  getFieldCelular(): Locator {
    return this.page.locator('#AddOrSetCustomer-Contact-CellPhone');
  }

  getFieldTelefoneFixo(): Locator {
    return this.page.locator('#AddOrSetCustomer-Contact-Phone');
  }

  getFieldSenha(): Locator {
    return this.page.locator('#AddOrSetCustomer-Password');
  }

  getFieldRepitaSenha(): Locator {
    return this.page.locator('#AddOrSetCustomer-Password-check');
  }

  getBotaoCadastrar(): Locator {
    return this.page.locator('button:has-text("Cadastrar")');
  }

  getMensagemErro(): Locator {
    return this.page.locator('text=Repita corretamente a senha informada');
  }
}
