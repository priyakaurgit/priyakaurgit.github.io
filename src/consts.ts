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
    'Priya Kaur is a QA Engineer in Brisbane with more than ten years in software. She builds her own products and writes activity books for children.',
  /**
   * General contact, used on /about.
   *
   * markAtt has its own address — see MARKATT.supportEmail. Keeping the two
   * separate means support mail stays sorted from everything else, and neither
   * address goes in the footer: one clear place per audience is enough.
   */
  contactEmail: 'hello@thepriyakaur.com',
} as const;

export const LINKS = {
  github: 'https://github.com/priyakaurgit',
  linkedin: 'https://linkedin.com/in/priya-kaur-profile',
  /** Book one, on Amazon AU. */
  iLoveSpring: 'https://www.amazon.com.au/dp/B0HCSZ8JYW',
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
 * `supportEmail` and `supabaseRegion` were placeholders until the app was
 * ready; both are now real. The `isPlaceholder()` guard below stays in place,
 * because the cost of keeping it is nothing and the cost of shipping a dead
 * mailto: link or an invented data-storage claim is not.
 *
 * `isPlaceholder()` is what the pages branch on — keep the FILL IN prefix.
 */
export const MARKATT = {
  supportEmail: 'support@thepriyakaur.com',
  supabaseRegion: 'ap-southeast-2',
  /** Shown on /markatt/privacy and /markatt/support. */
  lastUpdated: '2026-08-18',
} as const;

export const NOW = {
  lastUpdated: '2026-08-31',
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
