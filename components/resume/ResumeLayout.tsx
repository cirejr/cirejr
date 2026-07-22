import { useMemo } from "react";
import type { ResumeData } from "@/lib/resume-data";
import GridContainer from "../global/grid-container";

interface ResumeLayoutProps {
  data: ResumeData;
}

export default function ResumeLayout({ data }: ResumeLayoutProps) {
  const sortedExperience = useMemo(
    () =>
      [...data.experience].sort((a, b) => {
        if (a.current && !b.current) return -1;
        if (!a.current && b.current) return 1;
        return 0;
      }),
    [data.experience],
  );

  return (
    <div className="mx-auto max-w-[950px] px-24 py-10 text-[13px] leading-relaxed text-neutral-900 border-x">
      <header className="mb-6">
        <h1 className="text-7xl font-bold tracking-tight font-fancy">
          {data.name}
        </h1>
        <p className="mt-1 text-3xl font-medium text-neutral-700 font-fancy">
          {data.title}
        </p>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-neutral-600 font-mono">
          <span>{data.contact.email}</span>
          <span>{data.contact.phone}</span>
          <span>{data.contact.linkedin}</span>
          <span>{data.contact.github}</span>
        </div>
      </header>
      <GridContainer>
        <section className="mb-5 pt-5">
          <h2 className="mb-2 rounded-md bg-neutral-200 p-2 pb-1 text-[14px] uppercase text-xl font-medium font-serif">
            Professional Summary
          </h2>
          <p className="text-[13px] leading-relaxed text-neutral-800">
            {data.summary}
          </p>
        </section>

        <section className="mb-5">
          <h2 className="mb-2  rounded-md bg-neutral-200 p-2  pb-1 text-[14px] text-xl font-medium font-serif uppercase">
            Work Experience
          </h2>
          {sortedExperience.map((job, i) => (
            <div key={i} className="mb-4 last:mb-0">
              <div className="flex items-baseline justify-between">
                <h3 className="text-[14px] font-medium font-mono">
                  {job.role} · {job.company}
                  {job.employmentType ? <> · {job.employmentType}</> : null}
                </h3>
                <span className="whitespace-nowrap text-[12px] text-neutral-500">
                  {job.location ? <>{job.location} · </> : null}
                  {job.period}
                </span>
              </div>
              {job.projects ? (
                <div className="mt-1 space-y-2">
                  {job.projects.map((project, j) => (
                    <div key={j}>
                      <p className="text-[12px] font-medium font-mono text-neutral-700">
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
          <h2 className="mb-2  rounded-md bg-neutral-200 p-2  pb-1 text-[14px] text-xl font-medium font-serif uppercase ">
            Projects
          </h2>
          <div className="space-y-3">
            {data.projects.map((project, i) => (
              <div key={i}>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-[14px] font-medium">{project.name}</h3>
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
          <h2 className="mb-2  rounded-md bg-neutral-200 p-2  pb-1 text-[14px] text-xl font-medium font-serif uppercase">
            Technical Skills
          </h2>
          <div className="space-y-1 text-[13px]">
            <p>
              <span className="font-medium">Core Stack:</span>{" "}
              {data.skills.coreStack}
            </p>
            <p>
              <span className="font-medium">Supporting:</span>{" "}
              {data.skills.supporting}
            </p>
            <p>
              <span className="font-medium">Complementary:</span>{" "}
              {data.skills.complementary}
            </p>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="mb-2  rounded-md bg-neutral-200 p-2  pb-1 text-[14px] text-xl font-medium font-serif uppercase">
            Education
          </h2>
          {data.education.map((edu, i) => (
            <div key={i} className="mb-1 last:mb-0">
              <div className="flex items-baseline justify-between">
                <h3 className="text-[14px] font-medium">{edu.degree}</h3>
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
          <h2 className="mb-2  rounded-md bg-neutral-200 p-2  pb-1 text-[14px] text-xl font-medium font-serif uppercase">
            Languages
          </h2>
          <p className="text-[13px]">{data.languages.join(" · ")}</p>
        </section>
      </GridContainer>
    </div>
  );
}
