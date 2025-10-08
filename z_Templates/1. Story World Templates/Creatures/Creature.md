---
type: Creatures
subtype: Creature
date: <% tp.file.creation_date() %>
gamedate:
campaign:
summary:
status:
tags:
---
# [[<% tp.file.title %>]]

## Overview 
![Placeholder Iconography|200x140](ImagePlaceholder.png)
**Alignment**: `INPUT[inlineSelect(option(Chaotic Evil), option(Chaotic Good), option(Chaotic Neutral), option(Lawful Evil), option(Lawful Good), option(Lawful Neutral), option(Neutral), option(Neutral Evil), option(Neutral Good), option(Unaligned)):alignment]`

## Sheet
```statblock  
name: string  
size: string  
type: string  
subtype: string  
alignment: Chaotic Chaos  
ac: number  
hp: number  
hit_dice: string  
speed: string  
stats: [number, number, number, number, number, number]  
fage_stats: [number, number, number, number, number, number, number, number, number]  
saves:  
- <ability-score>: number  
skillsaves:  
- <skill-name>: number  
damage_vulnerabilities: string  
damage_resistances: string  
damage_immunities: string  
condition_immunities: string  
senses: string  
languages: string  
cr: number  
spells:  
- <description>  
- <spell level>: <spell-list>  
traits:  
- [<trait-name>, <trait-description>]  
- ...  
actions:  
- [<trait-name>, <trait-description>]  
- ...  
legendary_actions:  
- [<legendary_actions-name>, <legendary_actions-description>] 
- [<legendary_actions-name>, <legendary_actions-description>]  
- ...  
reactions:  
- [<reaction-name>, <reaction-description>]  
- ...  
```
## Notes 

