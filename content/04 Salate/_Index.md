# 🥗 Salate

```dataview
TABLE WITHOUT ID
  file.link AS Rezept,
  küche AS Küche,
  schwierigkeit AS Schwierigkeit,
  zubereitungszeit AS "Zeit (Min)",
  bewertung AS "⭐"
FROM "Rezeptsammlung/04 Salate"
WHERE file.name != "_Index"
SORT bewertung DESC, file.name ASC
```
