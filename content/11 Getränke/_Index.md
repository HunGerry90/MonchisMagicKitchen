# 🥤 Getränke

## Unterkategorien

| | |
|---|---|
| 🧃 | [[11 Getränke/Alkoholfrei/_Index\|Alkoholfrei]] |
| 🍹 | [[11 Getränke/Cocktails & Longdrinks/_Index\|Cocktails & Longdrinks]] |

---

## Alle Getränke

```dataview
TABLE WITHOUT ID
  file.link AS Rezept,
  split(file.folder, "/")[1] AS Unterkategorie,
  küche AS Küche,
  zubereitungszeit AS "Zeit (Min)",
  bewertung AS "⭐"
FROM "11 Getränke"
WHERE file.name != "_Index"
SORT bewertung DESC, file.name ASC
```
