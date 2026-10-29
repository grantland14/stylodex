// Bylines. Bios are written by the person they describe (G4: never invent credentials).
export interface Author {
  name: string;
  slug: string;
  bio: string;
}

const AUTHORS: Author[] = [
  {
    name: "Ash",
    slug: "ash",
    // Supplied by Ash, 2026-10-29.
    bio: "Ash is a writer and editor. He's been featured by publishers like MyDomaine, Realtor, Real Homes, Architectural Digest, The Spruce, Homes and Gardens, and more.",
  },
];

export function authorByName(name: string): Author | undefined {
  return AUTHORS.find((a) => a.name === name);
}

export function allAuthors(): Author[] {
  return AUTHORS;
}
