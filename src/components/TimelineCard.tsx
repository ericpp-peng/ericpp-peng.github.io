import Image from "next/image";

type Entry = {
  name: string;
  subtitle: string;
  date: string;
  logo: string;
  details: string[];
  status?: string;
};
export default function TimelineCard({ entry }: { entry: Entry }) {
  return (
    <article className="timeline-card">
      <div className="entry-overview">
        <div className="logo-wrap">
          <Image
            src={entry.logo}
            alt=""
            width={47}
            height={47}
            className="entry-logo"
          />
        </div>
        <div className="entry-text">
          <h3>
            {entry.name}
            {entry.status && (
              <span className="status-label">{entry.status}</span>
            )}
          </h3>
          <p>{entry.subtitle}</p>
          <p className="entry-date">{entry.date}</p>
        </div>
      </div>
      <details className="entry-details">
        <summary>
          More details<span aria-hidden="true">+</span>
        </summary>
        <ul>
          {entry.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      </details>
    </article>
  );
}
