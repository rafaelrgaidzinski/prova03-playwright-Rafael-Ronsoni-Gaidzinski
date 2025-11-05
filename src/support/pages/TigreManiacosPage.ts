import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import TigreManiacosElements from '../elements/TigreManiacosElements';
import BasePage from './BasePage';

export default class TigreManiacosPage extends BasePage {
  readonly tigreManiacosElements: TigreManiacosElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.tigreManiacosElements = new TigreManiacosElements(page);
  }

  async cadastrarPessoaFisica(): Promise<void> {
    await this.tigreManiacosElements.getFieldPessoaFisica().check();
    await this.tigreManiacosElements
      .getFieldNome()
      .fill(faker.person.firstName());
    await this.tigreManiacosElements
      .getFieldSobrenome()
      .fill(faker.person.lastName());
    await this.tigreManiacosElements.getFieldDataNascimento().type('30101991');
    await this.tigreManiacosElements.getFieldSexo().selectOption('M');
    await this.tigreManiacosElements.getFieldCPF().type('05105745051');
    await this.tigreManiacosElements
      .getFieldEmail()
      .fill(faker.internet.email());
    await this.tigreManiacosElements.getFieldCelular().type('48999998888');
    await this.tigreManiacosElements.getFieldTelefoneFixo().type('4899998888');

    const senha = faker.internet.password();

    await this.tigreManiacosElements.getFieldSenha().fill(senha);
    await this.tigreManiacosElements.getFieldRepitaSenha().fill(senha);

    await this.tigreManiacosElements.getBotaoCadastrar().click();
  }

  async cadastrarPessoaJuridica(): Promise<void> {
    await this.tigreManiacosElements.getFieldPessoaJuridica().check();
    await this.tigreManiacosElements
      .getFieldNome()
      .fill(faker.person.firstName());
    await this.tigreManiacosElements
      .getFieldRazaoSocial()
      .fill(faker.company.name());
    await this.tigreManiacosElements.getFieldCNPJ().clear();
    await this.tigreManiacosElements.getFieldCNPJ().type('51826560000130');
    await this.tigreManiacosElements
      .getFieldInscriçãoEstadual()
      .fill(faker.string.numeric(9));

    await this.tigreManiacosElements
      .getFieldEmail()
      .fill(faker.internet.email());
    await this.tigreManiacosElements.getFieldCelular().type('48999998888');
    await this.tigreManiacosElements.getFieldTelefoneFixo().type('4899998888');

    const senha = faker.internet.password();

    await this.tigreManiacosElements.getFieldSenha().fill(senha);
    await this.tigreManiacosElements.getFieldRepitaSenha().fill(senha);

    await this.tigreManiacosElements.getBotaoCadastrar().click();
  }

  async cadastrarPessoaFisicaSemRepetirSenha(): Promise<void> {
    await this.tigreManiacosElements.getFieldPessoaFisica().check();
    await this.tigreManiacosElements
      .getFieldNome()
      .fill(faker.person.firstName());
    await this.tigreManiacosElements
      .getFieldSobrenome()
      .fill(faker.person.lastName());
    await this.tigreManiacosElements.getFieldDataNascimento().clear();
    await this.tigreManiacosElements.getFieldDataNascimento().type('30101991');
    await this.tigreManiacosElements.getFieldSexo().selectOption('M');
    await this.tigreManiacosElements.getFieldCPF().type('05105745051');
    await this.tigreManiacosElements
      .getFieldEmail()
      .fill(faker.internet.email());
    await this.tigreManiacosElements.getFieldCelular().type('48999998888');
    await this.tigreManiacosElements.getFieldTelefoneFixo().type('4899998888');

    const senha = faker.internet.password();

    await this.tigreManiacosElements.getFieldSenha().fill(senha);

    await this.tigreManiacosElements.getBotaoCadastrar().click();

    await this.tigreManiacosElements.getMensagemErro();
  }
}
