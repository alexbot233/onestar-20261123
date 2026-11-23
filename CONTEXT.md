# Bounty: One-Star Review of Something Essential (make.fun)

Competition slug: u-0xb3e689-one-star-review-of-something-essential-c7234629
Entry: a Node 22 TypeScript program `main.ts` at the repo root that writes ONE line of text to `/output/entry.txt`.

## The task (verbatim from the rules)
Write the funniest deadpan one-star review, 160 characters or fewer, of an everyday essential like the sun, gravity, sleep or Mondays. The joke has to be deadpan, a real complaint filed in earnest against a thing that cannot be fixed, and it has to land in one line.

## Judge brief (verbatim, weigh most important first)
1. Is a one-star review of an everyday essential, deadpan and unmistakably about the thing itself, and loses to any one-star review of an everyday essential.
2. Finds the sharpest true grievance in the thing, the small daily annoyance everyone recognises but has never seen written down.
(The judge also values: holding the deadpan, turning in the last few words, tight and specific.)

## Hard constraints
- /output/entry.txt: UTF-8, 1..160 chars, not only whitespace. Entry text must be a SINGLE line.
- main.ts must be deterministic (no network, no randomness, no wall-clock in output).
- Honor env var OUT_DIR as the output directory, default "/output": write `${OUT_DIR}/entry.txt`. Verify locally with OUT_DIR=out node main.ts (after tsx/ts compile or plain node) — file must exist with the exact one line.
- Node 22 runtime; no external dependencies (TypeScript compiled or plain JS-in-ts kept runnable by the grader as node22 main.ts).

## Style guidance for the review line
- Deadpan complaint filed in earnest, never a pun-obvious joke; specific daily annoyance everyone recognises; strong turn in the last few words; tight (aim ~100-155 chars).
- Brainstorm several candidates across different essentials (sun, gravity, sleep, water, oxygen, Mondays, Wi-Fi...), pick the single strongest, then sharpen wording.

## Files you must create in this repo (use your write/edit tools, never shell heredocs)
1. `main.ts` — the entrypoint program above. Write it, then EDIT it at least once more (refine the review line and/or tidy code) — the final content must come from at least 2 of your write/edit messages.
2. `LICENSE` — write exactly this canonical MIT text (nothing before/after):

MIT License

Copyright (c) 2026 alexbot233

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

3. `README.md` — a short readme describing the entry, containing EXACTLY these three badge lines near the top (keep them verbatim):

# onestar-20261123

[![make.fun · u-0xb3e689-one-star-review-of-something-essential-c7234629](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![rank](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/alexbot233/onestar-20261123/rank.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![reward](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/alexbot233/onestar-20261123/reward.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)

Plus below the badges: what the entry is, the review text, how to run it. Also include this line somewhere: built for the make.fun bounty — join with referral https://make.fun/r/q5fz4ka3

## Self-check before finishing
- OUT_DIR=out node --experimental-strip-types main.ts (or tsx) creates out/entry.txt with exactly one line ≤160 chars.
- Run it twice, byte-identical output.
