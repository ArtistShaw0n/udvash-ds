# Component Coverage — Udvash-Unmesh DS

77 React components in `src/components/` covering 142 audit specs through direct components, prop-variants, and composition.

## Tally

| Category | Count |
|---|---:|
| React components | 77 |
| Figma Code Connect mappings | 11 |
| Storybook story files | 17 |
| Live app | https://udvash-ds.vercel.app |
| Storybook | https://udvash-ds-storybook.vercel.app |

## Components by category

### Foundation (12)
Button, Input, Card, Badge, Avatar, Icon, Stack, Container, Grid, Typography (`Text`), Logo, Tag

### Inputs (10)
Input, PasswordInput, PhoneInput, OTPInput, SearchBar, Checkbox, Switch, Slider, RadioGroup, ImageUpload

### Indicators (6)
ProgressBar, Spinner, ScoreLetter, StarRating, MeritRankings, ScoreGauge

### Feedback (6)
Alert, Toast, Modal, Sheet, ConfirmDialog, PhotoPicker

### Navigation (7)
Header, FooterMenu, Tabs, Breadcrumb, Pagination, SegmentedControl, BackLink

### Overlay / utility (3)
Tooltip, Drawer, Popover

### Disclosure (3)
Accordion, EmptyState, Dropdown

### Pills / Chips (4)
Chip, FilterChip, FilterPanel, Stat

### Cards — domain (13)
LiveClassCard, LiveExamCard, MasterClassCard, PracticeExamCard, PastClassCard,
CourseContentCard, PerformanceCard, ProfileCard, ProgramListCard, SolveSheetCard,
SubjectWiseSummary, ServiceBlockedCard, HomeGridCard

### Cards — content (4)
AnalysisBlock, AnalysisSolutionCard, QnACard, AddCourseCard

### Lists / Rows (4)
CommunityRow, MCQRow, TotalRow, DownloadItem

### Data labels (1)
PositionLabel

### Step / progress (1)
Stepper

### Misc (1)
Divider, Skeleton, AddRollCard, VideoControls

## Coverage map (142 specs → components)

### Direct (one spec ↔ one component)
- Avatar, Badge variants, Breadcrumb, Chip, Divider, Tabs, Tooltip, Drawer, Accordion, ProgressBar, Spinner, ScoreLetter, Pagination, Footer, Header, Modal, Toast, Slider, Stepper, EmptyState, Stat, RadioGroup, Switch, Skeleton, OTPInput, SearchBar, Dropdown, PhoneInput, Card, Button

### Covered by prop-variants
- All 22 `Icon-*` specs → `Icon name="..."`
- All 5 `Tag-*` specs → `Tag` variants
- 6 `Button-*` variant specs → `Button variant + size`
- 11 `Badge-*` specs → `Badge variant`
- 4 `Modal-Sheet-*` / `Modal-Overlay` → `Modal` + `Sheet`
- 2 `Dialog-DeleteConfirm-*` → `ConfirmDialog`
- 4 `Layout-*` → `Stack` + `Container` + `Grid`
- 6+ `Pattern-Header-*` → `Header` slots
- 2 `Input-Password-*` → `PasswordInput`
- 4 `Nav-*` segments → `SegmentedControl`
- `Typography` → `<Text variant="...">`

### Covered via composition
- `Card/SolveSheet-Small` → `SolveSheetCard size="sm"`
- `Card/PerformanceContainer-Alt` → `PerformanceCard` with custom rows
- `Card/HomeGrid-Notification` → `HomeGridCard hasNotification`
- `Card/LiveExam-Medium` → `LiveExamCard` (smaller layout via content)
- `Card/MasterClass-Medium` → `MasterClassCard` (fewer actions)
- `Card/ProfileSubcard-Row*` → row slots inside `ProfileCard`
- `Card/Community-SearchAvatar` → `CommunityRow` + Avatar variants
- `Card/AddCourse-Total/Withprice` → `AddCourseCard price` prop
- `Card/CourseContent-Variant19/20` → `CourseContentCard expanded`
- `Card/Tag-Single/Double/Short` → multiple `Tag` instances
- `Card/ViewProfile` → `ProfileCard`
- `Card/PerformanceReport` → `PerformanceCard`
- `Toast-Blocked/Undo` → `Toast variant`
- `Brand-LogoBetaCover-Light/Dark` → `Logo` (CSS variables auto-theme)
- `Video-Tab*` → `Tabs` with content
- `Overlay-*` → utility CSS (used by `Modal/Sheet`)

## Token sync

- `tokens/tokens.json` — Tokens Studio JSON (5 sets, 2 themes) for Figma plugin
- `tokens/README.md` — Figma ↔ GitHub PR sync workflow
- `src/app/globals.css` — primitives + semantic light/dark + `@theme` Tailwind layer

## Figma Code Connect

11 mappings under `src/components/*.figma.tsx` (Alert, Avatar, Badge, Button, Card, Checkbox, Chip, Input, Modal, Switch, Toast). Each uses placeholder `node-id=0:0` — replace with real node IDs from Figma ("Copy link to selection") before `npx figma connect publish`. See `CODE_CONNECT.md`.

## What's NOT included

- Some `Overlay-*` are CSS utilities (`bg-scrim`, dim/disabled wrappers) — no React component needed
- Some `Pattern-InFrame-Header-*` are page-level layout snapshots, not reusable components
- Old V1 placeholder specs marked `legacy` in `audit/decisions.md`
