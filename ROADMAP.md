# Project Roadmap: RainbowBreeze Portfolio Website

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

### Phase 3: Tech Stack Selection (COMPLETED)
- [x] **Framework:** [Astro](https://astro.build/)
- [x] **Styling:** Tailwind CSS (v4)
- [x] **Hosting:** [Vercel](https://rainbowbreeze-portolio.vercel.app/)

### Phase 4: Implementation (COMPLETED)
1. [x] Initialize Repo.
2. [x] Setup Astro + Tailwind.
3. [x] Build Home Page (Hero + Speaker Intro + Eras).
4. [x] Build Talk Archive (Search/Filter UI with Fuse.js).
5. [x] Implement "Eras" timeline view.

### Phase 5: Automation (FUTURE)
- Implement `rainbowbreeze_public_speaker_sync` skill.
- Setup GitHub Action for automated WordPress polling.

