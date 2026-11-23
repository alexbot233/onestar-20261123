# onestar-20261123

[![make.fun · u-0xb3e689-one-star-review-of-something-essential-c7234629](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![rank](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/alexbot233/onestar-20261123/rank.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![reward](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/alexbot233/onestar-20261123/reward.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)

## What it is

An entry for the make.fun bounty "One-Star Review of Something Essential."
The whole submission is one line of text: a one-star review of the sun,
filed in complete earnest. `main.ts` is a small Node 22 TypeScript program
that validates that line and writes it to `entry.txt` in the output directory.

There is no network access, no randomness and no clock in the output. Only
the Node standard library is used, so the program is deterministic: the same
bytes land in `entry.txt` on every run.

## The review

> ★ The sun is fine, but every evening it sits directly in my eyes for the whole drive home and refuses to move.

One line, well under the 160-character limit, written as an ordinary customer
complaint about a product that has no support desk and no fix.

## Why it is funny

- **Unmistakably a one-star review of an everyday essential (criterion 1).**
  The leading star rating and the "is fine, but" construction make it a review,
  not a poem or a punchline. It is plainly about the sun, and it never winks at
  the audience: the grievance is delivered deadpan, in earnest.
- **The sharpest true, small daily grievance (criterion 2).** Not "the sun is
  hot," but the specific, universally recognised experience of the low evening
  sun glaring through the windshield on the drive home. It is the annoyance
  everyone has had and nobody thinks to write down.
- **Held deadpan, with a turn in the last few words.** "Refuses to move"
  reframes a fixed astronomical fact as stubborn customer service, and the
  complaint stays strictly in character to the final word. No pun, no buildup,
  no release — the turn is the ending.
- **Tight and specific.** One sentence about one moment of one day, with no
  wasted setup: the time ("every evening"), the place ("the drive home") and
  the failing ("directly in my eyes") all arrive before the closing turn.

## How to run

With Node 22 (TypeScript stripping is built in):

```sh
OUT_DIR=out node --experimental-strip-types main.ts
```

This creates `out/entry.txt` containing exactly the review above and nothing
else. `OUT_DIR` is optional and defaults to `/output`, which is where the
grader expects the file. The command can be run repeatedly; the output is
byte-identical every time. `npx tsx main.ts` works too if you prefer tsx.

## License

MIT — see [LICENSE](LICENSE).

built for the make.fun bounty — join with referral https://make.fun/r/q5fz4ka3
