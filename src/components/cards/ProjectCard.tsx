type Props = {
    picture: string;
    title: string;
    description: string;
    tags: string[];
};

export default function ProjectCard({ picture, title, description, tags }: Props) {
    return (
        <div className="card h-100 shadow-sm border-light">
            <img src={picture} className="card-img-top" alt={title} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title}</h5>
                <p className="card-text flex-grow-1">{description}</p>
                <div className="mt-3">
                    {tags.map((tag, idx) => (
                        <span key={idx} className="badge bg-secondary me-2 mb-1">
              {tag}
            </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
