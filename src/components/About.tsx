import { Code, Users, Lightbulb } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center text-foreground mb-6">
            About Me
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm a dedicated Software Engineering student at United States International University - Africa, 
            skilled in developing applications, leading projects, and applying technology to solve real-world problems.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-foreground mb-3">
                Software Innovation
              </h3>
              <p className="text-muted-foreground">
                Passionate about building modern web applications and exploring new technologies.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-foreground mb-3">
                Team Collaboration
              </h3>
              <p className="text-muted-foreground">
                Experienced in project management and working effectively within diverse teams.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-foreground mb-3">
                Problem Solving
              </h3>
              <p className="text-muted-foreground">
                Leveraging data-driven solutions to tackle complex challenges creatively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
