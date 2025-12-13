type Props = {
  company: string;
  role: string;
  date: string;
  bullets: string[];
};

export default function ExperienceCard({company, role, date, bullets}: Props){
    return (
        <div className="border rounded-xl p-6 shadow-sm">
            <div className="flex justify-between flex-wrap">
                <h3 className="font-semibold">{role}</h3>
                <span className="text-sm text-gray-500">{date}</span>
            </div>
            <p className="text-gray-600">{company}</p>
            <ul className="list-disc ml-5 mt-4 space-y-2">
                {bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                ))}
            </ul>
        </div>

    );
}