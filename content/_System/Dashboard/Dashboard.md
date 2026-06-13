# 🏠 Dashboard

---

## 📊 Sammlung auf einen Blick

```dataview
TABLE WITHOUT ID
  Kategorie,
  length(rows) AS "📄 Rezepte"
FROM ""
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
  zubereitungszeit + default(kochzeit, 0) AS "Gesamtzeit (Min)"
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
FROM ""
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
FROM ""
WHERE !contains(file.path, "_System") AND file.name != "_Index" AND file.name != "README"
SORT file.ctime DESC
LIMIT 8
```

---

## ⚡ Schnell auf den Tisch

### Unter 15 Minuten
```dataview
TABLE WITHOUT ID
  file.link AS Rezept,
  kategorie AS Kategorie,
  küche AS Küche,
  zubereitungszeit AS "Vorbereitung",
  kochzeit AS "Kochzeit"
FROM ""
WHERE !contains(file.path, "_System") AND file.name != "_Index" AND file.name != "README"
  AND (zubereitungszeit + default(kochzeit, 0)) <= 15
SORT (zubereitungszeit + default(kochzeit, 0)) ASC
```

### Unter 30 Minuten
```dataview
TABLE WITHOUT ID
  file.link AS Rezept,
  kategorie AS Kategorie,
  küche AS Küche,
  zubereitungszeit AS "Vorbereitung",
  kochzeit AS "Kochzeit"
FROM ""
WHERE !contains(file.path, "_System") AND file.name != "_Index" AND file.name != "README"
  AND (zubereitungszeit + default(kochzeit, 0)) > 15
  AND (zubereitungszeit + default(kochzeit, 0)) <= 30
SORT (zubereitungszeit + default(kochzeit, 0)) ASC
```

### Unter 60 Minuten
```dataview
TABLE WITHOUT ID
  file.link AS Rezept,
  kategorie AS Kategorie,
  küche AS Küche,
  zubereitungszeit AS "Vorbereitung",
  kochzeit AS "Kochzeit"
FROM ""
WHERE !contains(file.path, "_System") AND file.name != "_Index" AND file.name != "README"
  AND (zubereitungszeit + default(kochzeit, 0)) > 30
  AND (zubereitungszeit + default(kochzeit, 0)) <= 60
SORT (zubereitungszeit + default(kochzeit, 0)) ASC
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
