/* ============================================================
   Berean — Topical Bible Study Library
   Each topic: id, name, emoji, category, keywords (for matching),
   summary, verses [{ref, note}], questions {opening, observation,
   interpretation, application}, activities, leaderTips, prayer,
   related (topic ids).
   Verse text is fetched live from bible-api.com; refs + "why it
   matters" notes are curated here.
   ============================================================ */

const CATEGORIES = [
  "Emotions & Struggles",
  "Relationships",
  "Character & Growth",
  "Faith Essentials",
  "Life & Purpose",
  "God & Worship"
];

const TOPICS = [
  /* ---------------- EMOTIONS & STRUGGLES ---------------- */
  {
    id: "anxiety",
    name: "Anxiety & Worry",
    emoji: "😰",
    category: "Emotions & Struggles",
    keywords: ["anxiety", "anxious", "worry", "worried", "stress", "stressed", "overwhelmed", "panic", "nervous", "fretting", "restless", "burden", "cares", "overthinking"],
    summary: "Scripture never pretends life is worry-free — instead it invites us to trade anxiety for trust, casting every care on the God who cares for us.",
    verses: [
      { ref: "Philippians 4:6-7", note: "Paul's antidote to anxiety: prayer with thanksgiving, guarded by God's peace." },
      { ref: "Matthew 6:25-34", note: "Jesus points to birds and lilies — the Father knows what you need." },
      { ref: "1 Peter 5:6-7", note: "Cast all your anxiety on Him, because He cares for you." },
      { ref: "Psalm 55:22", note: "Throw your burden on the LORD and He will sustain you." },
      { ref: "Isaiah 41:10", note: "God's repeated command 'fear not' comes with a promise: 'I am with you.'" },
      { ref: "Psalm 94:19", note: "When anxiety multiplies within, God's comfort brings joy." },
      { ref: "John 14:27", note: "Jesus gives a peace the world cannot give — or take away." },
      { ref: "Proverbs 12:25", note: "Anxiety weighs the heart down; a good word cheers it up." }
    ],
    questions: {
      opening: ["What kinds of things tend to keep you up at night?", "On a scale of 'beach vacation' to 'finals week', how has your stress level been lately?"],
      observation: ["In Philippians 4:6-7, what exactly does Paul tell us to do instead of being anxious? What is promised as a result?", "In Matthew 6, what reasons does Jesus give for why we shouldn't worry?"],
      interpretation: ["Why do you think Paul pairs prayer with *thanksgiving* when addressing anxiety?", "Is worry a lack of faith, a human weakness, or something else? How does Jesus treat worriers in these passages?"],
      application: ["What's one anxiety you could deliberately 'cast on Him' this week — and what would that practically look like?", "Who in your life needs a 'good word' (Prov 12:25) to lighten their anxious heart?"]
    },
    activities: [
      "Worry Jar: have everyone write current worries on slips of paper, pray over them together, and seal them in a jar to revisit in a month.",
      "Breath prayer practice: inhale on 'The Lord is my shepherd', exhale on 'I shall not want' — practice for two quiet minutes.",
      "Memorize Philippians 4:6-7 together using the first-letter method (write only the first letter of each word)."
    ],
    leaderTips: [
      "Some group members may have clinical anxiety — be clear that seeking counseling or medical help is wise, not unspiritual.",
      "Keep sharing voluntary; anxiety about sharing anxiety is real. Model vulnerability by going first."
    ],
    prayer: "Father, You know every care we carry before we speak it. Teach us to exchange our worries for Your peace that passes understanding. Guard our hearts and minds in Christ Jesus. Amen.",
    related: ["fear", "peace", "trust", "suffering"]
  },
  {
    id: "fear",
    name: "Fear & Courage",
    emoji: "🦁",
    category: "Emotions & Struggles",
    keywords: ["fear", "afraid", "scared", "courage", "brave", "bravery", "terror", "timid", "intimidated", "bold", "boldness", "fearless", "phobia"],
    summary: "'Do not fear' appears throughout Scripture more than almost any other command — always anchored not in self-confidence but in God's presence.",
    verses: [
      { ref: "Joshua 1:9", note: "Courage is commanded because 'the LORD your God is with you wherever you go.'" },
      { ref: "Psalm 27:1", note: "The LORD is my light and my salvation — whom shall I fear?" },
      { ref: "Isaiah 41:13", note: "God holds your right hand and says, 'Don't be afraid. I will help you.'" },
      { ref: "2 Timothy 1:7", note: "God gave us a spirit not of fear but of power, love, and self-control." },
      { ref: "Psalm 56:3-4", note: "David's honest formula: 'When I am afraid, I will trust in you.'" },
      { ref: "1 John 4:18", note: "Perfect love casts out fear." },
      { ref: "Deuteronomy 31:6", note: "Be strong and courageous — He will never leave you nor forsake you." },
      { ref: "Matthew 10:28-31", note: "Jesus reframes fear: you are worth more than many sparrows." }
    ],
    questions: {
      opening: ["What was something you were afraid of as a kid that seems funny now?", "What's the bravest thing you've ever watched someone else do?"],
      observation: ["In Joshua 1:9, what reason does God give Joshua for courage? What does He *not* say?", "According to Psalm 56:3-4, what does David do when he is afraid?"],
      interpretation: ["David says 'when I am afraid,' not 'if.' What does that tell us about the relationship between fear and faith?", "How does 'perfect love casts out fear' (1 John 4:18) actually work?"],
      application: ["What is one thing you sense God calling you toward that fear is holding back?", "How could this group help you take one courageous step this month?"]
    },
    activities: [
      "Courage inventory: list the 'do not fear' promises in tonight's passages and match each to a real situation someone in the group is facing.",
      "Testimony time: invite one or two members (arranged beforehand) to share a moment God gave them courage."
    ],
    leaderTips: [
      "Distinguish healthy caution from paralyzing fear — Scripture condemns neither prudence nor honest emotion.",
      "For youth groups, fear of others' opinions (FOMO, social anxiety) is usually the most relatable entry point."
    ],
    prayer: "Lord, You have not given us a spirit of fear. Where we are timid, make us bold; where we are anxious, remind us You hold our right hand. Amen.",
    related: ["anxiety", "trust", "identity", "suffering"]
  },
  {
    id: "grief",
    name: "Grief & Loss",
    emoji: "🕊️",
    category: "Emotions & Struggles",
    keywords: ["grief", "grieving", "loss", "mourning", "mourn", "death", "died", "funeral", "bereavement", "sorrow", "sadness", "losing someone", "widow", "comfort"],
    summary: "The Bible gives grief remarkable dignity — Jesus wept — while anchoring mourners in resurrection hope that grieves, but not as those without hope.",
    verses: [
      { ref: "Psalm 34:18", note: "The LORD is near to the broken-hearted." },
      { ref: "Matthew 5:4", note: "Blessed are those who mourn, for they shall be comforted." },
      { ref: "John 11:32-36", note: "Jesus wept — even knowing resurrection was minutes away." },
      { ref: "1 Thessalonians 4:13-14", note: "We grieve, but not like those who have no hope." },
      { ref: "Revelation 21:4", note: "He will wipe away every tear; death shall be no more." },
      { ref: "Psalm 23:4", note: "Even in the valley of the shadow of death, You are with me." },
      { ref: "2 Corinthians 1:3-4", note: "The God of all comfort comforts us so we can comfort others." },
      { ref: "Isaiah 61:1-3", note: "Beauty for ashes, the oil of joy for mourning." }
    ],
    questions: {
      opening: ["What's a tradition — family, cultural, or church — around remembering people we've lost that you find meaningful?"],
      observation: ["In John 11, what emotions does Jesus display? What does He know that the mourners don't?", "In 1 Thessalonians 4:13, what distinguishes Christian grief from grief 'without hope'?"],
      interpretation: ["Why do you think Jesus wept when He knew He was about to raise Lazarus?", "What does 'blessed are those who mourn' mean — is grief itself a blessing?"],
      application: ["How can our group better show up for people in seasons of loss — practically, not just with words?", "If you're grieving now: what would receiving 'the God of all comfort' look like for you this week?"]
    },
    activities: [
      "Comfort card writing: spend ten minutes writing notes to people in your church community who have experienced recent loss.",
      "Read Psalm 23 aloud slowly, twice, with a minute of silence after each reading (lectio divina style)."
    ],
    leaderTips: [
      "Never rush someone's grief toward 'the lesson.' Presence beats explanation — think Job's friends before they started talking.",
      "Have tissues available and normalize tears. If a member's loss is very recent, check in with them privately before the study."
    ],
    prayer: "God of all comfort, draw near to the broken-hearted among us. Hold our grief gently, remind us of resurrection hope, and make us carriers of Your comfort to others. Amen.",
    related: ["hope", "suffering", "heaven", "peace"]
  },
  {
    id: "depression",
    name: "Despair & Dark Seasons",
    emoji: "🌧️",
    category: "Emotions & Struggles",
    keywords: ["depression", "depressed", "despair", "hopeless", "darkness", "dark night", "sad", "sadness", "discouraged", "discouragement", "downcast", "burnout", "weary", "exhausted", "empty"],
    summary: "From Elijah under the broom tree to David's darkest psalms, Scripture is honest about despair — and shows a God who meets people in the pit, often with rest and food before sermons.",
    verses: [
      { ref: "Psalm 42:11", note: "'Why are you in despair, my soul?' — the psalmist preaches hope to himself." },
      { ref: "1 Kings 19:4-8", note: "Elijah wants to die; God sends sleep, food, and gentle presence." },
      { ref: "Psalm 40:1-3", note: "He lifted me out of the pit and put a new song in my mouth." },
      { ref: "Isaiah 43:2", note: "When you pass through the waters, I will be with you." },
      { ref: "Lamentations 3:19-24", note: "In the middle of the Bible's bleakest book: His mercies are new every morning." },
      { ref: "Psalm 88:1-3", note: "A psalm with no happy ending — proof that raw lament belongs in worship." },
      { ref: "Matthew 11:28-30", note: "Come to me, all who labor and are heavy laden, and I will give you rest." },
      { ref: "2 Corinthians 4:8-9", note: "Pressed but not crushed; struck down but not destroyed." }
    ],
    questions: {
      opening: ["When you're running on empty, what usually helps you recharge — even a little?"],
      observation: ["In 1 Kings 19, list everything God does for Elijah before He speaks to him. What's the order?", "What does the writer of Lamentations 3 'call to mind' that changes his outlook?"],
      interpretation: ["Psalm 88 ends in darkness with no resolution. Why might God include a psalm like that in Scripture?", "What's the difference between the psalmist talking *to* himself (Ps 42:11) and just listening to himself?"],
      application: ["Elijah's recovery started with sleep and a meal. What 'ordinary' care might God be inviting you to receive or give?", "Who could you check on this week who might be in a dark season?"]
    },
    activities: [
      "Write your own two-line lament psalm: one honest line of complaint, one line of remembered truth (modeled on Lamentations 3).",
      "Build a group 'Psalm 42 playlist' — songs that preach hope to your soul — and share it."
    ],
    leaderTips: [
      "Say explicitly: depression can be a medical condition; therapy and medication are gifts, not failures of faith. Know a local counselor to refer to.",
      "If anyone expresses hopelessness about living, take it seriously, follow up privately, and share crisis resources (in the U.S., call or text 988)."
    ],
    prayer: "Lord, You are near even when we can't feel it. Meet each of us in the valley — with rest, with bread, with Your gentle voice — and put a new song in our mouths in Your time. Amen.",
    related: ["hope", "grief", "rest", "suffering"]
  },
  {
    id: "loneliness",
    name: "Loneliness & Belonging",
    emoji: "🏝️",
    category: "Emotions & Struggles",
    keywords: ["lonely", "loneliness", "alone", "isolated", "isolation", "belonging", "left out", "abandoned", "rejected", "friendless", "outsider", "unseen"],
    summary: "God declares 'it is not good for man to be alone,' sets the lonely in families, and in Christ promises a presence that never leaves — while calling His church to be the community lonely people need.",
    verses: [
      { ref: "Psalm 68:5-6", note: "God sets the lonely in families." },
      { ref: "Genesis 2:18", note: "The first 'not good' in creation: aloneness." },
      { ref: "Matthew 28:20", note: "Jesus' last words: 'I am with you always.'" },
      { ref: "Psalm 139:7-10", note: "There is nowhere you can go where God is not." },
      { ref: "Hebrews 13:5", note: "'I will never leave you nor forsake you.'" },
      { ref: "John 14:18", note: "'I will not leave you as orphans; I will come to you.'" },
      { ref: "1 Corinthians 12:24-27", note: "In the body of Christ, every member belongs and matters." },
      { ref: "2 Timothy 4:16-17", note: "Paul, abandoned by everyone: 'But the Lord stood with me.'" }
    ],
    questions: {
      opening: ["Where's somewhere you instantly feel like you belong — and what makes it feel that way?"],
      observation: ["In Psalm 68:5-6, which specific groups of people does God champion? What does He do for them?", "What situation is Paul describing in 2 Timothy 4:16-17, and how does he respond?"],
      interpretation: ["Can you be lonely and still believe God is with you? How do these truths interact with real feelings?", "What does 1 Corinthians 12 suggest about the difference between attending church and belonging to one?"],
      application: ["Who around you might be lonelier than they appear? What's one concrete step toward them this week?", "What keeps you from letting people know you? What would it take to be known in this group?"]
    },
    activities: [
      "Empty chair exercise: place an empty chair in the circle representing someone not yet in community — brainstorm and commit to specific invitations.",
      "Contact challenge: everyone texts one person who's been on the fringes before leaving tonight."
    ],
    leaderTips: [
      "Loneliness is common among the seemingly well-connected — don't assume married, popular, or busy people are exempt.",
      "Follow through as a group: belonging is built by repeated invitations, not one warm evening."
    ],
    prayer: "Father to the fatherless, You set the lonely in families. Open our eyes to the isolated, make this group a place of real belonging, and let each of us know the Friend who never leaves. Amen.",
    related: ["community", "friendship", "identity", "love"]
  },
  {
    id: "anger",
    name: "Anger & Self-Control",
    emoji: "🌋",
    category: "Emotions & Struggles",
    keywords: ["anger", "angry", "rage", "temper", "mad", "frustrated", "frustration", "bitterness", "resentment", "wrath", "irritation", "self-control", "explode"],
    summary: "Scripture treats anger as real and sometimes righteous — yet slow, surrendered, and never a license to sin. 'Be angry, and do not sin' is a razor's edge worth studying.",
    verses: [
      { ref: "Ephesians 4:26-27", note: "Be angry and do not sin; don't let the sun go down on your anger." },
      { ref: "James 1:19-20", note: "Quick to listen, slow to speak, slow to anger." },
      { ref: "Proverbs 15:1", note: "A gentle answer turns away wrath." },
      { ref: "Proverbs 16:32", note: "Better to be slow to anger than to capture a city." },
      { ref: "Psalm 103:8", note: "The LORD is merciful and gracious, slow to anger." },
      { ref: "Mark 3:5", note: "Jesus looks at hard hearts 'with anger, grieved' — righteous anger paired with grief." },
      { ref: "Ecclesiastes 7:9", note: "Anger lodges in the heart of fools." },
      { ref: "Colossians 3:8", note: "Put away anger, wrath, malice, and slander." }
    ],
    questions: {
      opening: ["What's a trivial thing that irrationally annoys you (slow walkers, loud chewing…)?"],
      observation: ["In Ephesians 4:26-27, what commands are given about anger, and what warning follows?", "In Mark 3:5, what makes Jesus angry, and what emotion accompanies His anger?"],
      interpretation: ["How can anger be 'without sin'? Where's the line between righteous and sinful anger?", "Why does James connect being 'slow to anger' with being 'quick to listen'?"],
      application: ["What tends to be your anger trigger — and what would 'slow to speak' look like in that moment?", "Is there unresolved anger the sun has gone down on (maybe many times)? What's one step toward resolving it?"]
    },
    activities: [
      "Trigger map: privately write your top three anger triggers, then discuss (as comfortable) what deeper fear or hurt sits underneath each.",
      "Role-play Proverbs 15:1 — practice 'gentle answers' to a few provocative scenarios the group invents."
    ],
    leaderTips: [
      "Anger is often a 'secondary emotion' covering hurt or fear — gently ask what's underneath.",
      "If domestic anger or abuse surfaces, address safety first and privately; that's beyond a group study's scope."
    ],
    prayer: "Lord, You are slow to anger and abounding in love. Make us quick to listen, slow to speak, slow to anger — and quick to forgive as You forgave us. Amen.",
    related: ["forgiveness", "patience", "conflict", "peace"]
  },
  {
    id: "doubt",
    name: "Doubt & Honest Questions",
    emoji: "❓",
    category: "Emotions & Struggles",
    keywords: ["doubt", "doubting", "questions", "unbelief", "skeptic", "skeptical", "uncertain", "uncertainty", "deconstruction", "struggling to believe", "faith crisis", "wavering"],
    summary: "From Thomas to John the Baptist in prison, the Bible's doubters are met with evidence and compassion, not shame. 'Be merciful to those who doubt' is a command to the church.",
    verses: [
      { ref: "Mark 9:23-24", note: "'I believe; help my unbelief!' — the prayer of every honest doubter." },
      { ref: "John 20:24-29", note: "Jesus meets Thomas' doubt with scars, not scolding." },
      { ref: "Matthew 11:2-6", note: "John the Baptist, in prison, asks 'Are you the one?' Jesus answers with evidence." },
      { ref: "Jude 1:22", note: "Have mercy on those who doubt." },
      { ref: "Psalm 73:1-3, 16-17", note: "Asaph nearly lost his footing — until he entered the sanctuary." },
      { ref: "James 1:5-6", note: "Ask God for wisdom, who gives generously without reproach." },
      { ref: "Habakkuk 1:2-5", note: "A prophet interrogates God — and God answers." },
      { ref: "1 Peter 3:15", note: "Always be ready to give a reason for the hope in you." }
    ],
    questions: {
      opening: ["What's a question about God or the Bible you wondered about as a kid?"],
      observation: ["How does Jesus respond to Thomas in John 20? What does He offer, and what does He say?", "What did John the Baptist do with his doubt in Matthew 11 — and where did he send it?"],
      interpretation: ["Is doubt the opposite of faith? What's the difference between honest doubt and hard-hearted unbelief?", "Why do you think Jesus praises 'those who have not seen and yet believed' while still showing Thomas His hands?"],
      application: ["What's one question you've been afraid to ask out loud? (Consider asking it tonight.)", "How can we make this group a safe place for people mid-doubt — 'merciful to those who doubt'?"]
    },
    activities: [
      "Anonymous question box: collect written questions, draw a few, and wrestle with them together (it's okay to say 'we don't know').",
      "Assign each person one classic tough question to research this week and report back on."
    ],
    leaderTips: [
      "Don't panic when questions arise you can't answer — model 'let's find out together' rather than shutting them down.",
      "Doubters often need belonging before belief; keep them close, not at arm's length."
    ],
    prayer: "Lord, we believe — help our unbelief. Thank You that You meet honest questions with patience and scars we can touch. Anchor us in what we know while we wrestle with what we don't. Amen.",
    related: ["faith", "trust", "suffering", "hope"]
  },
  {
    id: "temptation",
    name: "Temptation & Sin",
    emoji: "🍎",
    category: "Emotions & Struggles",
    keywords: ["temptation", "tempted", "sin", "addiction", "lust", "struggle", "habit", "flesh", "resist", "victory over sin", "porn", "escape", "stronghold", "besetting"],
    summary: "Temptation is universal, escapable, and survivable — Jesus faced it fully and provides both a way out and mercy for when we fall.",
    verses: [
      { ref: "1 Corinthians 10:13", note: "No temptation is unique to you — and God always provides a way of escape." },
      { ref: "Matthew 4:1-11", note: "Jesus defeats each temptation with Scripture." },
      { ref: "James 1:13-15", note: "The anatomy of temptation: desire → sin → death." },
      { ref: "Hebrews 4:15-16", note: "Jesus was tempted in every way as we are, yet without sin — so approach boldly." },
      { ref: "Galatians 6:1", note: "Restore the fallen gently, watching yourself." },
      { ref: "Psalm 119:9-11", note: "I have hidden your word in my heart, that I might not sin against you." },
      { ref: "Romans 6:11-14", note: "Count yourselves dead to sin — it shall not be your master." },
      { ref: "1 John 1:9", note: "If we confess, He is faithful and just to forgive and cleanse." }
    ],
    questions: {
      opening: ["What food can you absolutely not have in the house because you'll eat all of it?"],
      observation: ["In Matthew 4, what strategy does Jesus use against each temptation? What had He been doing beforehand?", "Map the progression James describes in James 1:14-15. Where are the 'exit ramps'?"],
      interpretation: ["What does it mean that God 'provides a way of escape' — does that match your experience?", "Why does it matter that Jesus was 'tempted in every way, yet without sin'?"],
      application: ["Where in the James 1 progression do you most need to interrupt your own pattern?", "Confession kills secrecy: is there a safe person (or this group) with whom you could be honest this month?"]
    },
    activities: [
      "Escape-route planning: for a common temptation, brainstorm concrete 'ways of escape' at each stage (before, during, after).",
      "Scripture arsenal: like Jesus in Matthew 4, pick one verse to memorize as your specific counter to a specific temptation."
    ],
    leaderTips: [
      "Same-gender breakout groups often unlock far more honesty on this topic.",
      "Keep grace loud: 1 John 1:9 belongs in the same breath as every call to holiness. For addictions, point to recovery groups and counselors as means of grace."
    ],
    prayer: "Father, lead us not into temptation, but deliver us from evil. Thank You for a Savior who understands our weakness and a promise of escape. Make us honest, watchful, and quick to run to You. Amen.",
    related: ["holiness", "grace", "accountability", "repentance"]
  },
  {
    id: "suffering",
    name: "Suffering & Trials",
    emoji: "⚒️",
    category: "Emotions & Struggles",
    keywords: ["suffering", "trials", "pain", "hardship", "affliction", "persecution", "why me", "why does god allow", "trouble", "adversity", "refining", "perseverance", "endurance", "cancer", "illness", "sickness"],
    summary: "The Bible never gives suffering a tidy answer — it gives a suffering Savior, a purpose that ripens perseverance into hope, and a promise that present pain is not the final word.",
    verses: [
      { ref: "Romans 5:3-5", note: "Suffering → perseverance → character → hope that does not disappoint." },
      { ref: "James 1:2-4", note: "Consider it pure joy — trials mature faith." },
      { ref: "Romans 8:18", note: "Present sufferings aren't worth comparing to coming glory." },
      { ref: "2 Corinthians 4:16-18", note: "Light momentary affliction, eternal weight of glory." },
      { ref: "1 Peter 4:12-13", note: "Don't be surprised by the fiery trial — you share Christ's sufferings." },
      { ref: "Job 1:20-22", note: "Job worships in the wreckage without charging God with wrong." },
      { ref: "John 16:33", note: "'In this world you will have trouble. But take heart — I have overcome the world.'" },
      { ref: "Psalm 34:19", note: "Many are the afflictions of the righteous, but the LORD delivers." }
    ],
    questions: {
      opening: ["Looking back, what's a hard season that grew you in ways you couldn't see at the time?"],
      observation: ["Trace the chain in Romans 5:3-5. What's the end product, and what guarantees it?", "In John 16:33, what does Jesus promise — and what does He *not* promise?"],
      interpretation: ["'Consider it pure joy' (James 1:2) — is that denial, or something else? How is joy in trials possible?", "How would you respond to a friend who asks, 'If God is good, why am I suffering?'"],
      application: ["What trial are you in right now, and which link of the Romans 5 chain do you need to hold onto?", "How can this group tangibly carry someone's burden this week (Gal 6:2)?"]
    },
    activities: [
      "Chain illustration: write each Romans 5 link on paper strips and physically build the chain as you discuss each stage.",
      "Interview a 'veteran': invite an older believer to share how God met them in their hardest season, with Q&A."
    ],
    leaderTips: [
      "Resist explaining anyone's specific suffering ('God is teaching you X') — Job's friends went wrong exactly there.",
      "Hold both truths: honest lament is worship, and hope is real. Don't sacrifice either."
    ],
    prayer: "Man of Sorrows, You know pain from the inside. Meet everyone here in their trial, work perseverance and character in us, and fix our eyes on the glory that outweighs it all. Amen.",
    related: ["hope", "grief", "doubt", "perseverance"]
  },

  /* ---------------- RELATIONSHIPS ---------------- */
  {
    id: "forgiveness",
    name: "Forgiveness",
    emoji: "🤝",
    category: "Relationships",
    keywords: ["forgiveness", "forgive", "forgiving", "reconciliation", "grudge", "grudges", "mercy", "pardon", "let go", "hurt", "betrayed", "betrayal", "wronged", "offense"],
    summary: "Forgiveness is the family trait of those forgiven much — costly, sometimes gradual, commanded without loopholes, and the closest we come to imitating the cross.",
    verses: [
      { ref: "Ephesians 4:31-32", note: "Forgive one another, as God in Christ forgave you." },
      { ref: "Matthew 18:21-35", note: "The unmerciful servant: forgiven billions, choking someone over pennies." },
      { ref: "Colossians 3:13", note: "Bear with each other; forgive as the Lord forgave you." },
      { ref: "Matthew 6:14-15", note: "Jesus' sobering postscript to the Lord's Prayer." },
      { ref: "Luke 23:34", note: "'Father, forgive them' — from the cross itself." },
      { ref: "Romans 12:17-21", note: "Never avenge; overcome evil with good." },
      { ref: "Psalm 103:10-12", note: "As far as east from west — how God treats our sins." },
      { ref: "Genesis 50:15-21", note: "Joseph forgives his brothers: 'You meant evil; God meant it for good.'" }
    ],
    questions: {
      opening: ["What's the difference between 'I'm sorry' and a real apology, in your experience?"],
      observation: ["In Matthew 18, compare the two debts. What's Jesus' point in making them so lopsided?", "What reasons does Ephesians 4:32 and Colossians 3:13 give for forgiving?"],
      interpretation: ["Does forgiving mean trusting again, forgetting, or dropping consequences? What is it, and what isn't it?", "How does remembering our own forgiveness change our capacity to forgive?"],
      application: ["Is there someone you're 'choking over pennies'? What would one step toward release look like?", "Who do you need to *ask* forgiveness from?"]
    },
    activities: [
      "Debt ledger: write a hurt on paper, write 'FORGIVEN — as I have been' across it, and (safely) shred or burn it as a group act.",
      "Read Matthew 18:21-35 as reader's theater with assigned parts, then discuss how it felt from each character's view."
    ],
    leaderTips: [
      "Be careful with abuse situations: forgiveness does not require returning to unsafe relationships. Distinguish forgiveness (always) from reconciliation (when safe and possible).",
      "Forgiveness is often a process with layers — normalize 'forgiving again' when the memory resurfaces."
    ],
    prayer: "Father, You cancelled a debt we could never pay. Soften what's hardened in us, heal what's been wounded, and make us famous for forgiving as we've been forgiven. Amen.",
    related: ["grace", "love", "conflict", "anger"]
  },
  {
    id: "love",
    name: "Love",
    emoji: "❤️",
    category: "Relationships",
    keywords: ["love", "loving", "agape", "charity", "compassion", "kindness", "care", "loving others", "love god", "love neighbor", "unconditional"],
    summary: "Love is the greatest commandment, the defining mark of disciples, and the very nature of God — not first a feeling but a self-giving action defined at the cross.",
    verses: [
      { ref: "1 Corinthians 13:4-8", note: "Love defined by fifteen verbs — try replacing 'love' with your name." },
      { ref: "John 13:34-35", note: "Love is how the world will recognize Jesus' disciples." },
      { ref: "1 John 4:7-11", note: "God is love — and this is love: not that we loved, but that He loved us." },
      { ref: "Matthew 22:36-40", note: "Love God, love neighbor: the hooks all the Law hangs on." },
      { ref: "Romans 5:8", note: "God proves His love: Christ died while we were still sinners." },
      { ref: "John 15:12-13", note: "Greater love has no one than this: to lay down one's life." },
      { ref: "1 John 3:16-18", note: "Love not in word or talk, but in deed and truth." },
      { ref: "Luke 10:25-37", note: "The Good Samaritan: 'neighbor' has no boundary lines." }
    ],
    questions: {
      opening: ["Who is the most genuinely loving person you know — and what do they actually *do*?"],
      observation: ["List the verbs in 1 Corinthians 13:4-7. Which describe what love does, and which what it refuses to do?", "In Luke 10, what specific costs does the Samaritan absorb?"],
      interpretation: ["Our culture treats love mostly as a feeling. How do these passages define it differently?", "Why does Jesus make love — not doctrine, gifting, or morality — the identifying mark of disciples?"],
      application: ["Put your name in place of 'love' in 1 Corinthians 13:4-7. Which phrase stung most? Pick one to work on.", "Who is your 'unexpected neighbor' this week, and what would crossing the road toward them cost?"]
    },
    activities: [
      "Name-swap exercise: read 1 Cor 13:4-7 aloud with each person's name substituted; sit with the gap and the grace.",
      "Secret servant: draw names and do one concrete act of love for that person before the next meeting."
    ],
    leaderTips: [
      "Steer from abstraction to action: every discussion point should land on a name and a deed.",
      "1 John 4 grounds our love in God's initiative — keep the study gospel-fueled, not guilt-fueled."
    ],
    prayer: "God of love, You loved us first and to the uttermost. Pour Your love through us — patient, kind, keeping no record of wrongs — until the world recognizes Your Son in us. Amen.",
    related: ["forgiveness", "friendship", "marriage", "service"]
  },
  {
    id: "marriage",
    name: "Marriage & Dating",
    emoji: "💍",
    category: "Relationships",
    keywords: ["marriage", "married", "husband", "wife", "spouse", "wedding", "dating", "relationships", "romance", "engagement", "singleness", "single", "purity", "covenant"],
    summary: "Marriage is a covenant designed to display Christ and the church — built on mutual submission, sacrificial love, and grace-fueled faithfulness; and Scripture honors singleness as a full and gifted calling too.",
    verses: [
      { ref: "Genesis 2:24-25", note: "Leave, cleave, become one flesh — the founding design." },
      { ref: "Ephesians 5:21-33", note: "Mutual submission; husbands love like Christ; the mystery points to the gospel." },
      { ref: "1 Corinthians 13:4-7", note: "The love chapter — written for churches, essential for homes." },
      { ref: "Ecclesiastes 4:9-12", note: "Two are better than one; a threefold cord is not quickly broken." },
      { ref: "Proverbs 31:10-12", note: "A trustworthy partner is worth more than jewels." },
      { ref: "Song of Solomon 8:6-7", note: "Love strong as death; many waters cannot quench it." },
      { ref: "1 Corinthians 7:32-35", note: "Paul's high view of singleness: undivided devotion." },
      { ref: "Colossians 3:12-14", note: "The wardrobe of every close relationship: compassion, patience, forgiveness, love." }
    ],
    questions: {
      opening: ["What's the best relationship advice you've ever received (or the worst)?"],
      observation: ["In Ephesians 5, what is the husband's love compared to, and what did that love cost?", "What images does Ecclesiastes 4:9-12 use for partnership, and what's the 'third strand'?"],
      interpretation: ["What does 'submit to one another' (Eph 5:21) mean before any specific roles are mentioned?", "How does viewing marriage as a picture of Christ and the church change how conflict, forgiveness, and faithfulness work?"],
      application: ["Married: which quality from Colossians 3:12-14 does your spouse most need from you right now?", "Single or dating: what does 'undivided devotion' (1 Cor 7) look like in your current season?"]
    },
    activities: [
      "Covenant vs. contract: list the differences in two columns, then find each in the passages.",
      "Couples (or friends) exchange one written note: 'One way you've shown me Christ's love this year.'"
    ],
    leaderTips: [
      "Honor every relational status in the room — Scripture dignifies singleness (Jesus and Paul were single). Avoid making marriage the finish line.",
      "Don't let the study become a venting session about spouses; keep the mirror pointed at oneself."
    ],
    prayer: "Lord, whether married or single, make our closest relationships preach Your gospel. Teach us covenant love — patient, sacrificial, and faithful — by keeping us amazed at Yours. Amen.",
    related: ["love", "forgiveness", "friendship", "purity"]
  },
  {
    id: "parenting",
    name: "Parenting & Family",
    emoji: "👨‍👩‍👧‍👦",
    category: "Relationships",
    keywords: ["parenting", "parents", "children", "kids", "family", "raising", "discipline", "father", "mother", "son", "daughter", "home", "legacy", "generations"],
    summary: "Scripture calls parents to disciple before they discipline — impressing God's words on children through everyday life, without exasperating them, while trusting grace for imperfect families.",
    verses: [
      { ref: "Deuteronomy 6:4-9", note: "Faith transferred in the everyday: sitting, walking, lying down, rising." },
      { ref: "Proverbs 22:6", note: "Train up a child in the way he should go." },
      { ref: "Ephesians 6:1-4", note: "Children obey; fathers, don't exasperate — nurture instead." },
      { ref: "Psalm 127:3-5", note: "Children are a heritage and reward from the LORD." },
      { ref: "Colossians 3:20-21", note: "Don't embitter your children, or they'll become discouraged." },
      { ref: "Psalm 78:4-7", note: "Tell the next generation the praiseworthy deeds of the LORD." },
      { ref: "Luke 15:11-24", note: "The prodigal's father: the target picture of parental grace." },
      { ref: "2 Timothy 1:5", note: "Faith handed down through a grandmother and mother to Timothy." }
    ],
    questions: {
      opening: ["What's one thing your parents or grandparents did that you hope to pass on — or one thing you've decided to do differently?"],
      observation: ["In Deuteronomy 6, *when* is faith supposed to be taught? What does that imply about how it's caught?", "What does the father in Luke 15 do before the son finishes his rehearsed apology?"],
      interpretation: ["What does it mean to 'exasperate' or 'embitter' a child? What parenting patterns produce that?", "Proverbs 22:6 — promise or proverb? How should parents of prodigals hear it?"],
      application: ["Which everyday moment (meals, drives, bedtime) could become a Deuteronomy 6 moment in your home this week?", "If your kids described God based only on how you parent, what would they say? What's one adjustment?"]
    },
    activities: [
      "Map your week: find the built-in Deuteronomy 6 windows (car rides, meals) and plan one faith conversation for each.",
      "Blessing practice: write a short spoken blessing for each child (or niece/nephew/mentee) and commit to saying it aloud this week."
    ],
    leaderTips: [
      "Be gentle: rooms contain infertility, estranged kids, and grief. Frame the study for 'everyone who influences a child,' not just biological parents.",
      "Point struggling parents to the prodigal's father — grace, not guilt, is the engine of change."
    ],
    prayer: "Father, You parent us perfectly and patiently. Give every home represented here grace-filled words, everyday faithfulness, and prodigal-watching hope. Let faith outlive us by generations. Amen.",
    related: ["love", "wisdom", "legacy", "patience"]
  },
  {
    id: "friendship",
    name: "Friendship",
    emoji: "🫂",
    category: "Relationships",
    keywords: ["friendship", "friends", "friend", "companionship", "loyalty", "brotherhood", "sisterhood", "best friend", "community", "iron sharpens iron"],
    summary: "Biblical friendship is covenant-strength loyalty — Jonathan and David, Ruth and Naomi — marked by honesty that wounds faithfully, presence in adversity, and pointing one another to God.",
    verses: [
      { ref: "Proverbs 17:17", note: "A friend loves at all times; a brother is born for adversity." },
      { ref: "Proverbs 27:5-6", note: "Faithful are the wounds of a friend." },
      { ref: "Proverbs 27:17", note: "Iron sharpens iron." },
      { ref: "1 Samuel 18:1-4", note: "Jonathan's covenant friendship with David — robe, sword, and loyalty." },
      { ref: "Ecclesiastes 4:9-10", note: "Pity the one who falls with no one to lift him up." },
      { ref: "John 15:13-15", note: "Jesus calls His disciples friends — and defines the greatest love." },
      { ref: "Ruth 1:16-17", note: "'Where you go I will go' — loyalty beyond obligation." },
      { ref: "Proverbs 13:20", note: "Walk with the wise and become wise." }
    ],
    questions: {
      opening: ["Describe a friend who shaped who you are. What made that friendship different?"],
      observation: ["What does Jonathan give David in 1 Samuel 18, and what might each item mean?", "According to John 15:13-15, what changes when Jesus calls disciples 'friends' instead of 'servants'?"],
      interpretation: ["'Faithful are the wounds of a friend' — when has honest correction been a gift to you? Why is it rare?", "What's the difference between a friend and 200 followers?"],
      application: ["Are you the friend from Proverbs 17:17 to anyone — loving at *all* times, including inconvenient ones?", "What would it take to move one of your friendships one level deeper this month?"]
    },
    activities: [
      "Friendship audit (private): list your closest friends and ask — who sharpens me? whom do I sharpen? where's the gap?",
      "Affirmation circle: each person hears one specific 'iron sharpens iron' quality others see in them."
    ],
    leaderTips: [
      "Deep friendship is embarrassingly rare among adults, especially men — expect wistfulness and name it honestly.",
      "Push past nostalgia to commitment: the study succeeds if people schedule actual time with actual friends."
    ],
    prayer: "Lord Jesus, You call us friends. Teach us Jonathan's loyalty, Ruth's devotion, and the courage of faithful wounds. Knit this group into friendships worthy of the name. Amen.",
    related: ["community", "loneliness", "love", "accountability"]
  },
  {
    id: "community",
    name: "Community & the Church",
    emoji: "⛪",
    category: "Relationships",
    keywords: ["community", "church", "fellowship", "body of christ", "one another", "small group", "congregation", "belonging", "gathering", "unity", "koinonia"],
    summary: "The Christian life is a team sport: dozens of 'one another' commands, a body where every part matters, and a fellowship the early church devoted itself to daily.",
    verses: [
      { ref: "Acts 2:42-47", note: "The early church's rhythm: teaching, fellowship, meals, prayer, generosity." },
      { ref: "Hebrews 10:24-25", note: "Don't give up meeting together — spur one another on." },
      { ref: "1 Corinthians 12:12-27", note: "One body, many parts; the eye can't say 'I don't need you.'" },
      { ref: "Romans 12:4-13", note: "Belonging to one another, honoring one another, practicing hospitality." },
      { ref: "John 17:20-23", note: "Jesus prays for our unity — so the world may believe." },
      { ref: "Galatians 6:2", note: "Carry each other's burdens and so fulfill the law of Christ." },
      { ref: "Colossians 3:12-17", note: "Teaching, admonishing, singing, forgiving — life together." },
      { ref: "Psalm 133:1", note: "How good and pleasant when God's people dwell in unity." }
    ],
    questions: {
      opening: ["What's the best team, band, or group you've ever been part of? What made it work?"],
      observation: ["List everything the Acts 2 church devoted themselves to. Which elements does our group have? Which are missing?", "In 1 Corinthians 12, what attitudes threaten the body from both directions ('I don't belong' / 'I don't need you')?"],
      interpretation: ["Why does Jesus tie the world's belief to our unity (John 17)? What does disunity preach?", "Can someone follow Jesus without the church? What do these passages assume?"],
      application: ["Which 'one another' command is hardest for you — and which could you practice this week?", "Whose burden could this group actually help carry right now?"]
    },
    activities: [
      "One-another hunt: in five minutes, find as many 'one another' commands in the New Testament as you can; compile the group list.",
      "Share a full meal together as the study (Acts 2:46) — discussion happens around the table."
    ],
    leaderTips: [
      "Church wounds are common; let people be honest about bad experiences while holding out God's design.",
      "Model Acts 2 in the group itself — the medium is the message."
    ],
    prayer: "Father, You set the solitary in families and made us one body. Devote us to one another — in truth, at tables, under burdens — until the world sees Jesus in how we love. Amen.",
    related: ["friendship", "loneliness", "service", "unity"]
  },
  {
    id: "conflict",
    name: "Conflict & Reconciliation",
    emoji: "🕊️",
    category: "Relationships",
    keywords: ["conflict", "argument", "fighting", "disagreement", "reconciliation", "peacemaking", "peacemaker", "division", "quarrel", "dispute", "tension", "confrontation", "restore"],
    summary: "Jesus gives His people an actual protocol for conflict — go directly, speak truth in love, aim for restoration — because peacemaking, not peace-faking or peace-breaking, is family business.",
    verses: [
      { ref: "Matthew 18:15-17", note: "Jesus' step-by-step process: go directly and privately first." },
      { ref: "Matthew 5:23-24", note: "Reconciliation is so urgent it interrupts worship." },
      { ref: "Ephesians 4:15", note: "Speaking the truth in love — both, together." },
      { ref: "Ephesians 4:2-3", note: "Humility, gentleness, patience — eager to maintain unity." },
      { ref: "Romans 12:18", note: "As far as it depends on you, live at peace with everyone." },
      { ref: "Proverbs 19:11", note: "It is one's glory to overlook an offense." },
      { ref: "James 4:1-2", note: "Quarrels come from desires battling within us." },
      { ref: "Matthew 5:9", note: "Blessed are the peacemakers — they'll be called children of God." }
    ],
    questions: {
      opening: ["Are you a conflict-avoider, a conflict-engager, or a conflict-escalator by nature?"],
      observation: ["Walk through the steps of Matthew 18:15-17. What's the goal at every stage?", "According to James 4:1-2, where do fights actually come from?"],
      interpretation: ["When should an offense be overlooked (Prov 19:11) versus addressed (Matt 18)? How do you tell?", "Why do we prefer talking *about* people to talking *to* them — and what does Jesus' protocol kill?"],
      application: ["Is there a Matthew 5:23-24 situation in your life — someone with something against you? What's your next step before Sunday?", "Which James 4 'desire battling within' fuels your most repeated conflict?"]
    },
    activities: [
      "Script practice: write and rehearse the first two sentences of a hard conversation you need to have (truth + love).",
      "Case studies: work Jesus' Matthew 18 process through two or three realistic scenarios the group generates."
    ],
    leaderTips: [
      "Keep examples anonymous and generic — the group study must not become a proxy battlefield.",
      "Distinguish peacemaking from peacekeeping: avoidance isn't the fruit of the Spirit, peace is."
    ],
    prayer: "Prince of Peace, You reconciled us while we were enemies. Give us courage for direct conversations, gentleness for hard truths, and eagerness for unity. Make us peacemakers who look like our Father. Amen.",
    related: ["forgiveness", "anger", "community", "humility"]
  },

  /* ---------------- CHARACTER & GROWTH ---------------- */
  {
    id: "patience",
    name: "Patience & Waiting on God",
    emoji: "⏳",
    category: "Character & Growth",
    keywords: ["patience", "patient", "waiting", "wait on god", "delay", "endurance", "longsuffering", "perseverance", "timing", "gods timing", "impatient", "slow"],
    summary: "Waiting is one of God's favorite classrooms — Abraham, Joseph, and David all waited decades — and patience is less about the clock than about trusting the One who holds it.",
    verses: [
      { ref: "Isaiah 40:31", note: "Those who wait on the LORD renew their strength." },
      { ref: "Psalm 27:13-14", note: "Wait for the LORD; be strong and take heart." },
      { ref: "James 5:7-8", note: "Be patient like a farmer waiting for rain and harvest." },
      { ref: "Galatians 6:9", note: "Don't grow weary in doing good — harvest comes in due season." },
      { ref: "Romans 8:24-25", note: "We wait for what we don't see, with patience." },
      { ref: "Ecclesiastes 3:1-8", note: "A season for everything under heaven." },
      { ref: "2 Peter 3:8-9", note: "God's 'slowness' is patience — He wants none to perish." },
      { ref: "Psalm 130:5-6", note: "I wait for the LORD more than watchmen wait for morning." }
    ],
    questions: {
      opening: ["Where are you most impatient: traffic, slow walkers, slow internet, or slow answers to prayer?"],
      observation: ["What images do these passages use for waiting (farmer, watchman, eagle)? What does each add?", "In 2 Peter 3:9, what's God doing during the delay?"],
      interpretation: ["Is biblical waiting passive? What do the farmer and watchman *do* while they wait?", "How does what you believe about God's character change how you wait?"],
      application: ["What are you waiting on God for right now? Which passage speaks most directly to it?", "What could 'active waiting' look like this month — faithfulness in the meantime?"]
    },
    activities: [
      "Waiting timeline: chart Abraham's (25 yrs), Joseph's (~13 yrs), and David's (~15 yrs) waits — what was God doing in the gap?",
      "Silent minute: practice sixty seconds of literal silent waiting on God, then discuss how hard/rich it was."
    ],
    leaderTips: [
      "Some waits in the room are heavy — infertility, singleness, diagnosis. Honor the ache; don't romanticize waiting.",
      "Keep pointing to God's character in the delay, not just the outcome at the end."
    ],
    prayer: "Lord, we wait for You more than watchmen for the morning. Renew our strength in the waiting room, keep us faithful in the meantime, and teach us to trust Your unhurried love. Amen.",
    related: ["trust", "hope", "suffering", "peace"]
  },
  {
    id: "humility",
    name: "Humility & Pride",
    emoji: "🙇",
    category: "Character & Growth",
    keywords: ["humility", "humble", "pride", "proud", "ego", "arrogance", "arrogant", "meek", "meekness", "self-importance", "servant heart", "lowliness"],
    summary: "God opposes the proud but gives grace to the humble — and the deepest picture of humility is not thinking less of yourself but the downward mobility of Christ Himself.",
    verses: [
      { ref: "Philippians 2:3-11", note: "The mind of Christ: He emptied Himself, taking a servant's form." },
      { ref: "James 4:6-10", note: "God opposes the proud; humble yourselves and He will lift you." },
      { ref: "Proverbs 16:18", note: "Pride goes before destruction." },
      { ref: "Micah 6:8", note: "Act justly, love mercy, walk humbly with your God." },
      { ref: "Luke 14:7-11", note: "Take the lowest seat; the exalted will be humbled." },
      { ref: "Luke 18:9-14", note: "The Pharisee and the tax collector — whose prayer went home justified?" },
      { ref: "1 Peter 5:5-6", note: "Clothe yourselves with humility toward one another." },
      { ref: "John 13:3-15", note: "Knowing His power and position, Jesus picked up a towel." }
    ],
    questions: {
      opening: ["What's the most humbling experience you're willing to admit to this group?"],
      observation: ["In Philippians 2, trace each step downward Jesus takes. Where does it end, and what follows?", "In John 13:3, what does Jesus *know* right before washing feet? Why does that matter?"],
      interpretation: ["How is biblical humility different from insecurity or self-hatred?", "Why does God 'oppose' the proud — what makes pride uniquely serious?"],
      application: ["Where does pride hide in your life — opinions, achievements, comparison, being right?", "What 'towel' could you pick up this week — a low task done for someone with no credit?"]
    },
    activities: [
      "Downward-mobility map: chart Philippians 2:6-11 visually (descent and exaltation) on a whiteboard together.",
      "Secret service challenge: everyone does one hidden act of service this week and tells no one — discuss the itch to be noticed next time."
    ],
    leaderTips: [
      "Humility studies can breed performative humility — keep pointing to Christ rather than technique.",
      "The Luke 18 parable lands hardest on religious people; let it."
    ],
    prayer: "Jesus, You emptied Yourself and took a towel. Unmask our pride, clothe us with humility, and give us Your mind — that in lifting others we find the life You promised. Amen.",
    related: ["service", "pride-of-life", "grace", "wisdom"]
  },
  {
    id: "wisdom",
    name: "Wisdom & Decisions",
    emoji: "🦉",
    category: "Character & Growth",
    keywords: ["wisdom", "wise", "decisions", "decision making", "discernment", "guidance", "direction", "choices", "gods will", "will of god", "crossroads", "counsel", "prudence"],
    summary: "Wisdom begins with the fear of the LORD, is promised generously to those who ask, and is more about becoming the kind of person who chooses well than finding a hidden blueprint.",
    verses: [
      { ref: "James 1:5", note: "Lacking wisdom? Ask God, who gives generously without reproach." },
      { ref: "Proverbs 3:5-6", note: "Trust in the LORD; lean not on your own understanding." },
      { ref: "Proverbs 9:10", note: "The fear of the LORD is the beginning of wisdom." },
      { ref: "Psalm 119:105", note: "Your word is a lamp to my feet." },
      { ref: "Proverbs 15:22", note: "Plans fail without counsel; with many advisers they succeed." },
      { ref: "Romans 12:2", note: "A renewed mind discerns God's good, pleasing, perfect will." },
      { ref: "1 Kings 3:5-12", note: "Solomon asks for a discerning heart — and God is pleased." },
      { ref: "Colossians 1:9-10", note: "Paul's prayer: filled with knowledge of His will in all wisdom." }
    ],
    questions: {
      opening: ["What's the best decision you ever made, and how did you make it?"],
      observation: ["What conditions and promises appear in James 1:5 and Proverbs 3:5-6?", "What could Solomon have asked for in 1 Kings 3 — and what does his request reveal?"],
      interpretation: ["Is God's will mostly a hidden plan to find, or a character to become? What do these passages suggest?", "How do Scripture, prayer, counsel, and circumstances work together in a real decision?"],
      application: ["What decision are you facing now? Which of the four means above have you actually used?", "Who are your 'many advisers' (Prov 15:22)? If you don't have them, who could become one?"]
    },
    activities: [
      "Decision grid: take a real (shareable) decision someone faces and run it through Scripture / prayer / counsel / wisdom-questions together.",
      "Proverbs sprint: each person reads one chapter of Proverbs this week and brings back the single verse they most needed."
    ],
    leaderTips: [
      "Free people from 'missing God's will' paralysis — within God's moral will, He often gives real freedom and delights in wise choosing.",
      "Watch for members using 'seeking wisdom' to postpone obedience on things Scripture is already clear about."
    ],
    prayer: "Father of lights, You give wisdom generously and without reproach — so we're asking. Renew our minds, direct our paths, and make us people who choose what You love. Amen.",
    related: ["trust", "faith", "purpose", "word"]
  },
  {
    id: "gratitude",
    name: "Gratitude & Contentment",
    emoji: "🙏",
    category: "Character & Growth",
    keywords: ["gratitude", "grateful", "thankful", "thanksgiving", "thanks", "contentment", "content", "satisfied", "enough", "comparison", "envy", "jealousy", "appreciation"],
    summary: "'Give thanks in all circumstances' is a command with a secret behind it — contentment isn't found in having everything, but in the One who never leaves, in plenty or in want.",
    verses: [
      { ref: "1 Thessalonians 5:16-18", note: "Rejoice always, pray continually, give thanks in all circumstances." },
      { ref: "Philippians 4:11-13", note: "Paul's learned secret of contentment in every situation." },
      { ref: "Psalm 100", note: "Enter His gates with thanksgiving." },
      { ref: "Colossians 3:15-17", note: "Overflowing with thankfulness — and do everything with gratitude." },
      { ref: "1 Timothy 6:6-8", note: "Godliness with contentment is great gain." },
      { ref: "Luke 17:11-19", note: "Ten healed; one returns. 'Where are the other nine?'" },
      { ref: "Psalm 103:1-5", note: "Bless the LORD, and forget not all His benefits." },
      { ref: "Hebrews 13:5", note: "Keep free from the love of money; be content — He never leaves." }
    ],
    questions: {
      opening: ["What's something small you're genuinely grateful for this week?"],
      observation: ["In Luke 17, what's different about the one leper who returned? What does Jesus say to him?", "In Philippians 4, what circumstances had Paul 'learned' contentment in? Where does his strength come from (v13 in context)?"],
      interpretation: ["'In all circumstances' — how is that different from 'for all circumstances'? Does gratitude deny pain?", "Why is comparison the thief of contentment, and where does it sneak into your life (hint: it's probably an app)?"],
      application: ["Try Psalm 103's discipline: name five 'benefits' you've been forgetting.", "What's one thing you keep telling yourself you need to be content? What would 1 Timothy 6:6-8 say?"]
    },
    activities: [
      "Gratitude alphabet: as a group, name something to thank God for beginning with each letter A–Z.",
      "One-week challenge: write three specific gratitudes daily; report next meeting how it affected mood and prayer."
    ],
    leaderTips: [
      "Gratitude can be preached in a way that silences lament — hold both: honest sorrow and stubborn thanks coexist in the Psalms.",
      "Philippians 4:13 in context is about contentment, not sports — gently restore the verse to its meaning."
    ],
    prayer: "Generous Father, every good gift comes from You. Forgive our nine-lepers forgetfulness. Teach us the secret of contentment and turn our counting of troubles into counting of mercies. Amen.",
    related: ["joy", "money", "peace", "worship"]
  },
  {
    id: "perseverance",
    name: "Perseverance & Endurance",
    emoji: "🏃",
    category: "Character & Growth",
    keywords: ["perseverance", "persevere", "endurance", "endure", "keep going", "quit", "giving up", "finish", "race", "steadfast", "faithfulness", "long obedience", "marathon", "press on"],
    summary: "The Christian life is a marathon run with endurance, eyes fixed on Jesus — the faith that finishes is the faith that's real, and grace sustains every mile.",
    verses: [
      { ref: "Hebrews 12:1-3", note: "Run with endurance, fixing eyes on Jesus, who endured the cross." },
      { ref: "Philippians 3:12-14", note: "Forgetting what's behind, pressing on toward the goal." },
      { ref: "Galatians 6:9", note: "Don't grow weary — harvest comes if we don't give up." },
      { ref: "2 Timothy 4:6-8", note: "'I have fought the good fight, finished the race, kept the faith.'" },
      { ref: "James 1:12", note: "Blessed is the one who perseveres under trial." },
      { ref: "Isaiah 40:28-31", note: "Even youths grow weary — but waiting on the LORD renews strength." },
      { ref: "1 Corinthians 9:24-27", note: "Run to win; discipline like an athlete in training." },
      { ref: "Philippians 1:6", note: "He who began a good work in you will carry it to completion." }
    ],
    questions: {
      opening: ["What's the hardest thing you've ever finished — and what kept you going?"],
      observation: ["In Hebrews 12:1-3, what do runners throw off, and where do they look? What kept Jesus going?", "What athletic images does Paul use in 1 Corinthians 9, and what's the point of each?"],
      interpretation: ["What's the relationship between our effort ('press on') and God's keeping (Phil 1:6)?", "What 'weights' — not even sins, just weights — slow a runner down?"],
      application: ["Where are you closest to quitting right now: a calling, a relationship, a discipline? What would 'one more mile' look like?", "Who's in your 'cloud of witnesses' — and who might need you cheering for them this week?"]
    },
    activities: [
      "Weights and sins: privately list one 'weight' and one 'sin that entangles'; share the weights (safer) and pray over both.",
      "Encouragement relay: write notes to someone in the church who's been serving faithfully and anonymously for years."
    ],
    leaderTips: [
      "Perseverance talk can crush the already-exhausted; pair every 'press on' with Philippians 1:6 grace.",
      "Celebrate small faithfulness in the group — finishing rarely looks dramatic in the middle."
    ],
    prayer: "Author and Perfecter of our faith, You endured the cross for the joy set before You. Strip our weights, renew our strength, and carry to completion what You began in us. Amen.",
    related: ["suffering", "hope", "discipleship", "patience"]
  },
  {
    id: "holiness",
    name: "Holiness & Obedience",
    emoji: "✨",
    category: "Character & Growth",
    keywords: ["holiness", "holy", "obedience", "obey", "sanctification", "purity", "righteousness", "set apart", "consecration", "godliness", "transformation", "christlike"],
    summary: "'Be holy, for I am holy' — holiness is not rule-keeping but being set apart for God, a Spirit-powered transformation into the likeness of the Son who loved us.",
    verses: [
      { ref: "1 Peter 1:14-16", note: "Be holy in all you do, for He is holy." },
      { ref: "Romans 12:1-2", note: "Living sacrifices, transformed by renewed minds." },
      { ref: "John 14:15", note: "'If you love me, keep my commandments' — obedience flows from love." },
      { ref: "2 Corinthians 3:18", note: "Beholding His glory, we're transformed into His image." },
      { ref: "1 Thessalonians 4:3-7", note: "This is God's will: your sanctification." },
      { ref: "Titus 2:11-14", note: "Grace itself trains us to renounce ungodliness." },
      { ref: "Hebrews 12:14", note: "Pursue holiness, without which no one will see the Lord." },
      { ref: "Psalm 24:3-5", note: "Clean hands and a pure heart — who may ascend His hill?" }
    ],
    questions: {
      opening: ["When you hear the word 'holy,' what image comes to mind — and is it appealing or off-putting?"],
      observation: ["In Titus 2:11-14, what does *grace* do? List its verbs.", "According to 2 Corinthians 3:18, how does transformation actually happen?"],
      interpretation: ["How is holiness different from legalism? What's the engine of each?", "Jesus ties obedience to love (John 14:15). How does that reorder the way we think about commands?"],
      application: ["Is there a known area of disobedience you've been renegotiating instead of obeying? What's the next step?", "What are you 'beholding' most hours of your day — and what is it forming you into?"]
    },
    activities: [
      "Input audit: estimate weekly hours spent beholding screens vs. Scripture/prayer; discuss 2 Cor 3:18 implications without shame, with strategy.",
      "Write a 'living sacrifice' card (Rom 12:1): one concrete area offered to God this month, kept in your Bible."
    ],
    leaderTips: [
      "Keep grace first (Titus 2:11 precedes the training) or the study becomes moralism.",
      "Be concrete: holiness lives in calendars, browsers, and mouths — not abstractions."
    ],
    prayer: "Holy God, You set us apart and gave everything to make us Yours. Let grace train us, Your glory transform us, and love make obedience our joy. Amen.",
    related: ["temptation", "discipleship", "worship", "grace"]
  },

  /* ---------------- FAITH ESSENTIALS ---------------- */
  {
    id: "faith",
    name: "Faith & Trust",
    emoji: "🌱",
    category: "Faith Essentials",
    keywords: ["faith", "trust", "believe", "belief", "trusting god", "assurance", "confidence", "mustard seed", "walk by faith", "reliance", "depend"],
    summary: "Faith is the assurance of things hoped for — not a leap in the dark but trust in a proven character, growing from mustard-seed small to mountain-moving through exercise.",
    verses: [
      { ref: "Hebrews 11:1-6", note: "Faith defined — and without it, impossible to please God." },
      { ref: "Proverbs 3:5-6", note: "Trust with all your heart; lean not on your own understanding." },
      { ref: "2 Corinthians 5:7", note: "We walk by faith, not by sight." },
      { ref: "Matthew 17:20", note: "Mustard-seed faith moves mountains." },
      { ref: "Romans 10:17", note: "Faith comes by hearing the word of Christ." },
      { ref: "Mark 4:35-41", note: "'Why are you so afraid? Do you still have no faith?' — Jesus in the storm." },
      { ref: "Psalm 9:10", note: "Those who know Your name trust You — You never forsake seekers." },
      { ref: "Habakkuk 3:17-19", note: "Though the fig tree doesn't blossom — yet I will rejoice." }
    ],
    questions: {
      opening: ["What's something you trust every day without thinking about it (chairs, pilots, elevators)?"],
      observation: ["How does Hebrews 11:1 define faith? What two convictions does verse 6 require?", "In Mark 4, what had the disciples already seen Jesus do? What does the storm reveal?"],
      interpretation: ["Is faith opposed to reason? What's it actually resting on in these passages?", "Habakkuk trusts with zero visible evidence (3:17). How does someone get there?"],
      application: ["Where is God asking you to trust Him beyond what you can see right now?", "Romans 10:17 — faith grows by hearing. What's your actual intake of God's word this season?"]
    },
    activities: [
      "Faith biography: trace one Hebrews 11 hero's story in their original book — what did trusting actually cost and produce?",
      "Trust transfer: write 'I am trusting God with ___' cards; exchange and commit to pray for each other's item all month."
    ],
    leaderTips: [
      "Define faith by its object, not its intensity — weak faith in a strong bridge crosses the river.",
      "Invite honesty about where trust is thin; Mark 9:24 ('help my unbelief') is a legitimate starting point."
    ],
    prayer: "Father, we believe — help our unbelief. Grow our mustard seed, teach us to walk by faith and not by sight, and prove again that those who trust in You are never put to shame. Amen.",
    related: ["doubt", "trust", "hope", "word"]
  },
  {
    id: "prayer",
    name: "Prayer",
    emoji: "🕯️",
    category: "Faith Essentials",
    keywords: ["prayer", "pray", "praying", "intercession", "petition", "lords prayer", "talking to god", "unanswered prayer", "supplication", "quiet time", "devotion"],
    summary: "Prayer is the family privilege of God's children — taught by Jesus, fueled by the Spirit, ranging from persistent asking to silent trust, with a standing invitation to approach boldly.",
    verses: [
      { ref: "Matthew 6:5-13", note: "Jesus teaches the pattern: the Lord's Prayer." },
      { ref: "Philippians 4:6-7", note: "In everything, by prayer with thanksgiving, present requests." },
      { ref: "1 Thessalonians 5:16-18", note: "Pray without ceasing." },
      { ref: "Luke 11:5-13", note: "Persistent asking — how much more will the Father give?" },
      { ref: "James 5:13-16", note: "The prayer of a righteous person is powerful and effective." },
      { ref: "Romans 8:26-27", note: "The Spirit helps our weakness, interceding with groanings." },
      { ref: "Matthew 7:7-11", note: "Ask, seek, knock." },
      { ref: "Psalm 62:8", note: "Pour out your hearts to Him; God is our refuge." }
    ],
    questions: {
      opening: ["Honestly: what's your biggest obstacle to praying — time, distraction, doubt, or not knowing what to say?"],
      observation: ["Break the Lord's Prayer into its requests. What comes before 'give us'? What proportions do you notice?", "In Luke 11, what's the point of the friend-at-midnight story — is God reluctant?"],
      interpretation: ["What does 'pray without ceasing' actually mean for someone with a job and kids?", "Why does God want us to ask for things He already knows we need?"],
      application: ["Which line of the Lord's Prayer does your prayer life skip most? Pray it daily this week.", "What have you stopped praying for that Luke 11 says to keep knocking about?"]
    },
    activities: [
      "Pray the Lord's Prayer phrase-by-phrase: pause after each line for anyone to add their own sentence on that theme.",
      "Prayer-walk the neighborhood around your meeting place for fifteen minutes in pairs.",
      "Set up prayer partners with one mid-week check-in text."
    ],
    leaderTips: [
      "Actually pray during the study — a prayer study that's all talk defeats itself. Aim for a third of the time in prayer.",
      "Address unanswered prayer honestly; Paul's thorn (2 Cor 12) and Gethsemane show 'no' and 'not yet' within faithful prayer."
    ],
    prayer: "Our Father in heaven, teach us to pray. Make prayer our first response instead of our last resort, and let Your Spirit help our weakness when words run out. Amen.",
    related: ["faith", "worship", "holy-spirit", "rest"]
  },
  {
    id: "grace",
    name: "Grace & Mercy",
    emoji: "🎁",
    category: "Faith Essentials",
    keywords: ["grace", "mercy", "unmerited favor", "gift", "undeserved", "kindness of god", "gospel", "free gift", "merciful", "compassion of god"],
    summary: "Grace is God's riches at Christ's expense — salvation as a gift, not a wage — and it doesn't stop at conversion: grace trains, sustains, and is sufficient in weakness.",
    verses: [
      { ref: "Ephesians 2:1-10", note: "Dead in sin, made alive — by grace, through faith, for good works." },
      { ref: "Romans 5:6-8", note: "While we were still sinners, Christ died for us." },
      { ref: "2 Corinthians 12:9", note: "'My grace is sufficient for you; my power is perfected in weakness.'" },
      { ref: "Titus 3:4-7", note: "He saved us — not by works, but according to His mercy." },
      { ref: "Luke 15:11-32", note: "The prodigal son: the father runs." },
      { ref: "Lamentations 3:22-23", note: "His mercies never end; new every morning." },
      { ref: "Romans 6:1-2", note: "Shall we sin so grace may abound? By no means!" },
      { ref: "Hebrews 4:16", note: "Approach the throne of grace with confidence." }
    ],
    questions: {
      opening: ["What's the most extravagant gift you've ever received — and how did it feel to receive it?"],
      observation: ["In Ephesians 2:1-10, list what we were, what God did, and why. Where do works appear — before or after grace?", "In Luke 15, count the father's actions when he sees the son. Which did the son expect?"],
      interpretation: ["Why is receiving grace sometimes harder than earning approval?", "How does Paul answer the objection 'then let's just sin' (Rom 6:1-2)? Why doesn't grace produce carelessness?"],
      application: ["Where are you still trying to earn what God has already given?", "Who in your life needs scandalous, prodigal-father grace from you this week?"]
    },
    activities: [
      "Wage vs. gift: two columns on the board — how life works by wages vs. by gift; sort phrases from Ephesians 2 and Titus 3 into each.",
      "Grace story circle: each person shares two minutes on a moment they experienced unearned kindness (from God or people)."
    ],
    leaderTips: [
      "The recovering legalist and the drifting libertine are both in your group — Romans 6 answers one, Ephesians 2 the other.",
      "Let the prodigal story breathe: read it slowly and aloud; it does its own work."
    ],
    prayer: "God of all grace, while we were still sinners You ran to us. Free us from earning, guard us from presuming, and let Your sufficient grace be our boast in every weakness. Amen.",
    related: ["salvation", "forgiveness", "love", "repentance"]
  },
  {
    id: "salvation",
    name: "Salvation & the Gospel",
    emoji: "✝️",
    category: "Faith Essentials",
    keywords: ["salvation", "saved", "gospel", "cross", "born again", "eternal life", "redemption", "justification", "atonement", "believe in jesus", "good news", "conversion", "new life"],
    summary: "The gospel in one breath: Christ died for our sins, was buried, and rose — and everyone who calls on the name of the Lord will be saved, by grace through faith.",
    verses: [
      { ref: "John 3:16-17", note: "God so loved the world that He gave His only Son." },
      { ref: "Romans 3:23-24", note: "All have sinned — and are justified freely by His grace." },
      { ref: "Romans 6:23", note: "The wages of sin vs. the free gift of God." },
      { ref: "Romans 10:9-13", note: "Confess and believe — everyone who calls will be saved." },
      { ref: "1 Corinthians 15:1-8", note: "The gospel Paul received: died, buried, raised, seen." },
      { ref: "Ephesians 2:8-9", note: "By grace through faith — not works, so no one can boast." },
      { ref: "2 Corinthians 5:17-21", note: "New creation; God making His appeal through us." },
      { ref: "John 14:6", note: "'I am the way, the truth, and the life.'" }
    ],
    questions: {
      opening: ["If a curious friend asked 'what actually is Christianity about?', what would you say in one minute?"],
      observation: ["From Romans 3:23-24 and 6:23: what's the human problem, and what's God's solution?", "What are the non-negotiable facts of the gospel per 1 Corinthians 15:1-8?"],
      interpretation: ["Why must salvation be a gift rather than a wage (Eph 2:8-9)? What would boasting-rights do to heaven?", "What does 'new creation' (2 Cor 5:17) mean for someone's actual Tuesday?"],
      application: ["Have you personally moved from knowing about this to calling on Him (Rom 10:13)? If unsure — tonight is a fine time.", "Who is one person you could share this hope with, and what's a natural next step?"]
    },
    activities: [
      "Gospel in four words: groups distill the message into four words (e.g., God-Man-Christ-Response), then compare and refine.",
      "Testimony workshop: everyone drafts their story in three beats (before / how / since) at 90 seconds total, and practices in pairs."
    ],
    leaderTips: [
      "Never assume everyone in the room is a believer — present the invitation clearly and without pressure.",
      "Be ready to follow up one-on-one with anyone God is moving; have next steps (Bible, baptism conversation, pastor contact) in mind."
    ],
    prayer: "Father, thank You for loving the world enough to give Your Son. Open every heart here to receive the gift, assure the doubting, and send us out as ambassadors of Your appeal. Amen.",
    related: ["grace", "faith", "evangelism", "repentance"]
  },
  {
    id: "hope",
    name: "Hope",
    emoji: "🌅",
    category: "Faith Essentials",
    keywords: ["hope", "hopeful", "future", "promise", "promises", "anchor", "optimism", "expectation", "new morning", "light", "plans"],
    summary: "Biblical hope isn't wishful thinking — it's confident expectation anchored in God's character and Christ's resurrection, an anchor for the soul that does not disappoint.",
    verses: [
      { ref: "Jeremiah 29:11", note: "Plans for welfare and not evil, to give you a future and a hope — spoken into exile." },
      { ref: "Romans 15:13", note: "The God of hope fills you with joy and peace, overflowing by the Spirit." },
      { ref: "Hebrews 6:19", note: "Hope as an anchor for the soul, firm and secure." },
      { ref: "1 Peter 1:3-6", note: "Born again to a living hope through the resurrection." },
      { ref: "Romans 8:28", note: "God works all things together for good for those who love Him." },
      { ref: "Lamentations 3:21-24", note: "'This I call to mind, and therefore I have hope.'" },
      { ref: "Psalm 42:5", note: "Hope in God, for I shall again praise Him." },
      { ref: "Revelation 21:1-5", note: "Behold, I am making all things new." }
    ],
    questions: {
      opening: ["What's something you're looking forward to in the next few months?"],
      observation: ["Jeremiah 29:11 was written to exiles facing seventy more years in Babylon (read v10). How does context change the verse?", "In 1 Peter 1:3, what is our hope 'living' because of?"],
      interpretation: ["How is hope different from optimism? What is each anchored to?", "Romans 8:28 — what does 'good' mean here (see v29)? What does the verse *not* promise?"],
      application: ["What situation in your life most needs re-anchoring to a living hope this week?", "Lamentations hopes by 'calling to mind.' What truths do you need on your mental recall list?"]
    },
    activities: [
      "Anchor illustration: literally draw the Hebrews 6:19 image — what storms are hitting, and what is the chain attached to?",
      "Hope inventory: list what our culture anchors hope to (economy, health, relationships), then test each: can it hold in a storm?"
    ],
    leaderTips: [
      "Rescue Jeremiah 29:11 from coffee mugs by reading its exile context — the true meaning is better, not worse.",
      "For the currently hopeless, pair truth with presence; Romans 15:13 is a prayer you can pray over them by name."
    ],
    prayer: "God of hope, fill us with all joy and peace as we trust You, so that we overflow with hope by the power of the Holy Spirit. Anchor our souls in what cannot be shaken. Amen.",
    related: ["faith", "suffering", "heaven", "grief"]
  },
  {
    id: "holy-spirit",
    name: "The Holy Spirit",
    emoji: "🔥",
    category: "Faith Essentials",
    keywords: ["holy spirit", "spirit", "helper", "comforter", "fruit of the spirit", "gifts", "spiritual gifts", "pentecost", "filled with the spirit", "power", "counselor", "advocate"],
    summary: "The Spirit is not an 'it' but the personal presence of God in believers — Helper, Teacher, Empowerer — producing fruit, distributing gifts, and making Christ known.",
    verses: [
      { ref: "John 14:16-17, 26", note: "The Helper who will be *in* you, teaching and reminding." },
      { ref: "Galatians 5:16-25", note: "Walk by the Spirit; the ninefold fruit." },
      { ref: "Acts 1:8", note: "You will receive power when the Spirit comes — witnesses to the ends of the earth." },
      { ref: "Romans 8:9-16", note: "The Spirit of adoption, by whom we cry 'Abba, Father.'" },
      { ref: "1 Corinthians 12:4-11", note: "Varieties of gifts, same Spirit, for the common good." },
      { ref: "Ephesians 5:18-21", note: "Be (continually) filled with the Spirit." },
      { ref: "John 16:7-15", note: "'It is to your advantage that I go away' — the Spirit glorifies Christ." },
      { ref: "Acts 2:1-4, 38-39", note: "Pentecost: the promise is for you and your children." }
    ],
    questions: {
      opening: ["Growing up, what were you taught (or not taught) about the Holy Spirit?"],
      observation: ["List the fruit in Galatians 5:22-23. Fruit (singular) with nine flavors — why might that matter?", "In John 16:14, what is the Spirit's central mission?"],
      interpretation: ["Why does Jesus say His leaving is to our *advantage* (John 16:7)?", "What's the difference between having the Spirit (Rom 8:9) and being filled with the Spirit (Eph 5:18)?"],
      application: ["Which fruit is ripest in your life right now? Which is most shriveled? What does 'walking by the Spirit' look like tomorrow morning?", "How might the Spirit want to use your gifting 'for the common good' in this group or church?"]
    },
    activities: [
      "Fruit self-inventory: rate yourself privately 1–5 on each of the nine; share one strength and one growth area.",
      "Gift discovery: have members name gifts they see in *each other* (often more accurate than self-assessment)."
    ],
    leaderTips: [
      "Groups vary widely on gifts (continuationist/cessationist) — keep the study centered on what all agree on: the Spirit's person, fruit, and Christ-glorifying mission.",
      "Guard against both extremes: ignoring the Spirit entirely and chasing experience detached from Scripture."
    ],
    prayer: "Holy Spirit, Helper and Advocate, fill us afresh. Bear Your fruit in our lives, empower our witness, and make Jesus glorious in our eyes and through our hands. Amen.",
    related: ["prayer", "discipleship", "holiness", "evangelism"]
  },
  {
    id: "repentance",
    name: "Repentance & Renewal",
    emoji: "🔄",
    category: "Faith Essentials",
    keywords: ["repentance", "repent", "confession", "confess", "turn", "turning back", "renewal", "revival", "restore", "restoration", "second chance", "backslidden", "return to god", "fresh start"],
    summary: "Repentance is the U-turn at the heart of the gospel — not groveling but coming home, where godly grief leads to life and heaven throws the party.",
    verses: [
      { ref: "1 John 1:8-9", note: "Confess — He is faithful and just to forgive and cleanse." },
      { ref: "Psalm 51:1-12", note: "David's model confession: create in me a clean heart." },
      { ref: "2 Corinthians 7:9-10", note: "Godly grief vs. worldly grief — one leads to life." },
      { ref: "Acts 3:19-20", note: "Repent, that times of refreshing may come." },
      { ref: "Luke 15:17-24", note: "'He came to himself' — and the father ran." },
      { ref: "Joel 2:12-13", note: "Rend your hearts, not your garments; return to the LORD." },
      { ref: "Proverbs 28:13", note: "Concealing sin fails; confessing and forsaking finds mercy." },
      { ref: "Isaiah 1:18", note: "Though your sins are like scarlet, they shall be white as snow." }
    ],
    questions: {
      opening: ["What's the best 'second chance' story you know — from history, film, or your own life?"],
      observation: ["In Psalm 51, what does David ask God to do? Notice who he says he's sinned against (v4).", "Compare godly and worldly grief in 2 Corinthians 7:10. What does each produce?"],
      interpretation: ["What's the difference between repentance and mere regret? Between confession and excuse-making?", "Why does concealing sin never work (Prov 28:13) — psychologically and spiritually?"],
      application: ["Is there anything you've been concealing that's quietly costing you? What would Proverbs 28:13-style confession look like?", "'Times of refreshing' (Acts 3:19): what might God want to renew in you this season?"]
    },
    activities: [
      "Pray Psalm 51 line by line as a group, personalizing each phrase silently.",
      "Whiteboard the prodigal's journey (Luke 15) in stages; mark where 'coming to himself' happened and what triggered it."
    ],
    leaderTips: [
      "Keep the father's running front and center — repentance preached without grace produces hiding, not honesty.",
      "Offer a next step for anyone convicted tonight: a private conversation, a confession to a trusted friend, restitution where needed."
    ],
    prayer: "Merciful Father, we've wandered and You've watched the road. Give us godly grief that leads to life, courage to confess, and the joy of Your salvation restored. Run to meet us. Amen.",
    related: ["grace", "salvation", "temptation", "holiness"]
  },

  /* ---------------- LIFE & PURPOSE ---------------- */
  {
    id: "purpose",
    name: "Purpose & Calling",
    emoji: "🧭",
    category: "Life & Purpose",
    keywords: ["purpose", "calling", "meaning", "why am i here", "vocation", "mission", "destiny", "plan for my life", "direction", "significance", "gifts", "passion"],
    summary: "You are God's workmanship, created for good works prepared in advance — purpose is less a job title to find than a Person to follow and a neighbor to serve.",
    verses: [
      { ref: "Ephesians 2:10", note: "His workmanship, created for good works prepared beforehand." },
      { ref: "Jeremiah 1:4-8", note: "Known and appointed before birth; 'do not say I am only a youth.'" },
      { ref: "Psalm 139:13-16", note: "Knit together; all your days written in His book." },
      { ref: "Matthew 5:13-16", note: "Salt and light — let your works point to the Father." },
      { ref: "Colossians 3:23-24", note: "Whatever you do, work heartily as for the Lord." },
      { ref: "Romans 12:4-8", note: "Different gifts according to grace — use them." },
      { ref: "Micah 6:8", note: "What does the LORD require? Justice, mercy, humility." },
      { ref: "Matthew 28:18-20", note: "The Great Commission: every disciple's shared calling." }
    ],
    questions: {
      opening: ["As a kid, what did you want to be when you grew up? How close did you land?"],
      observation: ["In Ephesians 2:10, who prepared the works, and when? What does that imply about finding them?", "What excuses does Jeremiah offer in chapter 1, and how does God answer them?"],
      interpretation: ["How much of your calling is already revealed (Micah 6:8, Matt 28:19) vs. still to discern? What's the ratio?", "Does Colossians 3:23 flatten the sacred/secular divide? Can spreadsheets be ministry?"],
      application: ["What good work might be 'prepared in advance' sitting in front of you right now, disguised as ordinary?", "Name your top gift (or let the group name it). Where is it currently benefiting others — or idling?"]
    },
    activities: [
      "Venn of calling: three circles — gifts, burdens/passions, needs around you. Everyone fills theirs in and shares the overlap.",
      "Ordinary-work interviews: pair up and ask, 'How could your actual Monday job be done *as for the Lord* this week?'"
    ],
    leaderTips: [
      "Deflate the pressure of 'finding THE one purpose' — Scripture's revealed callings cover 90% of the question.",
      "Watch for members in painful jobs or unemployment; Colossians 3:23 dignifies, but don't use it to dismiss real vocational distress."
    ],
    prayer: "Creator God, You knit us together and prepared good works for our hands. Open our eyes to the assignments hiding in our ordinary days, and make our whole lives an offering. Amen.",
    related: ["wisdom", "service", "work", "identity"]
  },
  {
    id: "work",
    name: "Work & Rest",
    emoji: "⚖️",
    category: "Life & Purpose",
    keywords: ["work", "job", "career", "sabbath", "rest", "burnout", "hustle", "workaholic", "balance", "labor", "vocation", "busy", "busyness", "overwork", "margin"],
    summary: "Work is pre-Fall good and rest is God-commanded — the rhythm of six-and-one is a gift and a protest against both laziness and the idolatry of hustle.",
    verses: [
      { ref: "Genesis 2:2-3, 15", note: "God works, God rests, and God gives Adam work — all before the Fall." },
      { ref: "Exodus 20:8-11", note: "The Sabbath command, grounded in creation's rhythm." },
      { ref: "Colossians 3:23-24", note: "Work heartily, as for the Lord and not for men." },
      { ref: "Matthew 11:28-30", note: "'Come to me… and I will give you rest.'" },
      { ref: "Psalm 127:1-2", note: "Unless the LORD builds, laborers labor in vain; He gives sleep to His beloved." },
      { ref: "Ecclesiastes 2:24-25", note: "Finding satisfaction in work is a gift from God's hand." },
      { ref: "Mark 6:30-32", note: "Jesus tells busy disciples: 'Come away and rest a while.'" },
      { ref: "Proverbs 6:6-11", note: "Consider the ant — a word to the sluggard." }
    ],
    questions: {
      opening: ["Workaholic, balanced, or professional procrastinator — where do you honestly fall?"],
      observation: ["In Genesis 2, what comes before the Fall: work, rest, or both? What does that establish?", "What does Psalm 127:2 call 'rising early and going late to rest' when God's not in it?"],
      interpretation: ["What is Sabbath actually for? Is it a rule, a gift, or an act of trust — and what does skipping it declare?", "How does 'working for the Lord' change work that feels meaningless?"],
      application: ["What would a real day of rest look like in your week — and what's stopping it?", "Which do you need to repent of this season: laziness or hustle-idolatry?"]
    },
    activities: [
      "Design your Sabbath: each person sketches an actual, realistic day of rest (what's in, what's out) and shares it.",
      "Calendar audit: bring calendars; find and protect one weekly two-hour 'come away' slot (Mark 6:31)."
    ],
    leaderTips: [
      "Both messages are needed in every room: the ant for some, the Sabbath for others. Don't preach only your own imbalance.",
      "Shift Sabbath from legalism to trust: resting means believing God runs the world without our input for a day."
    ],
    prayer: "Lord of the Sabbath, You work and You rest, and You made us for both. Bless the work of our hands, break our hustle-idols, and teach us the rest that trusts You. Amen.",
    related: ["purpose", "peace", "money", "gratitude"]
  },
  {
    id: "money",
    name: "Money & Generosity",
    emoji: "💰",
    category: "Life & Purpose",
    keywords: ["money", "finances", "financial", "giving", "generosity", "generous", "tithe", "tithing", "stewardship", "wealth", "greed", "debt", "possessions", "materialism", "budget", "treasure"],
    summary: "Jesus talked about money constantly — because treasure and heart travel together. Scripture calls us to contentment, stewardship, and cheerful, kingdom-first generosity.",
    verses: [
      { ref: "Matthew 6:19-24", note: "Treasure in heaven; you cannot serve both God and money." },
      { ref: "1 Timothy 6:6-10, 17-19", note: "The love of money's dangers; commands for the rich." },
      { ref: "2 Corinthians 9:6-8", note: "God loves a cheerful giver — and supplies the seed." },
      { ref: "Proverbs 3:9-10", note: "Honor the LORD with your firstfruits." },
      { ref: "Malachi 3:10", note: "'Test me in this' — the storehouse challenge." },
      { ref: "Luke 12:13-21", note: "The rich fool: bigger barns, bankrupt soul." },
      { ref: "Acts 20:35", note: "More blessed to give than to receive." },
      { ref: "Luke 16:10-13", note: "Faithful with little, faithful with much." }
    ],
    questions: {
      opening: ["What money habit — good or bad — did you inherit from your family?"],
      observation: ["In Matthew 6:21, which direction does the arrow point: does treasure follow the heart, or heart follow treasure?", "What exactly is the rich fool's error in Luke 12 — earning, saving, or something else?"],
      interpretation: ["Why can't we serve both God and money? What does money-as-master demand?", "1 Timothy 6:17 targets 'hope set on riches.' Where does financial security shade into misplaced hope?"],
      application: ["Look at your last month's spending (privately): what does it say your treasure is?", "What's one step up in generosity you could take this quarter — amount, regularity, or cheerfulness?"]
    },
    activities: [
      "Heart-map: list your top five spending categories privately, then reflect — where is my heart, per Matthew 6:21?",
      "Group generosity project: pool a modest gift for a real local need and deliver it together."
    ],
    leaderTips: [
      "Never ask people to disclose income or giving amounts — keep application private and principled.",
      "Room likely contains both wealth-guilt and money-anxiety; Scripture addresses greed AND worry (Matt 6 covers both)."
    ],
    prayer: "Provider God, everything we have is Yours on loan. Break money's grip on our hearts, grow cheerful generosity in us, and store our treasure where thieves can't reach. Amen.",
    related: ["gratitude", "trust", "work", "service"]
  },
  {
    id: "identity",
    name: "Identity in Christ",
    emoji: "🪞",
    category: "Life & Purpose",
    keywords: ["identity", "who am i", "self worth", "worth", "value", "image of god", "child of god", "self esteem", "insecurity", "comparison", "adopted", "chosen", "beloved", "enough"],
    summary: "Before you do anything, you are someone: made in God's image, and in Christ — chosen, adopted, forgiven, and beloved. Identity received beats identity achieved.",
    verses: [
      { ref: "Genesis 1:26-27", note: "Made in the image of God — the floor of human worth." },
      { ref: "Ephesians 1:3-8", note: "Chosen before the foundation of the world; adopted; redeemed." },
      { ref: "John 1:12", note: "To all who received Him: the right to become children of God." },
      { ref: "2 Corinthians 5:17", note: "In Christ: a new creation. The old has gone." },
      { ref: "Romans 8:15-17", note: "The Spirit of adoption — heirs with Christ." },
      { ref: "1 Peter 2:9-10", note: "A chosen people, royal priesthood, God's own possession." },
      { ref: "Galatians 2:20", note: "No longer I who live, but Christ who lives in me." },
      { ref: "Zephaniah 3:17", note: "He rejoices over you with singing." }
    ],
    questions: {
      opening: ["When someone asks 'tell me about yourself,' what do you lead with — and why that?"],
      observation: ["In Ephesians 1:3-8, list every phrase describing what believers are or have. When was choosing done (v4)?", "What identities does 1 Peter 2:9 stack up? To whom were these titles originally given?"],
      interpretation: ["What's the difference between identity achieved (résumé) and identity received (adoption)? Which is more secure, and why?", "How does 'image of God' (Gen 1:27) ground the worth of people who can't perform — the unborn, disabled, elderly?"],
      application: ["What false identity-source do you reach for most: achievement, appearance, approval, or acquisition?", "Which 'in Christ' statement do you most need to believe this week? Put it somewhere you'll see daily."]
    },
    activities: [
      "'I am' list: compile every 'in Christ' identity statement from tonight's passages on one page; everyone takes a copy home.",
      "Label tear-off: write a false label you've worn on paper ('failure,' 'not enough'), then physically replace it with a biblical one."
    ],
    leaderTips: [
      "This topic touches deep wounds (parents' words, old failures) — allow silence and keep Kleenex handy.",
      "Anchor everything in texts, not pep-talk; self-esteem fades, adoption doesn't."
    ],
    prayer: "Abba Father, before we did anything, You chose us, adopted us, and sang over us. Tear off every false label and settle our hearts in who You say we are. Amen.",
    related: ["grace", "salvation", "purpose", "loneliness"]
  },
  {
    id: "service",
    name: "Serving Others",
    emoji: "🧺",
    category: "Life & Purpose",
    keywords: ["service", "serving", "serve", "volunteer", "helping", "help others", "ministry", "hands and feet", "good works", "compassion", "poor", "needy", "justice", "outreach", "missions"],
    summary: "The Son of Man came not to be served but to serve — and He counts a cup of cold water to 'the least of these' as done for Him personally.",
    verses: [
      { ref: "Mark 10:42-45", note: "Greatness redefined: the servant of all." },
      { ref: "Matthew 25:31-40", note: "'You did it to me' — the least of these." },
      { ref: "John 13:12-17", note: "I have set you an example: wash feet." },
      { ref: "Galatians 5:13", note: "Free — in order to serve one another in love." },
      { ref: "1 Peter 4:10-11", note: "Use your gift to serve, as good stewards of God's grace." },
      { ref: "Isaiah 58:6-11", note: "The fast God chooses: loose chains, feed the hungry — then light rises." },
      { ref: "James 2:14-17", note: "Faith without works is dead." },
      { ref: "Proverbs 19:17", note: "Kindness to the poor lends to the LORD." }
    ],
    questions: {
      opening: ["Who has served you in a way you've never forgotten?"],
      observation: ["In Matthew 25, what six needs are named? What surprises both groups in the parable?", "In Mark 10, what triggers Jesus' teaching, and how does He contrast kingdoms?"],
      interpretation: ["'You did it to me' — how does seeing Christ in the needy change service from charity to worship?", "How do Galatians 5:13 and James 2 fit with salvation by grace alone?"],
      application: ["Which Matthew 25 need is nearest to you geographically — and what's one concrete response?", "Where are you serving out of gifting and joy vs. guilt? What might God want to adjust?"]
    },
    activities: [
      "Serve instead of study: skip one meeting for a group service project (food bank, widow's yard, shelter meal) and debrief after.",
      "Asset map: list the group's collective skills, then match them to one real need in your church or neighborhood."
    ],
    leaderTips: [
      "The best study on serving ends with a calendar date, not a warm feeling — schedule the project before people leave.",
      "Watch for burnout servers too; Mark 6:31 people need permission to rest, not another guilt trip."
    ],
    prayer: "Servant King, You knelt with a towel and called us to follow. Open our eyes to the least of these near us, and turn our faith into hands and feet this week. Amen.",
    related: ["love", "humility", "community", "money"]
  },
  {
    id: "evangelism",
    name: "Sharing Your Faith",
    emoji: "📣",
    category: "Life & Purpose",
    keywords: ["evangelism", "witness", "witnessing", "sharing faith", "share the gospel", "great commission", "missions", "testimony", "outreach", "unbelievers", "seekers", "tell others"],
    summary: "The Great Commission belongs to every disciple — sharing faith with gentleness and respect, ready to give a reason for hope, as ambassadors through whom God makes His appeal.",
    verses: [
      { ref: "Matthew 28:18-20", note: "All authority — therefore go, make disciples." },
      { ref: "1 Peter 3:15", note: "Ready to give a reason — with gentleness and respect." },
      { ref: "Romans 1:16", note: "Not ashamed: the gospel is God's power for salvation." },
      { ref: "Acts 1:8", note: "Witnesses in Jerusalem, Judea, Samaria, and to the ends of the earth." },
      { ref: "2 Corinthians 5:18-20", note: "Ambassadors for Christ — God making His appeal through us." },
      { ref: "Colossians 4:2-6", note: "Pray for open doors; let speech be gracious, seasoned with salt." },
      { ref: "John 4:7-30, 39-42", note: "Jesus with the Samaritan woman: dignity, honesty, and a town changed." },
      { ref: "Romans 10:14-15", note: "How will they hear without someone telling them?" }
    ],
    questions: {
      opening: ["Who first told you about Jesus, and what do you remember about how they did it?"],
      observation: ["In Matthew 28:18-20, what surrounds the command 'go' — what comes before and after it?", "How does Jesus open the conversation in John 4? Who's asking whom for help?"],
      interpretation: ["Why do 'gentleness and respect' (1 Pet 3:15) matter as much as having answers?", "What makes us ashamed or afraid (Rom 1:16)? What did Paul know that steadied him?"],
      application: ["Write your 'Jerusalem list': three people you already know and love who are far from God. Commit to pray daily for them.", "What's one 'open door' (Col 4:3) currently in your life — a conversation waiting to happen?"]
    },
    activities: [
      "Testimony in 90 seconds: draft and practice your before/how/since story in pairs until it's natural.",
      "Question night: brainstorm the hardest questions your friends actually ask, and workshop honest, humble responses together."
    ],
    leaderTips: [
      "Replace guilt with prayer and practice — most silence comes from fear of not knowing what to say; rehearsal fixes that.",
      "Celebrate spiritual conversations, not just conversions; faithfulness is ours, fruit is God's."
    ],
    prayer: "Lord of the harvest, You've made us ambassadors. Give us open doors, gracious words, and love for the people on our lists. And send workers — starting with us. Amen.",
    related: ["salvation", "purpose", "holy-spirit", "love"]
  },
  {
    id: "justice",
    name: "Justice & Compassion",
    emoji: "⚖️",
    category: "Life & Purpose",
    keywords: ["justice", "injustice", "oppression", "poor", "poverty", "orphan", "widow", "refugee", "mercy ministry", "fairness", "advocacy", "righteousness", "social", "vulnerable", "marginalized"],
    summary: "Justice isn't a side topic — it's what the LORD requires: defending the fatherless, welcoming the stranger, and letting justice roll down like waters, because our God loves justice.",
    verses: [
      { ref: "Micah 6:8", note: "Do justice, love mercy, walk humbly." },
      { ref: "Isaiah 1:16-17", note: "Learn to do good; seek justice; defend the fatherless." },
      { ref: "Amos 5:21-24", note: "God rejects worship divorced from justice." },
      { ref: "Proverbs 31:8-9", note: "Speak up for those who cannot speak for themselves." },
      { ref: "Zechariah 7:9-10", note: "True justice: don't oppress the widow, orphan, foreigner, or poor." },
      { ref: "Luke 4:16-21", note: "Jesus' mission statement: good news to the poor, freedom for the oppressed." },
      { ref: "James 1:27", note: "Religion God accepts: visit orphans and widows in distress." },
      { ref: "Psalm 146:5-9", note: "The LORD who upholds the oppressed, feeds the hungry, watches over sojourners." }
    ],
    questions: {
      opening: ["What injustice — local or global — stirs you most when you read about it?"],
      observation: ["List the specific groups God names across these passages. Why these four again and again?", "In Amos 5, what does God say about worship when justice is absent? How strong is the language?"],
      interpretation: ["How do justice and mercy differ, and why does Micah 6:8 require both?", "Is Luke 4's 'good news to the poor' spiritual, material, or both? Defend from the text."],
      application: ["Who are the 'widow, orphan, stranger, poor' within ten minutes of where this group meets?", "What can this group do that none of us could do alone — one shared act of Proverbs 31:8 advocacy or James 1:27 presence?"]
    },
    activities: [
      "Community exegesis: research (before the meeting) three actual needs in your zip code; discuss which the group will engage.",
      "Partner spotlight: invite someone from a local ministry to the poor to share for ten minutes and name real ways to help."
    ],
    leaderTips: [
      "Keep the study rooted in texts, not partisan frames — Scripture's justice vision predates and outlasts every platform.",
      "Move from sentiment to commitment: pick one sustained engagement over scattered one-offs."
    ],
    prayer: "God of justice, You uphold the oppressed and watch over the stranger. Break our hearts for what breaks Yours, and let justice roll down through our hands and voices. Amen.",
    related: ["service", "love", "money", "community"]
  },

  /* ---------------- GOD & WORSHIP ---------------- */
  {
    id: "worship",
    name: "Worship & Praise",
    emoji: "🎶",
    category: "God & Worship",
    keywords: ["worship", "praise", "adoration", "singing", "music", "glorify", "exalt", "magnify", "hallelujah", "psalms", "awe", "reverence"],
    summary: "Worship is the soul's right response to who God is — in spirit and truth, with singing and silence, gathering and scattering — a whole life presented as a living sacrifice.",
    verses: [
      { ref: "Psalm 95:1-7", note: "Come, sing, kneel — for He is our God and we are His people." },
      { ref: "John 4:23-24", note: "True worshipers worship in spirit and truth." },
      { ref: "Romans 12:1", note: "Your body a living sacrifice — spiritual worship." },
      { ref: "Psalm 100", note: "Enter with thanksgiving; His steadfast love endures forever." },
      { ref: "Revelation 4:8-11", note: "The throne room: worthy is the Lord to receive glory." },
      { ref: "Colossians 3:16", note: "Psalms, hymns, spiritual songs — with gratitude in your hearts." },
      { ref: "Psalm 34:1-3", note: "I will bless the LORD at all times; magnify Him with me." },
      { ref: "Hebrews 13:15", note: "A continual sacrifice of praise — the fruit of lips." }
    ],
    questions: {
      opening: ["Describe a moment — in church or outside it — when worship felt completely real to you."],
      observation: ["In Psalm 95, list the postures and actions of worship. What reasons ('for…') are given?", "What two qualities does Jesus name in John 4:23-24, and what might each guard against?"],
      interpretation: ["If worship is 'in spirit and truth,' what happens when we have truth without spirit? Spirit without truth?", "How is Romans 12:1 worship different from Sunday singing? What does it include?"],
      application: ["What competes hardest for your worship — what do you 'magnify' when you're not thinking about it?", "What's one way to worship this week outside a church service?"]
    },
    activities: [
      "Psalm-writing: everyone writes a four-line psalm of praise using Psalm 100's structure (call, reason, call, reason) and reads it aloud.",
      "A cappella verse: sing one simple chorus or doxology together — no instruments, no performance."
    ],
    leaderTips: [
      "Broaden worship beyond music without dismissing music — both/and, not either/or.",
      "Worship styles divide groups quickly; keep focus on the Object of worship, not preferences."
    ],
    prayer: "Worthy are You, Lord, to receive glory and honor and power. Tune our hearts to sing Your praise, and make our whole lives — bodies, calendars, words — true worship. Amen.",
    related: ["gratitude", "prayer", "holiness", "joy"]
  },
  {
    id: "peace",
    name: "Peace",
    emoji: "🕊️",
    category: "God & Worship",
    keywords: ["peace", "peaceful", "calm", "shalom", "tranquility", "peace of mind", "still", "stillness", "quiet", "serenity", "rest for the soul"],
    summary: "Shalom is more than quiet — it's wholeness with God, others, and ourselves, guarded by a peace that surpasses understanding and given by the Prince of Peace Himself.",
    verses: [
      { ref: "John 14:27", note: "'My peace I give you — not as the world gives.'" },
      { ref: "Philippians 4:6-9", note: "The peace of God guards hearts and minds." },
      { ref: "Isaiah 26:3", note: "Perfect peace for the mind stayed on You." },
      { ref: "Psalm 46:10", note: "Be still, and know that I am God." },
      { ref: "Romans 5:1", note: "Justified by faith, we have peace *with* God." },
      { ref: "Colossians 3:15", note: "Let the peace of Christ rule in your hearts." },
      { ref: "Numbers 6:24-26", note: "The blessing: the LORD lift His face on you and give you peace." },
      { ref: "Psalm 4:8", note: "In peace I will lie down and sleep — You alone make me dwell safely." }
    ],
    questions: {
      opening: ["Where's your most peaceful place on earth — and when were you last there?"],
      observation: ["What's the difference between peace *with* God (Rom 5:1) and the peace *of* God (Phil 4:7)?", "In Isaiah 26:3, what's the condition attached to 'perfect peace'?"],
      interpretation: ["How does the world 'give' peace (John 14:27) — and why doesn't it last?", "What does it mean for peace to 'rule' (literally: umpire) in your heart (Col 3:15)?"],
      application: ["What's your mind 'stayed on' during idle moments — and what would re-staying it look like?", "Practice Psalm 4:8 this week: end each day naming one way God kept you. Report back."]
    },
    activities: [
      "Two minutes of actual stillness (Ps 46:10) — no phones, no talking — then discuss why silence is so hard for us.",
      "Speak Numbers 6:24-26 over each other in pairs, by name, as a closing blessing."
    ],
    leaderTips: [
      "Distinguish peace from conflict-avoidance and from circumstances — biblical peace coexists with storms.",
      "The stillness exercise feels awkward and then profound; don't skip it."
    ],
    prayer: "Prince of Peace, still the noise in us. Give the peace the world can't give and can't take, and let it stand guard over every heart in this room tonight. Amen.",
    related: ["anxiety", "rest", "trust", "hope"]
  },
  {
    id: "joy",
    name: "Joy",
    emoji: "😊",
    category: "God & Worship",
    keywords: ["joy", "joyful", "happiness", "happy", "rejoice", "rejoicing", "delight", "gladness", "cheer", "celebration", "abundant life"],
    summary: "Joy is deeper than happiness and tougher than circumstances — commanded in prison letters, rooted in belonging to God, and offered as strength for the journey.",
    verses: [
      { ref: "Philippians 4:4", note: "Rejoice in the Lord always — written from prison." },
      { ref: "Nehemiah 8:10", note: "The joy of the LORD is your strength." },
      { ref: "John 15:9-11", note: "'That my joy may be in you, and your joy may be full.'" },
      { ref: "Psalm 16:11", note: "In Your presence is fullness of joy." },
      { ref: "Galatians 5:22", note: "Joy: fruit of the Spirit, not of circumstances." },
      { ref: "Habakkuk 3:17-18", note: "Though everything fails — yet I will rejoice in the LORD." },
      { ref: "Psalm 30:5", note: "Weeping for a night; joy comes with the morning." },
      { ref: "Luke 15:7, 10", note: "Heaven throws parties — joy over one sinner who repents." }
    ],
    questions: {
      opening: ["What reliably brings you joy that costs less than five dollars?"],
      observation: ["Where was Paul when he wrote 'rejoice always'? What does that do to the command?", "In John 15:9-11, what's the pathway Jesus describes to full joy?"],
      interpretation: ["Happiness vs. joy: real distinction or cliché? What do these texts actually indicate?", "How is joy 'strength' (Neh 8:10)? What does joylessness do to endurance?"],
      application: ["What's currently draining your joy — and is it a circumstance to endure or an abiding-problem to fix (John 15)?", "Heaven rejoices over repentance (Luke 15). Do our celebrations match heaven's? What should this group throw a party about?"]
    },
    activities: [
      "Joy audit: list the week's activities and mark which fill vs. drain; compare with time actually spent.",
      "Celebration night: plan the next meeting as an actual party celebrating what God has done in the group — with testimonies and good food."
    ],
    leaderTips: [
      "Don't weaponize joy against the sorrowful — Psalm 30:5 honors the weeping night. Joy commands sit beside lament psalms.",
      "Model it: a joyless leader teaching joy is a contradiction the group will notice."
    ],
    prayer: "Father, in Your presence is fullness of joy. Abide in us until Your joy is our strength — unstealable, circumstance-proof, and contagious. Amen.",
    related: ["gratitude", "peace", "hope", "worship"]
  },
  {
    id: "word",
    name: "God's Word & Scripture",
    emoji: "📜",
    category: "God & Worship",
    keywords: ["bible", "scripture", "word of god", "reading the bible", "study", "meditation", "memorize", "memorization", "inspired", "truth", "sword of the spirit", "how to read"],
    summary: "Scripture is God-breathed, living and active, sweeter than honey — a lamp for feet, a sword for battle, and seed for every soil. The question is whether we'll build on it.",
    verses: [
      { ref: "2 Timothy 3:16-17", note: "All Scripture is God-breathed and useful — for a complete equipping." },
      { ref: "Hebrews 4:12", note: "Living and active, sharper than any two-edged sword." },
      { ref: "Psalm 119:9-16", note: "Hidden in the heart; delighted in; not forgotten." },
      { ref: "Psalm 1:1-3", note: "Meditating day and night — a tree planted by streams." },
      { ref: "Joshua 1:8", note: "Meditate on it day and night, to do all that's written." },
      { ref: "Matthew 7:24-27", note: "Hearing AND doing: the house on the rock." },
      { ref: "Isaiah 55:10-11", note: "His word never returns empty." },
      { ref: "Psalm 19:7-11", note: "Perfect, sure, right, pure — sweeter than honey." }
    ],
    questions: {
      opening: ["What's your current Bible-reading rhythm — honestly? (No judgment; we're building from wherever we are.)"],
      observation: ["What four uses does 2 Timothy 3:16 list? What's the goal in v17?", "In Matthew 7:24-27, what's identical between the two builders, and what differs?"],
      interpretation: ["What does biblical 'meditation' (Ps 1, Josh 1:8) involve — how is it different from Eastern emptying or casual reading?", "How can a book be 'living and active' (Heb 4:12)? Has a passage ever read *you*?"],
      application: ["What's a realistic next step up in your intake: a plan, a partner, a memorized verse, a listening app?", "Pick one command you've heard many times but not yet done (Matt 7:24). This week, do it."]
    },
    activities: [
      "Manuscript study: print one chapter double-spaced; everyone marks repeated words, connections, and surprises with colored pens.",
      "Memory challenge: as a group, memorize Psalm 1:1-3 over the next month with weekly check-ins."
    ],
    leaderTips: [
      "Guilt has never made anyone love the Bible — taste has (Ps 19:10). Aim the study at delight, not duty.",
      "Give concrete tools: reading plans, audio Bibles, and the group itself as accountability."
    ],
    prayer: "Speak, Lord — Your servants are listening. Give us delight in Your word, understanding as we read, and the will to build our houses on the rock. Amen.",
    related: ["wisdom", "discipleship", "faith", "prayer"]
  },
  {
    id: "discipleship",
    name: "Following Jesus (Discipleship)",
    emoji: "👣",
    category: "God & Worship",
    keywords: ["discipleship", "disciple", "follow jesus", "following", "take up your cross", "spiritual growth", "grow", "growing", "maturity", "mentoring", "abide", "apprentice", "walk with god"],
    summary: "A disciple is an apprentice of Jesus — counting the cost, taking up the cross daily, abiding in the vine, and helping make other disciples along the way.",
    verses: [
      { ref: "Luke 9:23-25", note: "Deny self, take up your cross daily, follow." },
      { ref: "John 15:4-8", note: "Abide in the vine — apart from me, nothing." },
      { ref: "Luke 14:25-33", note: "Count the cost: towers and kings." },
      { ref: "Matthew 4:18-22", note: "'Follow me' — and they left their nets at once." },
      { ref: "2 Timothy 2:1-2", note: "Entrust to faithful people who will teach others also — four generations in one verse." },
      { ref: "Colossians 2:6-7", note: "As you received Christ, so walk in Him — rooted and built up." },
      { ref: "Philippians 3:7-11", note: "Everything counted loss compared to knowing Christ." },
      { ref: "Ephesians 4:11-15", note: "Growing up into maturity, the full stature of Christ." }
    ],
    questions: {
      opening: ["Who taught you a skill by letting you watch and try — a coach, parent, boss? What made them effective?"],
      observation: ["In Luke 9:23, what three verbs describe discipleship, and what's the frequency word?", "In John 15, what's the one command, and what results flow from it?"],
      interpretation: ["What does 'take up your cross' mean concretely — and what has it been reduced to in casual usage?", "Why does Jesus tell crowds to count the cost (Luke 14) — isn't that bad marketing?"],
      application: ["What 'net' might Jesus be asking you to leave — or what daily cross to take up this season?", "2 Timothy 2:2 has four generations (Paul→Timothy→faithful ones→others). Who's discipling you, and who are you discipling? Fill the gaps."]
    },
    activities: [
      "Cost/worth ledger: two columns from Philippians 3 — what following costs vs. what knowing Christ is worth. Fill it as a group.",
      "Discipleship chain: draw your own 2 Tim 2:2 chain — who invested in you, and where does it flow next? Identify one name for the next link."
    ],
    leaderTips: [
      "Keep grace and cost together: cheap discipleship and joyless discipleship are both distortions.",
      "Push for one relationship commitment (a mentor or mentee) as the study's concrete outcome."
    ],
    prayer: "Lord Jesus, You said 'follow me' — so we're coming. Teach us to abide, give us courage for our crosses, and make us disciples who make disciples. Amen.",
    related: ["holiness", "word", "perseverance", "community"]
  },
  {
    id: "heaven",
    name: "Heaven & Eternity",
    emoji: "🌌",
    category: "God & Worship",
    keywords: ["heaven", "eternity", "eternal", "afterlife", "new creation", "resurrection", "second coming", "return of christ", "paradise", "new heavens", "new earth", "glory", "forever", "end times"],
    summary: "Christian hope is not clouds and harps but resurrection and renewal — a new heavens and new earth where God dwells with His people and every tear is wiped away.",
    verses: [
      { ref: "Revelation 21:1-7", note: "New heaven, new earth — God's dwelling with humanity." },
      { ref: "John 14:1-3", note: "'I go to prepare a place for you.'" },
      { ref: "1 Corinthians 15:50-58", note: "Death swallowed in victory; therefore, labor is not in vain." },
      { ref: "2 Corinthians 5:1-8", note: "An eternal house; away from the body, at home with the Lord." },
      { ref: "Philippians 3:20-21", note: "Our citizenship is in heaven; our bodies will be transformed." },
      { ref: "Romans 8:18-25", note: "Creation itself will be set free — groaning as in childbirth." },
      { ref: "Matthew 6:19-21", note: "Store up treasures where nothing corrupts." },
      { ref: "1 Thessalonians 4:16-18", note: "We will always be with the Lord — encourage one another with this." }
    ],
    questions: {
      opening: ["What did you imagine heaven was like when you were seven years old?"],
      observation: ["In Revelation 21:1-7, what comes down, and what's abolished? Who moves toward whom?", "What's the 'therefore' at the end of 1 Corinthians 15:58 — what does resurrection hope produce now?"],
      interpretation: ["How does 'new earth' differ from the escape-to-clouds picture? What happens to creation (Rom 8:21)?", "Paul says these truths are for 'encouraging one another' (1 Thess 4:18). Why does eternity change how we grieve, spend, and risk?"],
      application: ["If you really believed Revelation 21, what would you do differently this year? What would stop scaring you?", "Whose grief could you gently encourage with this hope — and how, without being trite?"]
    },
    activities: [
      "Now/Not-yet lists: what from this life continues (purified) into the new creation, and what's abolished? Debate with texts.",
      "Write a letter to yourself titled 'Living like Revelation 21 is true' — seal it; open in six months."
    ],
    leaderTips: [
      "Avoid speculative rabbit holes (dates, charts) — keep to what the texts clearly promise.",
      "This study lands differently for the grieving and the dying; handle with warmth, and let 1 Thess 4:18 set the tone: comfort, not curiosity."
    ],
    prayer: "Come, Lord Jesus. Until You do, fix our eyes on the city You're preparing, free us to spend our lives boldly, and make us people of unshakable hope. Amen.",
    related: ["hope", "grief", "salvation", "perseverance"]
  },
  {
    id: "creation",
    name: "Creation & God's Glory",
    emoji: "🏔️",
    category: "God & Worship",
    keywords: ["creation", "creator", "nature", "environment", "stewardship of earth", "heavens declare", "genesis", "made", "universe", "stars", "wonder", "beauty", "science and faith"],
    summary: "The heavens declare God's glory without saying a word — creation is the first missionary, humanity its appointed steward, and wonder a doorway to worship.",
    verses: [
      { ref: "Genesis 1:1, 26-31", note: "In the beginning, God — and it was very good." },
      { ref: "Psalm 19:1-4", note: "The heavens declare the glory of God — speech without words." },
      { ref: "Psalm 8", note: "What is man, that You are mindful of him? Crowned with glory." },
      { ref: "Romans 1:20", note: "God's invisible qualities are seen in what has been made." },
      { ref: "Colossians 1:15-17", note: "All things created through Christ and for Him — He holds all together." },
      { ref: "Job 38:1-11", note: "God's tour of creation silences Job — 'Where were you?'" },
      { ref: "Psalm 104:24-30", note: "In wisdom You made them all; the earth is full of Your creatures." },
      { ref: "Genesis 2:15", note: "Placed in the garden to work it and keep it — the stewardship mandate." }
    ],
    questions: {
      opening: ["Where in creation have you felt closest to awe — a specific place or moment?"],
      observation: ["In Psalm 19:1-4, how far does creation's 'speech' reach? What doesn't it use?", "In Colossians 1:15-17, list Christ's relationships to creation: through, for, before, holding."],
      interpretation: ["What can creation teach about God (Rom 1:20) — and what can it *not* teach (why is Scripture needed)?", "How does 'work it and keep it' (Gen 2:15) shape a Christian view of caring for the earth?"],
      application: ["When did you last stop to actually look at the sky (Ps 19)? Build one wonder-walk into this week.", "What's one concrete way to practice Genesis 2:15 stewardship where you live?"]
    },
    activities: [
      "Meet outside: hold the study at a park or overlook; read Psalm 19 and Job 38 in their intended auditorium.",
      "Wonder show-and-tell: everyone brings one photo from nature that moves them and connects it to one of tonight's texts."
    ],
    leaderTips: [
      "Science-and-faith questions may surface; keep the group centered on what all the texts proclaim — Who made it and why — over debates about how and when.",
      "Wonder is the goal; if the group leaves amazed at God, the study worked."
    ],
    prayer: "Creator of heaven and earth, the skies have been preaching Your glory all our lives. Open our eyes to wonder, our mouths to praise, and our hands to keep the garden You entrusted to us. Amen.",
    related: ["worship", "identity", "purpose", "gratitude"]
  },
  {
    id: "trust",
    name: "Trusting God's Plan",
    emoji: "🗺️",
    category: "God & Worship",
    keywords: ["trust", "gods plan", "sovereignty", "control", "surrender", "let go", "providence", "gods timing", "his ways", "plans", "future", "uncertainty", "unknown"],
    summary: "God's ways are higher than ours, His plans stand forever, and He works all things together for good — surrender is not losing control but handing it to Someone competent.",
    verses: [
      { ref: "Proverbs 3:5-6", note: "Trust wholeheartedly; He will make your paths straight." },
      { ref: "Isaiah 55:8-9", note: "My thoughts are not your thoughts — higher, as heavens above earth." },
      { ref: "Romans 8:28", note: "All things work together for good, for those who love God." },
      { ref: "Jeremiah 29:11-13", note: "Plans for a future and a hope — sought wholeheartedly." },
      { ref: "Psalm 37:3-7", note: "Trust, delight, commit, be still — and He will act." },
      { ref: "Genesis 50:20", note: "You meant evil; God meant it for good." },
      { ref: "Proverbs 16:9", note: "The heart plans the way; the LORD establishes the steps." },
      { ref: "Matthew 26:39", note: "'Not as I will, but as You will' — Gethsemane's surrender." }
    ],
    questions: {
      opening: ["Are you a planner or a go-with-the-flow person? How does that shape your walk with God?"],
      observation: ["In Psalm 37:3-7, list the commands in order. Which are actions and which are postures?", "In Genesis 50:20, what two intentions coexist in the same events?"],
      interpretation: ["Does trusting God's plan mean not planning (see Prov 16:9)? What's the relationship?", "Gethsemane shows Jesus asking for another way AND surrendering. What does that model for our hardest prayers?"],
      application: ["What are you gripping most tightly right now? What would 'commit your way' (Ps 37:5) look like for it — specifically?", "Looking back, where has Genesis 50:20 proven true in your own story?"]
    },
    activities: [
      "Open hands prayer: hold fists closed naming what you're gripping, then physically open hands as an act of surrender, one item at a time.",
      "Providence timeline: each person maps their life's three biggest 'detours' and marks where God's weaving is now visible (or still isn't)."
    ],
    leaderTips: [
      "Handle Romans 8:28 and Genesis 50:20 gently around fresh wounds — these truths are for anchoring, not for silencing pain.",
      "Surrender is repetitive, not one-and-done; normalize re-surrendering the same thing weekly."
    ],
    prayer: "Father, Your ways are higher than ours and Your track record is perfect. We open our hands. Not our will, but Yours be done — and give us peace in the not-knowing. Amen.",
    related: ["faith", "patience", "peace", "wisdom"]
  },
  {
    id: "spiritual-warfare",
    name: "Spiritual Warfare",
    emoji: "🛡️",
    category: "God & Worship",
    keywords: ["spiritual warfare", "armor of god", "enemy", "devil", "satan", "demons", "battle", "attack", "resist", "stand firm", "strongholds", "victory", "protection", "evil"],
    summary: "We wrestle not against flesh and blood — but the armor is issued, the enemy is defeated at the cross, and the one in us is greater than the one in the world.",
    verses: [
      { ref: "Ephesians 6:10-18", note: "The full armor of God — and prayer at all times." },
      { ref: "James 4:7", note: "Submit to God, resist the devil, and he will flee." },
      { ref: "1 Peter 5:8-9", note: "Be sober-minded and watchful; resist him, firm in faith." },
      { ref: "2 Corinthians 10:3-5", note: "Weapons with divine power to demolish strongholds." },
      { ref: "1 John 4:4", note: "Greater is He who is in you than he who is in the world." },
      { ref: "Colossians 2:13-15", note: "At the cross He disarmed the powers, triumphing over them." },
      { ref: "Luke 10:17-20", note: "'Rejoice not that spirits submit — but that your names are written in heaven.'" },
      { ref: "Romans 16:20", note: "The God of peace will soon crush Satan under your feet." }
    ],
    questions: {
      opening: ["Do you tend to think about spiritual opposition too much, too little, or about right? (C.S. Lewis said both errors please the enemy.)"],
      observation: ["List each piece of armor in Ephesians 6 and what it represents. Which is the only offensive weapon?", "In James 4:7, what comes before 'resist the devil'? Why is the order crucial?"],
      interpretation: ["What are modern 'strongholds' (2 Cor 10:4-5) — what arguments and thought-patterns set themselves against knowing God?", "How does Colossians 2:15 change the battle's nature — are we fighting *for* victory or *from* it?"],
      application: ["Which piece of armor is hanging in your closet unworn right now?", "Jesus redirects joy in Luke 10:20. Where should our confidence rest when the battle feels intense?"]
    },
    activities: [
      "Armor inventory: for each Ephesians 6 piece, name one concrete practice that 'puts it on' (e.g., belt of truth = confessing honestly).",
      "Stronghold demolition: privately identify one recurring lie you believe; find and write the specific scripture that answers it."
    ],
    leaderTips: [
      "Keep balance: no enemy-obsession, no naïve dismissal. The passages are sober AND confident.",
      "If members carry fear or occult backgrounds, emphasize Colossians 2:15 and 1 John 4:4 — Christ's victory, not technique, is our footing."
    ],
    prayer: "Mighty God, You disarmed the powers at the cross. Dress us in Your armor, keep us watchful and praying, and let us stand — confident that greater is He who is in us. Amen.",
    related: ["prayer", "word", "faith", "temptation"]
  }
];

/* Study format definitions used by the outline builder */
const FORMATS = {
  discussion: {
    label: "Group Discussion",
    sections: [
      { name: "Welcome & Icebreaker", pct: 0.12, icon: "👋", desc: "Open with the icebreaker question. Let everyone's voice be heard once early — it doubles participation later." },
      { name: "Opening Prayer", pct: 0.05, icon: "🙏", desc: "Invite God into the conversation. Keep it short and warm." },
      { name: "Scripture Reading", pct: 0.18, icon: "📖", desc: "Read the key passages aloud — rotate readers. Let the text speak before anyone comments." },
      { name: "Discussion", pct: 0.40, icon: "💬", desc: "Work through observation → interpretation → application questions. Follow the energy; you don't need to finish every question." },
      { name: "Application & Challenge", pct: 0.13, icon: "🎯", desc: "Land the plane: each person names one concrete takeaway for the week." },
      { name: "Prayer & Close", pct: 0.12, icon: "🕯️", desc: "Share requests and pray — in pairs, popcorn-style, or led. End on time; trust builds when you respect the clock." }
    ]
  },
  inductive: {
    label: "Inductive Study",
    sections: [
      { name: "Welcome & Context", pct: 0.10, icon: "👋", desc: "Brief welcome, then set the scene: who wrote the main passage, to whom, and why." },
      { name: "Opening Prayer", pct: 0.05, icon: "🙏", desc: "Ask for illumination — 'open our eyes to see wonderful things in Your word' (Ps 119:18)." },
      { name: "OBSERVE — What does it say?", pct: 0.25, icon: "🔎", desc: "Read the passage twice. Mark repeated words, contrasts, commands, and connections. No interpreting yet — just look." },
      { name: "INTERPRET — What does it mean?", pct: 0.25, icon: "💡", desc: "Wrestle with the interpretation questions. Use cross-references. What did it mean to the first readers?" },
      { name: "APPLY — What do I do?", pct: 0.20, icon: "🎯", desc: "Move from meaning to life: specific, personal, this-week application." },
      { name: "Prayer & Close", pct: 0.15, icon: "🕯️", desc: "Pray the passage back to God, weaving in each person's application." }
    ]
  },
  devotional: {
    label: "Devotional / Reflective",
    sections: [
      { name: "Gathering & Stillness", pct: 0.10, icon: "🕊️", desc: "Settle in with two minutes of quiet. Light a candle if that helps mark sacred time." },
      { name: "Opening Prayer", pct: 0.05, icon: "🙏", desc: "A simple prayer of openness: 'Speak, Lord, for your servants are listening.'" },
      { name: "Lectio — Slow Reading", pct: 0.25, icon: "📖", desc: "Read the anchor passage aloud three times slowly, different voices. After each: silence. What word or phrase catches you?" },
      { name: "Reflection & Sharing", pct: 0.30, icon: "💭", desc: "Share what stood out — no fixing, no debating, just witnessing what God highlighted for each person." },
      { name: "Journaling / Response", pct: 0.15, icon: "✍️", desc: "Write a short personal response or prayer. Optional soft music." },
      { name: "Closing Blessing", pct: 0.15, icon: "🕯️", desc: "Pray for one another; close by speaking a blessing (e.g., Numbers 6:24-26) over the group." }
    ]
  },
  topical: {
    label: "Topical Deep-Dive",
    sections: [
      { name: "Welcome & Framing", pct: 0.10, icon: "👋", desc: "Introduce the topic and why it matters. Ask: what does our culture say about this?" },
      { name: "Opening Prayer", pct: 0.05, icon: "🙏", desc: "Ask for teachable hearts and honest conversation." },
      { name: "Survey the Scriptures", pct: 0.30, icon: "🗺️", desc: "Divide the verse list among pairs. Each pair reads theirs and reports: what does this passage contribute to the topic?" },
      { name: "Synthesize", pct: 0.20, icon: "🧩", desc: "Build the big picture together: what's the consistent biblical teaching? Where's the tension or mystery?" },
      { name: "Discussion & Application", pct: 0.20, icon: "💬", desc: "Push into the application questions — what changes if we believe this?" },
      { name: "Prayer & Close", pct: 0.15, icon: "🕯️", desc: "Pray the topic over the group's real situations." }
    ]
  }
};

/* Audience-specific leader guidance */
const AUDIENCES = {
  adults:  { label: "Adults", tip: "Draw out life experience — adults learn best when new truth connects to lived stories. Silence usually means thinking, not boredom; count to ten before rescuing a question." },
  youth:   { label: "Youth / Teens", tip: "Keep segments short (nothing over 10 minutes), use movement and humor, and never shame a wrong answer. One honest adult story beats three polished points. Food helps. A lot." },
  college: { label: "College / Young Adults", tip: "Welcome hard questions and doubt openly — authenticity is the price of admission. Tie every topic to decisions they're actually facing: identity, calling, relationships, anxiety." },
  new:     { label: "New Believers", tip: "Define every churchy word (justification, grace, even 'amen'). Show them HOW to find verses — say page numbers or use apps. Celebrate every question; there are no dumb ones." },
  kids:    { label: "Kids", tip: "One big idea per lesson, repeated five ways: story, game, craft, question, prayer. Concrete beats abstract — use objects they can touch. Wiggles are data, not defiance: shorten the segment." },
  mixed:   { label: "Mixed Group", tip: "Aim questions at multiple depths — an entry ramp ('what stood out?') and a deep end ('how does this reshape X?'). Pair newer folks with seasoned ones for readings and prayer." }
};

/* Icebreakers by audience for outline generation */
const ICEBREAKERS = {
  adults: ["If you could have dinner with any biblical figure besides Jesus, who and why?", "What's one highlight and one hard thing from your week?", "What was your first job, and what did it teach you?"],
  youth: ["Would you rather: be able to fly or read minds? Defend your answer.", "What's your most-used emoji and what does it say about you?", "Two truths and a lie — go."],
  college: ["What's the best and worst part of this season of your life?", "If money and grades weren't factors, what would you study or do?", "What's a belief you've changed your mind about in the last few years?"],
  new: ["What made you curious about the Bible or faith?", "If you could ask God one question and get an answer tonight, what would it be?", "What's your story in 60 seconds — where are you from and what brought you here?"],
  kids: ["If you could be any animal God made, which one and why?", "What's your favorite thing you did this week?", "If you built the world's best treehouse, what would be inside?"],
  mixed: ["What's one thing that made you smile this week?", "Share your name and one thing you're hoping to get out of tonight.", "What's a place you've been where you felt God was near?"]
};

/* External resource link builders (topic-aware) */
const RESOURCE_BUILDERS = [
  { name: "OpenBible Topical Search", icon: "🔎", desc: "Community-ranked verses on any topic", url: t => `https://www.openbible.info/topics/${encodeURIComponent(t.name.toLowerCase().split(" ")[0])}` },
  { name: "BibleGateway Keyword Search", icon: "📖", desc: "Search the full text in 200+ translations", url: t => `https://www.biblegateway.com/quicksearch/?quicksearch=${encodeURIComponent(t.name)}&version=NIV` },
  { name: "Blue Letter Bible", icon: "🔤", desc: "Original Greek/Hebrew word studies & commentaries", url: t => `https://www.blueletterbible.org/search/search.cfm?Criteria=${encodeURIComponent(t.name)}&t=NIV` },
  { name: "BibleProject", icon: "🎬", desc: "Short animated videos on biblical themes", url: t => `https://bibleproject.com/search/?q=${encodeURIComponent(t.name.split(" ")[0])}` },
  { name: "GotQuestions", icon: "❓", desc: "Clear articles answering Bible questions", url: t => `https://www.gotquestions.org/search.php?zoom_query=${encodeURIComponent(t.name)}` },
  { name: "Desiring God", icon: "✍️", desc: "Articles, sermons & devotionals", url: t => `https://www.desiringgod.org/search?q=${encodeURIComponent(t.name)}` },
  { name: "Bible Hub", icon: "📚", desc: "Parallel translations, commentaries, interlinear", url: t => `https://biblehub.com/search.php?q=${encodeURIComponent(t.name)}` },
  { name: "Spurgeon Sermon Archive", icon: "🗣️", desc: "Classic sermons, searchable", url: t => `https://www.spurgeon.org/?s=${encodeURIComponent(t.name.split(" ")[0])}` }
];

/* Example search chips shown on the home page */
const EXAMPLES = [
  "dealing with anxiety before big decisions",
  "forgiving someone who hurt me",
  "what does the Bible say about money",
  "our group is grieving a loss",
  "growing closer to God",
  "identity and self-worth for teens",
  "marriage and communication",
  "why does God allow suffering"
];

/* Public-domain translations available for in-page verse text via bible-api.com */
const API_TRANSLATIONS = { WEB: "web", KJV: "kjv", ASV: "asv", BBE: "bbe", DARBY: "darby", YLT: "ylt" };
