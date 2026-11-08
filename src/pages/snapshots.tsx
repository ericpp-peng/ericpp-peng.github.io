import Layout from "../components/Layout";
import { snapshots } from "../data/profile";

export default function Snapshots() {
  return (
    <Layout title="Snapshots">
      <section className="page-intro">
        <h2>Snapshots</h2>
        <p>A little life outside of code. Places, music, and good company.</p>
      </section>
      <div className="snapshot-grid">
        {snapshots.map((item) => (
          <figure className="snapshot" key={item.title}>
            <video
              controls
              playsInline
              preload="none"
              poster={item.poster}
              aria-label={item.description}
            >
              <source src={item.src} type="video/mp4" />
              <a href={item.src}>Download video</a>
            </video>
            <figcaption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Layout>
  );
}
