import {expect, test} from "@playwright/test";

test("index page has expected h4", async ({page}) => {
  await page.goto("/");
  expect(await page.textContent("h4")).toBe(
    "Kata siapa cari software engineer yang berpengalaman itu susah?",
  );
});
