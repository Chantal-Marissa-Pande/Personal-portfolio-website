import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary"></div>
                <span className="text-foreground">Chantal Pande</span>
              </div>
              <p className="text-muted-foreground">
                Software Engineering student passionate about creating innovative solutions and making a positive impact through technology.
              </p>
            </div>
            
            <div>
              <h4 className="text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-foreground mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span> chantalpande123@gmail.com </span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>+254 793 276 421</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Nairobi, Kenya</span>
                </div>
                <div className="flex gap-4 pt-2">
                  <a
                    href="https://linkedin.com/in/chantal-pande-2b930730a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border text-center text-muted-foreground">
            <p>© {currentYear} Chantal Marissa Pande. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
