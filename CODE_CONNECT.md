# Figma Code Connect

Maps Figma components in the Udvash-Unmesh design file to their React counterparts in `src/components/`, so Dev Mode in Figma shows the real component code (with the right prop values) for any selected node.

## What's wired up

11 mappings exist as `*.figma.tsx` next to each component:

- `Alert`, `Avatar`, `Badge`, `Button`, `Card`, `Checkbox`, `Chip`, `Input`, `Modal`, `Switch`, `Toast`

The rest of the 33 components don't have a `.figma.tsx` yet — add one when needed (template below).

## One-time setup

1. **Generate a Figma personal access token** with `Code Connect: Write` scope: <https://www.figma.com/developers/api#access-tokens>
2. Export it:
   ```bash
   export FIGMA_ACCESS_TOKEN=figd_xxx
   ```
3. **Fill in real node IDs.** Every `.figma.tsx` currently uses a placeholder `node-id=0:0`. For each component:
   - Open the Figma file, right-click the component → **Copy link to selection**
   - Replace the URL in the matching `*.figma.tsx`

## Publish

```bash
# Validate without publishing
npx figma connect publish --dry-run

# Publish all mappings
npx figma connect publish
```

After publishing, Figma Dev Mode will surface the React snippet (with the bound props filled in) for any instance of those components.

## Unpublish

```bash
npx figma connect unpublish
```

## Adding a new mapping

For component `Foo` in `src/components/Foo.tsx`, create `src/components/Foo.figma.tsx`:

```tsx
import figma from "@figma/code-connect";
import { Foo } from "./Foo";

figma.connect(
  Foo,
  "https://www.figma.com/design/EM0QU7aqBCCK95WvV8Qwt5/Udvash-Unmesh-App?node-id=<REAL_NODE_ID>",
  {
    props: {
      // figma.enum / figma.boolean / figma.string / figma.instance / figma.children
      variant: figma.enum("Variant", { Primary: "primary", Secondary: "secondary" }),
      label: figma.string("Label"),
    },
    example: ({ variant, label }) => <Foo variant={variant}>{label}</Foo>,
  }
);
```

Run `npx figma connect publish` to push the change.

## Files

- `figma.config.json` — Code Connect config (parser, include/exclude globs, label)
- `src/components/*.figma.tsx` — one per mapped component

## Troubleshooting

- **"Could not find node"** — the `node-id` in the URL doesn't exist or is wrong. Re-copy the link from Figma.
- **"Access denied"** — token missing or wrong scope. Regenerate with `Code Connect: Write`.
- **Prop name not found** — the Figma variant/property name in `figma.enum`/`figma.boolean` must match the Figma component's actual property name exactly (case-sensitive).
