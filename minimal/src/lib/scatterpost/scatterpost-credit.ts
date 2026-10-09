/**
 * The "Built with nextjs-seo-geo-blog-templates" footer line: plain
 * attribution to where the template came from, separate from the
 * "Published with scatterpost" badge in `config.ts` (which only
 * appears once the scatterpost connector is configured). This one is
 * static and shown by default, since it costs the founder nothing to
 * leave on and it is how other founders find the templates. Set
 * `NEXT_PUBLIC_SHOW_SCATTERPOST_CREDIT=false` to hide it.
 */
export function showScatterpostCredit(): boolean {
  return process.env.NEXT_PUBLIC_SHOW_SCATTERPOST_CREDIT !== "false";
}

/**
 * A footer should never carry two scatterpost mentions. The older
 * "Published with scatterpost." sentence (`showScatterpostBadge()` in
 * each template's `config.ts`) only ever shows when the newer credit
 * line above is switched off: `NEXT_PUBLIC_SHOW_SCATTERPOST_CREDIT=false`
 * brings it back, and setting both env vars to `false` shows neither.
 * It also needs the connector configured (see
 * `scatterpostConnectorConfigured`); without that it never shows.
 */
export function showPublishedWithBadge(
  creditShown: boolean,
  badgeEnabled: boolean,
  connectorConfigured: boolean,
): boolean {
  return connectorConfigured && !creditShown && badgeEnabled;
}

/**
 * True only when the scatterpost connector is actually set up: a webhook
 * secret or an API key is present. "Published with scatterpost." is a
 * factual statement, so it must never appear on a blog that does not use
 * scatterpost.
 */
export function scatterpostConnectorConfigured(): boolean {
  return Boolean(process.env.SCATTERPOST_WEBHOOK_SECRET || process.env.SCATTERPOST_API_KEY);
}
