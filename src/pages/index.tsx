import Link from "next/link";
import Layout from "../components/Layout";
import TimelineCard from "../components/TimelineCard";
import {
  education,
  experience,
  mentoring,
  profile,
  skills,
} from "../data/profile";

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
          in Seattle, expecting to graduate in March 2027.
        </p>
        <p>
          I’m particularly interested in{" "}
          <strong>kernel development and hardware/software integration.</strong>{" "}
          My full-time experience spans Linux, RTOS-based development, and MCU
          firmware. During my internship at Qualcomm, I also gained experience
          with bootloaders and early system bring-up, extending my work across
          several layers of the software stack on an SoC.
        </p>
        <p>
          That internship helped me realize how much I enjoy{" "}
          <strong>
            understanding how the hardware and software within an SoC work
            together.
          </strong>{" "}
          I’m drawn to problems that require looking across those layers,
          understanding their interactions, and bringing hardware and software
          together as a complete system.
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
        <p>
          I also share everyday moments on{" "}
          <a href={profile.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>{" "}
          and{" "}
          <a href={profile.youtube} target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
          .
        </p>
      </section>
      <section
        id="contact"
        className="prose-section contact-section"
        aria-labelledby="contact-title"
      >
        <h2 id="contact-title">Contact</h2>
        <p>
          Feel free to reach out for a coffee chat, to exchange ideas, or just
          to talk tech.
        </p>
        <p>
          Email: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span className="contact-divider">·</span>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </p>
      </section>
      <section className="prose-section" aria-labelledby="experience-title">
        <h2 id="experience-title">Work Experience</h2>
        <div className="timeline-list">
          {experience.map((entry) => (
            <TimelineCard key={entry.name} entry={entry} />
          ))}
        </div>
      </section>
      <section className="prose-section" aria-labelledby="education-title">
        <h2 id="education-title">Education</h2>
        <div className="timeline-list">
          {education.map((entry) => (
            <TimelineCard key={entry.name} entry={entry} />
          ))}
        </div>
      </section>
      <section className="prose-section" aria-labelledby="mentoring-title">
        <h2 id="mentoring-title">Leadership &amp; Mentoring</h2>
        <div className="timeline-list">
          {mentoring.map((entry) => (
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
