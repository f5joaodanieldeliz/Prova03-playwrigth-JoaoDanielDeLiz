import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class WmWElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getCampoNome(): Locator {
    return this.page.locator('input[id="field_d3n51"]');
  }

  getCampoEmail(): Locator {
    return this.page.locator('input[id="field_audbt"]');
  }

  getCampoEmpresa(): Locator {
    return this.page.locator('input[id="field_peomi"]');
  }

  getCampoTelefone(): Locator {
    return this.page.locator('input[id="field_ic45a"]');
  }

  getCampoMensagem(): Locator {
    return this.page.locator('textarea[id="field_c4b67"]');
  }

  getBotaoEnviar(): Locator {
    return this.page.locator('button[type="submit"]').nth(0);
  }

  getErroEmailMensagem(): Locator {
    return this.page.locator('div[id="frm_error_field_audbt"]')
  }

  getErroTelefoneMensagem(): Locator {
    return this.page.locator('div[id="frm_error_field_ic45a"]')
  }
}
