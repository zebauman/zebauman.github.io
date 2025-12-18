type Props = {
    company: string;
    role: string;
    date: string;
    bullets: string[];
};

export default function ExperienceCard({ company, role, date, bullets }: Props) {
    return (
        <div className="card shadow-sm border-light rounded-3 p-4">
            <div className="d-flex justify-content-between flex-wrap align-items-center mb-2">
                <h5 className="card-title mb-0">{role}</h5>
                <small className="text-muted">{date}</small>
            </div>
            <h6 className="text-secondary">{company}</h6>
            <ul className="mt-3 list-group list-group-flush">
                {bullets.map((b, i) => (
                    <li key={i} className="list-group-item px-0 border-0 ps-3">
                        {b}
                    </li>
                ))}
            </ul>
        </div>
    );
}
