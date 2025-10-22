import smail from '../assets/smail.png';
import wear from '../assets/what-to-wear.png';

export default function Projects() {
  const projects = [
    {
      title: "💌 SMail — Full-Stack Gmail-like Email System",
      desc: "Developed a full-stack email system with a modern Gmail-like interface. Features include authentication, real-time search, labeling, spam filtering (URL blacklist), and automatic draft saving. Deployed in a Dockerized environment with RESTful API and MongoDB backend, ensuring scalability and clean architecture.",
      stack: ["React", "Node.js", "MongoDB", "Android (MVVM)", "Docker"],
      links: [
        { label: "GitHub Repo", url: "https://github.com/TalyaCohen1/Gmail_Project" },
      ],
      image: smail,
    },
    {
      title: "👗 What To Wear — Smart Weather Stylist 🤖",
      desc: "An AI-powered weather stylist that recommends outfits based on live meteorological data and personal comfort preferences. Combines temperature, humidity, wind, and precipitation with a bias-learning parameter α that adapts to your feedback.",
      stack: ["Next.js", "TypeScript", "Chakra UI", "Framer Motion", "Open-Meteo API"],
      links: [
        { label: "GitHub Repo", url: "https://github.com/TalyaCohen1/what-to-wear" },
      ],
      image: wear,
    },
    {
      title: "🕹️ Java OOP Mini Games — Learn by Playing!",
      desc: "A set of educational mini-games (Arkanoid & Catch the Stars) built in Java to demonstrate Object-Oriented Programming principles. Each game emphasizes encapsulation, inheritance, and event-driven design.",
      stack: ["Java", "Swing", "OOP", "Game Dev"],
      links: [
        { label: "Catch the Stars", url: "https://github.com/TalyaCohen1/Catch-the-Stars-game" },
        { label: "Arkanoid", url: "https://github.com/TalyaCohen1/Arkanoid" },
      ],
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects 💡</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            {p.image && <img src={p.image} alt={p.title} className="project-img" />}
            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <ul className="stack-list">
                {p.stack.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
              <div className="links">
                {p.links.map((l, idx) => (
                  <a
                    key={idx}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn secondary"
                  >
                    {l.label} →
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
