import { useState } from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import { projects } from "../data/profile";

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
  return (
    <Layout title="Projects">
      <section className="page-intro">
        <h2>Projects</h2>
        <p>
          A few things I’ve built, from classroom experiments to hackathon
          ideas.
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
        {visible.length} projects shown
      </p>
      <div className="project-list">
        {visible.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Layout>
  );
}
