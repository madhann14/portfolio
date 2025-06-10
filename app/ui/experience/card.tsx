import { Experience } from "@/app/lib/definitions";
import { formatDate } from "@/app/lib/utils";
import Skills from "../components/skills";

export default function Card({ experience }: { experience: Experience }) {
    const { start, end, role, company, description, skills } = experience;
    var duration = formatDate(start) + " - " + formatDate(end)
    return (
        <div id="card" className="flex bg-cerulean gap-5 p-5 rounded-xl">
            <div id="duration" className="flex justify-start align-center text-xs font-semibold min-w-35 mt-1.5">
                {duration}
            </div>
            <div className="min-w-0">
                <p className="font-bold">
                    {role} | {company}
                </p>
                <p className="mb-8 mt-4">
                    {description}
                </p>
                <Skills skills={skills} />
            </div>
        </div>
    )
}

