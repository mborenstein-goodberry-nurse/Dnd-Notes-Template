---
type: Quest
subtype: Lore
priority: 2
questNum: 50
date: 04-03-2026
campaign: Sands of Desolation
world: Wiley's World
location:
fc-calendar: WIley's World
fc-date:
  year: 2025
  month: 12
  day: 8
pixel-banner-flag-color: blue
fc-category: Quests
status: Active
summary: We are starting with rallying the Griffin Empire against the wastes
tags:
---
### [[Unite the Griffin Empire]]
*`=this.summary`*

#### Overview 
**Mission Type**: `INPUT[inlineSelect(option(Lore), option(Errand/Shopping), option(Fetch), option(Delivery), option(Infiltration), option(Investigation), option(Survival), option(Other)):subtype]`
**Priority**: `INPUT[inlineSelect(option(1, Time-Critical), option(2, Important), option(3, Scheduled), option(4, Side Quest), option(5, Neutral)):priority]`

Placeholder

#### Progression
- [x] Meet with Queen Isabelle (not ours)
- [x] Enter the [[Griffin Capital]] 
- [ ] ~~Presumably defeat the Red Bishop and his order ~~
- [ ] Defeat the Imposter Queen 

**Completed**: `INPUT[toggle(offValue(Active), onValue(Completed)):status]`

#### Rewards 
We would earn the Griffin Empire to our Side, gaining an army against the Wastes 

#### Additional Details 
