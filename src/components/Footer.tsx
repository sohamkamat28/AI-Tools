import { Link } from "react-router-dom";
import { Sparkles, Github, Twitter, Linkedin } from "lucide-react";
import { categories } from "@/data/tools";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/40 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-lg">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="text-gradient">AI Tools Hub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Discover and compare the best AI tools to supercharge your workflow.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[{ label: "Home", path: "/" }, { label: "Categories", path: "/categories" }, { label: "Compare Tools", path: "/compare" }, { label: "Submit a Tool", path: "/submit" }, { label: "About", path: "/about" }, { label: "Contact", path: "/contact" }].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-muted-foreground hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Categories</h4>
            <ul className="space-y-2 text-sm">
              {categories.map((c) => (
                <li key={c.name}>
                  <Link to={`/categories?cat=${encodeURIComponent(c.name)}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {c.icon} {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-3">Get the latest AI tools delivered to your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-md bg-secondary border border-border px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
                Go
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-10 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} AI Tools Hub. Built as an academic project. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
