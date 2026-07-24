// status: "obtenue" = déjà en poche · "preparation" = objectif en cours / à venir
export const certifications = [
  { id: "python-everybody", title: "Python for Everybody", issuer: "Coursera — University of Michigan", status: "obtenue" },
  { id: "html-css", title: "HTML & CSS", issuer: "OpenClassrooms", status: "obtenue" },
  { id: "cyber-intro", title: "Introduction à la Cybersécurité", issuer: "Cisco Networking Academy", status: "obtenue" },
  { id: "ethical-hacking", title: "Hacking Éthique", issuer: "Cisco Networking Academy", status: "obtenue" },
  { id: "cs50x", title: "CS50x — Introduction à l'Informatique", issuer: "Harvard University (edX)", status: "preparation" },
  { id: "fcc-rwd", title: "Responsive Web Design", issuer: "freeCodeCamp", status: "preparation" },
  { id: "google-cyber", title: "Google Cybersecurity Certificate", issuer: "Coursera (audit gratuit)", status: "preparation" },
  { id: "goethe-a1", title: "Goethe-Zertifikat A1 (Allemand)", issuer: "Goethe-Institut", status: "preparation" },
];

export const earnedCount = certifications.filter((c) => c.status === "obtenue").length;
