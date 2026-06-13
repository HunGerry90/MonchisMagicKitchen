# 🍖 Hauptgerichte

## Unterkategorien

| | |
|---|---|
| 🥩 | [[05 Hauptgerichte/Fleisch/_Index\|Fleisch]] |
| 🍗 | [[05 Hauptgerichte/Geflügel/_Index\|Geflügel]] |
| 🐟 | [[05 Hauptgerichte/Fisch & Meeresfrüchte/_Index\|Fisch & Meeresfrüchte]] |
| 🥦 | [[05 Hauptgerichte/Vegetarisch/_Index\|Vegetarisch]] |
| 🌱 | [[05 Hauptgerichte/Vegan/_Index\|Vegan]] |

---

## Alle Hauptgerichte

```dataview
TABLE WITHOUT ID
  file.link AS Rezept,
  split(file.folder, "/")[1] AS Unterkategorie,
  küche AS Küche,
  schwierigkeit AS Schwierigkeit,
  zubereitungszeit AS "Zeit (Min)",
  bewertung AS "⭐"
FROM "05 Hauptgerichte"
WHERE file.name != "_Index"
SORT bewertung DESC, file.name ASC
```
