import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { profile } from "../data/profile";
import { assetPath } from "../lib/assetPath";
import { Icon, type IconName } from "./Icon";
import Portrait from "./Portrait";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects/", label: "Projects" },
  { href: "/snapshots/", label: "Snapshots" },
];
const social: { label: string; href: string; icon: IconName }[] = [
  { label: "GitHub", href: profile.github, icon: "github" },
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
  { label: "Resume", href: profile.resume, icon: "resume" },
];

export default function Layout({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) {
  const { pathname } = useRouter();
  return (
    <>
      <Head>
        <title>
          {title
            ? `${title} | ${profile.name}`
            : `${profile.name} | Embedded Software Engineer`}
        </title>
        <meta name="description" content={profile.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          property="og:title"
          content={title ? `${title} | ${profile.name}` : profile.name}
        />
        <meta property="og:description" content={profile.description} />
        <meta property="og:type" content="website" />
        <link rel="icon" href={assetPath("/favicon.ico")} sizes="any" />
      </Head>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-inner">
          <Link className="wordmark" href="/">
            {profile.shortName}
            <span className="wordmark-dot">.</span>
          </Link>
          <nav aria-label="Main navigation">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  pathname === item.href.replace(/\/$/, "") ||
                  (item.href === "/" && pathname === "/")
                    ? "nav-link active"
                    : "nav-link"
                }
                aria-current={
                  pathname === item.href.replace(/\/$/, "") ||
                  (item.href === "/" && pathname === "/")
                    ? "page"
                    : undefined
                }
              >
                {item.label}
              </Link>
            ))}
            <Link className="nav-link" href="/#contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <div className="page-shell">
        <aside className="profile" aria-label="About Po Peng">
          <Portrait />
          <h1 className="profile-name">{profile.name}</h1>
          <p className="profile-role">{profile.role}</p>
          <p className="profile-affiliation">
            M.S. ECE
            <br />
            University of Washington
          </p>
          <div className="socials">
            {social.map((item) => (
              <a
                key={item.label}
                className="social-link"
                href={item.href}
                aria-label={item.label}
                title={item.label}
                {...(item.href.startsWith("https:")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <Icon name={item.icon} />
              </a>
            ))}
          </div>
          <p className="profile-location">
            <Icon name="pin" width={14} height={14} />
            {profile.location}
          </p>
          <a
            className="resume-link"
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            View résumé <Icon name="arrow" width={15} height={15} />
          </a>
        </aside>
        <main id="main" className="main-content" tabIndex={-1}>
          {children}
        </main>
      </div>
      <footer className="site-footer">
        <div>
          © {new Date().getFullYear()} {profile.shortName}
          <span className="footer-note">Built with Next.js</span>
        </div>
        <a href={`mailto:${profile.email}`}>
          Say hello <span aria-hidden="true">↗</span>
        </a>
      </footer>
    </>
  );
}
