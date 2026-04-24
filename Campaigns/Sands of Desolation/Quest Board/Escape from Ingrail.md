---
type: Quest
subtype: Survival
priority: 1
questNum: 3
date: 04-24-2026
campaign: Sands of Desolation
world: Wiley's World
fc-calendar: Wiley's World
fc-date:
  year: 0
  month: 0
  day: 0
pixel-banner-flag-color: blue
fc-category: Quests
status: Completed
summary: We've been enslaved by [[Duke Ingrail]]. Not good. Must escape
tags:
---
### [[Escape from Ingrail]]
*`=this.summary`*

#### Overview 
**Mission Type**: `INPUT[inlineSelect(option(Lore), option(Errand/Shopping), option(Fetch), option(Delivery), option(Infiltration), option(Investigation), option(Survival), option(Other)):subtype]`
**Priority**: `INPUT[inlineSelect(option(1, Time-Critical), option(2, Important), option(3, Scheduled), option(4, Side Quest), option(5, Neutral)):priority]`

Placeholder

#### Progression
- [x] Free Weary of Collar 
- [x] Reunite the party 
- [x] Leave

**Completed**: `INPUT[toggle(offValue(Active), onValue(Completed)):status]`

#### Rewards 
Money

#### Additional Details 
