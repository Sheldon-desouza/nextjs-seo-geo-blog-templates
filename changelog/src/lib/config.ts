/**
 * Founder-edited site configuration: the bits a template owner changes
 * by hand rather than through an environment variable (nav links and
 * whether the footer credits scatterpost). Kept separate from
 * `site.ts`, which only reads `process.env`.
 */
import { postsIndexPath } from "./scatterpost/post-paths.ts";

export interface SiteLink {
  label: string;
  href: string;
}

/** Shown in the header, next to the product name. Add or remove freely. */
export const NAV_LINKS: SiteLink[] = [
  { label: "Changelog", href: "/changelog" },
  { label: "Blog", href: postsIndexPath() },
];

/**
 * The optional "Published with scatterpost" footer line. Enabled by
 * default, but only shown when the scatterpost connector is configured
 * (`SCATTERPOST_WEBHOOK_SECRET` or `SCATTERPOST_API_KEY` is set) and the
 * "Built with nextjs-seo-geo-blog-templates" credit is turned off
 * (`NEXT_PUBLIC_SHOW_SCATTERPOST_CREDIT=false`): a footer never carries
 * both. Set `NEXT_PUBLIC_SHOW_SCATTERPOST_BADGE=false` as well to show
 * neither.
 */
export function showScatterpostBadge(): boolean {
  return process.env.NEXT_PUBLIC_SHOW_SCATTERPOST_BADGE !== "false";
}
