# ASTRO SETUP – KUEPER.COM ARCHIV

**Hard Science | DSGVO-konform | Zweisprachig | Vercel-Ready**

---

## 📋 VORAUSSETZUNGEN

- **Node.js** 18.14.1 oder neuer
- **Git** installiert
- **GitHub Account** vorhanden
- **Vercel Account** (kostenlos, mit GitHub verlinken)

---

## 🏗️ PROJEKTSTRUKTUR

```
kueper-com/
├── src/
│   ├── content/
│   │   ├── config.ts              # Content Collections Schema
│   │   └── kue/
│   │       ├── bio/
│   │       │   └── kue-bio-0001-1968-de.md
│   │       ├── fnd/
│   │       ├── sci/
│   │       ├── lsc/
│   │       └── tec/
│   ├── layouts/
│   │   └── KUEDocument.astro      # Template für KUE-Dokumente
│   ├── pages/
│   │   ├── index.astro            # Startseite
│   │   ├── [...slug].astro        # Dynamic Routes
│   │   └── en/
│   │       └── [...slug].astro    # Englische Routen
│   └── styles/
│       └── scientific.css         # Design-System
│
├── public/
│   └── fonts/
│       ├── inter/
│       ├── source-serif/
│       └── jetbrains-mono/
│
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 🚀 TEIL 1: LOKALES SETUP (30 Min.)

### Schritt 1: Projekt initialisieren

```bash
# Neues Verzeichnis erstellen
mkdir kueper-com
cd kueper-com

# Node.js Projekt initialisieren
npm create astro@latest . -- --template minimal --typescript strict --git

# Oder manuell:
npm init -y
npm install astro@latest @astrojs/mdx@latest
```

---

### Schritt 2: Dateien kopieren

```bash
# Erstelle Ordnerstruktur
mkdir -p src/{content/kue/{bio,fnd,sci,lsc,tec,his,geo},layouts,pages,styles}
mkdir -p public/fonts/{inter,source-serif,jetbrains-mono}

# Kopiere bereitgestellte Dateien:
# - astro.config.mjs → Root
# - package.json → Root
# - config.ts → src/content/
# - KUEDocument.astro → src/layouts/
# - scientific.css → src/styles/
```

---

### Schritt 3: Fonts installieren

**Siehe:** `FONT-SETUP-GUIDE.md` (bereits erstellt)

1. Download Inter, Source Serif Pro, JetBrains Mono
2. Kopiere `.woff2` Dateien nach `public/fonts/`
3. Struktur:
   ```
   public/fonts/
   ├── inter/
   │   ├── inter-regular.woff2
   │   ├── inter-semibold.woff2
   │   └── inter-bold.woff2
   ├── source-serif/
   │   ├── sourceserif-regular.woff2
   │   └── sourceserif-italic.woff2
   └── jetbrains-mono/
       ├── jetbrainsmono-regular.woff2
       └── jetbrainsmono-bold.woff2
   ```

---

### Schritt 4: TypeScript Config erstellen

```bash
cat > tsconfig.json << 'EOF'
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
EOF
```

---

### Schritt 5: Startseite erstellen

```bash
cat > src/pages/index.astro << 'EOF'
---
import '../styles/scientific.css';
---

<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KUEPER.COM ARCHIV</title>
  <link rel="stylesheet" href="/styles/scientific.css">
</head>

<body>
  <header class="site-header">
    <div class="container">
      <h1 class="site-title">KUEPER.COM ARCHIV</h1>
      <nav class="site-nav">
        <a href="/kategorien">Kategorien</a>
        <a href="/marker">Marker</a>
        <a href="/timeline">Timeline</a>
        <a href="/ueber">Über</a>
        <a href="/en">EN</a>
      </nav>
    </div>
  </header>

  <main class="container">
    <h1>Wissenschaftliche Wissensbasis für literarische Werke</h1>
    
    <blockquote>
      <p><em>"Wissenschaft ist das Fundament. Fiktion ist das Gebäude darauf."</em></p>
    </blockquote>

    <p>
      Das <strong>kueper.com-Archiv (KUE)</strong> dokumentiert ausschließlich 
      wissenschaftlich fundierte Inhalte, die als Grundlage für alle literarischen 
      Werke von Thomas Peter Küper dienen.
    </p>

    <h2>Epistemologische Marker</h2>
    
    <ul>
      <li><span class="marker marker-R">[R]</span> <strong>Research</strong> – Peer-reviewed Forschung</li>
      <li><span class="marker marker-T">[T]</span> <strong>Theoretical</strong> – Theoretische Frameworks</li>
      <li><span class="marker marker-S">[S]</span> <strong>Speculative</strong> – Spekulation auf wissenschaftlicher Basis</li>
      <li><span class="marker marker-P">[P]</span> <strong>Plausible</strong> – Plausible Extrapolation</li>
    </ul>

    <p><strong>Niemals im KUE-Archiv:</strong> <code>[F]</code> Fiction</p>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>
        Thomas Peter Küper | Mörfelder Landstraße 103, 60598 Frankfurt am Main | 
        <a href="mailto:t.kueper@camaleo.de">t.kueper@camaleo.de</a>
      </p>
    </div>
  </footer>
</body>
</html>
EOF
```

---

### Schritt 6: KUE-BIO-0001 hinzufügen

```bash
# Erstelle das Dokument
cat > src/content/kue/bio/kue-bio-0001-1968-de.md << 'EOF'
---
signatur: KUE-BIO-0001-1968-DE
titel: "Thomas Peter Küper – Biografisches Profil"
kategorie: BIO
marker: [R]
sprache: DE
datum: 2026-02-16
version: 1.0
status: Kanonisch
keywords:
  - Thomas Peter Küper
  - Kurator
  - Autor
  - Science Fiction
verwendet_in:
  - Meta-Ebene
public: true
language_variants:
  - KUE-BIO-0001-1968-EN
---

# Thomas Peter Küper – Biografisches Profil

**Signatur:** KUE-BIO-0001-1968-DE  
**Kategorie:** Biographical Profiles  
**Marker:** [R] Research  

---

## Abstract

Thomas Peter Küper (* 7. März 1968, Bad Homburg vor der Höhe) ist ein deutscher Autor, IT-Consultant und Kurator des **kueper.com-Archivs**.

[... Rest des Inhalts aus der bereits erstellten Version ...]
EOF
```

---

### Schritt 7: Dynamic Route erstellen

```bash
cat > src/pages/[...slug].astro << 'EOF'
---
import { getCollection } from 'astro:content';
import KUEDocument from '../layouts/KUEDocument.astro';

export async function getStaticPaths() {
  const kueEntries = await getCollection('kue', ({ data }) => {
    return data.public !== false && data.sprache === 'DE';
  });

  return kueEntries.map(entry => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}

const { entry } = Astro.props;
---

<KUEDocument document={entry} />
EOF
```

---

### Schritt 8: Lokaler Test

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Öffne Browser:
# http://localhost:4321
```

**Prüfe:**
- ✅ Startseite lädt
- ✅ Fonts werden korrekt geladen
- ✅ Design ist wissenschaftlich/nüchtern
- ✅ KUE-BIO-0001 ist erreichbar unter `/bio/kue-bio-0001-1968-de`

---

## ☁️ TEIL 2: VERCEL DEPLOYMENT (15 Min.)

### Schritt 9: GitHub Repository

```bash
# Git initialisieren (falls noch nicht)
git init

# .gitignore erstellen
cat > .gitignore << 'EOF'
# Build
dist/
.astro/

# Dependencies
node_modules/

# Logs
npm-debug.log*

# Environment
.env
.env.production

# OS
.DS_Store
Thumbs.db
EOF

# Erste Commits
git add .
git commit -m "Initial commit: Astro kueper.com"

# GitHub Repository erstellen (auf github.com/new)
# Dann:
git remote add origin https://github.com/USERNAME/kueper-com.git
git branch -M main
git push -u origin main
```

---

### Schritt 10: Vercel Deployment

1. Gehe zu: https://vercel.com/new
2. **Import Git Repository**
3. Wähle: `kueper-com`
4. **Framework Preset:** Astro (automatisch erkannt)
5. **Build Settings:**
   ```
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```
6. **Environment Variables:** (keine nötig)
7. Klicke: **Deploy**

**Deployment dauert ~2-3 Minuten**

---

### Schritt 11: Custom Domain

**Falls kueper.com bereits registriert:**

1. Vercel Dashboard → "Settings" → "Domains"
2. "Add Domain" → `kueper.com`
3. Vercel zeigt DNS-Einträge:
   ```
   A Record: 76.76.21.21
   CNAME www: cname.vercel-dns.com
   ```
4. Gehe zu deinem Domain-Provider
5. Füge DNS-Einträge hinzu
6. Warte ~30 Min. bis 24 Std.
7. HTTPS automatisch aktiviert (kostenlos)

---

## ✅ TEIL 3: WORKFLOW AB JETZT

### Neues Dokument hinzufügen:

```bash
# 1. Erstelle Markdown-Datei
code src/content/kue/sci/kue-sci-0001-2026-de.md

# 2. Schreibe Inhalt mit YAML Frontmatter

# 3. Lokaler Test
npm run dev

# 4. Commit & Push
git add .
git commit -m "Add: KUE-SCI-0001"
git push

# 5. Vercel baut automatisch neu (30-60 Sek.)
# 6. Live auf kueper.com!
```

---

## 🔧 VERCEL-SPEZIFISCHE OPTIMIERUNGEN

### `vercel.json` erstellen (optional):

```json
{
  "headers": [
    {
      "source": "/fonts/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

**Vorteil:** Fonts werden 1 Jahr gecacht

---

## 🎨 DESIGN-UNTERSCHIEDE

### thomas-kueper.de vs. kueper.com

| Aspekt | thomas-kueper.de | kueper.com |
|--------|------------------|------------|
| **Charakter** | Persönlich, warm | Akademisch, nüchtern |
| **Farbpalette** | Wärmere Töne | Fast monochrom |
| **Typografie** | Gleiche Fonts | Gleiche Fonts |
| **Layout** | Lockerer | Strenger |
| **Content-Width** | ~900px | ~750px |
| **Spacing** | Luftiger | Kompakter |

**Gemeinsam:** Inter, Source Serif Pro, JetBrains Mono

---

## 🔐 DSGVO-COMPLIANCE

✅ **Keine Cookies**  
✅ **Keine externen Ressourcen**  
✅ **Alle Fonts lokal**  
✅ **Kein Tracking** (Vercel Analytics optional, DSGVO-konform)  

**Minimale Datenschutzerklärung reicht!**

---

## 📊 PERFORMANCE

| Metrik | Wert |
|--------|------|
| **Fonts Total** | ~220 KB |
| **Page Load** | <300ms (Vercel Edge Network) |
| **Lighthouse Score** | 95-100 |
| **Build Time** | <30 Sek. |

---

## 🆘 TROUBLESHOOTING

### Problem: Content Collection Fehler

**Lösung:**
```bash
# Schema prüfen
npm run astro check

# Falls Fehler in config.ts:
# Stelle sicher, dass alle Dokumente dem Schema entsprechen
```

---

### Problem: Fonts laden nicht

**Lösung:**
```bash
# Prüfe Pfade
ls public/fonts/inter/

# Fonts müssen in public/ liegen, nicht in src/
# URLs in CSS: /fonts/... (ohne 'public')
```

---

### Problem: i18n funktioniert nicht

**Lösung:**
```bash
# Prüfe astro.config.mjs:
# i18n.locales muss ['de', 'en'] enthalten
# defaultLocale muss 'de' sein

# Erstelle separate Seiten für EN:
# src/pages/en/index.astro
```

---

## 🎉 FERTIG!

Deine Website ist jetzt:
- ✅ **Live** auf kueper.com (oder vercel.app)
- ✅ **HTTPS** (automatisch)
- ✅ **DSGVO-konform**
- ✅ **Wartungsarm** (Git Push = Deploy)
- ✅ **Konsistent** mit thomas-kueper.de (gleiche Fonts)
- ✅ **Wissenschaftlich** (nüchterne Ästhetik)

---

## 📞 RESSOURCEN

- **Astro Docs:** https://docs.astro.build
- **Content Collections:** https://docs.astro.build/en/guides/content-collections/
- **Vercel Docs:** https://vercel.com/docs

---

**Viel Erfolg! 🚀**
