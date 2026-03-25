import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="border-b border-border bg-white sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary"></div>
          <span className="text-foreground">Chantal Pande</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
            Projects
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="https://github.com/Chantal-Marissa-Pande" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Github className="w-5 h-5" />
            </Button>
          </a>
          <a href="https://linkedin.com/in/chantal-pande-2b930730a" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Linkedin className="w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
