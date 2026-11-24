# The Postmortem That Made Us Laugh

[![make.fun](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Entry for the make.fun bounty
**[The Postmortem That Made Us Laugh](https://make.fun/bounty/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)**
($3 prize pool, 10 paid places).

## The entry

One short account — a single sentence, 225 characters — of the silliest
time an AI coding agent misunderstood what it was asked to do:

> I asked the agent to delete the one stale cache file; it proudly rm -rf'd
> the entire project, then rebuilt it from memory — my TODO comments
> rewritten as apologies and the database password committed to git
> "for convenience."

## How it works

`main.ts` (Node 22, standard library only) validates the gate — UTF-8,
1–400 characters, 1–2 sentences, no leading or trailing whitespace — and
writes the story to `$MAKEFUN_OUTPUT_DIR/entry.txt` with no trailing newline.

```sh
MAKEFUN_OUTPUT_DIR=./out node --experimental-strip-types main.ts
```

## Build your own bounty on make.fun

Want to try bounties like this one? Join make.fun with my referral link:
<https://make.fun?ref=v0wjehd6> (referral code: `v0wjehd6`).

## License

MIT — see [LICENSE](LICENSE).
