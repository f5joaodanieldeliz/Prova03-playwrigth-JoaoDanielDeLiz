import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import WmWElements from '../elements/WmwElements';
import BasePage from './BasePage';

export default class WmwPage extends BasePage {
  readonly WmwElements: WmWElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.WmwElements = new WmWElements(page);
  }

  async preencherCamposValidos(): Promise<void> {
    await this.WmwElements.getCampoNome().fill(faker.person.firstName());
    await this.WmwElements.getCampoEmpresa().fill(faker.person.jobTitle());
    await this.WmwElements.getCampoEmail().fill(faker.internet.email());
    await this.WmwElements.getCampoTelefone().fill(faker.phone.number());
    await this.WmwElements.getCampoMensagem().fill(faker.lorem.words(20));
  }

  async enviarFormulario(): Promise<void> {
    await this.WmwElements.getBotaoEnviar().click();
  }

  async preencherCampoEmailInvalidos(): Promise<void> {
    await this.WmwElements.getCampoNome().fill(faker.person.firstName());
    await this.WmwElements.getCampoEmpresa().fill(faker.person.jobTitle());
    await this.WmwElements.getCampoEmail().fill('Leandromuitofoda.com.br');
    await this.WmwElements.getCampoTelefone().fill(faker.phone.number());
    await this.WmwElements.getCampoMensagem().fill(faker.lorem.words(20));
  }

  async preencherCamposTelefoneInvalidos(): Promise<void> {
    await this.WmwElements.getCampoNome().fill(faker.person.firstName());
    await this.WmwElements.getCampoEmpresa().fill(faker.person.jobTitle());
    await this.WmwElements.getCampoEmail().fill(faker.internet.email());
    await this.WmwElements.getCampoTelefone().fill('1212121');
    await this.WmwElements.getCampoMensagem().fill(faker.lorem.words(20));
  }

  async ValidarMensagemErroEmail(): Promise<void> {
    await expect(this.WmwElements.getErroEmailMensagem()).toBeVisible();
  }

  async ValidarMensagemErroTelefone(): Promise<void> {
    await expect(this.WmwElements.getErroTelefoneMensagem()).toBeVisible();
  }
}
