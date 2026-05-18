---
type: Quest
subtype: Setup
priority: 0
questNum: 0
date: 05-17-2026
campaign: What Lies Beneath
world: Emily's World
fc-calendar: Emily's World
fc-date:
  year: 0
  month: 0
  day: 0
pixel-banner-flag-color: blue
fc-category: Quests
status: Active
summary: Final Setup Information for the What Lies Beneath Campaign!
tags:
---
### [[What Lies Beneath Setup Quest]]
*`=this.summary`*

#### Overview 
**Mission Type**: `INPUT[inlineSelect(option(Lore), option(Errand/Shopping), option(Fetch), option(Delivery), option(Infiltration), option(Investigation), option(Survival), option(Setup), option(Other)):subtype]`
**Priority**: `INPUT[inlineSelect(option(0, Setup), option(1, Time-Critical), option(2, Important), option(3, Scheduled), option(4, Side Quest), option(5, Neutral)):priority]`

This is your first quest: to set up the campaign! 

#### Progression
- [ ] Create a Calendar (Title it the Campaign's Title)
- [ ] Create your Character
	- [ ] Create Character in [[Campaign/What Lies Beneath/Da Party|Da Party]]
	- [ ] Link it in [[What Lies Beneath|The Campaign]] 
- [ ] If there are any custom rules or modules:
	- [ ] Put them in World Almanac/Other
	- [ ] Link them in [[What Lies Beneath|The Campaign]] under Custom Rules
- [x] If there is a map available, create it in Maps
- [ ] Enjoy!

**Completed**: `INPUT[toggle(offValue(Active), onValue(Completed)):status]`

#### Rewards 
A complete experience
