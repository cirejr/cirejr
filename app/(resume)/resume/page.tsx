import Link from "next/link";

export default function ResumeFr() {
  return (
    <div className="mx-auto max-w-5xl p-8 text-sm">
      <header className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <Link href="/" className="text-6xl font-bold text-blue-600">
            Ciré Jr Ba
          </Link>
          <p className="mt-2">
            Experienced IT Consultant and Front-End Developer specializing in
            web and mobile application development
          </p>
        </div>
        <div className="mt-8">
          <p>juniorcireba@gmail.com</p>
          <p>(+221) 77 842 73 00</p>
          <a target="_blank" href="https://www.github.com/cirejr">
            github.com/cirejr
          </a>
          <br />
          <a target="_blank" href="https://www.linkedin.com/in/ba-ciré-junior">
            linkedin.com/in/ba-ciré-junior
          </a>
          <br />
          <a href="https://x.com/cirejr_" target="_blank">
            x.com/cirejr_
          </a>
        </div>
      </header>
      <main className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <section className="md:col-span-2">
          <h2 className="mb-4 text-2xl font-bold text-blue-600">
            Professional Experience
          </h2>
          <div className="mb-8">
            <div className="flex items-center gap-4">
              <h3 className="text-lg">
                Developer ·<span className="font-semibold"> Freelance</span>
              </h3>
              <p className="text-sm text-gray-600">Jan 2021 — Present</p>
            </div>
            <ul className="ml-5 mt-2 list-disc space-y-1">
              <li>
                Part of the front-end team for an online learning platform
                tailored for medical students, leveraging technologies like
                <strong className="ml-1">
                  Next.js, TypeScript, Shadcn, Next-ui, and Tailwind CSS
                </strong>
                . The platform features a social media-like public section for
                teachers and students to post, like, and comment. Developed
                teacher authentication flows with OAuth, teacher profile
                completion, course creation and listing, and a detailed course
                page. Implemented question and reply creation and listing for
                both teachers and students, along with post-comment
                functionalities. Worked on the teacher dashboard and Stripe
                checkout page for seamless course purchases. Enabled automatic
                Google Meet link creation for courses.
              </li>
              <li>
                Collaborated on the front-end development of an enterprise-level
                management application using technologies like{" "}
                <strong className="ml-1">
                  Next js, Typescript, Shadcn, Tailwind CSS.
                </strong>{" "}
                The app features various functionnalities such as role-based
                access control and different types of worker management.
                Developed complex forms including user creation forms, order
                creation/editing, and service/product management features.
                Implemented order comments forms, various listing data tables,
                and integrated billing and invoice functionalities, including
                downloading options. Utilized server actions to enhance
                application efficiency and performance.
              </li>
              <li>
                Designed WordPress websites for various clients, including an
                association for Peulh diaspora
              </li>
              <li>
                Developed a showcase WordPress site for a beverage company
              </li>
              <li>
                Built the front/UI for a Airbnb-like platform, Angular, css,
                bootstrap
              </li>
              <li>
                Collaborated with others building a freelancing platform, mainly
                worked on the ui, Angular, css, bootstrap,
              </li>
              <li>
                Built a landing page for software development company using
                HTML-CSS and Bootstrap
              </li>
              <li>
                Built a landing page for a car rental company using HTML-CSS and
                Bootstrap
              </li>
              <li>
                Worked on a Telegram Marketplace using React Js, Telegram Bot,
                MySQL, MUI, and Node JS
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <div className="flex items-center gap-4">
              <h3 className="text-lg">
                Junior Developer ·
                <span className="font-semibold">
                  {" "}
                  Digital & Telecom Services
                </span>
              </h3>
              <p className="text-sm text-gray-600">Jul 2021 — Oct 2021</p>
            </div>
            <ul className="ml-5 mt-2 list-disc space-y-1">
              <li>Built a worpdress e-market for a legume company</li>
              <li>
                Built a prestashop e-commerce website for a glasses business
              </li>
              <li>
                Collaborated with others on a stock management web app, mainly
                worked on the ui, html, css
              </li>
              <li>
                Built a mobile app QR-CODE scanning application for attendance
                tracking, react native(EXPO), front
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <div className="flex items-center gap-4">
              <h3 className="text-lg">
                Wordpress developper ·
                <span className="font-semibold"> GOMTUHG</span>
              </h3>
              <p className="text-sm text-gray-600">Dec 2020 — Jul 2021</p>
            </div>
            <ul className="ml-5 mt-2 list-disc space-y-1">
              <li>Developed WordPress websites for various clients</li>
              <li>Created an online domain name and hosting sales platform</li>
              <li>
                Designed a single-page website for a pharmaceutical company
              </li>
            </ul>
          </div>
        </section>
        <aside>
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-blue-600">Skills</h2>
            <h3 className="text-lg font-semibold">Programming Languages</h3>
            <p className="text-sm">
              HTML, CSS, JavaScript, C (basic), PHP (basic), Java
            </p>
            <h3 className="mt-4 text-lg font-semibold">
              Frameworks & Libraries
            </h3>
            <p className="text-sm">
              React Js, React Native, Expo, Angular, Next.js, Bootstrap,
              Tailwind CSS
            </p>
            <h3 className="mt-4 text-lg font-semibold">Tools & Platforms</h3>
            <p className="text-sm">
              Git, GitHub, GitLab, WordPress, PrestaShop, Sanity,
              Hygraph/GraphCMS, Figma, Supabase
            </p>
          </div>
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-blue-600">
              Selected Projects
            </h2>

            <h3 className="mt-4 text-lg font-semibold">
              Excel-Genie: AI-Powered Spreadsheet Generator
            </h3>
            <p className="text-sm">
              An AI-driven tool for generating structured Excel spreadsheets
              through a ChatGPT-like interface. Built with{" "}
              <strong>Next.js, TypeScript, Tailwind CSS, shadcn</strong>, and{" "}
              <strong>Supabase</strong> for authentication and backend. AI
              capabilities powered by <strong>Vercel AI SDK</strong>.
            </p>

            <h3 className="mt-4 text-lg font-semibold">SaaS Starter Kit</h3>
            <p className="text-sm">
              A pre-built SaaS template designed for rapid development,
              including authentication, user management, billing integration,
              and dashboard UI. Developed using{" "}
              <strong>
                Next.js, TypeScript, Tailwind CSS, shadcn, Supabase, Authjs,
                Stripe, and Paddle
              </strong>
              .
            </p>

            <h3 className="mt-4 text-lg font-semibold">
              Medical Care Appointment Booking App
            </h3>
            <p className="text-sm">
              A platform enabling users to register, create detailed profiles,
              book appointments, and receive SMS notifications. Features an
              admin dashboard for managing appointments. Built with{" "}
              <strong>Next.js, TypeScript, Tailwind CSS, shadcn</strong>, and{" "}
              <strong>Appwrite</strong> as the backend.
            </p>

            <h3 className="mt-4 text-lg font-semibold">E-Learning Platform</h3>
            <p className="text-sm">
              A complete online learning platform with a landing page, admin
              dashboard, course and user management, and authentication. Backend
              powered by <strong>Supabase</strong>, with the frontend using{" "}
              <strong>
                Next.js, TypeScript, Tailwind CSS, shadcn, and Next-UI
              </strong>
              .
            </p>
          </div>

          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-blue-600">Education</h2>
            <h3 className="text-lg font-semibold">
              Cheikh Anta Diop University
            </h3>
            <p className="text-sm">
              Bachelor&apos;s Degree in Data Transmission and Information
              Security
            </p>
            <p className="text-sm text-gray-600">2017 — 2021</p>
            <h3 className="mt-4 text-lg font-semibold">
              Senegal Virtual University
            </h3>
            <p className="text-sm">
              First Year in Web Gaming Application Development
            </p>
            <p className="text-sm text-gray-600">2017 — 2018</p>
          </div>
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-blue-600">Languages</h2>
            <p className="text-sm">
              French (Spoken & Written), English (Spoken & Written), Bambara
              (Native)
            </p>
          </div>
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-blue-600">Interests</h2>
            <p className="text-sm">Reading, Video games, Sports</p>
          </div>
        </aside>
      </main>
    </div>
  );
}
