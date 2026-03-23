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
hero: true
summary: ""
tags:
---
<div class="session-hero">
  <img class="session-hero-frame" src="z_Assets/Medieval-Banner.png" alt="">
</div> 

# [[<% tp.file.title %>]]
*`=this.summary`*


## Session Summary
> [!fas-infobox|right no-thead]+
> # Session Overview
>
> | Session | <% tp.date.now("WW") %> |
> | --- | --- |
> | Date | <% tp.date.now("D MMMM YYYY") %> |
> | Game | Text |
>
> > # Discoveries
>
> - Beliveau
> - The Last Drop Tavern
>
> ---
>
> - Hidden Cave
> - Ancient Ruins
> 
> # Discoveries
>
> - Beliveau
> - The Last Drop Tavern
>
>
> - Hidden Cave
> - Ancient Ruins
> 
> # Discoveries
>
> **Cities**
> - Beliveau
>
> **Locations**
> - The Last Drop Tavern
>
> > [!footer]
> > [[<% tp.file.title %>]]
> ^summary

**Summary**: `INPUT[text:summary]`

## Log
Test words here gibber jabber jibber jabber 
Blah blah blah blah blah
