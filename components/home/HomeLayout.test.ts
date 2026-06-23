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

function getRuleBody(selector: string) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = globalsCss.match(new RegExp(`${escapedSelector}\\s*\\{([^}]*)\\}`));

  assert.ok(match, `${selector} rule should exist`);

  return match[1];
}

function getRuleBodyContaining(selector: string, pattern: RegExp) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const matches = [
    ...globalsCss.matchAll(new RegExp(`${escapedSelector}\\s*\\{([^}]*)\\}`, "g")),
  ];
  const matchingRule = matches.find((match) => pattern.test(match[1]));

  assert.ok(matchingRule, `${selector} rule matching ${pattern} should exist`);

  return matchingRule[1];
}

describe("homepage layout width system", () => {
  test("uses one shared non-100vw content width for hero, feature strip and signature", () => {
    const homePageRule = getRuleBody(".home-page");

    assert.match(homePageRule, /--home-content-width:/);
    assert.doesNotMatch(
      globalsCss,
      /\.home-page\s*\{[^}]*overflow:\s*hidden;/,
    );

    assert.match(
      globalsCss,
      /\.home-hero-v2,\s*\.home-feature-strip,\s*\.home-signature[\s\S]*?width:\s*var\(--home-content-width\);/,
    );
    assert.doesNotMatch(
      globalsCss,
      /\.home-hero-v2,\s*\.home-feature-strip\s*\{[\s\S]*?width:\s*min\(calc\(100vw/,
    );
  });

  test("keeps the hero desktop grid flexible enough to avoid clipping the title", () => {
    const heroGridRule = getRuleBody(".home-hero-v2__grid");
    const heroContentRule = getRuleBodyContaining(
      ".home-hero__content",
      /padding-inline-start:/,
    );
    const heroTitleRule = getRuleBodyContaining(
      ".home-hero-v2__title",
      /text-shadow:/,
    );

    assert.doesNotMatch(heroGridRule, /minmax\(29rem,/);
    assert.match(heroContentRule, /padding-inline-start:\s*clamp\(1rem,/);
    assert.match(heroTitleRule, /max-width:\s*min\(100%,\s*8ch\);/);
  });
});
