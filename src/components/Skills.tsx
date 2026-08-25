import { Badge } from "./ui/badge";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Frontend Development",
    skills: [
      "React",
      "HTML",
      "CSS",
      "Bootstrap",
      "Vite",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "Django",
      "Django REST Framework",
      "Flask",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Firebase Firestore",
      "Relational Database Design",
      "CRUD Operations",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "VS Code",
      "Figma",
      "Google Colab",
      "Android Studio",
      "Google Cloud",
    ],
  },
  {
    title: "Cloud Exposure",
    skills: [
      "Microsoft Azure",
      "AWS",
      "Google Cloud",
      "Cloud Deployment Fundamentals",
    ],
  },
  {
    title: "Software Development Practices",
    skills: [
      "Object-Oriented Programming",
      "Git Workflows",
      "Agile Methodologies",
      "Testing & Debugging",
      "Database Design",
      "CI/CD Fundamentals",
      "Secure Coding Fundamentals",
      "Software Development Lifecycle",
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Excel",
      "Data Visualization",
    ],
  },
  {
    title: "AI & Generative AI",
    skills: [
      "Generative AI",
      "Prompt Engineering",
      "ChatGPT",
      "Claude",
      "Gemini",
      "GitHub Copilot",
      "AI-Assisted Development",
    ],
  },
  {
    title: "Product & User-Centered Development",
    skills: [
      "User-Centered Design",
      "Requirements Gathering",
      "Requirements Analysis",
      "User Research",
      "Usability Testing",
      "Product Thinking",
      "Product Documentation",
      "Process Improvement",
      "Human-Computer Interaction",
      "Agile Methodologies",
    ],
  },
  {
    title: "Professional Skills",
    skills: [
      "Stakeholder Communication",
      "Stakeholder Management",
      "Cross-Functional Collaboration",
      "Problem Framing",
      "Analytical Reasoning",
      "Technical Communication",
      "Presentation Skills",
      "Workshop Facilitation",
      "Project Planning & Execution",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          {/* Section Heading */}
          <h2 className="text-3xl md:text-4xl text-center text-foreground mb-6 font-semibold">
            Skills & Experience
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Technical, software development, AI, product, and professional
            skills developed through industry experience, software engineering
            projects, and research.
          </p>

          {/* Skills Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-border"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 border-0"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Professional Experience */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Professional Experience
            </h3>

            <div className="space-y-8">

              {/* Eclectics International */}
              <div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      Software Development Intern
                    </h4>

                    <p className="text-muted-foreground">
                      Eclectics International · Products, Research & Development
                    </p>
                  </div>

                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    August 2026 – October 2026
                  </span>
                </div>

                <ul className="text-muted-foreground list-disc list-inside space-y-2 mt-3">
                  <li>
                    Developed and refine software applications within the
                    Products, Research & Development department using modern
                    development tools and frameworks.
                  </li>

                  <li>
                    Gained hands-on experience in frontend and backend
                    development, relational and non-relational databases,
                    and CRUD operations.
                  </li>

                  <li>
                    Applied object-oriented programming, Git-based version
                    control, testing, debugging, and Agile software development
                    practices.
                  </li>

                  <li>
                    Built practical knowledge of secure coding, data
                    structures, algorithms, CI/CD fundamentals, and application
                    deployment.
                  </li>

                  <li>
                    Collaborated on project-based software development while
                    strengthening technical documentation, teamwork, and
                    problem-solving skills.
                  </li>
                </ul>
              </div>

              {/* KCB Group */}
              <div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      Technology Division Intern
                    </h4>

                    <p className="text-muted-foreground">
                      KCB Group · Strategies, Planning & Communications
                    </p>
                  </div>

                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    January 2026 – April 2026
                  </span>
                </div>

                <ul className="text-muted-foreground list-disc list-inside space-y-2 mt-3">
                  <li>
                    Collaborated with cross-functional stakeholders to support
                    enterprise technology initiatives within KCB&apos;s
                    Technology Division.
                  </li>

                  <li>
                    Analysed business workflows and contributed recommendations
                    to improve operational efficiency.
                  </li>

                  <li>
                    Participated in technology planning discussions by gathering
                    information from technical and business teams.
                  </li>

                  <li>
                    Assisted in documenting technology initiatives and
                    communicating project updates across stakeholders.
                  </li>

                  <li>
                    Gained exposure to enterprise APIs, Microsoft Azure, AWS,
                    fintech infrastructure, and digital transformation
                    programmes.
                  </li>
                </ul>
              </div>

              {/* SEED Global Education */}
              <div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      Event Organizer
                    </h4>

                    <p className="text-muted-foreground">
                      SEED Global Education
                    </p>
                  </div>

                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    July 2024 – 2025
                  </span>
                </div>

                <ul className="text-muted-foreground list-disc list-inside space-y-2 mt-3">
                  <li>
                    Marketed educational events remotely, contributing to a 50%
                    increase in attendance from approximately 1,000 expected
                    attendees to 1,500–1,800.
                  </li>

                  <li>
                    Assisted more than 200 participants with registration and
                    database entry.
                  </li>

                  <li>
                    Contributed to successful event delivery, helping support
                    repeat sessions following strong turnout.
                  </li>
                </ul>
              </div>

              {/* EducationUSA */}
              <div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      Volunteer
                    </h4>

                    <p className="text-muted-foreground">
                      EducationUSA
                    </p>
                  </div>

                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    September 2025 – October 2025
                  </span>
                </div>

                <ul className="text-muted-foreground list-disc list-inside space-y-2 mt-3">
                  <li>
                    Guided and organized attendee flow for an education event
                    serving more than 7,000 participants.
                  </li>

                  <li>
                    Supported Rutgers University representatives during the
                    registration of more than 2,500 prospective students.
                  </li>

                  <li>
                    Participated in the event team responsible for ushering the
                    U.S. Ambassador.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI Experience */}
          <div className="mt-8 bg-white rounded-xl p-8 shadow-sm border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-5">
              AI Experience
            </h3>

            <ul className="text-muted-foreground list-disc list-inside space-y-2">
              <li>
                Regularly use Generative AI tools including ChatGPT, Claude,
                Gemini, and GitHub Copilot during software development.
              </li>

              <li>
                Use AI-assisted workflows to accelerate debugging,
                documentation, research, and software design.
              </li>

              <li>
                Experiment with prompt engineering to improve AI-assisted
                development workflows.
              </li>

              <li>
                Integrated recommendation functionality into Ex-change and am
                exploring conversational AI integration through ongoing
                personal software projects.
              </li>
            </ul>
          </div>

          {/* Research & Product Experience */}
          <div className="mt-8 bg-white rounded-xl p-8 shadow-sm border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-5">
              Research & Product Experience
            </h3>

            <ul className="text-muted-foreground list-disc list-inside space-y-2">
              <li>
                Conducted software requirements gathering for university
                software engineering projects.
              </li>

              <li>
                Performed literature reviews and technical research during
                project development.
              </li>

              <li>
                Evaluated user feedback during iterative software development.
              </li>

              <li>
                Applied Human-Computer Interaction principles to interface and
                workflow design.
              </li>

              <li>
                Used usability testing and user feedback to identify pain
                points and improve application workflows.
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className="mt-8 bg-white rounded-xl p-8 shadow-sm border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Education
            </h3>

            <div className="space-y-6">

              {/* University */}
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                  <h4 className="text-lg font-semibold text-foreground">
                    BSc. Software Engineering
                  </h4>

                  <span className="text-sm text-muted-foreground">
                    2022 – 2026
                  </span>
                </div>

                <p className="text-muted-foreground">
                  United States International University – Africa
                </p>

                <div className="mt-3">
                  <p className="text-sm font-medium text-foreground mb-1">
                    Relevant Coursework
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Software Engineering · Database Systems · Cloud Computing ·
                    Machine Learning · Human-Computer Interaction · Agile
                    Project Management
                  </p>
                </div>
              </div>

              {/* High School */}
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                  <h4 className="text-lg font-semibold text-foreground">
                    KCSE · Mean Grade: B
                  </h4>

                  <span className="text-sm text-muted-foreground">
                    2018 – 2022
                  </span>
                </div>

                <p className="text-muted-foreground">
                  Moi High School Kabarak
                </p>
              </div>
            </div>
          </div>

          {/* Certifications & Community */}
          <div className="mt-8 bg-white rounded-xl p-8 shadow-sm border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Certifications & Community Involvement
            </h3>

            <div className="space-y-6">

              {/* Certification */}
              <div>
                <h4 className="font-semibold text-foreground">
                  Microsoft Office Training
                </h4>

                <p className="text-muted-foreground">
                  Grahams Technical College · June 2022
                </p>
              </div>

              {/* Community */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">
                  Community Involvement
                </h4>

                <ul className="text-muted-foreground list-disc list-inside space-y-2">
                  <li>
                    Community Service at Karura Health Center — assisted with
                    patient flow and supported staff in an understaffed
                    environment.
                  </li>

                  <li>
                    Environmental Conservation — participated in afforestation
                    projects in Nairobi supporting land rehabilitation.
                  </li>

                  <li>
                    Volunteer at The Nest — supported abandoned children and
                    young mothers.
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}