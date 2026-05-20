# 🏠 Dashboard

---

## 📊 Sammlung auf einen Blick

```dataview
TABLE WITHOUT ID
  Kategorie,
  length(rows) AS "📄 Rezepte"
FROM "Rezeptsammlung"
WHERE !contains(file.path, "_System") AND file.name != "_Index" AND file.name != "README"
GROUP BY split(file.folder, "/")[0] AS Kategorie
SORT Kategorie ASC
```

---

## ⭐ Favoriten

```dataview
TABLE WITHOUT ID
  file.link AS Rezept,
  bewertung AS "⭐",
  küche AS Küche,
  zubereitungszeit AS "Zeit (Min)"
FROM #favorit
SORT bewertung DESC
```

---

## 🕐 Zuletzt gekocht

```dataview
TABLE WITHOUT ID
  file.link AS Rezept,
  zuletzt_gekocht AS "Datum",
  kategorie AS Kategorie
FROM "Rezeptsammlung"
WHERE zuletzt_gekocht AND zuletzt_gekocht != "" AND !contains(file.path, "_System")
SORT zuletzt_gekocht DESC
LIMIT 8
```

---

## 🆕 Zuletzt hinzugefügt

```dataview
TABLE WITHOUT ID
  file.link AS Rezept,
  kategorie AS Kategorie,
  küche AS Küche,
  datum_erstellt AS "Erstellt"
FROM "Rezeptsammlung"
WHERE !contains(file.path, "_System") AND file.name != "_Index" AND file.name != "README"
SORT file.ctime DESC
LIMIT 8
```

---

## ⚡ Schnell auf den Tisch *(unter 30 Min)*

```dataview
TABLE WITHOUT ID
  file.link AS Rezept,
  kategorie AS Kategorie,
  küche AS Küche,
  zubereitungszeit AS "Zeit (Min)"
FROM #unter-30min
WHERE !contains(file.path, "_System")
SORT zubereitungszeit ASC
LIMIT 10
```

---

## 📅 Wochenplan

[[Wochenplan-Template|→ Wochenplan öffnen / erstellen]]

---

## 🔗 Weitere Ansichten

| | |
|---|---|
| 🔥 Grillrezepte | [[Grill-Dashboard]] |
| 🧺 Nach Zutaten | [[Zutaten-Index]] |
| 🍂 Nach Saison | [[Saisonkalender]] |
