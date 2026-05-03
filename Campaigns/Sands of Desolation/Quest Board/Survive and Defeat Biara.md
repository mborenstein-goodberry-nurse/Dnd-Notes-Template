---
type: Quest
subtype: Survival
priority: 1
questNum: 0
date: 05-01-2026
campaign: Sands of Desolation
world: Wiley's World
fc-calendar: Wiley's World
fc-date:
  year: 2025
  month: 12
  day: 8
pixel-banner-flag-color: blue
fc-category: Quests
status: Completed
summary: "[[Biara]] is impersonating [[Queen Isabel]]! Defeat her and live"
tags:
---
### [[Survive and Defeat Biara]]
*`=this.summary`*

#### Overview 
**Mission Type**: `INPUT[inlineSelect(option(Lore), option(Errand/Shopping), option(Fetch), option(Delivery), option(Infiltration), option(Investigation), option(Survival), option(Other)):subtype]`
**Priority**: `INPUT[inlineSelect(option(1, Time-Critical), option(2, Important), option(3, Scheduled), option(4, Side Quest), option(5, Neutral)):priority]`

Placeholder

#### Progression
- [x] Survive 
- [x] Kill [[Biara]] 

**Completed**: `INPUT[toggle(offValue(Active), onValue(Completed)):status]`

#### Rewards 
[[Biara]] is dead
Necessary step before we [[Return Queen Isabel]] to the throne