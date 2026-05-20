# 🧺 Zutaten-Index

*Was habe ich im Kühlschrank? Hier alle Rezepte nach Hauptzutat.*

---

## 🥩 Fleisch

### Rind
```dataview
TABLE WITHOUT ID file.link AS Rezept, kategorie AS Kategorie, schwierigkeit AS Schwierigkeit, zubereitungszeit AS "Zeit (Min)"
FROM #basis/rind
SORT file.name ASC
```

### Hackfleisch
```dataview
TABLE WITHOUT ID file.link AS Rezept, kategorie AS Kategorie, schwierigkeit AS Schwierigkeit, zubereitungszeit AS "Zeit (Min)"
FROM #basis/hackfleisch
SORT file.name ASC
```

### Kalb
```dataview
TABLE WITHOUT ID file.link AS Rezept, kategorie AS Kategorie, schwierigkeit AS Schwierigkeit, zubereitungszeit AS "Zeit (Min)"
FROM #basis/kalb
SORT file.name ASC
```

### Schwein
```dataview
TABLE WITHOUT ID file.link AS Rezept, kategorie AS Kategorie, schwierigkeit AS Schwierigkeit, zubereitungszeit AS "Zeit (Min)"
FROM #basis/schwein
SORT file.name ASC
```

### Lamm
```dataview
TABLE WITHOUT ID file.link AS Rezept, kategorie AS Kategorie, schwierigkeit AS Schwierigkeit, zubereitungszeit AS "Zeit (Min)"
FROM #basis/lamm
SORT file.name ASC
```

### Wild
```dataview
TABLE WITHOUT ID file.link AS Rezept, kategorie AS Kategorie, schwierigkeit AS Schwierigkeit, zubereitungszeit AS "Zeit (Min)"
FROM #basis/wild
SORT file.name ASC
```

### Speck & Wurst
```dataview
TABLE WITHOUT ID file.link AS Rezept, kategorie AS Kategorie, schwierigkeit AS Schwierigkeit, zubereitungszeit AS "Zeit (Min)"
FROM #basis/speck-wurst
SORT file.name ASC
```

---

## 🍗 Geflügel

### Hähnchen
```dataview
TABLE WITHOUT ID file.link AS Rezept, kategorie AS Kategorie, schwierigkeit AS Schwierigkeit, zubereitungszeit AS "Zeit (Min)"
FROM #basis/hähnchen
SORT file.name ASC
```

### Ente
```dataview
TABLE WITHOUT ID file.link AS Rezept, kategorie AS Kategorie, schwierigkeit AS Schwierigkeit, zubereitungszeit AS "Zeit (Min)"
FROM #basis/ente
SORT file.name ASC
```

### Pute
```dataview
TABLE WITHOUT ID file.link AS Rezept, kategorie AS Kategorie, schwierigkeit AS Schwierigkeit, zubereitungszeit AS "Zeit (Min)"
FROM #basis/pute
SORT file.name ASC
```

---

## 🐟 Fisch & Meeresfrüchte

### Lachs
```dataview
TABLE WITHOUT ID file.link AS Rezept, kategorie AS Kategorie, schwierigkeit AS Schwierigkeit, zubereitungszeit AS "Zeit (Min)"
FROM #basis/lachs
SORT file.name ASC
```

### Thunfisch
```dataview
TABLE WITHOUT ID file.link AS Rezept, kategorie AS Kategorie, schwierigkeit AS Schwierigkeit, zubereitungszeit AS "Zeit (Min)"
FROM #basis/thunfisch
SORT file.name ASC
```

### Garnelen
```dataview
TABLE WITHOUT ID file.link AS Rezept, kategorie AS Kategorie, schwierigkeit AS Schwierigkeit, zubereitungszeit AS "Zeit (Min)"
FROM #basis/garnelen
SORT file.name ASC
```

### Fisch & Meeresfrüchte (allgemein)
```dataview
TABLE WITHOUT ID file.link AS Rezept, kategorie AS Kategorie, schwierigkeit AS Schwierigkeit, zubereitungszeit AS "Zeit (Min)"
FROM #basis/fisch OR #basis/meeresfrüchte
SORT file.name ASC
```

---

## 🥚 Eier & Milchprodukte

```dataview
TABLE WITHOUT ID file.link AS Rezept, kategorie AS Kategorie, schwierigkeit AS Schwierigkeit, zubereitungszeit AS "Zeit (Min)"
FROM #basis/ei OR #basis/käse OR #basis/sahne OR #basis/joghurt
SORT file.name ASC
```

---

## 🌱 Pflanzliches Protein

```dataview
TABLE WITHOUT ID file.link AS Rezept, kategorie AS Kategorie, schwierigkeit AS Schwierigkeit, zubereitungszeit AS "Zeit (Min)"
FROM #basis/tofu OR #basis/tempeh OR #basis/hülsenfrüchte
SORT file.name ASC
```

---

## 🍝 Kohlenhydrate & Sättigung

### Pasta
```dataview
TABLE WITHOUT ID file.link AS Rezept, kategorie AS Kategorie, schwierigkeit AS Schwierigkeit, zubereitungszeit AS "Zeit (Min)"
FROM #basis/pasta
SORT file.name ASC
```

### Reis
```dataview
TABLE WITHOUT ID file.link AS Rezept, kategorie AS Kategorie, schwierigkeit AS Schwierigkeit, zubereitungszeit AS "Zeit (Min)"
FROM #basis/reis
SORT file.name ASC
```

### Kartoffeln
```dataview
TABLE WITHOUT ID file.link AS Rezept, kategorie AS Kategorie, schwierigkeit AS Schwierigkeit, zubereitungszeit AS "Zeit (Min)"
FROM #basis/kartoffeln
SORT file.name ASC
```

### Brot
```dataview
TABLE WITHOUT ID file.link AS Rezept, kategorie AS Kategorie, schwierigkeit AS Schwierigkeit, zubereitungszeit AS "Zeit (Min)"
FROM #basis/brot
SORT file.name ASC
```

### Couscous · Quinoa · Polenta · Getreide
```dataview
TABLE WITHOUT ID file.link AS Rezept, kategorie AS Kategorie, schwierigkeit AS Schwierigkeit, zubereitungszeit AS "Zeit (Min)"
FROM #basis/couscous OR #basis/quinoa OR #basis/polenta OR #basis/getreide
SORT file.name ASC
```

---

## 🫑 Gemüse

### Pilze
```dataview
TABLE WITHOUT ID file.link AS Rezept, kategorie AS Kategorie, schwierigkeit AS Schwierigkeit, zubereitungszeit AS "Zeit (Min)"
FROM #basis/pilze
SORT file.name ASC
```

### Kürbis
```dataview
TABLE WITHOUT ID file.link AS Rezept, kategorie AS Kategorie, schwierigkeit AS Schwierigkeit, zubereitungszeit AS "Zeit (Min)"
FROM #basis/kürbis
SORT file.name ASC
```

### Tomaten
```dataview
TABLE WITHOUT ID file.link AS Rezept, kategorie AS Kategorie, schwierigkeit AS Schwierigkeit, zubereitungszeit AS "Zeit (Min)"
FROM #basis/tomaten
SORT file.name ASC
```

### Paprika
```dataview
TABLE WITHOUT ID file.link AS Rezept, kategorie AS Kategorie, schwierigkeit AS Schwierigkeit, zubereitungszeit AS "Zeit (Min)"
FROM #basis/paprika
SORT file.name ASC
```

### Zucchini
```dataview
TABLE WITHOUT ID file.link AS Rezept, kategorie AS Kategorie, schwierigkeit AS Schwierigkeit, zubereitungszeit AS "Zeit (Min)"
FROM #basis/zucchini
SORT file.name ASC
```

### Kohl · Wurzelgemüse · Blattgemüse
```dataview
TABLE WITHOUT ID file.link AS Rezept, kategorie AS Kategorie, schwierigkeit AS Schwierigkeit, zubereitungszeit AS "Zeit (Min)"
FROM #basis/kohl OR #basis/wurzelgemüse OR #basis/blattgemüse OR #basis/gemüse
SORT file.name ASC
```

---

## 🍰 Backen & Süßes

```dataview
TABLE WITHOUT ID file.link AS Rezept, kategorie AS Kategorie, schwierigkeit AS Schwierigkeit, zubereitungszeit AS "Zeit (Min)"
FROM #basis/mehl OR #basis/schokolade OR #basis/nüsse OR #basis/obst OR #basis/beeren
SORT file.name ASC
```
