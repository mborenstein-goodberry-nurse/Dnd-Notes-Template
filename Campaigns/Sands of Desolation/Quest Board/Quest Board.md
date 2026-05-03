---
type: Quest Board
date: 12-01-2025
campaign: Sands of Desolation
world: WIley's World
banner: z_Assets/System/Quest Board.png
banner-x: 49
banner-y: 62
---
### Main Quest 
```dataviewjs 
const campaign = dv.current().campaign;

const quests = dv.pages(`"Campaigns/Sands of Desolation/Quest Board"`)
    .where(q => String(q.type ?? "").toLowerCase() === "quest")
    .where(q => String(q.status ?? "").toLowerCase() === "active")  
    .sort(q => Number(q.questNum ?? 999), "desc")
	.sort(q => Number(q.priority ?? 999), "asc");

if (quests.length > 0) {
    dv.paragraph(`![[${quests[0].file.path}|${quests[0].file.name}]]`);
} else {
    dv.paragraph("*No active quests found.*");
}
```
```button
name New Quest  
type command
action QuickAdd: Macro - New Quest
```
### Active
```dataview
TABLE summary as "Summary" 
from "Campaigns/Sands of Desolation/Quest Board"
WHERE lower(type) = "quest"
WHERE lower(status) = "active"
where file.name != "Quest Board"
sort questNum DESCENDING 
sort priority ASCENDING
```

### Completed
```dataview
TABLE summary as "Summary" 
from "Campaigns/Sands of Desolation/Quest Board"
where contains(type,"Quest") AND contains(status, "Completed")
where file.name != "Quest Board"
sort questNum DESCENDING 
```

