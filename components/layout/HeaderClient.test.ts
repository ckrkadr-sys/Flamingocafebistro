import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, test } from "node:test";

const currentDirectory = dirname(fileURLToPath(import.meta.url));
const globalsCss = readFileSync(
  join(currentDirectory, "..", "..", "app", "globals.css"),
  "utf8",
);
const headerClientSource = readFileSync(
  join(currentDirectory, "HeaderClient.tsx"),
  "utf8",
);
const languageSwitcherSource = readFileSync(
  join(currentDirectory, "LanguageSwitcher.tsx"),
  "utf8",
);

function getRuleBody(selector: string) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = globalsCss.match(new RegExp(`${escapedSelector}\\s*\\{([^}]*)\\}`));

  assert.ok(match, `${selector} rule should exist`);

  return match[1];
}

describe("header layout styles", () => {
  test("puts a restrained dark header on the full-width shell", () => {
    const headerRule = getRuleBody(".home-header");
    const headerBarRule = getRuleBody(".home-header__bar");

    assert.match(headerRule, /background:\s*rgb\(13 13 13 \/ 98%\);/);
    assert.match(headerRule, /border-bottom:\s*1px solid rgb\(255 247 236 \/ 14%\);/);
    assert.doesNotMatch(headerRule, /3px solid var\(--home-pink\)/);
    assert.doesNotMatch(headerRule, /background:\s*var\(--home-cream\);/);

    assert.doesNotMatch(headerBarRule, /border:\s*3px solid var\(--home-pink\);/);
    assert.doesNotMatch(headerBarRule, /border-radius:\s*999px;/);
    assert.doesNotMatch(headerBarRule, /background:\s*var\(--home-charcoal\);/);
  });

  test("keeps one language switcher beside the mobile navigation", () => {
    const languageSwitcherInstances =
      headerClientSource.match(/<LanguageSwitcher\b/g) ?? [];

    assert.equal(languageSwitcherInstances.length, 1);
    assert.ok(
      headerClientSource.indexOf("<LanguageSwitcher") <
        headerClientSource.indexOf("<details"),
    );
    assert.match(
      headerClientSource,
      /onOpen=\{\(\) => mobileMenuRef\.current\?\.removeAttribute\("open"\)\}/,
    );
    assert.match(
      headerClientSource,
      /disclosureGroupName=\{headerDisclosureGroupName\}/,
    );
    assert.match(
      headerClientSource,
      /name=\{headerDisclosureGroupName\}/,
    );
  });

  test("keeps mobile header controls within a three-column layout", () => {
    const mobileHeaderBarRule = getRuleBody(
      ".site-shell .home-header__bar",
    );
    const actionsRule = getRuleBody(".home-header__actions");
    const mobileNavigationRule = getRuleBody(".home-header__mobile");
    const triggerRule = getRuleBody(".language-switcher__trigger");
    const popoverRule = getRuleBody(".language-switcher__popover");

    assert.match(
      mobileHeaderBarRule,
      /grid-template-columns:\s*minmax\(4\.15rem,\s*1fr\)\s+auto\s+auto;/,
    );
    assert.match(triggerRule, /min-width:\s*44px;/);
    assert.match(triggerRule, /min-height:\s*44px;/);
    assert.match(actionsRule, /position:\s*relative;/);
    assert.match(actionsRule, /z-index:\s*2;/);
    assert.match(mobileNavigationRule, /z-index:\s*1;/);
    assert.match(popoverRule, /right:\s*0;/);
    assert.match(
      popoverRule,
      /width:\s*min\(11rem,\s*calc\(100vw - 1\.5rem\)\);/,
    );
  });

  test("exposes the language popover as a navigation disclosure", () => {
    assert.match(languageSwitcherSource, /<details/);
    assert.match(languageSwitcherSource, /name=\{disclosureGroupName\}/);
    assert.match(languageSwitcherSource, /onToggle=\{handleToggle\}/);
    assert.match(languageSwitcherSource, /<summary/);
    assert.match(languageSwitcherSource, /<nav aria-label=\{ariaLabel\}>/);
    assert.match(languageSwitcherSource, /onNavigate=\{handleLocaleSelect\}/);
    assert.doesNotMatch(languageSwitcherSource, /hidden=\{/);
    assert.doesNotMatch(languageSwitcherSource, /useState\(false\)/);
    assert.doesNotMatch(languageSwitcherSource, /aria-haspopup="menu"/);
    assert.doesNotMatch(languageSwitcherSource, /role="menu(?:item)?"/);
    assert.match(
      languageSwitcherSource,
      /window\.location\.pathname\}\$\{window\.location\.search\}\$\{window\.location\.hash\}/,
    );
  });
});
