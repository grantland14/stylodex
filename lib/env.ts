/**
 * Server-side env lookup. Vercel sets real process env vars; Astro loads local
 * .env files into import.meta.env instead. Read both, so the same lib code runs
 * in the Astro build, on Vercel functions and under tsx in tests.
 */
export function env(name: string): string | undefined {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- import.meta.env only exists under Vite
  return process.env[name] ?? ((import.meta as any).env?.[name] as string | undefined);
}
