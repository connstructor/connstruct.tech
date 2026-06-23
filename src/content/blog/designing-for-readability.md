---
title: 'Designing a terminal site that is actually readable'
description: 'Notes on keeping a terminal aesthetic without sacrificing the thing terminals are worst at: long-form reading.'
pubDate: 2026-06-15
updatedDate: 2026-06-18
tags: ['design', 'css', 'typography']
---

A lot of "terminal" websites fall into one of two traps. Either they lean so
hard into the bit that everything is oversized neon monospace on pure black —
fun for ten seconds, exhausting to read — or they go so dense that the page
feels like a config file you're being asked to debug.

This site tries to keep the *frame* of a terminal while letting the *content*
breathe. Here's the short version of how.

## Two typefaces, clear jobs

Monospace does the chrome: navigation, headings, code, and the little prompt
motifs. A proportional typeface does the reading. Mixing them sounds risky but
the division of labor is what makes it work — your eye learns that mono means
"interface" and the body means "prose."

```css
:root {
  --font-mono: 'JetBrains Mono Variable', ui-monospace, monospace;
  --font-body: 'Inter Variable', system-ui, sans-serif;
}

body {
  font-family: var(--font-body);
  font-size: 1.0625rem; /* a hair over 16px */
  line-height: 1.7;
}
```

## Restraint over spectacle

A few rules I kept coming back to:

1. **Cap the measure.** Lines run to about 68 characters. Wider than that and
   your eye loses its place on the return sweep.
2. **Keep glyphs calm.** The biggest heading on the site is under 2rem. Size is
   a tool for hierarchy, not for shouting.
3. **One accent color.** A single soft cyan, used sparingly. Color that's
   everywhere stops meaning anything.

| Choice        | Cartoony version | What I did instead   |
| ------------- | ---------------- | -------------------- |
| Background    | `#000000`        | `#0d1117` slate      |
| Accent        | neon green glow  | muted `#56b6c2`      |
| Body type     | all monospace    | proportional Inter   |

## Themes without the flash

The one genuinely fiddly bit is honoring the reader's system preference *and*
remembering a manual override *and* never flashing the wrong colors on load.
The trick is a tiny blocking script in the `<head>` that sets the theme before
the first paint:

```js
const stored = localStorage.getItem('theme');
const theme = stored ?? (matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light');
document.documentElement.setAttribute('data-theme', theme);
```

Everything else is just CSS custom properties swapping behind that attribute.

## The point

The terminal look is a vibe, not a constraint. Keep the prompt, keep the mono
chrome, keep it monochrome-ish — then get out of the way and let people read.
That's the whole trick.
