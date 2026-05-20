# 🔥 Grill-Dashboard

*Alle Grillrezepte nach Zubereitungsmethode. Rezepte die mehrere Methoden unterstützen, erscheinen in mehreren Abschnitten.*

---

## 🥩 Direkt vom Grill
*Steaks, Würstchen, Gemüse — hohe Hitze, direkte Flamme.*

```dataview
TABLE WITHOUT ID
  file.link AS Rezept,
  küche AS Küche,
  schwierigkeit AS Schwierigkeit,
  zubereitungszeit AS "Zeit (Min)",
  bewertung AS "⭐"
FROM #methode/grillen-direkt
SORT bewertung DESC, file.name ASC
```

---

## 🔄 Indirektes Grillen
*Größere Stücke, Deckel geschlossen — schonend und gleichmäßig.*

```dataview
TABLE WITHOUT ID
  file.link AS Rezept,
  küche AS Küche,
  schwierigkeit AS Schwierigkeit,
  kochzeit AS "Kochzeit (Min)",
  bewertung AS "⭐"
FROM #methode/indirektes-grillen
SORT bewertung DESC, file.name ASC
```

---

## 🐷 Low & Slow BBQ
*Pulled Pork, Brisket, Ribs — Zeit ist die wichtigste Zutat.*

```dataview
TABLE WITHOUT ID
  file.link AS Rezept,
  küche AS Küche,
  schwierigkeit AS Schwierigkeit,
  kochzeit AS "Kochzeit (Min)",
  bewertung AS "⭐"
FROM #methode/low-and-slow
SORT bewertung DESC, file.name ASC
```

---

## 🍳 Plancha
*Flache Stahlplatte — gleichmäßige Hitze, perfekte Kruste.*

```dataview
TABLE WITHOUT ID
  file.link AS Rezept,
  küche AS Küche,
  schwierigkeit AS Schwierigkeit,
  zubereitungszeit AS "Zeit (Min)",
  bewertung AS "⭐"
FROM #methode/plancha
SORT bewertung DESC, file.name ASC
```

---

## 🫕 Dutch Oven
*Schmoren, Backen, Kochen — direkt auf dem Grill.*

```dataview
TABLE WITHOUT ID
  file.link AS Rezept,
  küche AS Küche,
  schwierigkeit AS Schwierigkeit,
  kochzeit AS "Kochzeit (Min)",
  bewertung AS "⭐"
FROM #methode/dutch-oven
SORT bewertung DESC, file.name ASC
```

---

## 💨 Räuchern
*Heißräuchern & Kalträuchern — Rauch als Gewürz.*

```dataview
TABLE WITHOUT ID
  file.link AS Rezept,
  küche AS Küche,
  schwierigkeit AS Schwierigkeit,
  kochzeit AS "Kochzeit (Min)",
  bewertung AS "⭐"
FROM #methode/räuchern
SORT bewertung DESC, file.name ASC
```

---

## 📋 Alle Grill-Rezepte

```dataview
TABLE WITHOUT ID
  file.link AS Rezept,
  kategorie AS Kategorie,
  küche AS Küche,
  bewertung AS "⭐"
FROM #methode/grillen-direkt OR #methode/indirektes-grillen OR #methode/low-and-slow OR #methode/plancha OR #methode/dutch-oven OR #methode/räuchern
SORT bewertung DESC, file.name ASC
```
