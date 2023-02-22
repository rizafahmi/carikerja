import {expect} from "@playwright/test";

export class HomePage {
  /**
   * @param { import('@playwright/test').Page} page
   */

  constructor(page) {
    this.page = page;
    this.inputLocation = page.locator("#inputLocation");
    this.listLocation = page.locator("#listLocation");
  }

  async open() {
    await this.page.goto("/");
  }

  /**
   * @param {string} location
   */
  async filterByLocation(location) {
    await this.inputLocation.click();
    await this.inputLocation.fill(location);
    await this.page.keyboard.press("Enter");
    for (const li of await this.listLocation.all()) {
      expect(li).toContainText(location, {ignoreCase: true});
    }
  }
}
