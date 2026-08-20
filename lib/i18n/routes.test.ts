import assert from "node:assert/strict";
import { describe, test } from "node:test";

import { getEquivalentLocalizedPath } from "./routes.ts";

describe("getEquivalentLocalizedPath", () => {
  test("switches between every supported locale on the home route", () => {
    assert.equal(getEquivalentLocalizedPath("/tr", "en"), "/en");
    assert.equal(getEquivalentLocalizedPath("/tr", "ru"), "/ru");
    assert.equal(getEquivalentLocalizedPath("/tr", "de"), "/de");
    assert.equal(getEquivalentLocalizedPath("/en", "tr"), "/tr");
  });

  test("preserves the current menu route and category query across locales", () => {
    assert.equal(
      getEquivalentLocalizedPath("/tr/menu?category=kahvalti", "en"),
      "/en/menu?category=kahvalti",
    );
    assert.equal(
      getEquivalentLocalizedPath("/tr/menu?category=kahvalti", "ru"),
      "/ru/menu?category=kahvalti",
    );
    assert.equal(
      getEquivalentLocalizedPath("/tr/menu?category=kahvalti", "de"),
      "/de/menu?category=kahvalti",
    );
    assert.equal(
      getEquivalentLocalizedPath("/en/menu?category=kahvalti", "tr"),
      "/tr/menu?category=kahvalti",
    );
  });

  test("preserves query parameters and hash without re-encoding them", () => {
    assert.equal(
      getEquivalentLocalizedPath(
        "/tr/menu?category=kahvalti&search=filtre%20kahve#menu-category-kahvalti",
        "de",
      ),
      "/de/menu?category=kahvalti&search=filtre%20kahve#menu-category-kahvalti",
    );
  });

  test("keeps the equivalent localized route for every page", () => {
    assert.equal(getEquivalentLocalizedPath("/tr/about", "en"), "/en/about");
    assert.equal(
      getEquivalentLocalizedPath("/en/gallery", "ru"),
      "/ru/gallery",
    );
    assert.equal(
      getEquivalentLocalizedPath("/de/contact?from=header#location", "tr"),
      "/tr/contact?from=header#location",
    );
  });
});
