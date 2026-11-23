# infovore · 信息动物测试

## 中文

**infovore 是什么**

infovore（info + -vore，如 carnivore 食肉 / herbivore 食草——专门吃信息的动物）是一个帮助人们看见并打破信息茧房的小产品。它的冷启动是一个测试：32 道情境题（不问立场，只问习惯），测出你是哪种「信息动物」——深海鲸、蜂鸟、猫头鹰、狐狸、蚂蚁、候鸟、井蛙学者、水獭，共 8 种。测试的 5 个计分维度（广度 / 深度 / 新奇耐受 / 异见耐受 / 远望）同时生成你的第一张认知地图：哪些区域亮着，哪些还是一片雾；结果页最后按你的动物盲区，给出为你定制的第一次探险。

完整设计方案见 `SPEC.md`（信息动物测试 · 完整方案 v1.0，中英双语）。

**架构**

- Cloudflare Pages 纯静态站，**没有后端、没有 Worker、没有任何网络请求**。
- 答题、计分、动物判定、地图生成、分享卡出图全部在本机浏览器完成。
- 语言（`infovore.locale`）与最近一次结果（`infovore.result`）只存 localStorage，不上传。「你的茧只存在你自己的浏览器里」是这个产品的信任卖点，不是口号。
- 中英双语从第一天起：所有界面文案、题面、判词都在 `data.js` 里按 key 组织（zh / en 两套），计分表只有一份、与语言无关——切换语言只换文本，绝不换分。

**部署（Cloudflare Pages）**

1. 把本目录推入 GitHub 仓库，在 Cloudflare Pages 里连接该仓库。
2. 构建命令：**无**（留空）。构建输出目录：**根目录**（`.`）。
3. 推送即自动部署。`wrangler.toml` 已备好（`name = "infovore"`，`pages_build_output_dir = "."`），用 Wrangler 部署也可以：`npx wrangler pages deploy .`。

**预留的后端触发点（v1 不建，先写明）**

以下两件事真出现需求时，才照《此时，还有》gossip-service 的模式单开一个独立 Worker，静态站现拉现用，主站架构不动：

1. **真实稀有度统计**：现在的稀有度（9% / 18% / …）是文案占位数字。将来换成真实分布时，用一个极小的 Worker + KV 只收「我是哪只动物」的匿名计数，且必须用户可选、默认关。
2. **探险内容的时效性**：如果「今日一探」要与真实时事挂钩，再做一个内容聚合 Worker。

**文件布局**

| 文件 | 说明 |
|---|---|
| `index.html` | 单页入口：intro / quiz / teaser / result 四个视图 |
| `style.css` | 暖色编辑风，移动优先，系统字体，完全离线 |
| `data.js` | UI 文案（zh/en）、32 题（双语题面 + 逐项计分）、8 种动物（双语判词）；UMD 格式，浏览器与 Node 共用 |
| `app.js` | 答题流程、计分与判定、认知地图、1080×1350 分享卡、双语切换、localStorage |
| `test.mjs` | `node test.mjs`：题量/双语完整性校验、2000 组随机答案的 Monte Carlo、井蛙学者定向答案组断言 |
| `SPEC.md` | 设计方案原文（内容与计分的唯一事实来源） |
| `wrangler.toml` | Cloudflare Pages 配置 |

---

## English

**What infovore is**

infovore (info + -vore, as in carnivore / herbivore — an animal that feeds on information) is a small product that helps people see, and then break, their filter bubble. Its cold start is a test: 32 scenario questions (habits, never positions) that reveal which "information animal" you are — Deep-Sea Whale, Hummingbird, Owl, Fox, Ant, Migrant Bird, Frog Scholar, or Otter. The test's five scoring dimensions (Breadth / Depth / Novelty tolerance / Dissent tolerance / Reach) also generate your first cognitive map: which regions are lit, and which are still fog. The result ends with a first expedition tailored to your animal's blind spot.

The full design spec lives in `SPEC.md` (bilingual, v1.0).

**Architecture**

- A pure static site on Cloudflare Pages. **No backend, no Worker, no network calls at all.**
- Answering, scoring, animal assignment, map generation and share-card rendering all happen in the visitor's browser.
- Locale (`infovore.locale`) and the last result (`infovore.result`) are stored only in localStorage, never uploaded. "Your bubble lives only in your browser" is the product's trust promise, not a slogan.
- Bilingual from day one: all interface copy, questions and verdicts sit behind keys in `data.js` (zh / en); there is exactly one scoring table and it is locale-independent — switching language changes text only, never scores.

**Deploy (Cloudflare Pages)**

1. Push this directory to a GitHub repo and connect it in Cloudflare Pages.
2. Build command: **none** (leave empty). Build output directory: **root** (`.`).
3. Every push auto-deploys. `wrangler.toml` is included (`name = "infovore"`, `pages_build_output_dir = "."`); Wrangler works too: `npx wrangler pages deploy .`

**Reserved backend triggers (not built in v1, documented in advance)**

Only when a real need appears, add a separate standalone Worker — the static site stays untouched:

1. **Real rarity statistics**: today's rarity figures (9% / 18% / …) are copy placeholders. Replacing them with a real distribution needs a tiny Worker + KV that receives nothing but an anonymous "which animal" count — opt-in only, off by default.
2. **Timely expedition content**: if a future "daily expedition" must hook into real current events, add a content-aggregation Worker then.

**File layout**

| File | What it is |
|---|---|
| `index.html` | Single-page entry: intro / quiz / teaser / result views |
| `style.css` | Warm editorial style, mobile-first, system fonts, fully offline |
| `data.js` | UI strings (zh/en), the 32 questions (bilingual text + per-option scoring), the 8 animals (bilingual verdicts); UMD, shared by browser and Node |
| `app.js` | Quiz flow, scoring and assignment, cognitive map, 1080×1350 share card, language switching, localStorage |
| `test.mjs` | `node test.mjs`: structure/bilingual completeness checks, a 2000-run Monte Carlo, and a targeted Frog Scholar answer set |
| `SPEC.md` | The design spec, verbatim (single source of truth for content and scoring) |
| `wrangler.toml` | Cloudflare Pages config |
