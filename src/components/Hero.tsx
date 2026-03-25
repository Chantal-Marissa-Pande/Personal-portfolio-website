import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-muted to-white py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
            Open to opportunities
          </div>
          <h1 className="text-4xl md:text-6xl text-foreground mb-6">
            Hi, I'm Chantal Marissa Pande
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Software Engineering Student & Aspiring Developer
          </p>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
            Undergraduate Software Engineering student at USIU with hands-on experience in web development, data analysis, and collaborative project management. Passionate about software innovation, problem-solving, and leveraging data-driven solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                View My Work
              </Button>
            </a>
            <a href="mailto:chantalpande123@gmail.com">
              <Button size="lg" variant="outline">
                Get In Touch
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
