/* infovore — app.js
 * Pure client-side: no network calls, no backend. Answers, locale and the
 * last result live in localStorage under "infovore." keys only.
 */
(function () {
  "use strict";
  var UI = window.INFOVORE.UI;
  var QUESTIONS = window.INFOVORE.QUESTIONS;
  var ANIMALS = window.INFOVORE.ANIMALS;
  var DIMS = window.INFOVORE.DIMENSIONS; // breadth, depth, novelty, dissent, reach

  /* ---------- scoring (kept in sync with test.mjs) ---------- */
  function attainableMax() {
    var max = { breadth: 0, depth: 0, novelty: 0, dissent: 0, reach: 0 };
    QUESTIONS.forEach(function (q) {
      DIMS.forEach(function (d) {
        var m = 0;
        q.options.forEach(function (o) { m = Math.max(m, o.score[d] || 0); });
        max[d] += m;
      });
    });
    return max;
  }
  var MAX = attainableMax();

  function computeResult(answers) {
    var raw = { breadth: 0, depth: 0, novelty: 0, dissent: 0, reach: 0 };
    var near = 0;
    answers.forEach(function (optId, i) {
      var q = QUESTIONS[i];
      if (!q) return;
      var opt = null;
      q.options.forEach(function (o) { if (o.id === optId) opt = o; });
      if (!opt) return;
      DIMS.forEach(function (d) { raw[d] += opt.score[d] || 0; });
      near += opt.score.near || 0;
    });
    var norm = {};
    DIMS.forEach(function (d) { norm[d] = MAX[d] ? Math.round((raw[d] / MAX[d]) * 100) : 0; });
    if (near >= 4 && norm.reach > 35) norm.reach = 35; // near cap, per SPEC
    return { raw: raw, scores: norm, near: near, animal: assignAnimal(norm) };
  }

  // Rule order is part of the design (SPEC §3): first match wins, otter is the fallback.
  function assignAnimal(s) {
    if (s.depth >= 75 && s.breadth <= 35 && s.novelty <= 45) return "frog_scholar";
    if (s.reach >= 75 && s.breadth >= 60 && s.depth < 70) return "migrant";
    if (s.breadth >= 70 && s.depth <= 40) return "hummingbird";
    if (s.novelty >= 70 && s.dissent >= 65 && s.breadth >= 55) return "fox";
    if (s.depth >= 70 && s.reach >= 60) return "whale";
    if (s.depth >= 65 && s.novelty >= 60 && s.breadth < 60) return "owl";
    if (s.reach <= 35 && s.dissent <= 50) return "ant";
    return "otter";
  }

  /* ---------- state ---------- */
  function detectLocale() {
    try {
      var saved = localStorage.getItem("infovore.locale");
      if (saved === "zh" || saved === "en") return saved;
    } catch (e) {}
    return (navigator.language || "zh").toLowerCase().indexOf("en") === 0 ? "en" : "zh";
  }
  var state = {
    locale: detectLocale(),
    view: "intro",           // intro | quiz | teaser | result
    idx: 0,                  // current question index
    answers: [],             // option ids, aligned with QUESTIONS
    teaserAfter: 0,          // 10 or 20 while a teaser is showing
    result: null             // {animal, scores, near, answers, ts}
  };
  try {
    var savedResult = localStorage.getItem("infovore.result");
    if (savedResult) state.result = JSON.parse(savedResult);
  } catch (e) {}

  function t(path) {
    var node = UI[state.locale];
    var parts = path.split(".");
    for (var i = 0; i < parts.length; i++) {
      if (node == null) break;
      node = node[parts[i]];
    }
    if (typeof node === "string") return node;
    var fb = UI.zh; // zh fallback per i18n plan
    for (var j = 0; j < parts.length; j++) { if (fb == null) break; fb = fb[parts[j]]; }
    return typeof fb === "string" ? fb : path;
  }
  function fmt(str, vars) {
    return str.replace(/\{(\w+)\}/g, function (_, k) { return vars[k] != null ? vars[k] : _; });
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function otherLocale() { return state.locale === "zh" ? "en" : "zh"; }

  /* ---------- rendering ---------- */
  var views = {
    intro: document.getElementById("view-intro"),
    quiz: document.getElementById("view-quiz"),
    teaser: document.getElementById("view-teaser"),
    result: document.getElementById("view-result")
  };
  function show(view) {
    state.view = view;
    Object.keys(views).forEach(function (k) { views[k].hidden = k !== view; });
    document.documentElement.lang = state.locale === "zh" ? "zh-CN" : "en";
    document.getElementById("lang-zh").classList.toggle("active", state.locale === "zh");
    document.getElementById("lang-en").classList.toggle("active", state.locale === "en");
    window.scrollTo(0, 0);
  }

  function renderIntro() {
    var html = "";
    html += '<div class="hero"><div class="kicker">infovore</div>';
    html += "<h1>" + esc(t("intro.title")) + "</h1>";
    html += '<p class="tagline">' + esc(t("app.tagline")) + "</p></div>";
    html += '<div class="card"><p>' + esc(t("intro.body")) + "</p>";
    html += '<p class="note">' + esc(t("intro.note")) + "</p></div>";
    html += '<div class="center"><button class="btn" id="btn-start">' + esc(t("intro.start")) + "</button></div>";
    if (state.result) {
      html += '<div class="actions"><button class="btn secondary" id="btn-resume">' + esc(t("intro.resume")) + "</button></div>";
    }
    html += '<p class="meta" style="margin-top:18px">' + esc(t("intro.meta")) + "</p>";
    views.intro.innerHTML = html;
    document.getElementById("btn-start").addEventListener("click", startQuiz);
    var resume = document.getElementById("btn-resume");
    if (resume) resume.addEventListener("click", function () { renderResult(); show("result"); });
    show("intro");
  }

  function startQuiz() {
    state.idx = 0;
    state.answers = [];
    renderQuestion();
  }

  function renderQuestion() {
    var q = QUESTIONS[state.idx];
    var pct = Math.round((state.idx / QUESTIONS.length) * 100);
    var html = "";
    html += '<div class="progress-wrap"><div class="progress-label"><span>' +
      esc(fmt(t("quiz.progress"), { current: state.idx + 1, total: QUESTIONS.length })) +
      '</span></div><div class="progress-bar"><div class="progress-fill" style="width:' + pct + '%"></div></div></div>';
    html += '<h2 class="q-prompt serif">' + esc(q.prompt[state.locale]) + "</h2>";
    html += '<div class="options">';
    q.options.forEach(function (o) {
      html += '<button type="button" class="option" data-opt="' + o.id + '"><span class="oid">' +
        o.id.toUpperCase() + "</span><span>" + esc(o.text[state.locale]) + "</span></button>";
    });
    html += "</div>";
    if (state.idx > 0) {
      html += '<div class="quiz-nav"><button type="button" class="link-btn" id="btn-back">← ' + esc(t("quiz.back")) + "</button></div>";
    }
    views.quiz.innerHTML = html;
    views.quiz.querySelectorAll(".option").forEach(function (btn) {
      btn.addEventListener("click", function () { answer(btn.getAttribute("data-opt")); });
    });
    var back = document.getElementById("btn-back");
    if (back) back.addEventListener("click", function () {
      state.answers.length = state.idx; // drop anything beyond
      state.idx -= 1;
      state.answers.length = state.idx;
      renderQuestion();
    });
    show("quiz");
  }

  function answer(optId) {
    state.answers[state.idx] = optId;
    var answered = state.idx + 1;
    if (answered === 10 || answered === 20) {
      state.teaserAfter = answered;
      renderTeaser();
      return;
    }
    advance();
  }

  function renderTeaser() {
    var key = state.teaserAfter === 10 ? "quiz.teaser10" : "quiz.teaser20";
    views.teaser.innerHTML =
      '<div class="teaser"><div class="dots">· · ·</div><p>' + esc(t(key)) + "</p>" +
      '<button class="btn" id="btn-teaser-next">' + esc(t("quiz.teaserContinue")) + "</button></div>";
    document.getElementById("btn-teaser-next").addEventListener("click", advance);
    show("teaser");
  }

  function advance() {
    if (state.idx + 1 >= QUESTIONS.length) {
      finish();
      return;
    }
    state.idx += 1;
    renderQuestion();
  }

  function finish() {
    var r = computeResult(state.answers);
    state.result = {
      animal: r.animal, scores: r.scores, near: r.near,
      answers: state.answers.slice(), ts: Date.now()
    };
    try { localStorage.setItem("infovore.result", JSON.stringify(state.result)); } catch (e) {}
    renderResult();
    show("result");
  }

  function mapState(score) {
    if (score >= 65) return "lit";
    if (score >= 45) return "half";
    return "fog";
  }

  function renderResult() {
    var r = state.result;
    if (!r) { renderIntro(); return; }
    var a = ANIMALS[r.animal];
    var loc = state.locale;
    var html = "";
    html += '<div class="result-head"><div class="you-are">' + esc(t("result.youAre")) + "</div>";
    html += "<h1>" + esc(a.name[loc]) + "</h1>";
    html += '<p class="animal-en">' + esc(a.name[otherLocale()]) + "</p>";
    html += '<span class="rarity">' + esc(fmt(t("result.rarity"), { pct: a.rarity })) + "</span></div>";

    html += '<div class="card"><h2>' + esc(t("result.verdictTitle")) + "</h2><p>" + esc(a.verdict[loc]) + "</p></div>";
    html += '<div class="card"><h2>' + esc(t("result.strengthsTitle")) + "</h2><p>" + esc(a.strengths[loc]) + "</p></div>";
    html += '<div class="card blindspot"><h2>' + esc(t("result.blindspotTitle")) + "</h2><p>" + esc(a.blindspot[loc]) + "</p></div>";

    html += '<div class="card"><h2>' + esc(t("result.dimsTitle")) + "</h2>";
    DIMS.forEach(function (d) {
      var v = r.scores[d];
      html += '<div class="dim-row"><span>' + esc(t("dims." + d)) + '</span>' +
        '<span class="dim-track"><span class="dim-fill" style="display:block;width:' + v + '%"></span></span>' +
        '<span class="dim-val">' + v + "</span></div>";
    });
    html += "</div>";

    html += '<div class="card"><h2>' + esc(t("map.title")) + "</h2>";
    html += '<p class="note">' + esc(t("map.hint")) + "</p>";
    DIMS.forEach(function (d) {
      var v = r.scores[d];
      var st = mapState(v);
      var label = st === "lit" ? t("map.lit") : st === "half" ? t("map.half") : t("map.fog");
      html += '<div class="map-row state-' + st + '"><div class="map-top"><span class="map-name">' +
        esc(t("map.regions." + d + ".name")) + '</span><span class="map-state">' + esc(label) + " · " + v + "</span></div>" +
        '<p class="map-desc">' + esc(t("map.regions." + d + ".desc")) + "</p>" +
        '<div class="map-meter"><i style="width:' + Math.max(v, 3) + '%"></i></div></div>';
    });
    html += '<p style="margin-top:14px"><strong>' + esc(t("map.shapeTitle")) + "：</strong>" + esc(a.map_shape[loc]) + "</p>";
    html += "</div>";

    html += '<div class="card"><h2>' + esc(t("result.firstStepTitle")) + "</h2><p>" + esc(a.first_step[loc]) + "</p></div>";

    html += '<div class="actions"><button class="btn" id="btn-share">' + esc(t("result.share")) + "</button>" +
      '<button class="btn secondary" id="btn-retake">' + esc(t("result.retake")) + "</button></div>";

    views.result.innerHTML = html;
    document.getElementById("btn-share").addEventListener("click", function () { drawShareCard(a, r); });
    document.getElementById("btn-retake").addEventListener("click", startQuiz);
  }

  /* ---------- share card: 1080 x 1350 canvas PNG ---------- */
  function firstSentence(text, loc) {
    if (loc === "zh") {
      var i = text.indexOf("。");
      return i >= 0 ? text.slice(0, i + 1) : text;
    }
    var m = text.match(/^[^.]+\./);
    return m ? m[0] : text;
  }
  function wrapText(ctx, text, maxWidth, byChar) {
    var lines = [];
    if (byChar) {
      var cur = "";
      for (var i = 0; i < text.length; i++) {
        if (ctx.measureText(cur + text[i]).width > maxWidth && cur) { lines.push(cur); cur = ""; }
        cur += text[i];
      }
      if (cur) lines.push(cur);
      return lines;
    }
    var words = text.split(/\s+/), line = "";
    words.forEach(function (w) {
      var test = line ? line + " " + w : w;
      if (ctx.measureText(test).width > maxWidth && line) { lines.push(line); line = w; }
      else line = test;
    });
    if (line) lines.push(line);
    return lines;
  }

  function drawShareCard(a, r) {
    var loc = state.locale;
    var canvas = document.createElement("canvas");
    canvas.width = 1080; canvas.height = 1350;
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#f7f1e5"; ctx.fillRect(0, 0, 1080, 1350);
    ctx.strokeStyle = "#b4551f"; ctx.lineWidth = 3; ctx.strokeRect(36, 36, 1008, 1278);
    ctx.fillStyle = "#2b2620"; ctx.textAlign = "center";

    ctx.font = "600 34px Georgia, 'Songti SC', serif";
    ctx.fillStyle = "#b4551f";
    ctx.fillText("infovore", 540, 150);

    ctx.fillStyle = "#2b2620";
    ctx.font = "700 120px Georgia, 'Songti SC', 'STSong', serif";
    ctx.fillText(a.name[loc], 540, 330);

    ctx.font = "italic 40px Georgia, 'Songti SC', serif";
    ctx.fillStyle = "#7a6f5f";
    ctx.fillText(a.name[otherLocale()], 540, 400);

    ctx.font = "46px Georgia, 'Songti SC', serif";
    ctx.fillStyle = "#2b2620";
    var verdictLines = wrapText(ctx, firstSentence(a.verdict[loc], loc), 880, loc === "zh");
    var y = 540;
    verdictLines.slice(0, 3).forEach(function (ln) { ctx.fillText(ln, 540, y); y += 64; });

    ctx.font = "600 38px -apple-system, 'PingFang SC', sans-serif";
    ctx.fillStyle = "#b4551f";
    ctx.fillText(fmt(t("share.rarityLabel"), { pct: a.rarity }), 540, y + 60);

    ctx.font = "38px Georgia, 'Songti SC', serif";
    ctx.fillStyle = "#2b2620";
    var blind = t("share.blindspotLabel") + (loc === "zh" ? "：" : ": ") + firstSentence(a.blindspot[loc], loc);
    var blindLines = wrapText(ctx, blind, 880, loc === "zh");
    var by = 1010;
    blindLines.slice(0, 3).forEach(function (ln) { ctx.fillText(ln, 540, by); by += 56; });

    ctx.font = "30px Georgia, serif";
    ctx.fillStyle = "#7a6f5f";
    ctx.fillText(t("share.footer"), 540, 1245);

    var link = document.createElement("a");
    link.download = "infovore-" + r.animal + ".png";
    link.href = canvas.toDataURL("image/png");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /* ---------- language toggle ---------- */
  function setLocale(loc) {
    state.locale = loc;
    try { localStorage.setItem("infovore.locale", loc); } catch (e) {}
    if (state.view === "intro") renderIntro();
    else if (state.view === "quiz") renderQuestion();
    else if (state.view === "teaser") renderTeaser();
    else if (state.view === "result") { renderResult(); show("result"); }
  }
  document.getElementById("lang-zh").addEventListener("click", function () { setLocale("zh"); });
  document.getElementById("lang-en").addEventListener("click", function () { setLocale("en"); });

  renderIntro();
})();
