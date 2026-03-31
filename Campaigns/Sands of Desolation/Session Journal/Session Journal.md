```dataview
TABLE sessionNum as "Session", summary as "Summary" 
from "Campaigns/Sands of Desolation/Session Journal"
where file.name != "Session Journal"
sort sessionNum DESCENDING
```
