// Site-wide constants. Edit these to personalize the site.
// Most placeholder content lives here or in src/content/blog — search for "TODO".

/** Public URL of the deployed site. Used for SEO canonical URLs, sitemap, and RSS. */
export const SITE_URL = 'https://connstruct.tech'; // confirm if you deploy elsewhere

/** Your name / handle. Shown in the header, footer, resume, and metadata. */
export const AUTHOR = 'Connor Maddox';
export const HANDLE = 'connstruct';

export const SITE_TITLE = 'connstruct';
export const SITE_DESCRIPTION =
  'Personal site, notes, and writing by ' + AUTHOR + '.';

/** A short one-liner shown under the hero `whoami` line. */
export const TAGLINE =
  'Security architect — cloud, Zero Trust, and the automation that makes them hold.';

/** Contact + social links. Leave a value empty ('') to hide that link. */
export const SOCIAL = {
  email: 'connor@connstruct.tech',
  github: 'https://github.com/connstructor',
  // x: 'https://x.com/yourhandle',
  linkedin: 'https://www.linkedin.com/in/cwmaddox',
};

/** Top navigation. Order matters. */
export const NAV: { label: string; href: string }[] = [
  { label: 'home', href: '/' },
  { label: 'about', href: '/about' },
  { label: 'blog', href: '/blog' },
  { label: 'resume', href: '/resume' },
];
