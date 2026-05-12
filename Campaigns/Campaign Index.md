---
aliases: games
banner_y: 0.86
banner: z_Assets/System/Sunset Banner.png
cssclasses:
session-hero: false
---
# [[Campaign Index]]

```button
name Add New World
type command
action QuickAdd: Macro - New Campaign
```

```dataviewjs
let totalGames;
function getNumOfGames(campaign) {
	let numOfGames = app.plugins.plugins.dataview.api
        .pages(`"Campaigns/${campaign}/Session Journal"`).length
	return numOfGames
}

dv.table(["Campaign","System","Sessions", "Role","Status"],dv.pages('"Campaigns"')
  .where(b => b.type === "Campaign")
  .sort(b => b.file.name)
  .sort(b => b.status)
  .map(b => [dv.fileLink(b.file.path,false,[b.campaign]),b.system,getNumOfGames(b.campaign),b.role,b.status]))
```
https://docs.google.com/document/d/1lkJysdHSxImZpdhQpgvqhcJ3JtIUSQ4pgPCyfgXv0bQ/edit?tab=t.0#heading=h.d02x49wbjosw

New Beasts: 
- https://roll20.net/compendium/dnd5e/Owlbear#content
- http://dndroll.wikidot.com/creatures:ice-spider-queen
- https://roll20.net/compendium/dnd5e/Succubus#content
- https://www.dndbeyond.com/monsters/16858-erinyes?srsltid=AfmBOooufrKOTHL5S17HEN9qIM3wG-GCca8p-aP1xIvfhdWYlXrKQFj1
- http://dndroll.wikidot.com/creatures:deep-rothe-legacy 