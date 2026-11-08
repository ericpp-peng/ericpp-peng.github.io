import { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import { snapshots } from "../data/profile";

export default function Snapshots() {
  const [selected, setSelected] = useState<(typeof snapshots)[number] | null>(
    null,
  );
  const dialogRef = useRef<HTMLDialogElement>(null);
  const playerRef = useRef<HTMLVideoElement>(null);

  function closeVideo() {
    playerRef.current?.pause();
    setSelected(null);
  }

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!selected) {
      dialog?.close();
      return;
    }
    dialog?.showModal();
    const player = playerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      player?.pause();
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  return (
    <Layout title="Snapshots">
      <section className="page-intro">
        <h2>Snapshots</h2>
        <p>A little life outside of code. Places, music, and good company.</p>
      </section>
      <div className="snapshot-grid">
        {snapshots.map((item) => (
          <figure className="snapshot" key={item.title}>
            <button
              className="snapshot-preview"
              type="button"
              aria-label={`Play ${item.title} video`}
              onClick={() => setSelected(item)}
            >
              <video
                className="snapshot-poster"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={item.poster}
                aria-hidden="true"
                tabIndex={-1}
              >
                <source src={item.src} type="video/mp4" />
              </video>
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
            <figcaption>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        className="snapshot-dialog"
        aria-labelledby="snapshot-video-title"
        onCancel={closeVideo}
        onClose={closeVideo}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeVideo();
        }}
      >
        {selected && (
          <div className="snapshot-viewer">
            <button
              className="snapshot-close"
              type="button"
              aria-label="Close video"
              onClick={closeVideo}
            >
              <span aria-hidden="true">×</span>
            </button>
            <video
              key={selected.src}
              ref={playerRef}
              controls
              autoPlay
              muted
              playsInline
              poster={selected.poster}
              aria-label={selected.description}
            >
              <source src={selected.src} type="video/mp4" />
              <a href={selected.src}>Download video</a>
            </video>
            <div className="snapshot-caption">
              <h3 id="snapshot-video-title">{selected.title}</h3>
              <p>{selected.description}</p>
            </div>
          </div>
        )}
      </dialog>
    </Layout>
  );
}
