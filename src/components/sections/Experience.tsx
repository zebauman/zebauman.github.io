import { experience } from "../data/experience.ts";
import ExperienceCard from "../cards/ExperienceCard.tsx";

export default function Experience() {
    return (
        <section id="experience" className="py-5">
            <div className="container">
                <h2 className="mb-4 display-6 text-center">Experience</h2>
                <div className="row g-4">
                    {experience.map((job, idx) => (
                        <div key={idx} className="col-12 col-md-6">
                            <ExperienceCard {...job} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
