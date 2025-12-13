import{experience} from "../data/experience.ts";
import ExperienceCard from "../cards/ExperienceCard.tsx";

export default function Experience(){
    return (
        <section id="experience" className="py-20">
            <h2 className="text-2xl font-semibold mb-8">Experience</h2>
            <div className="space-y-6">
                {experience.map((job, idx) => (
                    <ExperienceCard key={idx} {...job} />
                ))}
            </div>
        </section>
    );
}