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
const homeHeroSource = readFileSync(join(currentDirectory, "HomeHero.tsx"), "utf8");
const featureStripSource = readFileSync(
  join(currentDirectory, "FeatureStrip.tsx"),
  "utf8",
);
const dictionariesSource = readFileSync(
  join(currentDirectory, "..", "..", "lib", "i18n", "dictionaries.ts"),
  "utf8",
);

function getRuleBody(selector: string) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = globalsCss.match(new RegExp(`${escapedSelector}\\s*\\{([^}]*)\\}`));

  assert.ok(match, `${selector} rule should exist`);

  return match[1];
}

describe("homepage layout width system", () => {
  test("uses the cafe exterior photo as a full-bleed, menu-focused hero", () => {
    const heroRule = getRuleBody(".home-hero-v2");

    assert.match(heroRule, /width:\s*100%;/);
    assert.match(heroRule, /height:\s*clamp\(70vh,\s*76vh,\s*82vh\);/);
    assert.match(
      heroRule,
      /url\("\/images\/home\/flamingo-night-exterior\.png"\)/,
    );
    assert.match(heroRule, /background-position:\s*68% center;/);
    assert.match(heroRule, /background-size:\s*cover;/);

    assert.match(
      globalsCss,
      /\.home-feature-strip,\s*\.home-about-bistro[\s\S]*?width:\s*var\(--home-content-width\);/,
    );
    assert.doesNotMatch(globalsCss, /\.home-signature\b/);
    assert.doesNotMatch(globalsCss, /\.home-location__inner\b/);
    assert.doesNotMatch(globalsCss, /\.home-footer\b/);
  });

  test("keeps the hero title compact enough for the left text area", () => {
    const heroTitleRule = getRuleBody(".home-hero-v2__title");

    assert.match(heroTitleRule, /font-size:\s*clamp\(2\.75rem,\s*4vw,\s*4\.1rem\);/);
  });

  test("keeps the home header logo compact over the photo hero", () => {
    const homeLogoRule = getRuleBody(".site-shell--home .home-header__logo-link");

    assert.match(homeLogoRule, /width:\s*clamp\(4\.15rem,\s*5\.35vw,\s*5\.35rem\);/);
    assert.doesNotMatch(homeLogoRule, /13rem/);
  });

  test("renders only the compact menu CTA and category links in the hero source", () => {
    assert.match(homeHeroSource, /getLocalizedPath\(locale,\s*"menu"\)/);
    assert.match(homeHeroSource, /categoryId:\s*"kahvalti"/);
    assert.match(homeHeroSource, /categoryId:\s*"kahveler"/);
    assert.match(homeHeroSource, /categoryId:\s*"tatlilar"/);
    assert.match(homeHeroSource, /heroCategoryLinks/);

    assert.doesNotMatch(homeHeroSource, /heroSecondaryAction/);
    assert.doesNotMatch(homeHeroSource, /heroPanelLine/);
    assert.doesNotMatch(homeHeroSource, /heroMoodBadge/);
    assert.doesNotMatch(homeHeroSource, /home-hero-v2__panel/);
  });

  test("keeps new homepage hero copy in the dictionary and removes old hero fields", () => {
    assert.match(dictionariesSource, /heroEyebrow/);
    assert.match(dictionariesSource, /heroCategoryLinks/);

    assert.doesNotMatch(dictionariesSource, /heroScriptLabel/);
    assert.doesNotMatch(dictionariesSource, /heroRibbonLabel/);
    assert.doesNotMatch(dictionariesSource, /heroSecondaryAction/);
  });

  test("keeps feature strip items unnumbered", () => {
    assert.doesNotMatch(featureStripSource, /index \+ 1/);
    assert.doesNotMatch(featureStripSource, /home-feature__marker/);
    assert.doesNotMatch(globalsCss, /\.home-feature__marker\b/);
  });
});
