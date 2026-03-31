---
type: Quest Board
date: <% tp.date.now("MM-DD-YYYY") %>
campaign: <% tp.user.getThisCampaign(tp) %>
world: <% tp.user.getThisWorld(tp) %>
banner: z_Assets/Quest Board.png
banner-x: 49
banner-y: 62
---
### Main Quest 
```dataviewjs 
const campaign = dv.current().campaign;

const quests = dv.pages(`"Campaigns/${campaign}/Quest Board"`)
    .where(q => String(q.type ?? "").toLowerCase() === "quest")
    .where(q => String(q.status ?? "").toLowerCase() === "active")
    .where(q => q.questNum != null)
    .sort(q => Number(q.questNum), "asc");

if (quests.length > 0) {
    dv.paragraph(`![[${quests[0].file.path}]]`);
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
TABLE summary as "Summary", subtype as "Type" from "Campaigns/<% tp.user.getThisCampaign(tp) %>/Quest Board"
where contains(type,"Quest") AND contains(status, "Active")
where file.name != "Quest Board"
```

### Completed
```dataview
TABLE summary as "Summary", subtype as "Type" from "Campaigns/<% tp.user.getThisCampaign(tp) %>/Quest Board"
where contains(type,"Quest") AND contains(status, "Completed")
where file.name != "Quest Board"
```

