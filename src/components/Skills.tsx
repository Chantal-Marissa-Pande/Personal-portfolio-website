import { Badge } from "./ui/badge";

const skillCategories = [
  {
    title: " Languages",
    skills: ["Java", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "React"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "Firebase"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "Docker", "GitHub", "VS Code", "Postman", "Figma", "Google Colab", "Android Studio"],
  },
  {
    title: "Data Analysis",
    skills: ["Excel", "Python (Pandas, NumPy)"],
  },
  {
    title: "Professional Skills",
    skills: [
      "Project Planning & Execution",
      "Team Collaboration & Leadership",
      "Communication & Presentation",
      "Research & Problem-Solving",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center text-foreground mb-6">
            Skills & Experience
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A diverse technical and professional skill set developed through academic projects and real-world experience.
          </p>

          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-border"
              >
                <h3 className="text-foreground mb-4">{category.title}</h3>
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
          <div className="mt-12 bg-white rounded-lg p-8 shadow-sm border border-border">
            <h3 className="text-foreground mb-4">Professional Experience</h3>
            <div className="space-y-6">
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-foreground">Event Organizer</h4>
                  <span className="text-muted-foreground">
                    July 2024 - August 2024
                  </span>
                </div>
                <p className="text-muted-foreground mb-2">SEED Global Education</p>
                <ul className="text-muted-foreground list-disc list-inside space-y-1">
                  <li>
                    Marketed events remotely, increasing attendance by 50%
                    (from 1000 expected to 1500-1800 attendees)
                  </li>
                  <li>Assisted over 200+ participants with registration and database entry</li>
                  <li>
                    Improved event success, leading to repeat sessions due to high
                    turnout
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-foreground">Volunteer</h4>
                  <span className="text-muted-foreground">September 2025</span>
                </div>
                <p className="text-muted-foreground mb-2">Education USA</p>
                <ul className="text-muted-foreground list-disc list-inside space-y-1">
                  <li>
                    Guided and organized flow for 7000+ event attendees, including
                    undergraduate to PhD aspirants
                  </li>
                  <li>
                    Supported representatives from Rutgers University, assisting in
                    registering 2500+ prospective students
                  </li>
                  <li>
                    Part of the team that successfully ushered the US Ambassador
                    during the event
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-foreground">Intern</h4>
                  <span className="text-muted-foreground">
                    January 2026 - April 2026
                  </span>
                </div>
                <p className="text-muted-foreground mb-2">
                  KCB Group - Strategies, Planning and Communications in the
                  Technology Division.
                </p>
                <ul className="text-muted-foreground list-disc list-inside space-y-1">
                  <li>
                    Assisting with technical planning and strategy creations and
                    solutions between the company and directors
                  </li>
                  <li>
                    Collaborating with the development team to implement new
                    features and improvements
                  </li>
                  <li>
                    Gained hands-on experience with enterprise software solutions
                    and IT operations
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mt-8 bg-white rounded-lg p-8 shadow-sm border border-border">
            <h3 className="text-foreground mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-foreground">BSc. Software Engineering</h4>
                  <span className="text-muted-foreground">2022 - 2026</span>
                </div>
                <p className="text-muted-foreground">
                  United States International University - Africa
                </p>
              </div>

              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-foreground">KCSE | Mean Grade: B</h4>
                  <span className="text-muted-foreground">2018 - 2022</span>
                </div>
                <p className="text-muted-foreground">Moi High School Kabarak</p>
              </div>
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="mt-8 bg-white rounded-lg p-8 shadow-sm border border-border">
            <h3 className="text-foreground mb-4">Certifications & Achievements</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-foreground">Microsoft Office Training</h4>
                <p className="text-muted-foreground">
                  Grahams Technical College · June 2022
                </p>
              </div>

              <div>
                <h4 className="text-foreground mb-2">Community Involvement</h4>
                <ul className="text-muted-foreground list-disc list-inside space-y-1">
                  <li>
                    Community Service at Karura Health Center - Assisted in managing
                    patient flow and supporting staff
                  </li>
                  <li>
                    Environmental Conservation - Participated in afforestation
                    projects in Nairobi
                  </li>
                  <li>
                    Volunteer at The Nest - Cared for abandoned children and young
                    mothers
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