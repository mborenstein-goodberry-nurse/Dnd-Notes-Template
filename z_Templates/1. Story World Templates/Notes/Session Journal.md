---
type: session
date: <% tp.date.now("MM-DD-YYYY") %>
campaign: <% tp.user.getThisCampaign(tp) %>
world: <% tp.user.getThisWorld(tp) %>
sessionNum: <% tp.user.getThisGameNum(tp) %>
location:
fc-calendar: <% tp.user.getThisCampaign(tp) %>
fc-date:
  year: <% tp.user.getThisDate(tp)[0] %>
  month: <% tp.user.getThisDate(tp)[1] %>
  day: <% tp.user.getThisDate(tp)[2] %>
fc-category: Sessions
long_rest: false
short_rest: false
summary: ""
tags:
art: ""
banner: z_Assets/Campfire Night.jpg
banner-fade: -70
banner-radius: 38
banner-x: 53
banner-y: 37
pixel-banner-flag-color: blue
---
# [[<% tp.file.title %>]]
*`=this.summary`*


## Session Summary
> [!fas-infobox]+
> # Header 1
> 
> ![[obsidian.png|cover]]
> 
> ![[aurora.png|icon]]
> 
> ## Header 2
> | Table Header | Table Header |
> | ---- | --- |
> | Text | Text |
> | Text | Text |
> 
> Nam dignissim dui vitae turpis cursus condimentum. Curabitur lobortis dolor urna, et dapibus elit ornare et
> 
> > [!footer]
> > Sed metus metus, condimentum at vulputate ac, accumsan sed metus. Donec in faucibus sapien.
 > [!tldr] [[<% tp.file.title %>]]
>  ^summary

**Summary**: `INPUT[text:summary]`

## Recap

![[<% tp.user.getLastGameTitle(tp) %>#^summary]]

## Log
