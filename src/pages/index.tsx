import Link from "next/link";
import Layout from "../components/Layout";
import TimelineCard from "../components/TimelineCard";
import { education, experience, profile, skills } from "../data/profile";

export default function Home() {
  return (
    <Layout>
      <section className="prose-section intro" aria-labelledby="about-title">
        <h2 id="about-title">About Me</h2>
        <p>
          Hi, I’m Eric. I’m an embedded software engineer and an M.S. student in
          Electrical and Computer Engineering at the{" "}
          <a
            href="https://www.washington.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            University of Washington
          </a>{" "}
          in Seattle.
        </p>
        <p>
          I’m interested in{" "}
          <strong>
            embedded systems, firmware, and the software that connects hardware
            to the world.
          </strong>{" "}
          I enjoy working across the stack, from low-level debugging and
          communication protocols to building reliable tools for real products.
        </p>
        <p>
          Previously, I spent over three years at{" "}
          <a
            href="https://www.moxa.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Moxa
          </a>
          , developing Linux-based industrial protocol gateways and MCU-based
          media converters. My work ranged from modularizing protocol stacks to
          improving product testing and troubleshooting.
        </p>
        <p className="availability">
          <span aria-hidden="true" />
          Open to 2027 full-time opportunities.
        </p>
      </section>
      <section className="prose-section" aria-labelledby="beyond-title">
        <h2 id="beyond-title">Beyond the Screen</h2>
        <p>
          Outside of engineering, you’ll find me playing badminton, at the
          piano, diving, or out in the snow. A few moments from life along the
          way live in my <Link href="/snapshots/">snapshots</Link>.
        </p>
      </section>
      <section
        id="contact"
        className="prose-section contact-section"
        aria-labelledby="contact-title"
      >
        <h2 id="contact-title">Contact</h2>
        <p>Coffee chats, cool ideas, or just tech talk — drop me a line.</p>
        <p>
          Email: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span className="contact-divider">·</span>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </p>
      </section>
      <section className="prose-section" aria-labelledby="education-title">
        <h2 id="education-title">Education</h2>
        <div className="timeline-list">
          {education.map((entry) => (
            <TimelineCard key={entry.name} entry={entry} />
          ))}
        </div>
      </section>
      <section className="prose-section" aria-labelledby="experience-title">
        <h2 id="experience-title">Experience</h2>
        <div className="timeline-list">
          {experience.map((entry) => (
            <TimelineCard key={entry.name} entry={entry} />
          ))}
        </div>
      </section>
      <section className="prose-section" aria-labelledby="toolbox-title">
        <h2 id="toolbox-title">Technical Toolkit</h2>
        <dl className="toolkit">
          {skills.map((skill) => (
            <div key={skill.label}>
              <dt>{skill.label}</dt>
              <dd>{skill.items}</dd>
            </div>
          ))}
        </dl>
        <Link href="/projects/" className="text-link">
          Explore my projects <span aria-hidden="true">→</span>
        </Link>
      </section>
    </Layout>
  );
}
