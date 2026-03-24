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
> [!fas-infobox|right no-title]
> ![[quest-image.png|cover]]
>
> ## Main Objective
>
> > [!note|no-title accent red]
> > - [ ] Return the missing overdue books
>
> # Key NPCs
>
> > [!info|no-icon]
> > - Apple
> > - Adrielle
> > - Vindarr
>
> ## Key Locations
>
> > [!tip|no-icon]
> > - Apple's Orchard
> > - Mirstone

**Summary**: `INPUT[text:summary]`

## Log
Test words here gibber jabber jibber jabber 
Blah blah blah blah blah
