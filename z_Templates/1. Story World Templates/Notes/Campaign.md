---
type: Campaign
date: <% tp.date.now("MM-DD-YYYY") %>
world: <% tp.system.prompt("What/whose world does this take place in?", "New World") %>
campaign: <% tp.file.folder(false) %>
status: active
role: player
system: D&D 5e
banner: z_Assets/System/RPG Group.jpg
---
# The Story of <% tp.file.folder(false) %>

## Controls 
--- start-multi-column: Control panel p1\
```column-settings
number of columns: 4
```

```button
name New Session Journal 
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


## [[<%tp.file.folder(true)%>/Quest Board/Quest Board|Quest Board]] 
```dataview
TABLE summary as "Summary" from "Campaigns/<% tp.user.getThisCampaign(tp) %>/Quest Board"
where contains(type,"Quest") AND contains(status, "Active")
where file.name != "Quest Board"
sort questNum ASCENDING
sort priority ASCENDING
```

## Journals
```dataview
TABLE summary as "Summary" from "Campaigns/<% tp.file.title %>/Session Journal"
where contains(type,"session")
sort sessionNum ASC
```


## People

### The Party 
**Me**: [[]]
**Others**:
- [[]]

### Other Characters 
```dataview
TABLE attitude as "Attitude", summary as "Summary" from "Campaigns/<% tp.file.title %>/World Almanac/People"
where file.name != "People"
sort file.name ASC
```

## Places 
```dataview
TABLE size as "Size", attitude as "Attitude", summary as "Summary" from "Campaigns/<% tp.file.title %>/World Almanac/Places"
where file.name != "Places"
sort file.name ASC
```

## Custom Rules 

