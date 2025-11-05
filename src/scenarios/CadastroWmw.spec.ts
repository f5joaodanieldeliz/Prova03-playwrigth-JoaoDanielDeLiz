import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import WmwPage from '../support/pages/WmwPage';

test.describe('Testes funcionais no site do wmw Sistemas', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let WmWPages: WmwPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.wmw')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    WmWPages = new WmwPage(page);
    await page.goto(BASE_URL);
  });

  test('Validar funcionalidade de contato para falar com eles', async () => {
    await WmWPages.preencherCamposValidos();
    await WmWPages.enviarFormulario();
  });

  test('Validar se esta estorando um erro ao prencher o campo de Email errado', async () => {
    await WmWPages.preencherCampoEmailInvalidos();
    await WmWPages.enviarFormulario();
    await WmWPages.ValidarMensagemErroEmail();
  });

  test('Validar se esta estorando um erro ao nao prencher o campo de telefone', async () => {
    await WmWPages.preencherCamposTelefoneInvalidos();
    await WmWPages.enviarFormulario();
    await WmWPages.ValidarMensagemErroTelefone();
  });
});
