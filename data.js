/* infovore — data.js
 * All copy behind keys (zh / en), scoring locale-independent.
 * Generated from SPEC.md (v1.0, 2026-11-23). No network, no backend.
 * UMD-style: works in the browser (window) and in Node (module.exports) for tests.
 */
(function (root, factory) {
  var data = factory();
  if (typeof module !== "undefined" && module.exports) { module.exports = data; }
  root.INFOVORE = data;
  root.UI = data.UI; root.QUESTIONS = data.QUESTIONS; root.ANIMALS = data.ANIMALS;
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";
  var UI = {
    "zh": {
      "app": {
        "title": "infovore · 信息动物测试",
        "brand": "infovore",
        "tagline": "测测你是哪种信息动物"
      },
      "intro": {
        "title": "你是哪种信息动物？",
        "body": "32 道情境题，3 分钟左右。不问立场，只问习惯——你平时怎么吃信息，就会测出你是哪种动物。结果还会生成你的第一张认知地图：哪里亮着，哪里还是一片雾。",
        "start": "开始测试",
        "note": "这是一个信息食性小测，不是科学诊断。所有答案只存在你自己的浏览器里，不上传。",
        "resume": "查看上次结果",
        "meta": "32 题 · 约 3 分钟 · 中英双语"
      },
      "quiz": {
        "progress": "第 {current} / {total} 题",
        "teaser10": "已确认一项：你的远望感比多数人强，但时间维度很单一。",
        "teaser20": "你的动物轮廓已经出现了，它有一个很明显的盲区……",
        "teaserContinue": "继续",
        "back": "上一题"
      },
      "result": {
        "youAre": "你的信息动物是",
        "rarity": "只占 {pct}% 的人是这一型",
        "verdictTitle": "判词",
        "strengthsTitle": "你的强项",
        "blindspotTitle": "你的盲区",
        "dimsTitle": "你的五维食性",
        "share": "生成分享卡",
        "retake": "重新测试",
        "firstStepTitle": "为你定制的第一探"
      },
      "dims": {
        "breadth": "广度",
        "depth": "深度",
        "novelty": "新奇耐受",
        "dissent": "异见耐受",
        "reach": "远望"
      },
      "map": {
        "title": "你的认知地图 · 初版",
        "cta": "看看你的茧长什么样",
        "hint": "亮处是你常去的地方，雾里是你还没走到的世界。这张图会随着你的探险慢慢长大。",
        "shapeTitle": "这张图的形状",
        "lit": "已点亮",
        "half": "半亮 · 雾薄",
        "fog": "全雾",
        "regions": {
          "breadth": {
            "name": "主题大陆",
            "desc": "你涉猎的主题有多少片大陆"
          },
          "depth": {
            "name": "亮度与细节",
            "desc": "已亮区域挖得有多深、看得多细"
          },
          "novelty": {
            "name": "边缘地带",
            "desc": "地图边缘的雾有多薄，陌生事物离你多近"
          },
          "dissent": {
            "name": "对岸",
            "desc": "和你观点相反的那片陆地，是否看得见轮廓"
          },
          "reach": {
            "name": "可见范围",
            "desc": "你的关心能到达多远——地理、时间与人群的距离"
          }
        }
      },
      "expedition": {
        "title": "第一次探险",
        "start": "这就是你的第一探"
      },
      "share": {
        "blindspotLabel": "盲区",
        "rarityLabel": "稀有度 {pct}%",
        "footer": "infovore · 信息动物测试"
      },
      "lang": {
        "zh": "中文",
        "en": "EN"
      }
    },
    "en": {
      "app": {
        "title": "infovore · What's Your Information Animal?",
        "brand": "infovore",
        "tagline": "Find out what kind of information animal you are"
      },
      "intro": {
        "title": "What kind of information animal are you?",
        "body": "32 scenario questions, about 3 minutes. No questions about your positions — only your habits. How you feed on information decides which animal you are. Your result also generates your first cognitive map: what is lit, and what is still fog.",
        "start": "Start the test",
        "note": "This is a small test of your information diet, not a scientific diagnosis. Your answers live only in your own browser and are never uploaded.",
        "resume": "View your last result",
        "meta": "32 questions · about 3 min · bilingual zh / en"
      },
      "quiz": {
        "progress": "Question {current} / {total}",
        "teaser10": "One thing is already clear: your sense of the far-away is stronger than most — but your time horizon is narrow.",
        "teaser20": "Your animal is taking shape — and it has one very obvious blind spot…",
        "teaserContinue": "Continue",
        "back": "Back"
      },
      "result": {
        "youAre": "Your information animal is",
        "rarity": "Only {pct}% of people are this type",
        "verdictTitle": "The verdict",
        "strengthsTitle": "Your strengths",
        "blindspotTitle": "Your blind spot",
        "dimsTitle": "Your five dimensions",
        "share": "Make a share card",
        "retake": "Retake the test",
        "firstStepTitle": "Your tailored first expedition"
      },
      "dims": {
        "breadth": "Breadth",
        "depth": "Depth",
        "novelty": "Novelty tolerance",
        "dissent": "Dissent tolerance",
        "reach": "Reach"
      },
      "map": {
        "title": "Your cognitive map · first draft",
        "cta": "See what your bubble looks like",
        "hint": "The lit places are where you usually go; the fog is the world you haven't reached yet. This map grows as you explore.",
        "shapeTitle": "The shape of this map",
        "lit": "Lit",
        "half": "Half-lit · thin fog",
        "fog": "Full fog",
        "regions": {
          "breadth": {
            "name": "Topic continents",
            "desc": "How many continents of topics you range across"
          },
          "depth": {
            "name": "Brightness & detail",
            "desc": "How deep and how fine your lit regions are dug"
          },
          "novelty": {
            "name": "The edges",
            "desc": "How thin the fog is at the edges — how close the unfamiliar sits"
          },
          "dissent": {
            "name": "The opposite shore",
            "desc": "Whether the land of opposing views shows an outline at all"
          },
          "reach": {
            "name": "Visible radius",
            "desc": "How far your concern reaches — across geography, time and people"
          }
        }
      },
      "expedition": {
        "title": "First expedition",
        "start": "This is your first expedition"
      },
      "share": {
        "blindspotLabel": "Blind spot",
        "rarityLabel": "Rarity {pct}%",
        "footer": "infovore · What's Your Information Animal?"
      },
      "lang": {
        "zh": "中文",
        "en": "EN"
      }
    }
  };

  var QUESTIONS = [
    {
      "id": "q01",
      "prompt": {
        "zh": "刷到一个完全陌生领域的视频（比如深海采矿），你通常会？",
        "en": "You come across a video on a topic you know nothing about (say, deep-sea mining). You usually:"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "当场看完，万一有意思呢",
            "en": "Watch it right away — it might be interesting"
          },
          "score": {
            "breadth": 1,
            "depth": 0,
            "novelty": 2,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "先点个收藏，有空再看",
            "en": "Save it for later"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 1,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "直接划走，不关我事",
            "en": "Swipe past — not my thing"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "看标题和评论区，大概知道讲啥就行",
            "en": "Read the title and comments to get the gist"
          },
          "score": {
            "breadth": 1,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q02",
      "prompt": {
        "zh": "一篇写得很好的文章，结论正好反驳你支持的观点。你会？",
        "en": "A well-written article argues the opposite of what you believe. You:"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "看完，还会想想它哪里说得有道理",
            "en": "Finish it and think about where it has a point"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 2,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "看完，但主要是为了找它的漏洞",
            "en": "Finish it, mostly to find its holes"
          },
          "score": {
            "breadth": 0,
            "depth": 1,
            "novelty": 0,
            "dissent": 1,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "看个开头就关了，立场不对",
            "en": "Close it early — wrong side"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "转给持同样观点的朋友一起批判",
            "en": "Send it to like-minded friends to pick apart together"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q03",
      "prompt": {
        "zh": "去一个陌生小城吃饭，你会选？",
        "en": "Eating in an unfamiliar small town, you pick:"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "当地人排队的小馆子",
            "en": "The small place with a line of locals"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 2,
            "dissent": 0,
            "reach": 1,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "评分最高、评价最多的",
            "en": "The highest-rated place with the most reviews"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "连锁店，稳妥不出错",
            "en": "A chain — safe, predictable"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "先逛一圈，看哪家顺眼进哪家",
            "en": "Wander first, walk into whichever feels right"
          },
          "score": {
            "breadth": 1,
            "depth": 0,
            "novelty": 1,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q04",
      "prompt": {
        "zh": "你关注的人里，职业和你差得最远的是？",
        "en": "Among the people you follow, whose job is furthest from yours?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "有好几个，农民、画家、运动员都有",
            "en": "Several — a farmer, a painter, an athlete…"
          },
          "score": {
            "breadth": 2,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 2,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "有一两个吧",
            "en": "One or two, I think"
          },
          "score": {
            "breadth": 1,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 1,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "基本都是同行和同好",
            "en": "Mostly people in my field and hobbies"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "想不起来，我不太关注人",
            "en": "Can't recall — I don't really follow people"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q05",
      "prompt": {
        "zh": "同一条新闻，你最先信哪种说法？",
        "en": "For the same news story, which do you trust first?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "带数据和原始来源的",
            "en": "The one with data and primary sources"
          },
          "score": {
            "breadth": 0,
            "depth": 2,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "当事人的亲历讲述",
            "en": "The first-hand account of someone who was there"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 1,
            "reach": 1,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "权威机构的结论",
            "en": "The conclusion of an authoritative institution"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "我常看的那几个博主怎么说",
            "en": "What the commentators I follow say about it"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q06",
      "prompt": {
        "zh": "早上醒来打开手机，你先看什么？",
        "en": "First thing on your phone in the morning?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "本地新闻和身边人的动态",
            "en": "Local news and updates from people around me"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 1
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "国际新闻或行业大事",
            "en": "World news or big industry stories"
          },
          "score": {
            "breadth": 1,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 2,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "昨晚没看完的长内容接着看",
            "en": "The long piece I didn't finish last night"
          },
          "score": {
            "breadth": 0,
            "depth": 2,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "随便刷，推什么看什么",
            "en": "Whatever the feed gives me"
          },
          "score": {
            "breadth": 1,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q07",
      "prompt": {
        "zh": "你的收藏夹/稍后再看，大概是什么状态？",
        "en": "Your saved / watch-later list is mostly:"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "存的都会看完，还分类",
            "en": "Things I actually finish, organized"
          },
          "score": {
            "breadth": 0,
            "depth": 2,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "存了很多，看了一小半",
            "en": "A lot saved, a fraction watched"
          },
          "score": {
            "breadth": 1,
            "depth": 0,
            "novelty": 1,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "存了就忘了，越攒越多",
            "en": "Saved and forgotten, ever growing"
          },
          "score": {
            "breadth": 1,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "我基本不收藏",
            "en": "I rarely save anything"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q08",
      "prompt": {
        "zh": "朋友推荐你一本完全不沾边的书，你会？",
        "en": "A friend recommends a book totally outside your world. You:"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "真去读，读不下去再说",
            "en": "Actually read it; I can stop if it fails"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 2,
            "dissent": 1,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "先看看简介和书评再决定",
            "en": "Check the summary and reviews first"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 1,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "礼貌收下，基本不会打开",
            "en": "Accept politely, unlikely to open"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "反手推荐他一本我的书",
            "en": "Recommend one of mine back instead"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q09",
      "prompt": {
        "zh": "一个热点事件刚出来、说法还很乱时，你会？",
        "en": "When a breaking story is still messy and contested, you:"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "等几天，看几方说法再下判断",
            "en": "Wait days and read several sides before judging"
          },
          "score": {
            "breadth": 0,
            "depth": 1,
            "novelty": 0,
            "dissent": 2,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "先看我信任的来源怎么说",
            "en": "See what my trusted sources say first"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "立刻表态，晚了就没热度了",
            "en": "Take a position fast, before it cools"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "不关心，等它过去",
            "en": "Ignore it until it blows over"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q10",
      "prompt": {
        "zh": "你更愿意花一小时了解哪种事？",
        "en": "You'd rather spend an hour on:"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "一百年前的普通人怎么过日子",
            "en": "How ordinary people lived a century ago"
          },
          "score": {
            "breadth": 0,
            "depth": 1,
            "novelty": 0,
            "dissent": 0,
            "reach": 2,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "下一个十年会发生什么",
            "en": "What the next decade might bring"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 1,
            "dissent": 0,
            "reach": 1,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "今天最热的那件事的来龙去脉",
            "en": "The full backstory of today's biggest story"
          },
          "score": {
            "breadth": 0,
            "depth": 1,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "我所在行业的新动态",
            "en": "The latest in my own field"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q11",
      "prompt": {
        "zh": "一篇两万字的深度报道摆在面前，你会？",
        "en": "Faced with a 20,000-word deep-dive report, you:"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "一口气或分几次读完",
            "en": "Read it through, in one go or in sittings"
          },
          "score": {
            "breadth": 0,
            "depth": 2,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "先看摘要和小标题，挑感兴趣的段读",
            "en": "Skim headings, read the parts that hook me"
          },
          "score": {
            "breadth": 1,
            "depth": 1,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "太长了，找个讲它的短视频",
            "en": "Too long — find a short video about it"
          },
          "score": {
            "breadth": 1,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "直接关掉",
            "en": "Close it"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q12",
      "prompt": {
        "zh": "你的短视频/信息流使用更像哪种？",
        "en": "Your short-video / feed use looks more like:"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "一个主题能连着刷很久，越刷越深",
            "en": "I can stay on one topic and go deeper and deeper"
          },
          "score": {
            "breadth": 0,
            "depth": 2,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "什么都有，跳来跳去才过瘾",
            "en": "A bit of everything — jumping around is the fun"
          },
          "score": {
            "breadth": 2,
            "depth": 0,
            "novelty": 1,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "基本只刷我关注的那几类",
            "en": "Mostly the few categories I follow"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "刷到重复的就烦，喜欢被推没见过的",
            "en": "Repeats bore me; I like being shown things I've never seen"
          },
          "score": {
            "breadth": 1,
            "depth": 0,
            "novelty": 2,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q13",
      "prompt": {
        "zh": "你会看非母语的内容吗（带字幕/翻译）？",
        "en": "Do you consume content in a language that isn't your first?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "经常，有些东西只有外语版",
            "en": "Often — some things only exist in another language"
          },
          "score": {
            "breadth": 1,
            "depth": 0,
            "novelty": 1,
            "dissent": 0,
            "reach": 2,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "偶尔，碰上了就看",
            "en": "Sometimes, when it comes up"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 1,
            "dissent": 0,
            "reach": 1,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "很少，太费劲",
            "en": "Rarely — too much effort"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "从不",
            "en": "Never"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q14",
      "prompt": {
        "zh": "一个和你行业完全无关的讲座/展览，你会去吗？",
        "en": "A talk or exhibition totally unrelated to your field — would you go?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "会，经常去这种",
            "en": "Yes, I go to those fairly often"
          },
          "score": {
            "breadth": 1,
            "depth": 0,
            "novelty": 2,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "朋友拉着就去",
            "en": "If a friend drags me along"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 1,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "没时间，不如歇着",
            "en": "No time; I'd rather rest"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "只去对我有用的",
            "en": "Only ones useful to me"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q15",
      "prompt": {
        "zh": "回想一下，你上一次被说服、改变观点是什么时候？",
        "en": "When did an argument last actually change your mind?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "最近就有，还不止一次",
            "en": "Recently — more than once"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 2,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "有过，但印象不深了",
            "en": "It happened, but I barely remember"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 1,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "很难，我的观点一般不太变",
            "en": "Rarely — my views don't move much"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "我不需要被说服，我查证后自己判断",
            "en": "I don't get persuaded; I verify and judge myself"
          },
          "score": {
            "breadth": 0,
            "depth": 1,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q16",
      "prompt": {
        "zh": "两个标题，你先点哪个？",
        "en": "Two headlines — which do you click first?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "《你家附近要修一条新地铁》",
            "en": "\"A new subway line is coming to your neighborhood\""
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 1
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "《一个非洲国家正在试验全民基本收入》",
            "en": "\"An African country is piloting universal basic income\""
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 1,
            "dissent": 0,
            "reach": 2,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "《一百年前的人预言今天，错得离谱》",
            "en": "\"People 100 years ago predicted today — and got it hilariously wrong\""
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 1,
            "dissent": 0,
            "reach": 1,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "《你所在行业今年的薪酬报告》",
            "en": "\"This year's salary report for your industry\""
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q17",
      "prompt": {
        "zh": "你的歌单/播客列表是什么风格？",
        "en": "Your playlist / podcast list is:"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "风格跨度很大，古典到说唱都有",
            "en": "All over the place — classical to rap"
          },
          "score": {
            "breadth": 2,
            "depth": 0,
            "novelty": 1,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "就那几类，听着舒服最重要",
            "en": "A few genres — comfort first"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "总在挖冷门和小众的",
            "en": "Always digging for obscure finds"
          },
          "score": {
            "breadth": 0,
            "depth": 1,
            "novelty": 2,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "基本不听，都是别人推什么听什么",
            "en": "I mostly listen to what's recommended to me"
          },
          "score": {
            "breadth": 1,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q18",
      "prompt": {
        "zh": "你从长辈或小孩那里得到过有用的新认知吗？",
        "en": "Have you learned something genuinely new from an elder or a kid recently?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "经常，他们看世界的方式和我完全不同",
            "en": "Often — they see the world completely differently"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 2,
            "reach": 1,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "偶尔有",
            "en": "Occasionally"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 1,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "很少，代沟太大聊不到一起",
            "en": "Rarely — the generation gap is too big"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "基本不和他们聊这些",
            "en": "We don't really talk about such things"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q19",
      "prompt": {
        "zh": "发现算法老推同类内容给你时，你会？",
        "en": "When you notice the algorithm keeps feeding you the same kind of thing, you:"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "主动搜点别的，把它「教」歪",
            "en": "Deliberately search other topics to throw it off"
          },
          "score": {
            "breadth": 1,
            "depth": 0,
            "novelty": 2,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "无所谓，推的正是我想看的",
            "en": "Fine with it — it's what I want anyway"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "有点腻，但也懒得管",
            "en": "A bit bored, but I let it be"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 1,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "没注意过这个问题",
            "en": "Never noticed"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q20",
      "prompt": {
        "zh": "工作/学习中遇到一个专业问题，你通常挖到哪一步？",
        "en": "A hard question in your work or study — how far do you dig?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "查到原始文献/源头才算完",
            "en": "Down to the original paper or source"
          },
          "score": {
            "breadth": 0,
            "depth": 2,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "找到一个可靠答案就够了",
            "en": "Until I have one reliable answer"
          },
          "score": {
            "breadth": 0,
            "depth": 1,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "问问同行/同学怎么做的",
            "en": "Ask peers how they handled it"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "先放着，绕过去",
            "en": "Set it aside and work around it"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q21",
      "prompt": {
        "zh": "你所在的群/朋友圈里，多数人支持一件事，而你不太认同。你会？",
        "en": "Most people in your group support something you doubt. You:"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "在群里说出我的不同看法",
            "en": "Say my disagreement in the group"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 1,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "不出声，但会私下找资料核对",
            "en": "Stay quiet, but go check the facts myself"
          },
          "score": {
            "breadth": 0,
            "depth": 1,
            "novelty": 0,
            "dissent": 1,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "不出声，慢慢也就认同了",
            "en": "Stay quiet, and gradually come around"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "退群/屏蔽，眼不见为净",
            "en": "Leave or mute — out of sight, out of mind"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q22",
      "prompt": {
        "zh": "一部题材冷门的纪录片（比如讲真菌的），你会？",
        "en": "A documentary on an obscure subject (say, fungi) — you:"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "点开看，很可能看完",
            "en": "Start it, and probably finish it"
          },
          "score": {
            "breadth": 0,
            "depth": 1,
            "novelty": 2,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "看个十几分钟试试水",
            "en": "Give it fifteen minutes"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 1,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "存起来，大概率不会看",
            "en": "Save it; probably never watch"
          },
          "score": {
            "breadth": 1,
            "depth": 0,
            "novelty": 1,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "划过，提不起兴趣",
            "en": "Pass — can't get interested"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q23",
      "prompt": {
        "zh": "买一件贵一点的东西之前，你怎么做功课？",
        "en": "Before an expensive purchase, your research is:"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "横向对比很多款，还看参数和测评原文",
            "en": "Compare many options, read specs and full reviews"
          },
          "score": {
            "breadth": 1,
            "depth": 2,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "看几个口碑推荐就定了",
            "en": "A few trusted recommendations and decide"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "买我用惯的品牌",
            "en": "Stick with my usual brand"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "看销量第一名",
            "en": "Buy the bestseller"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q24",
      "prompt": {
        "zh": "你读小说/看剧的类型跨度？",
        "en": "The fiction you read or watch spans:"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "什么类型都看，悬疑科幻言情历史都行",
            "en": "Everything — mystery, sci-fi, romance, history"
          },
          "score": {
            "breadth": 2,
            "depth": 0,
            "novelty": 1,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "就爱那一两类，反复看",
            "en": "One or two genres, again and again"
          },
          "score": {
            "breadth": 0,
            "depth": 1,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "只看真实题材/非虚构",
            "en": "Only true stories and non-fiction"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "基本不看小说和剧",
            "en": "Hardly any fiction"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q25",
      "prompt": {
        "zh": "关于过去，你更好奇哪一段？",
        "en": "Which past are you most curious about?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "大历史：朝代、战争、文明兴衰",
            "en": "Big history — dynasties, wars, rising and falling civilizations"
          },
          "score": {
            "breadth": 0,
            "depth": 1,
            "novelty": 0,
            "dissent": 0,
            "reach": 2,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "小历史：普通人的吃穿住行",
            "en": "Small history — how ordinary people ate, dressed, lived"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 1,
            "dissent": 0,
            "reach": 1,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "我家/我家乡的过去",
            "en": "My family's and hometown's past"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 1
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "过去没意思，我只关心未来",
            "en": "The past bores me — only the future matters"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q26",
      "prompt": {
        "zh": "有机会跟一个职业离你很远的人（比如渔民、法医）聊一小时，你会？",
        "en": "A chance to talk for an hour with someone whose job is far from yours (a fisher, a forensic examiner) — you:"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "特别想去，问题都想好了",
            "en": "Absolutely — I already have questions"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 2,
            "dissent": 0,
            "reach": 2,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "去吧，听听也挺有意思",
            "en": "Sure, could be interesting"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 1,
            "dissent": 0,
            "reach": 1,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "算了，聊不到一起尴尬",
            "en": "Pass — we'd have nothing to say"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "不如跟同行深聊一小时",
            "en": "I'd rather spend the hour deep with a peer"
          },
          "score": {
            "breadth": 0,
            "depth": 1,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q27",
      "prompt": {
        "zh": "什么样的说法最容易说服你？",
        "en": "What persuades you most?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "严密的数据和逻辑链",
            "en": "Solid data and a tight chain of logic"
          },
          "score": {
            "breadth": 0,
            "depth": 2,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "一个真实的人讲他的亲身经历",
            "en": "A real person telling what happened to them"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 1,
            "reach": 1,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "双方辩论，看谁驳不倒",
            "en": "A debate — whichever side survives"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 2,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "我尊敬的人的判断",
            "en": "The judgment of someone I respect"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q28",
      "prompt": {
        "zh": "难得的休息日，你更想怎么过？",
        "en": "A rare day off — you'd rather:"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "去一个从没去过的地方，哪怕就在本市",
            "en": "Go somewhere I've never been, even within my own city"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 2,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "去我最熟最舒服的那几个地方",
            "en": "My favorite familiar spots"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "在家，刷我攒下的内容",
            "en": "Stay in with my saved-up content"
          },
          "score": {
            "breadth": 1,
            "depth": 1,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "约老朋友，还是老节目",
            "en": "Old friends, the usual routine"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q29",
      "prompt": {
        "zh": "你会主动取关/清理你的关注列表吗？",
        "en": "Do you actively prune your following list?"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "会，还会刻意加一些「不一样的声音」",
            "en": "Yes — and I deliberately add a few \"different voices\""
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 1,
            "dissent": 2,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "偶尔清理太吵的",
            "en": "Occasionally mute the noisy ones"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 1,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "从不，关注了就放着",
            "en": "Never — it just accumulates"
          },
          "score": {
            "breadth": 1,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "我的关注很少，都是精选",
            "en": "My list is small and hand-picked"
          },
          "score": {
            "breadth": 0,
            "depth": 1,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q30",
      "prompt": {
        "zh": "读东西时遇到一个完全不懂的术语，你会？",
        "en": "You hit a term you don't understand at all. You:"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "当场查，查到明白为止",
            "en": "Look it up on the spot, until it's clear"
          },
          "score": {
            "breadth": 0,
            "depth": 2,
            "novelty": 1,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "大概猜个意思，接着读",
            "en": "Guess from context and read on"
          },
          "score": {
            "breadth": 1,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "标记一下，回头再说（多半忘了）",
            "en": "Mark it for later (and usually forget)"
          },
          "score": {
            "breadth": 0,
            "depth": 1,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "跳过这段",
            "en": "Skip that part"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q31",
      "prompt": {
        "zh": "一篇一百年前的文章，观点和现在很不一样，你会觉得？",
        "en": "An essay from a century ago whose views clash with today's — you feel:"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "有意思，想理解他为什么这么想",
            "en": "Interesting — I want to understand why they thought that"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 2,
            "reach": 2,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "有些道理被我们丢了",
            "en": "Some of it we've wrongly lost"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 1,
            "reach": 1,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "过时了，不值得看",
            "en": "Outdated, not worth reading"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "看他错得多离谱，挺好笑",
            "en": "Amusing to see how wrong they were"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 1,
            "near": 0
          }
        }
      ]
    },
    {
      "id": "q32",
      "prompt": {
        "zh": "如果未来一周只能留一种信息来源，你留哪个？",
        "en": "If you could keep only one information source for a week, you'd keep:"
      },
      "options": [
        {
          "id": "a",
          "text": {
            "zh": "一份什么都报的综合媒体",
            "en": "A general outlet that covers everything"
          },
          "score": {
            "breadth": 2,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "b",
          "text": {
            "zh": "我最深耕的那个专业来源",
            "en": "The specialist source in my deepest field"
          },
          "score": {
            "breadth": 0,
            "depth": 2,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 0
          }
        },
        {
          "id": "c",
          "text": {
            "zh": "一个专讲远方和陌生人的来源",
            "en": "A source devoted to faraway places and strangers"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 1,
            "dissent": 0,
            "reach": 2,
            "near": 0
          }
        },
        {
          "id": "d",
          "text": {
            "zh": "身边人的口口相传",
            "en": "Word of mouth from people around me"
          },
          "score": {
            "breadth": 0,
            "depth": 0,
            "novelty": 0,
            "dissent": 0,
            "reach": 0,
            "near": 1
          }
        }
      ]
    }
  ];

  var ANIMALS = {
    "whale": {
      "rarity": 9,
      "name": {
        "zh": "深海鲸",
        "en": "Deep-Sea Whale"
      },
      "tagline": {
        "zh": "你吃东西不挑数量，挑深度。",
        "en": "You don't graze — you dive."
      },
      "verdict": {
        "zh": "你吃东西不挑数量，挑深度。别人浮在水面上看热闹，你一沉就是几千米：一本书读完、一件事追到源头、一个问题想不通可以惦记一周。你的世界不大，但很深，而且安静。",
        "en": "You don't graze — you dive. While others skim the surface, you sink thousands of meters: a book finished, a story traced to its source, a question carried around for a week. Your world isn't wide, but it is deep, and quiet."
      },
      "strengths": {
        "zh": "深度高、能独处思考、不被热闹带走",
        "en": "depth, solitary thinking, immune to hype"
      },
      "blindspot": {
        "zh": "速度。你在深处想明白的时候，水面上世界已经换了一茬。远方和当下，你都容易迟到。",
        "en": "Speed. By the time you've thought it through down below, the surface world has moved on. You tend to arrive late — to the faraway, and to the present."
      },
      "map_shape": {
        "zh": "一小片区域极亮极密，其余大片是雾，海面（当代热点与远方）最暗。",
        "en": "One small region, intensely lit; the surface — today's world and faraway places — darkest."
      },
      "first_step": {
        "zh": "推一件正在发生的远方小事（非大事），限时 5 分钟看完就走，练「浮上来透口气」。",
        "en": "A small faraway story happening right now, five minutes, then surface."
      }
    },
    "hummingbird": {
      "rarity": 18,
      "name": {
        "zh": "蜂鸟",
        "en": "Hummingbird"
      },
      "tagline": {
        "zh": "你一天要采一百朵花。",
        "en": "You visit a hundred flowers a day."
      },
      "verdict": {
        "zh": "你一天要采一百朵花。什么热点都沾一点，什么领域都认得门牌号，消息比谁都灵。你的问题不在视野，在落脚：花都尝过了，哪一朵是你的？",
        "en": "You visit a hundred flowers a day. Every trend, every field — you know all the addresses and hear everything first. Your problem isn't range, it's landing: you've tasted every flower; which one is yours?"
      },
      "strengths": {
        "zh": "广度极高、反应快、天然抗茧",
        "en": "huge breadth, fast, naturally bubble-resistant on topics"
      },
      "blindspot": {
        "zh": "深度。收藏夹是你的第二大脑，也是你的坟墓——存了等于看过，是你最熟练的自我欺骗。",
        "en": "Depth. Your saved list is your second brain and your graveyard — \"saved\" is not \"seen,\" and you know it."
      },
      "map_shape": {
        "zh": "亮点遍地但全是浅滩，没有一处深水区。",
        "en": "Lit everywhere, but all shallows; no deep water anywhere."
      },
      "first_step": {
        "zh": "不给新东西。从他的收藏夹里捞一篇存了最久的，让他真读完——点亮第一个深水点。",
        "en": "Nothing new: pull the oldest saved item and actually finish it — light the first deep point."
      }
    },
    "owl": {
      "rarity": 11,
      "name": {
        "zh": "猫头鹰",
        "en": "Owl"
      },
      "tagline": {
        "zh": "你在夜里睁眼。",
        "en": "Your eyes open at night."
      },
      "verdict": {
        "zh": "你在夜里睁眼。别人不看的角落、冷门的题材、没人转的长文，你看得津津有味，而且只信自己的眼睛。你的世界很独特，独特到有时候只有你一个人住在里面。",
        "en": "Your eyes open at night. Neglected corners, obscure subjects, the long read nobody shares — you savor them all, and you trust only your own eyes. Your world is distinctive; so distinctive that sometimes you're its only resident."
      },
      "strengths": {
        "zh": "新奇耐受高、观察细、独立",
        "en": "high novelty tolerance, sharp observation, independence"
      },
      "blindspot": {
        "zh": "人群。你很少走进热闹里听人当面说话——观点你研究得多，活人你接触得少。",
        "en": "People. You rarely enter the crowd and listen to anyone speak in person — you study viewpoints far more than you meet people."
      },
      "map_shape": {
        "zh": "冷门区域点点星光，主干道（大众话题与身边人）反而是暗的。",
        "en": "Scattered lights in obscure regions; the main roads — common topics, nearby people — stay dark."
      },
      "first_step": {
        "zh": "推一个普通人的亲历讲述（非专家、非冷门题材），练「听人说话」。",
        "en": "A first-person account by an ordinary person — practice listening to people, not topics."
      }
    },
    "fox": {
      "rarity": 8,
      "name": {
        "zh": "狐狸",
        "en": "Fox"
      },
      "tagline": {
        "zh": "哪里有缝你钻哪里。",
        "en": "Wherever there's a gap, you slip through it."
      },
      "verdict": {
        "zh": "哪里有缝你钻哪里。陌生的你不怕，反对你的你也听得完，天生就是破茧的体质。朋友都觉得你什么都懂——只有你自己知道，什么你都只懂到门口。",
        "en": "Wherever there's a gap, you slip through it. The unfamiliar doesn't scare you; neither does disagreement. You were born bubble-proof. Your friends think you know everything — only you know you know most of it just up to the doorway."
      },
      "strengths": {
        "zh": "新奇与异见双高、灵活、好奇心真",
        "en": "novelty and dissent both high, flexible, genuinely curious"
      },
      "blindspot": {
        "zh": "站定。什么都能理解的结果，是什么都不肯选边、不肯深耕。你的地图全是路，没有家。",
        "en": "Commitment. Understanding everything can mean never standing anywhere or tending one patch. Your map is all roads and no home."
      },
      "map_shape": {
        "zh": "线路四通八达，但没有一个节点特别亮。",
        "en": "Routes everywhere; no single node shines."
      },
      "first_step": {
        "zh": "推一个需要表态的题：看完必须选「我认同 / 我不认同」并写一句理由，练落脚。",
        "en": "A piece that demands a stance: agree or disagree, in one written sentence — practice landing."
      }
    },
    "ant": {
      "rarity": 16,
      "name": {
        "zh": "蚂蚁",
        "en": "Ant"
      },
      "tagline": {
        "zh": "你的信息世界组织得井井有条。",
        "en": "Your information world is impeccably organized."
      },
      "verdict": {
        "zh": "你的信息世界组织得井井有条：群里谁有事你都知道，同行的风吹草动逃不过你，身边人有难你第一个到。你的勤劳无可挑剔——只是蚁丘之外，还有一整个夏天。",
        "en": "Your information world is impeccably organized: you know everything in your group, miss nothing in your field, and show up first when someone nearby is in trouble. Your diligence is beyond reproach — it's just that beyond the anthill, there's a whole summer."
      },
      "strengths": {
        "zh": "近距离信息最灵、可靠、社群信任高",
        "en": "unmatched nearby intelligence, reliability, community trust"
      },
      "blindspot": {
        "zh": "远方与异见。群外的人过着什么日子、群里共识之外的说法，你的世界里几乎没有入口。",
        "en": "Distance and dissent. How people outside the group live, and what is said beyond the group's consensus, barely have a door into your world."
      },
      "map_shape": {
        "zh": "中心一小圈极亮，边缘陡然全黑，像一座岛的夜灯。",
        "en": "A tiny, bright center; darkness falling off a cliff at the edges."
      },
      "first_step": {
        "zh": "推蚁丘外「一条街」的东西：同城但不同人群的生活（比如夜班司机），距离 1 步，不吓人。",
        "en": "One street beyond the hill: life of a different crowd in the same city — one step away, not scary."
      }
    },
    "migrant": {
      "rarity": 7,
      "name": {
        "zh": "候鸟",
        "en": "Migrant Bird"
      },
      "tagline": {
        "zh": "你的视野跟着季节和大事迁徙。",
        "en": "Your attention migrates with seasons and great events."
      },
      "verdict": {
        "zh": "你的视野跟着季节和大事迁徙：哪里在打仗、哪里在选举、哪里的技术在爆发，你都飞去看过。你的世界地图是全场最完整的——除了你脚下这一小块，你反而不熟。",
        "en": "Your attention migrates with seasons and great events: wherever there's a war, an election, a breakthrough, you've flown in for a look. Your world map is the most complete of anyone's — except for the small patch right under your feet."
      },
      "strengths": {
        "zh": "远望极高、全球感、议题感强",
        "en": "exceptional reach, global sense, issue awareness"
      },
      "blindspot": {
        "zh": "落地。远方的苦难你如数家珍，身边人的生活你一知半解；大叙事很满，小日子很空。",
        "en": "Landing. You can recite distant suffering in detail and know surprisingly little about the lives around you; big narratives full, small days empty."
      },
      "map_shape": {
        "zh": "远处大陆都亮着，正中心（本地与身边）是一块安静的雾。",
        "en": "Distant continents lit; the very center — local, nearby — a quiet fog."
      },
      "first_step": {
        "zh": "推本地题：自己城市里一个正在消失的老行当，练「低头看」。",
        "en": "A local story: a vanishing old trade in the user's own city — practice looking down."
      }
    },
    "frog_scholar": {
      "rarity": 6,
      "name": {
        "zh": "井蛙学者",
        "en": "The Frog Scholar"
      },
      "tagline": {
        "zh": "先说好话：你的井挖得是真深。",
        "en": "Credit first: your well is genuinely deep."
      },
      "verdict": {
        "zh": "先说好话：你的井挖得是真深。在你的领域里，你的功力超过 94% 的人，查证、钻研、坐冷板凳，你都做得到。问题只有一个——井口就那么大，你已经很久没抬头看过天了，而且你有点忘了天还在。",
        "en": "Credit first: your well is genuinely deep. In your field you out-dig 94% of people — verification, grind, patience, you have them all. There's just one problem: the mouth of a well is only so wide, and it's been a long time since you looked up. You've half forgotten there's a sky."
      },
      "strengths": {
        "zh": "深度全场最高、专业可靠、能成事",
        "en": "the deepest digger of all, professionally solid, gets things done"
      },
      "blindspot": {
        "zh": "井口之外的一切：相邻学科、普通人的世界、和你领域无关的美。你的风险不是无知，是「以为外面没有值得看的」。",
        "en": "Everything beyond the well's mouth: neighboring fields, ordinary people's worlds, beauty unrelated to your work. Your risk isn't ignorance — it's assuming there's nothing worth seeing out there."
      },
      "map_shape": {
        "zh": "一个点亮到发白，其余整张图是雾——反差全场最大，所以他的地图最有冲击力。",
        "en": "One point lit white-hot; the rest of the map fog — the strongest contrast of any type, which makes this map the most striking."
      },
      "first_step": {
        "zh": "只推相邻学科（距离 1 步）：物理学家推一篇天文学史，程序员推一篇语言学趣谈。绝不能第一步就空降远方。",
        "en": "A neighboring field only, one step away — never airdrop a Frog Scholar into the far distance on day one."
      }
    },
    "otter": {
      "rarity": 25,
      "name": {
        "zh": "水獭",
        "en": "Otter"
      },
      "tagline": {
        "zh": "你是全场最健康的一型。",
        "en": "You're the healthiest type here."
      },
      "verdict": {
        "zh": "你是全场最健康的一型：什么都翻起来玩玩，深的浅的、远的近的、同意的反对的，你都不排斥。你的问题也很温和：玩心太匀了，地图上全是浅滩和草地，没有一座你自己的山。",
        "en": "You're the healthiest type here: you pick everything up and play with it — deep or shallow, near or far, agreeable or not. Your problem is equally gentle: your curiosity is spread so evenly that your map is all shallows and meadows, with no mountain of your own."
      },
      "strengths": {
        "zh": "五维均衡、心态开放、最不容易被茧困住",
        "en": "balanced on all five dimensions, open, the hardest to trap in a bubble"
      },
      "blindspot": {
        "zh": "主轴。什么都喜欢的人，最难回答「你最在乎什么」。",
        "en": "A main axis. People who like everything struggle to answer \"what do you care about most?\""
      },
      "map_shape": {
        "zh": "大面积半亮，雾很少，但也没有特别亮的点。",
        "en": "Broadly half-lit, little fog, no brilliant point."
      },
      "first_step": {
        "zh": "不推远方，推深度：在他最常看的主题里给一篇最硬的长文，帮他挖第一座山。",
        "en": "Not distance — depth: the hardest long read inside his favorite topic, to start his first mountain."
      }
    }
  };

  return { UI: UI, QUESTIONS: QUESTIONS, ANIMALS: ANIMALS,
           DIMENSIONS: ["breadth", "depth", "novelty", "dissent", "reach"] };
});
