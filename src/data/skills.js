// level: 1 (Notions) → 5 (Maîtrise). Honest junior-level self-assessment.
// slug/color = identifiant simple-icons (https://simpleicons.org) pour le vrai logo.
export const levelLabels = {
  1: "Notions",
  2: "Opérationnel",
  3: "Intermédiaire",
  4: "Confirmé",
  5: "Maîtrise",
};

export const skillCategories = [
  {
    id: "langages",
    title: "Langages",
    tag: "LANG",
    skills: [
      { name: "JavaScript", level: 4, slug: "javascript", color: "F7DF1E" },
      { name: "PHP", level: 4, slug: "php", color: "777BB4" },
      { name: "Python", level: 3, slug: "python", color: "3776AB" },
      { name: "SQL", level: 4, slug: "mysql", color: "4479A1" },
      { name: "HTML5", level: 5, slug: "html5", color: "E34F26" },
      { name: "CSS3", level: 5, slug: "css3", color: "1572B6" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & Librairies",
    tag: "FMWK",
    skills: [
      { name: "React", level: 4, slug: "react", color: "61DAFB" },
      { name: "Laravel", level: 4, slug: "laravel", color: "FF2D20" },
      { name: "Bootstrap", level: 4, slug: "bootstrap", color: "7952B3" },
      { name: "Tailwind CSS", level: 3, slug: "tailwindcss", color: "06B6D4" },
      { name: "WordPress", level: 3, slug: "wordpress", color: "21759B" },
      { name: "Flutter", level: 2, slug: "flutter", color: "02569B" },
    ],
  },
  {
    id: "outils",
    title: "Outils & Environnements",
    tag: "TOOL",
    skills: [
      { name: "Git", level: 4, slug: "git", color: "F05032" },
      { name: "GitHub", level: 4, slug: "github", color: "F5F5F5" },
      { name: "VS Code", level: 5, slug: "visualstudiocode", color: "007ACC" },
      { name: "Linux", level: 3, slug: "linux", color: "FCC624" },
      { name: "Figma", level: 3, slug: "figma", color: "F24E1E" },
      { name: "UI/UX Design", level: 3, slug: "figma", color: "A259FF" },
    ],
  },
];

// Nombre total de technologies distinctes — utilisé pour la statistique animée.
export const totalTechCount = skillCategories.reduce((sum, c) => sum + c.skills.length, 0);
