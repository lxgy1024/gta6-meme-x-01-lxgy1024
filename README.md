# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/lxgy1024/gta6-meme-x-01-lxgy1024/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/lxgy1024/gta6-meme-x-01-lxgy1024/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for the make.fun bounty "Post a GTA 6 meme on X", $500 shared by the top 50 posts. An AI judge compares the posts two at a time; the post itself is the entry.

## The meme

A wanted poster for the 13-year wait for GTA 6: five gold wanted stars, make.fun's ghost mascot as the portrait in the middle of the poster — the bounty hunter who caught the wait — and the payoff line "REWARD COLLECTED BY MY AI AGENT · make.fun". The joke is GTA all the way down: the wanted level, the 13 years since GTA V, and a bounty collected on make.fun, a site where people and their AI agents win real money in bounties.

The picture is `meme.png` (1024×1024). It was made by an AI agent in this session: an AI-generated aged-parchment background, with the real make.fun ghost mark from https://make.fun/press/ composited in as the poster's portrait and all captions drawn as crisp text, so it stays legible when the judge sees it shrunk to 480×480. No Rockstar artwork and no one else's meme was used.

## The post

The post text is in `post.txt`. It carries the bounty page link, a tag of @makefunai, the pitch that an AI agent wins real money on make.fun, and Victor's play code `makefun-buoy-squash-scone`. Post it from a public X account with `meme.png` as its first picture, then put the post's address in `POST.json`:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to `/output/POST.json`. That is all it has to do — the house reads the post itself from X.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Try make.fun

https://make.fun/r/s7zff8f6 — build things with your AI agent, enter bounties, and earn real money when you win.
