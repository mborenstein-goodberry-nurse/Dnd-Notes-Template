---
type: Campaign
date: 12-01-2025
world: WIley's World
campaign: Sands of Desolation
status: active
role: player
system: D&D 5e
banner: z_Assets/RPG Group.jpg
---
# The Story of Sands of Desolation

## Controls 
--- start-multi-column: Control panel p1\
```column-settings
number of columns: 4
```

```button
name New Session 
type command
action QuickAdd: Macro - New Session Journal Entry
```
```button
name New Incident  
type command
action QuickAdd: Macro - New Event
```
--- end-column ---

```button
name New Person  
type command
action QuickAdd: Macro - New NPC
```
```button
name New Map
type command
action QuickAdd: Macro - New Map
```

--- end-column ---

```button
name New Place  
type command
action QuickAdd: Macro - New Place
```
```button
name New Item  
type command
action QuickAdd: Macro - New Item
```

--- end-column ---

```button
name New Quest  
type command
action QuickAdd: Macro - New Quest
```
```button
name New Note  
type command
action QuickAdd: Macro - New Note
```

--- end-multi-column

## [[Campaigns/Sands of Desolation/Quest Board/Quest Board|Quest Board]] 
```dataview
TABLE summary as "Summary" from "Campaigns/Sands of Desolation/Quest Board"
where contains(type,"Quest") AND contains(status, "Active")
where file.name != "Quest Board"
sort questNum ASCENDING
sort priority ASCENDING
```
## Journals
```dataview
TABLE sessionNum as "Session", summary as "Summary" 
from "Campaigns/Sands of Desolation/Session Journal"
where file.name != "Session Journal"
sort sessionNum DESCENDING
```


## People

### The Party 
**Me**: 
- [[Weary Quest]]
- [[Diane Aceso Quest]]
**Others**:
```dataview
TABLE attitude as "Attitude", summary as "Summary" from "Campaigns/Sands of Desolation/Da Party"
where file.name != "Da Party"
where file.name != "Weary Quest"
where file.name != "Diane Aceso Quest"
sort file.name ASC
```

### Other Characters 
```dataview
TABLE attitude as "Attitude", summary as "Summary" from "Campaigns/Sands of Desolation/World Almanac/People"
where file.name != "People"
sort file.name ASC
```

## Places 
```dataview
TABLE from "Campaigns/Sands of Desolation/Maps"
where file.name != "Maps"
sort file.name ASC
```
```dataview
TABLE size as "Size", attitude as "Attitude", summary as "Summary" from "Campaigns/Sands of Desolation/World Almanac/Places"
where file.name != "Places"
sort file.name ASC
```
