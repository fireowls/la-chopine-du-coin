import { browser, by, element } from 'protractor';

export class AppPage {

  constructor(public url: string) { }

  navigateTo() {
    return browser.get(browser.baseUrl + '' + this.url) as Promise<any>;
  }

  getContentSelector(selector: string): Promise<string> {
    return element(by.css(selector)).getText() as Promise<string>;
  }
}
