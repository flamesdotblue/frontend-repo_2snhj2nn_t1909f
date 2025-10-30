import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Interactive 3D Landing",
    description:
      "A playful, high‑performance hero built with a real‑time 3D scene and buttery‑smooth interactions.",
    tags: ["React", "Spline", "Tailwind"],
    github: "https://github.com",
    demo: "#",
    image:
      "https://images.unsplash.com/photo-1542834369-f10ebf06d3cb?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "SaaS Dashboard",
    description:
      "Modern analytics UI with charts, dark mode, and responsive layouts built for speed.",
    tags: ["Vite", "Recharts", "Design"],
    github: "https://github.com",
    demo: "#",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Portfolio Engine",
    description:
      "A modular portfolio system that makes it easy to add case studies and showcase work.",
    tags: ["React", "Routing", "SEO"],
    github: "https://github.com",
    demo: "#",
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected work</h2>
          <p className="mt-3 text-gray-600">
            A snapshot of recent projects. Clean code, thoughtful UX, and crisp visuals.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-2.5 py-1 text-xs border border-black/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    <ExternalLink size={16} /> Live
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
