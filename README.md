# Portfolio — John Gustave Mahuzonsou AMOULE

Portfolio personnel — développeur web full stack, orienté cybersécurité.
React, Vite, Tailwind CSS v4, Framer Motion, AOS, Lucide, logos réels (simple-icons).

## Démarrer en local

```bash
npm install
npm run dev
```

Build de production :

```bash
npm run build
npm run preview
```

## ⚠️ À corriger avant mise en ligne (priorité)

1. **Expérience affichée ("+X ans")** — ouvre `src/data/profile.js` et remplace la valeur
   `experienceStart` par la date réelle de ton tout premier stage en entreprise
   (format `"AAAA-MM-JJ"`). Le chiffre affiché sur le site est recalculé automatiquement
   à chaque visite à partir de cette date — mets la bonne date une fois, il ne sera
   plus jamais faux.
2. **Photo** — dépose ta photo à la racine `public/profile-photo.jpg` (ou modifie
   `photoPath` dans `src/data/profile.js` si tu préfères un autre nom/format comme `.png`).
   Si le fichier est absent, le monogramme "JG" reste affiché automatiquement — aucune
   action requise si tu n'as pas encore de photo.
3. **CV** — dépose ton CV PDF à `public/cv/CV_John_Gustave_AMOULE.pdf` (chemin déjà
   branché sur le bouton "Télécharger mon CV").
4. **Liens GitHub par projet** — dans `src/data/projects.js`, chaque projet a un champ
   `github`. J'ai mis `https://github.com/MRJOUJOU` par défaut sur les projets publics
   et une chaîne vide `""` (→ affiché "Privé") sur ceux que tu as demandé de garder privés.
   Remplace par le lien exact du dépôt une fois qu'il existe, projet par projet.
5. **Liens de démo en ligne** — le champ `demo` est vide partout pour l'instant. Une fois
   MAHOUSSI et la plateforme d'exercices d'allemand déployées, ajoute leur URL dans ce
   champ pour faire apparaître le bouton "Voir en ligne".

## Fonctionnalités principales

- Deux thèmes sombres ("Bleu" / "Noir"), jamais de flash blanc au changement.
- Statistiques animées (compteur type "vues YouTube") + compteur de visiteurs
  (⚠️ simulation locale au navigateur via `localStorage`, pas un vrai compteur global
  partagé — ça demanderait un backend).
- Assistant virtuel (bouton flottant, bas gauche) : ~30 sujets couverts par
  reconnaissance de mots-clés dans `src/data/faq.js`, avec bouton "Contact" quand il
  ne trouve pas de réponse.
- 16 projets personnels + 5 projets professionnels (chez UPSILION CONSULTING),
  chacun avec statut, rôle, stack et lien GitHub/démo.
- Avis visiteurs (stockés en `localStorage`, les plus récents en haut) — section distincte
  des témoignages d'exemple, qui restent clairement annoncés comme simulés (voir plus bas).
- Témoignages d'exemple : 6 avis fictifs, rotation toutes les heures, dates réalistes.
  Ils restent marqués "avis d'exemple / simulé" — je n'ai pas retiré cette mention : la
  présenter comme un vrai retour client serait trompeur pour un recruteur qui vérifierait,
  et ça peut se retourner contre toi en entretien.
- Section Blog avec tes 5 articles réels (titre, date, temps de lecture, résumé).
- Multilingue FR/EN/DE : toute l'interface, le Hero, la section À propos et **les titres
  et descriptions de tous les projets** sont traduits (`src/i18n/`). Les points forts
  détaillés (bullet points) et les commentaires visiteurs restent dans leur langue
  d'origine — un commentaire écrit en français par un visiteur ne peut pas être traduit
  automatiquement sans service de traduction externe.

## Personnaliser le contenu

- `src/data/profile.js` — identité, contact, liens, date d'expérience, citations sous la photo
- `src/data/skills.js` — compétences et logos
- `src/data/projects.js` — projets personnels et professionnels
- `src/data/experiences.js` — expérience, formation
- `src/data/certifications.js` — certifications obtenues / en préparation
- `src/data/testimonials.js` — témoignages d'exemple
- `src/data/blog.js` — articles de blog
- `src/data/faq.js` — base de connaissances de l'assistant
- `src/i18n/translations.js` — traductions de l'interface (FR/EN/DE)
- `src/i18n/projectTranslations.js` — traductions des titres/descriptions de projets

## Déploiement

Compatible Vercel / Netlify / GitHub Pages : `npm run build` génère le dossier `dist/`.
