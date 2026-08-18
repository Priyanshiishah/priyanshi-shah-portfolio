import { useEffect, useState } from "react";
import { portfolio } from "./data/portfolio";

const navigation = [
  ["Experience", "experience"],
  ["Education", "education"],
  ["Skills", "skills"],
  ["Projects", "projects"],
];

const sectionIds = ["about", ...navigation.map(([, id]) => id)];

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4"
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M3 10h14m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <svg
      className="h-5 w-5"
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d={open ? "M4 4l12 12M16 4 4 16" : "M3 6h14M3 14h14"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function CardHeading({ title, subtitle, action }) {
  return (
    <header className="flex flex-col gap-5 border-b border-black/15 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-9 sm:py-9">
      <div>
        <h2 className="font-serif text-3xl font-normal tracking-[-0.025em] text-ink">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-[13px] uppercase tracking-[0.14em] text-black/45">
            {subtitle}
          </p>
        )}
      </div>
      {action}
    </header>
  );
}

function AboutPanel() {
  return (
    <section
      className="scroll-mt-24 border-l-[6px] border-coral bg-white shadow-[12px_12px_0_rgba(0,0,0,0.16)]"
      id="about"
    >
      <CardHeading
        title="About me"
        subtitle="Software engineering · Data platforms · Applied AI"
      />
      <div className="space-y-5 px-6 py-8 text-lg leading-8 text-black/65 sm:px-9 sm:py-9">
        {portfolio.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function ExperiencePanel() {
  return (
    <section
      className="scroll-mt-24 border-l-[6px] border-coral bg-white shadow-[12px_12px_0_rgba(0,0,0,0.16)]"
      id="experience"
    >
      <CardHeading
        title="Experience"
        subtitle="Professional roles from 2020 to present"
      />

      <div className="px-6 sm:px-9">
        {portfolio.experience.map((item) => (
          <article
            className="grid grid-cols-[56px_1fr] gap-x-4 gap-y-2 border-b border-black/10 py-7 last:border-b-0 sm:grid-cols-[64px_130px_1fr] sm:gap-x-5"
            key={`${item.company}-${item.period}`}
          >
            <div className="row-span-2 grid h-14 w-14 place-items-center border border-black/10 bg-[#fffdf8] p-2 sm:h-16 sm:w-16">
              <img
                className="h-full w-full object-contain"
                src={item.logo}
                alt={`${item.company} logo`}
                loading="lazy"
              />
            </div>
            <p className="col-start-2 text-[11px] font-medium uppercase leading-5 tracking-[0.1em] text-black/40 sm:col-start-auto">
              {item.period}
            </p>
            <div className="col-start-2 sm:col-start-auto">
              <h3 className="text-lg font-bold">{item.role}</h3>
              <p className="mt-1 text-[15px] font-semibold text-coral">
                {item.company}
              </p>
              <p className="mt-3 text-base leading-7 text-black/55">
                {item.summary}
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.08em] text-black/35">
                {item.tags.join(" · ")}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function EducationPanel() {
  return (
    <section
      className="scroll-mt-24 border-l-[6px] border-coral bg-white shadow-[12px_12px_0_rgba(0,0,0,0.16)]"
      id="education"
    >
      <CardHeading
        title="Education"
        subtitle="Academic background"
      />
      <div className="divide-y divide-black/10 px-6 sm:px-9">
        {portfolio.education.map((item) => (
          <article
            className="grid grid-cols-[56px_1fr] gap-x-4 gap-y-2 py-9 sm:grid-cols-[64px_130px_1fr] sm:gap-x-5"
            key={item.degree}
          >
            <div className="row-span-2 grid h-14 w-14 place-items-center border border-black/10 bg-[#fffdf8] p-2 sm:h-16 sm:w-16">
              <img
                className={`h-full w-full object-contain ${item.logoClassName ?? ""}`}
                src={item.logo}
                alt={`${item.school} logo`}
                loading="lazy"
              />
            </div>
            <p className="col-start-2 text-[11px] font-medium uppercase tracking-[0.1em] text-black/40 sm:col-start-auto">
              {item.period}
            </p>
            <div className="col-start-2 sm:col-start-auto">
              <h3 className="text-xl font-bold leading-7">{item.degree}</h3>
              <p className="mt-2 text-base leading-7 text-black/50">
                {item.school}
                <br />
                {item.location}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SkillsPanel() {
  return (
    <section
      className="scroll-mt-24 border-l-[6px] border-coral bg-white shadow-[12px_12px_0_rgba(0,0,0,0.16)]"
      id="skills"
    >
      <CardHeading
        title="Skills"
        subtitle="Languages, platforms, and tools"
      />
      <div className="grid gap-px bg-black/10 sm:grid-cols-2">
        {portfolio.skills.map((group) => (
          <article className="bg-white px-6 py-8 sm:px-9" key={group.category}>
            <h3 className="text-[13px] font-bold uppercase tracking-[0.14em] text-coral">
              {group.category}
            </h3>
            <ul className="mt-5 space-y-2">
              {group.items.map((item) => (
                <li className="text-base text-black/55" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectsPanel() {
  return (
    <section
      className="scroll-mt-24 border-l-[6px] border-coral bg-white shadow-[12px_12px_0_rgba(0,0,0,0.16)]"
      id="projects"
    >
      <CardHeading
        title="Projects"
        subtitle="Selected engineering work"
      />
      <div className="divide-y divide-black/10 px-6 sm:px-9">
        {portfolio.projects.map((project) => (
          <article
            className="grid gap-5 py-9 sm:grid-cols-[44px_1fr]"
            key={project.title}
          >
            <span className="font-serif text-xl italic text-black/30">
              {project.index}
            </span>
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                {project.href && (
                  <a
                    className="inline-flex items-center gap-2 border-b border-coral pb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-coral transition-colors hover:border-ink hover:text-ink"
                    href={project.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Live project <ArrowIcon />
                  </a>
                )}
              </div>
              <p className="mt-4 text-base leading-7 text-black/55">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {project.impact.map((impact) => (
                  <span className="text-[15px] font-bold text-coral" key={impact}>
                    {impact}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-[11px] uppercase tracking-[0.08em] text-black/35">
                {project.stack.join(" · ")}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState(() => {
    const initialSection = window.location.hash.slice(1);
    if (initialSection === "resume") return "experience";
    return sectionIds.includes(initialSection) ? initialSection : "about";
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateFromHash = () => {
      const section = window.location.hash.slice(1);
      const normalizedSection =
        section === "resume" ? "experience" : section;
      if (sectionIds.includes(normalizedSection)) {
        setActiveSection(normalizedSection);
      }
    };

    window.addEventListener("hashchange", updateFromHash);
    return () => window.removeEventListener("hashchange", updateFromHash);
  }, []);

  const selectSection = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  const panel =
    activeSection === "experience" ? (
      <ExperiencePanel />
    ) : activeSection === "education" ? (
      <EducationPanel />
    ) : activeSection === "skills" ? (
      <SkillsPanel />
    ) : activeSection === "projects" ? (
      <ProjectsPanel />
    ) : (
      <AboutPanel />
    );

  return (
    <>
      <a
        className="fixed left-4 top-4 z-[100] -translate-y-24 bg-ink px-4 py-2 text-sm text-white focus:translate-y-0"
        href="#main"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-black/15 bg-white">
        <div className="mx-auto flex h-[70px] max-w-[1180px] items-center">
          <a
            className="flex h-full items-center bg-ink px-5 text-sm font-bold uppercase tracking-[0.18em] text-white sm:px-7"
            href="#about"
            aria-label={`${portfolio.name}, about`}
            onClick={() => selectSection("about")}
          >
            Priyanshi Shah
          </a>

          <nav
            className="hidden h-full items-center px-6 md:flex"
            aria-label="Primary navigation"
          >
            {navigation.map(([label, id], index) => (
              <a
                className={`px-4 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors ${
                  index > 0 ? "border-l border-black/10" : ""
                } ${
                  activeSection === id
                    ? "text-coral"
                    : "text-black/50 hover:text-ink"
                }`}
                href={`#${id}`}
                key={id}
                aria-current={activeSection === id ? "page" : undefined}
                onClick={() => selectSection(id)}
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            className="mr-4 ml-auto grid h-10 w-10 place-items-center border border-black/15 md:hidden"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={`${menuOpen ? "Close" : "Open"} navigation`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-menu"
            className="border-t border-black/10 bg-white px-5 py-3 md:hidden"
            aria-label="Mobile navigation"
          >
            {navigation.map(([label, id]) => (
              <a
                className={`flex items-center justify-between border-b border-black/10 py-4 text-sm font-bold uppercase tracking-[0.14em] last:border-b-0 ${
                  activeSection === id ? "text-coral" : ""
                }`}
                href={`#${id}`}
                key={id}
                aria-current={activeSection === id ? "page" : undefined}
                onClick={() => selectSection(id)}
              >
                <span>{label}</span>
                <ArrowIcon />
              </a>
            ))}
          </nav>
        )}
      </header>

      <main
        className={`mx-auto grid max-w-[1180px] gap-10 px-5 py-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12 ${
          activeSection === "about"
            ? "lg:min-h-[calc(100svh-70px)] lg:content-center"
            : ""
        }`}
        id="main"
      >
        <aside className="self-start text-white lg:sticky lg:top-28">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="relative">
              <span
                className="absolute -right-3 -bottom-3 h-full w-full bg-coral"
                aria-hidden="true"
              />
              <img
                className="relative h-52 w-52 border-4 border-white object-cover shadow-xl"
                src={portfolio.profileImage}
                alt="Priyanshi Shah"
                width="200"
                height="200"
              />
            </div>
            <h1 className="mt-7 text-2xl font-bold uppercase tracking-[0.12em]">
              {portfolio.name}
            </h1>
            <a
              className="mt-3 border-b border-white/25 text-[13px] uppercase tracking-[0.08em] text-white/70 transition-colors hover:border-coral hover:text-coral"
              href={`mailto:${portfolio.email}`}
            >
              {portfolio.email}
            </a>
            <p className="mt-3 text-xs uppercase tracking-[0.1em] text-white/45">
              {portfolio.location}
            </p>
          </div>

          <div className="mt-8 border-t border-white/15 pt-7">
            <a
              className="inline-flex items-center gap-5 border border-white/25 bg-transparent px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:border-coral hover:bg-coral hover:text-ink"
              href={portfolio.resumePath}
              download
            >
              Download résumé <ArrowIcon />
            </a>
          </div>

          <div className="mt-9 flex gap-5 border-t border-white/15 pt-7">
            {portfolio.socialLinks.map((link) => (
              <a
                className="text-xs font-bold uppercase tracking-[0.1em] text-white/55 hover:text-coral"
                href={link.href}
                key={link.label}
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="mt-8 text-[9px] uppercase tracking-[0.16em] text-white/30">
            © 2026 Priyanshi Shah
          </p>
        </aside>

        <div aria-live="polite">{panel}</div>
      </main>
    </>
  );
}

export default App;
