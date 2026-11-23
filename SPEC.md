# 信息动物测试 · 完整方案（中英双语）
# What's Your Information Animal? — Full Spec (Bilingual zh-CN / en-US)

版本 v1.0 · 2026-11-23
定位：破茧产品的冷启动钩子。32 道情境题 → 测出 8 种「信息动物」→ 结果即认知地图的初始数据 → 第一次探险按动物盲区定制。
Positioning: the cold-start hook for the filter-bubble breaker. 32 scenario questions → 1 of 8 "information animals" → the result seeds the user's cognitive map → the first expedition is tailored to that animal's blind spot.

文案口径（双语一致）：叫「信息食性小测 / a small test of your information diet」，不叫科学诊断。判词要准、要好笑、带一句轻刺，但不装权威。
Tone rule (both locales): call it a light test, never a scientific diagnosis. Verdicts should feel accurate and funny, with one gentle sting — never pseudo-authoritative.

---

## 一、国际化（i18n）支持方案 / Internationalization Plan

从第一天起双语，不是先做中文再翻译。理由：破茧产品本身就包含「语言茧房」维度，产品自己只有一种语言是自相矛盾的；且英文版是海外传播（Product Hunt / IG）的前提。

Bilingual from day one, not "Chinese first, translate later." The product is about breaking bubbles — including the language bubble — so shipping monolingual would contradict its own premise. English is also the prerequisite for overseas distribution.

### 1. 架构原则 / Architecture principles

1. **文案与逻辑彻底分离。** 题目文本、选项文本、动物判词、UI 字符串全部走 key 查表；计分数据是与语言无关的独立结构，按选项 id（a/b/c/d）挂载。切换语言只换文本，绝不换计分。
   Text and logic are fully separated. All copy lives behind keys; scoring is a locale-independent structure keyed by option id. Switching language changes text only, never scoring.
2. **语言来源优先级：** 用户手动选择 > localStorage 记录 > 浏览器语言 > 默认 zh-CN。选择存本机（`bubble.locale`），不上传。
   Locale priority: manual choice > stored preference > browser language > zh-CN default. Stored locally only.
3. **缺失回退：** 任一 key 在目标语言缺失，回退 zh-CN 并在构建检查中报错，不允许上线带缺 key 的版本（见校验清单）。
   Missing keys fall back to zh-CN at runtime and fail the build check — no locale ships with gaps.
4. **计分跨语言恒等：** 同一套阈值、同一套动物判定顺序，两种语言测出同一人必须同结果。后续若做常模校准，按语言分别校准并注明，不静默改阈值。
   Scoring is identical across locales: same person, same answers, same animal. Any future norm calibration is per-locale and documented, never silent.

### 2. Key 命名规范 / Key naming

```
app.title
quiz.intro.title / quiz.intro.body / quiz.intro.start
quiz.progress            （{current} / {total} 占位符 / placeholder）
quiz.teaser.q10 / quiz.teaser.q20    （中途预告 / mid-quiz teasers）
quiz.q01.prompt
quiz.q01.a / .b / .c / .d
... q02–q32 同构 / same pattern
result.rarity            （「只占 {pct}% 的人是这一型」）
result.blindspot.title   （你的盲区 / Your blind spot）
result.map.cta           （看看你的茧长什么样 / See what your bubble looks like）
result.share             （生成分享卡 / Make a share card）
animal.whale.name / .tagline / .verdict / .strengths / .blindspot / .first_step
animal.hummingbird.* / animal.owl.* / animal.fox.* / animal.ant.*
animal.migrant.* / animal.frog_scholar.* / animal.otter.*
map.title / map.fog_hint / expedition.start / expedition.done
```

计分结构示例（与语言无关）/ Scoring structure (locale-independent):

```json
{
  "q01": {
    "a": {"novelty": 2, "breadth": 1},
    "b": {"novelty": 1},
    "c": {},
    "d": {"depth": 1, "novelty": 1}
  }
}
```

语言包结构 / Locale bundle shape:

```json
// locales/zh-CN.json
{ "quiz": { "q01": { "prompt": "……", "a": "……", "b": "……", "c": "……", "d": "……" } },
  "animal": { "whale": { "name": "深海鲸", "tagline": "……" } } }
// locales/en-US.json — key 集合必须与 zh-CN 完全一致 / key set must match zh-CN exactly
```

### 3. 文化适配（不是直译）/ Cultural adaptation, not literal translation

- **井蛙**是中文成语，英文不直译字面，处理为 `The Frog Scholar (Frog in the Well)`，判词里用一句英文能懂的话把典故讲清：a frog who has dug his well so deep he has forgotten there is a sky — 反而成了英文版的一个文化彩蛋。
- 动物意象双语通用：鲸、蜂鸟、猫头鹰、狐狸、蚂蚁、候鸟、水獭在两种文化里性格联想基本一致，不需要换动物。
- 情境题里的生活细节按语言微调（如「朋友圈」在英文版写 `your group chat / feed`，「排队馆子」写 `the place with the local line`），题意与计分不变。文档英文题面已按此原则写，不是逐字译。
- 英文文本平均比中文长 20–30%：题目页与分享卡布局按英文长度验版，按钮不写死宽度。
- 分享卡按当前语言出图，卡脚保留另一语言的小字名（中文卡脚印英文名，英文卡脚印中文名），暗示「这东西有另一个世界」，本身就是破茧气质。

### 4. 上线校验清单 / Pre-launch i18n checks

- [ ] 两语言包 key 集合 diff 为空
- [ ] 32 题 × 4 选项双语齐全，计分表只此一份
- [ ] 同一组答案在 zh / en 各测一次，结果动物一致
- [ ] 英文最长题面 + 最长选项在手机宽度下不溢出
- [ ] 分享卡 zh / en 各出一张，1080×1350，判词不截断
- [ ] 切换语言发生在答题中途时，已答题计分不丢、进度不退

---

## 二、计分维度 / Scoring Dimensions

5 个维度，每维原始分按该维可得最高分归一到 0–100。
Five dimensions; each raw score is normalized to 0–100 against its attainable maximum.

| Key | 中文 | English | 含义 / Meaning |
|---|---|---|---|
| breadth | 广度 | Breadth | 食性杂不杂：主题、人群、媒介的跨度 / how varied the diet is |
| depth | 深度 | Depth | 在一处挖多深：读完、查证、追到底 / how deep one digs |
| novelty | 新奇耐受 | Novelty tolerance | 能不能咽下完全陌生的东西 / appetite for the unfamiliar |
| dissent | 异见耐受 | Dissent tolerance | 能不能听完反对自己的一方 / ability to hear the other side out |
| reach | 远望 | Reach | 关心半径：地理、时间、社会距离都是「远」 / radius of concern — geography, time, social distance |

维度缩写在题目计分中写作：广 breadth / 深 depth / 新 novelty / 异 dissent / 远 reach。

---

## 三、动物判定规则 / Animal Assignment Rules

按顺序判定，先命中先得（顺序本身是设计的一部分，避免重叠时乱跳）：
Rules run in order; first match wins (the order is deliberate, to resolve overlaps deterministically):

1. **井蛙学者 Frog Scholar** — depth ≥ 75 且 breadth ≤ 35 且 novelty ≤ 45
2. **候鸟 Migrant Bird** — reach ≥ 75 且 breadth ≥ 60 且 depth < 70
3. **蜂鸟 Hummingbird** — breadth ≥ 70 且 depth ≤ 40
4. **狐狸 Fox** — novelty ≥ 70 且 dissent ≥ 65 且 breadth ≥ 55
5. **深海鲸 Deep-Sea Whale** — depth ≥ 70 且 reach ≥ 60
6. **猫头鹰 Owl** — depth ≥ 65 且 novelty ≥ 60 且 breadth < 60
7. **蚂蚁 Ant** — reach ≤ 35 且 dissent ≤ 50
8. **水獭 Otter** — 其余全部（尤其是各维落在 45–65 的均衡型）/ everyone else, especially balanced profiles

稀有度（文案占位，上线后按真实数据校准，双语共用同一数字）：
Rarity figures are copy placeholders, to be calibrated on real data; identical in both locales.
深海鲸 9% · 蜂鸟 18% · 猫头鹰 11% · 狐狸 8% · 蚂蚁 16% · 候鸟 7% · 井蛙学者 6% · 水獭 25%（合计 100%）

中途预告（吊着用户做完）/ Mid-quiz teasers:
- 第 10 题后 / after Q10：「已确认一项：你的远望感比多数人强，但时间维度很单一。」/ "One thing is already clear: your sense of the far-away is stronger than most — but your time horizon is narrow."
- 第 20 题后 / after Q20：「你的动物轮廓已经出现了，它有一个很明显的盲区……」/ "Your animal is taking shape — and it has one very obvious blind spot…"

---

## 四、32 道题 / The 32 Questions

计分记法：每选项后括号内为该选项得分，如（新+2，广+1）；未列出的维度得 0 分。
Scoring notation: points per option in brackets, e.g. (novelty+2, breadth+1); unlisted dimensions score 0.

**Q1** 刷到一个完全陌生领域的视频（比如深海采矿），你通常会？
You come across a video on a topic you know nothing about (say, deep-sea mining). You usually:
- A 当场看完，万一有意思呢 / Watch it right away — it might be interesting（新+2，广+1）
- B 先点个收藏，有空再看 / Save it for later（新+1）
- C 直接划走，不关我事 / Swipe past — not my thing（—）
- D 看标题和评论区，大概知道讲啥就行 / Read the title and comments to get the gist（广+1）

**Q2** 一篇写得很好的文章，结论正好反驳你支持的观点。你会？
A well-written article argues the opposite of what you believe. You:
- A 看完，还会想想它哪里说得有道理 / Finish it and think about where it has a point（异+2）
- B 看完，但主要是为了找它的漏洞 / Finish it, mostly to find its holes（异+1，深+1）
- C 看个开头就关了，立场不对 / Close it early — wrong side（—）
- D 转给持同样观点的朋友一起批判 / Send it to like-minded friends to pick apart together（—）

**Q3** 去一个陌生小城吃饭，你会选？
Eating in an unfamiliar small town, you pick:
- A 当地人排队的小馆子 / The small place with a line of locals（新+2，远+1）
- B 评分最高、评价最多的 / The highest-rated place with the most reviews（—）
- C 连锁店，稳妥不出错 / A chain — safe, predictable（—）
- D 先逛一圈，看哪家顺眼进哪家 / Wander first, walk into whichever feels right（新+1，广+1）

**Q4** 你关注的人里，职业和你差得最远的是？
Among the people you follow, whose job is furthest from yours?
- A 有好几个，农民、画家、运动员都有 / Several — a farmer, a painter, an athlete…（广+2，远+2）
- B 有一两个吧 / One or two, I think（广+1，远+1）
- C 基本都是同行和同好 / Mostly people in my field and hobbies（—）
- D 想不起来，我不太关注人 / Can't recall — I don't really follow people（—）

**Q5** 同一条新闻，你最先信哪种说法？
For the same news story, which do you trust first?
- A 带数据和原始来源的 / The one with data and primary sources（深+2）
- B 当事人的亲历讲述 / The first-hand account of someone who was there（远+1，异+1）
- C 权威机构的结论 / The conclusion of an authoritative institution（—）
- D 我常看的那几个博主怎么说 / What the commentators I follow say about it（—）

**Q6** 早上醒来打开手机，你先看什么？
First thing on your phone in the morning?
- A 本地新闻和身边人的动态 / Local news and updates from people around me（远+0，记近距离 / near）
- B 国际新闻或行业大事 / World news or big industry stories（远+2，广+1）
- C 昨晚没看完的长内容接着看 / The long piece I didn't finish last night（深+2）
- D 随便刷，推什么看什么 / Whatever the feed gives me（广+1）

**Q7** 你的收藏夹/稍后再看，大概是什么状态？
Your saved / watch-later list is mostly:
- A 存的都会看完，还分类 / Things I actually finish, organized（深+2）
- B 存了很多，看了一小半 / A lot saved, a fraction watched（广+1，新+1）
- C 存了就忘了，越攒越多 / Saved and forgotten, ever growing（广+1）
- D 我基本不收藏 / I rarely save anything（—）

**Q8** 朋友推荐你一本完全不沾边的书，你会？
A friend recommends a book totally outside your world. You:
- A 真去读，读不下去再说 / Actually read it; I can stop if it fails（新+2，异+1）
- B 先看看简介和书评再决定 / Check the summary and reviews first（新+1）
- C 礼貌收下，基本不会打开 / Accept politely, unlikely to open（—）
- D 反手推荐他一本我的书 / Recommend one of mine back instead（—）

**Q9** 一个热点事件刚出来、说法还很乱时，你会？
When a breaking story is still messy and contested, you:
- A 等几天，看几方说法再下判断 / Wait days and read several sides before judging（异+2，深+1）
- B 先看我信任的来源怎么说 / See what my trusted sources say first（—）
- C 立刻表态，晚了就没热度了 / Take a position fast, before it cools（—）
- D 不关心，等它过去 / Ignore it until it blows over（—）

**Q10** 你更愿意花一小时了解哪种事？
You'd rather spend an hour on:
- A 一百年前的普通人怎么过日子 / How ordinary people lived a century ago（远+2，深+1）
- B 下一个十年会发生什么 / What the next decade might bring（远+1，新+1）
- C 今天最热的那件事的来龙去脉 / The full backstory of today's biggest story（深+1）
- D 我所在行业的新动态 / The latest in my own field（—）

**Q11** 一篇两万字的深度报道摆在面前，你会？
Faced with a 20,000-word deep-dive report, you:
- A 一口气或分几次读完 / Read it through, in one go or in sittings（深+2）
- B 先看摘要和小标题，挑感兴趣的段读 / Skim headings, read the parts that hook me（深+1，广+1）
- C 太长了，找个讲它的短视频 / Too long — find a short video about it（广+1）
- D 直接关掉 / Close it（—）

**Q12** 你的短视频/信息流使用更像哪种？
Your short-video / feed use looks more like:
- A 一个主题能连着刷很久，越刷越深 / I can stay on one topic and go deeper and deeper（深+2）
- B 什么都有，跳来跳去才过瘾 / A bit of everything — jumping around is the fun（广+2，新+1）
- C 基本只刷我关注的那几类 / Mostly the few categories I follow（—）
- D 刷到重复的就烦，喜欢被推没见过的 / Repeats bore me; I like being shown things I've never seen（新+2，广+1）

**Q13** 你会看非母语的内容吗（带字幕/翻译）？
Do you consume content in a language that isn't your first?
- A 经常，有些东西只有外语版 / Often — some things only exist in another language（远+2，广+1，新+1）
- B 偶尔，碰上了就看 / Sometimes, when it comes up（远+1，新+1）
- C 很少，太费劲 / Rarely — too much effort（—）
- D 从不 / Never（—）

**Q14** 一个和你行业完全无关的讲座/展览，你会去吗？
A talk or exhibition totally unrelated to your field — would you go?
- A 会，经常去这种 / Yes, I go to those fairly often（新+2，广+1）
- B 朋友拉着就去 / If a friend drags me along（新+1）
- C 没时间，不如歇着 / No time; I'd rather rest（—）
- D 只去对我有用的 / Only ones useful to me（—）

**Q15** 回想一下，你上一次被说服、改变观点是什么时候？
When did an argument last actually change your mind?
- A 最近就有，还不止一次 / Recently — more than once（异+2）
- B 有过，但印象不深了 / It happened, but I barely remember（异+1）
- C 很难，我的观点一般不太变 / Rarely — my views don't move much（—）
- D 我不需要被说服，我查证后自己判断 / I don't get persuaded; I verify and judge myself（深+1）

**Q16** 两个标题，你先点哪个？
Two headlines — which do you click first?
- A 《你家附近要修一条新地铁》/ "A new subway line is coming to your neighborhood"（记近距离 / near）
- B 《一个非洲国家正在试验全民基本收入》/ "An African country is piloting universal basic income"（远+2，新+1）
- C 《一百年前的人预言今天，错得离谱》/ "People 100 years ago predicted today — and got it hilariously wrong"（远+1，新+1）
- D 《你所在行业今年的薪酬报告》/ "This year's salary report for your industry"（—）


**Q17** 你的歌单/播客列表是什么风格？
Your playlist / podcast list is:
- A 风格跨度很大，古典到说唱都有 / All over the place — classical to rap（广+2，新+1）
- B 就那几类，听着舒服最重要 / A few genres — comfort first（—）
- C 总在挖冷门和小众的 / Always digging for obscure finds（新+2，深+1）
- D 基本不听，都是别人推什么听什么 / I mostly listen to what's recommended to me（广+1）

**Q18** 你从长辈或小孩那里得到过有用的新认知吗？
Have you learned something genuinely new from an elder or a kid recently?
- A 经常，他们看世界的方式和我完全不同 / Often — they see the world completely differently（远+1，异+2）
- B 偶尔有 / Occasionally（异+1）
- C 很少，代沟太大聊不到一起 / Rarely — the generation gap is too big（—）
- D 基本不和他们聊这些 / We don't really talk about such things（—）

**Q19** 发现算法老推同类内容给你时，你会？
When you notice the algorithm keeps feeding you the same kind of thing, you:
- A 主动搜点别的，把它「教」歪 / Deliberately search other topics to throw it off（新+2，广+1）
- B 无所谓，推的正是我想看的 / Fine with it — it's what I want anyway（—）
- C 有点腻，但也懒得管 / A bit bored, but I let it be（新+1）
- D 没注意过这个问题 / Never noticed（—）

**Q20** 工作/学习中遇到一个专业问题，你通常挖到哪一步？
A hard question in your work or study — how far do you dig?
- A 查到原始文献/源头才算完 / Down to the original paper or source（深+2）
- B 找到一个可靠答案就够了 / Until I have one reliable answer（深+1）
- C 问问同行/同学怎么做的 / Ask peers how they handled it（—）
- D 先放着，绕过去 / Set it aside and work around it（—）

**Q21** 你所在的群/朋友圈里，多数人支持一件事，而你不太认同。你会？
Most people in your group support something you doubt. You:
- A 在群里说出我的不同看法 / Say my disagreement in the group（异+1）
- B 不出声，但会私下找资料核对 / Stay quiet, but go check the facts myself（异+1，深+1）
- C 不出声，慢慢也就认同了 / Stay quiet, and gradually come around（—）
- D 退群/屏蔽，眼不见为净 / Leave or mute — out of sight, out of mind（—）

**Q22** 一部题材冷门的纪录片（比如讲真菌的），你会？
A documentary on an obscure subject (say, fungi) — you:
- A 点开看，很可能看完 / Start it, and probably finish it（新+2，深+1）
- B 看个十几分钟试试水 / Give it fifteen minutes（新+1）
- C 存起来，大概率不会看 / Save it; probably never watch（新+1，广+1）
- D 划过，提不起兴趣 / Pass — can't get interested（—）

**Q23** 买一件贵一点的东西之前，你怎么做功课？
Before an expensive purchase, your research is:
- A 横向对比很多款，还看参数和测评原文 / Compare many options, read specs and full reviews（广+1，深+2）
- B 看几个口碑推荐就定了 / A few trusted recommendations and decide（—）
- C 买我用惯的品牌 / Stick with my usual brand（—）
- D 看销量第一名 / Buy the bestseller（—）

**Q24** 你读小说/看剧的类型跨度？
The fiction you read or watch spans:
- A 什么类型都看，悬疑科幻言情历史都行 / Everything — mystery, sci-fi, romance, history（广+2，新+1）
- B 就爱那一两类，反复看 / One or two genres, again and again（深+1）
- C 只看真实题材/非虚构 / Only true stories and non-fiction（—）
- D 基本不看小说和剧 / Hardly any fiction（—）

**Q25** 关于过去，你更好奇哪一段？
Which past are you most curious about?
- A 大历史：朝代、战争、文明兴衰 / Big history — dynasties, wars, rising and falling civilizations（远+2，深+1）
- B 小历史：普通人的吃穿住行 / Small history — how ordinary people ate, dressed, lived（远+1，新+1）
- C 我家/我家乡的过去 / My family's and hometown's past（记近距离 / near）
- D 过去没意思，我只关心未来 / The past bores me — only the future matters（—）

**Q26** 有机会跟一个职业离你很远的人（比如渔民、法医）聊一小时，你会？
A chance to talk for an hour with someone whose job is far from yours (a fisher, a forensic examiner) — you:
- A 特别想去，问题都想好了 / Absolutely — I already have questions（远+2，新+2）
- B 去吧，听听也挺有意思 / Sure, could be interesting（远+1，新+1）
- C 算了，聊不到一起尴尬 / Pass — we'd have nothing to say（—）
- D 不如跟同行深聊一小时 / I'd rather spend the hour deep with a peer（深+1）

**Q27** 什么样的说法最容易说服你？
What persuades you most?
- A 严密的数据和逻辑链 / Solid data and a tight chain of logic（深+2）
- B 一个真实的人讲他的亲身经历 / A real person telling what happened to them（异+1，远+1）
- C 双方辩论，看谁驳不倒 / A debate — whichever side survives（异+2）
- D 我尊敬的人的判断 / The judgment of someone I respect（—）

**Q28** 难得的休息日，你更想怎么过？
A rare day off — you'd rather:
- A 去一个从没去过的地方，哪怕就在本市 / Go somewhere I've never been, even within my own city（新+2）
- B 去我最熟最舒服的那几个地方 / My favorite familiar spots（—）
- C 在家，刷我攒下的内容 / Stay in with my saved-up content（深+1，广+1）
- D 约老朋友，还是老节目 / Old friends, the usual routine（—）

**Q29** 你会主动取关/清理你的关注列表吗？
Do you actively prune your following list?
- A 会，还会刻意加一些「不一样的声音」/ Yes — and I deliberately add a few "different voices"（异+2，新+1）
- B 偶尔清理太吵的 / Occasionally mute the noisy ones（异+1）
- C 从不，关注了就放着 / Never — it just accumulates（广+1）
- D 我的关注很少，都是精选 / My list is small and hand-picked（深+1）

**Q30** 读东西时遇到一个完全不懂的术语，你会？
You hit a term you don't understand at all. You:
- A 当场查，查到明白为止 / Look it up on the spot, until it's clear（深+2，新+1）
- B 大概猜个意思，接着读 / Guess from context and read on（广+1）
- C 标记一下，回头再说（多半忘了） / Mark it for later (and usually forget)（深+1）
- D 跳过这段 / Skip that part（—）

**Q31** 一篇一百年前的文章，观点和现在很不一样，你会觉得？
An essay from a century ago whose views clash with today's — you feel:
- A 有意思，想理解他为什么这么想 / Interesting — I want to understand why they thought that（远+2，异+2）
- B 有些道理被我们丢了 / Some of it we've wrongly lost（异+1，远+1）
- C 过时了，不值得看 / Outdated, not worth reading（—）
- D 看他错得多离谱，挺好笑 / Amusing to see how wrong they were（远+1）

**Q32** 如果未来一周只能留一种信息来源，你留哪个？
If you could keep only one information source for a week, you'd keep:
- A 一份什么都报的综合媒体 / A general outlet that covers everything（广+2）
- B 我最深耕的那个专业来源 / The specialist source in my deepest field（深+2）
- C 一个专讲远方和陌生人的来源 / A source devoted to faraway places and strangers（远+2，新+1）
- D 身边人的口口相传 / Word of mouth from people around me（记近距离 / near）

### 计分汇总 / Scoring summary

- 每维原始分 = 该维在全部答案中的得分之和；归一分 = 原始分 ÷ 该维理论最高分 × 100（理论最高分由计分表程序求和得出，不手算）。
  Raw dimension score = sum over answers; normalized = raw ÷ attainable maximum for that dimension × 100 (computed from the scoring table, never by hand).
- 「记近距离 / near」不是维度分：它标记 reach 的低端行为，计分实现时记 reach 候选 0 分并计一次 near 标记；near 标记 ≥ 4 次时，reach 归一分封顶 35（保证蚂蚁判定可达）。
  "Near" marks are not a dimension: they record a 0 for reach and increment a near-counter; with ≥ 4 near marks, normalized reach is capped at 35 (keeps the Ant profile reachable).
- 判定按第三节顺序执行；水獭为兜底。Assignment follows Section 3 order; Otter is the fallback.

---

## 五、8 种动物 / The 8 Animals

每种含：判词（结果页主文案）、强项、盲区（轻刺）、地图初始形态、第一次探险定制。双语判词气质一致，英文非直译腔。
Each animal: verdict (result-page copy), strengths, blind spot (the gentle sting), initial map shape, and its tailored first expedition.

### 1. 深海鲸 Deep-Sea Whale — 稀有度 9%

- **判词 ZH：** 你吃东西不挑数量，挑深度。别人浮在水面上看热闹，你一沉就是几千米：一本书读完、一件事追到源头、一个问题想不通可以惦记一周。你的世界不大，但很深，而且安静。
- **Verdict EN:** You don't graze — you dive. While others skim the surface, you sink thousands of meters: a book finished, a story traced to its source, a question carried around for a week. Your world isn't wide, but it is deep, and quiet.
- **强项 / Strengths：** 深度高、能独处思考、不被热闹带走 / depth, solitary thinking, immune to hype
- **盲区 / Blind spot：** 速度。你在深处想明白的时候，水面上世界已经换了一茬。远方和当下，你都容易迟到。/ Speed. By the time you've thought it through down below, the surface world has moved on. You tend to arrive late — to the faraway, and to the present.
- **地图初始形态 / Initial map：** 一小片区域极亮极密，其余大片是雾，海面（当代热点与远方）最暗。/ One small region, intensely lit; the surface — today's world and faraway places — darkest.
- **第一探 / First expedition：** 推一件正在发生的远方小事（非大事），限时 5 分钟看完就走，练「浮上来透口气」。/ A small faraway story happening right now, five minutes, then surface.

### 2. 蜂鸟 Hummingbird — 稀有度 18%

- **判词 ZH：** 你一天要采一百朵花。什么热点都沾一点，什么领域都认得门牌号，消息比谁都灵。你的问题不在视野，在落脚：花都尝过了，哪一朵是你的？
- **Verdict EN:** You visit a hundred flowers a day. Every trend, every field — you know all the addresses and hear everything first. Your problem isn't range, it's landing: you've tasted every flower; which one is yours?
- **强项 / Strengths：** 广度极高、反应快、天然抗茧 / huge breadth, fast, naturally bubble-resistant on topics
- **盲区 / Blind spot：** 深度。收藏夹是你的第二大脑，也是你的坟墓——存了等于看过，是你最熟练的自我欺骗。/ Depth. Your saved list is your second brain and your graveyard — "saved" is not "seen," and you know it.
- **地图初始形态 / Initial map：** 亮点遍地但全是浅滩，没有一处深水区。/ Lit everywhere, but all shallows; no deep water anywhere.
- **第一探 / First expedition：** 不给新东西。从他的收藏夹里捞一篇存了最久的，让他真读完——点亮第一个深水点。/ Nothing new: pull the oldest saved item and actually finish it — light the first deep point.

### 3. 猫头鹰 Owl — 稀有度 11%

- **判词 ZH：** 你在夜里睁眼。别人不看的角落、冷门的题材、没人转的长文，你看得津津有味，而且只信自己的眼睛。你的世界很独特，独特到有时候只有你一个人住在里面。
- **Verdict EN:** Your eyes open at night. Neglected corners, obscure subjects, the long read nobody shares — you savor them all, and you trust only your own eyes. Your world is distinctive; so distinctive that sometimes you're its only resident.
- **强项 / Strengths：** 新奇耐受高、观察细、独立 / high novelty tolerance, sharp observation, independence
- **盲区 / Blind spot：** 人群。你很少走进热闹里听人当面说话——观点你研究得多，活人你接触得少。/ People. You rarely enter the crowd and listen to anyone speak in person — you study viewpoints far more than you meet people.
- **地图初始形态 / Initial map：** 冷门区域点点星光，主干道（大众话题与身边人）反而是暗的。/ Scattered lights in obscure regions; the main roads — common topics, nearby people — stay dark.
- **第一探 / First expedition：** 推一个普通人的亲历讲述（非专家、非冷门题材），练「听人说话」。/ A first-person account by an ordinary person — practice listening to people, not topics.

### 4. 狐狸 Fox — 稀有度 8%

- **判词 ZH：** 哪里有缝你钻哪里。陌生的你不怕，反对你的你也听得完，天生就是破茧的体质。朋友都觉得你什么都懂——只有你自己知道，什么你都只懂到门口。
- **Verdict EN:** Wherever there's a gap, you slip through it. The unfamiliar doesn't scare you; neither does disagreement. You were born bubble-proof. Your friends think you know everything — only you know you know most of it just up to the doorway.
- **强项 / Strengths：** 新奇与异见双高、灵活、好奇心真 / novelty and dissent both high, flexible, genuinely curious
- **盲区 / Blind spot：** 站定。什么都能理解的结果，是什么都不肯选边、不肯深耕。你的地图全是路，没有家。/ Commitment. Understanding everything can mean never standing anywhere or tending one patch. Your map is all roads and no home.
- **地图初始形态 / Initial map：** 线路四通八达，但没有一个节点特别亮。/ Routes everywhere; no single node shines.
- **第一探 / First expedition：** 推一个需要表态的题：看完必须选「我认同 / 我不认同」并写一句理由，练落脚。/ A piece that demands a stance: agree or disagree, in one written sentence — practice landing.

### 5. 蚂蚁 Ant — 稀有度 16%

- **判词 ZH：** 你的信息世界组织得井井有条：群里谁有事你都知道，同行的风吹草动逃不过你，身边人有难你第一个到。你的勤劳无可挑剔——只是蚁丘之外，还有一整个夏天。
- **Verdict EN:** Your information world is impeccably organized: you know everything in your group, miss nothing in your field, and show up first when someone nearby is in trouble. Your diligence is beyond reproach — it's just that beyond the anthill, there's a whole summer.
- **强项 / Strengths：** 近距离信息最灵、可靠、社群信任高 / unmatched nearby intelligence, reliability, community trust
- **盲区 / Blind spot：** 远方与异见。群外的人过着什么日子、群里共识之外的说法，你的世界里几乎没有入口。/ Distance and dissent. How people outside the group live, and what is said beyond the group's consensus, barely have a door into your world.
- **地图初始形态 / Initial map：** 中心一小圈极亮，边缘陡然全黑，像一座岛的夜灯。/ A tiny, bright center; darkness falling off a cliff at the edges.
- **第一探 / First expedition：** 推蚁丘外「一条街」的东西：同城但不同人群的生活（比如夜班司机），距离 1 步，不吓人。/ One street beyond the hill: life of a different crowd in the same city — one step away, not scary.

### 6. 候鸟 Migrant Bird — 稀有度 7%

- **判词 ZH：** 你的视野跟着季节和大事迁徙：哪里在打仗、哪里在选举、哪里的技术在爆发，你都飞去看过。你的世界地图是全场最完整的——除了你脚下这一小块，你反而不熟。
- **Verdict EN:** Your attention migrates with seasons and great events: wherever there's a war, an election, a breakthrough, you've flown in for a look. Your world map is the most complete of anyone's — except for the small patch right under your feet.
- **强项 / Strengths：** 远望极高、全球感、议题感强 / exceptional reach, global sense, issue awareness
- **盲区 / Blind spot：** 落地。远方的苦难你如数家珍，身边人的生活你一知半解；大叙事很满，小日子很空。/ Landing. You can recite distant suffering in detail and know surprisingly little about the lives around you; big narratives full, small days empty.
- **地图初始形态 / Initial map：** 远处大陆都亮着，正中心（本地与身边）是一块安静的雾。/ Distant continents lit; the very center — local, nearby — a quiet fog.
- **第一探 / First expedition：** 推本地题：自己城市里一个正在消失的老行当，练「低头看」。/ A local story: a vanishing old trade in the user's own city — practice looking down.

### 7. 井蛙学者 The Frog Scholar — 稀有度 6%

- **判词 ZH：** 先说好话：你的井挖得是真深。在你的领域里，你的功力超过 94% 的人，查证、钻研、坐冷板凳，你都做得到。问题只有一个——井口就那么大，你已经很久没抬头看过天了，而且你有点忘了天还在。
- **Verdict EN:** Credit first: your well is genuinely deep. In your field you out-dig 94% of people — verification, grind, patience, you have them all. There's just one problem: the mouth of a well is only so wide, and it's been a long time since you looked up. You've half forgotten there's a sky.
- **强项 / Strengths：** 深度全场最高、专业可靠、能成事 / the deepest digger of all, professionally solid, gets things done
- **盲区 / Blind spot：** 井口之外的一切：相邻学科、普通人的世界、和你领域无关的美。你的风险不是无知，是「以为外面没有值得看的」。/ Everything beyond the well's mouth: neighboring fields, ordinary people's worlds, beauty unrelated to your work. Your risk isn't ignorance — it's assuming there's nothing worth seeing out there.
- **地图初始形态 / Initial map：** 一个点亮到发白，其余整张图是雾——反差全场最大，所以他的地图最有冲击力。/ One point lit white-hot; the rest of the map fog — the strongest contrast of any type, which makes this map the most striking.
- **第一探 / First expedition：** 只推相邻学科（距离 1 步）：物理学家推一篇天文学史，程序员推一篇语言学趣谈。绝不能第一步就空降远方。/ A neighboring field only, one step away — never airdrop a Frog Scholar into the far distance on day one.

### 8. 水獭 Otter — 稀有度 25%

- **判词 ZH：** 你是全场最健康的一型：什么都翻起来玩玩，深的浅的、远的近的、同意的反对的，你都不排斥。你的问题也很温和：玩心太匀了，地图上全是浅滩和草地，没有一座你自己的山。
- **Verdict EN:** You're the healthiest type here: you pick everything up and play with it — deep or shallow, near or far, agreeable or not. Your problem is equally gentle: your curiosity is spread so evenly that your map is all shallows and meadows, with no mountain of your own.
- **强项 / Strengths：** 五维均衡、心态开放、最不容易被茧困住 / balanced on all five dimensions, open, the hardest to trap in a bubble
- **盲区 / Blind spot：** 主轴。什么都喜欢的人，最难回答「你最在乎什么」。/ A main axis. People who like everything struggle to answer "what do you care about most?"
- **地图初始形态 / Initial map：** 大面积半亮，雾很少，但也没有特别亮的点。/ Broadly half-lit, little fog, no brilliant point.
- **第一探 / First expedition：** 不推远方，推深度：在他最常看的主题里给一篇最硬的长文，帮他挖第一座山。/ Not distance — depth: the hardest long read inside his favorite topic, to start his first mountain.

---

## 六、结果 → 地图 → 探险 映射规则 / Result → Map → Expedition Mapping

1. **初始地图由 5 维分数直接生成**，不另做一套数据：某维 ≥ 65，该维对应区域初始点亮；45–64 半亮（雾薄）；< 45 全雾。动物的「地图初始形态」文案是对这个规则的形象说法，两者必须对得上，不能文案说全雾、图上却亮着。
   The initial map is generated directly from the five dimension scores — no separate dataset. ≥ 65: lit; 45–64: half-lit (thin fog); < 45: full fog. Each animal's "initial map" copy describes this rule figuratively; copy and picture must agree.
2. **维度与地图区域对应 / Dimension-to-region mapping：**
   - 广度 breadth → 主题大陆的数量 / number of topic continents lit
   - 深度 depth → 已亮区域的亮度与细节层级 / brightness and detail of lit regions
   - 新奇 novelty → 边缘地带雾的薄厚 / how thin the fog is at the edges
   - 异见 dissent → 「对岸」区域是否可见轮廓 / whether the "opposite shore" shows an outline
   - 远望 reach → 地图可见范围的大小（近景 / 全图）/ the map's visible radius
3. **第一次探险按动物定制（见第五节各动物条目）**，且全产品只许诺一件事：第一次探险距离用户现有区域 ≤ 2 步（井蛙、蚂蚁 ≤ 1 步）。
   The first expedition is tailored per animal (Section 5), under one product-wide promise: never more than 2 steps from lit territory (≤ 1 step for Frog Scholar and Ant).
4. **分享卡 / Share card：** 1080×1350，当前语言出图。内容：动物名 + 判词第一句 + 稀有度 + 一句盲区 + 产品名。盲区必须上卡——只晒好话的卡传播力减半，带刺的卡才有人想测自己。
   1080×1350, in the current locale. Contents: animal name, first sentence of the verdict, rarity, one line of blind spot, product name. The blind spot must be on the card — a card with only praise shares half as well; the sting is what makes others want to take the test.
5. **重测 / Retake：** 允许 30 天后重测，动物变化时给出「迁徙报告」：上次是蜂鸟，这次是猫头鹰，地图上标出这段时间点亮了什么。重测不是纠错，是成长叙事。
   Retakes allowed after 30 days. If the animal changes, issue a "migration report" — last time Hummingbird, now Owl — marking what was lit in between. A retake is a growth story, not a correction.

---

## 七、开发落地顺序 / Build Order

1. 语言包与 key 骨架（zh-CN / en-US）+ key 完整性校验脚本
2. 计分表（单份 JSON）+ 判定规则 + 单元测试：构造 8 组典型答案，断言各出对应动物；同一答案双语各跑一次结果一致
3. 答题页（进度、中途预告、双语切换不丢进度）
4. 结果页 + 分享卡（双语各验一张）
5. 初始地图（按第六节规则生成）+ 按动物定制的第一探

*待 MZ 审：题目口吻、8 种动物判词的刺度、稀有度数字。改品味即可，结构不用动。*
*For MZ's review: question tone, how sharp each blind spot should be, rarity figures. Taste edits only — the structure stands.*
