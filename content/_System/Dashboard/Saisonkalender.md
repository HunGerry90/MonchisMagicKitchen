# 🍂 Saisonkalender

*Rezepte nach Jahreszeit — mit saisonal verfügbaren Zutaten kochen.*

---

## 🌸 Frühling *(März – Mai)*

**Saison-Produkte:** Spargel · Radieschen · Spinat · Rhabarber · Bärlauch · Erbsen · Frühlingszwiebeln · Wildkräuter · Forelle · Lamm

```dataview
TABLE WITHOUT ID
  file.link AS Rezept,
  kategorie AS Kategorie,
  küche AS Küche,
  zubereitungszeit AS "Zeit (Min)",
  bewertung AS "⭐"
FROM #saison/frühling
SORT bewertung DESC, file.name ASC
```

---

## ☀️ Sommer *(Juni – August)*

**Saison-Produkte:** Tomaten · Zucchini · Paprika · Aubergine · Mais · Gurken · Beeren · Kirschen · Aprikosen · Pfirsiche · Grillgemüse

```dataview
TABLE WITHOUT ID
  file.link AS Rezept,
  kategorie AS Kategorie,
  küche AS Küche,
  zubereitungszeit AS "Zeit (Min)",
  bewertung AS "⭐"
FROM #saison/sommer
SORT bewertung DESC, file.name ASC
```

---

## 🍂 Herbst *(September – November)*

**Saison-Produkte:** Kürbis · Pilze · Äpfel · Birnen · Quitten · Rote Bete · Kohl · Kastanien · Walnüsse · Wildgeflügel · Hirsch

```dataview
TABLE WITHOUT ID
  file.link AS Rezept,
  kategorie AS Kategorie,
  küche AS Küche,
  zubereitungszeit AS "Zeit (Min)",
  bewertung AS "⭐"
FROM #saison/herbst
SORT bewertung DESC, file.name ASC
```

---

## ❄️ Winter *(Dezember – Februar)*

**Saison-Produkte:** Rosenkohl · Grünkohl · Pastinaken · Sellerie · Lauch · Chicorée · Orangen · Clementinen · Wildhase · Kabeljau

```dataview
TABLE WITHOUT ID
  file.link AS Rezept,
  kategorie AS Kategorie,
  küche AS Küche,
  zubereitungszeit AS "Zeit (Min)",
  bewertung AS "⭐"
FROM #saison/winter
SORT bewertung DESC, file.name ASC
```

---

## 🌍 Ganzjährig

```dataview
TABLE WITHOUT ID
  file.link AS Rezept,
  kategorie AS Kategorie,
  küche AS Küche,
  zubereitungszeit AS "Zeit (Min)",
  bewertung AS "⭐"
FROM #saison/ganzjährig
SORT file.name ASC
```
