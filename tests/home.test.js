import {test, expect} from "@playwright/test";
import {HomePage} from "./pages/home.page.js";

test.describe("Cari Kerja Home Page E2E Test", () => {
  test.beforeEach(async ({page}) => {
    const homePage = new HomePage(page);
    await homePage.open();
    expect(await page.textContent("h4")).toBe(
      "Kata siapa cari software engineer yang berpengalaman itu susah?",
    );
  });

  test("user should be able to filter using location", async ({page}) => {
    const homePage = new HomePage(page);
    await homePage.filterByLocation("bandung");
  });
});
