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
});
