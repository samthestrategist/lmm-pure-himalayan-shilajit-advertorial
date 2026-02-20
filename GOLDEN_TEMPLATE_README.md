# LMM Advertorial Golden Template

This is the **permanent golden template** for Little Miss Mineral advertorial pages.  
Every new product advertorial is launched by cloning this repo — never from a previous product.

## Architecture

```
src/
  config.ts       ← ALL dynamic content lives here as {{PLACEHOLDER}} tokens
  pages/
    Index.tsx     ← Imports from config.ts, zero hardcoded product strings
  components/     ← UI components (no product strings)
```

## The Injection Workflow

### Step 1: Clone this template for a new product
```bash
git clone git@github.com:samthestrategist/lmm-advertorial-golden-template.git lmm-{product-slug}-advertorial
cd lmm-{product-slug}-advertorial
git remote set-url origin git@github.com:samthestrategist/lmm-{product-slug}-advertorial.git
```

### Step 2: Inject content (runs content-inject.py)
```bash
python scripts/content-inject.py \
  --config product_config.json \
  --target src/config.ts
```

### Step 3: Inject PDP URL (after PDP build is live)
```bash
python scripts/content-inject.py \
  --pdp-url https://samthestrategist.github.io/lmm-{product-slug}-pdp/ \
  --target src/config.ts
```

### Step 4: Inject images (runs image-inject.py)
```bash
python scripts/image-inject.py \
  --slots cdn_slots.json \
  --target src/config.ts
```

### Step 5: Build & deploy
```bash
npm install
npm run build
```

## Config.ts Slots Reference

| Slot | Description |
|------|-------------|
| `PRODUCT_NAME` | Full product name with trademark |
| `BRAND_NAME` | Brand display name |
| `PDP_URL` | Live PDP URL (injected after PDP deploys) |
| `CDN_LIFESTYLE_1` | Hero lifestyle image for article header |
| `CDN_HERO_FRONT` | Product front shot (mid-article) |
| `CDN_TEXTURE_1` | Texture image (mid-article) |
| `CDN_BUNDLE_3` | Bundle image for CTA block |
| `ADV_META_TITLE` | HTML `<title>` tag |
| `ADV_META_DESC` | Meta description |
| `ADV_PUBLICATION_NAME` | Fake editorial publication name |
| `ADV_DATE` | Publication date display |
| `ADV_HEADLINE` | Article H1 |
| `ADV_SUBHEADLINE` | Pull quote / article sub |
| `ADV_OPENING_SCENE` | Opening scene setter paragraph |
| `ADV_STORY_P1/2/3/4` | Opening story paragraphs |
| `ADV_PROBLEM_HEADLINE` | Problem section H2 |
| `ADV_PROBLEM_BODY` + `_2/3/4/5` + `_CLOSE` | Problem body paragraphs |
| `ADV_MECHANISM_HEADLINE` | Mechanism section H2 |
| `ADV_MECHANISM_BODY` + `_2/3/4/5` | Mechanism paragraphs |
| `ADV_MECHANISM_NAME` | Proprietary mechanism name |
| `ADV_PHASE_1/2/3_TITLE/BODY` | Three-phase callout boxes |
| `ADV_PRODUCT_REVEAL_HEADLINE` | Three phases section H2 |
| `ADV_SOCIAL_PROOF_INTRO` | Testimonial section intro |
| `ADV_TESTIMONIAL_1/2_QUOTE/ATTR` | Customer testimonials |
| `ADV_BUNDLE_1/2/3_NAME/PRICE/COMPARE` | Bundle display data |
| `ADV_GUARANTEE_DAYS` | Guarantee period |
| `ADV_URGENCY_HEADLINE/BODY` | Urgency/scarcity block |
| `ADV_CTA_HEADLINE/BODY/BTN` | CTA section copy |
| `ADV_DISCLAIMER` | Footer advertiser disclosure |
| `ADV_FOOTER_PUBLICATION` | Footer publication name |
| `ADV_FOOTER_DISCLAIMER_2` | Footer FDA disclaimer |

## Rules

- **NEVER commit real product content to this repo** — always `{{PLACEHOLDER}}` tokens
- **NEVER use this repo directly** — always clone it first
- `PDP_URL` is injected **after** the PDP build is live (pipeline step 5)
- The publication name (`ADV_PUBLICATION_NAME`) is product/campaign-specific — a new publication per product is fine

## Build Validation

```bash
npm install && npm run build
grep -r "centella\|crc-\|Centella Restore\|Skin Intelligence Review" src/ || echo "✅ Clean"
```
