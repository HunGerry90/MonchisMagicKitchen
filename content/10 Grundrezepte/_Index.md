# 🫕 Grundrezepte

## Unterkategorien

|     |                                                                           |
| --- | ------------------------------------------------------------------------- |
| 🥣  | [[10 Grundrezepte/Saucen/_Index\|Saucen]]                                 |
| 🥄  | [[10 Grundrezepte/Dips/_Index\|Dips]]                                     |
| 🌶️ | [[10 Grundrezepte/Marinaden & Rubs/_Index\|Marinaden & Rubs]]             |
| 🍲  | [[10 Grundrezepte/Fonds & Brühen/_Index\|Fonds & Brühen]]                 |
| 🫙  | [[10 Grundrezepte/Eingemachtes & Vorräte/_Index\|Eingemachtes & Vorräte]] |

---

## Alle Grundrezepte

```dataview
TABLE WITHOUT ID
  file.link AS Rezept,
  split(file.folder, "/")[1] AS Unterkategorie,
  küche AS Küche,
  schwierigkeit AS Schwierigkeit,
  zubereitungszeit AS "Zeit (Min)",
  bewertung AS "⭐"
FROM "10 Grundrezepte"
WHERE file.name != "_Index"
SORT file.folder ASC, file.name ASC
```
