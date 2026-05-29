# ⛔ ABSOLUTE RULE — ZERO EXTRA (read first, every time)

Build **exactly** what the user asks and **exactly** what is in the Figma file —
**not one pixel more.** This overrides every default instinct.

- **Do NOT add anything the user did not ask for.** No "completing" the component,
  no "making it production-ready."
- **Reproduce the Figma frame as it visually appears.** If Figma does not show it,
  do NOT create it — this includes:
  - interaction states (hover / focus / disabled / active)
  - behavior (open/close, esc-to-close, outside-click, toggles)
  - extra variants, configurable colour/size props beyond what Figma shows
  - placeholder fills, invented icons/glyphs/images, made-up logos
  - shared abstractions / helpers not present in Figma
- **Raw values only** — keep literal Figma hex/px (`#55347b`, `rounded-[5px]`),
  never semantic tokens (`bg-brand`).
- **If something is NOT directly extractable from Figma → SKIP it** and note it for
  a later phase. Never invent, never substitute, never approximate.
- **If something IS in Figma → it must be included** (e.g. the logo). Verify it is
  actually absent before claiming "not in Figma."
- When unsure whether something is "extra": **leave it out.** Less is correct.

Why this rule exists: the assistant repeatedly added states/behavior/props/
abstractions that were never in Figma, forcing the user to re-explain every turn.
That must not happen again. The user should never have to repeat this.

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
