/* ============================================================
   Berean — app logic
   Search & matching, study assembly, live verse text, outline
   generation, saving/notes (localStorage), export & print.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- state & storage ---------- */
  const store = {
    get(key, fallback) {
      try { const v = localStorage.getItem("berean:" + key); return v ? JSON.parse(v) : fallback; }
      catch { return fallback; }
    },
    set(key, val) {
      try { localStorage.setItem("berean:" + key, JSON.stringify(val)); } catch { /* private mode */ }
    }
  };

  let currentTopic = null;
  let lastView = "search";
  const verseCache = {};

  const $ = sel => document.querySelector(sel);
  const $$ = sel => document.querySelectorAll(sel);

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(t._timer);
    t._timer = setTimeout(() => { t.hidden = true; }, 2400);
  }

  /* ---------- options ---------- */
  function getOptions() {
    return {
      translation: $("#optTranslation").value,
      audience: $("#optAudience").value,
      duration: parseInt($("#optDuration").value, 10),
      format: $("#optFormat").value,
      groupSize: $("#optGroupSize").value
    };
  }
  function saveOptions() { store.set("options", getOptions()); }
  function restoreOptions() {
    const o = store.get("options", null);
    if (!o) return;
    const map = { translation: "#optTranslation", audience: "#optAudience", duration: "#optDuration", format: "#optFormat", groupSize: "#optGroupSize" };
    for (const [k, sel] of Object.entries(map)) {
      if (o[k] != null && $(sel).querySelector(`option[value="${o[k]}"]`)) $(sel).value = o[k];
    }
  }

  /* ---------- view switching ---------- */
  function showView(name) {
    $$(".view").forEach(v => { v.hidden = true; });
    const el = $("#view-" + name);
    if (el) el.hidden = false;
    $$(".nav-btn[data-view]").forEach(b => b.classList.toggle("active", b.dataset.view === name));
    if (name !== "study") lastView = name;
    window.scrollTo({ top: 0 });
  }

  /* ---------- theme ---------- */
  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    $("#themeToggle").textContent = theme === "dark" ? "☀️" : "🌙";
    store.set("theme", theme);
  }

  /* ============================================================
     SEARCH & MATCHING
     ============================================================ */
  const STOPWORDS = new Set("a an and are as at be but by for from has have how i im in is it its me my of on or our so that the their them they this to us we what when where who why with you your want need help about study group bible verse verses says say said dealing".split(" "));

  function tokenize(text) {
    return text.toLowerCase().replace(/[^a-z0-9\s'-]/g, " ").split(/\s+/)
      .map(w => w.replace(/^'+|'+$/g, ""))
      .filter(w => w.length > 1 && !STOPWORDS.has(w));
  }

  // simple stemmer so "forgiving" matches "forgive", etc.
  function stem(w) {
    return w.replace(/'(s|)$/,"").replace(/(iveness|fulness|ousness)$/, "").replace(/(ing|edly|ely|ed|es|s|ly)$/, "");
  }

  function scoreTopic(topic, tokens, rawQuery) {
    let score = 0;
    const q = rawQuery.toLowerCase();

    // full keyword-phrase hits in the raw query are strongest
    for (const kw of topic.keywords) {
      if (kw.includes(" ") && q.includes(kw)) score += 30;
    }
    if (q.includes(topic.name.toLowerCase())) score += 25;

    const kwStems = topic.keywords.flatMap(k => k.split(" ")).map(stem);
    const nameStems = topic.name.toLowerCase().split(/[\s&]+/).map(stem);
    const summaryStems = tokenize(topic.summary).map(stem);

    for (const tok of tokens) {
      const s = stem(tok);
      if (!s) continue;
      if (kwStems.includes(s)) score += 12;
      else if (nameStems.includes(s)) score += 10;
      else if (summaryStems.includes(s)) score += 2;
    }
    return score;
  }

  // Detects verse references like "John 3:16" or "1 Peter 5:6-7"
  const REF_RE = /^\s*((?:[1-3]\s*)?[A-Za-z]+(?:\s+of\s+[A-Za-z]+)?)\s*(\d+)(?::(\d+)(?:\s*-\s*(\d+))?)?\s*$/;
  function parseReference(q) {
    const m = q.match(REF_RE);
    if (!m) return null;
    const bookGuess = m[1].trim().toLowerCase().replace(/\s+/g, " ");
    const KNOWN = ["genesis","exodus","leviticus","numbers","deuteronomy","joshua","judges","ruth","1 samuel","2 samuel","1 kings","2 kings","1 chronicles","2 chronicles","ezra","nehemiah","esther","job","psalm","psalms","proverbs","ecclesiastes","song of solomon","isaiah","jeremiah","lamentations","ezekiel","daniel","hosea","joel","amos","obadiah","jonah","micah","nahum","habakkuk","zephaniah","haggai","zechariah","malachi","matthew","mark","luke","john","acts","romans","1 corinthians","2 corinthians","galatians","ephesians","philippians","colossians","1 thessalonians","2 thessalonians","1 timothy","2 timothy","titus","philemon","hebrews","james","1 peter","2 peter","1 john","2 john","3 john","jude","revelation"];
    if (!KNOWN.includes(bookGuess)) return null;
    return q.trim();
  }

  function runSearch() {
    const q = $("#topicInput").value.trim();
    if (!q) { toast("Type a topic description first 🙂"); return; }
    saveOptions();
    addRecentSearch(q);

    // verse reference? show passage lookup
    const ref = parseReference(q);
    if (ref) { showPassageLookup(ref); return; }
    $("#passageResult").hidden = true;

    const tokens = tokenize(q);
    const scored = TOPICS.map(t => ({ t, s: scoreTopic(t, tokens, q) }))
      .filter(x => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 9);

    const box = $("#searchResults");
    const list = $("#resultsList");
    box.hidden = false;
    list.innerHTML = "";

    if (!scored.length) {
      $("#resultsHeading").textContent = "No direct match — but try one of these:";
      const shuffled = [...TOPICS].sort(() => Math.random() - .5).slice(0, 6);
      shuffled.forEach(t => list.appendChild(topicCard(t)));
    } else {
      $("#resultsHeading").textContent = scored.length === 1 ? "Found your study:" : `${scored.length} matching ${scored.length === 1 ? "topic" : "topics"} — pick one to build your study:`;
      const max = scored[0].s;
      scored.forEach(({ t, s }) => list.appendChild(topicCard(t, Math.round(100 * s / max))));
      if (scored.length === 1 || scored[0].s >= 42) {
        // strong single match: open it directly for a faster path
        openStudy(scored[0].t.id);
        return;
      }
    }
    box.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function topicCard(t, matchPct) {
    const div = document.createElement("div");
    div.className = "topic-card";
    div.innerHTML = `
      ${matchPct ? `<span class="match-badge">${matchPct}% match</span>` : ""}
      <span class="t-emoji">${t.emoji}</span>
      <div class="t-cat">${esc(t.category)}</div>
      <h3>${esc(t.name)}</h3>
      <p>${esc(t.summary)}</p>`;
    div.addEventListener("click", () => openStudy(t.id));
    return div;
  }

  /* ---------- passage lookup ---------- */
  async function showPassageLookup(ref) {
    const box = $("#passageResult");
    $("#searchResults").hidden = true;
    box.hidden = false;
    box.innerHTML = `<h2>📖 ${esc(ref)}</h2><blockquote class="loading">Loading passage…</blockquote>`;
    const opts = getOptions();
    try {
      const data = await fetchPassage(ref);
      box.innerHTML = `
        <h2>📖 ${esc(data.reference)}</h2>
        <blockquote>${esc(data.text.trim())}</blockquote>
        <p class="muted">${esc(data.translation_name)} (public domain) —
          <a href="${bgLink(ref, opts.translation)}" target="_blank" rel="noopener">read in ${esc(opts.translation)} on BibleGateway ↗</a></p>
        <p class="muted">Want a full study around this passage? Try describing the <em>theme</em> instead (e.g. “trusting God's plan”).</p>`;
    } catch {
      box.innerHTML = `
        <h2>📖 ${esc(ref)}</h2>
        <p>Couldn't load the text right now — read it directly:
          <a href="${bgLink(ref, opts.translation)}" target="_blank" rel="noopener">${esc(ref)} (${esc(opts.translation)}) on BibleGateway ↗</a></p>`;
    }
    box.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ---------- verse text fetching (bible-api.com, public domain) ---------- */
  function apiTranslation() {
    const t = getOptions().translation;
    return API_TRANSLATIONS[t] || "web";
  }
  async function fetchPassage(ref) {
    const trans = apiTranslation();
    const key = trans + "|" + ref;
    if (verseCache[key]) return verseCache[key];
    const res = await fetch(`https://bible-api.com/${encodeURIComponent(ref)}?translation=${trans}`);
    if (!res.ok) throw new Error("fetch failed");
    const data = await res.json();
    if (!data.text) throw new Error("no text");
    verseCache[key] = data;
    return data;
  }

  function bgLink(ref, translation) {
    const v = translation === "WEB" ? "WEB" : translation;
    return `https://www.biblegateway.com/passage/?search=${encodeURIComponent(ref)}&version=${encodeURIComponent(v)}`;
  }
  function blbLink(ref) {
    return `https://www.blueletterbible.org/search/search.cfm?Criteria=${encodeURIComponent(ref)}&t=NIV`;
  }

  /* ============================================================
     STUDY VIEW
     ============================================================ */
  function openStudy(topicId, skipHash) {
    const t = TOPICS.find(x => x.id === topicId);
    if (!t) return;
    currentTopic = t;
    if (!skipHash) location.hash = "study/" + topicId;
    renderStudy(t, getOptions());
    showView("study");
    loadAllVerses(t);
  }

  function fmtTime(min) {
    const h = Math.floor(min / 60), m = min % 60;
    return h ? `${h}:${String(m).padStart(2, "0")}` : `0:${String(m).padStart(2, "0")}`;
  }

  function buildAgenda(t, opts) {
    const fmt = FORMATS[opts.format] || FORMATS.discussion;
    let elapsed = 0;
    const rows = fmt.sections.map(sec => {
      const mins = Math.max(2, Math.round(opts.duration * sec.pct));
      const row = { ...sec, start: elapsed, mins };
      elapsed += mins;
      return row;
    });
    return { label: fmt.label, rows };
  }

  function pickIcebreaker(opts) {
    const list = ICEBREAKERS[opts.audience] || ICEBREAKERS.mixed;
    return list[Math.floor(Math.random() * list.length)];
  }

  function groupSizeTip(size) {
    return {
      small: "With 2–5 people, skip formal facilitation — go deep, let everyone answer every question, and expect the study to feel like conversation.",
      medium: "With 6–12, watch airtime: draw out the quiet ones by name ('Sam, what do you think?') and gently park over-talkers with 'let's hear a new voice.'",
      large: "With 13+, break into huddles of 3–4 for the discussion questions and regroup to share highlights — otherwise only 20% of the room will speak."
    }[size] || "";
  }

  function renderStudy(t, opts) {
    const agenda = buildAgenda(t, opts);
    const aud = AUDIENCES[opts.audience] || AUDIENCES.adults;
    const icebreaker = pickIcebreaker(opts);
    const relatedTopics = (t.related || []).map(id => TOPICS.find(x => x.id === id)).filter(Boolean);
    const notes = store.get("notes:" + t.id, "");
    const savedVerses = store.get("savedVerses", []);

    const qGroup = (title, hint, items) => items && items.length ? `
      <div class="q-group">
        <h3>${title}</h3>
        <ol>${items.map(q => `<li>${esc(q)}</li>`).join("")}</ol>
      </div>` : "";

    $("#studyContent").innerHTML = `
      <div class="study-header">
        <span class="s-emoji">${t.emoji}</span>
        <div class="s-cat">${esc(t.category)}</div>
        <h1>${esc(t.name)}</h1>
        <p class="s-summary">${esc(t.summary)}</p>
        <div class="study-meta">
          <span class="meta-pill">⏱️ ${opts.duration} min</span>
          <span class="meta-pill">🧭 ${esc(agenda.label)}</span>
          <span class="meta-pill">👥 ${esc(aud.label)}</span>
          <span class="meta-pill">📜 ${esc(opts.translation)}</span>
        </div>
      </div>

      <div class="study-section">
        <h2>🗓️ Study Outline <button class="btn btn-sm no-print" id="regenIce" title="New icebreaker">🎲 new icebreaker</button></h2>
        <p class="section-hint">A timed agenda for your ${opts.duration}-minute ${esc(agenda.label.toLowerCase())}. Adjust freely — the clock serves the conversation, not the other way around.</p>
        <div class="agenda">
          ${agenda.rows.map(r => `
            <div class="agenda-row">
              <div class="agenda-time">${fmtTime(r.start)} – ${fmtTime(r.start + r.mins)}</div>
              <div class="agenda-body">
                <h4>${r.icon} ${esc(r.name)} <span class="muted">(${r.mins} min)</span></h4>
                <p>${esc(r.desc)}</p>
                ${/icebreaker|welcome/i.test(r.name) ? `<p>🎲 <em>Suggested icebreaker:</em> <span id="icebreakerText">${esc(icebreaker)}</span></p>` : ""}
              </div>
            </div>`).join("")}
        </div>
      </div>

      <div class="study-section">
        <h2>📖 Key Scriptures</h2>
        <p class="section-hint">Text loads in a public-domain translation; use the buttons to open each passage in ${esc(opts.translation)} or dig into the original languages.</p>
        ${t.verses.map((v, i) => `
          <div class="verse-card" data-ref="${esc(v.ref)}">
            <div class="verse-top">
              <span class="verse-ref">${esc(v.ref)}</span>
              <span class="verse-actions no-print">
                <button class="btn act-copy" data-i="${i}">📋 copy</button>
                <button class="btn act-save" data-i="${i}">${savedVerses.some(sv => sv.ref === v.ref) ? "💛 saved" : "🤍 save"}</button>
                <a class="btn" href="${bgLink(v.ref, opts.translation)}" target="_blank" rel="noopener">📖 ${esc(opts.translation)}</a>
                <a class="btn" href="${blbLink(v.ref)}" target="_blank" rel="noopener">🔤 Greek/Hebrew</a>
              </span>
            </div>
            <div class="verse-text loading" id="vtext-${i}">Loading verse text…</div>
            <div class="verse-note">${esc(v.note)}</div>
          </div>`).join("")}
      </div>

      <div class="study-section">
        <h2>💬 Discussion Questions <button class="btn btn-sm no-print" id="shuffleQs">🔀 shuffle</button></h2>
        <p class="section-hint">Structured to move the group from the text to the heart: Opening → Observation → Interpretation → Application.</p>
        <div id="questionsWrap">
          ${qGroup("🚪 Opening (warm up the room)", "", t.questions.opening)}
          ${qGroup("🔎 Observation (what does it say?)", "", t.questions.observation)}
          ${qGroup("💡 Interpretation (what does it mean?)", "", t.questions.interpretation)}
          ${qGroup("🎯 Application (what do we do?)", "", t.questions.application)}
        </div>
      </div>

      <div class="study-section two-col">
        <div class="info-card">
          <h3>🎨 Activities & Exercises</h3>
          <ul>${t.activities.map(a => `<li>${esc(a)}</li>`).join("")}</ul>
        </div>
        <div class="info-card">
          <h3>🧑‍🏫 Leader Tips</h3>
          <ul>
            ${t.leaderTips.map(tip => `<li>${esc(tip)}</li>`).join("")}
            <li><strong>For your audience (${esc(aud.label)}):</strong> ${esc(aud.tip)}</li>
            <li><strong>For your group size:</strong> ${esc(groupSizeTip(opts.groupSize))}</li>
          </ul>
        </div>
      </div>

      <div class="study-section">
        <h2>🕯️ Closing Prayer</h2>
        <div class="prayer-card">${esc(t.prayer)}</div>
      </div>

      <div class="study-section">
        <h2>🔗 Go Deeper — External Resources</h2>
        <p class="section-hint">Trusted study tools, pre-searched for “${esc(t.name)}”.</p>
        <div class="resource-grid">
          ${RESOURCE_BUILDERS.map(r => `
            <a class="resource-link" href="${r.url(t)}" target="_blank" rel="noopener">
              <div class="r-name">${r.icon} ${esc(r.name)} ↗</div>
              <div class="r-desc">${esc(r.desc)}</div>
            </a>`).join("")}
        </div>
      </div>

      ${relatedTopics.length ? `
      <div class="study-section no-print">
        <h2>🧭 Related Topics</h2>
        <div class="chip-row related-chips">
          ${relatedTopics.map(rt => `<button class="chip rel-chip" data-id="${rt.id}">${rt.emoji} ${esc(rt.name)}</button>`).join("")}
        </div>
      </div>` : ""}

      <div class="study-section">
        <h2>📝 My Notes</h2>
        <p class="section-hint no-print">Private notes for this topic — auto-saved in your browser.</p>
        <textarea class="notes-area" id="notesArea" placeholder="Prep thoughts, prayer requests, who's bringing snacks…">${esc(notes)}</textarea>
        <div class="notes-status no-print" id="notesStatus"></div>
      </div>
    `;

    /* wire up interactions inside the study */
    $("#regenIce")?.addEventListener("click", () => {
      $("#icebreakerText").textContent = pickIcebreaker(opts);
    });
    $("#shuffleQs")?.addEventListener("click", () => {
      $$("#questionsWrap .q-group ol").forEach(ol => {
        const items = [...ol.children].sort(() => Math.random() - .5);
        items.forEach(li => ol.appendChild(li));
      });
      toast("Questions shuffled");
    });
    $$(".rel-chip").forEach(c => c.addEventListener("click", () => openStudy(c.dataset.id)));
    $$(".act-copy").forEach(b => b.addEventListener("click", async () => {
      const i = +b.dataset.i;
      const v = t.verses[i];
      const text = $("#vtext-" + i).textContent;
      await navigator.clipboard.writeText(`"${text}" — ${v.ref}`);
      toast("Verse copied 📋");
    }));
    $$(".act-save").forEach(b => b.addEventListener("click", () => {
      const i = +b.dataset.i;
      const v = t.verses[i];
      const saved = store.get("savedVerses", []);
      const idx = saved.findIndex(sv => sv.ref === v.ref);
      if (idx >= 0) { saved.splice(idx, 1); b.textContent = "🤍 save"; toast("Removed from saved verses"); }
      else { saved.push({ ref: v.ref, topic: t.name, note: v.note }); b.textContent = "💛 saved"; toast("Verse saved 💛"); }
      store.set("savedVerses", saved);
    }));

    // notes autosave (debounced)
    const notesArea = $("#notesArea");
    let notesTimer;
    notesArea.addEventListener("input", () => {
      clearTimeout(notesTimer);
      $("#notesStatus").textContent = "Saving…";
      notesTimer = setTimeout(() => {
        store.set("notes:" + t.id, notesArea.value);
        $("#notesStatus").textContent = "Saved ✓";
      }, 500);
    });
  }

  async function loadAllVerses(t) {
    const jobs = t.verses.map(async (v, i) => {
      const el = $("#vtext-" + i);
      if (!el) return;
      try {
        const data = await fetchPassage(v.ref);
        if (currentTopic !== t) return; // user navigated away
        el.textContent = data.text.trim().replace(/\s+/g, " ");
        el.classList.remove("loading");
      } catch {
        if (!el.isConnected) return;
        el.innerHTML = `<span class="muted">Text unavailable offline — <a href="${bgLink(v.ref, getOptions().translation)}" target="_blank" rel="noopener">read on BibleGateway ↗</a></span>`;
        el.classList.remove("loading");
      }
    });
    await Promise.allSettled(jobs);
  }

  /* ============================================================
     EXPORT (markdown / copy / print / share)
     ============================================================ */
  function studyToMarkdown(t) {
    const opts = getOptions();
    const agenda = buildAgenda(t, opts);
    const verseText = (i) => {
      const el = $("#vtext-" + i);
      return el && !el.classList.contains("loading") && !el.querySelector("a") ? `\n> ${el.textContent.trim()}` : "";
    };
    const q = t.questions;
    const lines = [
      `# ${t.emoji} ${t.name} — Bible Study Guide`,
      ``,
      `*${t.summary}*`,
      ``,
      `**Format:** ${agenda.label} · **Length:** ${opts.duration} min · **Audience:** ${(AUDIENCES[opts.audience] || {}).label || opts.audience} · **Translation:** ${opts.translation}`,
      ``,
      `## 🗓️ Outline`,
      ...agenda.rows.map(r => `- **${fmtTime(r.start)}–${fmtTime(r.start + r.mins)} · ${r.name}** (${r.mins} min): ${r.desc}`),
      ``,
      `## 📖 Key Scriptures`,
      ...t.verses.map((v, i) => `### ${v.ref}${verseText(i)}\n*${v.note}*`),
      ``,
      `## 💬 Discussion Questions`,
      `### Opening`, ...(q.opening || []).map(x => `1. ${x}`),
      `### Observation`, ...(q.observation || []).map(x => `1. ${x}`),
      `### Interpretation`, ...(q.interpretation || []).map(x => `1. ${x}`),
      `### Application`, ...(q.application || []).map(x => `1. ${x}`),
      ``,
      `## 🎨 Activities`,
      ...t.activities.map(a => `- ${a}`),
      ``,
      `## 🧑‍🏫 Leader Tips`,
      ...t.leaderTips.map(x => `- ${x}`),
      ``,
      `## 🕯️ Closing Prayer`,
      `> ${t.prayer}`,
      ``,
      `---`,
      `Generated with Berean · Bible Study Builder`
    ];
    return lines.join("\n");
  }

  function downloadStudy() {
    if (!currentTopic) return;
    const md = studyToMarkdown(currentTopic);
    const blob = new Blob([md], { type: "text/markdown" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `bible-study-${currentTopic.id}.md`;
    a.click();
    URL.revokeObjectURL(a.href);
    toast("Study guide downloaded ⬇️");
  }

  async function copyStudy() {
    if (!currentTopic) return;
    await navigator.clipboard.writeText(studyToMarkdown(currentTopic));
    toast("Full study copied 📋");
  }

  async function shareStudy() {
    if (!currentTopic) return;
    const url = location.origin + location.pathname + "#study/" + currentTopic.id;
    if (navigator.share) {
      try { await navigator.share({ title: `Bible Study: ${currentTopic.name}`, url }); return; } catch { /* cancelled */ }
    }
    await navigator.clipboard.writeText(url);
    toast("Link copied — share away 🔗");
  }

  function saveStudy() {
    if (!currentTopic) return;
    const saved = store.get("savedStudies", []);
    const opts = getOptions();
    const existing = saved.findIndex(s => s.topicId === currentTopic.id);
    const entry = { topicId: currentTopic.id, date: new Date().toISOString(), opts };
    if (existing >= 0) saved[existing] = entry; else saved.push(entry);
    store.set("savedStudies", saved);
    toast("Study saved to ⭐ My Studies");
  }

  /* ============================================================
     SAVED VIEW
     ============================================================ */
  function renderSaved() {
    const saved = store.get("savedStudies", []);
    const list = $("#savedList");
    if (!saved.length) {
      list.innerHTML = `<p class="empty-state">No saved studies yet. Build one and hit “⭐ Save Study”.</p>`;
    } else {
      list.innerHTML = "";
      saved.slice().reverse().forEach(s => {
        const t = TOPICS.find(x => x.id === s.topicId);
        if (!t) return;
        const div = document.createElement("div");
        div.className = "saved-item";
        const hasNotes = !!store.get("notes:" + t.id, "");
        div.innerHTML = `
          <div class="s-info">
            <h3>${t.emoji} ${esc(t.name)}</h3>
            <div class="s-date">Saved ${new Date(s.date).toLocaleDateString()} · ${s.opts.duration} min · ${esc((FORMATS[s.opts.format] || {}).label || "")}${hasNotes ? " · 📝 has notes" : ""}</div>
          </div>
          <div>
            <button class="btn btn-sm open-saved">Open</button>
            <button class="btn btn-sm del-saved">🗑️</button>
          </div>`;
        div.querySelector(".s-info").addEventListener("click", () => openStudy(t.id));
        div.querySelector(".open-saved").addEventListener("click", () => openStudy(t.id));
        div.querySelector(".del-saved").addEventListener("click", () => {
          store.set("savedStudies", store.get("savedStudies", []).filter(x => x.topicId !== s.topicId));
          renderSaved();
          toast("Removed");
        });
        list.appendChild(div);
      });
    }

    const verses = store.get("savedVerses", []);
    const vlist = $("#savedVerses");
    if (!verses.length) {
      vlist.innerHTML = `<p class="empty-state">No saved verses yet. Tap 🤍 on any verse card inside a study.</p>`;
    } else {
      vlist.innerHTML = verses.map((v, i) => `
        <div class="verse-card">
          <div class="verse-top">
            <span class="verse-ref">${esc(v.ref)}</span>
            <span class="verse-actions">
              <a class="btn" href="${bgLink(v.ref, getOptions().translation)}" target="_blank" rel="noopener">📖 read</a>
              <button class="btn del-verse" data-i="${i}">🗑️</button>
            </span>
          </div>
          <div class="verse-note">From “${esc(v.topic)}” — ${esc(v.note)}</div>
        </div>`).join("");
      $$(".del-verse").forEach(b => b.addEventListener("click", () => {
        const arr = store.get("savedVerses", []);
        arr.splice(+b.dataset.i, 1);
        store.set("savedVerses", arr);
        renderSaved();
      }));
    }
  }

  /* ============================================================
     BROWSE VIEW
     ============================================================ */
  let browseFilter = null;
  function renderBrowse() {
    const filters = $("#categoryFilters");
    filters.innerHTML = `<button class="chip ${!browseFilter ? "active" : ""}" data-cat="">All (${TOPICS.length})</button>` +
      CATEGORIES.map(c => {
        const n = TOPICS.filter(t => t.category === c).length;
        return `<button class="chip ${browseFilter === c ? "active" : ""}" data-cat="${esc(c)}">${esc(c)} (${n})</button>`;
      }).join("");
    filters.querySelectorAll(".chip").forEach(ch => ch.addEventListener("click", () => {
      browseFilter = ch.dataset.cat || null;
      renderBrowse();
    }));

    const wrap = $("#browseList");
    wrap.innerHTML = "";
    const cats = browseFilter ? [browseFilter] : CATEGORIES;
    cats.forEach(cat => {
      const topics = TOPICS.filter(t => t.category === cat);
      if (!topics.length) return;
      const sec = document.createElement("div");
      sec.className = "browse-cat";
      sec.innerHTML = `<h2>${esc(cat)}</h2>`;
      const grid = document.createElement("div");
      grid.className = "topic-grid";
      topics.forEach(t => grid.appendChild(topicCard(t)));
      sec.appendChild(grid);
      wrap.appendChild(sec);
    });
  }

  /* ============================================================
     HOME EXTRAS: examples, recent searches, verse of the day
     ============================================================ */
  function renderExamples() {
    const wrap = $("#exampleChips");
    EXAMPLES.forEach(ex => {
      const b = document.createElement("button");
      b.className = "chip";
      b.textContent = ex;
      b.addEventListener("click", () => { $("#topicInput").value = ex; runSearch(); });
      wrap.appendChild(b);
    });
  }

  function addRecentSearch(q) {
    let recent = store.get("recent", []).filter(x => x !== q);
    recent.unshift(q);
    recent = recent.slice(0, 6);
    store.set("recent", recent);
    renderRecent();
  }
  function renderRecent() {
    const recent = store.get("recent", []);
    const box = $("#recentSearches");
    if (!recent.length) { box.hidden = true; return; }
    box.hidden = false;
    const wrap = $("#recentChips");
    wrap.innerHTML = "";
    recent.forEach(q => {
      const b = document.createElement("button");
      b.className = "chip";
      b.textContent = q;
      b.addEventListener("click", () => { $("#topicInput").value = q; runSearch(); });
      wrap.appendChild(b);
    });
  }

  async function renderVotd() {
    // deterministic verse-of-the-day across the whole library
    const all = TOPICS.flatMap(t => t.verses.map(v => v.ref));
    const now = new Date();
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
    const ref = all[(dayOfYear * 7 + now.getFullYear()) % all.length];
    try {
      const data = await fetchPassage(ref);
      $("#votdText").textContent = data.text.trim().replace(/\s+/g, " ");
      $("#votdRef").textContent = "— " + data.reference + " (" + data.translation_name + ")";
      $("#votd").hidden = false;
    } catch { /* offline: quietly skip */ }
  }

  /* ============================================================
     WIRING
     ============================================================ */
  function handleHash() {
    const h = location.hash.replace(/^#/, "");
    if (h.startsWith("study/")) {
      const id = h.slice(6);
      if (TOPICS.some(t => t.id === id)) { openStudy(id, true); return; }
    }
    showView("search");
  }

  document.addEventListener("DOMContentLoaded", () => {
    // theme
    const preferDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(store.get("theme", preferDark ? "dark" : "light"));
    $("#themeToggle").addEventListener("click", () =>
      applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));

    // nav
    $$(".nav-btn[data-view]").forEach(b => b.addEventListener("click", () => {
      const v = b.dataset.view;
      if (v === "saved") renderSaved();
      if (v === "browse") renderBrowse();
      location.hash = "";
      showView(v);
    }));
    $("#brandLink").addEventListener("click", e => { e.preventDefault(); location.hash = ""; showView("search"); });

    // search
    $("#searchBtn").addEventListener("click", runSearch);
    $("#topicInput").addEventListener("keydown", e => {
      if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); runSearch(); }
    });
    $("#luckyBtn").addEventListener("click", () => {
      const t = TOPICS[Math.floor(Math.random() * TOPICS.length)];
      openStudy(t.id);
    });
    ["#optTranslation", "#optAudience", "#optDuration", "#optFormat", "#optGroupSize"].forEach(sel => {
      $(sel).addEventListener("change", () => {
        saveOptions();
        // re-render the open study with new options
        if (!$("#view-study").hidden && currentTopic) { renderStudy(currentTopic, getOptions()); loadAllVerses(currentTopic); }
      });
    });

    // study toolbar
    $("#backBtn").addEventListener("click", () => { location.hash = ""; showView(lastView); if (lastView === "browse") renderBrowse(); });
    $("#printBtn").addEventListener("click", () => window.print());
    $("#downloadBtn").addEventListener("click", downloadStudy);
    $("#copyBtn").addEventListener("click", copyStudy);
    $("#shareBtn").addEventListener("click", shareStudy);
    $("#saveStudyBtn").addEventListener("click", saveStudy);

    // home extras
    restoreOptions();
    renderExamples();
    renderRecent();
    renderVotd();

    // deep link
    window.addEventListener("hashchange", handleHash);
    if (location.hash) handleHash(); else showView("search");
  });
})();
