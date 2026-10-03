import { useEffect, useRef, useState } from "react";
import { portfolio } from "./data/portfolio";

const navigation = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Education", "education"],
];

const accentColors = [
  ["brown", "Brown"],
  ["purple", "Purple"],
  ["rose", "Rose"],
  ["teal", "Teal"],
  ["blue", "Blue"],
];
const accentStorageKey = "portfolio-accent";
const modeStorageKey = "portfolio-mode";

function readModePreference() {
  const fallback = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  try {
    const saved = localStorage.getItem(modeStorageKey);
    return { mode: saved === "dark" || saved === "light" ? saved : fallback, error: "" };
  } catch (error) {
    console.warn("Unable to read portfolio mode preference:", error);
    return { mode: fallback, error: "Display mode preferences cannot be saved in this browser." };
  }
}

function readAccentPreference() {
  try {
    const saved = localStorage.getItem(accentStorageKey);
    return {
      color: accentColors.some(([color]) => color === saved) ? saved : "brown",
      error: "",
    };
  } catch (error) {
    console.warn("Unable to read portfolio color preference:", error);
    return { color: "brown", error: "Color preferences cannot be saved in this browser." };
  }
}

function Icon({ name }) {
  const paths = {
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>,
    moon: <><path d="M20 14A9 9 0 0 1 10 4a9 9 0 1 0 10 10Z" /></>,
    home: <><path d="m3 10 9-7 9 7M5 9v12h14V9M9 21v-8h6v8" /></>,
    about: <><circle cx="12" cy="8" r="3" /><path d="M5 21v-2a7 7 0 0 1 14 0v2" /></>,
    projects: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m9 9-3 3 3 3m6-6 3 3-3 3" /></>,
    experience: <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V3h8v4M3 12a22 22 0 0 0 18 0M12 12v3" /></>,
    skills: <><path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18" /></>,
    education: <><path d="m2 8 10-5 10 5-10 5-10-5m4 2v7c4 3 8 3 12 0v-7m4-2v8" /></>,
    download: <><path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" /></>,
    email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
    GitHub: <><path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1 .3-2 1-2 3-.4 5-2 5-5 0-2-.5-3-2-4 .5-1 .5-3 0-4-2 0-3 1-4 2a13 13 0 0 0-6 0C8 4 7 3 5 3c-.5 1-.5 3 0 4-1.5 1-2 2-2 4 0 3 2 4.6 5 5 .7 0 1 1 1 2v4" /></>,
    LinkedIn: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7m4 0v-7m0 3a3 3 0 0 1 6 0v4" /><circle cx="7" cy="7" r=".5" /></>,
    palette: <><circle cx="12" cy="12" r="9" /><circle cx="9" cy="8" r="1" /><circle cx="15" cy="8" r="1" /><circle cx="7" cy="13" r="1" /><path d="M20 16h-5a2 2 0 0 0-2 2v3" /></>,
  };

  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function ColorPicker({ color, onChange }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const firstOptionRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    firstOptionRef.current?.focus();
    const dismiss = (event) => {
      if (!containerRef.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", dismiss);
    document.addEventListener("focusin", dismiss);
    return () => {
      document.removeEventListener("pointerdown", dismiss);
      document.removeEventListener("focusin", dismiss);
    };
  }, [open]);

  const closeAndFocus = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div
      className="color-picker"
      ref={containerRef}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.preventDefault();
          closeAndFocus();
        }
      }}
    >
      <button
        className="color-trigger"
        type="button"
        aria-label={`Choose accent color, currently ${color}`}
        aria-expanded={open}
        aria-controls="accent-options"
        ref={triggerRef}
        onClick={() => setOpen(!open)}
      >
        <Icon name="palette" />
      </button>
      {open && (
        <div className="color-options" id="accent-options" role="group" aria-label="Accent colors">
          {accentColors.map(([value, label], index) => (
            <button
              className="color-option"
              data-swatch={value}
              type="button"
              key={value}
              aria-label={label}
              aria-pressed={color === value}
              ref={index === 0 ? firstOptionRef : undefined}
              onClick={() => {
                onChange(value);
                closeAndFocus();
              }}
            >
              <span className="color-dot" aria-hidden="true" />
              <span>{label}</span>
              <span className="color-check" aria-hidden="true">{color === value ? "✓" : ""}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  const [preference, setPreference] = useState(readAccentPreference);
  const [modePreference, setModePreference] = useState(readModePreference);

  useEffect(() => {
    document.documentElement.dataset.mode = modePreference.mode;
    const themeColor = document.querySelector('meta[name="theme-color"]');
    themeColor?.setAttribute("content", modePreference.mode === "dark" ? "#222126" : "#faf7ef");
  }, [modePreference.mode]);

  const toggleMode = () => {
    const mode = modePreference.mode === "dark" ? "light" : "dark";
    let error = "";
    try {
      localStorage.setItem(modeStorageKey, mode);
    } catch (cause) {
      console.warn("Unable to save portfolio mode preference:", cause);
      error = "Display mode changed for this visit, but your browser could not save it.";
    }
    setModePreference({ mode, error });
  };

  const changeAccent = (color) => {
    let error = "";
    try {
      localStorage.setItem(accentStorageKey, color);
    } catch (cause) {
      console.warn("Unable to save portfolio color preference:", cause);
      error = "Color changed for this visit, but your browser could not save it.";
    }
    setPreference({ color, error });
  };

  useEffect(() => {
    const scrollToSection = () => {
      const hash = window.location.hash.slice(1);
      const section = hash === "resume" ? "experience" : hash;
      if (section === "about") {
        window.scrollTo({ top: 0 });
      } else if (navigation.some(([, id]) => id === section)) {
        document.getElementById(section)?.scrollIntoView();
      }
      if (navigation.some(([, id]) => id === section)) {
        window.history.replaceState(
          window.history.state,
          "",
          window.location.pathname + window.location.search,
        );
      }
    };

    scrollToSection();
    window.addEventListener("hashchange", scrollToSection);
    return () => window.removeEventListener("hashchange", scrollToSection);
  }, []);

  const navigateToSection = (event, id) => {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    target.focus({ preventScroll: true });
    if (id === "about") {
      window.scrollTo({ top: 0 });
    } else {
      target.scrollIntoView();
    }
    if (window.location.hash) {
      window.history.replaceState(
        window.history.state,
        "",
        window.location.pathname + window.location.search,
      );
    }
  };

  return (
    <div className="portfolio-site" data-accent={preference.color}>
      <a className="skip-link" href="#main" onClick={(event) => navigateToSection(event, "main")}>
        Skip to content
      </a>

      <header className="site-header" id="about" tabIndex={-1}>
        <div className="header-inner">
          <a className="site-name" href="#about" onClick={(event) => navigateToSection(event, "about")}>
            <Icon name="projects" />
            {portfolio.name}
          </a>
          <nav aria-label="Primary navigation">
            {navigation.map(([label, id]) => (
              <a href={`#${id}`} key={id} onClick={(event) => navigateToSection(event, id)}>
                <Icon name={id} />
                {label}
              </a>
            ))}
          </nav>
          <div className="appearance-controls">
            <button
              className="mode-toggle"
              type="button"
              onClick={toggleMode}
              aria-label={`Switch to ${modePreference.mode === "dark" ? "day" : "dark"} mode`}
              title={`Switch to ${modePreference.mode === "dark" ? "day" : "dark"} mode`}
            >
              <Icon name={modePreference.mode === "dark" ? "sun" : "moon"} />
            </button>
            <ColorPicker color={preference.color} onChange={changeAccent} />
          </div>
        </div>
        {preference.error && <p className="preference-error" role="status">{preference.error}</p>}
        {modePreference.error && <p className="preference-error" role="status">{modePreference.error}</p>}
      </header>

      <main className="page-content" id="main" tabIndex={-1}>
        <section className="introduction" aria-labelledby="about-title">
          <div className="intro-heading">
            <div>
              <h1 id="about-title">Hi, I’m Priyanshi!</h1>
            </div>
            <img
              className="portrait"
              src={portfolio.profileImage}
              alt="Priyanshi Shah"
              width="176"
              height="176"
            />
          </div>
          <p>
            I’m a software engineer who likes turning complex problems into systems
            that are simple, reliable, and useful. My experience spans backend
            engineering, distributed systems, cloud infrastructure, and AI. What
            keeps me interested in this field is that there’s always something new
            to figure out. I enjoy understanding how things work under the hood,
            experimenting with new ideas, then putting that learning into practice.
          </p>
          <p>
            Away from my laptop, I like staying active. Working out is a regular
            part of my routine, while hiking is my favorite excuse to get outdoors.
            I also love cooking and trying dishes from different cuisines. Some turn
            out great, some become learning experiences 😄. I’m naturally curious,
            so I’m almost always picking up a new skill, exploring a new place, or
            finding something interesting to learn.
          </p>
          <div className="contact-links">
            <a href={portfolio.resumePath} download>
              <Icon name="download" />
              Download résumé
            </a>
            {portfolio.socialLinks.map((link) => (
              <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
                <Icon name={link.label} />
                {link.label}
              </a>
            ))}
            <div className="email-location">
              <a href={`mailto:${portfolio.email}`}><Icon name="email" />Email me</a>
              <span className="location"><Icon name="home" />{portfolio.location}</span>
            </div>
          </div>
        </section>

        <section id="experience" tabIndex={-1} aria-labelledby="experience-title">
          <div className="section-heading">
            <h2 id="experience-title">Work so far</h2>
            <p>A timeline of my engineering experience.</p>
          </div>
          <div className="timeline">
            {portfolio.experience.map((item) => (
              <article className="timeline-entry" key={`${item.company}-${item.period}`}>
                <p className="timeline-date">{item.period}</p>
                <div>
                  <div className="organization-heading">
                    <img className="organization-logo" src={item.logo} alt={`${item.company} logo`} width="48" height="48" loading="lazy" />
                    <div>
                      <h3>{item.company}</h3>
                      <p className="role">{item.role}</p>
                    </div>
                  </div>
                  <p>{item.summary}</p>
                  <p className="technology-list">{item.tags.join(" · ")}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" tabIndex={-1} aria-labelledby="projects-title">
          <div className="section-heading">
            <h2 id="projects-title">Selected projects</h2>
            <p>Systems and applications I've built.</p>
          </div>
          <div className="project-list">
            {portfolio.projects.map((project) => (
              <article className="project" key={project.title}>
                <h3>
                  {project.href ? (
                    <a href={project.href} target="_blank" rel="noreferrer">
                      {project.title} <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p>{project.description}</p>
                <ul className="project-results" aria-label="Project outcomes">
                  {project.impact.map((impact) => (
                    <li key={impact}>{impact}</li>
                  ))}
                </ul>
                <p className="technology-list">{project.stack.join(" · ")}</p>
                {project.image && (
                  <details className="architecture">
                    <summary>View architecture</summary>
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      decoding="async"
                    />
                  </details>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="skills" tabIndex={-1} aria-labelledby="skills-title">
          <div className="section-heading">
            <h2 id="skills-title">Tools I work with</h2>
          </div>
          <dl className="skills-list">
            {portfolio.skills.map((group) => (
              <div key={group.category}>
                <dt>{group.category}</dt>
                <dd>{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="education" tabIndex={-1} aria-labelledby="education-title">
          <div className="section-heading">
            <h2 id="education-title">Education</h2>
          </div>
          <div className="timeline">
            {portfolio.education.map((item) => (
              <article className="timeline-entry" key={item.degree}>
                <p className="timeline-date">{item.period}</p>
                <div>
                  <div className="organization-heading">
                    <img className="organization-logo" src={item.logo} alt={`${item.school} logo`} width="48" height="48" loading="lazy" />
                    <div>
                      <h3>{item.degree}</h3>
                      <p>{item.school}</p>
                    </div>
                  </div>
                  <p className="technology-list">{item.location}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} {portfolio.name}</p>
        <a href="#about" onClick={(event) => navigateToSection(event, "about")}>Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
