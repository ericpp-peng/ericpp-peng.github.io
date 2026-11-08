import Image from "next/image";
import type { ResumeEntry } from "../data/profile";
import RichText from "./RichText";

export default function TimelineCard({ entry }: { entry: ResumeEntry }) {
  return (
    <article className="timeline-card">
      <div className="logo-wrap">
        <Image
          src={entry.logo}
          alt=""
          width={64}
          height={64}
          className="entry-logo"
        />
      </div>
      <div className="entry-body">
        <header className="entry-overview entry-text">
          <h3>{entry.heading || entry.name}</h3>
          <p className="entry-subtitle">{entry.subtitle}</p>
          <p className="entry-date">
            {entry.date}
            {entry.location && <> | {entry.location}</>}
          </p>
        </header>
        {entry.tags && (
          <ul className="course-tags" aria-label="Coursework">
            {entry.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
        {entry.skills && (
          <dl className="entry-skills">
            {entry.skills.map((skill) => (
              <div key={skill.label}>
                <dt>{skill.label}:</dt>
                <dd>{skill.items}</dd>
              </div>
            ))}
          </dl>
        )}
        {entry.details && (
          <ul className="entry-details">
            {entry.details.map((detail) => (
              <li key={detail}>
                <RichText text={detail} />
              </li>
            ))}
          </ul>
        )}
        {entry.sections?.map((section) => (
          <section className="entry-section" key={section.title}>
            <div className="entry-section-heading">
              <h4>{section.title}</h4>
              {section.image && (
                <Image
                  className="entry-product"
                  src={section.image}
                  alt=""
                  width={38}
                  height={38}
                />
              )}
            </div>
            <ul className="entry-details">
              {section.items.map((item) => (
                <li key={item}>
                  <RichText text={item} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}
