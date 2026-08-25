const projects = [
  {
    title: "SmartEntry | Visitor & Security Management Platform",
    description:
      "A full-stack visitor and security management platform for organizations. Features JWT-based authentication, visitor tracking, incident management, reporting, notifications, user administration, analytics dashboards, and role-based access through a Django REST API.",
    language: "Python / JavaScript",
    topics: [
      "django",
      "django-rest-framework",
      "javascript",
      "vite",
      "bootstrap",
      "postgresql",
      "jwt",
      "rest-api",
      "security-management",
    ],
    url: "https://github.com/Chantal-Marissa-Pande/SmartEntry",
  },
  {
    title: "Ex-change | Skill Exchange Platform",
    description:
      "A full-stack skill exchange platform with 20+ REST API endpoints supporting authentication, skill listings, real-time messaging, analytics, ratings, and recommendations. The platform was iteratively improved through usability testing and user feedback.",
    language: "Full-Stack",
    topics: [
      "react",
      "nodejs",
      "express",
      "postgresql",
      "rest-api",
      "websockets",
      "jwt",
      "user-testing",
    ],
    url: "https://github.com/Chantal-Marissa-Pande/Ex-change",
  },
  {
    title: "E-Shamba | Agricultural Marketplace",
    description:
      "A full-stack agricultural marketplace connecting Kenyan farmers with vendors and markets. Features role-based dashboards, produce management, vendor browsing, ordering, administrative approvals, and a PostgreSQL-backed REST API.",
    language: "Python / JavaScript",
    topics: [
      "react",
      "vite",
      "django",
      "django-rest-framework",
      "postgresql",
      "bootstrap",
      "rest-api",
      "agritech",
    ],
    url: "https://github.com/Chantal-Marissa-Pande/eshamba",
  },
  {
    title: "WhatsApp Clone | Desktop Messaging Application",
    description:
      "A Java desktop messaging application replicating core one-to-one chat functionality. Built with an interactive JavaFX interface and client-server communication using Java Sockets and TCP for sending and receiving messages.",
    language: "Java",
    topics: [
      "java",
      "javafx",
      "fxml",
      "tcp",
      "sockets",
      "networking",
      "desktop-app",
    ],
    url: "https://github.com/MeshackMumo03/WhatsApp_Clone",
  },
  {
    title: "Smart Tickets | Digital Event Ticketing",
    description:
      "A digital event ticketing platform designed to simplify registration and event entry through QR-code ticket validation. Developed using Flask and Google Cloud with multiple design iterations focused on usability and reliability.",
    language: "Python",
    topics: [
      "python",
      "flask",
      "google-cloud",
      "qr-code",
      "ticketing",
      "user-centered-design",
    ],
    url: "https://github.com/vostedagreat/SmartTickets",
  },
  {
    title: "SDG 5 | Data Analysis",
    description:
      "A data analysis project examining violence against women using real-world datasets. Applied data cleaning, exploratory analysis, and visualization techniques to identify patterns and communicate meaningful insights.",
    language: "Python",
    topics: [
      "python",
      "pandas",
      "numpy",
      "data-analysis",
      "visualization",
      "research",
    ],
    url: "https://colab.research.google.com/drive/1pICPIw1CLgQltJA6sYldLFd19y9hNv-G",
  },
  {
    title: "Otaku254 | Community & Content Platform",
    description:
      "A community and content platform for anime, manga, K-pop, and pop-culture enthusiasts. Features Firebase authentication, Firestore-powered content and community interactions, personalized user preferences, and theme customization, with conversational AI functionality currently under development.",
    language: "React / TypeScript",
    topics: [
      "react",
      "typescript",
      "firebase",
      "firestore",
      "authentication",
      "community-platform",
      "content-platform",
    ],
    url: "https://github.com/Chantal-Marissa-Pande/otaku254",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl text-center text-foreground mb-6 font-semibold">
            Projects
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            A selection of projects demonstrating my experience in full-stack
            development, REST APIs, real-time systems, database design,
            cloud-based applications, data analysis, and user-centered software
            development.
          </p>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                {/* Project Type */}
                <div className="mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {project.language}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-5 text-sm md:text-base leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.topics.map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
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