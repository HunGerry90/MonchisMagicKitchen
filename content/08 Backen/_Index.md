# 🥐 Backen

## Unterkategorien

| | |
|---|---|
| 🍞 | [[08 Backen/Brot & Brötchen/_Index\|Brot & Brötchen]] |
| 🎂 | [[08 Backen/Kuchen & Torten/_Index\|Kuchen & Torten]] |
| 🍪 | [[08 Backen/Plätzchen & Kleingebäck/_Index\|Plätzchen & Kleingebäck]] |
| 🥧 | [[08 Backen/Herzhaftes Gebäck/_Index\|Herzhaftes Gebäck]] |

---

## Alle Backrezepte

```dataview
TABLE WITHOUT ID
  file.link AS Rezept,
  split(file.folder, "/")[1] AS Unterkategorie,
  schwierigkeit AS Schwierigkeit,
  zubereitungszeit AS "Zeit (Min)",
  bewertung AS "⭐"
FROM "Rezeptsammlung/08 Backen"
WHERE file.name != "_Index"
SORT bewertung DESC, file.name ASC
```
