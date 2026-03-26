---
type: Creatures
subtype: Player Character
date: <% tp.date.now("MM-DD-YYYY") %>
Art: "![[ImagePlaceholder.png]]"
campaign: <% tp.user.getThisCampaign(tp) %>
world: <% tp.user.getThisWorld(tp) %>
summary:
status:
Level: 5
AC: 0
Prof: "2"
HP: 0
HitDice: d8
Speed: 30
STR: 10
DEX: 10
CON: 10
INT: 10
WIS: 10
CHA: 10
Race: RaceName
Alignment: NONE
Gender: GenderName
Age: "0"
Location: NONE
Class: ClassName
Subclass: SubClassName
AssociatedGroup: NONE
Likes: NONE
Dislikes: NONE
Pronouns: NONE
PersonalityTrait:
  - NONE
SocialTrait:
  - NONE
MentalTrait:
  - NONE
Proficiencies:
  - NONE
Resistances:
  - NONE
Languages:
  - Common
  - Infernal
  - Elven
DmgTkn: 0
TempHP: 0
Copper: 0
Silver: 0
Electrum: 12
Gold: 0
Platinum: 0
aliases:
tags:
---

# [[<% tp.file.title %>]]
*`=this.summary`*

#### Overview 
![Image Placeholder|200x140](ImagePlaceholder.png)

**Status**: `INPUT[text:status]`
**Attitude**: `INPUT[inlineSelect(option(Helpful), option(Friendly), option(Indifferent), option(Mixed), option(Unhelpful), option(Hostile)):attitude]`
**Alignment**: `INPUT[inlineSelect(option(Chaotic Evil), option(Chaotic Good), option(Chaotic Neutral), option(Lawful Evil), option(Lawful Good), option(Lawful Neutral), option(Neutral), option(Neutral Evil), option(Neutral Good), option(Unaligned)):alignment]`
**Summary**: `INPUT[text:summary]`

#### Description


#### Relationships


#### Unique Abilities  


### Inventory 


#### History 


### Additional Details 

