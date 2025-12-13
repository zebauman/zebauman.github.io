import Hero from "../sections/Hero.tsx";
import Experience from "../sections/Experience.tsx";

export default function PortfolioLayout(){
    return(
        <>
            <main className="max-w-6xl mx-auto px-6">
                <Hero />
                <Experience />
            </main>
        </>
    );
}
