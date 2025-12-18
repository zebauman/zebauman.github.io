export default function Hero() {
    return (
        <section id="hero" className="py-5 bg-light min-vh-5 d-flex align-items-center">
            <div className="container text-center">
                <h1 className="display-4 fw-bold mb-3">Zachary Bauman</h1>
                <p className="lead text-secondary mb-4">
                    Computer Engineering · Embedded Systems · Firmware
                </p>
                <p className="mb-4">
                    Graduating May 2026. Focused on real-time embedded systems, firmware
                    development in C/C++, and hardware–software integration across
                    microcontroller platforms.
                </p>
                <div className="d-flex justify-content-center gap-3">
                    <a
                        href="#projects"
                        className="btn btn-dark btn-lg"
                    >
                        View Projects
                    </a>
                    <a
                        href="/resume.pdf"
                        className="btn btn-outline-secondary btn-lg"
                    >
                        Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
