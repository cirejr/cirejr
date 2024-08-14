import Link from "next/link";

export default function ResumeFr() {
  return (
    <div className='max-w-5xl mx-auto p-8 text-sm'>
      <header className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
        <div className='md:col-span-2'>
          <Link href='/' className='text-4xl font-bold text-blue-600'>
            Ciré Jr Ba
          </Link>
          <p className='text-lg mt-2'>
            Experienced IT Consultant and Front-End Developer specializing in
            web and mobile application development
          </p>
        </div>
        <div className='mt-8'>
          <p>juniorcireba@gmail.com</p>
          <p>(+221) 77 842 73 00</p>
          <p>github.com/cirejr</p>
          <p>linkedin.com/in/ba-ciré-junior</p>
        </div>
      </header>
      <main className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <section className='md:col-span-2'>
          <h2 className='text-2xl font-bold text-blue-600 mb-4'>
            Professional Experience
          </h2>
          <div className='mb-8'>
            <div className='flex items-center gap-4'>
              <h3 className='text-lg'>
                Developer ·<span className='font-semibold'> Freelance</span>
              </h3>
              <p className='text-sm text-gray-600'>Jan 2021 — Present</p>
            </div>
            <ul className='list-disc ml-5 mt-2 space-y-1'>
              <li>
                Part of the front-end team for an online learning platform
                tailored for medical students, leveraging technologies like
                <strong className='ml-1'>
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
                <strong className='ml-1'>
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
          <div className='mb-8'>
            <div className='flex items-center gap-4'>
              <h3 className='text-lg'>
                Junior Developer ·
                <span className='font-semibold'>
                  {" "}
                  Digital & Telecom Services
                </span>
              </h3>
              <p className='text-sm text-gray-600'>Jul 2021 — Oct 2021</p>
            </div>
            <ul className='list-disc ml-5 mt-2 space-y-1'>
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
          <div className='mb-8'>
            <div className='flex items-center gap-4'>
              <h3 className='text-lg'>
                Wordpress developper ·
                <span className='font-semibold'> GOMTUHG</span>
              </h3>
              <p className='text-sm text-gray-600'>Dec 2020 — Jul 2021</p>
            </div>
            <ul className='list-disc ml-5 mt-2 space-y-1'>
              <li>Developed WordPress websites for various clients</li>
              <li>Created an online domain name and hosting sales platform</li>
              <li>
                Designed a single-page website for a pharmaceutical company
              </li>
            </ul>
          </div>
        </section>
        <aside>
          <div className='mb-8'>
            <h2 className='text-2xl font-bold text-blue-600 mb-4'>Skills</h2>
            <h3 className='text-lg font-semibold'>Programming Languages</h3>
            <p className='text-sm'>
              HTML, CSS, JavaScript, C (basic), PHP (basic), Java
            </p>
            <h3 className='text-lg font-semibold mt-4'>
              Frameworks & Libraries
            </h3>
            <p className='text-sm'>
              React Js, React Native, Expo, Angular, Next.js, Bootstrap,
              Tailwind CSS
            </p>
            <h3 className='text-lg font-semibold mt-4'>Tools & Platforms</h3>
            <p className='text-sm'>
              Git, GitHub, GitLab, WordPress, PrestaShop, Sanity,
              Hygraph/GraphCMS, Figma
            </p>
          </div>
          <div className='mb-8'>
            <h2 className='text-2xl font-bold text-blue-600 mb-4'>
              Selected Projects
            </h2>
            <h3 className='text-lg font-semibold mt-4'>
              Build a medical care appointment booking app
            </h3>
            <p className='text-sm'>
              User registration, complex user profile creation form, appointment
              booking form, admin dashboard, appointment listing, appointment
              cancellation, and sms notifications. Appwrite as backend, next js
              - Typescript as frontend, shadcn and tailwind css for styling.
            </p>
            <h3 className='text-lg font-semibold mt-4'>
              Built an e-learning platform
            </h3>
            <p className='text-sm'>
              Landing page, admin dashboard, course and user creation forms,
              auth. Backend powered by <strong>Supabase</strong> frontend and
              styling with{" "}
              <strong>
                Nextjs, TypeScript, Tailwind CSS, shadcn and next-ui
              </strong>
              .
            </p>
            <h3 className='text-lg font-semibold mt-4'>Blog website</h3>
            <p className='text-sm'>
              Built a next js, tailwind css website with Graphcms for content
              management, with comment section
            </p>
          </div>
          <div className='mb-8'>
            <h2 className='text-2xl font-bold text-blue-600 mb-4'>Education</h2>
            <h3 className='text-lg font-semibold'>
              Cheikh Anta Diop University
            </h3>
            <p className='text-sm'>
              Bachelor&apos;s Degree in Data Transmission and Information
              Security
            </p>
            <p className='text-sm text-gray-600'>2017 — 2019</p>
            <h3 className='text-lg font-semibold mt-4'>
              Senegal Virtual University
            </h3>
            <p className='text-sm'>
              First Year in Web Gaming Application Development
            </p>
            <p className='text-sm text-gray-600'>2017 — 2018</p>
          </div>
          <div className='mb-8'>
            <h2 className='text-2xl font-bold text-blue-600 mb-4'>Languages</h2>
            <p className='text-sm'>
              French (Spoken & Written), English (Spoken & Written), Bambara
              (Native)
            </p>
          </div>
          <div className='mb-8'>
            <h2 className='text-2xl font-bold text-blue-600 mb-4'>Interests</h2>
            <p className='text-sm'>Reading, Video games, Sports</p>
          </div>
        </aside>
      </main>
    </div>
  );
}
