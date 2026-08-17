/**
 * Site-wide constants. Anything that appears on more than one page, or that
 * needs to be changed in exactly one place, lives here.
 */

export const SITE = {
  name: 'Priya Kaur',
  url: 'https://thepriyakaur.com',
  locale: 'en_AU',
  /** Used as the default <meta name="description"> and og:description. */
  description:
    'Priya Kaur is a QA Engineer in Australia who builds and ships her own software.',
} as const;

export const LINKS = {
  github: 'https://github.com/priyakaurgit',
  linkedin: 'https://linkedin.com/in/priya-kaur-profile',
} as const;

export const NAV = [
  { href: '/work/', label: 'Work' },
  { href: '/about/', label: 'About' },
  { href: '/now/', label: 'Now' },
  { href: '/writing/', label: 'Writing' },
] as const;

/**
 * markAtt details.
 *
 * `supportEmail` and `supabaseRegion` are placeholders. Both are rendered as
 * highlighted "needs filling in" markers rather than as real content, so the
 * site cannot quietly ship a dead mailto: link or an invented data-storage
 * claim. Replace both values below before submitting the app.
 *
 * `isPlaceholder()` is what the pages branch on — keep the FILL IN prefix.
 */
export const MARKATT = {
  supportEmail: 'FILL IN — support email address',
  supabaseRegion: 'FILL IN — Supabase region',
  /** Shown on /markatt/privacy and /markatt/support. */
  lastUpdated: '2026-08-17',
} as const;

export const NOW = {
  lastUpdated: '2026-08-17',
} as const;

/** True while a constant is still an unreplaced placeholder. */
export function isPlaceholder(value: string): boolean {
  return value.startsWith('FILL IN');
}

/** Renders 2026-08-17 as "17 August 2026". */
export function formatDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
