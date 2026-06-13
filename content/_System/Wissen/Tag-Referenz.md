---
titel: Tag-Referenz
datum_erstellt: 2026-05-27
tags: []
---

# 🏷️ Tag-Referenz

> Nur Tags aus dieser Liste sind zulässig. Alles andere gehört nicht in die `tags`-Liste.
>
> Eigenschaften wie Küche, Schwierigkeit, Ernährungsform und Kochzeit werden ausschließlich als **Frontmatter-Felder** gepflegt und über Dataview ausgewertet — nie als Tags.

---

## Verwendungsregeln

- Mehrere Tags gleichzeitig sind erlaubt und erwünscht
- **`basis/*`** beschreibt die Hauptzutat(en) des Rezepts
- **`methode/*`** beschreibt den Zubereitungsweg
- **`saison/*`** markiert Rezepte mit saisonalem Bezug
- **Status-Tags** dokumentieren den persönlichen Umgang mit dem Rezept
- `meal-prep` und `batch-cooking` sind eigenständige Tags ohne Präfix

---

## `basis/*` — Hauptzutat

### Fleisch
```
basis/rind          basis/hackfleisch     basis/kalb
basis/schwein       basis/lamm            basis/wild
basis/speck-wurst
```

### Geflügel
```
basis/hähnchen      basis/ente            basis/pute
basis/geflügel
```

### Fisch & Meeresfrüchte
```
basis/lachs         basis/thunfisch       basis/fisch
basis/garnelen      basis/meeresfrüchte
```

### Eier & Milchprodukte
```
basis/ei            basis/käse            basis/sahne
basis/joghurt
```

### Pflanzliches Protein
```
basis/tofu          basis/tempeh          basis/hülsenfrüchte
```

### Kohlenhydrate & Sättigung
```
basis/pasta         basis/reis            basis/kartoffeln
basis/brot          basis/couscous        basis/quinoa
basis/polenta       basis/getreide        basis/mehl
```

### Gemüse (als Hauptzutat)
```
basis/pilze         basis/kürbis          basis/tomaten
basis/paprika       basis/zucchini        basis/wurzelgemüse
basis/blattgemüse   basis/kohl            basis/gemüse
```

### Backen & Süßes
```
basis/mehl          basis/schokolade      basis/nüsse
basis/obst          basis/beeren
```

---

## `methode/*` — Zubereitungsmethode

```
methode/kochen              methode/braten          methode/backen
methode/dämpfen             methode/frittieren      methode/wok
methode/grillen-direkt      methode/indirektes-grillen
methode/low-and-slow        methode/plancha
methode/dutch-oven          methode/räuchern
methode/sous-vide           methode/slow-cooker
methode/schnellkochtopf     methode/airfryer
methode/einmachen           methode/fermentieren    methode/einlegen
methode/rohkost             methode/meal-prep
```

> ⚠️ Nur `methode/grillen-direkt` verwenden — nicht `methode/grillen`.

---

## `saison/*` — Jahreszeit

```
saison/frühling     saison/sommer
saison/herbst       saison/winter       saison/ganzjährig
```

---

## Status-Tags

```
favorit             bewährt             ausprobieren
im-test             familienrezept      geheimrezept
```

---

## Sonstige Tags

```
meal-prep           batch-cooking
```

---

## Dataview — Tagnutzung im Vault

Welche Tags werden wie häufig verwendet:

```dataview
TABLE length(rows) AS Rezepte
FROM ""
FLATTEN tags AS tag
WHERE tag != null AND tag != ""
GROUP BY tag
SORT length(rows) DESC
```
