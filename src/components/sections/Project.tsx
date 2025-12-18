import { projects } from "../data/project";
import ProjectCard from "../cards/ProjectCard";

export default function Projects() {
    return (
        <section id="projects" className="py-5">
            <div className="container">
                <h2 className="mb-4 display-6 text-center">Projects</h2>
                <div className="row g-4">
                    {projects.map((project, idx) => (
                        <div key={idx} className="col-12 col-md-6 col-lg-4">
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
