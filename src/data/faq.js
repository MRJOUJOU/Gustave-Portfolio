// Base de connaissances de l'assistant — pas d'IA réelle : une simple
// correspondance par mots-clés (le premier mot reconnu dans la phrase
// déclenche la réponse associée), volontairement transparente et facile
// à enrichir. Chaque entrée couvre de nombreuses formulations possibles.
import { profile } from "./profile";
import { projects, professionalProjects } from "./projects";
import { skillCategories } from "./skills";
import { certifications } from "./certifications";
import { experiences, education } from "./experiences";

const allTech = skillCategories.flatMap((c) => c.skills.map((s) => s.name)).join(", ");
const projectNames = [...projects.map((p) => p.title), ...professionalProjects.map((p) => p.title)].join(", ");
const earnedCerts = certifications.filter((c) => c.status === "obtenue").map((c) => c.title).join(", ");
const inProgressCerts = certifications.filter((c) => c.status === "preparation").map((c) => c.title).join(", ");

export const faqEntries = [
  {
    keywords: ["qui es", "qui est", "présente", "presente", "toi", "who is", "who are", "wer bist", "wer ist"],
    answer: `Je suis un assistant qui présente ${profile.fullName}, ${profile.role} basé à ${profile.location}. ${profile.summary}`,
  },
  {
    keywords: ["projet perso", "projets perso", "projet personnel", "réalisation", "realisation", "portfolio de projet"],
    answer: `Voici quelques projets réalisés : ${projectNames}. Le détail de chacun (technologies, rôle, statut) est visible dans la section "Projets" et "Projets en Entreprise".`,
  },
  {
    keywords: ["projet pro", "projets pro", "entreprise", "client", "mission"],
    answer: `Côté professionnel, Gustave a travaillé sur : ${professionalProjects.map((p) => p.title).join(", ")}, chez ${experiences[0].company}.`,
  },
  {
    keywords: ["projet", "projets"],
    answer: `Voici quelques projets réalisés : ${projectNames}.`,
  },
  {
    keywords: ["techno", "technologie", "compétence", "competence", "stack", "langage de programmation", "outil", "skill"],
    answer: `Les technologies pratiquées incluent : ${allTech}. Le niveau de maîtrise pour chacune est visible dans la section "Compétences".`,
  },
  {
    keywords: ["react"],
    answer: `Gustave utilise React couramment, notamment sur MAHOUSSI et plusieurs projets professionnels — niveau "Confirmé" dans la section Compétences.`,
  },
  {
    keywords: ["laravel", "php"],
    answer: `Laravel et PHP sont utilisés au quotidien chez UPSILION CONSULTING pour le développement backend et les API REST.`,
  },
  {
    keywords: ["python"],
    answer: `Python est pratiqué à un niveau intermédiaire, notamment sur des projets d'entraînement comme le jeu 2D en Pygame.`,
  },
  {
    keywords: ["base de donn", "mysql", "sql"],
    answer: `Gustave conçoit des bases de données MySQL normalisées pour ses projets, avec un niveau "Confirmé".`,
  },
  {
    keywords: ["allemand", "german", "deutsch", "b1"],
    answer: `Gustave prépare une certification d'allemand et a développé une plateforme d'exercices pour aider les étudiants germanophones à valider le niveau B1.`,
  },
  {
    keywords: ["anglais", "english"],
    answer: `Le site est aussi disponible en anglais — utilise le sélecteur de langue en haut de page.`,
  },
  {
    keywords: ["cybersécurité", "cybersecurite", "sécurité", "securite", "hacking", "security"],
    answer: `Gustave s'intéresse activement à la cybersécurité : formations Cisco (Introduction à la cybersécurité, Hacking éthique) et bonnes pratiques appliquées dans ses développements.`,
  },
  {
    keywords: ["contact", "email", "mail", "téléphone", "telephone", "joindre", "contacter", "kontakt"],
    answer: `Tu peux contacter Gustave par email à ${profile.email}, par téléphone au ${profile.phone}, ou via le formulaire de la section "Contact".`,
  },
  {
    keywords: ["expérience", "experience", "travail", "job", "poste", "erfahrung"],
    answer: `Gustave travaille actuellement comme Développeur Web chez ${experiences[0].company} (${experiences[0].location}), depuis ${experiences[0].period}.`,
  },
  {
    keywords: ["certification", "certifications", "diplôme", "diplome", "formation", "étude", "etude", "licence", "degree"],
    answer: `Gustave est titulaire d'une ${education[0].degree}. Certifications obtenues : ${earnedCerts}. En préparation : ${inProgressCerts}.`,
  },
  {
    keywords: ["cv", "resume", "télécharger", "telecharger", "download"],
    answer: `Tu peux télécharger le CV directement via le bouton "Télécharger mon CV" en haut de la page.`,
  },
  {
    keywords: ["localisation", "où est", "ou est", "pays", "ville", "bénin", "benin", "cotonou", "where", "location"],
    answer: `Gustave est basé à ${profile.location}.`,
  },
  {
    keywords: ["github", "git", "dépôt", "depot", "code source"],
    answer: `Le code de plusieurs projets est disponible sur GitHub : ${profile.github}`,
  },
  {
    keywords: ["linkedin"],
    answer: `Voici le profil LinkedIn de Gustave : ${profile.linkedin}`,
  },
  {
    keywords: ["disponib", "recherche d'emploi", "recherche emploi", "ouvert", "available", "freelance", "recrut"],
    answer: `Gustave est ouvert à de nouvelles opportunités en développement web full stack — contacte-le directement pour en discuter.`,
  },
  {
    keywords: ["remote", "télétravail", "teletravail", "distance"],
    answer: `Le travail à distance est possible selon le projet — le mieux est d'en discuter directement avec Gustave via le formulaire de contact.`,
  },
  {
    keywords: ["figma", "design", "ui/ux", "ui ux", "graphique", "graphisme"],
    answer: `Gustave pratique aussi le design numérique : maquettes Figma et créations graphiques (logos, flyers, affiches) visibles dans la section Projets.`,
  },
  {
    keywords: ["flutter", "mobile", "application mobile", "app"],
    answer: `Gustave a des notions de Flutter pour le développement mobile, en complément de son cœur de métier web.`,
  },
  {
    keywords: ["wordpress"],
    answer: `Gustave a une pratique intermédiaire de WordPress pour la création de sites basés sur ce CMS.`,
  },
  {
    keywords: ["linux", "kali"],
    answer: `Gustave utilise Linux (notamment Kali Linux) dans le cadre de ses explorations en cybersécurité.`,
  },
  {
    keywords: ["blog", "article"],
    answer: `Gustave partage des articles techniques dans la section Blog du site — Laravel, React, architecture, bonnes pratiques.`,
  },
  {
    keywords: ["pourquoi", "recruter", "embaucher", "why hire"],
    answer: `Gustave allie rigueur technique (React, Laravel), sensibilité à la sécurité, et une vraie autonomie sur des projets complets, du cahier des charges à la mise en production.`,
  },
  {
    keywords: ["merci", "thanks", "danke"],
    answer: `Avec plaisir ! N'hésite pas si tu as d'autres questions.`,
  },
  {
    keywords: ["bonjour", "salut", "hello", "hi ", "hallo"],
    answer: `Bonjour ! Je peux répondre à des questions sur le profil, les projets, les compétences ou le contact de Gustave.`,
  },
];

export function matchFaq(question) {
  const q = question.toLowerCase();
  const hit = faqEntries.find((entry) => entry.keywords.some((k) => q.includes(k)));
  return hit?.answer ?? null;
}
