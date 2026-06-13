# 🍪 Plätzchen & Kleingebäck

```dataview
TABLE WITHOUT ID
  file.link AS Rezept,
  schwierigkeit AS Schwierigkeit,
  zubereitungszeit AS "Zeit (Min)",
  bewertung AS "⭐"
FROM "08 Backen/Plätzchen & Kleingebäck"
WHERE file.name != "_Index"
SORT bewertung DESC, file.name ASC
```
