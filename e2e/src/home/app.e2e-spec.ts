import { AppPage } from '../app.po';
import { browser, logging } from 'protractor';
import { environment } from '../../../src/environments/environment';

describe('home page test', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage('');
    page.navigateTo();
  });

  it('should display title app', () => {
    expect(page.getContentSelector('app-home-welcome div h3')).toBe(environment.appInfo.title);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
