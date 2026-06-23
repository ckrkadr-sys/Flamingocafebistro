import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, test } from "node:test";
import assert from "node:assert/strict";

const currentDirectory = dirname(fileURLToPath(import.meta.url));
const homePageSource = readFileSync(join(currentDirectory, "page.tsx"), "utf8");

describe("localized homepage composition", () => {
  test("does not render removed promotional homepage sections", () => {
    const removedHomeSections = [
      "AboutBistro",
      "HomeGalleryPreview",
      "EventNights",
      "Testimonials",
      "ReservationBand",
    ];

    for (const sectionName of removedHomeSections) {
      assert.equal(
        homePageSource.includes(sectionName),
        false,
        `${sectionName} should not be imported or rendered by app/[lang]/page.tsx`,
      );
    }
  });
});
