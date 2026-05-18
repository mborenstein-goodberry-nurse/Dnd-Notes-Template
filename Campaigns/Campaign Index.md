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
D&W: https://docs.google.com/document/d/1lkJysdHSxImZpdhQpgvqhcJ3JtIUSQ4pgPCyfgXv0bQ/edit?tab=t.0#heading=h.d02x49wbjosw

Kiara: https://docs.google.com/document/d/1_XNtXABEJVCN4C6Clhqakd0FEW9uuiRkr0mtx0j9YvU/edit?tab=t.0

New Beasts: 