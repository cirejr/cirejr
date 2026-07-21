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
  title: "Full-Stack Engineer (Frontend Focus)",
  summary:
    "Full-Stack Engineer with 4+ years of experience building production web applications, SaaS products, and business platforms using TypeScript, React, Next.js, Node.js, and modern backend technologies. Experienced in developing complete application workflows including authentication, payments, APIs, AI integrations, dashboards, and enterprise management systems.",

  contact: {
    email: "juniorcireba@gmail.com",
    phone: "(+221) 77 842 73 00",
    linkedin: "linkedin.com/in/cirejr",
    github: "github.com/cirejr",
  },

  experience: [
    {
      role: "Frontend Developer (Next.js / TypeScript)",
      company: "DevPhantom",
      period: "Oct 2023 — Aug 2024",
      projects: [
        {
          name: "Medical E-Learning Platform",
          bullets: [
            "Developed production features for an e-learning platform serving medical students using Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Next-UI",
            "Implemented authentication flows with OAuth, teacher profiles, course management workflows, and student interactions",
            "Built social features including posts, comments, likes, and Q&A functionality",
            "Integrated Stripe payments for course purchases and automated Google Meet link generation for online classes",
          ],
        },
        {
          name: "Enterprise Management Application",
          bullets: [
            "Developed modules for an enterprise management platform including user management, workflows, and business operations",
            "Implemented role-based access control, complex forms, data tables, and administration interfaces",
            "Built order management, service/product management, invoicing workflows, and PDF generation features",
            "Worked with modern React patterns and server-side data handling approaches",
          ],
        },
      ],
    },

    {
      role: "Technical Client Support & Partnerships Manager",
      company: "Insoft SAS",
      period: "Nov 2022 — Present",
      bullets: [
        "Manage technical client support operations for digital platforms, including issue investigation and operational troubleshooting",
        "Monitor platform activity, transactions, and service reliability while coordinating issue resolution",
        "Support technical discussions with partners, onboarding processes, and integration-related communication",
        "Bridge business requirements and technical teams to improve platform operations and customer experience",
      ],
    },

    {
      role: "Frontend Developer (Angular)",
      company: "TechLabs",
      period: "May 2022 — Jun 2023",
      projects: [
        {
          name: "Rental Platform",
          bullets: [
            "Developed frontend interfaces for an Airbnb-style rental platform using Angular, Bootstrap, and PrimeNG",
            "Built reusable components and responsive user interfaces for customer workflows",
          ],
        },
        {
          name: "Freelancing Platform",
          bullets: [
            "Contributed to frontend development of a freelancing marketplace application",
            "Implemented UI components and application screens using Angular and Bootstrap",
          ],
        },
      ],
    },

    {
      role: "Frontend Developer (Freelance)",
      company: "Freelance",
      period: "Jan 2021 — Present",
      projects: [
        {
          name: "MTS Business Applications",
          bullets: [
            "Developed internal business applications for MTS including workflow management and operational tools",
            "Built a transit invoicing application for managing billing processes, invoice workflows, and business operations",
            "Developed a GED/ERP application for document management and enterprise resource workflows",
            "Implemented dashboards, forms, data management interfaces, and business logic-driven workflows",
          ],
        },
        {
          name: "Telegram Marketplace",
          bullets: [
            "Built a marketplace application integrating Telegram Bot API with React, Node.js, MySQL, and Material UI",
            "Developed frontend interfaces and backend services supporting marketplace workflows",
          ],
        },
        {
          name: "Client Websites",
          bullets: [
            "Developed WordPress websites and landing pages for businesses, associations, and organizations",
            "Delivered custom digital solutions based on client requirements",
          ],
        },
      ],
    },

    {
      role: "Junior Developer",
      company: "Digital & Telecom Services",
      period: "Jul 2021 — Sep 2021",
      bullets: [
        "Developed e-commerce solutions using WordPress and PrestaShop",
        "Built a QR-code attendance tracking mobile application using React Native and Expo",
        "Implemented frontend interfaces for a stock management application using HTML and CSS",
      ],
    },

    {
      role: "WordPress Developer",
      company: "GOMTUHG",
      period: "Dec 2020 — Jul 2021",
      bullets: [
        "Developed and maintained WordPress websites for business clients",
        "Created an online domain name and hosting sales platform",
        "Designed corporate and pharmaceutical landing pages",
      ],
    },
  ],

  projects: [
    {
      name: "Snap Feature — AI Repository Analysis Tool",
      description:
        "AI-powered developer tool that analyzes code repositories, identifies application features, and generates migration guides to help developers understand and transition existing projects.",
      technologies:
        "Next.js, TypeScript, Vercel AI SDK, GitHub API, Drizzle ORM, PostgreSQL, Better Auth",
      url: "github.com/cirejr",
    },

    {
      name: "Excel-Genie",
      description:
        "AI-powered SaaS application that generates structured Excel spreadsheets through a conversational interface. Includes authentication, billing, file generation, and AI workflows.",
      technologies:
        "Next.js, TypeScript, Tailwind CSS, shadcn/ui, Supabase, Vercel AI SDK",
      url: "github.com/cirejr/excel-genie",
    },

    {
      name: "SaaS Starter Kit",
      description:
        "Reusable SaaS foundation providing authentication, user management, billing workflows, and dashboard architecture for rapid application development.",
      technologies:
        "Next.js, TypeScript, Tailwind CSS, shadcn/ui, Supabase, Auth.js, Stripe, Paddle",
      url: "github.com/cirejr/saas-starter",
    },
  ],

  skills: {
    coreStack:
      "TypeScript, JavaScript (ES6+), React, Next.js, Node.js, PostgreSQL",
    supporting:
      "Tailwind CSS, Supabase, Drizzle ORM, Auth.js, Better Auth, Stripe, REST APIs, Git, Vercel AI SDK",
    complementary:
      "Angular, React Native, WordPress, PrestaShop, Sanity, Hygraph, Docker",
  },

  education: [
    {
      degree: "B.Sc. in Data Transmission and Information Security",
      school: "Cheikh Anta Diop University",
      period: "2017 — 2021",
      location: "Dakar",
    },
  ],

  languages: [
    "French — Fluent",
    "English — Fluent",
    "Bambara — Native",
  ],
};

export const resumeFR: ResumeData = {
  name: "Cire Junior Ba",
  title: "Ingénieur Full-Stack (Orientation Frontend)",
  summary:
    "Ingénieur Full-Stack avec plus de 4 ans d'expérience dans le développement d'applications web en production, de produits SaaS et de plateformes métiers utilisant TypeScript, React, Next.js, Node.js et des technologies backend modernes. Expérimenté dans la conception de workflows complets incluant authentification, paiements, API, intégrations IA, tableaux de bord et applications de gestion d'entreprise.",

  contact: {
    email: "juniorcireba@gmail.com",
    phone: "(+221) 77 842 73 00",
    linkedin: "linkedin.com/in/cirejr",
    github: "github.com/cirejr",
  },

  experience: [
    {
      role: "Développeur Frontend (Next.js / TypeScript)",
      company: "DevPhantom",
      period: "Oct 2023 — Août 2024",
      projects: [
        {
          name: "Plateforme E-Learning Médicale",
          bullets: [
            "Développement de fonctionnalités en production pour une plateforme d'apprentissage destinée aux étudiants en médecine avec Next.js, TypeScript, Tailwind CSS, shadcn/ui et Next-UI",
            "Implémentation des flux d'authentification OAuth, gestion des profils enseignants, création de cours et interactions utilisateurs",
            "Développement des fonctionnalités sociales incluant publications, commentaires, likes et système de questions/réponses",
            "Intégration des paiements Stripe pour l'achat de cours et génération automatique de liens Google Meet pour les classes en ligne",
          ],
        },
        {
          name: "Application de Gestion Enterprise",
          bullets: [
            "Développement de modules pour une application de gestion enterprise incluant gestion utilisateurs, workflows métiers et opérations internes",
            "Implémentation d'un contrôle d'accès basé sur les rôles, formulaires complexes, tableaux de données et interfaces d'administration",
            "Développement des fonctionnalités de gestion des commandes, services/produits, facturation et génération de documents PDF",
            "Utilisation de pratiques modernes React et de solutions de gestion de données côté serveur",
          ],
        },
      ],
    },

    {
      role: "Responsable Support Technique & Partenariats",
      company: "Insoft SAS",
      period: "Nov 2022 — Présent",
      bullets: [
        "Gestion du support technique client pour des plateformes digitales, incluant l'analyse d'incidents et la résolution de problèmes opérationnels",
        "Suivi des activités plateformes, transactions et disponibilité des services en collaboration avec les équipes techniques",
        "Accompagnement des partenaires lors des phases d'intégration technique et d'onboarding",
        "Interface entre les besoins métiers, les clients et les équipes techniques afin d'améliorer les services numériques",
      ],
    },

    {
      role: "Développeur Frontend (Angular)",
      company: "TechLabs",
      period: "Mai 2022 — Juin 2023",
      projects: [
        {
          name: "Plateforme de Location",
          bullets: [
            "Développement des interfaces frontend d'une plateforme similaire à Airbnb avec Angular, Bootstrap et PrimeNG",
            "Création de composants réutilisables et d'interfaces responsives adaptées aux différents parcours utilisateurs",
          ],
        },
        {
          name: "Plateforme Freelance",
          bullets: [
            "Contribution au développement frontend d'une marketplace de freelancing",
            "Implémentation des interfaces et composants utilisateurs avec Angular et Bootstrap",
          ],
        },
      ],
    },

    {
      role: "Développeur Full-Stack Freelance",
      company: "Freelance",
      period: "Jan 2021 — Présent",
      projects: [
        {
          name: "Applications Métiers MTS",
          bullets: [
            "Développement d'applications internes pour MTS incluant des outils de gestion opérationnelle et de suivi des processus métiers",
            "Création d'une application de facturation transport permettant la gestion des factures et workflows associés",
            "Développement d'une solution GED/ERP pour la gestion documentaire et les processus d'entreprise",
            "Conception d'interfaces métier, tableaux de bord, formulaires et workflows basés sur les besoins opérationnels",
          ],
        },
        {
          name: "Marketplace Telegram",
          bullets: [
            "Développement d'une marketplace intégrant Telegram Bot API avec React, Node.js, MySQL et Material UI",
            "Création des interfaces frontend et services backend nécessaires aux workflows de marketplace",
          ],
        },
        {
          name: "Projets Clients Web",
          bullets: [
            "Création de sites WordPress et pages vitrines pour entreprises, associations et organisations",
            "Développement de solutions digitales personnalisées selon les besoins clients",
          ],
        },
      ],
    },

    {
      role: "Développeur Junior",
      company: "Digital & Telecom Services",
      period: "Juil 2021 — Sept 2021",
      bullets: [
        "Développement de solutions e-commerce avec WordPress et PrestaShop",
        "Création d'une application mobile de suivi de présence par QR-code avec React Native et Expo",
        "Contribution au développement frontend d'une application de gestion de stock avec HTML et CSS",
      ],
    },

    {
      role: "Développeur WordPress",
      company: "GOMTUHG",
      period: "Déc 2020 — Juil 2021",
      bullets: [
        "Développement et maintenance de sites WordPress pour différents clients professionnels",
        "Création d'une plateforme de vente de noms de domaine et d'hébergement",
        "Conception de pages vitrines corporate et pharmaceutiques",
      ],
    },
  ],

  projects: [
    {
      name: "Snap Feature — Outil IA d'Analyse de Dépôts",
      description:
        "Outil IA permettant d'analyser des dépôts de code, d'identifier les fonctionnalités d'une application et de générer des guides de migration afin d'aider les développeurs à comprendre et faire évoluer des projets existants.",
      technologies:
        "Next.js, TypeScript, Vercel AI SDK, GitHub API, Drizzle ORM, PostgreSQL, Better Auth",
      url: "github.com/cirejr",
    },

    {
      name: "Excel-Genie",
      description:
        "Application SaaS basée sur l'IA permettant de générer des fichiers Excel structurés via une interface conversationnelle. Inclut authentification, paiement, génération de fichiers et workflows IA.",
      technologies:
        "Next.js, TypeScript, Tailwind CSS, shadcn/ui, Supabase, Vercel AI SDK",
      url: "github.com/cirejr/excel-genie",
    },

    {
      name: "SaaS Starter Kit",
      description:
        "Base SaaS réutilisable intégrant authentification, gestion utilisateurs, paiements et architecture tableau de bord pour accélérer le développement d'applications.",
      technologies:
        "Next.js, TypeScript, Tailwind CSS, shadcn/ui, Supabase, Auth.js, Stripe, Paddle",
      url: "github.com/cirejr/saas-starter",
    },
  ],

  skills: {
    coreStack:
      "TypeScript, JavaScript (ES6+), React, Next.js, Node.js, PostgreSQL",
    supporting:
      "Tailwind CSS, Supabase, Drizzle ORM, Auth.js, Better Auth, Stripe, API REST, Git, Vercel AI SDK",
    complementary:
      "Angular, React Native, WordPress, PrestaShop, Sanity, Hygraph, Docker",
  },

  education: [
    {
      degree: "Licence en Transmission de Données et Sécurité de l'Information",
      school: "Université Cheikh Anta Diop",
      period: "2017 — 2021",
      location: "Dakar",
    },
  ],

  languages: [
    "Français — Courant",
    "Anglais — Courant",
    "Bambara — Langue maternelle",
  ],
};
