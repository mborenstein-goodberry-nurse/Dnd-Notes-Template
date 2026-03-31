---
type: Quest Board
date: 02-07-2026
campaign: The Monster Under Hollow Mountain
world: Daniel's Monster of the Week
banner: z_Assets/Quest Board.png
banner-x: 49
banner-y: 62
---
### Main Quest 
![[Campaigns/The Monster Under Hollow Mountain/Quest Board/The Monster Under Hollow Mountain Setup Quest]]

```button
name New Quest  
type command
action QuickAdd: Macro - New Quest
```
### Active
```dataview
TABLE summary as "Summary", subtype as "Type" from "Campaigns/The Monster Under Hollow Mountain/Quest Board"
where contains(type,"Quest") AND contains(status, "Active")
where file.name != "Quest Board"
```

### Completed
```dataview
TABLE summary as "Summary", subtype as "Type" from "Campaigns/The Monster Under Hollow Mountain/Quest Board"
where contains(type,"Quest") AND contains(status, "Completed")
where file.name != "Quest Board"
```

