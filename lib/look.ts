// A brand's look: its own banner photo, its logo and one page colour taken from that photo
// (pipeline/look.mjs). Presentation only; nothing here is a claim and the gate never reads it.
// Every text colour this file returns meets WCAG AA (4.5:1) on the page colour.

export interface BrandLook {
  /** Banner photo from the brand's own homepage, up to 1440 px wide, and a copy up to 720 px for phones. */
  heroUrl: string;
  heroSmallUrl: string;
  heroSmallWidth: number;
  heroWidth: number;
  heroHeight: number;
  /** Logo as an alpha mask (shape only), painted in the theme's ink; null shows the name as text. */
  logo: { url: string; width: number; height: number } | null;
  /** Page colour: the mean of the photo's bottom edge, so the photo fades into it. */
  background: string;
}

export interface Theme {
  bg: string;
  ink: string;
  muted: string;
  line: string;
}

type Rgb = [number, number, number];

const HEX = /^#[0-9a-f]{6}$/i;
const DARK: Rgb = [0x18, 0x19, 0x1a]; // the house ink, --color-ink
const LIGHT: Rgb = [0xff, 0xff, 0xff];
export const AA = 4.5;

export function parseHex(hex: string): Rgb | null {
  if (!HEX.test(hex)) return null;
  return [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16)) as Rgb;
}

export function toHex(rgb: Rgb): string {
  return `#${rgb.map((c) => Math.round(Math.min(255, Math.max(0, c))).toString(16).padStart(2, "0")).join("")}`;
}

/** WCAG relative luminance. */
export function luminance([r, g, b]: Rgb): number {
  const lin = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

export function contrast(a: Rgb, b: Rgb): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

/** `a` blended toward `b` by `t` (0 = a, 1 = b). */
function mix(a: Rgb, b: Rgb, t: number): Rgb {
  return a.map((c, i) => c + (b[i] - c) * t) as Rgb;
}

/**
 * Text and rule colours for a page colour. Ink is the house near-black or white, whichever reads
 * better. Mid-tones where neither reaches 4.5:1 are deepened a step at a time until white does,
 * so the returned `bg` can be a shade darker than the one asked for.
 */
export function themeFor(background: string): Theme {
  // Work in whole 0–255 values, so what is checked is exactly what is printed.
  const round = (c: Rgb) => parseHex(toHex(c))!;
  let bg = parseHex(background) ?? LIGHT;
  const ink = () => (contrast(DARK, bg) >= contrast(LIGHT, bg) ? DARK : LIGHT);
  while (contrast(ink(), bg) < AA) bg = round(mix(bg, [0, 0, 0], 0.04));
  const fg = ink();
  // Muted text: up to 30% toward the page colour, as far as it can go while still passing.
  let muted = fg;
  for (let step = 15; step > 0; step--) {
    const candidate = round(mix(fg, bg, step / 50));
    if (contrast(candidate, bg) >= AA) {
      muted = candidate;
      break;
    }
  }
  return { bg: toHex(bg), ink: toHex(fg), muted: toHex(muted), line: toHex(mix(fg, bg, 0.7)) };
}

/**
 * The page colour for a photo: the colour that is both common and colourful. Pixels are grouped
 * into 4-bit-per-channel bins; each bin scores count × (0.05 + chroma)², so a large saturated
 * area (a mustard jacket, a red track) beats a larger grey wall, and a fully grey photo still
 * gets its main grey. Bins under 3% of the photo don't compete (a small red logo must not win),
 * unless no bin reaches that. Returns the mean of the winning bin. `pixels` is raw RGB or RGBA.
 */
export function pageColour(pixels: Uint8Array, channels: 3 | 4): string {
  const bins = new Map<number, [number, number, number, number]>();
  for (let i = 0; i + 2 < pixels.length; i += channels) {
    const [r, g, b] = [pixels[i], pixels[i + 1], pixels[i + 2]];
    const key = ((r >> 4) << 8) | ((g >> 4) << 4) | (b >> 4);
    const bin = bins.get(key) ?? [0, 0, 0, 0];
    bin[0]++;
    bin[1] += r;
    bin[2] += g;
    bin[3] += b;
    bins.set(key, bin);
  }
  const total = pixels.length / channels;
  const all = [...bins.values()];
  const big = all.filter(([n]) => n >= total * 0.03);
  let best: Rgb = LIGHT;
  let top = -1;
  for (const [n, r, g, b] of big.length ? big : all) {
    const mean: Rgb = [r / n, g / n, b / n];
    const chroma = (Math.max(...mean) - Math.min(...mean)) / 255;
    const score = n * (0.05 + chroma) ** 2;
    if (score > top) [top, best] = [score, mean];
  }
  return toHex(best);
}

/** Logo display size: 56 px tall, narrower when that would pass 288 px wide. */
export function logoBox(width: number, height: number, maxHeight = 56, maxWidth = 288): { width: number; height: number } {
  const scale = Math.min(maxHeight / height, maxWidth / width);
  return { width: Math.round(width * scale), height: Math.round(height * scale) };
}

const OWN_PATH = /^\/img\/looks\/[a-z0-9-]+\.webp$/;
const positive = (n: unknown): n is number => typeof n === "number" && Number.isFinite(n) && n > 0;

/**
 * A pipeline/data/looks.json entry, or null unless it was fetched, passed the look review,
 * and every file is one of ours under /img/looks/.
 */
/* eslint-disable @typescript-eslint/no-explicit-any -- hand-written JSON, validated here */
export function lookFromJson(entry: any): BrandLook | null {
  if (entry?.status !== "ok" || entry.review?.status !== "ok") return null;
  const { hero, logo, background } = entry;
  if (!hero || !OWN_PATH.test(hero.path) || !OWN_PATH.test(hero.small_path) || !positive(hero.width) || !positive(hero.height)) return null;
  if (typeof background !== "string" || !parseHex(background)) return null;
  const logoOk = logo && OWN_PATH.test(logo.path) && positive(logo.width) && positive(logo.height);
  return {
    heroUrl: hero.path,
    heroSmallUrl: hero.small_path,
    heroSmallWidth: positive(hero.small_width) ? hero.small_width : 720,
    heroWidth: hero.width,
    heroHeight: hero.height,
    logo: logoOk ? { url: logo.path, width: logo.width, height: logo.height } : null,
    background: background.toLowerCase(),
  };
}
/* eslint-enable @typescript-eslint/no-explicit-any */
