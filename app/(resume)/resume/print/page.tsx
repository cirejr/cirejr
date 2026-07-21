"use client";

import { resumeEN } from "@/lib/resume-data";
import ResumeLayout from "@/components/resume/ResumeLayout";

export default function ResumePrint() {
  return (
    <>
      <div className="no-print fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-white px-8 py-3 shadow-sm print:hidden">
        <p className="text-sm text-neutral-600">
          Use your browser&apos;s print dialog to save as PDF (Ctrl+P / Cmd+P)
        </p>
        <button
          onClick={() => window.print()}
          className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700"
        >
          Print / Save PDF
        </button>
      </div>
      <div className="pt-14">
        <ResumeLayout data={resumeEN} />
      </div>
    </>
  );
}
