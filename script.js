// -------- Data Structures (JS version of your engine) --------
class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let c of word) {
      if (!node.children[c]) node.children[c] = new TrieNode();
      node = node.children[c];
    }
    node.isEnd = true;
  }

  search(prefix) {
    let node = this.root;
    for (let c of prefix) {
      if (!node.children[c]) return [];
      node = node.children[c];
    }
    return this._auto(prefix, node);
  }

  _auto(prefix, node) {
    let res = [];
    if (node.isEnd) res.push(prefix);
    for (let c in node.children) {
      res = res.concat(this._auto(prefix + c, node.children[c]));
    }
    return res;
  }
}

class Bigram {
  constructor() {
    this.map = {};
  }

  add(words) {
    for (let i = 0; i < words.length - 1; i++) {
      const w1 = words[i];
      const w2 = words[i + 1];
      if (!this.map[w1]) this.map[w1] = {};
      this.map[w1][w2] = (this.map[w1][w2] || 0) + 1;
    }
  }

  predict(word) {
    if (!this.map[word]) return null;
    const entries = Object.entries(this.map[word]);
    entries.sort((a, b) => b[1] - a[1]);
    return entries[0][0];
  }
}

class WordGraph {
  constructor() {
    this.graph = {};
  }

  add(a, b) {
    if (!this.graph[a]) this.graph[a] = [];
    if (!this.graph[a].includes(b)) this.graph[a].push(b);
  }

  successors(word) {
    return this.graph[word] || [];
  }
}

class Engine {
  constructor() {
    this.trie = new Trie();
    this.bigram = new Bigram();
    this.graph = new WordGraph();
    this.freq = {};
  }

  addSentence(text) {
    const words = text
      .split(/\s+/)
      .map(w => w.trim().toLowerCase())
      .filter(Boolean);
    if (words.length === 0) return;

    for (let w of words) {
      this.freq[w] = (this.freq[w] || 0) + 1;
      this.trie.insert(w);
    }

    this.bigram.add(words);

    for (let i = 0; i < words.length - 1; i++) {
      this.graph.add(words[i], words[i + 1]);
    }
  }

  topWords(n = 5) {
    const entries = Object.entries(this.freq);
    entries.sort((a, b) => b[1] - a[1]);
    return entries.slice(0, n).map(e => e[0]);
  }
}

// -------- UI Logic --------
const engine = new Engine();

const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

// Analytics elements
const topWordsEl = document.getElementById("topWords");
const suggestionsEl = document.getElementById("suggestions");
const nextWordEl = document.getElementById("nextWord");
const relatedWordsEl = document.getElementById("relatedWords");
const lastPrefixLabel = document.getElementById("lastPrefixLabel");
const relatedLabel = document.getElementById("relatedLabel");

// Add a message bubble
function addMessage(text, sender = "user") {
  const row = document.createElement("div");
  row.className = `message-row ${sender}`;

  const bubble = document.createElement("div");
  bubble.className = "message-bubble";
  bubble.textContent = text;

  row.appendChild(bubble);
  chatBox.appendChild(row);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function renderPills(container, items, secondary = false) {
  container.innerHTML = "";
  container.classList.remove("empty");

  if (!items || items.length === 0) {
    container.textContent = "None";
    container.classList.add("empty");
    return;
  }

  items.forEach(w => {
    const span = document.createElement("span");
    span.className = "pill" + (secondary ? " secondary" : "");
    span.textContent = w;
    container.appendChild(span);
  });
}

function handleSend() {
  const text = userInput.value.trim();
  if (!text) return;

  // User message
  addMessage(text, "user");
  userInput.value = "";

  // Feed into engine
  engine.addSentence(text);

  const words = text
    .split(/\s+/)
    .map(w => w.trim().toLowerCase())
    .filter(Boolean);
  const lastWord = words.length > 0 ? words[words.length - 1] : "";

  // Compute analytics
  const top = engine.topWords(5);
  const sugg = lastWord ? engine.trie.search(lastWord).filter(w => w !== lastWord) : [];
  const next = lastWord ? engine.bigram.predict(lastWord) : null;
  const related = lastWord ? engine.graph.successors(lastWord) : [];

  // Update analytics panel
  renderPills(topWordsEl, top);
  lastPrefixLabel.textContent = `Last word: ${lastWord || "—"}`;
  renderPills(suggestionsEl, sugg, true);
  nextWordEl.textContent = next || "No prediction yet";
  relatedLabel.textContent = `From last word: ${lastWord || "—"}`;
  renderPills(relatedWordsEl, related);

  // Bot summary response
  const botReplyLines = [];
  if (top.length > 0) botReplyLines.push("Top words so far: " + top.join(", "));
  if (sugg.length > 0) botReplyLines.push(`Completions for "${lastWord}": ${sugg.join(", ")}`);
  if (next) botReplyLines.push(`Most likely next word after "${lastWord}" → "${next}"`);
  if (related.length > 0) botReplyLines.push(`Related words (graph) from "${lastWord}": ${related.join(", ")}`);

  const reply =
    botReplyLines.join("\n") ||
    "I've learned from your message. Keep typing more text to see analytics.";

  addMessage(reply, "bot");
}

// -------- Events --------
sendBtn.addEventListener("click", handleSend);

userInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleSend();
  }
});

// Optional: welcome message
addMessage("Hi! I'm the Text Intelligence Engine. Type something and I'll analyze your text using Trie, bigrams, and a word graph.", "bot");
