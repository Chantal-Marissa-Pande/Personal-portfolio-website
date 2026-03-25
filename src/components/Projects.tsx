const projects = [
  {
    title: "Skill Exchange Platform",
    description:
      "A full-stack platform enabling users to exchange skills and collaborate. Features authentication, real-time messaging using WebSockets, and a scalable PostgreSQL database design.",
    language: "Full-Stack",
    topics: ["react", "nodejs", "postgresql", "websockets", "api"],
    url: "https://github.com/Chantal-Marissa-Pande/Ex-change",
  },
  {
    title: "WhatsApp Clone (Real-Time Chat)",
    description:
      "A real-time messaging application with instant communication powered by WebSockets. Includes user sessions, message persistence, and scalable backend architecture.",
    language: "JavaScript",
    topics: ["react", "nodejs", "socket.io", "real-time"],
    url: "https://github.com/MeshackMumo03/WhatsApp_Clone",
  },
  {
    title: "SDG 5 Data Analysis",
    description:
      "Data analysis project focused on violence against women using real-world datasets. Performed data cleaning, analysis, and visualization to uncover trends and insights.",
    language: "Python",
    topics: ["pandas", "numpy", "data-analysis", "visualization"],
    url: "https://colab.research.google.com/drive/1pICPIw1CLgQltJA6sYldLFd19y9hNv-G",
  },
  {
    title: "E-Shamba Platform",
    description:
      "An agri-tech platform connecting farmers to vendors and markets. Includes API integration, database management, and backend logic for supply chain efficiency.",
    language: "Python/JavaScript",
    topics: ["api", "database", "agritech", "fullstack"],
    url: "https://github.com/Chantal-Marissa-Pande/eshamba",
  },
  {
    title: "Smart Tickets",
    description:
      "An event ticketing system with QR code generation, seat selection, and real-time availability tracking for efficient event management.",
    language: "JavaScript",
    topics: ["ticketing", "qr-code", "events"],
    url: "https://github.com/vostedagreat/SmartTickets",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center text-foreground mb-6">
            Projects & Experience
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating my skills in software development, data analysis, and problem-solving.
          </p>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <h3 className="text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.topics.map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}