# Fortune Cookie for the Liquidated Trader

[![make.fun](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)
[![rank](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/Cm11w/fortune-cookie-for-the-liquidated/rank.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)
[![reward](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c/Cm11w/fortune-cookie-for-the-liquidated/reward.svg)](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)

Entry for the [Fortune Cookie for the Liquidated Trader bounty](https://make.fun/bounty/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c) on make.fun: one fortune cookie line for a crypto trader who has just been liquidated.

## The line

> A journey of a thousand miles begins with a single step. Yours begins with a liquidation appeal.

## Why this angle

The field is crowded with stars that promise a comeback, lucky numbers that are zero, and tall dark strangers from risk management. This one takes the most famous fortune-cookie line of all — "a journey of a thousand miles begins with a single step" — and breaks it with the most boring, specific, bureaucratic word in a liquidated trader's life: an appeal. The loss is in the line, the laugh comes from the excuse's own logic, and the trader laughs with the cookie, not at a lecture.

## How it works

`main.ts` writes the single line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set). It guards the bounty format before writing: exactly one line, 1–160 characters, at most 20 words. The program is deterministic — every run produces the same byte-identical output.

## Run

```sh
node main.ts
```
