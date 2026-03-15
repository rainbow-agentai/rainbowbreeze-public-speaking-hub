# Project Roadmap: RainbowBreeze Public Speaker Website

## Goal
Build a professional, automated portfolio website for Alfredo Morresi (RainbowBreeze) to showcase public speaking history, categorized by eras and topics, with a searchable archive and automated updates from WordPress.

## Status: Awaiting Final Approval

### Phase 1: Content Extraction (COMPLETED)
- [x] Crawl 8 pages of `https://rainbowbreeze.it/category/talk/`.
- [x] Extract metadata (Title, Year, Language, Event, Slides/Video links).
- [x] Define taxonomy (Strategy, Ops, Leadership, Innovation, Speaking).
- [x] Create `talks_master_list.json` as the source of truth.

### Phase 2: Design & Palette (PROPOSED)
- [x] Generate visual mockup (Dark mode, Charcoal/Navy base, #FFD700 Yellow accents).
- [x] Define font pairings (Sans-serif, high-impact).
- [x] **Awaiting Approval:** Confirm "Professional High-Contrast Tech" vibe.

### Phase 3: Tech Stack Selection (DRAFT)
- **Proposed Framework:** [Astro](https://astro.build/)
  - *Why?* Incredible speed (static by default), perfect for a portfolio, easily pulls data from our JSON master list.
- **Hosting:** [Vercel](https://vercel.com/)
  - *Why?* Integrated GitHub support, instant previews, and reliable global CDN.
- **Search Logic:** Client-side Fuse.js for instantaneous filtering without a backend.

### Phase 4: Implementation (NEXT)
1. Initialize Repo.
2. Build Home Page (Hero + Speaker Intro).
3. Build Talk Archive (Search/Filter UI).
4. Implement "Eras" timeline view.

### Phase 5: Automation (FUTURE)
- Implement `rainbowbreeze_public_speaker_sync` skill.
- Setup GitHub Action for automated WordPress polling.

