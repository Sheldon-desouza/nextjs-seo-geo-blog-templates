import { afterEach, describe, expect, it } from "vitest";
import { scatterpostConnectorConfigured, showPublishedWithBadge, showScatterpostCredit } from "./scatterpost-credit.ts";

describe("showScatterpostCredit", () => {
  const original = process.env.NEXT_PUBLIC_SHOW_SCATTERPOST_CREDIT;

  afterEach(() => {
    if (original === undefined) {
      delete process.env.NEXT_PUBLIC_SHOW_SCATTERPOST_CREDIT;
    } else {
      process.env.NEXT_PUBLIC_SHOW_SCATTERPOST_CREDIT = original;
    }
  });

  it("is on by default when the env var is unset", () => {
    delete process.env.NEXT_PUBLIC_SHOW_SCATTERPOST_CREDIT;
    expect(showScatterpostCredit()).toBe(true);
  });

  it("is off only when the env var is exactly 'false'", () => {
    process.env.NEXT_PUBLIC_SHOW_SCATTERPOST_CREDIT = "false";
    expect(showScatterpostCredit()).toBe(false);
  });

  it("stays on for any other value", () => {
    process.env.NEXT_PUBLIC_SHOW_SCATTERPOST_CREDIT = "0";
    expect(showScatterpostCredit()).toBe(true);
  });
});

describe("showPublishedWithBadge", () => {
  it("is suppressed whenever the credit line is shown, even if the badge is enabled", () => {
    expect(showPublishedWithBadge(true, true, true)).toBe(false);
    expect(showPublishedWithBadge(true, false, true)).toBe(false);
  });

  it("falls back to the badge toggle once the credit line is turned off and the connector is configured", () => {
    expect(showPublishedWithBadge(false, true, true)).toBe(true);
    expect(showPublishedWithBadge(false, false, true)).toBe(false);
  });

  it("never shows when the connector is not configured", () => {
    expect(showPublishedWithBadge(false, true, false)).toBe(false);
    expect(showPublishedWithBadge(true, true, false)).toBe(false);
    expect(showPublishedWithBadge(false, false, false)).toBe(false);
  });
});

describe("scatterpostConnectorConfigured", () => {
  const originalSecret = process.env.SCATTERPOST_WEBHOOK_SECRET;
  const originalKey = process.env.SCATTERPOST_API_KEY;

  afterEach(() => {
    if (originalSecret === undefined) delete process.env.SCATTERPOST_WEBHOOK_SECRET;
    else process.env.SCATTERPOST_WEBHOOK_SECRET = originalSecret;
    if (originalKey === undefined) delete process.env.SCATTERPOST_API_KEY;
    else process.env.SCATTERPOST_API_KEY = originalKey;
  });

  it("is false when neither variable is set", () => {
    delete process.env.SCATTERPOST_WEBHOOK_SECRET;
    delete process.env.SCATTERPOST_API_KEY;
    expect(scatterpostConnectorConfigured()).toBe(false);
  });

  it("is false for empty values", () => {
    process.env.SCATTERPOST_WEBHOOK_SECRET = "";
    delete process.env.SCATTERPOST_API_KEY;
    expect(scatterpostConnectorConfigured()).toBe(false);
  });

  it("is true when the webhook secret is set", () => {
    process.env.SCATTERPOST_WEBHOOK_SECRET = "x".repeat(32);
    delete process.env.SCATTERPOST_API_KEY;
    expect(scatterpostConnectorConfigured()).toBe(true);
  });

  it("is true when the API key is set", () => {
    delete process.env.SCATTERPOST_WEBHOOK_SECRET;
    process.env.SCATTERPOST_API_KEY = "key";
    expect(scatterpostConnectorConfigured()).toBe(true);
  });
});
