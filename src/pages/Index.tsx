import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, Zap, Shield, TrendingUp, Users } from "lucide-react";
import ToolCard from "@/components/ToolCard";
import { getFeaturedTools, categories, searchTools } from "@/data/tools";

const Index = () => {
  const [query, setQuery] = useState("");
  const featured = getFeaturedTools();
  const results = query ? searchTools(query) : [];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero py-24 md:py-32">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm text-primary mb-6">
            <Zap className="h-3.5 w-3.5" /> Explore 12+ curated AI tools
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
            Discover the Best <span className="text-gradient">AI Tools</span> in One Place
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Find, compare, and choose the perfect AI tools for your needs — writing, coding, design, and more.
          </p>

          {/* Search */}
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search AI tools..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-xl bg-secondary/80 border border-border pl-12 pr-4 py-3.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
            />
            {query && results.length > 0 && (
              <div className="absolute top-full mt-2 left-0 right-0 bg-card border border-border rounded-xl shadow-card overflow-hidden z-20">
                {results.slice(0, 5).map((t) => (
                  <Link
                    key={t.id}
                    to={`/tool/${t.id}`}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-secondary transition-colors"
                    onClick={() => setQuery("")}
                  >
                    <span className="text-xl">{t.logo}</span>
                    <div>
                      <p className="text-sm font-medium">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.category}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">Featured Tools</h2>
            <p className="text-sm text-muted-foreground mt-1">Hand-picked AI tools trending right now</p>
          </div>
          <Link to="/categories" className="text-sm text-primary hover:underline flex items-center gap-1">
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-2 text-center">Popular Categories</h2>
        <p className="text-sm text-muted-foreground text-center mb-10">Browse tools by what you need</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={`/categories?cat=${encodeURIComponent(cat.name)}`}
              className="group rounded-xl bg-gradient-card border border-border/50 p-5 text-center hover:border-primary/30 hover:shadow-glow transition-all duration-300"
            >
              <span className="text-3xl block mb-3">{cat.icon}</span>
              <p className="text-sm font-medium group-hover:text-primary transition-colors">{cat.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-2 text-center">Why Use AI Tools Hub?</h2>
        <p className="text-sm text-muted-foreground text-center mb-10">Everything you need in one place</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Search, title: "Easy Discovery", desc: "Find the right AI tool in seconds with powerful search and filters." },
            { icon: Shield, title: "Trusted Reviews", desc: "Curated tools with honest descriptions, features, and pricing info." },
            { icon: TrendingUp, title: "Stay Updated", desc: "Keep up with the latest AI tools and trends as they emerge." },
            { icon: Users, title: "Community Driven", desc: "Submit and share tools to help others in the AI community." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl bg-gradient-card border border-border/50 p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
