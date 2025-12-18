import Hero from "../sections/Hero.tsx";
import Experience from "../sections/Experience.tsx";
import Projects from "../sections/Project.tsx";

export default function PortfolioLayout() {
    return (
        <>
            <main className="container my-5">
                <Hero />
                <Experience />
                <Projects />
            </main>
        </>
    );
}
