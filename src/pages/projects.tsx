import { useState } from "react";
import Layout from "../components/Layout";
import { projects } from "../data/profile";

const categories = ["All", "Classroom", "Hackathon"] as const;
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
            {item}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {visible.length} projects shown
      </p>
      <div className="project-list">
        {visible.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-heading">
              <span className="eyebrow">{project.category}</span>
              <span className="project-year">{project.year}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <video
              controls
              playsInline
              preload="none"
              poster={project.poster}
              aria-label={`${project.title} demonstration`}
            >
              <source src={project.src} type="video/mp4" />
              <a href={project.src}>Download project video</a>
            </video>
            <p className="project-note">{project.note}</p>
          </article>
        ))}
      </div>
    </Layout>
  );
}
