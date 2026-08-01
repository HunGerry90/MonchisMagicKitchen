# 🧃 Alkoholfrei

```dataview
TABLE WITHOUT ID
  file.link AS Rezept,
  küche AS Küche,
  zubereitungszeit AS "Zeit (Min)",
  bewertung AS "⭐"
FROM "11 Getränke/Alkoholfrei"
WHERE file.name != "_Index"
SORT bewertung DESC, file.name ASC
```
