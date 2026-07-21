import type { ResumeData } from "@/lib/resume-data";

interface ResumeLayoutProps {
  data: ResumeData;
}

export default function ResumeLayout({ data }: ResumeLayoutProps) {
  return (
    <div className="mx-auto max-w-[800px] px-8 py-10 text-[13px] leading-relaxed text-neutral-900">
      <header className="mb-6">
        <h1 className="text-[26px] font-bold tracking-tight">{data.name}</h1>
        <p className="mt-1 text-[15px] font-medium text-neutral-700">
          {data.title}
        </p>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-neutral-600">
          <span>{data.contact.email}</span>
          <span>{data.contact.phone}</span>
          <span>{data.contact.linkedin}</span>
          <span>{data.contact.github}</span>
        </div>
      </header>

      <section className="mb-5">
        <h2 className="mb-2 border-b border-neutral-300 pb-1 text-[14px] font-bold uppercase tracking-wide font-serif italic">
          Professional Summary
        </h2>
        <p className="text-[13px] leading-relaxed text-neutral-800">
          {data.summary}
        </p>
      </section>

      <section className="mb-5">
        <h2 className="mb-2 border-b border-neutral-300 pb-1 text-[14px] font-bold uppercase tracking-wide">
          Work Experience
        </h2>
        {data.experience.map((job, i) => (
          <div key={i} className="mb-4 last:mb-0">
            <div className="flex items-baseline justify-between">
              <h3 className="text-[14px] font-semibold">
                {job.role} · {job.company}
              </h3>
              <span className="whitespace-nowrap text-[12px] text-neutral-500">
                {job.period}
              </span>
            </div>
            {job.projects ? (
              <div className="mt-1 space-y-2">
                {job.projects.map((project, j) => (
                  <div key={j}>
                    <p className="text-[12px] font-medium italic text-neutral-700">
                      {project.name}
                    </p>
                    <ul className="ml-4 mt-0.5 list-disc space-y-0.5">
                      {project.bullets.map((bullet, k) => (
                        <li key={k} className="text-[13px]">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : job.bullets ? (
              <ul className="ml-4 mt-1 list-disc space-y-0.5">
                {job.bullets.map((bullet, j) => (
                  <li key={j} className="text-[13px]">
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </section>

      <section className="mb-5">
        <h2 className="mb-2 border-b border-neutral-300 pb-1 text-[14px] font-bold uppercase tracking-wide">
          Projects
        </h2>
        <div className="space-y-3">
          {data.projects.map((project, i) => (
            <div key={i}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-[14px] font-semibold">{project.name}</h3>
                {project.url && (
                  <span className="text-[11px] text-neutral-500">
                    {project.url}
                  </span>
                )}
              </div>
              <p className="mt-0.5 text-[13px] text-neutral-800">
                {project.description}
              </p>
              <p className="mt-0.5 text-[12px] text-neutral-500">
                {project.technologies}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-5">
        <h2 className="mb-2 border-b border-neutral-300 pb-1 text-[14px] font-bold uppercase tracking-wide">
          Technical Skills
        </h2>
        <div className="space-y-1 text-[13px]">
          <p>
            <span className="font-semibold">Core Stack:</span>{" "}
            {data.skills.coreStack}
          </p>
          <p>
            <span className="font-semibold">Supporting:</span>{" "}
            {data.skills.supporting}
          </p>
          <p>
            <span className="font-semibold">Complementary:</span>{" "}
            {data.skills.complementary}
          </p>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="mb-2 border-b border-neutral-300 pb-1 text-[14px] font-bold uppercase tracking-wide">
          Education
        </h2>
        {data.education.map((edu, i) => (
          <div key={i} className="mb-1 last:mb-0">
            <div className="flex items-baseline justify-between">
              <h3 className="text-[14px] font-semibold">{edu.degree}</h3>
              <span className="whitespace-nowrap text-[12px] text-neutral-500">
                {edu.period}
              </span>
            </div>
            <p className="text-[12px] text-neutral-600">
              {edu.school}
              {edu.location ? `, ${edu.location}` : ""}
            </p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="mb-2 border-b border-neutral-300 pb-1 text-[14px] font-bold uppercase tracking-wide">
          Languages
        </h2>
        <p className="text-[13px]">{data.languages.join(" · ")}</p>
      </section>
    </div>
  );
}
