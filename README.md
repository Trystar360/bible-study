# 📖 Berean — Bible Study Builder

Describe any topic in your own words and instantly get everything you need to lead a Bible study: key verses, discussion questions, a timed outline, activities, leader tips, prayer prompts, and trusted external resources.

**Live site:** https://trystar360.github.io/bible-study/

> Named for the Bereans of Acts 17:11, who *"received the word with all readiness of mind, and searched the scriptures daily."*

## ✨ Features

- 🔍 **Natural-language search** — type a description ("our group is grieving a loss"), a topic ("forgiveness"), or a verse reference ("Romans 8:28") and get matched studies via keyword/synonym scoring
- 🗂️ **40+ hand-built topics** across six categories, each with 8 key scriptures, curated "why it matters" notes, and structured questions
- 📖 **Live verse text** from [bible-api.com](https://bible-api.com) (public-domain translations: WEB, KJV, ASV, BBE), plus one-click links to NIV/ESV/NLT/etc. on BibleGateway and original-language study on Blue Letter Bible
- 🗓️ **Timed outline generator** — pick length (30–90 min), format (discussion, inductive, devotional, topical deep-dive), audience (adults, youth, college, new believers, kids, mixed), and group size; get a minute-by-minute agenda with icebreakers
- 💬 **Structured discussion questions** — Opening → Observation → Interpretation → Application, with shuffle
- 🎨 **Activities, leader tips, and closing prayers** per topic, tuned to your audience
- ⭐ **Save studies & bookmark verses**, plus 📝 private auto-saved notes (all localStorage — nothing leaves your browser)
- 🖨️ **Print-ready guides**, ⬇️ Markdown export, 📋 copy-all, 🔗 shareable deep links
- 🌅 Verse of the day, 🕘 recent searches, 🎲 "surprise me", 🌙 dark mode

## 🚀 Hosting (GitHub Pages)

The site is fully static — no build step, no server. A GitHub Actions workflow ([`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)) deploys it to GitHub Pages automatically on every push to `main`.

First-time setup (only if the workflow can't enable Pages by itself): **Settings → Pages → Source → GitHub Actions**.

## 🛠️ Development

Just open `index.html` in a browser, or serve locally:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

### Project layout

```
index.html            # single-page app shell
assets/styles.css     # warm & classic theme + dark mode + print styles
assets/data.js        # the topical library (topics, verses, questions, formats…)
assets/app.js         # search, study rendering, verse fetching, storage, export
```

### Adding a topic

Add an object to `TOPICS` in `assets/data.js` — the shape is documented at the top of the file. Keywords drive the search matching, so include synonyms people might actually type.

## 📜 A note on sources

In-page verse text uses public-domain translations. Modern-translation reading links open on BibleGateway. External resources (OpenBible, GotQuestions, BibleProject, Blue Letter Bible, Bible Hub, Desiring God, Spurgeon Archive) are linked for further study; this project isn't affiliated with them.
