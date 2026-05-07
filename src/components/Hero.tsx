import { Button } from "./ui/button";

export default function Hero() {
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
            Software Engineer & Developer
          </p>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
            Software Engineering graduate with experience in fintech environments, backend development, APIs, and collaborative software projects. Skilled in building scalable applications using React, Node.js, PostgreSQL, and JavaScript, with exposure to enterprise technology systems during internship experience at KCB Group. Interested in product-driven technology, digital banking, and developing efficient user-focused solutions within fast-paced engineering teams.          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                View My Work
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
