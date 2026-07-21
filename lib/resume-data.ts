export interface ResumeProject {
  name: string;
  description: string;
  technologies: string;
  url?: string;
}

export interface ResumeExperienceProject {
  name: string;
  bullets: string[];
}

export interface ResumeExperience {
  role: string;
  company: string;
  period: string;
  projects?: ResumeExperienceProject[];
  bullets?: string[];
}

export interface ResumeSkills {
  coreStack: string;
  supporting: string;
  complementary: string;
}

export interface ResumeEducation {
  degree: string;
  school: string;
  period: string;
  location?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
  experience: ResumeExperience[];
  projects: ResumeProject[];
  skills: ResumeSkills;
  education: ResumeEducation[];
  languages: string[];
}

export const resumeEN: ResumeData = {
  name: "Cire Junior Ba",
  title: "Frontend Engineer",
  summary:
    "Frontend Engineer with 4+ years of experience building responsive web applications using React, TypeScript, and Next.js. Delivered production applications across e-learning, enterprise SaaS, and e-commerce domains. Skilled in authentication flows, API integration, payment systems, and agile team collaboration.",
  contact: {
    email: "juniorcireba@gmail.com",
    phone: "(+221) 77 842 73 00",
    linkedin: "linkedin.com/in/ba-cire-junior",
    github: "github.com/cirejr",
  },
  experience: [
    {
      role: "Frontend Developer",
      company: "Freelance",
      period: "Jan 2021 — Present",
      projects: [
        {
          name: "Medical E-Learning Platform",
          bullets: [
            "Built the front-end for an e-learning platform serving medical students using Next.js, TypeScript, and Tailwind CSS",
            "Implemented OAuth authentication flows, teacher profile management, and course creation/listing features",
            "Developed a social-feed section with real-time post, comment, and like functionalities",
            "Integrated Stripe checkout for course purchases and automated Google Meet link generation",
          ],
        },
        {
          name: "Enterprise Management Application",
          bullets: [
            "Developed the front-end for an enterprise-level management application using Next.js, TypeScript, and shadcn/ui",
            "Built complex forms for user creation, order management, and service/product administration",
            "Implemented role-based access control, data tables, and billing/invoice features with download functionality",
            "Utilized server actions to improve application performance and data handling efficiency",
          ],
        },
        {
          name: "Additional Client Projects",
          bullets: [
            "Built and maintained WordPress sites and landing pages for clients across retail, hospitality, and associations",
            "Developed the front-end for an Airbnb-style rental platform using Angular, CSS, and Bootstrap",
            "Collaborated on a freelancing platform, focusing on UI implementation with Angular and Bootstrap",
            "Built a Telegram Marketplace using React, Node.js, MySQL, and MUI",
          ],
        },
      ],
    },
    {
      role: "Junior Developer",
      company: "Digital & Telecom Services",
      period: "Jul 2021 — Oct 2021",
      bullets: [
        "Developed e-commerce storefronts for 2 clients using WordPress and PrestaShop",
        "Built a QR-code attendance tracking mobile app with React Native (Expo)",
        "Contributed front-end UI for a stock management web application using HTML and CSS",
      ],
    },
    {
      role: "WordPress Developer",
      company: "GOMTUHG",
      period: "Dec 2020 — Jul 2021",
      bullets: [
        "Built and maintained WordPress sites for clients across pharmaceutical, tech, and hosting industries",
        "Developed an online domain name and hosting sales platform with custom booking flow",
      ],
    },
  ],
  projects: [
    {
      name: "SaaS Starter Kit",
      description:
        "Pre-built SaaS template with authentication, user management, billing integration (Stripe/Paddle), and dashboard UI. Used as foundation for rapid client project delivery.",
      technologies: "Next.js, TypeScript, Tailwind CSS, shadcn/ui, Supabase, Auth.js, Stripe, Paddle",
      url: "github.com/cirejr/saas-starter",
    },
    {
      name: "Excel-Genie",
      description:
        "AI-powered tool for generating structured Excel spreadsheets through a ChatGPT-style interface. Handles authentication, file generation, and real-time preview.",
      technologies: "Next.js, TypeScript, Tailwind CSS, shadcn/ui, Supabase, Vercel AI SDK",
      url: "github.com/cirejr/excel-genie",
    },
    {
      name: "Medical Care Appointment Booking App",
      description:
        "Full-stack appointment platform with SMS notifications, admin dashboard, and user profiling for healthcare scheduling.",
      technologies: "Next.js, TypeScript, Tailwind CSS, shadcn/ui, Appwrite",
    },
  ],
  skills: {
    coreStack: "TypeScript, JavaScript (ES6+), React, Next.js, Tailwind CSS",
    supporting:
      "Node.js, Supabase, PostgreSQL, Auth.js, Stripe, REST APIs, Git, Vercel AI SDK",
    complementary:
      "React Native, Angular, WordPress, PrestaShop, Sanity, Hygraph",
  },
  education: [
    {
      degree: "B.Sc. in Data Transmission and Information Security",
      school: "Cheikh Anta Diop University",
      period: "2017 — 2021",
      location: "Dakar",
    },
  ],
  languages: ["French — Fluent", "English — Fluent", "Bambara — Native"],
};

export const resumeFR: ResumeData = {
  name: "Cire Junior Ba",
  title: "Ingénieur Frontend",
  summary:
    "Ingénieur Frontend avec plus de 4 ans d'expérience dans le développement d'applications web réactives utilisant React, TypeScript et Next.js. A livré des applications de production dans les domaines de l'e-learning, du SaaS enterprise et de l'e-commerce. Compétent en flux d'authentification, intégration d'API, systèmes de paiement et collaboration en équipe agile.",
  contact: {
    email: "juniorcireba@gmail.com",
    phone: "(+221) 77 842 73 00",
    linkedin: "linkedin.com/in/ba-cire-junior",
    github: "github.com/cirejr",
  },
  experience: [
    {
      role: "Développeur Frontend",
      company: "Freelance",
      period: "Jan 2021 — Présent",
      projects: [
        {
          name: "Plateforme d'E-Learning Médical",
          bullets: [
            "Développement du front-end d'une plateforme d'apprentissage en ligne pour étudiants en médecine avec Next.js, TypeScript et Tailwind CSS",
            "Implémentation des flux d'authentification OAuth, gestion des profils enseignants et fonctionnalités de création/liste de cours",
            "Développement d'une section fil d'actualité avec fonctionnalités de publication, commentaire et like en temps réel",
            "Intégration du paiement Stripe pour les achats de cours et génération automatique de liens Google Meet",
          ],
        },
        {
          name: "Application de Gestion Enterprise",
          bullets: [
            "Développement du front-end d'une application de gestion de niveau enterprise avec Next.js, TypeScript et shadcn/ui",
            "Construction de formulaires complexes pour création d'utilisateurs, gestion de commandes et administration de services/produits",
            "Implémentation du contrôle d'accès basé sur les rôles, tableaux de données et fonctionnalités de facturation avec téléchargement",
            "Utilisation des server actions pour améliorer les performances et l'efficacité du traitement des données",
          ],
        },
        {
          name: "Projets Clients Supplémentaires",
          bullets: [
            "Construction et maintenance de sites WordPress et pages d'atterrissage pour des clients dans le retail, l'hôtellerie et les associations",
            "Développement du front-end d'une plateforme de location style Airbnb avec Angular, CSS et Bootstrap",
            "Collaboration sur une plateforme de freelancing, focus sur l'implémentation UI avec Angular et Bootstrap",
            "Construction d'un Marketplace Telegram avec React, Node.js, MySQL et MUI",
          ],
        },
      ],
    },
    {
      role: "Développeur Junior",
      company: "Digital & Telecom Services",
      period: "Jul 2021 — Oct 2021",
      bullets: [
        "Développement de boutiques e-commerce pour 2 clients avec WordPress et PrestaShop",
        "Construction d'une application mobile de suivi de présence par QR-code avec React Native (Expo)",
        "Contribution au front-end d'une application web de gestion de stock avec HTML et CSS",
      ],
    },
    {
      role: "Développeur WordPress",
      company: "GOMTUHG",
      period: "Déc 2020 — Jul 2021",
      bullets: [
        "Construction et maintenance de sites WordPress pour des clients dans les secteurs pharmaceutique, tech et hébergement",
        "Développement d'une plateforme de vente en ligne de noms de domaine et d'hébergement avec flux de réservation personnalisé",
      ],
    },
  ],
  projects: [
    {
      name: "SaaS Starter Kit",
      description:
        "Template SaaS pré-construit avec authentification, gestion des utilisateurs, intégration de paiement (Stripe/Paddle) et tableau de bord. Utilisé comme base pour la livraison rapide de projets clients.",
      technologies: "Next.js, TypeScript, Tailwind CSS, shadcn/ui, Supabase, Auth.js, Stripe, Paddle",
      url: "github.com/cirejr/saas-starter",
    },
    {
      name: "Excel-Genie",
      description:
        "Outil alimenté par l'IA pour générer des tableaux Excel structurés via une interface style ChatGPT. Gère l'authentification, la génération de fichiers et l'aperçu en temps réel.",
      technologies: "Next.js, TypeScript, Tailwind CSS, shadcn/ui, Supabase, Vercel AI SDK",
      url: "github.com/cirejr/excel-genie",
    },
    {
      name: "Application de Prise de Rendez-Vous Médicaux",
      description:
        "Plateforme complète de rendez-vous avec notifications SMS, tableau de bord administrateur et profilage utilisateurs pour la planification healthcare.",
      technologies: "Next.js, TypeScript, Tailwind CSS, shadcn/ui, Appwrite",
    },
  ],
  skills: {
    coreStack: "TypeScript, JavaScript (ES6+), React, Next.js, Tailwind CSS",
    supporting:
      "Node.js, Supabase, PostgreSQL, Auth.js, Stripe, API REST, Git, Vercel AI SDK",
    complementary:
      "React Native, Angular, WordPress, PrestaShop, Sanity, Hygraph",
  },
  education: [
    {
      degree: "Licence en Transmission de Données et Sécurité de l'Information",
      school: "Université Cheikh Anta Diop",
      period: "2017 — 2021",
      location: "Dakar",
    },
  ],
  languages: ["Français — Courant", "Anglais — Courant", "Bambara — Langue maternelle"],
};
