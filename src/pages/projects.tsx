import { useState } from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import { projects, resumeProjects } from "../data/profile";
import RichText from "../components/RichText";

const categories = ["All", "Classroom", "Hackathon"] as const;

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [hasStarted, setHasStarted] = useState(false);
  return (
    <article className="project-card">
      <div className="project-media">
        {hasStarted ? (
          <video
            controls
            autoPlay
            playsInline
            poster={project.poster}
            aria-label={`${project.title} demonstration`}
            tabIndex={0}
            ref={(element) => element?.focus({ preventScroll: true })}
          >
            <source src={project.src} type="video/mp4" />
            <a href={project.src}>Download project video</a>
          </video>
        ) : (
          <button
            type="button"
            className="project-preview"
            aria-label={`Play ${project.title} video`}
            onClick={() => setHasStarted(true)}
          >
            <Image
              className="project-poster"
              src={project.poster}
              alt=""
              width={960}
              height={600}
            />
            <span className="project-play" aria-hidden="true">
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7Z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <div className="project-info">
        <div className="project-heading">
          <span className="eyebrow">
            {project.category === "Classroom" ? "Academic" : project.category}
          </span>
          <span className="project-year">{project.year}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p className="project-note">{project.note}</p>
      </div>
    </article>
  );
}

export default function Projects() {
  const [category, setCategory] = useState<string>("All");
  const visible = projects.filter(
    (project) => category === "All" || project.category === category,
  );
  const selected = resumeProjects.filter(
    (project) => category === "All" || project.category === category,
  );
  return (
    <Layout title="Projects">
      <section className="page-intro">
        <h2>Projects</h2>
        <p>
          Firmware, parallel computing, and embedded sensing — followed by a few
          earlier project demos.
        </p>
      </section>
      <div className="filters" aria-label="Filter projects">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
          >
            {item === "Classroom" ? "Academic" : item}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {selected.length + visible.length} projects shown
      </p>
      {selected.length > 0 && (
        <section
          className="resume-project-section"
          aria-labelledby="selected-projects-title"
        >
          <h3 className="project-section-title" id="selected-projects-title">
            Selected Projects
          </h3>
          <div className="resume-project-list">
            {selected.map((project) => (
              <article className="resume-project-card" key={project.title}>
                <h4>{project.title}</h4>
                <p className="resume-project-date">{project.date}</p>
                <ul className="resume-project-details">
                  {project.details.map((detail) => (
                    <li key={detail}>
                      <RichText text={detail} />
                    </li>
                  ))}
                </ul>
                <ul className="project-tags" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      )}
      <section aria-labelledby="project-demos-title">
        <h3 className="project-section-title" id="project-demos-title">
          Earlier Projects &amp; Demos
        </h3>
        <div className="project-list">
          {visible.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
